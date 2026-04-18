import { NextResponse } from "next/server";
import { COOKIE } from "@/lib/admin/session";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", path: "/", maxAge: 0 });
  return res;
}
