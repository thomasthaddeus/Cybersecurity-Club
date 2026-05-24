# Automation

This repository uses GitHub Actions and Dependabot to keep the site healthy with a small maintenance surface.

## Continuous Integration

The CI workflow runs on pushes and pull requests. It installs dependencies with `npm ci`, checks generated documentation, runs the test suite, and builds the React app.

## Dependabot

Dependabot checks npm packages and GitHub Actions weekly. Patch and minor updates are grouped to reduce pull request noise. Major updates remain separate so they can be reviewed with more care.

Dependabot pull requests are automatically approved and enrolled in GitHub auto-merge when they are patch or minor updates. Repository branch protection should require the CI workflow before merge.

## Documentation and Changelog

The documentation workflow runs after pushes to the default branch, every Monday, and on manual dispatch. It refreshes:

- `CHANGELOG.md`
- `docs/README.md`
- `public/sitemap.xml`

When generated files change, the workflow opens a pull request named `docs: refresh generated documentation`.
