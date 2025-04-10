import { db } from '@repo/db-ecommerce/index';
import { inventory } from '@repo/db-ecommerce/schema/inventory';
import { eq } from 'drizzle-orm';

export type GetInventoryRequest = {
  productId: string;
};

export type InventoryItem = {
  sku: string;
  stock: number;
  sold: number;
  salePrice: number;
  listPrice: number;
  discountPercentage: number | null;
  size: string | null;
  color: string | null;
};

export type GetInventoryResponse = {
  results: InventoryItem[];
};

export const getInventory = async (
  request: GetInventoryRequest
): Promise<GetInventoryResponse> => {
  const { productId } = request;
  const results = await db
    .select({
      sku: inventory.sku,
      stock: inventory.stock,
      sold: inventory.sold,
      salePrice: inventory.salePrice,
      listPrice: inventory.listPrice,
      discountPercentage: inventory.discountPercentage,
      size: inventory.size,
      color: inventory.color,
    })
    .from(inventory)
    .where(eq(inventory.productId, productId));

  return {
    results,
  };
};
