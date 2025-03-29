import { db } from '@repo/db-commerce'; // Your Drizzle instance
import { products } from '@repo/db-commerce/schema/products';
import productsData from '@repo/db-commerce/seed/products.json';

// Insert JSON data
async function insertProducts() {
  console.log('Inserting products...');
  await db.insert(products).values(productsData);
  console.log('Products inserted successfully.');
}

insertProducts();
