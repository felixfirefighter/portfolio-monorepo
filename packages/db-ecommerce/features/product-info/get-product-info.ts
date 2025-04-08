import { db } from '@/index';
import { productInfo } from '@/schema/product-info';
import { products } from '@/schema/products';
import { eq } from 'drizzle-orm';

export type GetProductInfoRequest = {
  productId: string;
};

export type GetProductInfo = {
  productId: string;
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
      productId: productInfo.productId,
      title: productInfo.title,
      description: productInfo.description,
    })
    .from(productInfo)
    .where(eq(products.productId, productId));

  return {
    results,
  };
};
