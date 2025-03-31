import { db } from '@/index'; // Your Drizzle instance
import { productImages } from '@repo/db-ecommerce/schema/product-images';
import data from '@repo/db-ecommerce/seed/product-images.json';

// Insert JSON data
async function insert() {
  console.log('Inserting images...');
  await db.insert(productImages).values(data);
  console.log('Images inserted successfully.');
}

insert();
