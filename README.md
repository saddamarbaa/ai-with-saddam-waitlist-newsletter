# AI with Saddam — Waitlist

A single-page subscribe / waitlist landing page for the **AI with Saddam** newsletter.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Framer Motion**, and **react-hook-form + zod**.

## Quick start

> Requires **Node.js ≥ 20.9** (Next.js 16). If you use `nvm`, run `nvm use 20`.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Rebrand in one place

All copy, links, and brand colour live in [`src/config/site.ts`](src/config/site.ts):

```ts
export const site = {
  name: "AI with Saddam",
  tagline: "I'm on a mission to create 365 AI Engineers in the next 365 days.",
  bylineName: "Saddam",
  subscriberCount: "2,000+",
  profileImage: "/profile.svg",   // drop your headshot here as /public/profile.jpg
  brandColor: "#5B4BE8",
  // …links
};
```

Drop your headshot at `public/profile.jpg` and point `profileImage` at it. The bundled `/profile.svg` is just a placeholder.

## What's inside

- **Server action** `subscribe(email)` in [`src/app/actions.ts`](src/app/actions.ts). For now it logs the email — wire up ConvertKit / Beehiiv / Mailchimp / Supabase where the `TODO` comment is.
- **Form** ([`src/components/subscribe-form.tsx`](src/components/subscribe-form.tsx)) — zod-validated, RHF, animated success state via `AnimatePresence`, toast feedback via Sonner.
- **Staggered entrance** ([`src/components/reveal.tsx`](src/components/reveal.tsx)) — photo → heading → tagline → byline → form, kept subtle and fast.
- **Brand colour** exposed as a CSS variable (`--brand`) and Tailwind token (`bg-brand`, `text-brand`) in [`src/app/globals.css`](src/app/globals.css).

## Deploy

Push to GitHub, then import into **Vercel** — zero config. Set the Node version to 20.x in project settings if Vercel doesn't pick it up automatically.

## Scripts

| Script           | Purpose                       |
| ---------------- | ----------------------------- |
| `npm run dev`    | Local dev server (Turbopack)  |
| `npm run build`  | Production build              |
| `npm run start`  | Run the production build      |
| `npm run lint`   | ESLint                        |
