# Trilingual visitor-story publishing (EN / 简体 / 繁體)

## Current state

The GitHub Pages client, database migration and Supabase Edge Function are deployed (22 November 2026). The server uses DeepL API Developer; the real end-to-end publishing flow still requires a signed-in author's live test to verify the DeepL secret and API translation output.

### One-time setup

1. In the existing Supabase project's **SQL Editor**, run the full contents of `supabase-story-translation-migration.sql`. This adds protected original-language/translation fields and the `get_public_museum_stories_i18n` public RPC, without discarding any stories.
2. Add an API secret named `DEEPL_API_KEY` to the Supabase project's **Edge Functions > Secrets**. Never place that secret in a browser script, Git commit, issue, or chat message. The API Developer plan provides 1,000,000 characters total, not a repeating monthly allowance. The translation function translates to `EN-US`, `ZH-HANS`, and `ZH-HANT`, skipping the author's source language. It uses the official DeepL REST API and routes legacy free keys ending in `:fx` to the free endpoint.
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
- No DEEPL_API_KEY or service-role key appears in GitHub Pages output.
- Test narrow mobile and tablet widths.

## DeepL migration notes (22 November 2026)

- The deployed function `publish-translated-story` (v4) uses `DEEPL_API_KEY`. `OPENAI_API_KEY` is no longer used by the new function and can be removed from Supabase Secrets after verifying DeepL publishing.
- Authors must consent to third-party automated translation before public publication; private drafts never enter DeepL.
- The title, story, and reason are translated as separate items per target language. Machine translation is not an editorial review: nuanced prose should be checked by a human when possible.
- If DeepL rejects the configured key, hits its one-time usage limit, or returns an invalid response, publication fails closed and the local draft remains intact.
- Database translation/read permissions are granted to Supabase's server-only `service_role`, not to anonymous site visitors. Do not add the API key to GitHub Pages code.
