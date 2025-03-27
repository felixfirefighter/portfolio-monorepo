import { products } from '@/schema/products';
import { integer, numeric, pgTable, serial, text } from 'drizzle-orm/pg-core';

// Product Variants Table
export const productVariants = pgTable('product_variants', {
  id: serial('id').primaryKey(),
  productId: integer('product_id')
    .references(() => products.id)
    .notNull(),
  variantName: text('variant_name').notNull(), // e.g., "Red / Large"
  price: numeric('price').notNull(),
  stock: integer('stock').notNull(),
});
