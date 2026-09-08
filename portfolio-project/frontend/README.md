# Portfolio frontend (React + TypeScript)

## Before you deploy — fill these in

Open **`src/data/profile.ts`** and replace every `[bracketed placeholder]`:
last name, email, phone, GitHub/LinkedIn URLs, degree program, and start year.
That one file drives the whole site (hero, about, education, contact links).

Also replace **`public/Orlando_CV.pdf`** with your real CV once your details
are final — it was generated from the same placeholder data, so update both
together.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Connecting the Java backend (optional)

The contact form works standalone (falls back to a `mailto:` link). To use
the real backend instead:

1. Copy `.env.example` to `.env`.
2. Set `VITE_API_URL` to where the backend runs (e.g. `http://localhost:8080`
   locally, or your deployed backend URL in production).
3. Rebuild.

## Deploying

Any static host works — pick one:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/<your-repo-name>/'` in `vite.config.ts` if deploying to
   `username.github.io/<repo-name>` (skip this if using a custom domain or a
   `username.github.io` root repo).
4. `npm run build && npm run deploy`

## Structure

```
src/
  data/profile.ts     all site content — edit this
  App.tsx             page sections (Hero, About, Work, Skills, Contact...)
  App.css             layout + component styles
  index.css           design tokens (colors, fonts) + resets
public/
  Orlando_CV.pdf      downloadable CV, linked from the nav and footer
```
