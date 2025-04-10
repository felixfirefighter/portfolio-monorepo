import { db } from '@repo/db-ecommerce/index';
import { productInfo } from '@repo/db-ecommerce/schema/product-info';
import data from '@repo/db-ecommerce/seed/product-info.json';

// Insert JSON data
async function insert() {
  console.log('Inserting product info...');
  await db.insert(productInfo).values(data);
  console.log('Product info inserted successfully.');
}

insert();
