# The Unsent Museum

An interactive literary museum about choosing silence or speaking up.

## Publication status
The site frontend is in `index.html` on the `main` branch. GitHub Pages must be enabled by the repository owner under **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.

## IMPORTANT: Preview safeguards
This published preview is **local-only**: visitors can explore four illustrative scenarios, answer branching multiple-choice questions, draft stories, and see blue/gold stars generated from entries **in their own browsers**. It is NOT connected to Supabase, does NOT receive live submissions, and does NOT display shared visitor data. This is intentional until the project's previously exposed Supabase secret key has been revoked, the planned SQL setup is applied, moderation is configured, and abuse prevention has been tested.

Do not claim that local answers represent multiple visitors.

## Next steps
1. Revoke/rotate the previously exposed `sb_secret_` key in Supabase.
2. Run and verify the separately prepared `database_setup.sql` (held in the downloadable V1.2 package) before enabling database calls.
3. Review permissions/RLS, public RPC functions, rate limiting and moderation.
4. Replace illustrative story text with verified first-person nonfiction accounts and add citations, reflective statement and bibliography.
5. Once verified, integrate the fuller Supabase-connected V1.2 site carefully, retaining the database protection.

No high-privilege credentials are committed to this repository.