import { db } from '@/index'; // Your Drizzle instance
import { categories } from '@repo/db-ecommerce/schema/categories'; // Assuming you have this schema
import { collections } from '@repo/db-ecommerce/schema/collections'; // Assuming you have this schema
import { type Product, products } from '@repo/db-ecommerce/schema/products';
import productsData from '@repo/db-ecommerce/seed/products.json';
import { sql } from 'drizzle-orm'; // Import sql and eq

type ProductInsertData = Omit<Product, 'id' | 'createdAt'> & {
  createdAt?: string;
};

type ProductSeedData = {
  productId: string;
  name: string;
  description: string;
  category: string;
  collection: string;
  createdAt?: string;
};

// Upsert (Update or Insert) JSON data
async function upsertProducts() {
  console.log('Starting product upsert process...');

  try {
    // 1. Fetch existing categories and collections to map names to IDs
    console.log('Fetching categories and collections...');
    const allCategories = await db.select().from(categories);
    const allCollections = await db.select().from(collections);

    // Create maps for quick lookups
    const categoryMap = new Map(
      allCategories.map((c) => [c.name.toLowerCase(), c.id])
    );
    const collectionMap = new Map(
      allCollections.map((c) => [c.name.toLowerCase(), c.id])
    );
    console.log(
      `Found ${categoryMap.size} categories and ${collectionMap.size} collections.`
    );

    // 2. Process the JSON data to include foreign key IDs
    const processedProductsData: ProductInsertData[] = [];
    for (const productJson of productsData as ProductSeedData[]) {
      const categoryNameLower = productJson.category.toLowerCase();
      const collectionNameLower = productJson.collection.toLowerCase();

      const categoryId = categoryMap.get(categoryNameLower);
      const collectionId = collectionMap.get(collectionNameLower);

      if (categoryId === undefined) {
        console.warn(
          `WARN: Category "${productJson.category}" not found for product "${productJson.productId}". Skipping this product.`
        );
        continue; // Skip this product or throw an error
      }
      if (collectionId === undefined) {
        console.warn(
          `WARN: Collection "${productJson.collection}" not found for product "${productJson.productId}". Skipping this product.`
        );
        continue; // Skip this product or throw an error
      }

      processedProductsData.push({
        productId: productJson.productId,
        name: productJson.name,
        description: productJson.description,
        categoryId: categoryId,
        collectionId: collectionId,
        // Only include createdAt if you want to set it specifically for *new* records from the JSON.
        // If omitted for new records, the default `sql`now()` will be used.
        // For *updated* records, `createdAt` will NOT be changed by the logic below.
        ...(productJson.createdAt && { createdAt: productJson.createdAt }),
      });
    }

    if (processedProductsData.length === 0) {
      console.log(
        'No products to process after mapping categories/collections.'
      );
      return;
    }

    console.log(
      `Processed ${processedProductsData.length} products for upsert.`
    );

    // 3. Perform the Upsert operation
    console.log('Executing upsert operation...');
    await db
      .insert(products)
      .values(processedProductsData)
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
  } catch (error) {
    console.error('Error during product upsert:', error);
    // Depending on your setup, you might want to exit the process
    // process.exit(1);
  }
}

// Run the upsert function
upsertProducts();
