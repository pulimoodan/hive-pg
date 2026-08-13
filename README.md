# Hive Gents PG — Landing Page

A modern, responsive, SEO-optimized landing page for **Hive Gents PG**, a boys hostel & dormitory in Kakkanad, Kochi.

## Tech stack

Plain **HTML + CSS + JavaScript** — no build step, no dependencies. Just open it.

## Project structure

```
hive-website/
├── index.html          # Page markup + SEO meta + JSON-LD structured data
├── styles.css          # All styling (design tokens + responsive layout)
├── script.js           # Nav, scroll reveal, WhatsApp enquiry form
├── site.webmanifest    # PWA manifest
├── robots.txt          # Crawler rules
├── sitemap.xml         # Sitemap for search engines
├── assets/
│   ├── favicon.svg
│   └── images/         # Property photos (renamed for clarity)
└── requirements.md     # Original brief
```

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

Live URL (after enabling Pages):

**https://pulimoodan.github.io/hive-pg/**

Repo: [github.com/pulimoodan/hive-pg](https://github.com/pulimoodan/hive-pg)

### Enable Pages

1. Push this folder to `main` on the repo above.
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**
3. Choose branch `main`, folder `/ (root)`, save.
4. Wait 1–2 minutes, then open the live URL.

The `.nojekyll` file is included so GitHub serves static files without Jekyll processing.

### Custom domain later (optional)

Add a `CNAME` file, point DNS to GitHub Pages, and update URLs in `index.html`, `sitemap.xml`, and `robots.txt`.

## Before going live (TODO)

- **Phone number**: `+91 6282646258` — in `index.html` and `script.js` (`WHATSAPP_NUMBER`).
- **Coordinates**: `10.0261, 76.3416` and postal code `682021` — confirm against your Google Maps listing.
- **Prices**: 6 sharing ₹3000, 3/4 sharing ₹3200, 2 sharing ₹4000.

## SEO features included

- Title, meta description, keywords, canonical, theme-color
- Open Graph + Twitter Card tags
- Geo meta tags (region/placename/position)
- JSON-LD structured data: `LodgingBusiness` + `FAQPage`
- Semantic HTML, descriptive `alt` text, lazy-loaded images
- `robots.txt` + `sitemap.xml` + web manifest

## Conversion features

- Sticky header with "Book a Visit" CTA + announcement bar
- Hero with trust stats and dual CTAs
- Amenities, gallery, transparent pricing, location distances + map
- Testimonials, FAQ, enquiry form that opens a pre-filled WhatsApp chat
- Floating WhatsApp button
