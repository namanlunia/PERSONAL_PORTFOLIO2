# Naman Lunia: Player Profile & Portfolio

## 1. Problem
A portfolio submission for the Systems & Artificial Intelligence (S&AI) course that must convey engineering capability, rapid learning, and a clear aspiration toward game development within 15 seconds to recruiters and evaluators without visual bloat, broken links, or placeholder copy.

---

## 2. Solution and Architecture
A high-performance, single-page application built with Next.js 15 App Router and TypeScript, adhering to a restrained "Player Profile" game HUD aesthetic. The application is structured across six required sections (About me, Skills, S&AI open-source contributions, Projects, Education and achievements, Contact), enclosed within a responsive background mat that clips scrolling content cleanly at the 1px frame line. The interface features a 20-segment scroll-synced XP progress bar, keyboard-driven navigation (keys 1 to 6) for instant section jumps, and an interactive HTML5 canvas runner mini-game. All portfolio data is typed in modular content files and pre-rendered into static HTML for zero-latency public delivery.

```text
+---------------------------------------------------------------------------------+
|  TOP MAT STRIP: [SEC // READOUT]     [=== XP PROGRESS BAR === 100%]   [SCROLL %]|
+---------------------------------------------------------------------------------+
|  FIXED HEADER (96px/80px/64px):  NL (28px)  |  01-06 NAV LINKS  |  [MENU / a11y]|
+---------------------------------------------------------------------------------+
|  INNER VIEWPORT (1px line border + 20px amber corner brackets)                  |
|                                                                                 |
|  [HERO: Title & Statement]  <--->  [PLAYER CARD #0001: Character Sheet]         |
|                                                                                 |
|  [CANVAS RUNNER MINI-GAME: Parallax Obstacle Jumper]                            |
|  [TICKER MARQUEE: Linear Status Broadcast Strip]                                |
|  [01 ABOUT ME: Student Bio & Career Goals]                                      |
|  [02 SKILLS: Categorized Evidence Chips -> GitHub PRs & Source Files]           |
|  [03 S&AI CONTRIBUTIONS: 10 Verified PR Entries -> geekcomputers-Python]        |
|  [04 PROJECTS: 4 In-Depth Case Studies -> Storefront, OWOC, Playground, Token]  |
|  [05 EDUCATION & ACHIEVEMENTS: NST Degree + 11 Credly Verified Badges]          |
|  [06 CONTACT: Inverted Tone Panel -> Direct Email, GitHub & LinkedIn]           |
|                                                                                 |
|  FOOTER: Navigation Hints (Keys 1-6) + Back to Top                              |
+---------------------------------------------------------------------------------+
|  BOTTOM MAT STRIP: [PORTFOLIO / V1.0]                      [STATUS / AVAILABLE] |
+---------------------------------------------------------------------------------+
```

---

## 3. Tech Stack
- **Framework**: Next.js 15+ (App Router, Static HTML prerendering)
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS (custom theme tokens, 0 to 2px sharp corners, zero drop shadows)
- **Typography**: Fontsource (`@fontsource/chakra-petch` and `@fontsource/ibm-plex-sans`) loading Chakra Petch (500, 600) and IBM Plex Sans (400, 500)
- **Graphics**: Handcrafted inline SVG pixel art sprites with crisp edges
- **Interactivity**: Pure React state, custom hooks, and HTML5 Canvas mini-game with 3-tier parallax
- **Testing & Tooling**: ESLint 9, strict TypeScript type checking (`tsc --noEmit`), automated link verification, and forbidden-string audits
- **Deployment**: Next.js application deployed on Vercel

---

## 4. My Contribution
I defined the requirements, architectural specifications, and design direction for the portfolio, directed AI coding assistants (Antigravity and Claude) throughout the implementation, reviewed and tested the code, verified all external links and GitHub PR contracts, and deployed the production site on Vercel.

---

## 5. Live Demo Link
- **Production Site**: [https://personal-portfolio2-eta-seven.vercel.app/](https://personal-portfolio2-eta-seven.vercel.app/)
- **GitHub Repository**: [https://github.com/namanlunia/PERSONAL_PORTFOLIO2](https://github.com/namanlunia/PERSONAL_PORTFOLIO2)

---

## 6. Directory Structure

```text
├── app/
│   ├── layout.tsx             # Root layout: fonts, HUD frame, sticky nav, a11y skip-link
│   ├── page.tsx               # Home page assembling all 6 sections in sequence
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
│   │   ├── Frame.tsx          # Solid mat frame with 1px inner line & 20px amber brackets
│   │   ├── SectionTitle.tsx   # Numerals in amber + section heading + hairline rule
│   │   ├── StickyNav.tsx      # 3-column grid header (NL, centered nav, mobile drawer)
│   │   └── XpBar.tsx          # 20 flat amber segments centered in top mat strip
│   ├── pixel/
│   │   ├── Avatar.tsx         # 16x16 avatar bust with cap and headset
│   │   ├── Garment.tsx        # 16x16 clothing hanger sprite
│   │   ├── Medal.tsx          # 8x8 achievement medal sprite
│   │   ├── Plant.tsx          # 16x16 potted plant with water droplet
│   │   └── Trophy.tsx         # 16x16 hackathon trophy sprite
│   ├── sections/
│   │   ├── Hero.tsx           # Full viewport hero: name, statement, player card (6 rows)
│   │   ├── Ticker.tsx         # 40s linear marquee status strip
│   │   ├── About.tsx          # 01 About me (exact rubric paragraph)
│   │   ├── Skills.tsx         # 02 Skills (categorized evidence chips linking to code/PRs)
│   │   ├── Contributions.tsx  # 03 S&AI contributions (10 PR entries with verification commands)
│   │   ├── Projects.tsx       # 04 Projects (4 case studies with architecture & repo links)
│   │   ├── Education.tsx      # 05 Education & achievements (NST degree + 11 Credly badges)
│   │   ├── Contact.tsx        # 06 Contact (inverted colour panel, email, GitHub, LinkedIn)
│   │   └── Footer.tsx         # Copyright, keyboard shortcuts guide (1-6), back-to-top link
│   └── ui/
│       ├── Button.tsx         # Text buttons with instant state change and 44px touch targets
│       ├── Divider.tsx        # Hairline ruler with 1px tick marks
│       ├── Panel.tsx          # Surface container with 4 corner brackets
│       └── Tag.tsx            # ToolTag components
├── content/
│   ├── contributions.ts       # 10 S&AI PR records with what changed, rationale, test command
│   ├── education.ts           # Academic credentials + 11 verified Credly badges
│   ├── links.ts               # Navigation items (01-06), contact channels, ticker copy
│   ├── profile.ts             # Hero statement, subline, character card rows, bio paragraph
│   ├── projects.ts            # 4 featured projects with problem, solution, stack, contributions
│   └── skills.ts              # Categorized skill items linking to specific code and PR files
├── hooks/
│   ├── useActiveSection.ts    # Tracks visible section ID based on scroll position
│   ├── useKeyboardShortcuts.ts# Maps keys [1] to [6] to section jump anchors
│   ├── useReducedMotion.ts    # Listener for prefers-reduced-motion accessibility
│   └── useScrollProgress.ts   # Computes live scroll ratio (0.0 to 1.0)
├── scripts/
│   ├── audit_forbidden_strings.mjs # Verifies 0 forbidden or placeholder strings exist
│   ├── check-links.mjs        # Verifies all 48 external URLs return HTTP 200 / valid status
│   └── verify_screenshots.mjs # Puppeteer script capturing viewports and checking DOM stats
└── legacy/
    └── index.html             # Preserved single-file version of the portfolio
```

---

## 7. Quickstart

### Development Mode
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Type Check & Lint
```bash
npm run typecheck    # Strict TypeScript verification (tsc --noEmit)
npm run lint         # ESLint checks
```

### Static Export Build
```bash
npm run build
```
The site will be compiled and exported directly to the `out/` folder, ready for deployment on Vercel or any static host.

### Automated Verifications
```bash
node scripts/check-links.mjs              # Verify all 48 external URLs
node scripts/audit_forbidden_strings.mjs  # Verify zero forbidden placeholder strings
node scripts/verify_screenshots.mjs       # Generate full verification screenshot suite
```

---

## 8. Content Editing Guide

All site copy is cleanly separated in `/content`. You can modify any text without altering JSX or styles:

- **Profile & Hero**: Edit `/content/profile.ts` (headline, bio paragraph, character card rows).
- **Skills Directory**: Edit `/content/skills.ts` (skill chips, code evidence, repository URLs).
- **Course Contributions**: Edit `/content/contributions.ts` (Task IDs, PR titles, file modules, verification commands).
- **Projects**: Edit `/content/projects.ts` (problem statements, architecture solutions, tech stacks, live/repo links).
- **Education & Badges**: Edit `/content/education.ts` (academic degree, 11 Credly badge records, issue dates).
- **Links & Ticker**: Edit `/content/links.ts` (navigation anchors, contact channels, ticker broadcast items).

---

## 9. Design System & HUD Rules

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

3. **Motion & Interaction**:
   - Zero hover transitions. Hover states change colour or underline instantly.
   - Smooth one-time scroll reveal for sections (300ms, 6px upward shift).
   - Linear 40s marquee ticker that pauses on hover or when `prefers-reduced-motion` is active.
   - Jump shortcuts enabled: Keys `1` to `6` immediately scroll to sections `01` through `06`.

---

## 10. Audit & Quality Verification

| Check | Target | Result | Status |
| :--- | :--- | :--- | :--- |
| **Forbidden Strings** | Zero matches for placeholders | 0 hits across all files | **PASSED** |
| **Required Sections** | Exact 6 rubric sections in order | 01 to 06 rendered in sequence | **PASSED** |
| **External Links** | Publicly accessible without login | 48/48 URLs verified | **PASSED** |
| **S&AI PRs** | Verbatim GitHub title, status, verify command | 10/10 PRs matched to GitHub API | **PASSED** |
| **Credly Badges** | Exact title and verified issue date | 11/11 verified via Credly public records | **PASSED** |
| **Header Layout** | 96px desktop / 80px tablet / 64px mobile | 3-column grid, centered nav, XP bar centered | **PASSED** |
