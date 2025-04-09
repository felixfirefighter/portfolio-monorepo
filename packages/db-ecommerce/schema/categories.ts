import { sql } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Categories Table
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  categoryId: text('category_id').unique().notNull(), // Unique category identifier
  name: text('name').unique().notNull(),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});
