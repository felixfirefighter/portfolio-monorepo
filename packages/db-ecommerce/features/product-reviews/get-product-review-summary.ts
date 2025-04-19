import { db } from '@repo/db-ecommerce/index';
import { productReviews } from '@repo/db-ecommerce/schema/product-reviews';
import { avg, count, eq } from 'drizzle-orm';

export type GetProductReviewSummaryRequest = {
  productId: string;
};

export type ProductReviewSummary = {
  averageRating: number;
  reviewCount: number;
};

export type GetProductReviewSummaryResponse = ProductReviewSummary;

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
  if (!summary) {
    return {
      averageRating: 0,
      reviewCount: 0,
    };
  }

  return {
    averageRating: summary.averageRating
      ? Number.parseFloat(summary.averageRating)
      : 0,
    reviewCount: summary.reviewCount,
  };
};
