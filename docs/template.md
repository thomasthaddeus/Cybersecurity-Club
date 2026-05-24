# Using This Repository as a Template

This repository is intended to be a starter kit for a cybersecurity club website, not a finished club site. It includes a Vite React app, reusable pages, shared navigation, basic tests, Dependabot, documentation automation, and generated sitemap support.

## Create a New Site

1. Create a new repository from this template or clone it into a new project directory.
2. Install dependencies.

```bash
npm install
```

3. Configure the starter content.

```bash
npm run template:configure -- --name "Example Cyber Club" --short-name "Cyber Club" --email "security@example.edu" --url "https://example.edu/cyber"
```

4. Review and edit `template.config.json`.
5. Start the local site.

```bash
npm start
```

## What to Customize First

Site-level organization information lives in `template.config.json`.

- `site`: club name, tagline, description, public URL, logo file, and copyright year.
- `socials`: Discord, GitHub, LinkedIn, and email links.
- `meeting`: default meeting day, time, location, and cadence.
- `membership`: signup URL and eligibility text.
- `contact`: email, phone, and address.
- `navigation`: visible page links and route paths.
- `home`: home page intro text.
- `about`: mission, overview, goals, and team summary.
- `join`: membership copy and form heading.

Repeating content lives in the `content/` directory.

- `content/events.json`: rows shown on the Events page.
- `content/resources.json`: learning paths shown on the Resources page.
- `content/team.json`: officer, mentor, and lead cards shown on the Team page.
- `content/ctf.json`: CTF practice platforms, competitions, team name, and writeup policy.

After editing the config, run:

```bash
npm run automation:docs
```

That syncs metadata, regenerates the docs index, updates the changelog, and refreshes the sitemap.

## Assets

Default images live in `public/`. Replace these files or add your own:

- `cyber_club_192.png`
- `cyber_club_512.png`
- `cyber_club.png`
- `favicon.ico`

If you use a different logo filename, update `site.logo` in `template.config.json`.

## Adding Pages

1. Add a page component in `src/pages/`.
2. Add a route in `src/App.jsx`.
3. Add a navigation entry in `template.config.json`.
4. Add a navigation entry in `template.config.json`.
5. Run `npm run generate-sitemap`.

## Creation-Time Configuration

The `template:configure` script is meant for quick setup immediately after copying the template. It supports:

```bash
npm run template:configure -- --help
```

Use the script for common fields, then edit `template.config.json` directly for events, resources, and longer text.

## Template Maintenance

Run these before publishing changes to the template itself:

```bash
npm run automation:docs:check
npm test
npm run build
```
