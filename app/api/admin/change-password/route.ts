import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE } from "@/lib/admin/session";
import { verifyAdminToken } from "@/lib/admin/jwt";
import { verifyAdminLogin, setAdminPassword } from "@/lib/admin/db-password";

const MIN_LEN = 10;

export async function POST(request: Request) {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  const user = token ? await verifyAdminToken(token) : null;
  if (!user) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const current = typeof b.currentPassword === "string" ? b.currentPassword : "";
  const next = typeof b.newPassword === "string" ? b.newPassword : "";

  if (!current || !next) {
    return NextResponse.json({ error: "Current and new password are required." }, { status: 400 });
  }
  if (next.length < MIN_LEN) {
    return NextResponse.json({ error: `New password must be at least ${MIN_LEN} characters.` }, { status: 400 });
  }
  if (next === current) {
    return NextResponse.json({ error: "New password must differ from the current one." }, { status: 400 });
  }

  const ok = await verifyAdminLogin(user, current);
  if (!ok) {
    return NextResponse.json({ error: "Current password is incorrect." }, { status: 401 });
  }

  const saved = await setAdminPassword(user, next);
  if (!saved) {
    return NextResponse.json({ error: "Could not update password. Check Supabase configuration." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
