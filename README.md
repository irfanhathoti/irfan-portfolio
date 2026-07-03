# Irfan H — Developer Portfolio

A premium, modern personal portfolio website for **Irfan H**, Full Stack Developer.
Built as a production-ready SaaS-style landing page with a dark theme, gradient
accents, glassmorphism cards, and smooth animations.

![Built with Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8)

## ✨ Overview

A single-page portfolio with the following sections:

- **Hero** — animated gradient + grid background with floating UI cards
- **About** — professional summary with quick stats and highlights
- **Skills** — grouped skill cards (Frontend, Backend, AI & Integrations, Auth & DB, DevOps)
- **Experience** — timeline of professional roles
- **Projects** — premium project cards with tech badges and links
- **Education & Languages**
- **Contact** — contact form (UI + placeholder API route) and contact cards
- **Footer** — links, socials, and copyright

The design is fully responsive across mobile, tablet, and desktop.

## 🧱 Tech Stack

| Layer       | Tools                                   |
| ----------- | --------------------------------------- |
| Framework   | Next.js 14 (App Router)                 |
| Language    | TypeScript                              |
| Styling     | Tailwind CSS                            |
| Animations  | Framer Motion                           |
| Icons       | Lucide React                            |
| Deployment  | Vercel (free plan compatible)           |

No backend database is required — the contact form posts to a placeholder
API route (`/api/contact`) that returns a success response.

## 🚀 Local Setup

Requirements: **Node.js 18.17+** and **npm**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the app
# http://localhost:3000
```

Build and run the production bundle locally:

```bash
npm run build
npm run start
```

## 🔑 Environment Variables

None are required to run the site. The contact form currently uses a
placeholder API route and does **not** send real emails.

When you later wire up SendGrid (in `app/api/contact/route.ts`), add:

```bash
# .env.local  (example — not required yet)
SENDGRID_API_KEY=your_key_here
CONTACT_TO_EMAIL=irfanhathoti@gmail.com
```

## 📄 Resume File

The "Download Resume" buttons link to `/resume.pdf`.
Add your resume to the `public` folder:

```
public/resume.pdf
```

Until you add it, the buttons will point to a missing file (this is expected
for the placeholder setup).

## ☁️ Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New → Project**.
3. Import your repository.
4. Vercel auto-detects Next.js — keep the defaults:
   - **Build Command:** `next build`
   - **Output:** `.next`
5. Click **Deploy**.

No environment variables are needed for the default placeholder setup.
Every push to your main branch will trigger an automatic redeploy.

## 🗂️ Project Structure

```
.
├── app/
│   ├── api/contact/route.ts   # Placeholder contact API (returns success)
│   ├── globals.css            # Tailwind + theme + utility classes
│   ├── layout.tsx             # Root layout + SEO metadata
│   └── page.tsx               # Page composition
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SectionHeading.tsx
│   ├── SkillCard.tsx
│   ├── ProjectCard.tsx
│   ├── ExperienceCard.tsx
│   └── Reveal.tsx             # Scroll-reveal animation wrapper
├── lib/
│   └── data.ts                # Typed content (skills, projects, experience…)
└── public/
    └── resume.pdf             # ← add your resume here
```

## ✏️ Editing Content

All content lives in **`lib/data.ts`** — update your personal info, skills,
experience, and projects there. The placeholder GitHub/LinkedIn links use `#`;
replace them with your real URLs in `lib/data.ts` (`personal.github`,
`personal.linkedin`, and each project's `links`).

---

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
