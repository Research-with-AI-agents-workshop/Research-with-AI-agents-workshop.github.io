# Research with AI Agents Workshop Series

Public website for the Research with AI Agents Workshop Series, hosted at [research-with-ai-agents-workshop.github.io](https://research-with-ai-agents-workshop.github.io).

## Tech Stack

Vue 3 + Vite + Tailwind CSS 3 + DaisyUI 4

## Development

```bash
npm install
npm run dev    # Dev server at http://localhost:5173
npm run build  # Production build to dist/
```

## Adding Events

Add entries to `public/data/events.json`. The site automatically splits events into "Upcoming" and "Past" based on the current date.

## Deployment

Pushes to `main` trigger GitHub Actions to build and deploy to GitHub Pages.
