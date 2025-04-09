import { db } from '@/index'; // Your Drizzle instance
import { products } from '@repo/db-ecommerce/schema/products';
import productsData from '@repo/db-ecommerce/seed/products.json';
import { sql } from 'drizzle-orm'; // Import sql and eq

// Upsert (Update or Insert) JSON data
async function upsertProducts() {
  console.log('Executing upsert operation...');
  await db
    .insert(products)
    .values(productsData)
    .onConflictDoUpdate({
      target: products.productId, // The column with the unique constraint to check for conflicts
      set: {
        categoryId: sql`excluded.category_id`,
        collectionId: sql`excluded.collection_id`,
      },
    });

  console.log('Products upserted successfully.');
}

// Run the upsert function
upsertProducts();
