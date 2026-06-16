# Good Land Veterinary Clinic — UX Prototype

A clickable, multi-page **concept redesign** of the Good Land Veterinary Clinic website, built to accompany a UX audit. It applies the audit's recommendations to the clinic's real navy / gold / cream branding and content.

> **Note:** This is an independent UX prototype for demonstration — not the clinic's official website. The logo is a re-creation, images are placeholders, and some copy (service descriptions, team bios, emergency referral) is draft content for the clinic to confirm.

## View it
Open `index.html` in any browser. No build step or dependencies. Deploys as-is on GitHub Pages or Vercel.

## Pages
- `index.html` — Home
- `our-team.html` — Our Team (+ `dr-becky-moss.html`, `dr-marta-kelly.html`)
- `services.html` — Services (expandable cards with educational content)
- `prescriptions.html` — Prescriptions & refills
- `get-in-touch.html` — Contact + appointment-request form
- `new-clients.html` — New Clients

## What it demonstrates
- A clear, action-first **"Request an Appointment"** CTA (replacing the vague "Get In Touch")
- **Tap-to-call** and **tap-to-email** throughout
- An **appointment-request form**, hours, embedded map + directions, and an emergency notice
- **Expandable service cards** that open to plain-language education
- A **hamburger menu** on tablet/mobile and a sticky thumb-zone action bar (Call · Email · Appointment)
- Real-image placeholders clearly marked for the clinic's photos

## Display modes (toggles, top of every page)
- **Audit notes** — turns the prototype into a self-explaining walkthrough. Highlights each recommended element and injects a numbered card describing *what changed, why it matters, and its priority (High/Medium)*. "Recommended" markers also appear for audit items not yet built (e.g., client testimonials, per-service FAQs, full accessibility audit). Toggle off for the clean client view.
- **Dark mode** — full dark theme; also respects the visitor's system setting
- **Accessibility** — larger text/spacing, underlined links, 48px tap targets, stronger focus outlines
- **Low-carbon** — low-energy dark palette, animations off, heavy media (the map) not loaded

Preferences persist via `localStorage`; reduced-motion is always respected.

### How Audit notes works
Annotated elements carry `data-note-title`, `data-note-why`, and `data-note-pri` attributes. When the toggle is on, `app.js` (`applyNotes()`) outlines each element and injects an explanation card directly beneath it, numbered in document order. Elements with the `.reco` class are recommendations not yet built into the prototype and surface only in this mode. This keeps the written audit and the visual prototype in sync — a non-technical reader sees each recommendation working in the real UI.

## Structure
- `assets/styles.css` — all styling + the light / dark / accessibility / low-carbon / audit-notes tokens
- `assets/app.js` — shared header/footer/menu/mobile bar, toggle logic, and the audit-notes engine (`applyNotes()`)
