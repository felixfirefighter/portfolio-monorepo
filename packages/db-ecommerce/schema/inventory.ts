import { products } from '@repo/db-ecommerce/schema/products';
import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const inventory = pgTable('inventory', {
  id: serial('id').primaryKey(),
  sku: text('sku').notNull().unique(),
  productId: text('product_id')
    .references(() => products.productId)
    .notNull(),
  stock: integer('stock').notNull().default(0), // Available stock
  sold: integer('sold').notNull().default(0), // Units sold
  reserved: integer('reserved').notNull().default(0), // Items in active carts (optional)
  salePrice: integer('sale_price').notNull().default(0),
  discount: integer('discount'),
  listPrice: integer('list_price').notNull().default(0),
  discountPercentage: integer('discount_percentage'),
  size: varchar('size', { length: 20 }),
  color: varchar('color', { length: 50 }),
});

export const inventoryRelations = relations(inventory, ({ one }) => ({
  product: one(products),
}));
