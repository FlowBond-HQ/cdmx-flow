-- FLOW CDMX: artist / collaborator applications (solicitudes)
-- Run in Supabase SQL Editor after ticket_waitlist migration

create table if not exists public.artist_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  instagram text,
  message text not null,
  locale text not null check (locale in ('es', 'en')),
  source text not null default 'flow_cdmx_site'
);

comment on table public.artist_applications is 'Artist & collaborator applications from /artistas/aplicar';

create index if not exists artist_applications_email_lower_idx on public.artist_applications (lower(email));
create index if not exists artist_applications_created_at_idx on public.artist_applications (created_at desc);

alter table public.artist_applications enable row level security;

-- Inserts only via Next.js API (service role).
