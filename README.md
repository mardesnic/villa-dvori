# Villa Dvori

Website for Villa Dvori — a luxury holiday villa in Podobuče, Pelješac, Croatia.

Live: [villadvori.com](https://villadvori.com)

## Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- [Bootstrap 5](https://getbootstrap.com)
- [yet-another-react-lightbox](https://yet-another-react-lightbox.com) for gallery
- Fonts: EB Garamond + Josefin Sans via `next/font/google`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is generated in `./out/` (static HTML/CSS/JS).

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages using GitHub Actions. The site is served via GitHub's CDN at [villadvori.com](https://villadvori.com).

GitHub Pages must be enabled under **Settings → Pages → Source: GitHub Actions**.

One repository secret is required for automatic availability updates — see the [Availability calendar](#availability-calendar) section below.

## Availability calendar

The availability calendar on the contact page is driven by `data/availability.json`. This file is committed to the repo and is also automatically regenerated on every deploy from an iCal feed.

### How it works

1. The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs `node scripts/fetch-availability.mjs` before the build.
2. The script fetches the iCal URL stored in the `ICAL_URL` repository secret, parses `DTSTART`/`DTEND` date ranges from each `VEVENT`, and writes them to `data/availability.json`.
3. Next.js imports that file at build time — no runtime API calls, no server needed.
4. The workflow also runs on a **daily schedule (06:00 UTC)**, so the calendar stays up to date even without a code push.

### Setting up the iCal secret

1. Get your iCal export URL from Airbnb: **Account → Listings → Availability → Export Calendar**.
2. Go to your GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**.
3. Name: `ICAL_URL`, Value: the full iCal URL (keep it private — it contains a personal token).

If `ICAL_URL` is not set, the script exits cleanly and the existing `data/availability.json` is used as-is (safe for local development).

### Updating availability manually

Edit `data/availability.json` directly and push. Each entry is a `{ "start": "YYYY-MM-DD", "end": "YYYY-MM-DD" }` range where `end` is exclusive (the checkout day itself is shown as available).

### Testing the iCal fetch locally

```bash
ICAL_URL=https://example.com/calendar.ics node scripts/fetch-availability.mjs
```

A test ICS file matching the current data is available at `public/availability-test.ics` and is served from the live site at `/availability-test.ics`.
