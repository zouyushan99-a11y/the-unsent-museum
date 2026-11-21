# The Unsent Museum

An interactive literary museum about the words people choose not to say.

## Live site
https://zouyushan99-a11y.github.io/the-unsent-museum/

## Current implementation (historical archive expansion)
- The homepage retains a painted museum foyer with individually linked visual assets, including a high-resolution foyer image and separate ornamental, room, and paper textures.
- The interactive interface supports English, Simplified Chinese, and Traditional Chinese. Its language toggle keeps museum-owned text and historical reading editions separate; original visitor-submitted stories are preserved as authored.
- The historical wing now includes 69 indexed figures and cases: 36 earlier records and 33 newly curated cases. The 33 new English stories each exceed 1,000 words; all 33 new Chinese stories exceed 1,000 Han characters. Four previously incomplete Chinese reading editions are now populated.
- Archive entries distinguish deliberate withholding, protective secrecy and expression suppressed by external powers, and offer source links and explicit evidence limits.
- Visitors can explore galleries, make decisions, view choice/reason starfields, and browse story collections.
- The frontend contains Supabase integration for shared star data, public story reads, optional email sign-in and author-owned story workflows.
- There is a read-only diagnostic screen at `#/diagnostics` that checks public RPC responses. A code-level review does not guarantee that the database is configured or accessible to every visitor.

## Main files
- `index.html`: homepage document and script/style entry points
- `app.js`: routes, interactions, Supabase calls and visualizations
- `styles.css`: layout and page styling
- `assets/museum-v27-hero-hq.webp`: homepage foyer image
- `assets/museum-v26-overall.webp`: overall room texture
- `assets/museum-v26-ornament.webp`: decorative portal surface
- `assets/museum-v26-paper.webp`: story-reading paper
- `supabase-story-setup.sql` and `supabase-star-identity.sql`: database setup scripts; inspect and apply through an authorized Supabase administrator only

## Operational and privacy notes
- The publishable Supabase key is intended for client-side use. Do not commit Supabase secret or service-role keys.
- Database security relies on configured Row Level Security (RLS), authorized functions, and server-side policies; frontend code alone is not proof of security.
- Test anonymous access, logged-in access, publishing/moderation, account ownership, and withdrawal from another browser/device before treating the site as production-ready.
- Review public-facing privacy disclosures against the real deployed database configuration and storage behavior.
- Publishing, moderation and database-dependent features may be unavailable until the corresponding SQL and access controls are correctly configured.


## Collective Archives and the Unsent framework (current)
- The Historical Wing is split into **Personal Archives** (69 dossiers) and **Collective Archives** (13 researched group dossiers). The collective gallery lives at `#/collectives`.
- The guiding question is **why an impulse to resist may be restrained despite experienced injustice**, not simply which groups were oppressed or who eventually protested.
- Thirteen group dossiers analyse five to ten case-specific mechanisms each, including possible economic risk, threat of punishment, family obligations, the anticipation of futility, social norms, missing support networks, and sometimes strategically withheld opposition. The landing page offers six cross-cutting research lenses.
- Do not treat nonparticipation as evidence that a person privately wished to revolt. Clearly distinguish documentary proof of laws and public actions from interpretive social-psychological mechanisms.
- The research links include institutional historical sources and later scholarship on repression, social norms and perceived efficacy; the latter are explanatory frames, not proof of individual historic motives.
- Chinese localization includes static UI, dynamic labels, form placeholders, accessibility text, account status and dialogue prompts; user-submitted stories retain their authors' language. Code-level scans verify that the curated Chinese catalogue and group narratives contain no Latin-script text. This does **not** constitute an exhaustive live-browser visual regression test.

## Content and verification work remaining
Review every historical exhibit against the linked primary or institutional sources, especially where a curatorial interpretation extends beyond documented actions. Verify all language routes in a live browser, including dynamically updated labels and links. Check permission and anonymity of visitor-submitted stories, and complete course-related bibliography and the curator's reflective statement. The current scripts have passed structural and text-count checks, but this does not guarantee browser compatibility or database availability.

## Latest public-facing design changes
- Removed the ENGL course prototype footer credit. The footer now shows only the museum name in the selected interface language.
- Added Chinese-only literary Song/Ming typography with locally available fallback families; English pages retain their original typographic scheme.
- The thirteen collective histories contain five to ten case-specific explanatory factors and a period-sensitive overview of religious, legal, gendered, educational, economic, technological and social factors. A fifth case draws on the UK National Archives' workhouse and anonymous poor-law complaint collections.

## Collective exhibition curatorial change — ordinary endurance (November 2026)
The five **publicly indexed** Collective Archives now focus on everyday life under durable oppression, **not on successful or unsuccessful uprising narratives**. The featured cohorts are: Victorian British live-in domestic servants, widows in late-eighteenth/nineteenth-century North India, people subject to status discrimination in Edo Japan, enslaved Black households in the antebellum United States, and applicants/recipients of Victorian poor relief.

Each complete archive, including its separate analysis, exceeds 1,000 English words and each Chinese historical description alone exceeds 1,000 Han characters, and names its historical setting, enforced constraints, cultural/religious and economic conditions, and evidence limitations. Particularly revealing records include anonymous 1889 letters by British servants and cautious later interviews with formerly enslaved people. The older protest-centred group records are no longer in the visible selection; the 69 Personal Archives remain unchanged.

Method: **nonparticipation in overt rebellion does not prove acquiescence, secretly wished-for rebellion, or an absence of quieter forms of agency**. Do not invent collective first-person statements. When no individual's thoughts survive, state structural risk as an explanation to investigate, not as a documented motive.

## November 2026: Ten collective archives
The independent `#/collectives` wing now presents **10** bilingual historically grounded collective dossiers: British domestic servants, North Indian widows, Edo Japan status communities, antebellum enslaved Black households, Joseon Korean widows, rural Chinese footbinding, Javanese farmers under Dutch forced cultivation, post-emancipation Black American sharecroppers, US industrial child workers, and Victorian British recipients of poor relief.

Each exhibit is a **social-historical account**, not a fictional composite biography or a story of a successful uprising. Each has more than 1,000 English words across the historical description and separate analysis and more than 1,000 Chinese Han characters in the historical description, plus a separate analytical section (5–10 factors with specific historical context) and three audience reflection questions, followed by evidence limits and external historical sources. No individual's silent thoughts are invented.

The earlier four protest-centred group archive exhibits (`enslaved-literacy`, `married-women-property`, `matchgirls-1888`, `south-africa-pass-women`) were removed from the live catalogue and their now-unused source modules deleted. Personal Archives (69 historical cases) remain separate and unchanged.

## November 2026: gender and social-institution balance
The Collective Archives now show **13** longform dossiers, adding three male-focused historical groups: Royal Navy sailors subject to British impressment (18th–early 19th century); Black male migrant mine workers in South Africa (late 19th–early 20th century); Christian boys levied through the Ottoman devshirme (15th–early 17th century). These introduce different forms of coercion involving military recruitment, racialised labour housing and forced childhood recruitment. Each contains >1,000 English words across its historical description and analysis, >1,000 Chinese characters in its historical description, six case-specific explanatory factors, three reflection questions, evidence limits and scholarly/historical sources.

As before, the exhibit does not equate nonparticipation in an uprising with consent, cowardice, or proven internal dissent. The independent 69 Personal Archives are not modified.

## Objective historical introductions (latest revision)
The historical introductions of all 13 Collective Archives have been re-edited to remove first-person curator narration, rhetorical questions and explicit claims about undocumented individual intentions. The opening sections now document geography, chronology, social conditions, restrictions, legal and economic structures, and differences within the population. The case-specific interpretive account of why open refusal could be difficult is **reserved for the subsequent analysis panel**, followed by independent reflection questions and limits of the historical evidence.

A content audit confirms: 13 group exhibits, no first-person narrator or rhetorical questions in their Chinese or English historical introductions, and every Chinese introduction exceeds 1,000 Han characters. Some standalone English historical introductions are shorter than 1,000 words after removing interpretation; the **full English exhibit including separate analysis** is above 1,000 words. These checks verify generated text and script syntax, not live browser behaviour or every external source's accuracy.

## Historically contextualised full-length descriptions (latest)
All **13** bilingual Collective Archives now have self-contained historical-description bodies of **at least 1,000 English words and 1,000 Chinese Han characters**, *excluding* the separate sections analysing reasons for withheld protest, evidence limits and reflection questions. Added verified, case-specific historical material on housing and working arrangements, different social ranks, schools and literacy, administrative systems, family economies, and concrete historical documents. The added material appears within the descriptive articles rather than being appended as thesis statements. Sources from historical institutions and scholarship are linked in the relevant cases. The new English minimum is 1,058 words (antebellum enslaved households), and Chinese minimum exceeds 1,200 Han characters. Text-level and dependency-order checks passed; live cross-device browser testing and exhaustive source verification remain outstanding.

## Further visual and analytical review (November 2026)
The homepage Historical Archive portal now uses a gold outline 90×90 SVG book, consistent with the other four icon slots, and its background/border is unified. The personal Kafka exhibit now treats Max Brod's later report of attempted delivery through Kafka's mother Julie as reported biographical testimony and distinguishes this from documented manuscript evidence and unverifiable private motives. Kafka's five reason-analysis paragraphs now substantively discuss the route of the undelivered letter, not the same rhetorical question repeated.

All **68 other** indexed personal exhibit records have had their central cause/interpretation field replaced with an individually written, fact-limited account of the real constraint or publishing purpose, correctly distinguishing active resistance, coerced suppression, personal privacy and voluntary pseudonym use; an independent reader reflection question follows the analysis. (Kafka is the 69th.)

All **36** original personal history records now have an image descriptor for an authentic archive image, photo, autograph or original portrait, including individually sourced images for Kafka, Lincoln, Anne Lister, Sophie Germain, Fanny Mendelssohn, Eileen Chang, Elizabeth I and Thomas Hardy. The **33** later personal records and **13** collective records use a dynamic Wikimedia image lookup with original-file attribution on exhibit detail pages: this is a *best-effort conditional lookup*, not proof that every request renders on every network/browser. Context images must not be presented as photos of a specifically described event. Live image loads, content appropriateness, licensing and device layout still require manual browser/source verification.

Seven potential new groups are *only research candidates* pending user review; they have not been added to the public collective catalogue (which remains at 13).

## Visitor feedback (configuration required)
- The trilingual `#/feedback` visitor-book page collects a category, optional page reference, and feedback text.
- **Before submissions work:** the project administrator must execute `supabase-feedback-setup.sql` in the existing Supabase project's SQL Editor. The GitHub Pages frontend cannot create database tables or policies by itself.
- On successful insertion, feedback is stored privately in the `public.museum_feedback` table. Check records in the Supabase Table Editor using project-owner access. No email notifications are configured; checking the table is required.
- Public clients are granted INSERT only, not SELECT, UPDATE, or DELETE. For heavy public traffic add server-enforced CAPTCHA/rate limiting. Never place a service-role key in the website.
- A GitHub issue link is provided when submission fails, but requires the visitor to sign into GitHub and repository issue notifications depend on account settings.

## Collective archive ordering
- The 13 existing collective dossiers are now grouped into four themed rooms and ordered by historical beginning within each room. Seven additional agreed dossiers have not yet been imported or verified; do not relabel the index as 20 until all seven are present with their research and full translations.
- The Chinese collective texts are stored in Simplified Chinese; Traditional Chinese is generated at display time using OpenCC, so quality and locale-specific usage still require native review.
