import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const MAX = {
  name: 200,
  email: 320,
  brand: 200,
  description: 4000,
  offering: 2000,
  website: 500,
  social: 500,
  contact: 500,
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const supabase = createAdminClient();
  if (!supabase) {
    return NextResponse.json({ error: "Server configuration: Supabase is not configured." }, { status: 503 });
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
  const name = typeof b.name === "string" ? b.name.trim().slice(0, MAX.name) : "";
  const email = typeof b.email === "string" ? b.email.trim().toLowerCase().slice(0, MAX.email) : "";
  const brand_name =
    typeof b.brand_name === "string" && b.brand_name.trim()
      ? b.brand_name.trim().slice(0, MAX.brand)
      : null;
  const description =
    typeof b.description === "string" && b.description.trim()
      ? b.description.trim().slice(0, MAX.description)
      : null;
  const offering =
    typeof b.offering === "string" && b.offering.trim()
      ? b.offering.trim().slice(0, MAX.offering)
      : null;
  const website =
    typeof b.website === "string" && b.website.trim()
      ? b.website.trim().slice(0, MAX.website)
      : null;
  const social =
    typeof b.social === "string" && b.social.trim() ? b.social.trim().slice(0, MAX.social) : null;
  const contact_line =
    typeof b.contact_line === "string" && b.contact_line.trim()
      ? b.contact_line.trim().slice(0, MAX.contact)
      : null;
  const locale = b.locale === "en" || b.locale === "es" ? b.locale : null;

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!locale) {
    return NextResponse.json({ error: "Locale is required." }, { status: 400 });
  }

  const { error } = await supabase.from("sponsor_inquiries").insert({
    name,
    email,
    brand_name,
    description,
    offering,
    website,
    social,
    contact_line,
    locale,
    source: "flow_cdmx_sponsors",
  });

  if (error) {
    console.error("[sponsor-inquiry]", error.message);
    return NextResponse.json({ error: "Could not save your inquiry. Try again later." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
