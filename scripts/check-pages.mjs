// Fails when a page under src/content/docs/docs/ is missing from the sidebar, or the sidebar names a page that
// doesn't exist. Frontmatter (title, description) is checked by the content schema during `npm run build`.
import { readdirSync, readFileSync } from 'node:fs';
import { sidebar } from '../sidebar.mjs';

const DOCS_DIR = 'src/content/docs/docs';

const linked = new Set();
(function collect(items) {
  for (const item of items) {
    if (typeof item === 'string') linked.add(item);
    else if (item.items) collect(item.items);
    else if (item.slug) linked.add(item.slug);
  }
})(sidebar);

const isDraft = (path) => /^draft:\s*true\s*$/m.test(readFileSync(path, 'utf8').split(/^---\s*$/m)[1] ?? '');
const pages = readdirSync(DOCS_DIR, { recursive: true })
  .filter((file) => /\.mdx?$/.test(file) && !isDraft(`${DOCS_DIR}/${file}`))
  .map((file) => `docs/${file.replace(/\.mdx?$/, '').toLowerCase()}`);

const problems = [
  ...pages.filter((slug) => !linked.has(slug)).map((slug) => `${slug} is not in sidebar.mjs`),
  ...[...linked].filter((slug) => slug.startsWith('docs/') && !pages.includes(slug)).map((slug) => `sidebar.mjs lists ${slug}, which has no page`),
];
for (const problem of problems) console.error(problem);
if (problems.length) process.exit(1);
console.log(`${pages.length} pages, all in the sidebar`);
