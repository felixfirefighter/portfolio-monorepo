import { coupons } from '@repo/db-ecommerce/schema/coupons';
import { orders } from '@repo/db-ecommerce/schema/orders';
import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';

// Order Coupons Table (Many-to-Many)
export const orderCoupons = pgTable(
  'order_coupons',
  {
    orderId: integer('order_id')
      .references(() => orders.id)
      .notNull(),
    couponId: integer('coupon_id')
      .references(() => coupons.id)
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.orderId, table.couponId] }),
  })
);
