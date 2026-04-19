# Slide Patterns Reference

Every slide type you can compose into a demo deck. Copy the HTML snippet and customize the content. All snippets assume the template's CSS/JS is already loaded.

## Conventions

- **Every slide** starts with a `<section class="slide">` element with optional modifier classes: `cover`, `aspiration`, `section-header`, `closing`
- **Every slide** should include `data-speaker="FirstName"` to show the speaker tag (top-right)
- **Every slide** should include `<div class="mesh-bg"></div>` + the 10-span `.slide-particles` block for background effects
- **Only section-header slides** get three `<div class="pulse-ring"></div>` elements
- **`.accent` span** inside headlines automatically renders with gradient text

## 1. Cover

Opening slide with Shopify × [Merchant] logos, eyebrow, title, subhead, and meta bar.

```html
<section class="slide cover active" data-speaker="AE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
  </div>
  <div class="cover-glow"></div>
  <div class="cover-ring"></div>
  <div class="cover-inner">
    <div class="cover-logos">
      <div class="shopify-wordmark">
        <svg class="shopify-mark-lg" aria-hidden="true"><use href="#shopify-mark"/></svg>
        <span class="shopify-text">shopify</span>
      </div>
      <span class="x-sep">×</span>
      <!-- Option A: logo image (base64-embedded) -->
      <img class="pdi-logo-img" src="data:image/png;base64,..." alt="Merchant">
      <!-- Option B: text logo -->
      <!-- <div class="pdi-logo">MERCHANT</div> -->
    </div>
    <div class="cover-eyebrow">Short eyebrow label</div>
    <h1 class="cover-title">Main Headline<br>With <span class="accent">Accent</span> Word</h1>
    <p class="cover-sub">Supporting subhead sentence or two.</p>
    <div class="cover-meta">
      <div class="cover-meta-item">
        <div class="label">Prepared For</div>
        <div class="value">Stakeholder names</div>
      </div>
      <div class="cover-meta-item">
        <div class="label">Presented By</div>
        <div class="value">AE &amp; SE names</div>
      </div>
      <div class="cover-meta-item">
        <div class="label">Focus</div>
        <div class="value">Deal type/focus</div>
      </div>
    </div>
  </div>
</section>
```

## 2. Discovery Recap (Two-Column List)

Recap from a discovery call — what's confirmed vs in motion.

```html
<section class="slide" data-speaker="AE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-ambient-glow"></div>
  <div class="slide-inner stagger">
    <div class="slide-eyebrow">Where we are</div>
    <h2 class="slide-title">Everything we've <span class="accent">aligned on</span> so far.</h2>
    <p class="slide-lede">Recap from our [date] discovery call — and what's in motion now.</p>
    <div class="recap-grid">
      <div class="recap-col">
        <div class="recap-col-label">WHAT WE'VE CONFIRMED</div>
        <ul class="recap-list">
          <li>Confirmed point 1</li>
          <li>Confirmed point 2</li>
          <!-- …more… -->
        </ul>
      </div>
      <div class="recap-col">
        <div class="recap-col-label">WHAT'S IN MOTION</div>
        <ul class="recap-list">
          <li>In-motion item 1</li>
          <li>In-motion item 2</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

## 3. Stats Grid (4 Tiles)

"About Shopify" style — big gradient numbers with labels.

```html
<section class="slide" data-speaker="AE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-inner stagger">
    <div class="slide-eyebrow">About Shopify</div>
    <h2 class="slide-title">Commerce infrastructure, <span class="accent">at scale</span>.</h2>
    <p class="slide-lede">Short context line.</p>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-value">5M+</div><div class="stat-label">Merchants globally</div></div>
      <div class="stat-card"><div class="stat-value">175+</div><div class="stat-label">Countries supported</div></div>
      <div class="stat-card"><div class="stat-value">$292B</div><div class="stat-label">GMV processed in 2024</div></div>
      <div class="stat-card"><div class="stat-value">~12%</div><div class="stat-label">Of US ecommerce on Shopify</div></div>
    </div>
  </div>
</section>
```

## 4. Timeline (4 Horizontal Items)

Good for "how far the product has come" narratives.

```html
<section class="slide" data-speaker="AE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-inner stagger">
    <div class="slide-eyebrow">Section Label</div>
    <h2 class="slide-title">Headline with <span class="accent">accent</span>.</h2>
    <p class="slide-lede">Context.</p>
    <div class="timeline">
      <div class="timeline-item"><div class="timeline-year">2022</div><div class="timeline-label">Label text</div></div>
      <div class="timeline-item"><div class="timeline-year">2023</div><div class="timeline-label">Label text</div></div>
      <div class="timeline-item"><div class="timeline-year">2024</div><div class="timeline-label">Label text</div></div>
      <div class="timeline-item now"><div class="timeline-year">2026</div><div class="timeline-label">Current state</div></div>
    </div>
  </div>
</section>
```

## 5. Customer Proof Grid (3×2)

Peer brands running on the platform.

```html
<section class="slide" data-speaker="AE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-inner stagger">
    <div class="slide-eyebrow">You'd be in good company</div>
    <h2 class="slide-title">Brands running <span class="accent">[category]</span> on Shopify.</h2>
    <p class="slide-lede">Short framing line.</p>
    <div class="customer-grid">
      <div class="customer-tile"><div class="customer-name">Brand 1</div><div class="customer-cat">Category</div></div>
      <div class="customer-tile"><div class="customer-name">Brand 2</div><div class="customer-cat">Category</div></div>
      <!-- …6 total… -->
    </div>
  </div>
</section>
```

## 6. Aspiration / Vision

Big centered statement.

```html
<section class="slide aspiration" data-speaker="SE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-inner stagger">
    <h2 class="slide-title">The future is <span class="accent">vision word</span>.</h2>
    <p class="slide-lede">One sentence that paints the picture.</p>
  </div>
</section>
```

## 7. Agenda — 3-Column Grouped TOC

The transferflow-style agenda.

```html
<section class="slide" data-speaker="SE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-inner" style="max-width: 1200px; text-align: center;">
    <div class="slide-eyebrow" style="margin: 0 auto 24px;">Today's Agenda</div>
    <h2 class="slide-title" style="margin: 0 auto 40px; font-size: 52px;">What We'll <span class="accent">Cover</span></h2>
    <div class="toc-grid">
      <div class="toc-column">
        <div class="toc-column-label">Section Group 1</div>
        <div class="toc-item" style="--toc-delay: 0s;">
          <div class="toc-num">01</div><div class="toc-line"></div>
          <div class="toc-text"><h3>Item Title</h3><p>One-line description</p></div>
        </div>
        <!-- more items with escalating --toc-delay -->
      </div>
      <div class="toc-column">
        <div class="toc-column-label">Section Group 2</div>
        <!-- items -->
      </div>
      <div class="toc-column">
        <div class="toc-column-label">Section Group 3</div>
        <!-- items -->
      </div>
    </div>
  </div>
</section>
```

## 8. Section Header (Pulse Rings + Badges)

The cinematic divider between macro sections. Use sparingly (2-4 per deck max).

```html
<section class="slide section-header" data-speaker="SE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="pulse-ring"></div>
  <div class="pulse-ring"></div>
  <div class="pulse-ring"></div>
  <div class="slide-inner">
    <div class="section-header-label">Section 01</div>
    <h1 class="section-header-title">Section <span class="accent">Title</span>.</h1>
    <p class="section-header-sub">Section preview sentence.</p>
    <div class="section-badges">
      <div class="section-badge"><span class="section-badge-icon">🚀</span> Badge One</div>
      <div class="section-badge"><span class="section-badge-icon">⚡</span> Badge Two</div>
      <div class="section-badge"><span class="section-badge-icon">📈</span> Badge Three</div>
    </div>
  </div>
</section>
```

## 9. Feature Slide (Two-Column with Mock Visual)

The workhorse slide. Left = content, right = browser mockup.

```html
<section class="slide" data-speaker="SE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-ambient-glow"></div>
  <div class="feature-layout">
    <div class="feature-content stagger">
      <div class="slide-eyebrow">01 · Section Label</div>
      <h2 class="slide-title">Headline with <span class="accent">accent</span>.</h2>
      <p class="slide-lede">Lede.</p>
      <ul class="feature-capabilities">
        <li><span class="check">✓</span> <strong>Capability</strong> — description</li>
        <!-- 3-4 total -->
      </ul>
      <div class="feature-closing">Closing line.</div>
    </div>
    <div class="visual">
      <div class="visual-browser">
        <div class="visual-dot"></div><div class="visual-dot"></div><div class="visual-dot"></div>
        <div class="visual-url">merchant.com/path</div>
      </div>
      <!-- Mock content (see below) -->
    </div>
  </div>
</section>
```

### Mock Content Options (place inside `.visual`)

- **`.mock-dtc`** — DTC storefront hero + 3 product tiles
- **`.mock-pdp`** — product detail page with variants
- **`.mock-checkout`** — checkout flow with payment methods
- **`.mock-grid`** — 6-item product grid with "YOUR PRICE" badges
- **`.mock-hierarchy`** — company + location tree (B2B)
- **`.mock-pricelist`** — two-column price lists comparing tiers
- **`.mock-orders`** — orders list with status pills
- **`.mock-warehouse`** — multi-warehouse auto-allocation
- **`.mock-dropship`** — shipping flow diagram
- **`.mock-multistore`** — multi-storefront grid
- **`.mock-login-toggle`** — logged-out vs logged-in comparison
- **`.mock-rep`** — sales rep draft order builder
- **`.mock-integration`** — ERP ↔ Shopify sync diagram
- **`.mock-analytics`** — metrics + bar chart

All have CSS in template. Reference the PDI example for the exact HTML of each.

## 10. Animated Chat (Gemini / Sidekick)

The "wow" slides. Messages reveal on timed delays. See `chat-animation.md` for full pattern.

Minimal HTML:
```html
<div class="chat-window">
  <div class="chat-header">
    <div class="gemini-icon">
      <svg viewBox="0 0 28 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gem-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4285F4"/>
            <stop offset="33%" stop-color="#9168C0"/>
            <stop offset="66%" stop-color="#EA4335"/>
            <stop offset="100%" stop-color="#FBBC04"/>
          </linearGradient>
        </defs>
        <path fill="url(#gem-grad-1)" d="M14 0 C14 7.732 20.268 14 28 14 C20.268 14 14 20.268 14 28 C14 20.268 7.732 14 0 14 C7.732 14 14 7.732 14 0 Z"/>
      </svg>
    </div>
    <span>Google Gemini</span>
    <span style="margin-left:auto;font-size:0.65rem;opacity:0.4">AI Mode</span>
  </div>
  <div class="chat-body" id="gemini-chat">
    <div class="chat-msg user" data-chat-delay="500">User question</div>
    <div class="chat-msg ai" data-chat-delay="4500">AI response…</div>
    <div class="chat-msg user" data-chat-delay="8500">Follow-up</div>
    <div class="chat-msg ai" data-chat-delay="12500">Final response with CTA</div>
  </div>
</div>
```

JS auto-detects `#gemini-chat` and `#sidekick-chat` IDs and runs animations on slide activation.

## 11. Three Anchors / Outcomes

Outcomes summary with 3 cards.

```html
<section class="slide" data-speaker="SE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-inner stagger">
    <div class="slide-eyebrow">What this delivers</div>
    <h2 class="slide-title">Three outcomes <span class="accent">that matter</span>.</h2>
    <div class="anchors-grid">
      <div class="anchor-card">
        <div class="anchor-num">01</div>
        <div class="anchor-name">Anchor Name</div>
        <div class="anchor-desc">Description paragraph.</div>
      </div>
      <!-- 3 total -->
    </div>
  </div>
</section>
```

## 12. Pricing Tiers

Three-column pricing with featured middle tier.

```html
<section class="slide" data-speaker="AE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="slide-inner stagger">
    <div class="slide-eyebrow">Investment</div>
    <h2 class="slide-title">Transparent pricing that <span class="accent">scales with you</span>.</h2>
    <p class="slide-lede">Context.</p>
    <div class="pricing-tiers">
      <div class="pricing-tier featured">
        <div class="pricing-tier-name">TIER NAME</div>
        <div class="pricing-tier-value">$2,300<span class="unit"> / mo</span></div>
        <div class="pricing-tier-sub">Subtext.</div>
        <ul class="pricing-tier-list">
          <li>Bullet one</li>
          <li>Bullet two</li>
        </ul>
      </div>
      <!-- 3 tiers total -->
    </div>
    <div class="pricing-callout"><strong>The math:</strong> extra context or savings story.</div>
  </div>
</section>
```

## 13. Closing (Steps)

Next-steps call to action.

```html
<section class="slide closing" data-speaker="AE">
  <div class="mesh-bg"></div>
  <div class="slide-particles">...</div>
  <div class="closing-glow"></div>
  <div class="slide-inner stagger">
    <h2 class="slide-title">Let's build <span class="accent">the future</span>.</h2>
    <p class="slide-lede" style="margin: 0 auto;">Closing line.</p>
    <div class="closing-steps">
      <div class="closing-step"><div class="num">STEP 01</div><div class="label">First action</div></div>
      <div class="closing-step"><div class="num">STEP 02</div><div class="label">Second action</div></div>
      <div class="closing-step"><div class="num">STEP 03</div><div class="label">Third action</div></div>
    </div>
  </div>
</section>
```
