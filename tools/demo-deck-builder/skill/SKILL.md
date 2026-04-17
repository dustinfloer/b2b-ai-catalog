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

One self-contained HTML file at `merchants/[merchant]/demo-deck.html` containing:
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
- `references/customization-guide.md` — how to adapt palette, logo, speakers per merchant
- `examples/pdi-demo-deck.html` — full reference implementation

## Workflow

### Step 1: Gather Merchant Context

Read (skip missing files):
- `merchants/[merchant]/briefing-document.md`
- `merchants/[merchant]/raw-files/config.md`
- `merchants/[merchant]/raw-files/additional-context/*`
- Salesforce via `revenue-mcp` if no brief exists

Capture:
- Merchant name, logo path, industry
- Deal size, deal type (B2B / DTC / hybrid)
- Discovery recap (what's confirmed / in motion)
- Product/use-case specifics
- Stakeholders (attendees, decision makers)
- AE and SE names (speakers)

### Step 2: Ask 3 Clarifying Questions (via AskUserQuestion)

Before building, confirm:

1. **Macro structure** — How many sections? Suggested: `Opening (AE) → Modern Platform → Buyer Journeys → Operations → Pricing & Close (AE)`. User may want fewer sections or different groupings.

2. **Signature "wow" scenario** — What scenario plays in the animated Gemini chat? Should reflect merchant's ICP buyer asking a realistic question. For B2B-light merchants, keep it DTC. For B2B-heavy, can include company context.

3. **Brand palette preference** — Default is teal (`#14a098` + `#1cc7bd`) + navy (`#1e3a5f`). Offer to swap if merchant has distinct brand colors (check their website). Always keep dark bg and Inter typography.

### Step 3: Copy Template + Customize

```bash
cp .claude/skills/demo-deck-builder/references/template.html merchants/[merchant]/demo-deck.html
```

Then edit to:
- Swap `[MERCHANT]` placeholders in `<title>` and watermark
- Embed merchant logo (base64 encode PNG if present, or use text logo)
- Update `:root` CSS variables if palette swap
- Add the speakers' first names to `data-speaker` attributes

### Step 4: Build the Slides

Use `slide-patterns.md` to compose slides in order. Typical 18-25 slide structure:

| Section | Slides | Speaker |
|---------|--------|---------|
| **Opening** | Cover, Discovery Recap, About Shopify, B2B Evolution (if B2B deal), Customer Proof | AE |
| **Bridge** | Aspiration, Agenda (3-col TOC) | SE |
| **Modern Commerce Platform** | Section Header, Agentic Commerce, Sidekick | SE |
| **Buyer Journeys** | Section Header, 3-8 feature slides (DTC, B2B login, variants, checkout, sales rep, companies, pricing, etc.) | SE |
| **Operations & Integration** | Section Header, ERP integration, 3PL/fulfillment, Marketing & Analytics | SE |
| **Close** | Three Anchors, Pricing, Closing Steps | AE |

### Step 5: Wire Animated Chats

For Gemini slide (`id="gemini-chat"`) and/or Sidekick slide (`id="sidekick-chat"`):
- Give each message a `data-chat-delay="N"` in milliseconds
- Typical sequence: `500ms → 4500ms → 8500ms → 12500ms`
- The JS handles everything once IDs + delays are in place
- See `chat-animation.md` for patterns

### Step 6: Verify

Open the file in Chrome and walk through:
- Arrow keys navigate
- Nav dots work
- Gemini + Sidekick chats animate on activation
- No content cut off
- Mesh bg + particles render on every slide
- Pulse rings only on section-header slides
- Speaker tag (top-right) toggles correctly

### Step 7: Offer to Deploy to Quick Site

Ask the user if they want to:
- Rename to `index.html` and deploy to a quick site
- Or just present locally from Chrome (full-screen with `F` key)

## Key Principles

- **Always preserve the visual identity**: dark bg, teal accents, Inter font, bolded inline highlights, gradient text on `.accent` spans
- **Keep speakers named**: use `data-speaker="FirstName"` — shows in top-right badge per slide
- **Merchant content lives in slides, never in CSS/JS**: the template is merchant-agnostic
- **One file, no external assets**: everything embedded (logo base64, fonts via Google Fonts CDN)
- **D2C default for Gemini**: consumer buyer asking AI, not enterprise B2B unless merchant explicitly sells B2B
- **Don't hallucinate context**: if merchant has no field sales team, don't include a Sales Rep slide
