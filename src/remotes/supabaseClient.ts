import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.https://agsxihjokaiijfoxbplt.supabase.co;
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnc3hpaGpva2FpaWpmb3hicGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0MjAzMzksImV4cCI6MjAxMjk5NjMzOX0.qlr4eZCDy09cpwdIsCPDqzyW9WZznC3HCtK51h8Q0mM;

if (supabaseUrl == null || supabaseAnonKey == null) {
  throw Error(
    `[Supabase] Failed initialize client -> supabaseUrl: ${supabaseUrl} / supabaseAnonKey: ${supabaseAnonKey}`
  );
}

export const api = createClient(supabaseUrl, supabaseAnonKey);
