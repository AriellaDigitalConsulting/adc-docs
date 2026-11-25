# ADC Docs

Documentation for Ariella Digital Consulting widgets, built with Astro and Starlight. Pages are Markdown files in
`src/content/docs/docs/`, and the sidebar is defined in `sidebar.mjs`. How to add a page: [AGENTS.md](AGENTS.md).

Pushes to `main` that change pages also update the search index (`index.yml`), so new pages show up in the
header search and the assistant's answers.

```bash
npm install
npm run dev
npm run check   # every page is in the sidebar
npm run build
```

The content was migrated once from LumApps with `scripts/import.mjs`. Rerunning it overwrites manual edits.

The header search (`<adc-search>`, searching ADC and LumApps docs) and the assistant (`<adc-ask>`) come from
`@arielladigitalconsulting/adc-ask`, currently installed from `vendor/` so builds need no registry
token. To use GitHub Packages, allow this repository under the package's Manage Actions access settings, then install
the published version.

The site is served at `docs.adc.dev`: `public/CNAME` pins the custom domain and the deploy workflow builds for the
root path. The old LumApps site on that domain was replaced by this one.
