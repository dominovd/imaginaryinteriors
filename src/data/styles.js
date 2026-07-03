// Single source of truth for style hubs.
// Drives homepage cards AND generates /styles/[slug] pages.
// Priorities/competitor status come from the content plan (content-plan.xlsx).

export const styles = [
  {
    slug: 'modern-rustic',
    name: 'Modern Rustic',
    title: 'Modern Rustic Interior Design',
    tagline: 'A grounded mix of warm wood, stone texture, clean silhouettes and relaxed rooms that still feel polished.',
    priority: 'P1',
    tone: 'walnut',
    mood: 'Warm + grounded',
    materials: 'Wood, stone, linen',
    palette: 'Oat, charcoal, sage',
    bestRooms: 'Living room, office, cabin',
    features: [
      { title: 'Natural texture', desc: 'Raw and organic materials bring depth and character to every space.' },
      { title: 'Clean lines', desc: 'Simple silhouettes, tailored shapes and unfussy layouts keep rooms timeless.' },
      { title: 'Soft contrast', desc: 'Layer warm neutrals, deep accents and natural elements for a calm, collected look.' },
    ],
    roomIdeas: [
      { label: 'Living room', tone: 'walnut' },
      { label: 'Small office', tone: 'dark' },
      { label: 'Cabin bedroom', tone: 'walnut' },
      { label: 'Open kitchen', tone: 'graphite' },
      { label: 'Reading corner', tone: 'sand' },
      { label: 'Entryway', tone: 'stone' },
    ],
    swatches: [
      { name: 'Warm white', hex: '#efe9dc' },
      { name: 'Oak', hex: '#b98a54' },
      { name: 'Stone gray', hex: '#b8b4ad' },
      { name: 'Charcoal', hex: '#3a3a37' },
      { name: 'Sage', hex: '#7f8a6a' },
    ],
    materialTiles: [
      { label: 'Reclaimed wood', tone: 'walnut' },
      { label: 'Linen upholstery', tone: 'cream' },
      { label: 'Black metal', tone: 'dark' },
      { label: 'Natural stone', tone: 'stone' },
    ],
    shop: ['Low wood table', 'Linen sofa', 'Black pendant', 'Stone planter', 'Wool rug', 'Wall art'],
    related: ['organic-modern', 'traditional', 'sustainable', 'feng-shui'],
  },

  // Additional hubs — the "★ Хватать" clusters where decor8 is empty/weak.
  // Fill in full content over time; these render valid pages already.
  { slug: 'japandi', name: 'Japandi', title: 'Japandi Interior Design', tagline: 'Japanese warmth meets Scandinavian calm — natural wood, low furniture and a quiet, uncluttered palette.', priority: 'P2', tone: 'sage', mood: 'Calm + minimal', materials: 'Oak, paper, linen', palette: 'Warm grey, black, oat', bestRooms: 'Living room, bedroom', features: [], roomIdeas: [], swatches: [], materialTiles: [], shop: [], related: ['minimalist', 'scandinavian', 'modern-rustic', 'sustainable'] },
  { slug: 'traditional', name: 'Traditional', title: 'Traditional Interior Design', tagline: 'Timeless rooms with layered furniture, rich materials and classic proportions.', priority: 'P1', tone: 'cream', mood: 'Classic + warm', materials: 'Wood, velvet, brass', palette: 'Cream, wine, gold', bestRooms: 'Living room, dining', features: [], roomIdeas: [], swatches: [], materialTiles: [], shop: [], related: ['transitional', 'modern-rustic', 'contemporary', 'feng-shui'] },
  { slug: 'contemporary', name: 'Contemporary', title: 'Contemporary Interior Design', tagline: 'Clean lines, open layouts and modern materials for a current, uncluttered feel.', priority: 'P1', tone: 'warmgrey', mood: 'Clean + current', materials: 'Glass, steel, wood', palette: 'White, grey, black', bestRooms: 'Living room, office', features: [], roomIdeas: [], swatches: [], materialTiles: [], shop: [], related: ['modern-rustic', 'minimalist', 'traditional', 'sustainable'] },
  { slug: 'sustainable', name: 'Sustainable', title: 'Sustainable Interior Design', tagline: 'Eco-friendly materials and earth-conscious design that lasts.', priority: 'P1', tone: 'sage', mood: 'Natural + honest', materials: 'Reclaimed wood, jute, cork', palette: 'Sage, oat, clay', bestRooms: 'Whole home', features: [], roomIdeas: [], swatches: [], materialTiles: [], shop: [], related: ['japandi', 'modern-rustic', 'organic-modern', 'contemporary'] },
  { slug: 'organic-modern', name: 'Organic Modern', title: 'Organic Modern Interior Design', tagline: 'Modern shapes softened by natural texture, curves and a warm neutral palette.', priority: 'P2', tone: 'sand', mood: 'Soft + modern', materials: 'Boucle, oak, plaster', palette: 'Cream, taupe, terracotta', bestRooms: 'Living room, bedroom', features: [], roomIdeas: [], swatches: [], materialTiles: [], shop: [], related: ['modern-rustic', 'japandi', 'contemporary', 'sustainable'] },
  { slug: 'feng-shui', name: 'Feng Shui', title: 'Feng Shui Interior Design', tagline: 'Layouts and palettes that balance flow, light and calm across a room.', priority: 'P1', tone: 'stone', mood: 'Balanced + calm', materials: 'Wood, water, plants', palette: 'Green, earth, white', bestRooms: 'Bedroom, living room', features: [], roomIdeas: [], swatches: [], materialTiles: [], shop: [], related: ['japandi', 'minimalist', 'sustainable', 'traditional'] },
  { slug: 'minimalist', name: 'Minimalist', title: 'Minimalist Interior Design', tagline: 'Less, but better — restrained palettes, hidden storage and breathing room.', priority: 'P3', tone: 'warmgrey', mood: 'Quiet + spare', materials: 'Concrete, oak, linen', palette: 'White, grey, black', bestRooms: 'Whole home', features: [], roomIdeas: [], swatches: [], materialTiles: [], shop: [], related: ['japandi', 'contemporary', 'scandinavian', 'sustainable'] },
  { slug: 'scandinavian', name: 'Scandinavian', title: 'Scandinavian Interior Design', tagline: 'Light woods, soft textiles and bright, functional simplicity.', priority: 'P3', tone: 'cream', mood: 'Bright + cozy', materials: 'Pine, wool, cotton', palette: 'White, grey, blush', bestRooms: 'Living room, bedroom', features: [], roomIdeas: [], swatches: [], materialTiles: [], shop: [], related: ['japandi', 'minimalist', 'modern-rustic', 'contemporary'] },
];

export const getStyle = (slug) => styles.find((s) => s.slug === slug);
