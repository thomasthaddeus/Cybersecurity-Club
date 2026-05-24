# Cybersecurity Club Website Template

## Overview

This repository is a reusable website template for cybersecurity clubs, student organizations, and community security groups. It provides a Vite React app with ready-made pages, shared navigation, generated sitemap support, Dependabot, GitHub Actions, documentation automation, and a central configuration file for organization-specific content.

The main customization point is `template.config.json`. New projects can update common fields at creation time with `npm run template:configure`, then edit the config file for events, resources, and longer page copy.

## Features

- **Template configuration**: Edit `template.config.json` to change the club name, meeting details, socials, contact details, page copy, and navigation.
- **Content files**: Edit JSON files in `content/` for events, resources, team members, and CTF information.
- **Home Page**: Starter introduction and calls to the core pages.
- **About Us Page**: Mission, overview, goals, and team summary.
- **Events Page**: Config-driven event table.
- **Team Page**: Officer, mentor, and lead profiles from `content/team.json`.
- **CTF Page**: Competition info, practice platforms, and writeup policy from `content/ctf.json`.
- **Resources Page**: Content-driven cybersecurity learning paths.
- **Join Us Page**: Starter membership form.
- **Contact Page**: Config-driven contact details and starter contact form.
- **Navigation**: Shared menu and sidebar generated from the same navigation config.
- **Automation**: CI, Dependabot, generated documentation, changelog, and sitemap workflows.

## Use This Template

1. Create a new repository from this template or clone it into a new project directory.
2. Install dependencies:

```bash
npm install
```

3. Configure common starter values:

```bash
npm run template:configure -- --name "Example Cyber Club" --short-name "Cyber Club" --email "security@example.edu" --url "https://example.edu/cyber" --meeting-day "Thursday" --meeting-time "6:00 PM"
```

4. Edit `template.config.json` for site-level settings and page text.
5. Edit `content/events.json`, `content/resources.json`, `content/team.json`, and `content/ctf.json` for club-specific content.
6. Start the development server:

```bash
npm start
```

The application runs at `http://localhost:3000`.

## Development

Run the main project checks before opening a pull request:

```bash
npm run automation:docs:check
npm test
npm run build
```

Generated documentation, the changelog, and the sitemap can be refreshed with:

```bash
npm run automation:docs
```

## Template Configuration

Customize the starter site in `template.config.json`:

- `site`: name, short name, tagline, description, URL, logo, and copyright year.
- `socials`: Discord, GitHub, LinkedIn, and email links.
- `meeting`: default meeting day, time, location, and cadence.
- `membership`: signup URL and eligibility copy.
- `contact`: email, phone, and address.
- `navigation`: labels and paths used by the menu, sidebar, and sitemap.
- `home`, `about`, `join`: page copy.

Customize repeating content in `content/`:

- `content/events.json`: event rows.
- `content/resources.json`: resource learning paths.
- `content/team.json`: team member cards.
- `content/ctf.json`: CTF team info, practice platforms, competitions, and writeup policy.

See [docs/template.md](docs/template.md) for the full template workflow.

## File Structure

```text
my-cybersecurity-club/
├── .github/
│   └── workflows/
├── docs/
├── content/
│   ├── ctf.json
│   ├── events.json
│   ├── resources.json
│   └── team.json
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── scripts/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── index.jsx
│   └── templateConfig.js
├── generate-sitemap.js
├── index.html
├── template.config.json
├── vite.config.mjs
└── package.json
```

## Automation

This repository includes GitHub Actions for CI, generated documentation, changelog updates, sitemap refreshes, and Dependabot pull request automation. See [docs/automation.md](docs/automation.md) for details.

## Documentation

Project documentation starts at [docs/README.md](docs/README.md). Template usage is covered in [docs/template.md](docs/template.md). Release history is tracked in [CHANGELOG.md](CHANGELOG.md).

## Contributing

Contributions are welcome. For template changes, keep defaults generic and update documentation when the setup flow changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
