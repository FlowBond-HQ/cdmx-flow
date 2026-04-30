-- Extend ticket_waitlist for multi-city waitlist: tier pre-fill, phone, and city routing
alter table public.ticket_waitlist
  add column if not exists ticket_tier text,
  add column if not exists phone text,
  add column if not exists city text;

create index if not exists ticket_waitlist_city_idx on public.ticket_waitlist (city);
create index if not exists ticket_waitlist_ticket_tier_idx on public.ticket_waitlist (ticket_tier);
