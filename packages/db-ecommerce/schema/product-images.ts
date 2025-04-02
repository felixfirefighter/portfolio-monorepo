import { products } from '@repo/db-ecommerce/schema/products';
import type { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const productImages = pgTable('product_images', {
  id: serial('id').primaryKey(),
  productId: text('product_id')
    .references(() => products.productId)
    .notNull(),
  imageUrl: text('image_url').notNull(),
  color: varchar('color', { length: 50 }),
});

export type ProductImage = InferSelectModel<typeof productImages>; // Read type (select)
