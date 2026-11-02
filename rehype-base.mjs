// Markdown links and images are root-relative, so they need the base path when deployed under one
export default function rehypeBase({ base }) {
  const prefix = (value) => (typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') ? base + value : value);
  const visit = (node) => {
    if (node.type === 'element') {
      if (node.properties.href) node.properties.href = prefix(node.properties.href);
      if (node.properties.src) node.properties.src = prefix(node.properties.src);
    }
    (node.children || []).forEach(visit);
  };
  return (tree) => visit(tree);
}
