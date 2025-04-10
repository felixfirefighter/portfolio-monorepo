import { categories } from '@repo/db-ecommerce/schema/categories';
import { collections } from '@repo/db-ecommerce/schema/collections';
import { type InferSelectModel, sql } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Products Table
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  productId: text('product_id').unique().notNull(), // Unique product identifier
  name: text('name').notNull(),
  description: text('description').notNull(),
  categoryId: text('category_id').references(() => categories.categoryId),
  collectionId: text('collection_id').references(
    () => collections.collectionId
  ),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});

export type Product = InferSelectModel<typeof products>; // Read type (select)

export type ProductWithDetails = Product & {
  listPrice: number | null;
  salePrice: number | null;
  discount: number | null;
  discountPercentage: number | null;
  stock: number | null;
  images: string[]; // Since we are using array_agg, images should be an array
};
