# Simulation Library

A grab-and-go catalog of animated simulations at **[simulations.quick.shopify.io](https://simulations.quick.shopify.io/)** — maintained separately so decks don't reinvent them each time.

When a merchant deck needs an architecture, payment, integration, or agentic-commerce slide, pull the source from here instead of generating from scratch.

---

## How to grab a simulation as a slide

1. Open the sim at `https://simulations.quick.shopify.io/<sim-name>.html`
2. Click the **`</> Source`** button (bottom-right of any sim page)
3. Click **Copy HTML** — you get a clean, self-contained HTML file with the `<script src="source-viewer.js">` tag already stripped
4. Either:
   - Use the HTML as a standalone artifact (separate file, link to it from your deck)
   - Embed the sim's `<style>` + slide container + `<script>` into your deck as one slide
   - iframe it (if the deck will always be presented online): `<iframe src="https://simulations.quick.shopify.io/<sim-name>.html"></iframe>`

All sims are fully self-contained (no build step, no external JS deps beyond Google Fonts).

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

### As a standalone artifact

Link to the live sim from a slide's CTA. Best when the sim is the "go deeper" moment and you want to keep the deck itself compact.

### As an embedded slide

Copy the sim's full HTML body into one of your deck's `<section class="slide">` blocks. You'll need to:
1. Merge its `<style>` into your deck's `<head>` (all classes are namespaced to avoid collisions)
2. Paste the sim's main container into the slide
3. Append its `<script>` before `</body>`

The `agentic-commerce-sim.html` in this folder is an example of a pre-extracted embed-ready version.

### As an iframe (for online-only decks)

```html
<section class="slide" data-speaker="SE">
  <div class="mesh-bg"></div>
  <iframe src="https://simulations.quick.shopify.io/netsuite-shopify-flow.html"
          style="width:100%;height:100%;border:0;border-radius:12px"
          loading="lazy"></iframe>
</section>
```

Only use this when the deck will be presented live with internet access. Don't iframe for a client hand-off — use a standalone or embedded approach.

---

## Contributing a new simulation

If you build a sim that'd be useful to the SE team, add it to the simulations quick site (not this repo). Instructions live in the simulations repo itself. Once it's up, update the table above with a link.
