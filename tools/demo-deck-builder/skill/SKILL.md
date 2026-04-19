---
name: demo-deck-builder
description: "Generate a self-contained HTML demo deck for any Shopify merchant in the transferflow/PDI style (dark UI, teal accents, animated mesh backgrounds, pulse rings on section headers, animated Gemini/Sidekick chat mockups, quick-site ready). Single portable HTML file with all CSS/JS/logo embedded. Triggered by 'build demo deck for [merchant]', 'create demo deck for [merchant]', 'generate presentation for [merchant]', 'deck builder', '/demo-deck-builder'."
---

# Demo Deck Builder

Generate a polished, self-contained HTML demo deck for any merchant using the proven Shopify × transferflow visual language. Output is a single HTML file that can be opened locally, dropped into a quick site, or presented full-screen in Chrome.

## When to Use

- `/demo-deck-builder [merchant]`
- "Build demo deck for [merchant]"
- "Create a Shopify × [merchant] presentation"
- "Generate a deck for [merchant]"
- "Make a pitch deck for [merchant]"

**Do NOT use** for Demo2Win scripts (use `/demo2win-prep`), call prep (`/call-prep`), or pre-populating the quick-site Demo Prep tool (`/demo-prep`).

## Output

One self-contained HTML file at `merchants/[merchant]/index.html` (named `index.html` so it works as the root of a quick site) containing:
- Navigation (progress bar, nav dots, counter, keyboard, click zones, swipe)
- All CSS/JS embedded (no external deps beyond Google Fonts)
- Merchant logo embedded as base64 (if available at `merchants/[merchant]/[name]_logo.png`)
- 15-25 slides tailored to merchant, Zach/Dustin speaker tags
- Animated chat mockups (Gemini + Sidekick) with timed message reveals

## Prerequisites

Read these before starting:
- `references/template.html` — the blank scaffold (CSS, JS, nav, document structure)
- `references/slide-patterns.md` — every slide type with HTML snippets
- `references/visual-effects.md` — mesh bg, particles, pulse rings, gradient accents, nav dots
- `references/chat-animation.md` — timed message reveal pattern for Gemini/Sidekick/etc
- `references/agentic-commerce-sim.html` — full UCP agentic-commerce sim variant (multi-product mosaic, Google Pay checkout overlay, discount/loyalty/subscription, order confirmation back into chat). Use **instead of** `chat-animation.md` when you want the complete discovery → checkout → confirmation story
- `references/simulation-library.md` — catalog of 12+ animated simulations at simulations.quick.shopify.io (NetSuite, SAP, Oracle, ERP, payments, API, agentic commerce). For architecture / integration / payment-flow slides, prefer these over generating from scratch. **Always inline embed — never iframe.** The sims site is behind Google SSO, so iframes 404 for external viewers and even for signed-in users (IAP blocks iframing). Use a pre-extracted file from this folder when available (`agentic-commerce-sim.html`), or ask the user to paste the sim's "Copy HTML" output for inline embedding
- `references/customization-guide.md` — how to adapt palette, logo, speakers per merchant
- `examples/pdi-demo-deck.html` — full reference implementation

## Workflow

### Step 1: Gather Merchant Context (Thorough)

Do NOT skip this. A deck built on incomplete context is generic. Systematically check all available sources in parallel where possible:

**Local merchant folder:**
- `merchants/[merchant]/briefing-document.md`
- `merchants/[merchant]/raw-files/config.md`
- `merchants/[merchant]/discovery-notes.md`
- `merchants/[merchant]/raw-files/additional-context/*`
- Any other files in `merchants/[merchant]/`

**Salesforce (via revenue-mcp):**
- Opportunity (stage, amount, close date, merchant intent, SE next steps)
- Account (industry, GMV, plan, country)
- Team members (AE, SE — use for speaker names)
- Products on the opp

**Meeting notes & transcripts:**
- Gmail search for `from:gemini-notes@google.com` with merchant name in subject — Gemini auto-generates these as `Notes: "<meeting>" <date>`
- Google Drive search for merchant name — turn up transcripts, discovery docs, proposals
- Scout for call transcripts if the merchant has been called

**Collaborative context:**
- Slack: search for merchant-specific channels (common pattern: `#account-b2b-[merchant]`, `#account-[merchant]`) — read recent threads
- SENTRAL: query for merchant context and similar-merchant patterns

**Public research (WebFetch / WebSearch):**
- Merchant homepage — product lines, positioning, hero messaging
- About / company pages — mission, team, brand voice signals
- Recent news or press releases (last 90 days) — launches, funding, expansion, leadership changes
- If B2B: check for a wholesale or trade portal — tells you their current B2B UX
- Brand palette signals (colors on their site) for the palette decision in Step 3

This is how the deck stops feeling like a template and starts feeling like you did your homework.

**Capture:**
- Merchant name, logo path, industry
- Deal size, deal type (B2B / DTC / hybrid)
- Discovery recap (what's confirmed / in motion)
- Product/use-case specifics
- Stakeholders (attendees, decision makers)
- AE and SE names (speakers)
- Signature pain points or aspirations (pulled from notes/transcripts verbatim when possible)

### Step 2: Verify Context Before Building

Present a summary of what was found and what's missing. Example:

> Found:
> - briefing-document.md (updated 3 days ago)
> - Salesforce opp ($450K, Negotiating, close 2026-05-15)
> - 3 Gemini meeting notes (Apr 8, Apr 12, Apr 15)
> - 2 Drive docs (Discovery Deck, Technical Assessment)
>
> Missing:
> - No call transcript in Scout
> - No Slack channel found for `#account-[merchant]`
> - No SENTRAL context on similar merchants
>
> Proceed with what I have, or do you want to point me to additional context?

Wait for confirmation before moving on. This is the moment to catch missing sources — AFTER the deck is built it's painful to redo.

### Step 3: Ask 3 Clarifying Questions (via AskUserQuestion)

Before building, confirm:

1. **Macro structure** — How many sections? Suggested: `Opening (AE) → Modern Platform → Buyer Journeys → Operations → Pricing & Close (AE)`. User may want fewer sections or different groupings.

2. **Signature "wow" scenario** — What scenario plays in the animated Gemini chat? Should reflect merchant's ICP buyer asking a realistic question. For B2B-light merchants, keep it DTC. For B2B-heavy, can include company context.

3. **Brand palette preference** — Default is teal (`#14a098` + `#1cc7bd`) + navy (`#1e3a5f`). Offer to swap if merchant has distinct brand colors (check their website). Always keep dark bg and Inter typography.

### Step 4: Copy Template + Customize

```bash
cp .claude/skills/demo-deck-builder/references/template.html merchants/[merchant]/index.html
```

Then edit to:
- Swap `[MERCHANT]` placeholders in `<title>` and watermark
- Embed merchant logo (base64 encode PNG if present, or use text logo)
- Update `:root` CSS variables if palette swap
- Add the speakers' first names to `data-speaker` attributes

### Step 5: Build the Slides

Use `slide-patterns.md` to compose slides in order. Typical 18-25 slide structure:

| Section | Slides | Speaker |
|---------|--------|---------|
| **Opening** | Cover, Discovery Recap, About Shopify, B2B Evolution (if B2B deal), Customer Proof | AE |
| **Bridge** | Aspiration, Agenda (3-col TOC) | SE |
| **Modern Commerce Platform** | Section Header, Agentic Commerce, Sidekick | SE |
| **Buyer Journeys** | Section Header, 3-8 feature slides (DTC, B2B login, variants, checkout, sales rep, companies, pricing, etc.) | SE |
| **Operations & Integration** | Section Header, ERP integration, 3PL/fulfillment, Marketing & Analytics | SE |
| **Close** | Three Anchors, Pricing, Closing Steps | AE |

**Grounding rule — write specific, not generic.**

Every content slide should pull from the merchant context gathered in Step 1, not template language. Specific > generic.

- Discovery Recap: use the merchant's actual confirmed/in-motion points from meeting notes, not made-up bullets
- Aspiration: quote or paraphrase the merchant's own vision statement where one exists in notes
- Feature slides: tie each to a real pain point or goal the merchant mentioned. If config.md says "reconciling orders between Shopify and NetSuite takes 15 hours a week," that's what the ERP slide addresses — by name
- Customer Proof: pick peer brands in the merchant's vertical or with a similar business model, not a generic hall of fame
- Pricing: reference the actual opportunity amount and structure from Salesforce

If a slide can't be grounded in merchant-specific context, either pull it (don't pad the deck) or mark it clearly as a generic Shopify capability slide, not a "this is about you" slide. Generic slides in a tailored deck are the tell that you didn't do the work.

### Step 6: Wire Animated Chats

For Gemini slide (`id="gemini-chat"`) and/or Sidekick slide (`id="sidekick-chat"`):
- Give each message a `data-chat-delay="N"` in milliseconds
- Typical sequence: `500ms → 4500ms → 8500ms → 12500ms`
- The JS handles everything once IDs + delays are in place
- See `chat-animation.md` for patterns

### Step 7: Verify

Open the file in Chrome and walk through:
- Arrow keys navigate
- Nav dots work
- Gemini + Sidekick chats animate on activation
- No content cut off
- Mesh bg + particles render on every slide
- Pulse rings only on section-header slides
- Speaker tag (top-right) toggles correctly

### Step 8: Content Review with User

Before calling the deck done, walk the user through the slides for a content pass. Don't skip — this is the step that catches hollow or off-brand content before it lives through a merchant call.

Present a concise slide-by-slide summary, e.g.:

> I've built 22 slides. Key content per section:
>
> **Opening (Jordan)**
> - Cover: Shopify × Acme, Apr 22 meeting
> - Discovery Recap: 4 confirmed points (catalog migration, NetSuite sync, Tier-1 pricing, B2B launch Q3), 2 in-motion (agentic commerce interest, POS expansion)
>
> **Modern Commerce Platform (Dustin)**
> - Agentic Commerce: Gemini sim with "find me a replacement brake pad for my 2019 F-150" scenario — pulled from Apr 15 meeting where Jim mentioned fleet buyers researching parts on their phones
> - Sidekick: warehouse ops scenario (reorder ping based on stock thresholds)
>
> **Buyer Journeys (Dustin)**
> - 4 feature slides: B2B login, Tiered pricing catalogs, Quote-to-order flow, ERP sync with NetSuite
>
> **Close (Jordan)**
> - Pricing: $280K ARR Plus + Implementation ($45K)
> - Closing Steps: Technical Assessment by May 1, POC kickoff May 15
>
> Anything feel off, missing, or too generic? Want me to tweak any slide before we wrap?

Iterate on any flagged slides before moving on. Small fixes here save painful rework after the merchant sees the deck.

### Step 9: Offer to Deploy to Quick Site

File is already named `index.html` — ready to upload. Ask the user if they want to:
- Deploy to a quick site (upload `merchants/[merchant]/index.html` at https://quick.shopify.io — see README for upload steps)
- Or just present locally from Chrome (full-screen with `F` key)

## Key Principles

- **Always preserve the visual identity**: dark bg, teal accents, Inter font, bolded inline highlights, gradient text on `.accent` spans
- **Keep speakers named**: use `data-speaker="FirstName"` — shows in top-right badge per slide
- **Merchant content lives in slides, never in CSS/JS**: the template is merchant-agnostic
- **One file, no external assets**: everything embedded (logo base64, fonts via Google Fonts CDN)
- **D2C default for Gemini**: consumer buyer asking AI, not enterprise B2B unless merchant explicitly sells B2B
- **Don't hallucinate context**: if merchant has no field sales team, don't include a Sales Rep slide
