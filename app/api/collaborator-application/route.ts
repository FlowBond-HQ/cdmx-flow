import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

const MAX = {
  name: 200,
  email: 320,
  phone: 40,
  linkedin: 500,
  website: 500,
  instagram: 300,
  brand: 200,
  project_description: 4000,
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
  const project_description =
    typeof b.project_description === "string" ? b.project_description.trim().slice(0, MAX.project_description) : "";
  const phone =
    typeof b.phone === "string" && b.phone.trim() ? b.phone.trim().slice(0, MAX.phone) : null;
  const linkedin =
    typeof b.linkedin === "string" && b.linkedin.trim()
      ? b.linkedin.trim().slice(0, MAX.linkedin)
      : null;
  const website =
    typeof b.website === "string" && b.website.trim()
      ? b.website.trim().slice(0, MAX.website)
      : null;
  const instagram =
    typeof b.instagram === "string" && b.instagram.trim()
      ? b.instagram.trim().slice(0, MAX.instagram)
      : null;
  const brand_or_project_name =
    typeof b.brand_or_project_name === "string" && b.brand_or_project_name.trim()
      ? b.brand_or_project_name.trim().slice(0, MAX.brand)
      : null;
  const locale = b.locale === "en" || b.locale === "es" ? b.locale : null;

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!project_description) {
    return NextResponse.json({ error: "Project description is required." }, { status: 400 });
  }
  if (!locale) {
    return NextResponse.json({ error: "Locale is required." }, { status: 400 });
  }

  const { error } = await supabase.from("collaborator_applications").insert({
    name,
    email,
    phone,
    linkedin,
    website,
    instagram,
    brand_or_project_name,
    project_description,
    locale,
    source: "flow_cdmx_site",
  });

  if (error) {
    console.error("[collaborator-application]", error.message);
    return NextResponse.json({ error: "Could not save your application. Try again later." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
