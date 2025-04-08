import { db } from '@/index';
import { productReviews } from '@/schema/product-reviews';
import { avg, count, eq } from 'drizzle-orm';

export type GetProductReviewSummaryRequest = {
  productId: string;
};

export type GetProductReviewSummaryResponse = {
  averageRating: number;
  reviewCount: number;
};

export const getProductReviewSummary = async (
  request: GetProductReviewSummaryRequest
): Promise<GetProductReviewSummaryResponse> => {
  const { productId } = request;
  const result = await db
    .select({
      averageRating: avg(productReviews.rating).as('average_rating'),
      reviewCount: count(productReviews.id).as('review_count'),
    })
    .from(productReviews)
    .where(eq(productReviews.productId, productId))
    .groupBy(productReviews.productId)
    .limit(1);

  const summary = result[0];
  return {
    averageRating: summary.averageRating
      ? Number.parseFloat(summary.averageRating)
      : 0,
    reviewCount: summary.reviewCount,
  };
};
