import { productReviews } from '@repo/db-ecommerce/schema/product-reviews';
import { relations } from 'drizzle-orm';
import {
  pgSchema, // Import pgSchema to reference the 'auth' schema
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

// --- Supabase Auth Schema Reference ---
// We define a minimal reference to Supabase's auth.users table
// primarily to establish the foreign key relationship in Drizzle.
// You DON'T manage this table yourself; Supabase does.
export const authSchema = pgSchema('auth');

export const authUsers = authSchema.table('users', {
  id: uuid('id').primaryKey(), // The Supabase Auth user UUID
  // Supabase manages other columns like email, created_at etc. here
});

// --- Your Public User Profile Table ---
export const users = pgTable('users', {
  // This ID MUST match the Supabase Auth user's ID.
  // It's both the Primary Key for this table and a Foreign Key
  // referencing the auth.users table.
  id: uuid('id')
    .primaryKey()
    .references(() => authUsers.id, {
      onDelete: 'cascade', // Optional: if the auth user is deleted, delete the profile
      onUpdate: 'cascade',
    }),

  // Application-specific user details
  fullName: text('full_name'), // Or separate first_name, last_name
  avatarUrl: text('avatar_url'), // Can store a link to an uploaded image or one from the auth provider

  // Foreign keys to other potential tables (optional examples)
  // billingAddressId: uuid('billing_address_id').references(() => addresses.id),
  // shippingAddressId: uuid('shipping_address_id').references(() => addresses.id),

  // Timestamps
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
