# Ohio Valley Land Partners — Marketing Site Handoff

*Last updated: 2026-06-15 · source: agent · Status: LIVE (Cloudflare Pages)*

---

## Live URLs

| What | URL |
|---|---|
| **Production** | https://ohiovalleylandpartners.com |
| **Community page (live)** | https://ohiovalleylandpartners.com/community |
| **GitHub** | `RichardBJamiosn/Ohio_Valley_Land_Partners` (private) |
| **Portal (separate repo)** | https://ovlp-portal.vercel.app — see `OVLP_Portal/HANDOFF.md` |

---

## Repo location

```
/Users/richardjamison/Documents/Projects/Ohio_Valley_Land_Partners/
```

Stack: **Next.js** (static export) + **Cloudflare Pages** + form APIs in `functions/api/`.

---

## Community page redesign — LIVE (2026-06-15)

Richard approved mockup v2. **Shipped** in `app/community/page.tsx`.

### Mockup files

| File | Purpose |
|---|---|
| `mockups/community-redesign.html` | Full scrollable redesign mockup (v2) |
| `mockups/images/` | Local JPEG assets — mockup must use these, not hotlinked Unsplash |

### Open mockup

```bash
open /Users/richardjamison/Documents/Projects/Ohio_Valley_Land_Partners/mockups/community-redesign.html
```

### v2 design decisions (approved direction)

- **Community-first hero** — not donation/transparency led
- **No transparency timeline section** — felt touch-and-go for a new operation
- **Stats:** 9 counties · 1.77M+ acres · Local (not 5% giving stats in hero)
- **Pillars:** Land · People · Partners
- **Photo-forward partner cards** (alternating layout)
- **East Palestine** full-bleed feature block
- **Closing:** Landowners CTA + Builders Network CTA (two sides of the table)
- **Giving mention:** one quiet italic line at bottom only

### Production images

Stock photography in `public/community/` — replace with real org/county photography when available.

| File | Used for |
|---|---|
| `hero-valley.jpg` | Hero background |
| `forest-arch.jpg` | Hero quote panel |
| `partner-forest.jpg` | Arc of Appalachia card |
| `partner-community.jpg` | Salvation Army card |
| `partner-urban.jpg` | COCIC card |
| `ep-feature.jpg` | East Palestine feature |

---

## Recent session notes (2026-06-15)

- Community page v2 mockup approved → implemented and deployed
- Images bundled in `public/community/` (stock placeholders)
- Portal onboarding work shipped separately — see `OVLP_Portal/HANDOFF.md`

---

## Key paths

| Path | What |
|---|---|
| `app/community/page.tsx` | Live community page (old design) |
| `app/page.tsx` + `components/home/hero-section.tsx` | Landing page (design reference) |
| `app/globals.css` | Design system tokens |
| `mockups/community-redesign.html` | Approved redesign mockup |
| `public/hero.mp4` | Landing hero video |
| `public/og.jpg` | OG / fallback imagery |

---

## Deploy

```bash
cd /Users/richardjamison/Documents/Projects/Ohio_Valley_Land_Partners
npm run build
# Push to GitHub → Cloudflare Pages auto-deploys
```

---

*Next hands: read this file first. Do not overwrite `~/Me-Nexus/current_state.md` or `last_session.md` — those are watcher-owned per `nexus_rules.md`.*