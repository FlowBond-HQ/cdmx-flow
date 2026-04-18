import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_MAX_AGE_SEC,
  hasAdminSessionSecret,
  signAdminSession,
  type AdminUser,
} from "@/lib/admin/jwt";
import { COOKIE } from "@/lib/admin/session";
import { verifyAdminLogin } from "@/lib/admin/db-password";

const ALLOWED = new Set<string>(["steph", "michelle"]);

export async function POST(request: Request) {
  if (!hasAdminSessionSecret()) {
    return NextResponse.json(
      {
        error:
          "Falta ADMIN_SESSION_SECRET en el servidor (Vercel → Environment Variables, mín. 16 caracteres). Sin eso no se puede iniciar sesión.",
      },
      { status: 503 },
    );
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
  const username = typeof b.username === "string" ? b.username.trim().toLowerCase() : "";
  const pass = typeof b.password === "string" ? b.password : "";

  if (!ALLOWED.has(username)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }
  const valid = await verifyAdminLogin(username as AdminUser, pass);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  let token: string;
  try {
    token = await signAdminSession(username as AdminUser);
  } catch (e) {
    console.error("[admin/login]", e);
    return NextResponse.json({ error: "Server configuration error." }, { status: 503 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE_SEC,
  });
  return res;
}
