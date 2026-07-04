// Style × Room combination pages (e.g. /styles/modern-rustic/living-room).
// Demand-driven: we pair every style with the CORE rooms only (not a full matrix),
// to avoid thin low-value pages. Extend `comboRooms` as real demand justifies it.

import { styles } from './styles.js';
import { rooms } from './rooms.js';

export const comboRooms = ['living-room', 'home-office', 'bedroom', 'kitchen', 'dining-room', 'entryway-hallway'];

const comboImages = {
  'modern-rustic/living-room': '/images/modern-rustic-living-room.webp',
  'modern-rustic/home-office': '/images/modern-rustic-small-office.webp',
  'modern-rustic/bedroom': '/images/modern-rustic-cabin-bedroom.webp',
  'modern-rustic/kitchen': '/images/modern-rustic-open-kitchen.webp',
  'modern-rustic/dining-room': '/images/hero-dining.webp',
  'modern-rustic/entryway-hallway': '/images/modern-rustic-entryway.webp',

  'japandi/living-room': '/images/japandi-living-room.webp',
  'japandi/home-office': '/images/japandi-home-office.webp',
  'japandi/bedroom': '/images/japandi-bedroom.webp',
  'japandi/kitchen': '/images/japandi-kitchen.webp',
  'japandi/dining-room': '/images/japandi-dining-room.webp',
  'japandi/entryway-hallway': '/images/japandi-entryway.webp',

  'traditional/living-room': '/images/traditional-living-room.webp',
  'traditional/home-office': '/images/traditional-home-office.webp',
  'traditional/bedroom': '/images/traditional-bedroom.webp',
  'traditional/kitchen': '/images/traditional-kitchen.webp',
  'traditional/dining-room': '/images/traditional-dining-room.webp',
  'traditional/entryway-hallway': '/images/traditional-entryway.webp',

  'contemporary/living-room': '/images/contemporary-living-room.webp',
  'contemporary/home-office': '/images/contemporary-home-office.webp',
  'contemporary/bedroom': '/images/contemporary-bedroom.webp',
  'contemporary/kitchen': '/images/contemporary-kitchen.webp',
  'contemporary/dining-room': '/images/contemporary-dining-room.webp',
  'contemporary/entryway-hallway': '/images/contemporary-entryway.webp',

  'sustainable/living-room': '/images/sustainable-living-room.webp',
  'sustainable/home-office': '/images/sustainable-home-office.webp',
  'sustainable/bedroom': '/images/sustainable-bedroom.webp',
  'sustainable/kitchen': '/images/sustainable-kitchen.webp',
  'sustainable/dining-room': '/images/sustainable-dining-room.webp',
  'sustainable/entryway-hallway': '/images/sustainable-entryway.webp',

  'organic-modern/living-room': '/images/organic-modern-living-room.webp',
  'organic-modern/home-office': '/images/organic-modern-home-office.webp',
  'organic-modern/bedroom': '/images/organic-modern-bedroom.webp',
  'organic-modern/kitchen': '/images/organic-modern-kitchen.webp',
  'organic-modern/dining-room': '/images/organic-modern-dining-room.webp',
  'organic-modern/entryway-hallway': '/images/organic-modern-entryway.webp',

  'feng-shui/living-room': '/images/feng-shui-living-room.webp',
  'feng-shui/home-office': '/images/feng-shui-home-office.webp',
  'feng-shui/bedroom': '/images/feng-shui-bedroom.webp',
  'feng-shui/kitchen': '/images/feng-shui-kitchen.webp',
  'feng-shui/dining-room': '/images/feng-shui-dining-room.webp',
  'feng-shui/entryway-hallway': '/images/feng-shui-entryway.webp',

  'minimalist/living-room': '/images/minimalist-living-room.webp',
  'minimalist/home-office': '/images/minimalist-home-office.webp',
  'minimalist/bedroom': '/images/minimalist-bedroom.webp',
  'minimalist/kitchen': '/images/minimalist-kitchen.webp',
  'minimalist/dining-room': '/images/minimalist-dining-room.webp',
  'minimalist/entryway-hallway': '/images/minimalist-entryway.webp',

  'scandinavian/living-room': '/images/scandinavian-living-room.webp',
  'scandinavian/home-office': '/images/scandinavian-home-office.webp',
  'scandinavian/bedroom': '/images/scandinavian-bedroom.webp',
  'scandinavian/kitchen': '/images/scandinavian-kitchen.webp',
  'scandinavian/dining-room': '/images/scandinavian-dining-room.webp',
  'scandinavian/entryway-hallway': '/images/scandinavian-entryway.webp',

  '70s-interior-design/living-room': '/images/70s-living-room.webp',
  '70s-interior-design/home-office': '/images/70s-home-office.webp',
  '70s-interior-design/bedroom': '/images/70s-bedroom.webp',
  '70s-interior-design/kitchen': '/images/70s-kitchen.webp',
  '70s-interior-design/dining-room': '/images/70s-dining-room.webp',
  '70s-interior-design/entryway-hallway': '/images/70s-entryway.webp',
};

export const combos = styles.flatMap((s) =>
  comboRooms.map((roomSlug) => {
    const r = rooms.find((x) => x.slug === roomSlug);
    const key = `${s.slug}/${roomSlug}`;
    return {
      styleSlug: s.slug,
      styleName: s.name,
      roomSlug: r.slug,
      roomName: r.name,
      tone: s.tone,
      image: comboImages[key] || s.image || '',
      href: `/styles/${s.slug}/${r.slug}`,
      title: `${s.name} ${r.name}`,
      indexed: false, // flip to true per combo as it gets real content

      metaTitle: `${s.name} ${r.name} Ideas — Imaginary Interiors`,
      metaDescription: `${s.name.toLowerCase()} ${r.name.toLowerCase()} ideas — layouts, colors, materials and shop-the-look inspiration for a ${s.name.toLowerCase()} ${r.name.toLowerCase()}.`,
    };
  })
);

export const getCombo = (styleSlug, roomSlug) =>
  combos.find((c) => c.styleSlug === styleSlug && c.roomSlug === roomSlug);

// Distinct room list used by the /rooms filter (label + slug).
export const comboRoomList = comboRooms.map((slug) => {
  const r = rooms.find((x) => x.slug === slug);
  return { slug, name: r.name, tone: r.tone };
});
