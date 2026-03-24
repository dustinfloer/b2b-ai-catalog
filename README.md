# B2B AI Tools Catalog

A shared directory of AI-powered tools, simulations, and references built by the B2B SE team.

**[Browse the Catalog](https://shopify-playground.github.io/b2b-ai-catalog/)**

---

## What Is This?

We're building incredible AI resources across the B2B team — quick sites, MCP tools, simulations, and more. This repo is the single place to discover everything that exists, find the link, and learn how to use it.

The repo is a **catalog** (directory), not a hosting platform. Each entry links out to wherever the tool actually lives.

## Categories

| Category | What Belongs Here |
|----------|-------------------|
| **Simulations** | Interactive demos, sandbox environments, merchant-facing proof of concepts |
| **Tools** | Utilities that help SEs do their job — research, prep, scoring, automation |
| **References** | Lookup resources, cheat sheets, decision trees, comparison guides |

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
- The catalog site at [shopify-playground.github.io/b2b-ai-catalog](https://shopify-playground.github.io/b2b-ai-catalog/) provides search and filtering

## Questions?

Drop a message in the team Slack channel or open an issue on this repo.
