# The Unsent Museum

An interactive literary museum about the words people choose not to say.

## Live site
https://zouyushan99-a11y.github.io/the-unsent-museum/

## Current implementation (v27 visual release)
- The homepage retains a painted museum foyer with individually linked visual assets, including a high-resolution foyer image and separate ornamental, room, and paper textures.
- The interface source is English-only.
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

## Content work remaining
Replace illustrative accounts with verified or ethically gathered stories, check permission and anonymity, and complete course-related source citations, bibliography, and curator's reflective statement.
