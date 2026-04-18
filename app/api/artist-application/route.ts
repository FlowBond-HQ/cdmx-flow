import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const MAX_NAME = 200;
const MAX_MESSAGE = 4000;
const MAX_PHONE = 40;
const MAX_INSTAGRAM = 300;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const supabase = createAdminClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Server configuration: Supabase is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body." }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim().toLowerCase() : "";
  const message = typeof b.message === "string" ? b.message.trim() : "";
  const phone =
    typeof b.phone === "string" && b.phone.trim() ? b.phone.trim().slice(0, MAX_PHONE) : null;
  const instagram =
    typeof b.instagram === "string" && b.instagram.trim()
      ? b.instagram.trim().slice(0, MAX_INSTAGRAM)
      : null;
  const locale = b.locale === "en" || b.locale === "es" ? b.locale : null;

  if (!name || name.length > MAX_NAME) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!message || message.length > MAX_MESSAGE) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }
  if (!locale) {
    return NextResponse.json({ error: "Locale is required." }, { status: 400 });
  }

  const { error } = await supabase.from("artist_applications").insert({
    name,
    email,
    phone,
    instagram,
    message,
    locale,
    source: "flow_cdmx_site",
  });

  if (error) {
    console.error("[artist-application]", error.message);
    return NextResponse.json({ error: "Could not save your application. Try again later." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
