---
name: "Demo Deck Builder"
description: "Turnkey Claude Code skill + HTML scaffold for building Shopify × Merchant demo decks in the transferflow style. Dark UI, teal accents, animated Gemini/Sidekick chat mockups, quick-site ready. Pre-built slide patterns for every section of a modern B2B/DTC pitch."
url: "https://github.com/dustinfloer/b2b-ai-catalog/tree/main/tools/demo-deck-builder"
category: "Tools"
built_with: "Claude Code Skill + HTML/CSS/JS Scaffold"
audience: "Both"
author: "Dustin Floer"
author_slack: "@dustin.floer"
date_added: "2026-04-17"
screenshot: ""
slack_channel: "global-b2b-sales-team"
repo_url: "https://github.com/dustinfloer/b2b-ai-catalog/tree/main/tools/demo-deck-builder"
---

# Demo Deck Builder

A reusable, turnkey skill for building polished Shopify × Merchant demo decks — the same visual style Jordan/Terry/Matt pioneered with the transferflow deck. No starting from scratch, no copy/paste from old decks, no redesign work each time.

## What It Does

Gives you two ways to build a deck:

- **For SEs (Claude Code users):** Drop the skill into `~/.claude/skills/`, then run `/demo-deck-builder [merchant]` in any Claude Code session. Claude reads the merchant's briefing/config/discovery notes, asks 3 clarifying questions, and generates a fully customized deck.
- **For AEs (no Claude Code needed):** Download `template.html`, open in VS Code or any text editor, and follow the [customization guide](./skill/references/customization-guide.md). Each slide type has a copy-paste HTML snippet in the [slide patterns reference](./skill/references/slide-patterns.md).

## Why It's Different from AI HTML Decks

[AI HTML Decks](../ai-html-decks/) (Terry/Matt/Brandon's workflow) is the general approach — prompt Claude, get HTML. **This tool removes the "where do I start" friction** by providing:

- A pre-built scaffold with all CSS/JS (1,700+ lines, tuned over dozens of iterations)
- 13 slide pattern types documented with copy-paste HTML
- Animated Gemini + Sidekick chat mockups with timed message reveals
- Visual effects baked in (mesh gradient backgrounds, floating particles, pulse rings on section headers, gradient text accents)
- A Claude Code skill that fully automates the build for SEs

Think: **AI HTML Decks = prompt → result. Demo Deck Builder = skill → result + patterns library for iteration.**

## When to Use It

- Pre-sales demo decks for any B2B / DTC / hybrid Shopify deal
- Executive presentations where the merchant expects polish
- Decks that will be hosted on a quick site and shared externally
- Decks that need animated "wow" moments (Gemini simulations, Sidekick mockups)

## What You Get

Every generated deck includes:

| Feature | Description |
|---------|-------------|
| **Cover slide** | Shopify × Merchant logos, eyebrow, title, meta bar with AE/SE names |
| **Discovery Recap** | Two-column list — what's confirmed vs in motion |
| **About Shopify** | 4-tile stats grid with gradient numbers |
| **B2B Evolution** | 4-point horizontal timeline |
| **Customer Proof** | 6-tile peer brand grid |
| **Aspiration** | Big centered vision statement |
| **Agenda** | 3-column grouped TOC with staggered reveal |
| **Section Headers** | Pulse rings + glowing headline + badge row |
| **Agentic Commerce** | Animated Gemini chat (4 messages, timed reveals, embedded product page) |
| **Sidekick** | Animated Sidekick chat showing real operational workflows |
| **Feature slides** | Two-column with browser mockups (12+ mock types available) |
| **Three Anchors** | Outcomes summary with 3 cards |
| **Pricing Tiers** | 3-column with featured middle tier + math callout |
| **Closing** | Next-steps cards with staged reveal |

Navigation built in: keyboard arrows, space, click zones, swipe, bottom nav dots, progress bar, speaker tag (Zach/Dustin toggle per slide).

## Live Example

The [PDI demo deck](./examples/pdi-demo-deck.html) (152KB, 25 slides) is the reference implementation. Download it and open in Chrome to see everything in action.

## How to Get Started

### For SEs (Claude Code users)

1. Clone this repo or download the `skill/` folder from GitHub
2. Copy the skill into your Claude Code setup:
   ```bash
   cp -r tools/demo-deck-builder/skill ~/.claude/skills/demo-deck-builder
   ```
3. Restart Claude Code (or the VS Code extension) so it picks up the new skill
4. In any session, type `/demo-deck-builder [merchant name]` — Claude handles the rest

### For AEs (no Claude Code needed)

1. Download `template.html` from this folder
2. Open in VS Code, Cursor, or any text editor
3. Read [`skill/references/customization-guide.md`](./skill/references/customization-guide.md) — it's written for humans
4. Copy slide HTML from [`skill/references/slide-patterns.md`](./skill/references/slide-patterns.md) for whichever slides you need
5. Edit content, save, open in Chrome to present

## Reference Docs (Inside This Folder)

- [`skill/SKILL.md`](./skill/SKILL.md) — Claude Code skill definition and workflow
- [`skill/references/slide-patterns.md`](./skill/references/slide-patterns.md) — Every slide type with HTML snippets
- [`skill/references/visual-effects.md`](./skill/references/visual-effects.md) — Mesh bg, particles, pulse rings, gradient accents
- [`skill/references/chat-animation.md`](./skill/references/chat-animation.md) — Gemini/Sidekick animated chat pattern
- [`skill/references/customization-guide.md`](./skill/references/customization-guide.md) — 9-step adaptation workflow

## Tips

- **Let the Gemini chat play out** — the 12.5s message reveal sequence gives you time to narrate
- **Pick the right persona** — Gemini = consumer buyer, Sidekick = merchant operator. Don't mix them
- **Only include Sales Rep slide if they have sales reps** — otherwise it's a hallucination from other templates
- **Max 3 section headers per deck** — pulse rings lose impact if overused
- **Default palette is healthcare teal** — swap in the `:root` CSS variables for different industries (recipes in the customization guide)
- **File stays under 300KB** — safe for quick-site upload even with embedded logo

## Credits

Visual style inspired by the transferflow quick site built by Jordan Yeats, Terry Kealey, and Matt Ward. Scaffolding extracted and generalized after iterating with Claude Code on the PDI demo deck (April 2026).

## Feedback

DM `@dustin.floer` on Slack or ping `#global-b2b-sales-team` with questions, requests, or examples of decks you've built with it.
