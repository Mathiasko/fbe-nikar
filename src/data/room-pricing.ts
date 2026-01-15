/**
 * Hardcoded room pricing data for NIKAR Training Center
 *
 * Room info is static, prices are fetched from Google Sheets
 */

import type { Lang } from '../i18n/ui';

export interface RoomPricingInfo {
  id: string;
  name: { sk: string; en: string };
  floor: { sk: string; en: string };
  size: string;
  capacity: { sk: string; en: string };
  link?: string; // Optional link to room detail page
}

export const roomPricingData: RoomPricingInfo[] = [
  {
    id: 'brown',
    name: { sk: 'Hnedá 101', en: 'Brown 101' },
    floor: { sk: '1.n.p.', en: '1st floor' },
    size: '56m²',
    capacity: { sk: '12-20 miest', en: '12-20 seats' },
    link: 'brown-101'
  },
  {
    id: 'green',
    name: { sk: 'Zelená 102', en: 'Green 102' },
    floor: { sk: '1.n.p.', en: '1st floor' },
    size: '42m²',
    capacity: { sk: '12 miest', en: '12 seats' },
    link: 'green-102'
  },
  {
    id: 'yellow',
    name: { sk: 'Žltá 201', en: 'Yellow 201' },
    floor: { sk: '2.n.p.', en: '2nd floor' },
    size: '56m²',
    capacity: { sk: '12-20 miest', en: '12-20 seats' },
    link: 'yellow-201'
  },
  {
    id: 'blue-in-person',
    name: { sk: 'Modrá prezenčné školenie 202', en: 'Blue in-person training 202' },
    floor: { sk: '2.n.p.', en: '2nd floor' },
    size: '42m²',
    capacity: { sk: '12 miest', en: '12 seats' },
    link: 'blue-202'
  },
  {
    id: 'blue-hybrid',
    name: { sk: 'Modrá hybridné školenie 202', en: 'Blue hybrid training 202' },
    floor: { sk: '2.n.p.', en: '2nd floor' },
    size: '42m²',
    capacity: { sk: '12 miest', en: '12 seats' },
    link: 'blue-202'
  },
  {
    id: 'coaching',
    name: { sk: 'Coaching Room', en: 'Coaching Room' },
    floor: { sk: '2.n.p.', en: '2nd floor' },
    size: '10m²',
    capacity: { sk: '', en: '' }
  },
  {
    id: 'conference',
    name: { sk: 'Zasadačka', en: 'Meeting room' },
    floor: { sk: '3.n.p.', en: '3rd floor' },
    size: '18m²',
    capacity: { sk: '', en: '' }
  }
];

/**
 * Get room info formatted for the pricing table
 */
export function getRoomPricingRows(lang: Lang, prices: Record<string, string>) {
  const roomSlug = lang === 'sk' ? 'miestnost' : 'room';

  return roomPricingData.map(room => {
    const rawPrice = prices[room.id] || '';
    // Add EUR if price exists and doesn't already contain it
    const price = rawPrice && !rawPrice.toLowerCase().includes('eur')
      ? `${rawPrice} EUR`
      : rawPrice;

    return {
      name: room.name[lang],
      link: room.link ? `/${lang}/${roomSlug}/${room.link}/` : undefined,
      floorSize: `${room.floor[lang]}, ${room.size}`,
      capacity: room.capacity[lang],
      price
    };
  });
}
