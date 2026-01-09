export const languages = {
  sk: 'Slovensky',
  en: 'English'
} as const;

export const defaultLang = 'sk' as const;

export type Lang = keyof typeof languages;

export const ui = {
  sk: {
    // Navigation
    'nav.home': 'Úvodná stránka',
    'nav.roomOverview': 'Prehľad miestností',
    'nav.roomEquipment': 'Zariadenie miestností',
    'nav.supportServices': 'Podporné služby',
    'nav.pricing': 'Cenník',
    'nav.photoGallery': 'Fotogaléria',
    'nav.contact': 'Kontakt',

    // Common UI
    'ui.languageToggle': 'Zmeniť jazyk',
    'ui.siteName': 'NIKAR Training Center',

    // Page titles
    'page.home.title': 'Úvodná stránka',
    'page.roomOverview.title': 'Prehľad miestností',
    'page.roomEquipment.title': 'Zariadenie miestností',
    'page.supportServices.title': 'Podporné služby',
    'page.pricing.title': 'Cenník',
    'page.photoGallery.title': 'Fotogaléria',
    'page.contact.title': 'Kontakt',

    // Page descriptions
    'page.home.description': 'Vitajte v NIKAR Training Center - profesionálne školiace priestory v Bratislave.',
    'page.roomOverview.description': 'Prehľad dostupných školiacich miestností.',
    'page.roomEquipment.description': 'Zariadenie a vybavenie našich školiacich miestností.',
    'page.supportServices.description': 'Podporné služby pre vaše školenia a konferencie.',
    'page.pricing.description': 'Cenník prenájmu školiacich miestností.',
    'page.photoGallery.description': 'Fotogaléria našich priestorov.',
    'page.contact.description': 'Kontaktujte nás pre rezerváciu alebo otázky.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.roomOverview': 'Room Overview',
    'nav.roomEquipment': 'Room Equipment',
    'nav.supportServices': 'Support Services',
    'nav.pricing': 'Pricing',
    'nav.photoGallery': 'Photo Gallery',
    'nav.contact': 'Contact',

    // Common UI
    'ui.languageToggle': 'Change language',
    'ui.siteName': 'NIKAR Training Center',

    // Page titles
    'page.home.title': 'Home',
    'page.roomOverview.title': 'Room Overview',
    'page.roomEquipment.title': 'Room Equipment',
    'page.supportServices.title': 'Support Services',
    'page.pricing.title': 'Pricing',
    'page.photoGallery.title': 'Photo Gallery',
    'page.contact.title': 'Contact',

    // Page descriptions
    'page.home.description': 'Welcome to NIKAR Training Center - professional training facilities in Bratislava.',
    'page.roomOverview.description': 'Overview of available training rooms.',
    'page.roomEquipment.description': 'Equipment and amenities of our training rooms.',
    'page.supportServices.description': 'Support services for your training and conferences.',
    'page.pricing.description': 'Pricing for training room rentals.',
    'page.photoGallery.description': 'Photo gallery of our facilities.',
    'page.contact.description': 'Contact us for reservations or inquiries.'
  }
} as const;

// Slug mappings between languages
export const slugs = {
  sk: {
    'index': '',
    'room-overview': 'prehlad-miestnosti',
    'room-equipment': 'zariadenie-miestnosti',
    'support-services': 'podporne-sluzby',
    'pricing': 'cennik',
    'photo-gallery': 'fotogaleria',
    'contact': 'kontakt'
  },
  en: {
    'index': '',
    'room-overview': 'room-overview',
    'room-equipment': 'room-equipment',
    'support-services': 'support-services',
    'pricing': 'pricing',
    'photo-gallery': 'photo-gallery',
    'contact': 'contact'
  }
} as const;

// Navigation structure
export const navigation = [
  { key: 'index', navKey: 'nav.home' },
  { key: 'room-overview', navKey: 'nav.roomOverview' },
  { key: 'room-equipment', navKey: 'nav.roomEquipment' },
  { key: 'support-services', navKey: 'nav.supportServices' },
  { key: 'pricing', navKey: 'nav.pricing' },
  { key: 'photo-gallery', navKey: 'nav.photoGallery' },
  { key: 'contact', navKey: 'nav.contact' }
] as const;
