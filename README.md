# Good Land Veterinary Clinic — UX prototype (visual for the audit)

A clickable, multi-page HTML/CSS prototype that shows the audit recommendations applied to the clinic's real palette (navy + gold + cream) and content. This is the **visual companion** to the Google audit. It is a demo, not production code — production code notes live in the Google Doc.

## How to view
Open `index.html` in any browser. All pages are linked through the nav.

## Pages
- `index.html` — Home
- `our-team.html` — Our Team (+ `dr-becky-moss.html`, `dr-marta-kelly.html`)
- `services.html` — Services (now with descriptions)
- `prescriptions.html` — Prescriptions & refill steps
- `get-in-touch.html` — Contact + appointment-request form
- `new-clients.html` — New Clients (recommended new page)

## What the gold "NEW" tags mean
Every gold tag marks an audit recommendation that has been added or improved versus the live site (tap-to-call, tap-to-email, appointment form, hours, map directions, emergency notice, service descriptions, per-vet CTAs, etc.).

## Display modes (top-right toggles)
- **Dark** — full dark theme; also respects the visitor's system setting on first load.
- **Accessibility** — larger text and line spacing, underlined links, 48px tap targets, stronger focus outlines.
- **Low-carbon** — low-energy dark palette, no animations or shadows, system fonts, and heavy media (the map) is not loaded at all. A banner explains the savings.

Preferences persist via `localStorage`. Reduced-motion is always respected.

## Demo caveats (mention when presenting)
- The logo is an SVG re-creation for the demo; swap in the real asset for any real use.
- Team and hero images are labeled placeholders.
- "Open today" status and the appointment form are illustrative (the form does not send).
- Service descriptions, emergency referral, and "new patients" status are draft copy for the clinic to confirm. No clinic facts were invented.

## Files
- `assets/styles.css` — all styling and the light/dark/a11y/low-carbon tokens
- `assets/app.js` — shared header/footer/mobile bar + toggle logic + low-carbon media gating
