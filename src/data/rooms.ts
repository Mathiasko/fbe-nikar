/**
 * Room data for NIKAR Training Center
 *
 * Contains all 4 training rooms with features and specifications.
 */

import type { Lang } from '../i18n/ui';

export interface RoomFeatures {
  smartTV: boolean;
  tvScreen: boolean;
  flipchart: boolean;
  wifi: boolean;
  extraTrainingSpace: boolean;
  terraceAccess: boolean;
  barrierFree: boolean;
  airConditioning: boolean;
  audioSystem: boolean;
}

export interface Room {
  id: string;
  name: { sk: string; en: string };
  floor: number;
  color: string;
  size: number;
  capacity: string;
  features: RoomFeatures;
  images: string[];
}

export const rooms: Room[] = [
  {
    id: 'brown-101',
    name: { sk: 'Hneda 101', en: 'Brown 101' },
    floor: 1,
    color: '#8B4513',
    size: 56,
    capacity: '12-20',
    features: {
      smartTV: false,
      tvScreen: true,
      flipchart: true,
      wifi: true,
      extraTrainingSpace: true,
      terraceAccess: false,
      barrierFree: true,
      airConditioning: true,
      audioSystem: true
    },
    images: [
      '/images/nikar/album1/priestory_21.webp',
      '/images/nikar/album1/priestory_17.webp',
      '/images/nikar/album1/priestory_18.webp',
      '/images/floorplan1.webp'
    ]
  },
  {
    id: 'green-102',
    name: { sk: 'Zelena 102', en: 'Green 102' },
    floor: 1,
    color: '#228B22',
    size: 42,
    capacity: '12',
    features: {
      smartTV: false,
      tvScreen: true,
      flipchart: true,
      wifi: true,
      extraTrainingSpace: true,
      terraceAccess: false,
      barrierFree: true,
      airConditioning: true,
      audioSystem: true
    },
    images: [
      '/images/nikar/album1/priestory_29.webp',
      '/images/nikar/album1/priestory_26.webp',
      '/images/nikar/album1/priestory_30.webp',
      '/images/floorplan1.webp'
    ]
  },
  {
    id: 'yellow-201',
    name: { sk: 'Zlta 201', en: 'Yellow 201' },
    floor: 2,
    color: '#DAA520',
    size: 56,
    capacity: '12-20',
    features: {
      smartTV: false,
      tvScreen: true,
      flipchart: true,
      wifi: true,
      extraTrainingSpace: true,
      terraceAccess: true,
      barrierFree: false,
      airConditioning: true,
      audioSystem: true
    },
    images: [
      '/images/nikar/album1/priestory_34.webp',
      '/images/nikar/album1/priestory_32.webp',
      '/images/nikar/album1/priestory_31.webp',
      '/images/floorplan2.webp'
    ]
  },
  {
    id: 'blue-202',
    name: { sk: 'Modra 202', en: 'Blue 202' },
    floor: 2,
    color: '#4169E1',
    size: 42,
    capacity: '12',
    features: {
      smartTV: true,
      tvScreen: true,
      flipchart: true,
      wifi: true,
      extraTrainingSpace: true,
      terraceAccess: false,
      barrierFree: false,
      airConditioning: true,
      audioSystem: true
    },
    images: [
      '/images/modra1.webp',
      '/images/modra2.webp',
      '/images/modra3.webp',
      '/images/floorplan2.webp'

    ]
  }
];

export const featureKeys: (keyof RoomFeatures)[] = [
  'smartTV',
  'tvScreen',
  'flipchart',
  'wifi',
  'extraTrainingSpace',
  'terraceAccess',
  'barrierFree',
  'airConditioning',
  'audioSystem'
];

export function getRoomName(room: Room, lang: Lang): string {
  return room.name[lang];
}
