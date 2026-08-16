# SPIDER-VERSE / HACK-VERSE

6-hour college hackathon site (Next.js) — ASCAI @ St. John College of Engineering and Management.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before deploy

1. Paste Google Form URL in `src/content/fest.ts` → `registerUrl`
2. Optional: Instagram / WhatsApp links in the same file
3. `npm run build`

## Push

```bash
git add .
git commit -m "Update site"
git push
```

## Deploy (Vercel)

Import the GitHub repo → Framework **Next.js** → Deploy.  
No environment variables needed.

## Content

| File | What |
|------|------|
| `src/content/fest.ts` | event info, college, contacts, form link |
| `src/content/hackathon.ts` | missions, fees, rules |
| `src/content/schedule.ts` | timeline |
| `src/content/faq.ts` | FAQ |
| `src/content/assets.ts` | image / audio paths |

Original event identity. Not affiliated with Marvel or Sony.
