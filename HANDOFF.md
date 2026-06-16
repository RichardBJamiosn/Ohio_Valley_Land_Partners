# Ohio Valley Land Partners — Marketing Site Handoff

*Last updated: 2026-06-16 · source: agent · Status: LIVE (Cloudflare Pages)*

---

## Live URLs

| What | URL |
|---|---|
| **Production** | https://ohiovalleylandpartners.com |
| **Community page (live)** | https://ohiovalleylandpartners.com/community |
| **Guides hub (live)** | https://ohiovalleylandpartners.com/ohio-valley-guides |
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

## Guides hub redesign — LIVE (2026-06-15)

Richard approved mockup v2. **Shipped** in `app/ohio-valley-guides/page.tsx`.

### Mockup files

| File | Purpose |
|---|---|
| `mockups/guides-redesign.html` | Full scrollable redesign mockup (v2) |
| `mockups/images/guides/` | Guide-specific JPEG assets |

### Open mockup

```bash
open /Users/richardjamison/Documents/Projects/Ohio_Valley_Land_Partners/mockups/guides-redesign.html
```

### v2 design decisions (approved direction)

- **Hero:** "for buyers and sellers" — editorial, not sales-led
- **Atlas card:** PA, OH, WV, KY + 981-mile river scope (not deal stats)
- **Scope strip:** 4 states · 981 miles · 9 guides — replaces sales metrics strip
- **Sticky filter tabs** — every link is an existing sitemap route
- **Featured Franklin** campaign card + photo county grid with unique hooks
- **County detail pages unchanged** (`app/ohio-valley-guides/[slug]/page.tsx`)

### Production images

| File | Used for |
|---|---|
| `public/guides/atlas-hero.jpg` | Hero background (heavy dark overlay for readable type) |
| `public/guides/county-infill.jpg` | Franklin featured split card (skyline photo, left panel) |
| `public/guides/county-rural.jpg` | Rural county thumbnails |
| `public/guides/carroll-green-field.jpg` | Carroll county card |

County grid is **text-only** (MapPin + hooks) — no photo grid, no `/community/` image reuse.

---

## GHL chat widget (A2P compliance)

Widget loads on **all pages** via raw HTML in `app/layout.tsx` (required for scanner detection).

| Item | Value |
|---|---|
| Widget ID | `6a1730411b5a98ef9dec746a` |
| Location ID | `bNT4wp0nukIQdBJbQDaa` |
| Loader | `https://widgets.leadconnectorhq.com/loader.js` |

**CSP:** `public/_headers` must allow `widgets.leadconnectorhq.com`, `services.leadconnectorhq.com`, `services.msgsndr.com`, and `stcdn.leadconnectorhq.com` — otherwise the phone popup never renders (`884e53c`, `70d6790`).

**Avatar:** Prompt/header image is configured in GHL dashboard (Sites → Chat Widget), not in repo code. Do **not** hide the widget panel via shadow-DOM CSS — breaks the form and A2P opt-in (`dd84cc6` reverted in `a73daeb`).

Phone fields on site forms remain hidden; GHL widget is the single SMS opt-in source.

---

## Recent session notes (2026-06-15 → 2026-06-16)

- Community page v2 mockup approved → implemented and deployed
- Guides hub v2 mockup approved → implemented and deployed
- Guides hub iterated: clean editorial layout, atlas hero photo restored, Franklin skyline card, text-only county grid
- GHL CSP fixed → phone registration popup working again
- Brief experiment hiding chat panel (bubble only) → **reverted**; full widget with avatar restored
- Portal onboarding work shipped separately — see `OVLP_Portal/HANDOFF.md`

**Recent commits:** `a73daeb` (widget revert) · `70d6790` (CSP) · `5f796a9` (Franklin photo) · `4694f6e` (hero photo) · `a2b524b` (editorial rebuild)

---

## Key paths

| Path | What |
|---|---|
| `app/community/page.tsx` | Live community page |
| `app/ohio-valley-guides/page.tsx` | Live guides hub |
| `mockups/guides-redesign.html` | Approved guides redesign mockup |
| `app/page.tsx` + `components/home/hero-section.tsx` | Landing page (design reference) |
| `app/globals.css` | Design system tokens |
| `app/layout.tsx` | GHL widget embed (raw HTML) |
| `public/_headers` | CSP — must include GHL domains |
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