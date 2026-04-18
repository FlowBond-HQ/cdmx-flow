import { SignJWT, jwtVerify } from "jose";

export const ADMIN_SESSION_MAX_AGE_SEC = 60 * 60 * 24 * 7; // 7 days

export type AdminUser = "steph" | "michelle";

function secretBytes(): Uint8Array | null {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s || s.length < 16) return null;
  return new TextEncoder().encode(s);
}

/** True if env has a valid session signing secret (for route handlers). */
export function hasAdminSessionSecret(): boolean {
  return secretBytes() !== null;
}

/** Throws if secret missing — use only in login route after env check. */
export function requireSecret(): Uint8Array {
  const b = secretBytes();
  if (!b) throw new Error("ADMIN_SESSION_SECRET must be set (min 16 chars)");
  return b;
}

export async function signAdminSession(user: AdminUser): Promise<string> {
  return new SignJWT({ sub: user, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${ADMIN_SESSION_MAX_AGE_SEC}s`)
    .sign(requireSecret());
}

/** Safe for middleware / Edge: returns null if invalid, missing secret, or bad token. */
export async function verifyAdminToken(token: string): Promise<AdminUser | null> {
  const secret = secretBytes();
  if (!secret) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    const sub = payload.sub;
    if (sub === "steph" || sub === "michelle") return sub;
    return null;
  } catch {
    return null;
  }
}
