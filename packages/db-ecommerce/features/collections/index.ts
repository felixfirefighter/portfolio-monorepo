import { db } from '@repo/db-ecommerce';
import { collections } from '@repo/db-ecommerce/schema/collections';

export async function getAllCollections() {
  return await db.select().from(collections);
}
