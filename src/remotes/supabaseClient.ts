import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.https://qaohxieqpcekpiyaxvlq.supabase.co;
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhb2h4aWVxcGNla3BpeWF4dmxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0Mzg0NjEsImV4cCI6MjAxMzAxNDQ2MX0.3-vC2_gU7qnBOOBJOvwKpkb5clLb4eRqIh63sTafKqk;

if (supabaseUrl == null || supabaseAnonKey == null) {
  throw Error(
    `[Supabase] Failed initialize client -> supabaseUrl: ${supabaseUrl} / supabaseAnonKey: ${supabaseAnonKey}`
  );
}

export const api = createClient(supabaseUrl, supabaseAnonKey);
