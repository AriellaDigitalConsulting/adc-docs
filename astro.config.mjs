import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeBase from './rehype-base.mjs';

// Set while the site lives on the GitHub Pages project URL. Leave both empty once docs.adc.dev points here.
const site = process.env.SITE_URL || 'https://docs.adc.dev';
const base = process.env.SITE_BASE || '';

const doc = (slug) => `docs/${slug}`;
const home = `${base}/`;
const retired = ['welcome', 'home', 'hello', 'bonjour', 'all-widgets', 'search-lumapps-documentation', 'subnavigation', 'personalized-widgets', 'user-engagement-widgets', 'animation-widgets', 'uiux-enhancement-widgets', 'admin-utility-widgets', 'third-party-integrations'];

export default defineConfig({
  site,
  base: base || undefined,
  redirects: Object.fromEntries(retired.map((slug) => [`/docs/${slug}`, home])),
  markdown: { rehypePlugins: [[rehypeBase, { base }]] },
  integrations: [
    starlight({
      title: 'ADC Docs',
      description: 'Documentation for Ariella Digital Consulting widgets and integrations for LumApps.',
      favicon: '/favicon.svg',
      lastUpdated: true,
      customCss: ['./src/styles/theme.css'],
      // The header search uses the docs search service instead of Pagefind
      pagefind: false,
      components: { Footer: './src/components/Footer.astro', Search: './src/components/Search.astro' },
      head: [
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap' } },
        ...(base ? [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex' } }] : []),
      ],
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/ariella-digital-consulting/' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@adclibrary8418' },
      ],
      sidebar: [
        { label: 'Start here', items: [{ label: 'Introduction', link: '/' }, doc('frequently-asked-questions')] },
        { label: 'Engagement', items: ['advanced-survey', 'guess-word-widget', 'soccer-predictions', 'unanswered-questions-widget', 'community-posts-in-real-time', 'quick-post-widget'].map(doc) },
        { label: 'Animation', items: ['confetti-widget', 'fireworks-widget', 'holiday-spirit-widget'].map(doc) },
        { label: 'Personalization', items: ['timezone-widget', 'stocks-in-real-time-widget', 'follow-people', 'follow-interest', 'follow-spaces-communities'].map(doc) },
        { label: 'Content & navigation', items: ['page-reader-documentation', 'organization-chart', 'table-of-contents-widget', 'estimated-reading-time', 'back-to-top-widget', 'last-modified-date-widget', 'browser-tab-notifications-widget', 'enhanced-search-filter-widget'].map(doc) },
        { label: 'Admin tools', items: ['content-copier-tool', 'space-homepage-layout-copier', 'content-page-layout-mover', 'metadata-mover-widget', 'metadata-edit-and-lookup', 'media-mover-widget', 'groups-lookup-and-management-widget'].map(doc) },
        { label: 'Integrations', items: ['looker', 'kaltura', 'bunchball-leaderboard-widget', 'bunchball-profile-widget', 'google-knowledge-graph-search-extension'].map(doc) },
        { label: 'Developer guides', items: ['customization-api', 'saml-idp', 'micro-apps-recap'].map(doc) },
        { label: 'Legal', items: [doc('terms-of-use')] },
      ],
    }),
  ],
});
