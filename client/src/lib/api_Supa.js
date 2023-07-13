import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://zfkjduqqqghwsyspbbka.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpma2pkdXFxcWdod3N5c3BiYmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzMjg0MTIsImV4cCI6MTk5OTkwNDQxMn0.siZR-w0KyMjS4TP9JfqdUKczon4LIfquFYAs9PoW3-Q";
export const supabase = createClient(supabaseUrl, supabaseKey);
