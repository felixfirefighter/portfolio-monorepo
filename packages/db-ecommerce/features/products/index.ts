import { db } from '@repo/db-ecommerce';
import { inventory } from '@repo/db-ecommerce/schema/inventory';
import { productImages } from '@repo/db-ecommerce/schema/product-images';
import {
  type ProductWithDetails,
  products,
} from '@repo/db-ecommerce/schema/products';
import { type AnyColumn, asc, desc, eq, sql } from 'drizzle-orm';

export type GetProductsProps = {
  orderBy?: keyof typeof products; // Column to order by
  orderDirection?: 'asc' | 'desc'; // Sorting direction
  limit?: number;
  offset?: number;
};

export const getProducts = async (
  props: GetProductsProps
): Promise<ProductWithDetails[]> => {
  const {
    orderBy = 'createdAt',
    orderDirection = 'desc',
    limit = 10,
    offset = 0,
  } = props;
  const orderDirectionFn = orderDirection === 'desc' ? desc : asc;

  const result = await db
    .select({
      id: products.id,
      productId: products.productId,
      name: products.name,
      description: products.description,
      categoryId: products.categoryId,
      collectionId: products.collectionId,
      createdAt: products.createdAt,
      listPrice: inventory.listPrice,
      salePrice: inventory.salePrice,
      discount: inventory.discount,
      discountPercentage: inventory.discountPercentage,
      stock: inventory.stock,
      images: sql<string[]>`array_agg(${productImages.imageUrl})`.as('images'),
    })
    .from(products)
    .innerJoin(inventory, eq(products.productId, inventory.productId))
    .innerJoin(productImages, eq(products.productId, productImages.productId))
    .groupBy(
      products.id,
      products.productId,
      products.name,
      products.description,
      products.categoryId,
      products.collectionId,
      products.createdAt,
      inventory.listPrice,
      inventory.salePrice,
      inventory.discount,
      inventory.discountPercentage,
      inventory.stock
    )
    .orderBy(orderDirectionFn(products[orderBy] as AnyColumn)) // Dynamic ordering
    .limit(limit)
    .offset(offset);

  console.log('products', result);

  return result;
};
