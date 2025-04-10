import { products } from '@repo/db-ecommerce/schema/products';
import { jsonb, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const productInfo = pgTable('product_info', {
  id: serial('id').primaryKey(),
  productId: text('product_id')
    .references(() => products.productId, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    })
    .notNull(),
  title: text('title').notNull(),

  // The array of description strings, stored as JSONB for flexibility and efficiency.
  // .$type<string[]>() provides TypeScript type safety for the column.
  description: jsonb('description').$type<string[]>().notNull(),
});
