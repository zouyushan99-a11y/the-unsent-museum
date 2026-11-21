-- The Unsent Museum: visitor feedback inbox in the existing curator room.
-- Run in your EXISTING Supabase project's SQL Editor, using the project owner account.
-- Do not put a Supabase secret key or your curator user ID into public JavaScript.
-- Existing museum_curators and museum_is_curator() are created by supabase-story-setup.sql.

create table if not exists public.museum_feedback (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  category text not null check (category in ('history','language','technical','idea','other')),
  page_reference text check (char_length(page_reference) <= 240),
  message text not null check (char_length(trim(message)) between 10 and 3000),
  reviewed boolean not null default false
);

alter table public.museum_feedback enable row level security;

-- Anonymous visitors may ONLY submit allowed fields. They cannot read or edit feedback.
revoke all on table public.museum_feedback from anon, authenticated;
grant insert (category, page_reference, message)
on public.museum_feedback to anon, authenticated;

drop policy if exists "Public may submit museum feedback" on public.museum_feedback;
create policy "Public may submit museum feedback"
on public.museum_feedback for insert to anon, authenticated
with check (true);

-- Read access is exclusively via this server-authorized RPC.
create or replace function public.museum_curator_feedback()
returns table (
  id uuid,
  created_at timestamptz,
  category text,
  page_reference text,
  message text,
  reviewed boolean
)
language plpgsql stable security definer set search_path = ''
as $$
begin
  if (select auth.uid()) is null or not public.museum_is_curator() then
    raise exception 'Curator access required' using errcode = '42501';
  end if;
  return query
    select f.id, f.created_at, f.category, f.page_reference, f.message, f.reviewed
    from public.museum_feedback f
    order by f.reviewed asc, f.created_at desc
    limit 500;
end;
$$;

revoke all on function public.museum_curator_feedback() from public, anon, authenticated;
grant execute on function public.museum_curator_feedback() to authenticated;

-- Only the authorized curator can change review status.
create or replace function public.museum_set_feedback_reviewed(
  p_feedback_id uuid,
  p_reviewed boolean
)
returns boolean
language plpgsql security definer set search_path = ''
as $$
begin
  if (select auth.uid()) is null or not public.museum_is_curator() then
    raise exception 'Curator access required' using errcode = '42501';
  end if;
  update public.museum_feedback
  set reviewed = p_reviewed
  where id = p_feedback_id;
  if not found then
    raise exception 'Feedback entry not found' using errcode = 'P0002';
  end if;
  return true;
end;
$$;

revoke all on function public.museum_set_feedback_reviewed(uuid,boolean)
from public, anon, authenticated;
grant execute on function public.museum_set_feedback_reviewed(uuid,boolean)
to authenticated;

create index if not exists museum_feedback_created_at_idx
on public.museum_feedback (created_at desc);

-- Do NOT add a public SELECT policy to the feedback table.
-- Optional security test: an unauthenticated or ordinary user invoking
-- museum_curator_feedback() must receive a permission error.
-- Important: public anonymous submission needs rate limiting/CAPTCHA for larger launches.
