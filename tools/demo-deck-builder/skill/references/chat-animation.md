# Animated Chat Pattern (Gemini / Sidekick)

The signature "wow" moment of any deck. Messages reveal in timed sequence as the slide becomes active. Same pattern works for Gemini, Sidekick, or any branded chat mockup.

## How It Works

1. Each message has a `data-chat-delay="N"` attribute (milliseconds from slide activation)
2. Messages start hidden (`opacity: 0; max-height: 0`)
3. When the slide activates, JS reads the delays and calls `setTimeout` for each message
4. On fire, the `.chat-visible` class is added → CSS transitions expand max-height + fade in
5. The chat body auto-scrolls as each new message appears
6. Navigating away resets all timers and hides all messages

All of this is **already wired up** in the template. You just need to write HTML with the right IDs and delay attributes.

## Gemini Chat

```html
<div class="chat-window">
  <div class="chat-header">
    <div class="gemini-icon">G</div>
    <span>Google Gemini</span>
    <span style="margin-left:auto;font-size:0.65rem;opacity:0.4">AI Mode</span>
  </div>
  <div class="chat-body" id="gemini-chat">
    <div class="chat-msg user" data-chat-delay="500">
      [Realistic buyer question in their own voice]
    </div>

    <div class="chat-msg ai" data-chat-delay="4500">
      [AI opener line] <strong>[Merchant name]</strong>:
      <br><br>
      <strong>[Product Name]</strong>
      <ul class="spec-list">
        <li>Spec 1</li>
        <li>Spec 2</li>
        <li>Spec 3</li>
        <li>Spec 4</li>
      </ul>
    </div>

    <div class="chat-msg user" data-chat-delay="8500">
      [Follow-up question]
    </div>

    <div class="chat-msg ai" data-chat-delay="12500">
      [Final answer with CTA]
      <a class="product-link" onclick="showProductPage()">🛒 View on merchant.com</a>
      <br>
      I can complete the order right here via Shopify checkout. Want to proceed?
      <button class="chat-buy-btn" onclick="this.textContent='✓ Added to cart!';this.style.background='rgba(28,199,189,0.3)';this.style.color='#1cc7bd'">Buy now — Shopify Checkout →</button>
    </div>
  </div>

  <!-- Optional: embedded product page that slides in over chat -->
  <div class="chat-product-page" id="gemini-product-page">
    <button class="chat-product-back" onclick="hideProductPage()">← Back to conversation</button>
    <div class="product-page-img">Product Visual</div>
    <div class="product-page-body">
      <div class="pp-brand">Merchant Brand</div>
      <div class="pp-title">Product Title</div>
      <div class="pp-price">$XX.XX USD</div>
      <div class="pp-sub-price">or $XX.XX with Subscribe &amp; Save</div>
      <div class="pp-stock">✓ In stock — Ships in 2 days</div>
      <div class="pp-section-head">Key Features</div>
      <ul class="pp-details">
        <li>Feature 1</li>
        <li>Feature 2</li>
      </ul>
      <button class="pp-add-btn">Add to Cart — Shopify Checkout</button>
    </div>
  </div>
</div>
```

## Sidekick Chat

Same pattern, different visual identity (purple/pink gradient icon).

```html
<div class="mock-sidekick">
  <div class="sidekick-header">
    <div class="sidekick-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0 L14 9 L24 12 L14 15 L12 24 L10 15 L0 12 L10 9 Z"/></svg>
    </div>
    <span>Shopify Sidekick</span>
    <span class="sidekick-header-sub">AI Assistant</span>
  </div>
  <div class="sidekick-body" id="sidekick-chat">
    <div class="sidekick-msg user" data-chat-delay="500">
      [Operational question to Sidekick]
    </div>
    <div class="sidekick-msg ai" data-chat-delay="4500">
      [Response with data structure]
      <div class="sidekick-result">
        <div class="sidekick-result-row">
          <div class="sku-col">Item name</div>
          <div class="qty-col">42</div>
          <div class="action-col">Low</div>
        </div>
        <!-- more rows -->
      </div>
      [Follow-up offer]
      <div class="sidekick-actions">
        <button class="sidekick-action">Option A</button>
        <button class="sidekick-action primary">Option B</button>
      </div>
    </div>
    <div class="sidekick-msg user" data-chat-delay="9000">
      [Follow-up question]
    </div>
    <div class="sidekick-msg ai" data-chat-delay="13000">
      [Response with numbers, confirmation]
    </div>
  </div>
</div>
```

## Timing Guide

Aim for ~13 seconds total duration per chat sequence. This gives the presenter time to narrate over the reveals.

| Message | Suggested Delay |
|---------|----------------|
| 1st user | 500 ms |
| 1st AI response (with spec list) | 4,500 ms (4s read time) |
| 2nd user follow-up | 8,500 ms |
| 2nd AI response (with CTA) | 12,500 ms |

For Sidekick with 4 messages of roughly equal complexity, use 500 / 4500 / 9000 / 13000.

## Writing Realistic Scenarios

### Gemini (consumer buyer asking AI)

**Good scenarios**:
- Nurse asking about moisturizing hand sanitizer (PDI)
- Truck owner asking about auxiliary fuel tanks (TransferFlow)
- Home chef asking about pepper mills (hypothetical food merchant)

**Anti-patterns**:
- Generic "where can I buy X" — no specificity
- Enterprise procurement questions — feels wrong on Gemini, use Sidekick instead
- Questions the merchant doesn't actually solve — loses credibility

**Formula**: Specific situation + specific constraint + specific preference → AI matches to merchant's differentiated product

### Sidekick (merchant operator asking AI)

**Good scenarios**:
- "Which products are low stock?" → actionable data + buttons
- "Email our top 20 B2B customers about X" → segmentation + draft
- "How did the launch perform?" → analytics narrative

**Anti-patterns**:
- Questions a human could answer in 2 seconds — undermines Sidekick's value
- Overly complex asks — Sidekick can't do code generation, custom integrations, etc.

**Formula**: Operational question + "can you also..." follow-up → shows Sidekick doing real work, not just answering

## Debugging

If the chat doesn't animate on slide activation:

1. **Check the chat body has the right ID**: `id="gemini-chat"` or `id="sidekick-chat"`
2. **Check each message has `data-chat-delay`**: otherwise it stays hidden forever
3. **Check the message class**: `chat-msg` for Gemini, `sidekick-msg` for Sidekick
4. **Check show() routing**: the JS `show()` function branches based on which `#chat-id` is inside the active slide

The animation engine lives at the bottom of the template's `<script>` block. Don't duplicate it.
