-- Run once in Supabase SQL Editor as a project administrator.
-- Anonymous feedback is write-only. Reading requires authenticated curator membership.
create table if not exists public.museum_feedback (
 id uuid primary key default gen_random_uuid(),
 created_at timestamptz not null default now(),
 category text not null check (category in ('history','language','technical','idea','other')),
 page_reference text check (char_length(page_reference)<=240),
 message text not null check (char_length(trim(message)) between 10 and 3000),
 reviewed boolean not null default false
);
alter table public.museum_feedback enable row level security;
revoke all on public.museum_feedback from anon, authenticated;
grant insert on public.museum_feedback to anon, authenticated;
-- Feedback can be submitted without giving anonymous visitors read privileges.
drop policy if exists "Public may submit museum feedback" on public.museum_feedback;
create policy "Public may submit museum feedback"
on public.museum_feedback for insert to anon, authenticated
with check (true);
-- No SELECT policy is granted; visitors cannot read feedback.
-- Curators should inspect entries privately in Supabase Table Editor using administrator access.
-- Before heavy public traffic, add CAPTCHA and server-side rate limiting to avoid spam.
create index if not exists museum_feedback_created_at_idx on public.museum_feedback(created_at desc);
