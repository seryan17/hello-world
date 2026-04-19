# Digital Services Website

A Next.js 14 + TypeScript + Tailwind CSS marketing site for a digital services business offering **web design**, **social media management**, and **content management**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # start production server
npm run lint    # lint
```

## Customize

The site ships with placeholders you'll want to replace before going live. Do a find-and-replace across the repo:

| Placeholder | What to replace it with |
| --- | --- |
| `<BRAND_NAME>` | Your business name (header, hero, footer, metadata) |
| `<FORMSPREE_FORM_ID>` | Your [Formspree](https://formspree.io) form ID (in `components/Contact.tsx`) |
| `<CONTACT_EMAIL>` | Public contact email |
| `<TWITTER_HANDLE>` | Twitter/X handle |
| `<INSTAGRAM_HANDLE>` | Instagram handle |
| `<LINKEDIN_HANDLE>` | LinkedIn profile slug |

Content (services, pricing tiers, portfolio projects, testimonials) lives as data arrays at the top of each component in `components/`. Edit those arrays to change the copy.

## Structure

```
app/
  layout.tsx      # Root layout + metadata
  page.tsx        # Homepage composing all sections
  globals.css     # Tailwind + design tokens
components/
  Header.tsx
  Hero.tsx
  Services.tsx
  Pricing.tsx
  Portfolio.tsx
  Testimonials.tsx
  About.tsx
  Contact.tsx     # Formspree-backed contact form
  Footer.tsx
```

## Deploy

Works out of the box on [Vercel](https://vercel.com) and [Netlify](https://netlify.com) — connect the repo and deploy. No environment variables required unless you wire up additional services.
