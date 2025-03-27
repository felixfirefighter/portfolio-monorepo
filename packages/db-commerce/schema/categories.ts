import { pgTable, serial, text } from 'drizzle-orm/pg-core';

// Categories Table
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name').unique().notNull(),
});
