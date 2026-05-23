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

No secrets or configuration required — GitHub Pages is enabled under **Settings → Pages → Source: GitHub Actions**.
