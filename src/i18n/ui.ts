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
    'page.contact.description': 'Kontaktujte nás pre rezerváciu alebo otázky.',

    // Gallery categories
    'gallery.category.premises': 'PRIESTORY',
    'gallery.category.saleExhibition': 'PREDAJNÁ VÝSTAVA',
    'gallery.category.exhibition': 'VÝSTAVA',
    'gallery.category.opening': 'OTVORENIE',

    // Home page
    'home.tagline': 'Nikar Training Center vám ponúka prenájom profesionálnych školiacich priestorov.',
    'home.slogan': 'For Training Excellence',
    'home.featuredGallery': 'Z našej galérie',

    // Pricing page
    'pricing.roomRentals': 'Prenájom miestností',
    'pricing.catering': 'Catering a občerstvenie',
    'pricing.room': 'Miestnosť',
    'pricing.halfDay': 'Poldeň',
    'pricing.fullDay': 'Celý deň',
    'pricing.notes': 'Poznámky',
    'pricing.item': 'Položka',
    'pricing.price': 'Cena',
    'pricing.unit': 'Jednotka',
    'pricing.intro': 'Ponúkame flexibilné cenové možnosti pre prenájom školiacich priestorov a doplnkové služby.'
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
    'page.contact.description': 'Contact us for reservations or inquiries.',

    // Gallery categories
    'gallery.category.premises': 'PREMISES',
    'gallery.category.saleExhibition': 'SALE EXHIBITION',
    'gallery.category.exhibition': 'EXHIBITION',
    'gallery.category.opening': 'OPENING',

    // Home page
    'home.tagline': 'Nikar Training Center offers professional training room rentals.',
    'home.slogan': 'For Training Excellence',
    'home.featuredGallery': 'From Our Gallery',

    // Pricing page
    'pricing.roomRentals': 'Room Rentals',
    'pricing.catering': 'Catering & Refreshments',
    'pricing.room': 'Room',
    'pricing.halfDay': 'Half Day',
    'pricing.fullDay': 'Full Day',
    'pricing.notes': 'Notes',
    'pricing.item': 'Item',
    'pricing.price': 'Price',
    'pricing.unit': 'Unit',
    'pricing.intro': 'We offer flexible pricing options for training room rentals and additional services.'
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
