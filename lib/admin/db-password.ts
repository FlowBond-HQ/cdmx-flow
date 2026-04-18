import { timingSafeEqual } from "node:crypto";
import bcrypt from "bcryptjs";
import { createAdminClient } from "@/lib/supabase/admin";
import type { AdminUser } from "@/lib/admin/jwt";

const BCRYPT_ROUNDS = 12;

function safeEqualString(a: string, b: string): boolean {
  const ba = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

export async function getStoredPasswordHash(username: AdminUser): Promise<string | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("admin_credentials")
    .select("password_hash")
    .eq("username", username)
    .maybeSingle();
  if (error) {
    console.error("[admin] getStoredPasswordHash", error.message);
    return null;
  }
  const row = data as { password_hash: string } | null;
  return row?.password_hash ?? null;
}

/**
 * If the user has a row in admin_credentials, verify with bcrypt only.
 * Otherwise fall back to shared ADMIN_PASSWORD (legacy bootstrap).
 */
export async function verifyAdminLogin(username: AdminUser, plain: string): Promise<boolean> {
  const hash = await getStoredPasswordHash(username);
  if (hash) {
    try {
      return await bcrypt.compare(plain, hash);
    } catch {
      return false;
    }
  }
  const envPass = process.env.ADMIN_PASSWORD;
  if (envPass) return safeEqualString(plain, envPass);
  return false;
}

export async function setAdminPassword(username: AdminUser, plain: string): Promise<boolean> {
  const supabase = createAdminClient();
  if (!supabase) return false;
  const password_hash = await bcrypt.hash(plain, BCRYPT_ROUNDS);
  const { error } = await supabase.from("admin_credentials").upsert(
    { username, password_hash, updated_at: new Date().toISOString() },
    { onConflict: "username" },
  );
  if (error) {
    console.error("[admin] setAdminPassword", error.message);
    return false;
  }
  return true;
}
