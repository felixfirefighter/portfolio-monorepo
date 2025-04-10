import { db } from '@repo/db-ecommerce/index';
import { products } from '@repo/db-ecommerce/schema/products';
import { eq } from 'drizzle-orm';

export type GetProductRequest = {
  productId: string;
};

export type GetProduct = {
  productId: string;
  name: string;
  description: string;
};

export type GetProductResponse = {
  result: GetProduct;
};

export const getProduct = async (
  request: GetProductRequest
): Promise<GetProductResponse> => {
  const { productId } = request;
  const results = await db
    .select({
      productId: products.productId,
      name: products.name,
      description: products.description,
    })
    .from(products)
    .where(eq(products.productId, productId))
    .limit(1);

  return {
    result: results[0],
  };
};
