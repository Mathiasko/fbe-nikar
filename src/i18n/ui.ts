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
    'pricing.intro': 'Ponúkame flexibilné cenové možnosti pre prenájom školiacich priestorov a doplnkové služby.',

    // Room Overview page
    'roomOverview.intro': 'Ponúkame rôzne veľkosti miestností pre školenia, semináre a firemné stretnutia. Vyberte si priestor, ktorý najlepšie vyhovuje vašim potrebám.',
    'roomOverview.room': 'Miestnosť',
    'roomOverview.capacity': 'Kapacita',
    'roomOverview.area': 'Plocha',
    'roomOverview.features': 'Kľúčové vlastnosti',
    'roomOverview.largeConference': 'Veľká konferenčná miestnosť',
    'roomOverview.trainingA': 'Školiaca miestnosť A',
    'roomOverview.trainingB': 'Školiaca miestnosť B',
    'roomOverview.persons': 'osôb',
    'roomOverview.sqm': 'm²',
    'roomOverview.largeFeatures': 'Projektor, ozvučenie, klimatizácia',
    'roomOverview.trainingAFeatures': 'Projektor, whiteboard, WiFi',
    'roomOverview.trainingBFeatures': 'Interaktívna tabuľa, WiFi',
    'roomOverview.cta': 'Pre aktuálne ceny navštívte náš',
    'roomOverview.pricingLink': 'cenník',

    // Room Equipment page
    'roomEquipment.intro': 'Všetky naše miestnosti sú vybavené moderným zariadením pre profesionálne školenia a prezentácie.',
    'roomEquipment.presentation': 'Prezentačná technika',
    'roomEquipment.presentationItems': 'Projektor a plátno, Interaktívna tabuľa, Whiteboard a fixky, Flipchart',
    'roomEquipment.audio': 'Audio systém',
    'roomEquipment.audioItems': 'Mikrofóny (bezdrôtové/stolové), Reproduktory, Konferenčný systém',
    'roomEquipment.connectivity': 'Pripojenie',
    'roomEquipment.connectivityItems': 'Vysokorýchlostné WiFi, Sieťové pripojenie, Dostatočné elektrické zásuvky, HDMI/VGA vstupy',
    'roomEquipment.furniture': 'Nábytok',
    'roomEquipment.furnitureItems': 'Konferenčné stoly, Ergonomické stoličky, Mobilné stoly pre flexibilné usporiadanie',
    'roomEquipment.additionalNote': 'Ďalšie vybavenie na požiadanie',
    'roomEquipment.additionalText': 'Pre špeciálne požiadavky nás kontaktujte. Radi vám pripravíme miestnosť presne podľa vašich potrieb.',

    // Support Services page
    'supportServices.intro': 'Okrem prenájmu priestorov ponúkame komplexné podporné služby pre vaše školenia a podujatia.',
    'supportServices.catering': 'Catering',
    'supportServices.cateringDesc': 'Zabezpečíme kompletné stravovanie pre účastníkov vašich školení vrátane raňajok, obedov a večerí.',
    'supportServices.coffeeBreaks': 'Prestávky na kávu',
    'supportServices.coffeeBreaksDesc': 'Káva, čaj, minerálka a drobné občerstvenie počas celého dňa pre udržanie energie účastníkov.',
    'supportServices.lunchOptions': 'Obedové menu',
    'supportServices.lunchOptionsDesc': 'Výber z viacerých jedál vrátane vegetariánskych možností, podávané priamo v priestoroch centra.',
    'supportServices.technicalSupport': 'Technická podpora',
    'supportServices.technicalSupportDesc': 'Naši technici sú k dispozícii pre pomoc s prezentačnou technikou a riešenie prípadných problémov.',
    'supportServices.pricingNote': 'Kompletný cenník služieb nájdete na stránke',
    'supportServices.pricingLink': 'Cenník',

    // Contact page
    'contact.intro': 'Máte záujem o prenájom našich priestorov? Kontaktujte nás pre nezáväznú ponuku alebo rezerváciu.',
    'contact.addressLabel': 'Adresa',
    'contact.address': 'NIKAR Training Center, Vajnorská 100/B, 831 04 Bratislava',
    'contact.phoneLabel': 'Telefón',
    'contact.phone': '+421 2 1234 5678',
    'contact.emailLabel': 'E-mail',
    'contact.email': 'info@nikar.sk',
    'contact.hoursLabel': 'Otváracie hodiny',
    'contact.hours': 'Pondelok - Piatok: 8:00 - 17:00',
    'contact.locationNote': 'Nachádzame sa v blízkosti Vajnorskej ulice s výbornou dostupnosťou MHD a parkovacími možnosťami.'
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
    'pricing.intro': 'We offer flexible pricing options for training room rentals and additional services.',

    // Room Overview page
    'roomOverview.intro': 'We offer various room sizes for training sessions, seminars, and corporate meetings. Choose the space that best suits your needs.',
    'roomOverview.room': 'Room',
    'roomOverview.capacity': 'Capacity',
    'roomOverview.area': 'Area',
    'roomOverview.features': 'Key Features',
    'roomOverview.largeConference': 'Large Conference Room',
    'roomOverview.trainingA': 'Training Room A',
    'roomOverview.trainingB': 'Training Room B',
    'roomOverview.persons': 'persons',
    'roomOverview.sqm': 'sqm',
    'roomOverview.largeFeatures': 'Projector, sound system, air conditioning',
    'roomOverview.trainingAFeatures': 'Projector, whiteboard, WiFi',
    'roomOverview.trainingBFeatures': 'Interactive board, WiFi',
    'roomOverview.cta': 'For current prices, visit our',
    'roomOverview.pricingLink': 'pricing page',

    // Room Equipment page
    'roomEquipment.intro': 'All our rooms are equipped with modern equipment for professional training and presentations.',
    'roomEquipment.presentation': 'Presentation Technology',
    'roomEquipment.presentationItems': 'Projector and screen, Interactive whiteboard, Whiteboard and markers, Flipchart',
    'roomEquipment.audio': 'Audio System',
    'roomEquipment.audioItems': 'Microphones (wireless/desktop), Speakers, Conference system',
    'roomEquipment.connectivity': 'Connectivity',
    'roomEquipment.connectivityItems': 'High-speed WiFi, Network connection, Ample power outlets, HDMI/VGA inputs',
    'roomEquipment.furniture': 'Furniture',
    'roomEquipment.furnitureItems': 'Conference tables, Ergonomic chairs, Mobile tables for flexible arrangements',
    'roomEquipment.additionalNote': 'Additional Equipment on Request',
    'roomEquipment.additionalText': 'For special requirements, please contact us. We will be happy to prepare the room according to your specific needs.',

    // Support Services page
    'supportServices.intro': 'In addition to room rentals, we offer comprehensive support services for your training sessions and events.',
    'supportServices.catering': 'Catering',
    'supportServices.cateringDesc': 'We provide complete catering for training participants including breakfast, lunch, and dinner options.',
    'supportServices.coffeeBreaks': 'Coffee Breaks',
    'supportServices.coffeeBreaksDesc': 'Coffee, tea, water, and light refreshments throughout the day to keep participants energized.',
    'supportServices.lunchOptions': 'Lunch Options',
    'supportServices.lunchOptionsDesc': 'Selection of meals including vegetarian options, served directly at the center.',
    'supportServices.technicalSupport': 'Technical Support',
    'supportServices.technicalSupportDesc': 'Our technicians are available to assist with presentation equipment and troubleshoot any issues.',
    'supportServices.pricingNote': 'Complete service pricing available on our',
    'supportServices.pricingLink': 'Pricing page',

    // Contact page
    'contact.intro': 'Interested in renting our facilities? Contact us for a non-binding quote or reservation.',
    'contact.addressLabel': 'Address',
    'contact.address': 'NIKAR Training Center, Vajnorska 100/B, 831 04 Bratislava',
    'contact.phoneLabel': 'Phone',
    'contact.phone': '+421 2 1234 5678',
    'contact.emailLabel': 'Email',
    'contact.email': 'info@nikar.sk',
    'contact.hoursLabel': 'Opening Hours',
    'contact.hours': 'Monday - Friday: 8:00 AM - 5:00 PM',
    'contact.locationNote': 'We are located near Vajnorska Street with excellent public transport access and parking facilities.'
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
