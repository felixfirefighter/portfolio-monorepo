import { db } from '@/index'; // Your Drizzle instance
import { users } from '@/schema/users';
import data from '@repo/db-ecommerce/seed/users.json';

// Insert JSON data
async function insert() {
  console.log('Inserting users...');
  await db.insert(users).values(data);
  console.log('Users inserted successfully.');
}

insert();
