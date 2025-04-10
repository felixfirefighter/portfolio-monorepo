import { db } from '@repo/db-ecommerce/index';
import { collections } from '@repo/db-ecommerce/schema/collections';
import collectionsData from '@repo/db-ecommerce/seed/collections.json';

// Insert JSON data
async function insert() {
  console.log('Inserting collections...');
  await db.insert(collections).values(collectionsData);
  console.log('Collections inserted successfully.');
}

insert();
