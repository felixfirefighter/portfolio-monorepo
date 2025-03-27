import { numeric, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Coupons Table
export const coupons = pgTable('coupons', {
  id: serial('id').primaryKey(),
  code: text('code').unique().notNull(),
  discount: numeric('discount').notNull(), // Discount percentage
  validUntil: timestamp('valid_until'),
});
