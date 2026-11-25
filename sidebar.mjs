// The site's navigation. A page that isn't listed here can't be reached from the menu, which
// `npm run check` reports; list every new page under src/content/docs/docs/ in a section.
const doc = (slug) => `docs/${slug}`;

export const sidebar = [
  { label: 'Start here', items: [{ label: 'Introduction', link: '/' }, doc('frequently-asked-questions')] },
  { label: 'Engagement', items: ['games-and-gamification', 'advanced-survey', 'guess-word-widget', 'soccer-predictions', 'unanswered-questions-widget', 'community-posts-in-real-time', 'quick-post-widget'].map(doc) },
  { label: 'Animation', items: ['confetti-widget', 'fireworks-widget', 'holiday-spirit-widget'].map(doc) },
  { label: 'Personalization', items: ['timezone-widget', 'stocks-in-real-time-widget', 'follow-people', 'follow-interest', 'follow-spaces-communities'].map(doc) },
  { label: 'Content & navigation', items: ['page-reader-documentation', 'organization-chart', 'table-of-contents-widget', 'estimated-reading-time', 'back-to-top-widget', 'last-modified-date-widget', 'browser-tab-notifications-widget', 'enhanced-search-filter-widget'].map(doc) },
  { label: 'Admin tools', items: ['content-copier-tool', 'space-homepage-layout-copier', 'content-page-layout-mover', 'metadata-mover-widget', 'metadata-edit-and-lookup', 'media-mover-widget', 'groups-lookup-and-management-widget'].map(doc) },
  { label: 'Integrations', items: ['looker', 'kaltura', 'bunchball-leaderboard-widget', 'bunchball-profile-widget', 'google-knowledge-graph-search-extension'].map(doc) },
  { label: 'Developer guides', items: ['customization-api', 'saml-idp', 'micro-apps-recap'].map(doc) },
  { label: 'Legal', items: [doc('terms-of-use')] },
];
