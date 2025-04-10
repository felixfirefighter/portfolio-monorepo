import { db } from '@repo/db-ecommerce/index';
import { users } from '@repo/db-ecommerce/schema/users';
import data from '@repo/db-ecommerce/seed/users.json';

// Insert JSON data
async function insert() {
  console.log('Inserting users...');
  await db.insert(users).values(data);
  console.log('Users inserted successfully.');
}

insert();
