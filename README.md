# SE Field Guide

Tools, simulations, references, and guides — built by the **B2B SE Team** for the broader SE community.

**[Browse the Field Guide](https://dustinfloer.github.io/b2b-ai-catalog/)**

---

## What Is This?

The B2B SE team builds a lot — quick sites, MCP tools, simulations, primers, theme forks. This is the single place to discover everything that exists, find the link, and learn how to use it.

The repo is a **catalog** (directory), not a hosting platform. Each entry links out to wherever the asset actually lives.

Items that are specifically about B2B (App Directory, Field Learnings, Demo Recipes, Punchout primer, etc.) are tagged **B2B** so cross-segment SEs can filter them out or in.

## Categories

| Category | What Belongs Here |
|----------|-------------------|
| **Tools** | Utilities that help SEs do their job — research, prep, scoring, automation |
| **Simulations** | Interactive demos, sandbox environments, merchant-facing proof of concepts |
| **References** | Lookup resources, cheat sheets, decision trees, comparison guides |
| **Workflows** | End-to-end processes the team has codified (deck building, demo prep, etc.) |
| **Guides** | Primers, walkthroughs, and explainers that level up SE craft |

## Adding a Tool

Built something you're proud of? Add it to the catalog in under 5 minutes — no git CLI required.

**[Full Contributing Guide](CONTRIBUTING.md)**

### Quick Version

1. Go to [templates/new-tool.md](templates/new-tool.md) and copy the contents
2. Create a new folder under `tools/` with your tool's name
3. Paste into a `README.md` in that folder and fill it out
4. Open a Pull Request — the catalog updates automatically on merge

## How It Works

- Each tool lives in its own folder under `tools/` with a `README.md` containing metadata
- A GitHub Action automatically builds the browsable catalog site on every merge to `main`
- The catalog site at [shopify-playground.github.io/b2b-ai-catalog](https://dustinfloer.github.io/b2b-ai-catalog/) provides search and filtering

## Questions?

Drop a message in the team Slack channel or open an issue on this repo.
