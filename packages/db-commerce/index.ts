import { keys } from './keys';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(keys().DATABASE_URL);
export const db = drizzle({ client });
