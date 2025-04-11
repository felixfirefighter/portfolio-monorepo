import {
  type InventoryItem,
  getInventory,
} from '@repo/db-ecommerce/features/inventory/get-inventory';
import {
  type ProductImageItem,
  getProductImages,
} from '@repo/db-ecommerce/features/product-images/get-product-images';
import {
  type GetProductInfo,
  getProductInfo,
} from '@repo/db-ecommerce/features/product-info/get-product-info';
import {
  type ProductReviewSummary,
  getProductReviewSummary,
} from '@repo/db-ecommerce/features/product-reviews/get-product-review-summary';
import { getProduct } from '@repo/db-ecommerce/features/products/get-product';

export type GetProductOverviewRequest = {
  productId: string;
};

export type ProductOverview = {
  productId: string;
  name: string;
  productInfo: GetProductInfo[];
  inventory: InventoryItem[];
  images: ProductImageItem[];
  reviews: ProductReviewSummary;
  availableColors: string[];
  availableSizes: string[];
};

export type GetProductOverviewResponse = {
  result: ProductOverview;
};

export const getProductOverview = async (
  request: GetProductOverviewRequest
) => {
  const { productId } = request;

  try {
    // Run queries concurrently for potentially better performance
    const [coreDetails, productInfo, inventory, images, reviewSummary] =
      await Promise.all([
        getProduct({ productId }),
        getProductInfo({ productId }),
        getInventory({ productId }),
        getProductImages({ productId }),
        getProductReviewSummary({ productId }),
      ]);

    const result = {
      productId: coreDetails.result.productId,
      name: coreDetails.result.name,
      productInfo: productInfo.results,
      inventory: inventory.results,
      images: images.results,
      reviews: {
        averageRating: reviewSummary.averageRating,
        count: reviewSummary.reviewCount,
      },
      availableColors: [
        ...new Set(inventory.results.map((item) => item.color).filter(Boolean)),
      ],
      availableSizes: [
        ...new Set(inventory.results.map((item) => item.size).filter(Boolean)),
      ],
    };

    return {
      result,
    };
  } catch (error) {
    console.error('Failed to fetch product details:', error);
    // Handle error appropriately (e.g., throw, return error object)
    throw new Error('Could not load product data.');
  }
};
