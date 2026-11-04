# ADC Docs: instructions for agents

This is the docs.adc.dev site (Astro + Starlight). Several people edit it, each in their own session, so keep
changes to the pages and files a task needs.

## Adding or editing a page

- Pages are Markdown in `src/content/docs/docs/<slug>.md`. The file name is the URL: `docs/<slug>`, lowercase,
  words separated by `-`. Renaming a file changes its URL: add a redirect from the old one in `astro.config.mjs`.
- Frontmatter needs `title` and `description` (one sentence; it is shown in search results). The build fails
  without them.
- Add every new page to a section in `sidebar.mjs`, or it can't be reached from the menu. `npm run check` fails
  on a page missing from the sidebar.
- Images go in `public/images/` and are referenced as `/images/<file>`.
- `draft: true` keeps a page out of the site and out of the search index.
- Don't run `npm run import`: it was the one-time LumApps migration and overwrites the pages.

Before committing: `npm run check && npm run build`.

## Search and the assistant

The header search and the docs assistant answer from an index of these pages, kept by the `chatgpt-proxy`
service. Nothing to do by hand: merging to `main` runs `.github/workflows/index.yml`, which re-indexes the pages
that changed and removes the deleted ones. Results link to `https://docs.adc.dev/docs/<slug>`.

## Publishing

`main` deploys the site (`deploy.yml`) and updates the index (`index.yml`). Work on a branch and open a pull
request; `check.yml` runs the checks on it.
