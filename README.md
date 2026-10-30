# Nautilo Studio

Website of Nautilo Studio, a student marketing agency (TBS Barcelona, Digital Marketing Strategy).
We help Amazon sellers turn more visitors into buyers, using data and AI.

## Run locally

```bash
npm install
npm run dev
```

Create `.env.local` with the Supabase keys (never commit it):

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
```

## Team workflow

One branch per person (`git checkout -b your-name`), one change per prompt, preview, then merge into `main`. Vercel deploys `main` automatically.
