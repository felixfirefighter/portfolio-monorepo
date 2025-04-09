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
        // Specify which columns to update if a conflict occurs
        name: sql`excluded.name`, // Use value from the row that would have been inserted
        description: sql`excluded.description`,
        categoryId: sql`excluded.category_id`, // Use correct column name if different
        collectionId: sql`excluded.collection_id`, // Use correct column name if different
        // IMPORTANT: Do NOT update createdAt here, otherwise, it will be overwritten on every update.
        // The default value `sql`now()` only applies on initial insertion if not provided in `values`.
        // If you had an `updatedAt` column, you would update it here:
        // updatedAt: sql`now()`,
      },
    });

  console.log('Products upserted successfully.');
}

// Run the upsert function
upsertProducts();
