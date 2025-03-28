import { sql } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Collections Table
export const collections = pgTable('collections', {
  id: serial('id').primaryKey(),
  name: text('name').unique().notNull(),
  description: text('description').notNull(),
  image_url: text('image_url').notNull(),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});
