import { sql } from 'drizzle-orm';
import type { InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Collections Table
export const collections = pgTable('collections', {
  id: serial('id').primaryKey(),
  collectionId: text('collection_id').unique(),
  name: text('name').unique().notNull(),
  description: text('description').notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});

export type Collection = InferSelectModel<typeof collections>; // Read type (select)
