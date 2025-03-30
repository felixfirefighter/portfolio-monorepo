import { db } from '@repo/db-ecommerce';
import { products } from '@repo/db-ecommerce/schema/products';

export async function getAllProducts() {
  return await db.select().from(products);
}
