import { products } from '@repo/db-ecommerce/schema/products';
import { users } from '@repo/db-ecommerce/schema/users';
import { sql } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const productReviews = pgTable('product_reviews', {
  id: serial('id').primaryKey(),
  productId: text('product_id')
    .references(() => products.productId)
    .notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.userId, {
      onDelete: 'cascade', // If the user profile is deleted, delete their reviews
      onUpdate: 'cascade',
    }),
  rating: integer('rating').notNull().default(5), // 1-5 star rating
  content: text('content'),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});
