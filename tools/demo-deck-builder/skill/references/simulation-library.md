# Simulation Library

A grab-and-go catalog of animated simulations at **[simulations.quick.shopify.io](https://simulations.quick.shopify.io/)** — maintained separately so decks don't reinvent them each time.

When a merchant deck needs an architecture, payment, integration, or agentic-commerce slide, pull the source from here instead of generating from scratch.

> ⚠️ **Important:** The simulations site is behind Google SSO (Shopify-only). This means **you cannot iframe sims into a deck** and **external viewers cannot open sim links**. The only pattern that works for merchant-facing decks is inline embedding the HTML. See below.

---

## How to grab a simulation as a slide (the only reliable method)

1. Sign in with your Shopify Google account
2. Open the sim at `https://simulations.quick.shopify.io/<sim-name>.html`
3. Click the **`</> Source`** button (bottom-right of any sim page)
4. Click **Copy HTML** — you get a clean, self-contained HTML block with the `<script src="source-viewer.js">` tag already stripped
5. Paste the `<style>` + slide container + `<script>` blocks directly into your deck (see "Integration patterns" below)

Once pasted inline, the sim runs self-contained in the deck. No network call, no auth, works for merchants viewing the deck externally.

**Do NOT iframe sims.** `simulations.quick.shopify.io` is behind Google Identity-Aware Proxy — iframes will 404 or hit a login wall, even for Shopify employees. The previous version of this doc suggested iframes; it was wrong.

All sims are fully self-contained (no build step, no external JS deps beyond Google Fonts) — they're designed to be copy-pasted, not linked.

---

## Available simulations (as of Apr 2026)

### Agentic Commerce

| Sim | URL | Use when |
|---|---|---|
| **Google Gemini Shopping** | `/gemini-shopping-sim.html` | "Where commerce is going" slide. Merchant wants to see what agentic commerce actually looks like end-to-end. See also the drop-in variant at `agentic-commerce-sim.html` in this skill's references. |

### NetSuite

| Sim | URL | Use when |
|---|---|---|
| iPaaS Integration Flow | `/netsuite-shopify-flow.html` | Mid-market B2B replatforming with Celigo/Boomi in the stack |
| Semi-Technical Order Sync | `/shopify-netsuite-order-sync.html` | Walking a CTO or ops lead through order lifecycle |
| Order & Payment Sync (API Detail) | `/shopify-netsuite-payment-sync.html` | Technical audience — shows webhook events, REST calls, GraphQL operations |
| Multi-Store Inventory Distribution | `/inventory-sync-multi-store.html` | Merchant has multiple storefronts (B2C + B2B) fed by a single NetSuite inventory |

### SAP

| Sim | URL | Use when |
|---|---|---|
| S/4 HANA Integration Architecture | `/shopify-sap-integration.html` | Enterprise merchant with SAP S/4 HANA and middleware |

### Oracle

| Sim | URL | Use when |
|---|---|---|
| Delayed Capture & Order Editing | `/shopify-oracle-order-capture.html` | Oracle-backed merchant needs order validation before payment capture |

### ERP (Generic)

| Sim | URL | Use when |
|---|---|---|
| Full Integration Sync — Order Lifecycle | `/erp-integration-sync.html` | Generic ERP, end-to-end order flow with all API calls visible |
| Routine Payouts to ERP GL Posting | `/routine-payouts-erp.html` | Finance audience — payout reconciliation to GL journal entries |

### API

| Sim | URL | Use when |
|---|---|---|
| Rate Limit Calculator | `/api-rate-limit-calculator.html` | Technical discovery — show request cost, concurrency, plan limits |
| Flow Simulator | `/api-flow-simulator.html` | Request/response flow with rate limit tracking and request queuing |

### Payments

| Sim | URL | Use when |
|---|---|---|
| B2B Payment Flow | `/b2b-payment-flow.html` | Show the three B2B payment paths (Due on Fulfillment, Auth at Checkout, Net Terms) with bank-view timing |

---

## Integration patterns

### Inline embed (recommended, works everywhere)

Copy the sim's full HTML body into one of your deck's `<section class="slide">` blocks. You'll need to:
1. Merge its `<style>` into your deck's `<head>` (all classes are namespaced to avoid collisions)
2. Paste the sim's main container into the slide
3. Append its `<script>` before `</body>`

The [`agentic-commerce-sim.html`](./agentic-commerce-sim.html) in this folder is an example of a pre-extracted embed-ready version. Any SE can do the same for other sims — copy, paste, drop the extracted file into this folder, and it becomes reusable for the whole team.

### Pre-extracted sims in this folder

When a sim is used often enough, extract it once and commit the embed-ready HTML here. The skill will then reference it by filename instead of asking SEs to re-extract from the Quick site every time.

Current pre-extracted sims:
- `agentic-commerce-sim.html` — Google Gemini + UCP agentic commerce end-to-end

Contribute more by following the same pattern: copy the sim's source from the Quick site, drop the `<style>` + `<div class="slide">` + `<script>` blocks into a new `.html` file in this folder with a header comment explaining what it is and how to use it.

---

## Why linking and iframes don't work

`simulations.quick.shopify.io` is gated by Google Identity-Aware Proxy (IAP), which means:

- **Iframes fail** — browsers block IAP login pages inside iframes, and cross-origin auth cookies don't flow reliably
- **External links fail** — merchants (or anyone not signed into a Shopify Google account) hit a login wall, not the sim
- **Copy-paste always works** — once the sim HTML is inline in your deck, it runs standalone with no auth

If the sim must be presentation-only and the presenter is always a signed-in Shopify employee, linking from a deck CTA is acceptable. For anything that gets shared with a merchant: inline embed only.

---

## Contributing a new simulation

If you build a sim that'd be useful to the SE team, add it to the simulations quick site. Once it's up, update the table above with a link. If it's going to be used often, also extract an embed-ready version into this folder (see "Pre-extracted sims" above).
