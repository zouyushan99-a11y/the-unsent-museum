-- The Unsent Museum · voluntary public attribution for choice and reason stars
-- Run in the same Supabase project's SQL Editor. Does not change existing star data.
alter table public.museum_answers
 add column if not exists star_visibility text not null default 'anonymous',
 add column if not exists star_display_name text not null default '';

alter table public.museum_answers
 drop constraint if exists museum_answers_star_visibility_check;
alter table public.museum_answers
 add constraint museum_answers_star_visibility_check
 check (star_visibility in ('anonymous','named'));

alter table public.museum_answers
 drop constraint if exists museum_answers_star_display_name_check;
alter table public.museum_answers
 add constraint museum_answers_star_display_name_check
 check (
   char_length(star_display_name)<=80
   and (star_visibility='anonymous' or length(trim(star_display_name))>0)
 );

-- Existing answers remain anonymous. This RPC reveals only explicitly named
-- star IDs and public display names; NEVER user_id, email or private story text.
create or replace function public.get_museum_star_attributions()
returns table(id text, author_name text)
language sql stable security definer set search_path=''
as $$
 select a.id::text, a.star_display_name::text
 from public.museum_answers a
 where a.star_visibility='named'
   and length(trim(a.star_display_name))>0;
$$;
revoke all on function public.get_museum_star_attributions() from public,anon,authenticated;
grant execute on function public.get_museum_star_attributions() to anon,authenticated;

-- The museum's existing get_museum_stars() RPC remains unchanged.
-- RLS on museum_answers should already restrict updates to the owning account.
