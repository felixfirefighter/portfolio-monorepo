import { products } from '@/schema/products';
import { sql } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const productReviews = pgTable('product_reviews', {
  id: serial('id').primaryKey(),
  productId: text('product_id')
    .references(() => products.productId)
    .notNull(),
  userId: text('user_id').notNull(),
  rating: integer('rating').notNull().default(5), // 1-5 star rating
  content: text('content'),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});
