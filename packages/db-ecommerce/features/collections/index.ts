import { db } from '@repo/db-ecommerce';
import { collections } from '@repo/db-ecommerce/schema/collections';

export const getCollections = async () => {
  return await db.select().from(collections);
};
