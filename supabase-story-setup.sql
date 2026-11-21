-- The Unsent Museum — story storage and explicitly published public archive.
-- Run once in Supabase SQL Editor for project bmsumzkxyoprpoavgslr.
-- Drafts are private to the authenticated author. No user id/email leaves the public RPC.
create table if not exists public.museum_stories (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 scenario text not null check (scenario in ('friendship','classroom','family','before-sending','others')),
 title text not null default '' check (char_length(title)<=120),
 story text not null default '' check (char_length(story)<=4000),
 why text not null default '' check (char_length(why)<=2000),
 status text not null default 'draft' check (status in ('draft','published')),
 updated_at timestamptz not null default now(),
 constraint published_stories_complete check (status='draft' or (length(trim(title))>0 and length(trim(story))>0 and length(trim(why))>0))
);
create index if not exists museum_stories_user_idx on public.museum_stories(user_id,updated_at desc);
create index if not exists museum_stories_public_idx on public.museum_stories(scenario,updated_at desc) where status='published';
alter table public.museum_stories enable row level security;
revoke all on public.museum_stories from anon;
grant select,insert,update,delete on public.museum_stories to authenticated;
drop policy if exists "Stories: author read" on public.museum_stories;
drop policy if exists "Stories: author insert" on public.museum_stories;
drop policy if exists "Stories: author update" on public.museum_stories;
drop policy if exists "Stories: author delete" on public.museum_stories;
create policy "Stories: author read" on public.museum_stories for select to authenticated using ((select auth.uid())=user_id);
create policy "Stories: author insert" on public.museum_stories for insert to authenticated with check ((select auth.uid())=user_id);
create policy "Stories: author update" on public.museum_stories for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "Stories: author delete" on public.museum_stories for delete to authenticated using ((select auth.uid())=user_id);
create or replace function public.get_public_museum_stories()
returns table(id text,scenario text,title text,story text,why text,updated_at timestamptz)
language sql stable security definer set search_path=''
as $$
 select s.id::text,s.scenario,s.title,s.story,s.why,s.updated_at
 from public.museum_stories s
 where s.status='published'
 order by s.updated_at desc
 limit 500;
$$;
revoke all on function public.get_public_museum_stories() from public,anon,authenticated;
grant execute on function public.get_public_museum_stories() to anon,authenticated;
