-- FLOW CDMX: sponsor inquiries, collaborator applications, optional per-admin password hashes
-- Run after 20250418120000 and 20250418130000

-- Optional bcrypt hashes for admin users (steph / michelle). If empty, login falls back to ADMIN_PASSWORD env.
create table if not exists public.admin_credentials (
  username text primary key check (username in ('steph', 'michelle')),
  password_hash text not null,
  updated_at timestamptz not null default now()
);

comment on table public.admin_credentials is 'Admin login passwords (bcrypt). Service role only; set via /api/admin/change-password or SQL.';

create index if not exists admin_credentials_updated_at_idx on public.admin_credentials (updated_at desc);

alter table public.admin_credentials enable row level security;

-- Sponsorship / vendor inquiry from /sponsors#patrocinio-form
create table if not exists public.sponsor_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  brand_name text,
  description text,
  offering text,
  website text,
  social text,
  contact_line text,
  locale text not null check (locale in ('es', 'en')),
  source text not null default 'flow_cdmx_sponsors'
);

comment on table public.sponsor_inquiries is 'Sponsor / vendor inquiries from the sponsors page form.';

create index if not exists sponsor_inquiries_email_lower_idx on public.sponsor_inquiries (lower(email));
create index if not exists sponsor_inquiries_created_at_idx on public.sponsor_inquiries (created_at desc);

alter table public.sponsor_inquiries enable row level security;

-- Producers, brands, projects — collaborators (not performing artists)
create table if not exists public.collaborator_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  linkedin text,
  website text,
  instagram text,
  brand_or_project_name text,
  project_description text not null,
  locale text not null check (locale in ('es', 'en')),
  source text not null default 'flow_cdmx_site'
);

comment on table public.collaborator_applications is 'Brand / producer / project collaboration requests from /colaborar';

create index if not exists collaborator_applications_email_lower_idx on public.collaborator_applications (lower(email));
create index if not exists collaborator_applications_created_at_idx on public.collaborator_applications (created_at desc);

alter table public.collaborator_applications enable row level security;

-- Inserts via Next.js API (service role) only.
