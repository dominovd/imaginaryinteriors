// Style × Room combination pages (e.g. /styles/modern-rustic/living-room).
// Demand-driven: we pair every style with the CORE rooms only (not a full matrix),
// to avoid thin low-value pages. Extend `comboRooms` as real demand justifies it.

import { styles } from './styles.js';
import { rooms } from './rooms.js';

export const comboRooms = ['living-room', 'home-office', 'bedroom', 'kitchen', 'dining-room', 'entryway-hallway'];

export const combos = styles.flatMap((s) =>
  comboRooms.map((roomSlug) => {
    const r = rooms.find((x) => x.slug === roomSlug);
    return {
      styleSlug: s.slug,
      styleName: s.name,
      roomSlug: r.slug,
      roomName: r.name,
      tone: s.tone,
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
