import { db } from '@repo/db-ecommerce/index';
import { productImages } from '@repo/db-ecommerce/schema/product-images';
import { eq } from 'drizzle-orm';

export type GetProductImagesRequest = {
  productId: string;
};

export type ProductImageItem = {
  imageUrl: string;
  color: string | null;
};

export type GetProductImagesResponse = {
  results: ProductImageItem[];
};

export const getProductImages = async (
  request: GetProductImagesRequest
): Promise<GetProductImagesResponse> => {
  const { productId } = request;
  const results = await db
    .select({
      imageUrl: productImages.imageUrl,
      color: productImages.color,
    })
    .from(productImages)
    .where(eq(productImages.productId, productId));

  return {
    results,
  };
};
