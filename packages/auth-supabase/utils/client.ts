import { keys } from '@/keys';
import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    keys().NEXT_PUBLIC_SUPABASE_URL,
    keys().NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
