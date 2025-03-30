import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { keys } from './keys';

const client = postgres(keys().DATABASE_URL);
export const db = drizzle({ client });

export * from '@repo/db-ecommerce/features/products';
export * from '@repo/db-ecommerce/features/collections';
