# Robust Managed IT — website

New marketing site for Robust Managed IT (RJ Computers, since 1989). Next.js 16 + Tailwind CSS 4, exported as a static site.

## Homepage design directions (temporary, round 2)

| Route | Direction | Modeled on | Signature pieces |
| --- | --- | --- | --- |
| `/` | Chooser | | Links to the three versions |
| `/v1` | Black & Signal | CrowdStrike's design language | Red light-ribbon canvas hero, interactive Defense Rings diagram, engagement bundles, huge stats, story carousel |
| `/v2` | Cinematic Precision | Palo Alto Networks' design language | Cinematic photo + particle-wave hero, Recommended strip, sticky section nav, platform tabs, proof wall |
| `/v3` | Enterprise Clear | Fortinet's design language | Hero carousel on a dotted surface, news cards, solution tiles, Security Lifecycle wheel, 60-second Security Check |

All three read the same copy from `src/content/site.ts`. Edit text there once and every version updates.
Values marked `[TBD: …]` in `site.ts` (stats, vendor partners) are placeholders to replace with real numbers before launch.
Stock photos are in `public/img/` (Unsplash License; see `public/img/CREDITS.md`).
The floating V1/V2/V3 switcher and the `robots: noindex` in `src/app/layout.tsx` are for review only.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out — deployable to any static host
```

## Known placeholders

- The contact form has no backend yet. Submitting opens the visitor's email app addressed to info@rjcomputers.com.
- Team photos and client logos could not be recovered from the archive. Stock photos stand in for imagery, and client names are set as text.
- The "16 Questions" guide PDF isn't recovered. Its CTA asks for a copy via the contact form.
