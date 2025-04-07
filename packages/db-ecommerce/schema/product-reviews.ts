import { products } from '@repo/db-ecommerce/schema/products';
import { users } from '@repo/db-ecommerce/schema/users';
import { relations, sql } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const productReviews = pgTable('product_reviews', {
  id: serial('id').primaryKey(),
  productId: text('product_id')
    .references(() => products.productId)
    .notNull(),
  userId: serial('user_id')
    .notNull()
    .references(() => users.id, {
      onDelete: 'cascade', // If the user profile is deleted, delete their reviews
      onUpdate: 'cascade',
    }),
  rating: integer('rating').notNull().default(5), // 1-5 star rating
  content: text('content'),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});

// --- Define Relationships for the Product Reviews Table ---
export const productReviewsRelations = relations(productReviews, ({ one }) => ({
  // Each review belongs to one user
  user: one(users, {
    fields: [productReviews.userId],
    references: [users.id],
  }),
  // Each review could belong to one product
  product: one(products, {
    fields: [productReviews.productId],
    references: [products.productId],
  }),
}));
