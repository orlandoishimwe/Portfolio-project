# Portfolio & CV — Orlando

Built for the "Portfolio & CV" assignment: a personal portfolio (skills,
projects, education, experience) with a linked, deployable CV.

- **`frontend/`** — the portfolio site. React + TypeScript (Vite). This is
  what you deploy to GitHub Pages / Vercel / Netlify.
- **`backend/`** — a small Java (Spring Boot) API: project data + a contact
  form endpoint. Optional — the site works fully static without it, but
  running/deploying it demonstrates the Java half of the stack.

## Start here

1. `cd frontend && npm install && npm run dev` — see the site locally.
2. Edit **`frontend/src/data/profile.ts`** — replace every
   `[bracketed placeholder]` with your real last name, email, phone,
   GitHub/LinkedIn, and education details.
3. Regenerate or replace **`frontend/public/Orlando_CV.pdf`** with the same
   real details.
4. Deploy `frontend/` (see `frontend/README.md` for Vercel/Netlify/GitHub
   Pages steps).
5. Optional: run `backend/` (see `backend/README.md`) and point the frontend
   at it via `VITE_API_URL` for a live contact form backed by Java.

## Design

Palette is fixed to the brief: ink `#222222`, slate `#7B7B7B`, paper
`#F8F8F8`, white `#FFFFFF`. Type is Fraunces (display) + IBM Plex Sans/Mono
(body/meta). Work is presented as a numbered ledger of real, delivered
client projects rather than generic placeholder cards.

## Content sources

Project and coursework details are pulled from actual work: MegaP House &
Kiza Foundation, Kigali Clipper Zone, Dontez Restaurant, and other Kigali
client sites, plus the Big Data final project and SENG 8415 coursework at
Adventist University of Central Africa. Update `profile.ts` as your project
list grows.
