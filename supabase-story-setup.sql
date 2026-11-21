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
 publication_mode text not null default 'anonymous' check (publication_mode in ('anonymous','named')),
 display_name text not null default '' check (char_length(display_name)<=80),
 public_consent boolean not null default false,
 blocked_by_curator boolean not null default false,
 updated_at timestamptz not null default now(),
 constraint published_stories_complete check (status='draft' or (public_consent = true and length(trim(title))>0 and length(trim(story))>0 and length(trim(why))>0 and (publication_mode='anonymous' or length(trim(display_name))>0)))
);
alter table public.museum_stories add column if not exists publication_mode text not null default 'anonymous';
alter table public.museum_stories add column if not exists display_name text not null default '';
alter table public.museum_stories add column if not exists public_consent boolean not null default false;
alter table public.museum_stories add column if not exists blocked_by_curator boolean not null default false;
create index if not exists museum_stories_user_idx on public.museum_stories(user_id,updated_at desc);
create index if not exists museum_stories_public_idx on public.museum_stories(scenario,updated_at desc) where status='published';
alter table public.museum_stories enable row level security;
revoke all on public.museum_stories from anon;
grant select,insert,delete on public.museum_stories to authenticated;
-- Keep curator-only column blocked_by_curator out of the author's UPDATE grant.
revoke update on public.museum_stories from authenticated;
grant update (scenario,title,story,why,status,publication_mode,display_name,public_consent,updated_at)
  on public.museum_stories to authenticated;
drop policy if exists "Stories: author read" on public.museum_stories;
drop policy if exists "Stories: author insert" on public.museum_stories;
drop policy if exists "Stories: author update" on public.museum_stories;
drop policy if exists "Stories: author delete" on public.museum_stories;
create policy "Stories: author read" on public.museum_stories for select to authenticated using ((select auth.uid())=user_id);
create policy "Stories: author insert" on public.museum_stories for insert to authenticated with check ((select auth.uid())=user_id);
create policy "Stories: author update" on public.museum_stories for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "Stories: author delete" on public.museum_stories for delete to authenticated using ((select auth.uid())=user_id);
create or replace function public.get_public_museum_stories()
returns table(id text,scenario text,title text,story text,why text,author_name text,updated_at timestamptz)
language sql stable security definer set search_path=''
as $$
 select s.id::text,s.scenario,s.title,s.story,s.why,case when s.publication_mode='named' then s.display_name else 'Anonymous' end,s.updated_at
 from public.museum_stories s
 where s.status='published' and s.public_consent=true and s.blocked_by_curator=false
 order by s.updated_at desc
 limit 500;
$$;
revoke all on function public.get_public_museum_stories() from public,anon,authenticated;
grant execute on function public.get_public_museum_stories() to anon,authenticated;

-- Anonymous mode publishes the story without a display name. Named mode publishes only the user-provided public display name.
-- Note: GitHub Pages cannot run this SQL; paste it into the Supabase SQL Editor once.

-- Curator identities must be assigned by their exact authenticated UUID, never email or UI fields.
-- The admin-only RPCs check this server-side.
create table if not exists public.museum_curators (
 user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.museum_curators enable row level security;
revoke all on public.museum_curators from anon,authenticated;

create or replace function public.museum_is_curator()
returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.museum_curators c where c.user_id=(select auth.uid()));
$$;
revoke all on function public.museum_is_curator() from public,anon,authenticated;
grant execute on function public.museum_is_curator() to authenticated;

create or replace function public.museum_curator_stories()
returns table (id text,scenario text,title text,story text,why text,author_name text,blocked boolean,updated_at timestamptz)
language plpgsql stable security definer set search_path='' as $$
begin
 if not public.museum_is_curator() then raise exception 'Curator access required' using errcode='42501'; end if;
 return query
 select s.id::text,s.scenario,s.title,s.story,s.why,
 case when s.publication_mode='named' then s.display_name else 'Anonymous' end::text,
 s.blocked_by_curator,s.updated_at
 from public.museum_stories s
 where s.status='published' and s.public_consent=true
 order by s.updated_at desc limit 500;
end;
$$;
revoke all on function public.museum_curator_stories() from public,anon,authenticated;
grant execute on function public.museum_curator_stories() to authenticated;

create or replace function public.museum_set_story_blocked(p_story_id uuid,p_blocked boolean)
returns boolean language plpgsql security definer set search_path='' as $$
begin
 if not public.museum_is_curator() then raise exception 'Curator access required' using errcode='42501'; end if;
 update public.museum_stories
 set blocked_by_curator=p_blocked,updated_at=now()
 where id=p_story_id and status='published' and public_consent=true;
 if not found then raise exception 'Published story not found'; end if;
 return true;
end;
$$;
revoke all on function public.museum_set_story_blocked(uuid,boolean) from public,anon,authenticated;
grant execute on function public.museum_set_story_blocked(uuid,boolean) to authenticated;

-- IMPORTANT, manual curator activation AFTER SQL executes:
-- In Supabase Dashboard > Authentication > Users copy the curator's exact User UID.
-- Run: insert into public.museum_curators(user_id) values ('PASTE-EXACT-USER-UUID-HERE');
-- Never place that assignment in the public website JavaScript.
-- Curator-only blocked_by_curator updates run through a server-checked security-definer RPC.
-- When a curator blocks a story, it stays in the database as private archival data,
-- but the public RPC removes it from all visitors' results until the curator unblocks.
