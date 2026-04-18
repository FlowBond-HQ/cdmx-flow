import { createAdminClient } from "@/lib/supabase/admin";

export type WaitlistRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  interest: string;
  notes: string | null;
  locale: string;
  source: string;
};

export type ArtistRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  instagram: string | null;
  message: string;
  locale: string;
  source: string;
};

export type SponsorInquiryRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  brand_name: string | null;
  description: string | null;
  offering: string | null;
  website: string | null;
  social: string | null;
  contact_line: string | null;
  locale: string;
  source: string;
};

export type CollaboratorRow = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  linkedin: string | null;
  website: string | null;
  instagram: string | null;
  brand_or_project_name: string | null;
  project_description: string;
  locale: string;
  source: string;
};

export async function fetchWaitlist(): Promise<WaitlistRow[] | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("ticket_waitlist")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("[admin] fetchWaitlist", error.message);
    return null;
  }
  return data as WaitlistRow[];
}

export async function fetchArtistApplications(): Promise<ArtistRow[] | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("artist_applications")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("[admin] fetchArtistApplications", error.message);
    return null;
  }
  return data as ArtistRow[];
}

export async function fetchSponsorInquiries(): Promise<SponsorInquiryRow[] | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("sponsor_inquiries")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("[admin] fetchSponsorInquiries", error.message);
    return null;
  }
  return data as SponsorInquiryRow[];
}

export async function fetchCollaboratorApplications(): Promise<CollaboratorRow[] | null> {
  const supabase = createAdminClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("collaborator_applications")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("[admin] fetchCollaboratorApplications", error.message);
    return null;
  }
  return data as CollaboratorRow[];
}
