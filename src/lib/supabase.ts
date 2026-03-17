import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing! Check your .env file.');
  console.log('PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Defined' : 'UNDEFINED');
  console.log('PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Defined' : 'UNDEFINED');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');
