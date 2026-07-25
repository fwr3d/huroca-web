<p align="center">
  <img src="public/logo-full.svg" alt="Huroca" width="220" />
</p>

<h1 align="center">Huroca Website</h1>

<p align="center">Marketing site for Huroca — cattle monitoring robotics, based in Lethbridge, Alberta.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages live under `src/app/`; edits reload automatically.

## Pages

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | Company story, team, mentors & advisors, network |
| `/technology` | Not yet built |
| `/success-stories` | Customer results and testimonials |
| `/investor-relations` | Pitch, team, press, investor CTA |
| `/contact` | Contact form + booking |

## Integrations

- **Contact form** — submits to [Formspree](https://formspree.io) (`src/components/ContactForm.tsx`)
- **Booking** — [Cal.com](https://cal.com) embed (`src/components/CalEmbed.tsx`)

## Deployment

Pushes to `master` deploy automatically via Vercel.
