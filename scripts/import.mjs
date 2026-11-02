// One-time migration: converts the LumApps content dump into Markdown and downloads its images.
// Usage: node scripts/import.mjs <content-list.json>
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const DOCS_DIR = 'src/content/docs/docs';
const IMAGES_DIR = 'public/images';
const EXTENSIONS = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/gif': 'gif', 'image/webp': 'webp', 'image/svg+xml': 'svg' };
// Replaced by the new homepage and sidebar, or redirected in astro.config.mjs
const SKIPPED = new Set(['welcome', 'hello', 'all-widgets', 'search-lumapps-documentation']);
const OLD_HOSTS = /^https?:\/\/docs\.(adc\.dev|arielladigitalconsulting\.com)/i;

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
turndown.use(gfm);

const items = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const report = { failedImages: [], widgets: {}, links: new Set(), empty: [], unknownNodes: new Set() };
const imageCache = new Map();

function widgetsOf(node, found = []) {
  if (Array.isArray(node)) node.forEach((child) => widgetsOf(child, found));
  else if (node && typeof node === 'object') {
    if (node.widgetType) found.push(node);
    Object.values(node).forEach((child) => widgetsOf(child, found));
  }
  return found;
}

async function downloadImage(src) {
  if (imageCache.has(src)) return imageCache.get(src);
  const url = src.startsWith('/') ? `https://docs.adc.dev${src}` : src;
  const name = createHash('sha256').update(src).digest('hex').slice(0, 16);
  let local = null;
  try {
    const response = await fetch(url, { headers: { Accept: 'image/*' } });
    const type = (response.headers.get('content-type') || '').split(';')[0];
    if (!response.ok || !EXTENSIONS[type]) throw new Error(`${response.status} ${type}`);
    local = `/images/${name}.${EXTENSIONS[type]}`;
    writeFileSync(`public${local}`, Buffer.from(await response.arrayBuffer()));
  } catch (error) {
    report.failedImages.push(`${src.slice(0, 90)}: ${error.message}`);
  }
  imageCache.set(src, local);
  return local;
}

async function cleanHtml(html, slugs) {
  const $ = cheerio.load(html, null, false);
  $('style, script').remove();
  $('[style], [class], [id], [dir], [width], [height], [align], [border]').each((_, el) => {
    for (const attr of ['style', 'class', 'id', 'dir', 'width', 'height', 'align', 'border']) $(el).removeAttr(attr);
  });
  $('span, font').each((_, el) => $(el).replaceWith($(el).contents()));

  for (const el of $('img').toArray()) {
    const src = $(el).attr('src') || '';
    const local = src && !src.startsWith('data:') ? await downloadImage(src) : null;
    if (local) $(el).attr('src', local);
    else $(el).remove();
  }
  $('a').each((_, el) => {
    const href = $(el).attr('href') || '';
    const internal = href.replace(OLD_HOSTS, '');
    if (internal !== href || href.startsWith('/')) {
      const slug = internal.match(/\/docs\/([^/?#]+)/)?.[1];
      if (slug && !slugs.has(slug)) report.links.add(href);
      $(el).attr('href', internal || '/');
    }
  });
  $('p, h1, h2, h3, h4, h5, h6').each((_, el) => {
    if (!$(el).text().replace(/ /g, ' ').trim() && !$(el).find('img').length) $(el).remove();
  });
  // The page title is the only h1, so every heading moves down a level
  for (const level of [5, 4, 3, 2, 1]) $(`h${level}`).each((_, el) => { el.tagName = `h${level + 1}`; });
  return $.html().replace(/ |&nbsp;/g, ' ');
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Converts the rich text tree of "contribution" widgets to HTML
function richTextToHtml(node) {
  if (typeof node.text === 'string') {
    let html = escapeHtml(node.text);
    if (node.bold) html = `<strong>${html}</strong>`;
    if (node.italic) html = `<em>${html}</em>`;
    return html;
  }
  const inner = (node.children || []).map(richTextToHtml).join('');
  switch (node.type) {
    case 'heading': return `<h${node.level}>${inner}</h${node.level}>`;
    case 'paragraph': return `<p>${inner}</p>`;
    case 'unordered-list': return `<ul>${inner}</ul>`;
    case 'ordered-list': return `<ol>${inner}</ol>`;
    case 'list-item': return `<li>${inner}</li>`;
    case 'link': return `<a href="${escapeHtml(node.href)}">${inner}</a>`;
    case 'image-group': return (node.images || []).map((image) => `<p><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || '')}"></p>`).join('');
    default:
      report.unknownNodes.add(node.type);
      return inner;
  }
}

function widgetHtml(widget) {
  const props = widget.properties || {};
  switch (widget.widgetType) {
    case 'html': return props.content?.en || '';
    case 'intro': return props.content?.en ? `<p>${props.content.en}</p>` : '';
    case 'contribution': return (props.richText?.en?.children || []).map(richTextToHtml).join('');
    case 'links':
      return `<ul>${(props.items || []).map((item) => `<li><a href="${escapeHtml(item.link?.en || '')}">${escapeHtml(item.title?.en || item.link?.en || '')}</a></li>`).join('')}</ul>`;
    default: return '';
  }
}

function videoUrl(widget) {
  return widget.properties?.embed?.en?.match(/src="https:\/\/www\.youtube\.com\/embed\/([\w-]+)/)?.[1];
}

function cleanTitle(title) {
  return title.replace(/\s*\(NEW\)\s*/i, '').trim();
}

function describe(excerpt, title) {
  const text = (excerpt || '').replace(/^\s*(Widget|Extension)?\s*Overview\s*/i, '').replace(/\s+/g, ' ').trim();
  const sentence = text.match(/^.{20,160}?[.!?](?=\s|$)/)?.[0] ?? text.slice(0, 160);
  return sentence || `${title} documentation.`;
}

function yamlString(value) {
  return JSON.stringify(value);
}

mkdirSync(DOCS_DIR, { recursive: true });
mkdirSync(IMAGES_DIR, { recursive: true });

const pages = items.filter((item) => item.type !== 'menu' && !SKIPPED.has(item.slug.en));
const slugs = new Set(pages.map((item) => item.slug.en));
const manifest = [];

for (const item of pages) {
  const slug = item.slug.en;
  const parts = [];
  for (const widget of widgetsOf(item.template)) {
    const type = widget.widgetType;
    report.widgets[type] = (report.widgets[type] || 0) + 1;
    const videoId = type === 'video' && videoUrl(widget);
    if (videoId) {
      parts.push(`<p><a href="https://www.youtube.com/watch?v=${videoId}">Watch the video on YouTube</a></p>`);
      continue;
    }
    const html = widgetHtml(widget);
    if (!html) continue;
    const cleaned = await cleanHtml(html, slugs);
    // On FAQ-style pages the question is the widget's title rather than part of its body
    const heading = widget.title?.en?.trim();
    parts.push(heading ? `<h2>${escapeHtml(heading)}</h2>${cleaned}` : cleaned);
  }
  const body = turndown.turndown(parts.join('\n')).replace(/\n{3,}/g, '\n\n').replace(/[ \t]+$/gm, '').trim();
  const title = cleanTitle(item.title.en);
  if (body.length < 200) report.empty.push(`${slug} (${body.length})`);
  writeFileSync(
    `${DOCS_DIR}/${slug}.md`,
    `---\ntitle: ${yamlString(title)}\ndescription: ${yamlString(describe(item.excerpt?.en, title))}\nlastUpdated: ${item.updatedAt.slice(0, 10)}\n---\n\n${body}\n`,
  );
  manifest.push({ slug, title, chars: body.length, updated: item.updatedAt.slice(0, 10) });
}

console.log(JSON.stringify({ pages: manifest, images: imageCache.size, failedImages: report.failedImages, widgets: report.widgets, unresolvedLinks: [...report.links], empty: report.empty, unknownNodes: [...report.unknownNodes] }, null, 1));
