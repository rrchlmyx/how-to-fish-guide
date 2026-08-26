# State Line — RUNAWAYS Roblox guides

Second guide site from the same homework workflow. It is a separate Next.js app so it can be deployed on its own Vercel project.

## Why this game

RUNAWAYS is still climbing on Roblox, the name is searchable with "Roblox", and players keep looking up codes, classes, and the Mexico route. That is a better keyword shape than "How to Fish", which collides with real fishing tutorials.

This is not a guaranteed-money site. Codes pages are competitive. The bet is speed plus source-linked class/route pages.

## Run locally

```bash
cd sites/runaways-guide
npm ci
npm run dev
```

Opens at http://localhost:3001

## Deploy

Create a new Vercel project with:

- Root Directory: `sites/runaways-guide`
- Framework: Next.js
- Set `NEXT_PUBLIC_SITE_URL` to the production HTTPS origin after the first deploy, then redeploy.
