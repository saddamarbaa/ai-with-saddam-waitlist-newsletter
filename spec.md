# spec.md — "AI with Saddam" Waitlist Landing Page

A single-page subscribe/waitlist landing page for an AI content creator. Visitors land, read a short pitch, and join the email waitlist.

## Stack

- **Next.js** (latest, App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (components: `button`, `input`, `sonner`)
- **Framer Motion** (entrance + interaction animations)
- **react-hook-form** + **zod** (form state & validation)

## Setup steps

1. Scaffold: `npx create-next-app@latest` → App Router, TypeScript, Tailwind, ESLint, `src/` dir optional.
2. Init shadcn/ui: `npx shadcn@latest init`.
3. Add components: `npx shadcn@latest add button input sonner`.
4. Install: `npm i framer-motion react-hook-form zod @hookform/resolvers`.
5. Add a README with run/deploy instructions (Vercel).

## Brand & content config

Put everything editable in `config/site.ts` so the page can be rebranded in one place:

```ts
export const site = {
  name: "AI with Saddam",
  tagline: "I'm on a mission to create 365 AI Engineers in the next 365 days.",
  byline: "By Saddam · Over 2,000 subscribers",
  profileImage: "/profile.jpg",
  brandColor: "#5B4BE8", // purple
  links: {
    terms: "#",
    privacy: "#",
    info: "#",
    learnMore: "#",
  },
};
```

> Replace the name, tagline, byline number, and links with real values. Drop the headshot at `/public/profile.jpg`.

## Layout

Centered single column on a **white** background, generous vertical spacing, fully responsive. Max content width ~600px, vertically centered on tall viewports.

Top to bottom:

1. **Profile photo** — square, ~280px, small rounded corners (`rounded-xl`), solid colored background behind the subject. Use Next.js `<Image>` from `site.profileImage`.
2. **Site name** — large, bold, **serif** heading. Load a serif face via `next/font` (e.g. Playfair Display, Lora, or a Georgia-like stack).
3. **Tagline** — muted gray, sans-serif, centered, max ~2 lines.
4. **Byline** — "By [name] · Over X subscribers", medium weight, muted.
5. **Email capture** — a shadcn `Input` (placeholder "Type your email...") joined flush to a purple shadcn `Button` ("Subscribe"). Input border and button both use the brand purple. Stacks vertically on mobile.
6. **Fine print** — small muted text with placeholder links (Terms of Use, Information Collection Notice, Privacy Policy).
7. **Learn More ›** — bold link at the bottom.

## Behavior

- The form is a **client component**.
- Validate the email with **zod** via **react-hook-form**.
- On valid submit, call a **server action** `subscribe(email: string)` in `app/actions.ts`.
  - For now it logs the email and returns `{ ok: true }`.
  - Add a clear comment: `// TODO: connect to ConvertKit / Beehiiv / Mailchimp / Supabase`.
- On success: show a **Sonner toast** ("You're on the waitlist!") and replace the form with a success state.
- Handle and surface validation/server errors gracefully.

## Animation (Framer Motion)

- On mount, **stagger fade-and-rise** the elements in order: photo → heading → tagline → byline → form.
- Subtle **hover/tap scale** on the Subscribe button.
- Animate the **form → success** transition with `AnimatePresence`.
- Keep motion subtle and fast (no long or bouncy animations).

## Code quality

- Strongly typed, no `any`.
- Components clean and reasonably commented.
- Brand color exposed as a Tailwind theme token / CSS variable, not hardcoded across files.
- Accessible: labelled input, keyboard-submittable, sufficient contrast.

## Acceptance checklist

- [ ] Runs with `npm run dev` with no errors.
- [ ] Matches the layout above and looks good on mobile + desktop.
- [ ] Email validates; invalid input shows an inline error.
- [ ] Valid submit triggers the server action, toast, and success state.
- [ ] All copy and links come from `config/site.ts`.
- [ ] Deployable to Vercel as-is.
