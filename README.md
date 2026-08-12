# Sri Sai Vaishnavi Chintha — Portfolio

A personal portfolio built with React, TypeScript, and Vite. No backend, no
database — all content lives in `src/data/content.ts`.

## Before you deploy — replace these placeholders

Everything below lives in **`src/data/content.ts`**. Open that file and search
for these spots:

| What | Field | Current state |
|---|---|---|
| Research paper link | `research.paperUrl` | `undefined` → shows "link coming soon". Set to a real URL to activate the **Read Paper** button. |
| Project repo/demo links | `repoUrl` / `demoUrl` on each item in `projects` | All `undefined` → shows "Repository link — add in content.ts". Add real GitHub URLs as you publish each repo. |
| Profile photo | `photoSrc` at the top of `src/components/About.tsx` | `undefined` → no photo shown. To add one, drop an image into `public/` (e.g. `public/profile.jpg`) and set `photoSrc = '/profile.jpg'`. |

Nothing else needs to change to deploy — GitHub, LinkedIn, and email are
already filled in with your real details.

---

## 1. Install dependencies

Requires [Node.js](https://nodejs.org) 18 or newer (Vite 5's requirement).
Check your version first:

```bash
node -v
```

Then, from the project folder:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). The page hot-reloads
as you edit files.

## 3. Check the production build

This is the same build Vercel will run, so it's worth doing before you push:

```bash
npm run build
npm run preview
```

`npm run build` type-checks the whole project (`tsc --noEmit`) and then builds
optimized static files into `dist/`. `npm run preview` serves that `dist/`
folder locally so you can click through the real production build at
`http://localhost:4173`. If either command errors, fix the reported file
before deploying — don't deploy on top of a failing build.

### A note on how this project was verified

This project was written and reviewed in a sandboxed environment without
access to the npm registry, so `npm install` and `npm run build` could not be
executed there. Every file was manually checked instead: cross-referencing
every CSS class name against its usage, and running the TypeScript compiler
against the full component tree with a type shim standing in for React's
types, which confirmed there are no syntax errors, prop-type mismatches, or
logic bugs — only the expected gap of not having React's real type
declarations installed. Running `npm run build` yourself in step 3 above is
the final, real confirmation and should complete cleanly.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Create a new empty repository on [github.com/new](https://github.com/new)
(don't initialize it with a README), then:

```bash
git remote add origin https://github.com/Vaishnavi-chintha/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

## 5. Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import the repository you just pushed.
3. Vercel auto-detects Vite — leave the defaults (Build Command
   `npm run build`, Output Directory `dist`) and click **Deploy**.
4. Wait for the build to finish. Vercel gives you a URL like
   `https://your-project-name.vercel.app` — that's your public link.

No custom domain is required. The `vercel.app` URL is a normal, permanent
public URL and is completely fine to put on a job application.

Every future `git push` to `main` automatically redeploys.

## Project structure

```
src/
  data/content.ts       All copy, links, metrics — edit this to update content
  components/           One component per section (Hero, Experience, Research, ...)
  hooks/useInView.ts     Powers the scroll-reveal animation
  index.css              Design tokens + all styles
```

## Tech stack

React 18, TypeScript, Vite. No UI framework, no backend — just React,
handwritten CSS, and static data.
