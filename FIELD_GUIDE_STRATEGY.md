# SE Field Guide Strategy

## North Star

The SE Field Guide is the internal source of truth for SE-built tools, demo assets,
app guidance, field learnings, and repeatable workflows.

It should answer three practical questions for any SE:

1. What exists?
2. Can I trust it?
3. What should I do next?

The catalog should feel like maintained operating infrastructure, not a loose list of
links. B2B remains a strong domain inside the guide, but the audience is all SEs.

## Product Shape

The experience should support three entry points:

- **Find:** Search and browse tools, decks, learnings, apps, recipes, and workflows.
- **Decide:** Start from a merchant problem and route to the recommended asset or pattern.
- **Execute:** Copy prompts, open tools, install skills, reuse deck patterns, and follow playbooks.

The current site does "Find" well. The next version should add stronger "Decide" and
"Execute" paths.

## Trust Model

Every published entry needs visible trust metadata:

- `status`: lifecycle state for the entry
- `access_level`: who can open it
- `source_of_truth`: where canonical content lives
- `reviewed_by`: accountable reviewer
- `last_reviewed`: freshness anchor
- `review_cycle_days`: review cadence

Freshness is not cosmetic. If an entry is old, the UI should make that visible and CI
should flag it.

## Lifecycle

Use these states:

- `draft`: work in progress; not ready for normal discovery
- `active`: reviewed and ready to use
- `needs_review`: likely useful, but needs owner attention
- `stale`: review window has expired
- `deprecated`: retained for history, but should not be recommended

## Review Cadence

Default cadences:

- Tools and workflows: 90 days
- App recommendations: 60-90 days
- Field learnings: 180 days, or sooner when platform behavior changes
- Demo recipes and decks: 180 days, or mark historical if they are retained as examples

## App Guidance Direction

The app directory should be opinionated, with evidence.

Recommended tiers:

- `native_first`: evaluate Shopify-native capability first
- `se_vetted`: credible option with known field usage
- `use_with_caveats`: useful, but with known implementation or fit risks
- `specialist_partner_led`: valid, but usually requires partner or services support
- `avoid_or_legacy`: known mismatch, stale recommendation, or superseded path

Useful app fields:

- `best_for`
- `not_for`
- `native_alternative`
- `recommendation_tier`
- `implementation_complexity`
- `buyer_visible`
- `data_touched`
- `known_gotchas`
- `reviewed_by`
- `last_reviewed`
- `confidence`

## Source Of Truth

The repo is the canonical published source for the guide.

Google Docs, Sheets, Slack threads, and quick sites can remain source material or
supporting evidence, but any guidance shown in the Field Guide should be owned and
reviewed in this repo.

## Near-Term Roadmap

1. Add validation for catalog frontmatter and JSON data.
2. Add trust metadata to every top-level catalog entry.
3. Surface status and freshness in the UI.
4. Add an "I need to..." decision layer on the homepage.
5. Add app recommendation tiers and native-first guidance.
6. Add a review dashboard for stale entries, missing owners, and missing metadata.
