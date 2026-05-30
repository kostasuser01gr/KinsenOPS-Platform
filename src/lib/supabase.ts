import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Client for browser-side Realtime subscriptions (uses anon key, respects RLS)
export function createBrowserClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Server-side client for tRPC/API routes (bypasses RLS via service role)
export function createServiceClient() {
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Supabase service credentials are not configured");
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
