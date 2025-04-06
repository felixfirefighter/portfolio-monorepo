import { db } from '@/index'; // Your Drizzle instance
import { productReviews } from '@/schema/product-reviews';
import data from '@repo/db-ecommerce/seed/product-reviews.json';

// Insert JSON data
async function insert() {
  console.log('Inserting product reviews...');
  await db.insert(productReviews).values(data);
  console.log('Inventory inserted successfully.');
}

insert();
