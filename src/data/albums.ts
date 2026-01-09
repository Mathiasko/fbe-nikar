import type { ImageMetadata } from 'astro';

// Import gallery images
import sample1 from '../assets/gallery/sample-1.jpg';
import sample2 from '../assets/gallery/sample-2.jpg';
import sample3 from '../assets/gallery/sample-3.jpg';
import sample4 from '../assets/gallery/sample-4.jpg';
import sample5 from '../assets/gallery/sample-5.jpg';
import sample6 from '../assets/gallery/sample-6.jpg';
import sample7 from '../assets/gallery/sample-7.jpg';
import sample8 from '../assets/gallery/sample-8.jpg';

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
    coverImage: sample1,
    images: [sample1, sample4, sample7],
  },
  {
    slug: 'julo-nagy-identikit',
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
    coverImage: sample2,
    images: [sample2, sample3, sample6],
  },
  {
    slug: 'vernisaz-jar-2024',
    title: {
      sk: 'Vernisáž',
      en: 'Opening',
    },
    subtitle: {
      sk: 'Jar 2024',
      en: 'Spring 2024',
    },
    description: {
      sk: 'Fotografie z vernisáže a sprievodných podujatí.',
      en: 'Photos from the opening and accompanying events.',
    },
    category: 'opening',
    categoryColor: CATEGORY_COLORS.opening,
    coverImage: sample5,
    images: [sample5, sample8],
  },
];

export function getAlbumBySlug(slug: string): Album | undefined {
  return albums.find((album) => album.slug === slug);
}

export function getAllAlbums(): Album[] {
  return albums;
}
