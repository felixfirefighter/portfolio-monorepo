import { productVariants } from '@repo/db-ecommerce/schema/product-variants';
import { users } from '@repo/db-ecommerce/schema/users';
import { integer, pgTable, serial, uuid } from 'drizzle-orm/pg-core';

// Cart Table
export const carts = pgTable('cart', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id')
    .references(() => users.id)
    .notNull(),
  productVariantId: integer('product_variant_id')
    .references(() => productVariants.id)
    .notNull(),
  quantity: integer('quantity').notNull(),
});
