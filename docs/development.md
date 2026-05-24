# Development

## Requirements

- Node.js 20 or newer
- npm

## Local Setup

```bash
npm install
npm start
```

The development server runs at `http://localhost:3000`.

The app uses Vite for local development, production builds, and Vitest-based tests.

## Useful Commands

```bash
npm test
npm run build
npm run generate-sitemap
npm run automation:docs
```

`npm run automation:docs` refreshes generated documentation, the changelog, and the sitemap. Use `npm run automation:docs:check` to verify generated files are current without writing changes.

## Project Layout

- `template.config.json` contains the default content that new projects customize first.
- `content/` contains editable JSON collections for events, resources, team members, and CTF details.
- `src/` contains the React application.
- `src/pages/` contains top-level page components.
- `src/components/` contains shared UI components.
- `public/` contains static assets, the manifest, robots file, and generated sitemap.
- `docs/` contains project documentation.
- `scripts/` contains local automation scripts used by GitHub Actions.
