import { db } from '@repo/db-commerce'; // Your Drizzle instance
import { collections } from '@repo/db-commerce/schema/collections';
import collectionsData from '@repo/db-commerce/seed/collections.json';

// Insert JSON data
async function insert() {
  console.log('Inserting collections...');
  await db.insert(collections).values(collectionsData);
  console.log('Collections inserted successfully.');
}

insert();
