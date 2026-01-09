/**
 * Room data for NIKAR Training Center
 *
 * Contains all 4 training rooms with features and specifications.
 */

import type { Lang } from '../i18n/ui';

export interface RoomFeatures {
  projectionScreen: boolean;
  dataProjector: boolean;
  smartBoard: boolean;
  flipchart: boolean;
  internet: boolean;
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
      projectionScreen: false,
      dataProjector: true,
      smartBoard: true,
      flipchart: true,
      internet: true,
      extraTrainingSpace: true,
      terraceAccess: true,
      barrierFree: true,
      airConditioning: true,
      audioSystem: true
    }
  },
  {
    id: 'green-102',
    name: { sk: 'Zelena 102', en: 'Green 102' },
    floor: 1,
    color: '#228B22',
    size: 42,
    capacity: '12',
    features: {
      projectionScreen: false,
      dataProjector: true,
      smartBoard: true,
      flipchart: true,
      internet: true,
      extraTrainingSpace: true,
      terraceAccess: false,
      barrierFree: true,
      airConditioning: true,
      audioSystem: true
    }
  },
  {
    id: 'yellow-201',
    name: { sk: 'Zlta 201', en: 'Yellow 201' },
    floor: 2,
    color: '#DAA520',
    size: 56,
    capacity: '12-20',
    features: {
      projectionScreen: false,
      dataProjector: true,
      smartBoard: true,
      flipchart: true,
      internet: true,
      extraTrainingSpace: true,
      terraceAccess: true,
      barrierFree: false,
      airConditioning: true,
      audioSystem: true
    }
  },
  {
    id: 'blue-202',
    name: { sk: 'Modra 202', en: 'Blue 202' },
    floor: 2,
    color: '#4169E1',
    size: 42,
    capacity: '12',
    features: {
      projectionScreen: true,
      dataProjector: false,
      smartBoard: false,
      flipchart: true,
      internet: true,
      extraTrainingSpace: true,
      terraceAccess: false,
      barrierFree: false,
      airConditioning: true,
      audioSystem: true
    }
  }
];

export const featureKeys: (keyof RoomFeatures)[] = [
  'projectionScreen',
  'dataProjector',
  'smartBoard',
  'flipchart',
  'internet',
  'extraTrainingSpace',
  'terraceAccess',
  'barrierFree',
  'airConditioning',
  'audioSystem'
];

export function getRoomName(room: Room, lang: Lang): string {
  return room.name[lang];
}
