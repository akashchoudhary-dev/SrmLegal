# SRM Legal | Advocates & Solicitors — Website

A static marketing website for SRM Legal | Advocates & Solicitors, a New Delhi based law firm advising Indian businesses on Labour Law reforms, DPDP Act compliance, and corporate legal matters.

Live site: [srmlegal.in](https://srmlegal.in/)

## Project Structure

```
srm-legal-website/
├── index.html          # All page markup and content (single-page site)
├── style.css            # Site styling
├── script.js            # Nav toggle, scroll reveal, contact form handling
├── srm-legal-logo.png    # Firm logo (used as favicon and in header/footer)
└── README.md
```

## Sections

The site is a single page (`index.html`) with the following sections, linked via in-page anchors:

- **Home** — Hero intro and headline stats
- **Practice Areas** (`#services`) — Labour & Employment, Regulatory Compliance, DPDP Act, Corporate Advisory, Legal Drafting, Ongoing Support
- **Why Us** (`#about`) — Firm differentiators
- **Expertise** (`#expertise`) — Focus areas overview
- **Industries** (`#industries`) — Sectors served (IT, Manufacturing, Startups/E-commerce, BFSI, Real Estate, Healthcare)
- **How We Work** (`#process`) — 4-step engagement process
- **FAQ** (`#faq`) — Common client questions
- **Contact** (`#contact`) — Office address, email, phone, embedded map, and contact form

## Contact Form

The contact form submits via [Formspree](https://formspree.io/) (`script.js`) using a fetch POST request, with inline success/error feedback shown to the user without a page reload.

## Running Locally

This is a static site with no build step or dependencies. Open `index.html` directly in a browser, or serve the folder with any static file server, e.g.:

```bash
npx serve .
```

## Deployment

Deploy by uploading the contents of this folder to any static hosting provider (e.g. Netlify, Vercel, GitHub Pages, or a standard web host) and pointing the domain to it.
