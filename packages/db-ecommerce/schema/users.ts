import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

// --- Your Public User Profile Table ---
export const users = pgTable('users', {
  // This ID MUST match the Supabase Auth user's ID.
  id: uuid('id').primaryKey(),
  userId: text('user_id').notNull().unique(),

  // Application-specific user details
  name: text('name'),
  avatarUrl: text('avatar_url'),

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
