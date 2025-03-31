import { db } from '@repo/db-ecommerce';
import { productImages } from '@repo/db-ecommerce/schema/product-images';
import {
  type ProductWithImages,
  products,
} from '@repo/db-ecommerce/schema/products';
import { type AnyColumn, asc, desc, eq } from 'drizzle-orm';

export type GetProductsProps = {
  orderBy?: keyof typeof products; // Column to order by
  orderDirection?: 'asc' | 'desc'; // Sorting direction
  limit?: number;
  offset?: number;
};

export const getProducts = async (props: GetProductsProps) => {
  const {
    orderBy = 'createdAt',
    orderDirection = 'desc',
    limit = 10,
    offset = 0,
  } = props;
  const column = products[orderBy] as AnyColumn;

  const productsWithImagesRaw = await db
    .select()
    .from(products)
    .leftJoin(productImages, eq(products.productId, productImages.productId))
    .orderBy(orderDirection === 'asc' ? asc(column) : desc(column))
    .limit(limit)
    .offset(offset);

  const productsWithImages: ProductWithImages[] = productsWithImagesRaw.reduce(
    (acc, item) => {
      const existingProduct = acc.find(
        (p) => p.productId === item.products.productId
      );

      if (existingProduct) {
        if (item.product_images?.imageUrl) {
          existingProduct.images.push(item.product_images);
        }
      } else {
        acc.push({
          ...item.products,
          images: item.product_images ? [item.product_images] : [],
        });
      }

      return acc;
    },
    [] as ProductWithImages[]
  );
  return productsWithImages;
};
