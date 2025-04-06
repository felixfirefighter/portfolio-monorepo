import { db } from '@repo/db-ecommerce';
import { inventory } from '@repo/db-ecommerce/schema/inventory';
import { productImages } from '@repo/db-ecommerce/schema/product-images';
import { products } from '@repo/db-ecommerce/schema/products';
import { type AnyColumn, type SQL, asc, desc, eq, sql } from 'drizzle-orm';

export type GetProductsRequest = {
  orderBy?: keyof typeof products | keyof typeof inventory; // Column to order by
  orderDirection?: 'asc' | 'desc'; // Sorting direction
  limit?: number;
  offset?: number;
};

export type GetProductItem = {
  colors: string[];
  createdAt: string;
  productId: string;
  salePrice: number | null;
  listPrice: number | null;
  name: string;
  imageUrl: string | null;
};

export type GetProductsResponse = {
  products: GetProductItem[];
};

export const getProducts = async (
  request: GetProductsRequest
): Promise<GetProductsResponse> => {
  const {
    orderBy = 'createdAt',
    orderDirection = 'desc',
    limit = 8,
    offset = 0,
  } = request;

  // CTE 1: Aggregate all distinct non-null colors for each product
  const allProductColors = db.$with('all_product_colors').as(
    db
      .select({
        productId: inventory.productId,
        // Use array_agg(DISTINCT ...) to get an array of unique colors.
        // FILTER clause avoids including NULLs if inventory.color can be null.
        colors: sql<
          string[]
        >`array_agg(distinct ${inventory.color}) filter (where ${inventory.color} is not null)`.as(
          'colors'
        ),
      })
      .from(inventory)
      .groupBy(inventory.productId)
  );

  // IMPORTANT: We select all necessary fields here, including the ones needed for the FINAL sorting (like createdAt)
  const rankedProducts = db.$with('ranked_products').as(
    db
      .with(allProductColors) // Make the color CTE available *within* this CTE
      .selectDistinctOn([products.productId], {
        // Select all fields needed for the final output AND final sorting
        productId: products.productId,
        name: products.name,
        salePrice: inventory.salePrice,
        listPrice: inventory.listPrice,
        imageUrl: productImages.imageUrl,
        colors: sql<string[]>`coalesce(${allProductColors.colors}, '{}')`.as(
          'colors'
        ),
        // *** Include the column needed for the final sort ***
        createdAt: products.createdAt,
      })
      .from(products)
      .leftJoin(inventory, eq(products.productId, inventory.productId))
      .leftJoin(productImages, eq(products.productId, productImages.productId))
      .leftJoin(
        allProductColors,
        eq(products.productId, allProductColors.productId)
      )
      .where(sql`${inventory.id} is not null`)
      // *** INNER ORDER BY for DISTINCT ON logic (DO NOT CHANGE LIGHTLY) ***
      .orderBy(
        asc(products.productId),
        asc(inventory.salePrice),
        asc(inventory.id),
        asc(productImages.id) // Consistent image selection
      )
  );

  try {
    let orderByColumn: AnyColumn | SQL = rankedProducts.createdAt;
    switch (orderBy) {
      case 'name':
        // Note: We need to reference the column from the CTE's perspective if selecting * from it.
        // If selecting named fields, ensure 'name' is selected in the final select.
        orderByColumn = rankedProducts.name; // Assuming 'name' is selected from rankedProducts
        break;
      case 'salePrice':
        orderByColumn = rankedProducts.salePrice; // Assuming 'salePrice' is selected
        break;
      default:
        orderByColumn = rankedProducts.createdAt; // Assuming 'createdAt' is selected
        break;
    }

    const direction = orderDirection === 'asc' ? asc : desc;

    // Final Query: Select from the CTE and apply final ordering and pagination
    const products = await db
      .with(allProductColors, rankedProducts) // Make CTEs available
      .select() // Select all columns defined in the rankedProducts CTE
      .from(rankedProducts)
      .orderBy(direction(orderByColumn))
      .limit(limit)
      .offset(offset);

    return {
      products,
    };
  } catch (err) {
    console.error('ERROR', err);
    return {
      products: [],
    };
  }
};
