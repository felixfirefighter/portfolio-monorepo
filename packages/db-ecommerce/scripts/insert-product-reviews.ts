import { db } from '@repo/db-ecommerce/index';
import { productReviews } from '@repo/db-ecommerce/schema/product-reviews';
import data from '@repo/db-ecommerce/seed/product-reviews.json';

// Insert JSON data
async function insert() {
  console.log('Inserting product reviews...');
  await db.insert(productReviews).values(data);
  console.log('Product reviews inserted successfully.');
}

insert();
