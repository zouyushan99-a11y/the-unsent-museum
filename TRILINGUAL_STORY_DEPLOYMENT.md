# Trilingual visitor-story publishing (EN / 简体 / 繁體)

## Current state

The GitHub Pages client and the backend source are committed. **Automatic translation will not work until both the SQL migration and the Supabase Edge Function are deployed.** This repository alone cannot install database schema changes or external API secrets.

### One-time setup

1. In the existing Supabase project's **SQL Editor**, run the full contents of `supabase-story-translation-migration.sql`. This adds protected original-language/translation fields and the `get_public_museum_stories_i18n` public RPC, without discarding any stories.
2. Add an API secret named `OPENAI_API_KEY` to the Supabase project's **Edge Functions > Secrets**. Never place that secret in a browser script, Git commit, issue, or chat message. The OpenAI API is a separate billed service. Optionally set `TRANSLATION_MODEL` (default: `gpt-4o-mini`).
3. Deploy `supabase/functions/publish-translated-story/index.ts` as a Supabase Edge Function named **`publish-translated-story`**, leaving JWT verification **enabled**. The project's `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` must be available as server-side environment variables (typically automatically provided by Supabase). This function also validates the owner's signed-in JWT and the story's ownership.
4. Open the deployed museum; sign in, write a small test draft, select the **language in which it was written**, check **both** publication and automatic-translation consent boxes, and publish. Confirm that the archive shows the original in the source language and machine translations in the other two languages. Verify the text, publication count, star-preview title, and removal from the archive after author deletion.

CLI deployment alternative (if Supabase CLI is installed and authenticated):

```sh
supabase link --project-ref bmsumzkxyoprpoavgslr
supabase functions deploy publish-translated-story --project-ref bmsumzkxyoprpoavgslr
```

If the database migration has not been applied, the site can still **read existing legacy stories** through the original RPC, but **new publishing is paused until the three-language backend is configured**. Private drafts continue to save. This prevents new single-language publications from violating the author's multilingual requirement. Drafts still save locally and can still sync through the original Supabase table.

## Data and privacy rules

- An author selects one of `en`, `zh-Hans`, `zh-Hant` as the original text language. The original title, story, and reason are stored unchanged in the existing `museum_stories` columns.
- Only on confirmed publication consent does the Edge Function send the title, story, and reason to the external AI translation provider. **Unpublished drafts are not sent**.
- The edge function must successfully generate all three translations **before** it changes the story to `published`. If translation fails, the database row is left unchanged and the user sees an error.
- The server writes `translations`, `original_language`, and `translation_status`. The browser is never trusted to declare translations ready and never receives the provider's private API secret.
- Visitors get their chosen language from the `get_public_museum_stories_i18n` RPC; content is marked either **author's original**, **machine-translated**, or **original only (translation unavailable)**.
- Legacy previously published stories stay in their original language until their author updates and republishes them through the new translated process. This is intentional: do not fabricate translations or guess which language their earlier draft used.
- Machine translation may miss nuance or use unexpected wording; readers must see that translations are generated and that the original has been preserved.
- Current text limits remain 120-character titles, 4,000-character stories, and 2,000-character reasons. The server-side migration enforces a minimum 12-second gap and a maximum of 20 translation attempts per author per day; usage and cost should still be monitored.
- Do not allow client-side updates to the server-managed translation columns; the migration explicitly excludes them from authenticated user insert/update grants.

## Verification checklist

- New EN, Simplified Chinese, Traditional Chinese author drafts (test one each).
- Changing the site language changes the rendered title, story, reason and story-sky title.
- A published user's original text is never modified by translation.
- Machine-translation failure leaves unpublished drafts intact.
- Anonymous and named authors still work.
- Formerly published stories still show with a labelled untranslated fallback.
- Existing author withdrawal and permanent deletion still work.
- No OPENAI_API_KEY or service-role key appears in GitHub Pages output.
- Test narrow mobile and tablet widths.
