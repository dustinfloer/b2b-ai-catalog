# Visual Effects Reference

The signature background/animation layers that give every slide its polish. All live in the template's CSS — just use the HTML elements below.

## 1. Mesh Gradient Background

Subtle animated layered radial gradients. Shifts slowly (12s loop).

```html
<div class="mesh-bg"></div>
```

- Use on **every slide** (first child inside `<section class="slide">`)
- No tuning needed per slide
- Color palette is set via CSS variables (see customization-guide.md)

## 2. Floating Particles

10 small glowing dots drifting upward.

```html
<div class="slide-particles">
  <span></span><span></span><span></span><span></span><span></span>
  <span></span><span></span><span></span><span></span><span></span>
</div>
```

- Use on **every slide** (right after `.mesh-bg`)
- Exactly 10 spans — CSS positions each via `nth-child`
- Particles emit in staggered timing across the slide width

## 3. Pulse Rings

Three concentric expanding rings — the signature section-header effect.

```html
<div class="pulse-ring"></div>
<div class="pulse-ring"></div>
<div class="pulse-ring"></div>
```

- Use **only on `.section-header` slides** (3-4 per deck max)
- Rings are 300px centered — staggered animation delays built into CSS
- Don't use on feature or cover slides — loses impact

## 4. Gradient Text Accents

Any `<span class="accent">` inside `.slide-title`, `.cover-title`, or `.section-header-title` gets rendered with a teal→accent-bright gradient via `background-clip: text`.

```html
<h2 class="slide-title">Headline with <span class="accent">accent</span>.</h2>
```

- Max 1-2 accent spans per headline — more looks noisy
- Works on any heading-like class inside a slide

## 5. Ambient Glow

A soft radial glow behind two-column feature slides. Adds depth on the content side.

```html
<div class="slide-ambient-glow"></div>
```

- Use on feature slides (optional, adds warmth)
- Skip on section headers (pulse rings already carry visual weight)

## 6. Cover Glow + Ring

Cover-slide-only decoration. Big glowing orb + rotating ring.

```html
<div class="cover-glow"></div>
<div class="cover-ring"></div>
```

- Only on the cover slide
- Self-contained animations

## 7. Closing Glow

Variant of cover glow for the final closing slide.

```html
<div class="closing-glow"></div>
```

## 8. Nav Dots

Auto-rendered per slide by the JS — no HTML needed. Shows at bottom-center of every slide, clickable, active dot highlights in teal.

## 9. Speaker Tag (Top-Right Pill)

Auto-shown if the slide has `data-speaker="Name"` attribute. No HTML to add per slide — JS reads the attribute.

```html
<section class="slide" data-speaker="Dustin">
```

## 10. Progress Bar

Top 2px line, teal gradient, fills as you advance. Auto-handled by JS. No per-slide HTML.

## Performance Notes

- All animations are CSS keyframes — no JS animation loops
- Particles loop infinitely but opacity is low; negligible performance impact
- Mesh gradient uses `background-position` animation (GPU-accelerated)
- Pulse rings use `transform: scale` (GPU-accelerated)
- Works smoothly even on modest hardware / projector setups
