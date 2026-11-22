-- The Unsent Museum / multilingual visitor stories (migration)
-- Run in Supabase SQL Editor before deploying publish-translated-story.
-- Existing source-language stories remain readable as originally written.
ALTER TABLE public.museum_stories
 ADD COLUMN IF NOT EXISTS original_language text NOT NULL DEFAULT 'und',
 ADD COLUMN IF NOT EXISTS translations jsonb NOT NULL DEFAULT '{}'::jsonb,
 ADD COLUMN IF NOT EXISTS translation_status text NOT NULL DEFAULT 'legacy';
ALTER TABLE public.museum_stories DROP CONSTRAINT IF EXISTS museum_story_original_lang_allowed;
ALTER TABLE public.museum_stories ADD CONSTRAINT museum_story_original_lang_allowed
 CHECK (original_language IN ('und','en','zh-Hans','zh-Hant'));
ALTER TABLE public.museum_stories DROP CONSTRAINT IF EXISTS museum_story_translation_status_allowed;
ALTER TABLE public.museum_stories ADD CONSTRAINT museum_story_translation_status_allowed
 CHECK (translation_status IN ('legacy','ready'));

-- Visitors must not supply a purported "official translation" directly.
-- These are maintained exclusively by the authenticated server-side function.
REVOKE INSERT ON public.museum_stories FROM authenticated;
GRANT INSERT (id,user_id,scenario,title,story,why,status,publication_mode,display_name,public_consent,updated_at)
 ON public.museum_stories TO authenticated;
REVOKE UPDATE ON public.museum_stories FROM authenticated;
GRANT UPDATE (scenario,title,story,why,status,publication_mode,display_name,public_consent,updated_at)
 ON public.museum_stories TO authenticated;

-- Separate RPC name avoids breaking existing public pages before the app upgrade.
CREATE OR REPLACE FUNCTION public.get_public_museum_stories_i18n()
RETURNS TABLE(
 id text, scenario text, title text, story text, why text,
 author_name text, updated_at timestamptz,
 original_language text, translations jsonb, translation_status text
)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=''
AS $$
 SELECT s.id::text,s.scenario,s.title,s.story,s.why,
  CASE WHEN s.publication_mode='named' THEN s.display_name ELSE 'Anonymous' END,
  s.updated_at,s.original_language,s.translations,s.translation_status
 FROM public.museum_stories s
 WHERE s.status='published' AND s.public_consent=true AND s.blocked_by_curator=false
 ORDER BY s.updated_at DESC LIMIT 500;
$$;
REVOKE ALL ON FUNCTION public.get_public_museum_stories_i18n() FROM public,anon,authenticated;
GRANT EXECUTE ON FUNCTION public.get_public_museum_stories_i18n() TO anon,authenticated;

-- Only server-side functions can use the service-role key and write translations.
-- Do not add translations/original_language/translation_status to author insert or update grants.
