import { db } from '@/index'; // Your Drizzle instance
import { inventory } from '@repo/db-ecommerce/schema/inventory';
import inventoryData from '@repo/db-ecommerce/seed/inventory.json';

// Insert JSON data
async function insert() {
  console.log('Inserting inventory...');
  await db.insert(inventory).values(inventoryData);
  console.log('Inventory inserted successfully.');
}

insert();
