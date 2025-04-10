import { db } from '@repo/db-ecommerce/index';
import { categories } from '@repo/db-ecommerce/schema/categories';
import categoriesData from '@repo/db-ecommerce/seed/categories.json';

// Insert JSON data
async function insert() {
  console.log('Inserting categories...');
  await db.insert(categories).values(categoriesData);
  console.log('Categories inserted successfully.');
}

insert();
