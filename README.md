# Hospitality Staffing Website (React + MUI)

Presentation-ready demo website for a hospitality staffing business, now built with React, MUI, and Vite.

## Run Locally

1. Install dependencies:
	npm install
2. Start development server:
	npm run dev
3. Build production files:
	npm run build
4. Preview production build:
	npm run preview

## Main Files

- `index.html` - Vite entry HTML
- `src/main.jsx` - React bootstrap and theme wiring
- `src/App.jsx` - Website UI sections built with MUI components
- `src/theme.js` - MUI theme tokens and component styling
- `src/index.css` - Global background and font imports

## Notes

- Legacy static files `styles.css` and `script.js` remain in the repo for reference and can be removed later.

## Publish / Republish To GitHub Pages

This repo is configured with a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

1. Commit your latest changes.
2. Push to `main`.
3. In GitHub repo settings, ensure Pages source is set to `GitHub Actions`.
4. Wait for the `Deploy Vite site to GitHub Pages` workflow to complete.
5. Your site will be available at:
	`https://<your-username>.github.io/<repo-name>/`