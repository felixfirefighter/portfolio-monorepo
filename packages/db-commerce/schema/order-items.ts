import { orders } from '@/schema/orders';
import { productVariants } from '@/schema/product-variants';
import { integer, numeric, pgTable, serial } from 'drizzle-orm/pg-core';

// Order Items Table
export const orderItems = pgTable('order_items', {
  id: serial('id').primaryKey(),
  orderId: integer('order_id')
    .references(() => orders.id)
    .notNull(),
  productVariantId: integer('product_variant_id')
    .references(() => productVariants.id)
    .notNull(),
  quantity: integer('quantity').notNull(),
  price: numeric('price').notNull(),
});
