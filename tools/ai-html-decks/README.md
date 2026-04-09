---
name: "AI HTML Decks"
description: "Build browser-native presentation decks with Cursor + Claude instead of Google Slides. Ship as a standalone .html file or host on a Quick Site — no Google account required."
url: "https://slide-deck-exploration.quick.shopify.io/"
category: "Workflows"
built_with: "HTML + CSS + JS (AI-generated via Cursor + Claude)"
audience: "SE-facing"
author: "Terry Kealey, Matt Ward, Brandon Anderson"
author_slack: "@matt.ward"
date_added: "2026-04-09"
screenshot: ""
slack_channel: "global-b2b-sales-team"
repo_url: ""
---

# AI HTML Decks

Build polished, self-contained presentation decks using Cursor + Claude instead of Google Slides. The AI generates all HTML/CSS/JS from your outline — you get a file that runs in any browser, hosts on a Quick Site, or ships directly to clients.

## Origin

Terry Kealey built the Hatley deck — the first real-world AI-generated HTML deck on the B2B SE team and the proof of concept that kicked off this workflow. Matt Ward expanded on it to educate the broader team. Brandon Anderson later added presenter features on top of Matt's team meeting deck.

## Why HTML over Slides

- **Faster:** Re-prompt Claude to redesign or restructure in seconds; no drag-and-drop formatting
- **Portable:** Standalone `.html` file — no Google account, no Slides access needed for the client
- **Presenter-ready:** Speaker notes + timer, laser pointer, slide grid, keyboard shortcuts (built-in)
- **Version-controlled:** Treat it like code — commit and iterate via a repo or Quick Site

## Presenter Features (added by Brandon Anderson)

| Key | Action |
|-----|--------|
| `← / →` | Previous / next slide |
| `F` | Fullscreen |
| `L` | Toggle laser pointer |
| `G` | Open slide selector grid |
| `S` | Toggle speaker notes |
| `?` | Show all keyboard shortcuts |

## Workflow

1. Open Cursor and prompt Claude with your deck outline (topic, sections, audience, tone)
2. Claude generates a full self-contained HTML file
3. Preview locally, then re-prompt to iterate on design or content
4. **Internal:** Post to a Quick Site for shareable access
5. **External:** Attach the `.html` file directly in your email to the client

## Live Example

[slide-deck-exploration.quick.shopify.io](https://slide-deck-exploration.quick.shopify.io/)

> **Note:** This is an internal-only workflow. Do not share Quick Site links externally — use the `.html` file attachment approach for clients.
