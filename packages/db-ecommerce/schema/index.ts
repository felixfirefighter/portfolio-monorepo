import { products } from '@repo/db-ecommerce//schema/products';
import { carts } from '@repo/db-ecommerce/schema/carts';
import { categories } from '@repo/db-ecommerce/schema/categories';
import { collections } from '@repo/db-ecommerce/schema/collections';
import { coupons } from '@repo/db-ecommerce/schema/coupons';
import { inventory } from '@repo/db-ecommerce/schema/inventory';
import { orderCoupons } from '@repo/db-ecommerce/schema/order-coupons';
import { orderItems } from '@repo/db-ecommerce/schema/order-items';
import { orders } from '@repo/db-ecommerce/schema/orders';
import { productImages } from '@repo/db-ecommerce/schema/product-images';
import { productReviews } from '@repo/db-ecommerce/schema/product-reviews';
import { productVariants } from '@repo/db-ecommerce/schema/product-variants';
import { users } from '@repo/db-ecommerce/schema/users';

export const schema = {
  carts,
  categories,
  collections,
  coupons,
  inventory,
  orderCoupons,
  orderItems,
  orders,
  productImages,
  productReviews,
  productVariants,
  products,
  users,
};
