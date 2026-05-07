# 🚀 Cloudflare Pages Deployment Guide — Qasim Portfolio

This portfolio is a **Vite + React + TypeScript** static site, ideal for Cloudflare Pages.

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free tier works)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed

---

## Option A — Deploy via CLI (Recommended)

### 1. Install dependencies

```bash
npm install
```

### 2. Install Wrangler globally

```bash
npm install -g wrangler
```

### 3. Log in to Cloudflare

```bash
wrangler login
```

This opens a browser window to authenticate with your Cloudflare account.

### 4. Build & Deploy (Production)

```bash
npm run deploy
```

This runs `tsc -b && vite build` then pushes the `dist/` folder to Cloudflare Pages under the project name `qasim-portfolio`.

### 5. Deploy a Preview (optional)

```bash
npm run deploy:preview
```

Deploys to a separate preview URL — useful for testing before going live.

---

## Option B — Deploy via Cloudflare Dashboard (No CLI)

1. Push this project to a **GitHub** or **GitLab** repository.
2. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/) → **Create a project** → **Connect to Git**.
3. Select your repository.
4. Set the following **Build Settings**:

   | Setting            | Value             |
   |--------------------|-------------------|
   | Framework preset   | Vite              |
   | Build command      | `npm run build`   |
   | Build output dir   | `dist`            |
   | Node.js version    | `18` (or higher)  |

5. Click **Save and Deploy**.

Cloudflare will auto-deploy on every push to `main`.

---

## Custom Domain (optional)

1. In the Cloudflare Pages dashboard, open your project.
2. Go to **Custom domains** → **Set up a custom domain**.
3. Enter your domain (e.g. `qasim.dev`).
4. If your domain is already on Cloudflare DNS, it'll be configured automatically.
5. If not, add the provided CNAME record to your DNS registrar.

---

## Environment Variables

This project has no required environment variables. If you add any in the future:

1. Go to **Pages project → Settings → Environment variables**.
2. Add variables for **Production** and/or **Preview** environments.
3. Prefix client-side variables with `VITE_` (e.g., `VITE_API_URL`).

---

## What's Included for Cloudflare

| File                     | Purpose                                                    |
|--------------------------|------------------------------------------------------------|
| `wrangler.toml`          | Wrangler config pointing to `dist/` as the static bucket  |
| `public/_redirects`      | SPA fallback — all routes serve `index.html`               |
| `public/_headers`        | Security headers + aggressive caching for assets/models    |

### Caching Strategy

- `/assets/*` — immutable, 1 year (Vite hashes filenames)
- `/images/*` — 30 days
- `/models/*` — 30 days (Three.js `.enc`, `.hdr` files)
- `/draco/*` — immutable, 1 year (Draco decoder rarely changes)
- `/*.pdf` — 1 day

---

## Build Output

After `npm run build`, the `dist/` directory contains the full static site:

```
dist/
├── index.html
├── assets/          ← JS/CSS bundles (Vite-hashed)
├── images/          ← copied from public/
├── models/          ← Three.js models
├── draco/           ← Draco WASM decoder
└── *.pdf            ← Resume PDFs
```

---

## Troubleshooting

**Build fails with TypeScript errors**
```bash
npx tsc --noEmit   # Check TS errors without building
```

**Wrangler not found after install**
```bash
npx wrangler login    # Use npx instead of global
npx wrangler pages deploy dist --project-name=qasim-portfolio
```

**3D model / WASM not loading on production**
- Ensure `public/models/` and `public/draco/` are committed to your repo.
- Cloudflare Pages automatically copies everything in `public/` to `dist/`.

**Page refreshes give 404**
- The `public/_redirects` file handles this. Make sure it was not accidentally deleted.
