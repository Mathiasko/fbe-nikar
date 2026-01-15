import type { ImageMetadata } from 'astro';

// Import sample gallery images (legacy)
import sample1 from '../assets/gallery/sample-1.jpg';
import sample2 from '../assets/gallery/sample-2.jpg';
import sample3 from '../assets/gallery/sample-3.jpg';
import sample4 from '../assets/gallery/sample-4.jpg';
import sample5 from '../assets/gallery/sample-5.jpg';
import sample6 from '../assets/gallery/sample-6.jpg';
import sample7 from '../assets/gallery/sample-7.jpg';
import sample8 from '../assets/gallery/sample-8.jpg';

// Dynamic imports for nikar albums
const nikarPriestoryImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/nikar-priestory/*.jpg',
  { eager: true }
);
const otvorenieImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/otvorenie/*.jpg',
  { eager: true }
);
const nagyInuImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/nagy-inu/*.jpg',
  { eager: true }
);
const varcholaImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/varchola/*.jpg',
  { eager: true }
);
const cabanovaImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/cabanova/*.jpg',
  { eager: true }
);
const sickovaCzingeImages = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/sickova-czinege/*.jpg',
  { eager: true }
);
const nagyIdentikit2Images = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/nagy-identikit2/*.jpg',
  { eager: true }
);

// Helper to extract images from glob result
function getImagesFromGlob(
  glob: Record<string, { default: ImageMetadata }>
): ImageMetadata[] {
  return Object.values(glob)
    .map((module) => module.default)
    .sort((a, b) => {
      // Sort by filename numerically
      const aNum = parseInt(a.src.match(/(\d+)\.jpg/)?.[1] || '0');
      const bNum = parseInt(b.src.match(/(\d+)\.jpg/)?.[1] || '0');
      return aNum - bNum;
    });
}

// Pre-process images
const nikarPriestory = getImagesFromGlob(nikarPriestoryImages);
const otvorenie = getImagesFromGlob(otvorenieImages);
const nagyInu = getImagesFromGlob(nagyInuImages);
const varchola = getImagesFromGlob(varcholaImages);
const cabanova = getImagesFromGlob(cabanovaImages);
const sickovaCzinge = getImagesFromGlob(sickovaCzingeImages);
const nagyIdentikit2 = getImagesFromGlob(nagyIdentikit2Images);

export interface Album {
  slug: string;
  title: { sk: string; en: string };
  subtitle?: { sk: string; en: string };
  description?: { sk: string; en: string };
  category: 'premises' | 'exhibition' | 'saleExhibition' | 'opening';
  categoryColor: string;
  coverImage: ImageMetadata;
  images: ImageMetadata[];
}

// Category colors matching existing GalleryCard usage
const CATEGORY_COLORS = {
  premises: '#6B4423',
  exhibition: '#7B8B4B',
  saleExhibition: '#6B7B00',
  opening: '#6B7B00',
};

export const albums: Album[] = [
  {
    slug: 'nikar-priestory',
    title: {
      sk: 'NIKAR Training Center',
      en: 'NIKAR Training Center',
    },
    subtitle: {
      sk: 'Priestory',
      en: 'Premises',
    },
    description: {
      sk: 'Naše priestory zahŕňajú konferenčné a školiace miestnosti vybavené modernou technikou.',
      en: 'Our premises include conference and training rooms equipped with modern technology.',
    },
    category: 'premises',
    categoryColor: CATEGORY_COLORS.premises,
    coverImage: nikarPriestory[0] || sample1,
    images: nikarPriestory.length > 0 ? nikarPriestory : [sample1, sample4, sample7],
  },
  {
    slug: 'otvorenie-nikar',
    title: {
      sk: 'Slávnostné otvorenie',
      en: 'Grand Opening',
    },
    subtitle: {
      sk: 'NIKAR Training Center',
      en: 'NIKAR Training Center',
    },
    description: {
      sk: 'Fotografie zo slávnostného otvorenia NIKAR Training Center.',
      en: 'Photos from the grand opening of NIKAR Training Center.',
    },
    category: 'opening',
    categoryColor: CATEGORY_COLORS.opening,
    coverImage: otvorenie[0] || sample5,
    images: otvorenie.length > 0 ? otvorenie : [sample5, sample8],
  },
  {
    slug: 'julo-nagy-inu',
    title: {
      sk: 'Julo Nagy',
      en: 'Julo Nagy',
    },
    subtitle: {
      sk: 'INU',
      en: 'INU',
    },
    description: {
      sk: 'Výstava diel Jula Nagya.',
      en: 'Exhibition of Julo Nagy\'s works.',
    },
    category: 'exhibition',
    categoryColor: CATEGORY_COLORS.exhibition,
    coverImage: nagyInu[0] || sample2,
    images: nagyInu.length > 0 ? nagyInu : [sample2, sample3, sample6],
  },
  {
    slug: 'peter-varchola',
    title: {
      sk: 'Peter Varchola',
      en: 'Peter Varchola',
    },
    subtitle: {
      sk: 'Výstava',
      en: 'Exhibition',
    },
    description: {
      sk: 'Výstava diel Petra Varcholu.',
      en: 'Exhibition of Peter Varchola\'s works.',
    },
    category: 'exhibition',
    categoryColor: CATEGORY_COLORS.exhibition,
    coverImage: varchola[0] || sample2,
    images: varchola.length > 0 ? varchola : [sample2, sample3],
  },
  {
    slug: 'alena-cabanova',
    title: {
      sk: 'Alena Cábañová',
      en: 'Alena Cábañová',
    },
    subtitle: {
      sk: 'Výstava',
      en: 'Exhibition',
    },
    description: {
      sk: 'Výstava diel Aleny Cábañovej.',
      en: 'Exhibition of Alena Cábañová\'s works.',
    },
    category: 'exhibition',
    categoryColor: CATEGORY_COLORS.exhibition,
    coverImage: cabanova[0] || sample2,
    images: cabanova.length > 0 ? cabanova : [sample2, sample3],
  },
  {
    slug: 'sickova-czinege',
    title: {
      sk: 'Šicková, Czinege',
      en: 'Šicková, Czinege',
    },
    subtitle: {
      sk: 'Výstava',
      en: 'Exhibition',
    },
    description: {
      sk: 'Spoločná výstava diel Šickovej a Czinegeho.',
      en: 'Joint exhibition of Šicková and Czinege\'s works.',
    },
    category: 'exhibition',
    categoryColor: CATEGORY_COLORS.exhibition,
    coverImage: sickovaCzinge[0] || sample2,
    images: sickovaCzinge.length > 0 ? sickovaCzinge : [sample2, sample3],
  },
  {
    slug: 'julo-nagy-identikit2',
    title: {
      sk: 'Julo Nagy',
      en: 'Julo Nagy',
    },
    subtitle: {
      sk: 'Identikit II.',
      en: 'Identikit II.',
    },
    description: {
      sk: 'Predajná výstava diel Jula Nagya zo série Identikit.',
      en: 'Sale exhibition of Julo Nagy\'s works from the Identikit series.',
    },
    category: 'saleExhibition',
    categoryColor: CATEGORY_COLORS.saleExhibition,
    coverImage: nagyIdentikit2[0] || sample2,
    images: nagyIdentikit2.length > 0 ? nagyIdentikit2 : [sample2, sample3, sample6],
  },
];

export function getAlbumBySlug(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}

export function getAllAlbums(): Album[] {
  return albums;
}
