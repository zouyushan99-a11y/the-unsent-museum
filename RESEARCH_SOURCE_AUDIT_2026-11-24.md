# The Unsent Museum · Research Source Audit

Audit date: 2026-11-24. Scope: the 36-source research atlas, six bilingual dossier datasets and eight comparative research essays.

## Method and limits
- Verified that the catalog contains **36 unique source IDs** (R01–R36) and that the six dossier modules provide one matching record for every ID.
- Verified that the eight comparative research essays refer to existing source IDs.
- Checked that each source has a publication citation, evidence-access stage and HTTPS source address; where the original DOI is available, it is now included in the citation.
- Compared selected higher-risk claims against original articles, journal abstracts or academic/publisher records. **This is not a claim to have reread all 36 complete sources.**
- Did not edit page design, exhibition imagery, background images, layouts, music, user-submitted writing or database records.

## Confirmed link repairs
1. **R07 — Flynn & Lake (2008)**: the catalog previously used an unrelated DOI, `10.1016/j.jesp.2008.01.002`. Corrected to `https://doi.org/10.1037/0022-3514.95.1.128`, as recorded in PubMed and Cornell/Stanford bibliographies.
2. **R33 — Spivak (1988)**: the catalog previously used `https://www.jstor.org/stable/466624`, which resolves to an unrelated essay. Replaced with the Centre for the Study of Culture and Society’s record of the 1988 essay: `https://www.cscsarchive.org/dataarchive/otherfiles/PhD0010003`. The research dossier now prioritizes that record; a later Columbia University Press edition remains linked as an alternative rather than being presented as the 1988 text.
3. Completed missing DOI strings in the existing reference-list entries for **R07, R13, R17, R18, R20, R21, R24, R28 and R35**, using DOI URLs already attached to those same dossiers.

## Selected findings corroborated against the source
- **R01 — Lu, Fang & Qiu (2023)**: seven main and four supplementary studies; studies 6–7 specifically varied requester power and expected future contact. Source: https://doi.org/10.1037/xap0000457
- **R02 — Schlund, Sommers & Bohns (2024)**: the pooled behavioural compliance difference was *not* significant at 0.05 (OR 1.54; p .053), whereas reported freedom to refuse improved. Source: https://www.nature.com/articles/s41598-023-50532-3
- **R03 — Givi & Kirk (2024)**: overpredicted negative responses to declined leisure invitations; not a general test of coercive or unequal relationships. Source: https://doi.org/10.1037/pspi0000443
- **R09 — Fischer et al. (2011)**: 105 independent effect sizes in the bystander-effect meta-analysis; effects vary with emergency context. Source: https://doi.org/10.1037/a0023304
- **R10 — Edmondson (1999)**: 51 working teams; association between psychological safety and learning, not a causal emergency-intervention experiment. Source: https://doi.org/10.2307/2666999
- **R22 — Das & Kramer (2013)**: 71% refers to users with at least one defined nonpublication event in the 17-day observation window; 33% and 13% refer to posts and comments respectively. Source: https://doi.org/10.1609/icwsm.v7i1.14412
- **R23 — Marwick & boyd (2011)**: 226 responses from 181 Twitter users; a qualitative inquiry, not a population estimate of abandoned drafts. Source: https://doi.org/10.1177/1461444810365313
- **R27 — Petronio (2002)**: communication privacy management is a theoretical framework; privacy boundary coordination and turbulence are not percentages from a single experiment. Source: https://www.jstor.org/stable/jj.18255126
- **R31 — Hartman (2008)**: confirmed the journal article *Venus in Two Acts* and matching publisher DOI. Source: https://doi.org/10.1215/-12-2-1
- **R35 — Schweiger & Tomiak (2022)**: confirmed journal, year, pages and DOI. Source: https://doi.org/10.1177/03058298221083999
- **R36 — Dragojlovic & Samuels (2023)**: confirmed the anthropology encyclopedia entry. Source: https://doi.org/10.29164/23silence

## Evidence policy and remaining review
- Research findings and the Museum’s interpretation remain separately labeled. A theoretical work is not described as an experiment, and an association is not automatically described as causal.
- Full individual text/fact verification remains necessary for sources whose dossier stage indicates only an abstract, institutional overview, publisher preview or excerpt.
- Do not generalize short-term/situational findings to every culture, historical period or personal motive.
- References generated from the six dossier modules should be kept consistent with the atlas; run `npm run test:research` after editing a source or essay.
- The automated checks validate internal consistency, not external truth or the continued availability of each external website.
