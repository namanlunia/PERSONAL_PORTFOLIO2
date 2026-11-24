# Player Profile Portfolio

A fast, responsive single-page personal portfolio website for Naman Lunia designed as a restrained character sheet, interactive skill tree roadmap, and quest log HUD. It introduces his foundational computer science background, hands-on IoT work, AI coursework, and dedication to game development.

## Tech Stack

- Semantic HTML5 with accessible landmark structure
- CSS3 with CSS Custom Properties (inline, no build step, no frameworks)
- Inline SVG pixel art sprites (crispEdges, 16x16 grid)
- Vanilla JavaScript (no dependencies, no icon library)

## How to Run

Open `index.html` directly in any modern web browser, or serve it with any static web server:

```bash
# Example with Python static server:
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Design Notes

Built with a flat palette of warm charcoal (`#0F1214`), surface (`#161B1E`), secondary surface (`#1C2226`), line (`#2B3439`), bone text (`#E8E4D8`), muted gray (`#8E9993`), amber accent (`#E5A03A`), and decorative amber dim (`#8A6224`), using Chakra Petch for headings/HUD tags and IBM Plex Sans for body typography. Features an interactive skill tree roadmap, fixed viewport HUD frame with scroll XP progress segments, ruler-style hairline dividers, an inverted bone-and-charcoal contact panel, and a 3-tier parallax runner mini-game with ducking mechanics and local high score tracking.
