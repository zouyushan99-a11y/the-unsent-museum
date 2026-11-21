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
- The Historical Wing is split into **Personal Archives** (69 dossiers) and **Collective Archives** (5 researched group dossiers). The collective gallery lives at `#/collectives`.
- The guiding question is **why an impulse to resist may be restrained despite experienced injustice**, not simply which groups were oppressed or who eventually protested.
- Five group dossiers analyse ten case-specific explanatory mechanisms each, including possible economic risk, threat of punishment, family obligations, the anticipation of futility, social norms, missing support networks, and sometimes strategically withheld opposition. The landing page offers six cross-cutting research lenses.
- Do not treat nonparticipation as evidence that a person privately wished to revolt. Clearly distinguish documentary proof of laws and public actions from interpretive social-psychological mechanisms.
- The research links include institutional historical sources and later scholarship on repression, social norms and perceived efficacy; the latter are explanatory frames, not proof of individual historic motives.
- Chinese localization includes static UI, dynamic labels, form placeholders, accessibility text, account status and dialogue prompts; user-submitted stories retain their authors' language. Code-level scans verify that the curated Chinese catalogue and group narratives contain no Latin-script text. This does **not** constitute an exhaustive live-browser visual regression test.

## Content and verification work remaining
Review every historical exhibit against the linked primary or institutional sources, especially where a curatorial interpretation extends beyond documented actions. Verify all language routes in a live browser, including dynamically updated labels and links. Check permission and anonymity of visitor-submitted stories, and complete course-related bibliography and the curator's reflective statement. The current scripts have passed structural and text-count checks, but this does not guarantee browser compatibility or database availability.

## Latest public-facing design changes
- Removed the ENGL course prototype footer credit. The footer now shows only the museum name in the selected interface language.
- Added Chinese-only literary Song/Ming typography with locally available fallback families; English pages retain their original typographic scheme.
- The five collective histories now include ten case-specific explanations and a period-sensitive overview of religious, legal, gendered, educational, economic, technological and social factors. A fifth case draws on the UK National Archives' workhouse and anonymous poor-law complaint collections.
