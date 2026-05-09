alter table public.ticket_waitlist
  add column if not exists heard_from text,
  add column if not exists based_in text;

create index if not exists ticket_waitlist_heard_from_idx on public.ticket_waitlist (heard_from);
