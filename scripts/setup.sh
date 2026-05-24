#!/usr/bin/env bash
set -euo pipefail

echo "Installing dependencies..."
npm install

echo "Configuring template metadata..."
npm run template:configure -- "$@"

echo "Refreshing generated files..."
npm run automation:docs

echo "Template setup complete. Run npm start to launch the site."
