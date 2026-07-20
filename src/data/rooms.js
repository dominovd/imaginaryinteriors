// Single source of truth for room gallery pages.
// Drives /rooms (index) AND generates /rooms/[slug] pages.
// Add `img` to any gallery/card item to swap the CSS placeholder for a real photo.

export const rooms = [
  {
    slug: 'living-room',
    indexed: true,
    name: 'Living Room',
    title: 'Living Room Interior Design',
    tagline: 'Browse living room ideas by style, color palette, room size and layout.',
    tone: 'walnut',
    image: '/images/living-room.webp',
    chips: [
      { label: 'Modern rustic', href: '/styles/modern-rustic' },
      { label: 'Gray palette', href: '/colors' },
      { label: 'Small spaces', href: '/rooms/studio-apartment' },
      { label: 'Traditional', href: '/styles/traditional' },
      { label: 'Feng Shui', href: '/styles/feng-shui' },
      { label: 'Contemporary', href: '/styles/contemporary' },
      { label: 'Sustainable', href: '/styles/sustainable' },
    ],
    gallery: [
      { caption: 'Modern rustic living room', tone: 'walnut', img: '/images/modern-rustic-living-room.webp' },
      { caption: 'Gray paint living room', tone: 'graphite', img: '/images/gray-paint-interior.webp' },
      { caption: 'Traditional living room', tone: 'cream', img: '/images/traditional-living-room.webp' },
      { caption: 'Small-space living room', tone: 'sand', img: '/images/small-spaces.webp' },
      { caption: 'Contemporary living room', tone: 'stone', img: '/images/contemporary-living-room.webp' },
      { caption: 'Sustainable living room', tone: 'sage', img: '/images/sustainable-living-room.webp' },
      { caption: 'Feng shui living room', tone: 'warmgrey', img: '/images/feng-shui-living-room.webp' },
      { caption: 'Cozy cabin living room', tone: 'dark', img: '/images/modern-rustic-living-room.webp' },
    ],
    filters: {
      tabs: ['Style', 'Palette', 'Room size', 'Layout', 'Lighting', 'Storage'],
      chips: ['Modern rustic', 'Warm gray', 'Open plan'],
    },
    styleIdeas: [
      { name: 'Modern Rustic', href: '/styles/modern-rustic', tone: 'walnut', img: '/images/modern-rustic-living-room.webp' },
      { name: 'Gray Paint Interior', href: '/styles/contemporary', tone: 'graphite', img: '/images/gray-paint-interior.webp' },
      { name: 'Traditional', href: '/styles/traditional', tone: 'cream', img: '/images/traditional-living-room.webp' },
      { name: 'Small Space', href: '/rooms/studio-apartment', tone: 'sand', img: '/images/small-spaces.webp' },
      { name: 'Contemporary', href: '/styles/contemporary', tone: 'stone', img: '/images/contemporary-living-room.webp' },
      { name: 'Sustainable', href: '/styles/sustainable', tone: 'sage', img: '/images/sustainable-living-room.webp' },
    ],
    tips: [
      { title: "Start with the room's light", desc: 'Natural light shapes color, contrast and the mood of your living room.' },
      { title: 'Match scale to seating', desc: 'Right-sized furniture makes the room feel balanced and easy to move through.' },
      { title: 'Choose a palette before decor', desc: 'Pick 3–5 colors first to keep your room cohesive and intentional.' },
      { title: 'Keep a clear focal point', desc: 'A fireplace, window or artwork anchors the room and guides furniture placement.' },
    ],
    layouts: [
      { name: 'Open plan', plan: 'openplan', desc: 'Define zones with rugs and furniture placement to create flow and function.' },
      { name: 'Apartment', plan: 'apartment', desc: 'Use multi-functional furniture and keep circulation clear to maximize space.' },
      { name: 'Fireplace wall', plan: 'fireplace', desc: 'Arrange seating to face the fireplace and create a cozy conversation area.' },
      { name: 'TV wall', plan: 'tv', desc: 'Balance the TV with art, shelving and layers to keep the room inviting.' },
    ],
    palettes: [
      { name: 'Warm Gray', desc: 'Soft grays, warm neutrals and natural textures for a calm, timeless look.', sw: ['#d8cfc0', '#b7ad9e', '#7c7266', '#a6a097'] },
      { name: 'Oak and Linen', desc: 'Light wood, linen and creamy neutrals that feel airy and grounded.', sw: ['#e0b986', '#c99a63', '#e9e0cd', '#8a6238'] },
      { name: 'Sage and Charcoal', desc: 'Earthy greens, warm neutrals and charcoal for a balanced, modern feel.', sw: ['#8a9a6f', '#5f6b4c', '#3a3a37', '#2b2b28'] },
    ],
    faqs: [
      { q: 'What is the best layout for a small living room?', a: 'TODO — add your answer here.' },
      { q: 'How do I choose a living room color palette?', a: 'TODO — add your answer here.' },
      { q: 'What style works with gray walls?', a: 'TODO — add your answer here.' },
      { q: 'How can I make a living room feel warmer?', a: 'TODO — add your answer here.' },
    ],
    related: ['bedroom', 'home-office', 'studio-apartment', 'kitchen'],
  },

  // Lighter rooms — valid pages now, flesh out over time (empty sections auto-hide).
  { slug: 'bedroom', name: 'Bedroom', title: 'Bedroom Interior Design', tagline: 'Calm, restful bedroom ideas by style, palette and layout.', tone: 'stone', image: '/images/bedroom.webp', chips: [], gallery: [{ caption: 'Bedroom', tone: 'stone', img: '/images/bedroom.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['living-room', 'home-office', 'studio-apartment', 'kitchen'] },
  { slug: 'home-office', name: 'Home Office', title: 'Home Office Interior Design', tagline: 'Focused, tidy workspace ideas for any square footage.', tone: 'dark', image: '/images/home-office.webp', chips: [], gallery: [{ caption: 'Home office', tone: 'dark', img: '/images/home-office.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['living-room', 'bedroom', 'studio-apartment', 'kitchen'] },
  { slug: 'studio-apartment', name: 'Studio Apartment', title: 'Studio Apartment Interior Design', tagline: 'Smart zoning and storage ideas for compact living.', tone: 'warmgrey', image: '/images/studio-apartment.webp', chips: [], gallery: [{ caption: 'Studio apartment', tone: 'warmgrey', img: '/images/studio-apartment.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['living-room', 'bedroom', 'home-office', 'kitchen'] },
  { slug: 'kitchen', name: 'Kitchen', title: 'Kitchen Interior Design', tagline: 'Cabinets, islands and materials that work and last.', tone: 'graphite', image: '/images/kitchen.webp', chips: [], gallery: [{ caption: 'Kitchen', tone: 'graphite', img: '/images/kitchen.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['living-room', 'bedroom', 'home-office', 'studio-apartment'] },
  { slug: 'bathroom', name: 'Bathroom', title: 'Bathroom Interior Design', tagline: 'Tile, vanities and small-space bathroom ideas.', tone: 'cream', image: '/images/bathroom.webp', chips: [], gallery: [{ caption: 'Bathroom', tone: 'cream', img: '/images/bathroom.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['living-room', 'bedroom', 'kitchen', 'home-office'] },
  { slug: 'dining-room', name: 'Dining Room', title: 'Dining Room Interior Design', tagline: 'Tables, seating and lighting for gatherings.', tone: 'sand', image: '/images/dining-room.webp', chips: [], gallery: [{ caption: 'Dining room', tone: 'sand', img: '/images/dining-room.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['living-room', 'kitchen', 'bedroom', 'home-office'] },
  { slug: 'entryway-hallway', name: 'Entryway & Hallway', title: 'Entryway & Hallway Interior Design', tagline: 'First impressions, storage and narrow-space fixes.', tone: 'terra', image: '/images/entryway-hallway.webp', chips: [], gallery: [{ caption: 'Entryway', tone: 'terra', img: '/images/entryway-hallway.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['living-room', 'bedroom', 'kitchen', 'home-office'] },
  { slug: 'nursery-kids', name: 'Nursery & Kids', title: 'Nursery & Kids Room Interior Design', tagline: 'Playful, practical rooms that grow with them.', tone: 'sage', image: '/images/nursery-kids.webp', chips: [], gallery: [{ caption: 'Nursery', tone: 'sage', img: '/images/nursery-kids.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['living-room', 'bedroom', 'home-office', 'kitchen'] },
  { slug: 'small-spaces', name: 'Small Spaces', title: 'Small Space Interior Design', tagline: 'Smart layouts, storage and scale for compact rooms and apartments.', tone: 'sand', image: '/images/small-spaces-v2.webp', chips: [], gallery: [{ caption: 'Small multipurpose living room', tone: 'sand', img: '/images/small-spaces-v2.webp' }, { caption: 'Small bedroom', tone: 'stone', img: '/images/bedroom.webp' }, { caption: 'Studio corner', tone: 'warmgrey', img: '/images/studio-apartment.webp' }], filters: null, styleIdeas: [], tips: [], layouts: [], palettes: [], faqs: [], related: ['studio-apartment', 'living-room', 'bedroom', 'home-office'] },
];

export const getRoom = (slug) => rooms.find((r) => r.slug === slug);
