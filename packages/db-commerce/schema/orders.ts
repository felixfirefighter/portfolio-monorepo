import { users } from '@/schema/users';
import { sql } from 'drizzle-orm';
import {
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

// Orders Table
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id')
    .references(() => users.id)
    .notNull(),
  totalAmount: numeric('total_amount').notNull(),
  status: text('status').default('pending'), // pending, completed, cancelled
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});
