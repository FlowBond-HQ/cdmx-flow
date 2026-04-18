import { cookies } from "next/headers";
import { verifyAdminToken, type AdminUser } from "@/lib/admin/jwt";

export const COOKIE = "admin_session";

export async function getAdminSession(): Promise<AdminUser | null> {
  const jar = await cookies();
  const t = jar.get(COOKIE)?.value;
  if (!t) return null;
  return verifyAdminToken(t);
}

export async function requireAdminSession(): Promise<AdminUser> {
  const u = await getAdminSession();
  if (!u) {
    const { redirect } = await import("next/navigation");
    redirect("/admin/login");
  }
  return u!;
}

export type { AdminUser };
