import { products } from '@repo/db-ecommerce/schema/products';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

// Product Variants Table
export const productVariants = pgTable('product_variants', {
  id: serial('id').primaryKey(),
  productId: integer('product_id')
    .references(() => products.id)
    .notNull(),
  sku: text('sku').notNull().unique(), // Unique identifier for each variant
  variantName: text('variant_name').notNull(),
});
