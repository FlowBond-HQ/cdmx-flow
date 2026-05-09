import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const MAX_NAME = 200;

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
  const phone = typeof b.phone === "string" ? b.phone.trim() : null;
  const heard_from = typeof b.heard_from === "string" ? b.heard_from.trim() : null;
  const based_in = typeof b.based_in === "string" ? b.based_in.trim() : null;
  const locale = b.locale === "en" || b.locale === "es" ? b.locale : null;
  const city = typeof b.city === "string" ? b.city.trim() : null;

  if (!name || name.length > MAX_NAME) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!phone) {
    return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  }
  if (!heard_from) {
    return NextResponse.json({ error: "Please let us know how you heard about Flow." }, { status: 400 });
  }
  if (!based_in) {
    return NextResponse.json({ error: "Please let us know where you're based." }, { status: 400 });
  }
  if (!locale) {
    return NextResponse.json({ error: "Locale is required." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("ticket_waitlist")
    .insert({
      name,
      email,
      interest: "registration",
      ticket_tier: "registration",
      phone,
      heard_from,
      based_in,
      locale,
      city: city || null,
      source: "flow_cdmx_site",
    })
    .select("id")
    .single();

  if (error) {
    console.error("[waitlist]", error.message, error.code, error.details);
    return NextResponse.json({ error: "Could not save your signup. Try again later." }, { status: 500 });
  }
  if (!data?.id) {
    console.error("[waitlist] insert returned no row id");
    return NextResponse.json({ error: "Could not save your signup. Try again later." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: data.id });
}
