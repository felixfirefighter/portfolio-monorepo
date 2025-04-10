import { db } from '@repo/db-ecommerce/index';
import { collections } from '@repo/db-ecommerce/schema/collections';

export const getCollections = async () => {
  return await db.select().from(collections);
};
