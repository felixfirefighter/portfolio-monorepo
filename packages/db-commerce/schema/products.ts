import { categories } from '@/schema/categories';
import { collections } from '@/schema/collections';
import {
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';

// Products Table
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: numeric('price').notNull(),
  stock: integer('stock').notNull(),
  categoryId: integer('category_id').references(() => categories.id),
  collectionId: integer('collection_id').references(() => collections.id),
  createdAt: timestamp('created_at').defaultNow(),
});
