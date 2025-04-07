import { productReviews } from '@repo/db-ecommerce/schema/product-reviews';
import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

// --- Your Public User Profile Table ---
export const users = pgTable('users', {
  // This ID MUST match the Supabase Auth user's ID.
  id: uuid('id').primaryKey(),

  // Application-specific user details
  firstName: text('first_name'),
  lastName: text('last_name'),

  // Foreign keys to other potential tables (optional examples)
  // billingAddressId: uuid('billing_address_id').references(() => addresses.id),
  // shippingAddressId: uuid('shipping_address_id').references(() => addresses.id),

  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  // A user can have many product reviews
  productReviews: many(productReviews),
  // A user might have many orders, addresses etc. (example)
  // orders: many(orders),
  // addresses: many(addresses),
}));
