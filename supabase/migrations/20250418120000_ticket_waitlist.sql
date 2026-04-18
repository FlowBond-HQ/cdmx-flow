-- Flow CDMX: ticket waitlist (written from Vercel via service role API only)
-- Run in Supabase SQL Editor or: supabase db push (if using Supabase CLI)

create table if not exists public.ticket_waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  interest text not null,
  notes text,
  locale text not null check (locale in ('es', 'en')),
  source text not null default 'flow_cdmx_site'
);

comment on table public.ticket_waitlist is 'FLOW CDMX ticket interest / waitlist signups from cdmx.flownation.world';

create index if not exists ticket_waitlist_email_lower_idx on public.ticket_waitlist (lower(email));
create index if not exists ticket_waitlist_created_at_idx on public.ticket_waitlist (created_at desc);

alter table public.ticket_waitlist enable row level security;

-- No policies for anon/authenticated: inserts go through Next.js API with the service role key only.
