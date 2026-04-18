import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAdminToken } from "@/lib/admin/jwt";

function adminHost(hostname: string): boolean {
  const h = hostname.split(":")[0] ?? "";
  return h === "admin.flownation.world" || h.startsWith("admin.");
}

function needsAdminAuth(pathname: string): boolean {
  return pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");
}

async function guardAdmin(request: NextRequest): Promise<NextResponse | null> {
  const token = request.cookies.get("admin_session")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  const user = await verifyAdminToken(token);
  if (!user) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return null;
}

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const hostname = host.split(":")[0] ?? "";
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/api/admin/login") || pathname.startsWith("/api/admin/logout")) {
    return NextResponse.next();
  }

  const isAdmin = adminHost(hostname);

  // Subdomain: map / and /login (and other non-admin paths) to /admin/*
  if (
    isAdmin &&
    !pathname.startsWith("/admin") &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api")
  ) {
    const mapped =
      pathname === "/" ? "/admin" : pathname === "/login" ? "/admin/login" : `/admin${pathname}`;
    const block = await guardAdminForPath(request, mapped);
    if (block) return block;
    const url = request.nextUrl.clone();
    url.pathname = mapped;
    return NextResponse.rewrite(url);
  }

  if (needsAdminAuth(pathname)) {
    const block = await guardAdmin(request);
    if (block) return block;
  }

  return NextResponse.next();
}

async function guardAdminForPath(request: NextRequest, mappedPath: string): Promise<NextResponse | null> {
  if (mappedPath.startsWith("/admin") && !mappedPath.startsWith("/admin/login")) {
    return guardAdmin(request);
  }
  return null;
}

export const config = {
  matcher: ["/", "/login", "/admin/:path*", "/api/admin/:path*"],
};
