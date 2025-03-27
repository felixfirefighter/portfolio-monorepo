import { pgTable, serial, text } from 'drizzle-orm/pg-core';

// Collections Table
export const collections = pgTable('collections', {
  id: serial('id').primaryKey(),
  name: text('name').unique().notNull(),
});
