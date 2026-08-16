# SPIDER-VERSE

6-hour college hackathon site (Next.js).

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you push / deploy

1. **Google Form URL** — paste into `src/content/fest.ts` → `registerUrl`
2. Optional: college name, Instagram, WhatsApp in the same file
3. Confirm build:

```bash
npm run build
```

## Push (you do this)

```bash
git add .
git commit -m "Ready SPIDER-VERSE hackathon site for deploy"
git remote add origin YOUR_GITHUB_REPO_URL   # if not already set
git branch -M main
git push -u origin main
```

## Deploy on Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) → sign in with GitHub
2. **Add New Project** → import this repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**
5. Done — you get a live URL like `https://your-project.vercel.app`

No env vars required for the current site.

### After deploy

- Add custom domain in Vercel → Project → Settings → Domains (optional)
- Update `registerUrl` anytime, push again → Vercel redeploys automatically

## Content files

| File | What |
|------|------|
| `src/content/fest.ts` | name, dates, links, Google Form |
| `src/content/hackathon.ts` | missions, fees, rules |
| `src/content/schedule.ts` | timeline |
| `src/content/faq.ts` | FAQ |
| `src/content/assets.ts` | image paths |

Original event identity. Not affiliated with Marvel or Sony.
