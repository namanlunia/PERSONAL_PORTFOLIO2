# Naman Lunia // Player Profile & Portfolio

A fast, accessible, static-exportable personal portfolio for **Naman Lunia** designed with the **Player Profile** aesthetic: a restrained game HUD, quest log, interactive skill tree roadmap, and character sheet.

The portfolio is built as a production-grade multi-file Next.js project with zero external UI kits, zero icon libraries, and zero animation bloat.

---

## Tech Stack

- **Framework**: Next.js 15+ (App Router, Static HTML Export `output: 'export'`)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS (custom theme tokens, 0-2px sharp corners, zero drop shadows)
- **Typography**: `next/font/google` loading **Chakra Petch** (500, 600, 700) and **IBM Plex Sans** (400, 500)
- **Graphics**: Handcrafted inline SVG pixel art sprites (`shapeRendering="crispEdges"`)
- **Interactivity**: Pure React state, custom hooks, and canvas animation (Runner mini-game with 3-tier parallax)
- **Deployment**: Zero runtime server required, fully exportable to static hosting (Vercel, GitHub Pages, Cloudflare Pages, Netlify)

---

## Directory Structure

```text
├── app/
│   ├── layout.tsx             # Root layout: fonts, HUD frame, sticky nav, a11y skip-link
│   ├── page.tsx               # Home page assembling all sections in sequence
│   ├── globals.css            # CSS custom properties, marquee animations, motion rules
│   ├── not-found.tsx          # "Level not found" HUD 404 screen
│   ├── sitemap.ts             # Static sitemap generator
│   ├── robots.ts              # Robots.txt generator
│   └── projects/
│       └── [slug]/
│           └── page.tsx       # SSG project detail view with generateStaticParams()
├── components/
│   ├── game/
│   │   ├── RunnerGame.tsx     # Mini-game HUD container
│   │   └── useRunner.ts       # Canvas engine: 3-tier parallax, jumping, ducking, local high score
│   ├── hud/
│   │   ├── CornerReadouts.tsx # Fixed top-left section label and top-right scroll percentage
│   │   ├── Frame.tsx          # Fixed 1px viewport frame with corner brackets
│   │   ├── SectionTitle.tsx   # Oversized outlined numeral + masked heading
│   │   ├── StickyNav.tsx      # Desktop sticky bar & mobile drawer with focus trap
│   │   └── XpBar.tsx          # 20 flat amber segments synced to scroll progress
│   ├── pixel/
│   │   ├── Avatar.tsx         # 16x16 avatar bust with cap and headset
│   │   ├── Garment.tsx        # 16x16 clothing hanger sprite
│   │   ├── Medal.tsx          # 8x8 achievement medal sprite
│   │   ├── Plant.tsx          # 16x16 potted plant with water droplet
│   │   └── Trophy.tsx         # 16x16 hackathon trophy sprite
│   ├── sections/
│   │   ├── Hero.tsx           # Full viewport hero: oversized headline, player card, runner game
│   │   ├── Ticker.tsx         # 40s linear marquee status strip
│   │   ├── About.tsx          # Bio, 5 skill attribute stat bars, loadout tags
│   │   ├── Roadmap.tsx        # 7-node interactive progression skill tree
│   │   ├── Projects.tsx       # Full-width quest log rows with collapsible telemetry
│   │   ├── Achievements.tsx   # 5 of 5 IBM SkillsBuild credentials with verification links
│   │   ├── Contact.tsx        # Inverted bone-and-charcoal panel with amber square accent
│   │   └── Footer.tsx         # Copyright notice, keyboard shortcut guide, back-to-top link
│   └── ui/
│       ├── Button.tsx         # Text buttons with instant state change and 44px touch targets
│       ├── Divider.tsx        # Hairline ruler with 1px tick marks
│       ├── Panel.tsx          # Surface container with 4 corner brackets
│       ├── StatBar.tsx        # 5-segment level gauge
│       └── Tag.tsx            # StatusTag and ToolTag components
├── content/
│   ├── certificates.ts        # Typed credentials and lead text
│   ├── links.ts               # Navigation items, contact links, ticker items
│   ├── profile.ts             # Bio, character stats, loadout tools, hero copy
│   ├── projects.ts            # Project entries with goals, tools, next steps, URLs
│   └── roadmap.ts             # 7 skill tree nodes with telemetry notes
├── hooks/
│   ├── useActiveSection.ts    # Tracks visible section ID based on scroll position
│   ├── useKeyboardShortcuts.ts# Maps keys [1]-[5] to section jump anchors
│   ├── useReducedMotion.ts    # useSyncExternalStore listener for prefers-reduced-motion
│   └── useScrollProgress.ts   # Computes live scroll ratio (0.0 to 1.0)
├── lib/
│   └── storage.ts             # Safe localStorage getters/setters with try/catch
└── legacy/
    └── index.html             # Preserved single-file version of the portfolio
```

---

## Quickstart

### Development Mode

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Type Check & Lint

```bash
npm run typecheck    # Strict TypeScript verification (tsc --noEmit)
npm run lint         # ESLint 9 checks
```

### Static Export Build

```bash
npm run build
```

The static site will be compiled and exported directly to the `out/` folder, ready for deployment on any static CDN (Vercel, GitHub Pages, Cloudflare Pages, S3).

---

## Content Editing Guide

All site copy is cleanly separated in `/content`. You can modify any text without altering JSX or styles:

- **Profile & Bio**: Edit `/content/profile.ts` (headline, bio paragraph, skill levels, loadout tools).
- **Projects & Quests**: Edit `/content/projects.ts` (add projects, change tools, update goals or repo URLs).
- **Certificates**: Edit `/content/certificates.ts` (add credentials, issuance dates, verification URLs).
- **Roadmap Skill Tree**: Edit `/content/roadmap.ts` (update node status: `UNLOCKED`, `NOW`, or `NEXT GOAL`).
- **Links & Ticker**: Edit `/content/links.ts` (navigation anchors, social/contact links, marquee items).

---

## Design System & HUD Rules

1. **Colour Palette (Flat, No Gradients)**:
   - `--bg`: `#0F1214` (Warm charcoal)
   - `--surface`: `#161B1E` (Panel surface)
   - `--surface-2`: `#1C2226` (Player card and sub-panels)
   - `--line`: `#2B3439` (1px borders and ruler dividers)
   - `--text`: `#E8E4D8` (Bone text)
   - `--muted`: `#8E9993` (Secondary text and tags)
   - `--accent`: `#E5A03A` (Amber, reserved for status, key numbers, focus rings, and mini-game player)
   - `--amber-dim`: `#8A6224` (Decorative sprite shading only)

2. **Typography**:
   - Headings, tags, numbers, readouts: **Chakra Petch** (500, 600, 700)
   - Body copy: **IBM Plex Sans** (400, 500)

3. **Motion**:
   - Zero hover transitions. Hover states change colour or underline instantly.
   - Smooth one-time scroll reveal for sections (300ms, 6px upward shift).
   - Linear 40s marquee ticker that pauses on hover or when `prefers-reduced-motion` is active.
   - Jump shortcuts enabled: Keys `1` to `5` immediately scroll to sections `01` through `05`.

---

## Open Placeholders Directory

All placeholder URLs are maintained as `"#"` with clear visible labels:

| Section | Item | Current Link | Required URL |
| :--- | :--- | :--- | :--- |
| **Projects** | Ateevibes E-commerce Website | `#` | Live production store URL |
| **Projects** | Hackathon Website Frontend | `#` | Public repository or preview URL |
| **Projects** | Automatic Plant-Watering Device | `#` | GitHub repository / hardware schematic |
| **Projects** | [Template] Project Slot 04 | `#` | Repository / prototype link |
| **Projects** | [Template] Project Slot 05 | `#` | Repository / demo link |
| **Achievements** | Artificial Intelligence Fundamentals | `#` | Credly / IBM SkillsBuild badge verification link |
| **Achievements** | Machine Learning Methods and Tools | `#` | Credly / IBM SkillsBuild badge verification link |
| **Achievements** | Data Analytics for Machine Learning | `#` | Credly / IBM SkillsBuild badge verification link |
| **Achievements** | Natural Language Processing | `#` | Credly / IBM SkillsBuild badge verification link |
| **Achievements** | Supervised Learning Methods | `#` | Credly / IBM SkillsBuild badge verification link |
