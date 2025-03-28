import { categories } from '@/schema/categories';
import { collections } from '@/schema/collections';
import { sql } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Products Table
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  productId: text('product_id').unique().notNull(), // Unique product identifier
  name: text('name').notNull(),
  description: text('description'),
  categoryId: integer('category_id').references(() => categories.id),
  collectionId: integer('collection_id').references(() => collections.id),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});
