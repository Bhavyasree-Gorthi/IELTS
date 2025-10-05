import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://opagacqocdjbzzudoyax.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wYWdhY3FvY2RqYnp6dWRveWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2ODI5NTksImV4cCI6MjA3NTI1ODk1OX0.hRqfHkU5vpTqc7lv9S8l-tuetfirvaZFYtY1h1aWHP4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
