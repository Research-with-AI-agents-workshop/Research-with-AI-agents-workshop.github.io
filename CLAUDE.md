# Research with AI Agents Workshop Website

## Tech Stack
Vue 3 + Vite + Tailwind CSS 3 + DaisyUI 4 + FontAwesome

## Development
```bash
npm install
npm run dev    # Dev server with hot reload
npm run build  # Production build to dist/
```

## Structure
- `src/pages/` — Page components (Home, Events, About)
- `src/components/` — Reusable components (Navbar, Footer, EventCard)
- `src/router/` — Vue Router config
- `public/data/events.json` — Event data (add new events here)

## Adding a New Event
Add an entry to `public/data/events.json`. Fields: id, speaker, date (YYYY-MM-DD), time, title, abstract, bio, location, links.

## Deployment
GitHub Actions deploys `dist/` to GitHub Pages on push to `main`. The workflow copies `index.html` to `404.html` for SPA client-side routing.

## Theme
Uses a custom "workshop" DaisyUI theme based on "corporate" with teal/cyan primary colors.
