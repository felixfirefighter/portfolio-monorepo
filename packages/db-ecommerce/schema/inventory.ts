import { productVariants } from '@repo/db-ecommerce/schema/product-variants';
import { sql } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const inventory = pgTable('inventory', {
  id: serial('id').primaryKey(),
  variantSku: text('variant_sku')
    .references(() => productVariants.sku)
    .notNull()
    .unique(),
  stock: integer('stock').notNull().default(0), // Available stock
  sold: integer('sold').notNull().default(0), // Units sold
  reserved: integer('reserved').notNull().default(0), // Items in active carts (optional)
  lastRestockedAt: timestamp('last_restocked_at', { mode: 'string' })
    .notNull()
    .default(sql`now()`),
});
