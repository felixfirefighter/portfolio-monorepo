import { keys } from '@/keys';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  out: './supabase/migrations',
  schema: './schema',
  dbCredentials: {
    url: keys().DATABASE_URL,
  },
});
