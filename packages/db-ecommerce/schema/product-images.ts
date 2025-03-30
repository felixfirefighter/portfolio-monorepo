import { productVariants } from '@repo/db-ecommerce/schema/product-variants';
import { products } from '@repo/db-ecommerce/schema/products';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const productImages = pgTable('product_images', {
  id: serial('id').primaryKey(),
  productId: text('product_id')
    .references(() => products.productId)
    .notNull(),
  variantSku: text('variant_sku').references(() => productVariants.sku), // Nullable for general product images
  imageUrl: text('image_url').notNull(),
});
