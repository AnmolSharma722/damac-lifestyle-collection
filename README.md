# The DAMAC Lifestyle Collection — Landing Page (Next.js)

A pixel-close Next.js 14 (App Router) + Tailwind CSS rebuild of
`sandandrockrealestate.com/damac-the-lifestyle-collection/`, built from the live
page plus full-page reference screenshots: sticky navbar, hero with image carousel
+ lead form, quick-facts strip, "Welcome" section with stats + developer legacy,
"Buy Property in Dubai" panel, 3-card property grid, photo gallery, two consultation
CTA sections (two-tone heading), location/map section, FAQ accordion, and footer.

## Stack
- Next.js 14 (App Router, JavaScript)
- React 18
- Tailwind CSS, with a custom `brand` palette sampled from the reference site
  (`tailwind.config.js`)
- `next/font` — Playfair Display (serif headings) + Poppins (sans body/UI)
- `next/image` for all photography
- A small hand-written inline-SVG icon set (`components/icons.jsx`) — no external
  icon package

## Project structure
```
app/
  layout.js        root layout, fonts, metadata
  page.js           assembles all sections in order
  globals.css       Tailwind + shared utility classes (.btn-gold, .card-panel, etc.)
components/
  Header.jsx            sticky logo bar + "Contact Us" pill (stays put on scroll)
  Logo.jsx               shared SNR logo lockup (used in Header + Footer)
  Hero.jsx                image carousel + headline + lead form
  QuickFacts.jsx          price / communities / status dark strip
  About.jsx                "Welcome" white card: stats grid + DAMAC legacy block
  BuyProperty.jsx          "Buy Property in Dubai" beige card + community logos
  PropertyGrid.jsx         "Explore the collection" 3-up cards
  Gallery.jsx               1 large + 4 small photo grid
  ConsultationCTA.jsx       "Book a Free Consultation" (used twice — mid-page + footer-adjacent)
  LocationAdvantage.jsx     map + distances list
  Faq.jsx                    accordion
  Footer.jsx
  LeadForm.jsx               shared enquiry form (Hero uses it bare; CTA sections pass
                              a heading="Inquire Now" prop)
  icons.jsx                  inline SVG icons used throughout
```

## Setup

1. Install [Node.js 18.18+](https://nodejs.org).
2. Unzip this project, open a terminal in the folder.
3. `npm install`
4. `npm run dev` → open http://localhost:3000
5. Production: `npm run build && npm run start`

> Note: `next/font` fetches Playfair Display + Poppins from Google Fonts at build
> time. This needs normal internet access — it'll work fine on your machine; it
> only fails in network-locked sandboxes.

## Things to swap in before this goes live for a real client

- **Images** — all photos are Unsplash stand-ins, not the client's real property
  photography. Their real photos are the client's copyrighted assets — replace the
  URLs in `Hero.jsx`, `About.jsx` (well, `BuyProperty.jsx`), `PropertyGrid.jsx` and
  `Gallery.jsx` with licensed/self-hosted images once you have access to their
  asset library, rather than hot-linking or re-scraping the live site's photos.
- **Brand marks / logos** — the SNR logo and DAMAC community wordmarks
  (DAMAC Lagoons, DAMAC Hills, D2, DAMAC Riverside) are currently plain styled
  text, not the client's actual logo files. Source the real trademarked assets
  from the client rather than recreating their graphics.
- **Copy** — headings/body text are paraphrased close to the reference page's
  structure and meaning, not copy-pasted, so you have wording you can iterate on.
- **Lead form** — `LeadForm.jsx` simulates a submit (see the `TODO` inside).
  Wire `handleSubmit` to whatever backend/CRM the client actually uses.
- **Map** — `LocationAdvantage.jsx` embeds a generic Google Maps query; swap in
  the client's real coordinates or a Maps Embed API key.
- **Colors/fonts** — `tailwind.config.js`'s `brand` palette (dark teal, gold,
  maroon, cream, card-beige) was sampled visually from screenshots of the live
  site, not extracted from its actual CSS. Close, but confirm against the client's
  real brand guide once you have it.

## What changed in this revision
The first draft matched the page's general shape but got some structural details
wrong — notably the navbar was absolutely/fixed-positioned so it scrolled away
instead of staying pinned, and the consultation sections were built as full-bleed
dark panels instead of the plain cream-background + beige-form-card pattern the
live site actually uses. This version was rebuilt directly against 10 full-page
reference screenshots and re-verified with real rendered screenshots section by
section (header, hero, stats, property cards, gallery, CTA, map, FAQ, footer) to
confirm layout, spacing, and type styles line up closely.
