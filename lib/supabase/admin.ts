import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the **service role** key.
 * Bypasses RLS — use only in Route Handlers / Server Actions, never in client components.
 */
function supabaseUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? process.env.SUPABASE_URL?.trim();
  if (!raw) return undefined;
  return raw.replace(/\/$/, "");
}

/** Service role (bypasses RLS). Vercel’s Supabase integration often names this `SUPABASE_SECRET_KEY`. */
function serviceRoleKey(): string | undefined {
  return process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
}

export function createAdminClient(): SupabaseClient | null {
  const url = supabaseUrl();
  const serviceRole = serviceRoleKey();
  if (!url || !serviceRole) return null;
  return createClient(url, serviceRole, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
