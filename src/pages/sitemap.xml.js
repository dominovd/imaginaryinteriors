import { styles } from '../data/styles.js';
import { rooms } from '../data/rooms.js';
import { combos } from '../data/combos.js';

const SITE = 'https://imaginaryinteriors.com';

// Static, indexable pages (excludes /saved — per-browser, no index value).
const staticPaths = ['', 'styles', 'rooms', 'colors', 'trends', 'quiz', 'ideas', 'about', 'contact', 'privacy', 'terms'];

export function GET() {
  // Only include indexable pages — thin/unfilled pages carry noindex and are excluded.
  const paths = [
    ...staticPaths.map((p) => (p ? `/${p}/` : '/')),
    ...styles.filter((s) => s.indexed).map((s) => `/styles/${s.slug}/`),
    ...rooms.filter((r) => r.indexed).map((r) => `/rooms/${r.slug}/`),
    ...combos.filter((c) => c.indexed).map((c) => `${c.href}/`),
  ];
  const urls = [...new Set(paths)].map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
