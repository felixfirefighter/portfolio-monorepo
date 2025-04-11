import { db } from '@repo/db-ecommerce/index';
import { productInfo } from '@repo/db-ecommerce/schema/product-info';
import { eq } from 'drizzle-orm';

export type GetProductInfoRequest = {
  productId: string;
};

export type GetProductInfo = {
  title: string;
  description: string[];
};

export type GetProductInfoResponse = {
  results: GetProductInfo[];
};

export const getProductInfo = async (
  request: GetProductInfoRequest
): Promise<GetProductInfoResponse> => {
  const { productId } = request;
  const results = await db
    .select({
      title: productInfo.title,
      description: productInfo.description,
    })
    .from(productInfo)
    .where(eq(productInfo.productId, productId));

  return {
    results,
  };
};
