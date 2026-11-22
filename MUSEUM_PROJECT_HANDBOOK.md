# The Unsent Museum — project history, architecture & handover
_Last updated: 22 November 2026. A durable note for the creator and future assistants._

> **Purpose:** Explain not only how the website works now, but why it was conceived, how it was built, what failed and how it was repaired. Use this document alongside the actual code, Git commit history, and `TRILINGUAL_STORY_DEPLOYMENT.md`. Where a count or feature may change, check the live source before claiming it is current.

## 1. Origin: an ENGL literary-journalism final project

The concept evolved from brainstorming for a literary-journalism project, not from a generic website template. The creator sought an experimental digital literary form capable of research, narrative, ethical reflection and audience participation. The chosen idea, **The Unsent Museum (未寄之言博物馆)**, treats words never delivered, withheld testimony, silenced people, and unrevealed histories as material for a museum.

The project is neither only a gallery of sad quotations nor an assertion that everyone who stayed quiet wanted to protest. It asks who was able to speak, who controlled the consequences of speaking, which silences were intentional or imposed, what the evidence actually permits us to say, and what followed. It makes room for both individual and collective histories and for present-day visitors' own stories.

Narrative aim: detailed literary-journalistic storytelling inspired by the clarity and contextual richness the creator admired in Jon Krakauer's *Into Thin Air*. History cases should convey the social world, education, norms, surroundings, class and power differences, motivations, constraints, evidential uncertainty and aftermath **within the story**, not as five clumsily imposed headings. Curatorial analysis should interpret evidence and causation, not repeat reflection questions. Maintain source citations and distinguish established facts from inference.

## 2. What visitors see

- **Visual identity:** a painterly, immersive, navy/gold historical museum, high-quality separately designed foyer and ornament/background textures, luminous and museum-like rather than a generic app. Van Gogh-like color inspiration was refined to avoid imitation; the creator especially liked the earlier painterly foyer style.
- **Language:** English, Simplified Chinese, Traditional Chinese. Localize interfaces and curated narratives comprehensively while preserving the actual language of original visitor submissions. Traditional Chinese handling uses OpenCC where supported.
- **Historical archives:** personal historical dossiers (the repository README reports 69 cases after expansion) and collective history dossiers (expanded to 20 groups in subsequent work). Personal dossiers include long-form researched stories and contextual curator's analyses. The public research library has thematic sections and sources. Always check current data/scripts for numbers, source quality and completeness.
- **Interactive features:** galleries, navigable stories, research pages, reflective choice prompts, starfield/visitor interactions, feedback and visitor-authored stories. Account-based submissions can be public or drafts, with anonymity or a chosen display name, and author-controlled withdrawal/deletion.
- **Responsive layouts:** desktop, phone and tablet were repeatedly revised. Test all layouts after changes.
- **Accessibility/editorial priorities:** original prose, source links, confidentiality, consent and the difference between fact and interpretation are more important than decorative filler.

## 3. Technical architecture — what lives where

```text
Visitor's browser
  |
  | HTTPS
  v
GitHub Pages — static website (HTML/CSS/JavaScript/images)
  |  https://zouyushan99-a11y.github.io/the-unsent-museum/
  |
  +-- Curated historical and research content largely shipped in repository scripts
  |
  +-- Supabase publishable browser client for login and permitted reads/writes
              |
              v
       Supabase backend
         - Auth: user sign-in / verified identities
         - Postgres: stories, original texts, saved translations, stars and metadata
         - RLS + RPCs: ownership, public reads and protected access
         - Edge Function: publish-translated-story
                    |
                    v
          Translation adapter module
            - DeepL (active default)
            - OpenAI (optional alternative; requires eligible account, key and billing)
            - future adapters may be added
```

**GitHub is the website's code and artwork**; GitHub Pages hosts the public static pages. **Supabase is the shared database, identity system and server-side execution environment.** **DeepL is an external service only for translating submitted texts.** Confusing these systems was an early source of setup frustration.

Repository: https://github.com/zouyushan99-a11y/the-unsent-museum

Main entry points:
- `index.html`: loads scripts and CSS; query version strings control caching.
- `app.js`: navigation, story editor, visitor interactions, Supabase integration, language switching.
- `styles.css`, `museum-collectives.css`, other `museum-*.css`: presentation.
- `history-*.js`, `museum-*.js`: historical content, research, localization, curatorial commentary.
- `assets/`: foyer, paper, ornament and other design media.
- `supabase-story-translation-migration.sql`: database translations, public multilingual RPC, quotas and access grants.
- `supabase/functions/publish-translated-story/index.ts`: authentication, consent, quota and atomic saving.
- `supabase/functions/publish-translated-story/translation-providers.ts`: interchangeable translation implementations.
- `TRILINGUAL_STORY_DEPLOYMENT.md`: backend deployment and provider-switch instructions.

## 4. Evolution and key decisions (approximately chronological)

1. **Literary-journalism concept.** Considered different creative/research forms, selected an interactive museum of unsent words. Developed a curatorial distinction between chosen silence and externally suppressed voices.
2. **Museum visual design.** Requested custom painted backgrounds, reading paper, intricate ornaments and clear, crisp hero imagery, with a coherent museum feel. Adjusted away from too-obvious Van Gogh imitation. Images were to be actually wired into pages, not merely generated separately.
3. **Historical expansion.** Added personal and collective archives, source-based longer stories and deeper curatorial analysis. The creator emphasized contextual narration with societal norms, education, settings, power relationships, motives, proof and aftermath; insisted on avoiding repetitive boilerplate and question/analysis duplication. Collective gallery and personal gallery visual styles were aligned.
4. **Internationalization and quality.** Full English/简体/繁體 support, more complete translation, OpenCC handling and responsive mobile/tablet fixes. Curator/research routes, return navigation and imagery were refined.
5. **Visitor participation.** Built shared visitor story and stars features using Supabase authentication, Postgres and public RPCs, including author ownership, anonymity choices, private drafts and deletion/withdrawal behaviors. These require real cloud permissions rather than static HTML.
6. **Automatic three-language visitor stories.** User wanted an authored story in any one of three languages to appear in all three site editions. Server workflow was designed to preserve the author's original, obtain explicit third-party translation consent, generate two additional versions **before publishing**, and save them together; pre-existing legacy stories use an original-only fallback.
7. **First translation attempt (OpenAI API).** Created `OPENAI_API_KEY` secret, SQL migration and `publish-translated-story` Edge Function. Publishing initially returned `Edge Function returned a non-2xx status code`. Logs showed a 403 server-side database read and 502 function failure. Repaired Supabase secret-key usage (API secret in `apikey` header, not as a Bearer user JWT) and granted necessary **server-role-only** database table permissions. Also improved client-side error details.
8. **Billing/region obstacle.** OpenAI API billing was impractical with the available Mainland China / Hong Kong-issued cards under the applicable provider region and payment rules. Replaced the API provider instead of asking the creator to put a fake address or expose credentials.
9. **DeepL Developer success.** Creator registered DeepL API Developer with a **1,000,000-character total**, not monthly, allotment. Placed `DEEPL_API_KEY` in Supabase Edge Functions Secrets, not GitHub. Function was changed to DeepL, translating the title, main story and 'why' into the other two languages. Creator reported that a real publishing attempt **succeeded** in the DeepL version.
10. **Provider-neutral architecture.** Concern about the developer plan's future expiration led to separating `translation-providers.ts` from `index.ts`. Deployed Edge Function **v5 ACTIVE on 22 Nov 2026**. The default provider is `deepl`; `openai` is an available but **not enabled** alternative. No automatic fallback to prevent unexpected bills or unexpected data sharing. A fresh real-user publishing test after v5 is recommended; ACTIVE alone isn't a complete end-to-end guarantee.

## 5. Visitor story publishing in plain language

1. A person signs in and writes title, story and explanation in English, Simplified or Traditional Chinese.
2. Private drafts do not go to an external translator. For public posting the person explicitly consents to being publicly readable and to AI translation.
3. The browser sends the text and source-language choice to the named Supabase Edge Function with the user's login token.
4. The Edge Function verifies identity, story ownership, permitted length/shape, and a server-side per-author translation rate limit.
5. The configured backend translator returns the two missing language editions. The author's exact source edition is retained.
6. **Only after all editions are ready** is the public story and its translations stored in Supabase.
7. Readers switch the museum language and see the corresponding saved edition; no new API call is made merely to read or switch a language.
8. If a provider errors, the public publish attempt is rejected and the user's local draft remains rather than exposing partial translations.

Current backend limits from implementation: title <= 120 characters, story <= 4,000, reason <= 2,000; at least 12 seconds between translation attempts per user, maximum 20 per day. Validate these from source if changed.

## 6. Translators, quota and future-proofing

- Current backend option: **DeepL**, chosen by default if `TRANSLATION_PROVIDER` is absent. `DEEPL_API_KEY` remains a server-side secret.
- Switch via Supabase **Edge Functions → Secrets → `TRANSLATION_PROVIDER`**, with `deepl` or `openai`. A provider must have its own valid key, permitted region, billing and privacy review. Merely changing the name cannot create access or free credits.
- **No automatic provider fallback.** A failing DeepL request should not trigger unexpected OpenAI charges.
- To add a different service, implement another adapter in `translation-providers.ts` matching `StoryTranslations` (`en`, `zh-Hans`, `zh-Hant`; each `title`, `story`, `why`), add its server secret, redeploy function files; site and DB need not change.
- The DeepL Developer entitlement shown at account setup ran from **2026-11-22 to 2027-11-22**. The million characters are a **total** allotment, not a monthly renewal. Do not assume renewal terms without rechecking official account status. Review quota and plan around Oct 2027.
- Current design uses two target-language translations per published story: approximate billed usage is **2 × the source character count** for a fresh post (plus possible retries or republishing). Example: 619 original characters => ~1,238 billed characters. The database had one translated story with 619 original characters when last checked on 22 Nov 2026. DeepL's API usage dashboard is the authority for remaining balance.
- **Saved translations survive the translation subscription's expiry** as long as the Supabase database stays online and retains those rows. New publication and retranslation would fail if no working provider remains; browsing existing stories would not require DeepL.

## 7. Access, privacy and security

- **Never commit or display** `DEEPL_API_KEY`, `OPENAI_API_KEY`, Supabase server secret/service-role key or authentication tokens. Keys belong only in Supabase secret storage.
- The browser may contain only an intentionally publishable Supabase client key. It must not have privileged server DB credentials.
- Verify the logged-in user and row ownership **on the server**, not just in browser JavaScript.
- Consent matters: unpublished/private drafts should never be sent to a third-party translator.
- Do not make anonymous visitors able to read private drafts. Verify RLS/RPC permissions and avoid publishing personally identifying information unexpectedly.
- Keep original author's text unmodified; distinguish machine translations from originals.
- API provider terms, retention and costs may change. Check current docs before swapping.

## 8. If something breaks — troubleshooting map

| Symptom | Where to look first |
| --- | --- |
| Website visual/layout issue | GitHub `index.html`, `app.js`, CSS, assets and browser cache; update version query after code edits |
| Public GitHub Pages route not updated | Confirm GitHub commit, Pages deployment, hard-refresh/cached scripts |
| Login / author access problem | Supabase Auth, user session and RLS policies |
| Publishing error or generic non-2xx | Supabase Edge Function logs, HTTP status, function source; browser should display response error body |
| 401 / 403 when server accesses stories | Verify user JWT versus server secret in `apikey` header, service-role table grants and ownership |
| DeepL refuses key or 456 quota exhausted | Verify `DEEPL_API_KEY` and correct selected plan, host, official usage/limits |
| One language missing | Inspect `translation-providers.ts`, original-language selection, response validation, database `translations` |
| Old published stories remain untranslated | By design: legacy rows are original-only unless republished with consent |
| API provider expires | Existing translations remain; select/add a legitimate supported provider, never put key in browser |

Do not blindly rerun schema migrations or overwrite live data. Inspect and back up first.

## 9. Verification and unresolved work

- Confirm a real three-language publication on the current **v5 interchangeable-adapter** release; previous real publishing success was on the DeepL-specific implementation.
- Test EN, zh-Hans and zh-Hant as *source* languages (not just target-language viewing), and verify literary nuance, line breaks and labels.
- Test that old public stories, private drafts, withdrawal and permanent deletion still behave correctly.
- Test use in anonymous mode, named mode, mobile Safari and tablet.
- Audit historical case citations, images and curator narratives individually; no claim that all archival narratives have undergone exhaustive scholarly fact checking.
- Review source/credit/reflective statement against course requirements. The museum is also a literary-journalism artifact, not merely an engineering exercise.
- Secure independent backups of GitHub repository plus Supabase content. GitHub contains code/artwork but **not** the private live database rows; the site is not fully backed up by GitHub alone.

## 10. Future conversation / handover prompt

If the creator says: “Explain how we built this website,” start with the vision in section 1, then walk through the timeline in section 4, and illustrate the architecture in section 3. Use simple analogies: GitHub Pages = exhibition building; Supabase = back office and archive database; translation adapter = switchable translation desk; DeepL = currently hired translator. Explain problems that were fixed, data ownership/privacy, and ongoing maintenance. Avoid claiming a feature is working without checking current code or production logs.

If asked to make a change, read this handover **and current repo files**. After substantial changes, update this document and the more detailed deployment guide with any new architectural decisions.

## 11. Curatorial update — four cross-generational interactive galleries (22 November 2026)

At the creator's request, the four interactive scenarios were rethought for participation by adults of different generations, including parents and teachers, rather than mainly students. The updated public names are:

1. **The No We Never Said** — personal refusal, boundaries and apparent consent (`friendship` remains the legacy internal ID).
2. **The Silent Witness** — witnessing unfair treatment, bystander responsibility and choosing whether to intervene (`classroom` remains the legacy internal ID).
3. **The Feelings We Never Voiced** — gratitude, affection, apology, opportunities missed and emotional disclosure (`family` remains the legacy internal ID).
4. **Before Sending** — a letter, email or message composed but not delivered (`before-sending` remains the stable internal ID).

The first gallery is about an *unspoken refusal*, the third about *unspoken feelings*. The curated homepage cards retain short taglines, while each gallery opening has a fuller explanation. Scenario questions and all seven reasons on both pathways are in English and fully authored Simplified Chinese; Traditional Chinese is produced through the site's existing OpenCC conversion, rather than displaying English scenario text. The scenario texts are **illustrative placeholders**, not yet the creator's personal lived stories; those are to replace them in a later editorial step.

**Important compatibility decisions:** Do not rename the four internal IDs without migrating existing votes, visitor stories, stars, routes, category statistics and research. The current redesign deliberately preserved the IDs, the existing star colors, starfield generation, original data, private drafts, public story publication and the complete interactive progression. Earlier votes and stories were made under the *older* prompts: public caveats now disclose that historical mismatch. Existing research panels likewise predate the revised curatorial themes and carry a scope notice until new appropriately sourced research is curated. The historical museum, visual assets and responsive design were not redesigned as part of this change.

Updated: `app.js`, `museum-i18n.js`, `museum-i18n-audit-2026.js`, `index.html`. Syntax checks passed for all modified JavaScript scripts; a multi-device live visual regression test and a fresh full interactive/publication test are still recommended.

## 12. Public star sky verification and old test cleanup (22 November 2026)

The user confirmed that earlier choice/reason stars were solely personal tests, and requested they be removed, while preserving story stars. Supabase `public.museum_answers` was cleared of the one existing test answer; `public.responses` is empty; one already-published visitor story remains in `public.museum_stories` and is **not** affected. After cleanup the answer table has zero rows.

The refreshed four galleries use stable internal IDs `friendship`, `classroom`, `family`, `before-sending`, but their public names, interactive text and reason choices have been replaced by the four new themes. Those IDs are **not separate retired star galleries**: the same four existing choice and reason sky canvases now serve the new themes. The retired browser-only star import workflow and Lookout import button were removed to prevent old browser test choices being re-uploaded. Legacy local drafts and publicly published story-star features remain intact. The earlier-vote caveat was removed from the choice Lookout now that its records are empty, while a narrower note remains on the published story archive because an earlier story could still carry an old category association.

Database permission tests on 22 Nov 2026 used a logged-in user simulation inside transactions that were **rolled back**: four separate insert/upsert scenarios succeeded, and `get_museum_stars()` exposed four test results during the transaction. A separate simulated `anon` role also successfully read a named test star from `get_museum_stars()` and its public name from `get_museum_star_attributions()`. The tests created **no permanent public stars**. Confirmed RLS: authenticated visitors may insert/read/update *their own* answers; anonymous users cannot read the raw table, but they can execute the privacy-safe public star RPCs. Browser code calls these same interfaces, waits for a successful cloud save and public-read confirmation, then advances to the optional story step. Choice sky, reasons sky, full-screen skies, live sync and public visitor-story starfield were retained. The JS syntax checks pass; because these were simulated role/DB tests, not browser-driven authenticated user actions, recommend one real visitor walkthrough on desktop/mobile before claiming end-to-end production verification.
