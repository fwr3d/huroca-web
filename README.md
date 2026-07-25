# Huroca Web

Marketing site for Huroca — cattle monitoring robotics, based in Lethbridge, Alberta.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages live under `src/app/`; edits hot-reload automatically.

## Pages

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | Company story, team, mentors & advisors, network |
| `/technology` | Not yet built |
| `/success-stories` | Customer results and testimonials |
| `/investor-relations` | Pitch, team, press, investor CTA |
| `/contact` | Contact form + booking |

## Design system

Colors, typography, and layout conventions: see Fred for the design-system reference doc.

## Integrations

- **Contact form** — submits to [Formspree](https://formspree.io) (`src/components/ContactForm.tsx`)
- **Booking** — [Cal.com](https://cal.com) embed (`src/components/CalEmbed.tsx`)

## Deployment

Pushes to `master` deploy automatically via Vercel.
