import { ui, defaultLang, slugs, type Lang } from './ui';

/**
 * Get the current language from a URL
 */
export function getCurrentLang(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'sk' || lang === 'en') {
    return lang;
  }
  return defaultLang;
}

/**
 * Get a translation function for the given language
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Get the slug for a page in a given language
 */
export function getSlug(pageKey: keyof typeof slugs['sk'], lang: Lang): string {
  return slugs[lang][pageKey];
}

/**
 * Get the path for a page in a given language
 */
export function getLocalizedPath(pageKey: keyof typeof slugs['sk'], lang: Lang): string {
  const slug = getSlug(pageKey, lang);
  if (slug === '') {
    return `/${lang}/`;
  }
  return `/${lang}/${slug}/`;
}

/**
 * Get the equivalent path in another language
 * Converts from one language's path to another
 */
export function getAlternateLanguagePath(currentPath: string, targetLang: Lang): string {
  const currentLang = currentPath.startsWith('/sk/') ? 'sk' : 'en';

  // Extract the slug from the current path
  const pathParts = currentPath.split('/').filter(Boolean);
  const currentSlug = pathParts[1] || '';

  // Handle room detail pages: /en/room/[id] <-> /sk/miestnost/[id]
  if (currentSlug === 'room' || currentSlug === 'miestnost') {
    const roomId = pathParts[2] || '';
    const targetSlug = targetLang === 'sk' ? 'miestnost' : 'room';
    return `/${targetLang}/${targetSlug}/${roomId}/`;
  }

  // Find the page key from the current slug
  let pageKey: keyof typeof slugs['sk'] = 'index';

  for (const [key, slug] of Object.entries(slugs[currentLang])) {
    if (slug === currentSlug) {
      pageKey = key as keyof typeof slugs['sk'];
      break;
    }
  }

  return getLocalizedPath(pageKey, targetLang);
}

/**
 * Get navigation items for a given language
 */
export function getNavItems(lang: Lang) {
  const t = useTranslations(lang);

  return [
    { href: getLocalizedPath('index', lang), label: t('nav.home') },
    { href: getLocalizedPath('room-overview', lang), label: t('nav.roomOverview') },
    { href: getLocalizedPath('room-equipment', lang), label: t('nav.roomEquipment') },
    { href: getLocalizedPath('support-services', lang), label: t('nav.supportServices') },
    { href: getLocalizedPath('pricing', lang), label: t('nav.pricing') },
    { href: getLocalizedPath('photo-gallery', lang), label: t('nav.photoGallery') },
    { href: getLocalizedPath('contact', lang), label: t('nav.contact') }
  ];
}
