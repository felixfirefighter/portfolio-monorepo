import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { keys } from './keys';

const client = postgres(keys().DATABASE_URL);
export const db = drizzle({ client });
