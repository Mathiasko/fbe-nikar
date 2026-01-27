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
    'nav.supportServices': 'Obed a občerstvenie',
    'nav.pricing': 'Cenník',
    'nav.photoGallery': 'Fotogaléria',
    'nav.contact': 'Kontakt',
    'nav.parking': 'Parkovanie',

    // Common UI
    'ui.languageToggle': 'Zmeniť jazyk',
    'ui.siteName': 'NIKAR Training Center',

    // Page titles
    'page.home.title': 'Úvodná stránka',
    'page.roomOverview.title': 'Prehľad miestností',
    'page.roomEquipment.title': 'Zariadenie miestností',
    'page.supportServices.title': 'Obed a občerstvenie',
    'page.pricing.title': 'Cenník',
    'page.photoGallery.title': 'Fotogaléria',
    'page.contact.title': 'Kontakt',
    'page.parking.title': 'Parkovanie (autá, motorky a bicykle)',

    // Page descriptions
    'page.home.description': 'Vitajte v NIKAR Training Center - profesionálne školiace priestory v Bratislave.',
    'page.roomOverview.description': 'Prehľad dostupných školiacich miestností.',
    'page.roomEquipment.description': 'Zariadenie a vybavenie našich školiacich miestností.',
    'page.supportServices.description': 'Obed a občerstvenie pre vaše školenia a konferencie.',
    'page.pricing.description': 'Cenník prenájmu školiacich miestností.',
    'page.photoGallery.description': 'Fotogaléria našich priestorov.',
    'page.contact.description': 'Kontaktujte nás pre rezerváciu alebo otázky.',
    'page.parking.description': 'Informácie o parkovaní pri NIKAR Training Center.',

    // Gallery categories
    'gallery.category.premises': 'PRIESTORY',
    'gallery.category.saleExhibition': 'PREDAJNÁ VÝSTAVA',
    'gallery.category.exhibition': 'VÝSTAVA',
    'gallery.category.opening': 'OTVORENIE',

    // Album pages
    'album.backToGallery': 'Späť na galériu',
    'album.photosCount': 'fotografií',

    // Home page
    'home.intro': 'Nikar Training Center vám ponúka prenájom profesionálnych školiacich priestorov.',
    'home.introDetail': 'Našim partnerom umožňujeme sústrediť sa na obsah školení tým, že sa nemusia starať o priestory a zázemie.',
    'home.slogan.for': 'For',
    'home.slogan.training': 'Training',
    'home.slogan.excellence': 'Excellence',
    'home.featuredGallery': 'Z našej galérie',
    'home.cta.rooms': 'Prehľad miestností',
    'home.cta.pricing': 'Cenník',
    'home.partners': 'Partneri',

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
    'roomOverview.equipmentTable': 'Porovnanie vybavenia miestností',
    'roomOverview.comparison': 'Porovnanie miestností',
    'roomOverview.cta': 'Pre aktuálne ceny navštívte náš',
    'roomOverview.pricingLink': 'cenník',
    'roomOverview.floorplans': 'Pôdorysy',
    'roomOverview.floorplan.floor1': '1. poschodie',
    'roomOverview.floorplan.floor2': '2. poschodie',
    'roomOverview.floorplan.cafeteria': 'Kaviareň',

    // Room names
    'room.brown101': 'Hneda 101',
    'room.green102': 'Zelena 102',
    'room.yellow201': 'Zlta 201',
    'room.blue202': 'Modra 202',

    // Room details
    'room.details': 'Podrobnosti o miestnostiach',
    'room.floor': 'Poschodie',
    'room.backToOverview': 'Spat na prehlad miestnosti',
    'room.gallery': 'Galeria',
    'room.features': 'Vybavenie',
    'room.otherRooms': 'Dalsie miestnosti',

    // Room feature labels
    'room.feature.label': 'Vlastnost',
    'room.feature.size': 'Velkost',
    'room.feature.capacity': 'Kapacita',
    'room.feature.smartTV': 'Smart TV',
    'room.feature.tvScreen': 'TV obrazovka',
    'room.feature.secondaryScreen': 'Sekundárna obrazovka',
    'room.feature.flipchart': 'Flipchart',
    'room.feature.wifi': 'WiFi',
    'room.feature.extraTrainingSpace': 'Moznost dalsieho skoliaceho priestoru',
    'room.feature.terraceAccess': 'Priamy vstup na terasu',
    'room.feature.barrierFree': 'Bezbarierovy pristup',
    'room.feature.airConditioning': 'Klimatizacia',
    'room.feature.audioSystem': 'Audio system',

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
    'supportServices.refreshments': 'Občerstvenie',
    'supportServices.refreshments.water': 'Minerálna voda 2x0,7l',
    'supportServices.refreshments.hotDrinks': 'Teplé nápoje 2x',
    'supportServices.refreshments.coffee': 'Káva',
    'supportServices.refreshments.cappuccino': 'Cappuccino',
    'supportServices.refreshments.coffeeChocolate': 'Káva s čokoládou',
    'supportServices.refreshments.chocolate': 'Čokoláda',
    'supportServices.refreshments.chocomilk': 'Čokomlieko',
    'supportServices.refreshments.tea': 'Čaj',
    'supportServices.refreshments.biscuits': 'Sušienky',
    'supportServices.refreshments.fruits': 'Ovocie',
    'supportServices.dining': 'Jedáleň',
    'supportServices.dining.soup': 'Polievka',
    'supportServices.dining.mainMeals': 'Hlavné jedlá',
    'supportServices.dining.meatVeggie': 'mäsová a vegetariánska možnosť',
    'supportServices.dining.salad': 'Šalát ako príloha',
    'supportServices.dining.dessert': 'Dezert',
    'supportServices.dining.softDrinks': 'Nealkoholické nápoje',
    'supportServices.dining.glutenFree': 'Bezlepkové obedy a občerstvenie zabezpečíme na požiadanie.',
    'supportServices.copying': 'Kopírovanie, tlač a viazanie',
    'supportServices.pricingNote': 'Kompletný cenník služieb nájdete na stránke',
    'supportServices.pricingLink': 'Cenník',

    // Contact page
    'contact.intro': 'Máte záujem o prenájom našich priestorov? Kontaktujte nás pre nezáväznú ponuku alebo rezerváciu.',
    'contact.addressLabel': 'Adresa',
    'contact.address': 'NIKAR s.r.o. \nLiptovská 10, \n821 09 Bratislava',
    'contact.phoneLabel': 'Telefón',
    'contact.phone': '+421 254 642 652',
    'contact.emailLabel': 'E-mail',
    'contact.email': 'info@nikar.sk',
    'contact.hoursLabel': 'Otváracie hodiny',
    'contact.hours': 'Pondelok - Piatok: 8:00 - 17:00',
    'contact.locationNote': 'Nachádzame sa v blízkosti Vajnorskej ulice s výbornou dostupnosťou MHD a parkovacími možnosťami.',
    'contact.mapTitle': 'Kde nás nájdete',

    // Parking page
    'parking.intro': 'Pre návštevníkov NIKAR Training Center je k dispozícii pohodlné parkovanie.',
    'parking.options.title': 'Možnosti parkovania',
    'parking.options.onsite': 'Parkovanie v areáli budovy',
    'parking.options.street': 'Parkovanie na ulici v okolí',
    'parking.instructions.title': 'Pokyny',
    'parking.instructions.text': 'Pri príchode sa prosím ohláste na recepcii. Parkovacie miesta sú k dispozícii na základe dostupnosti.',
    'parking.note': 'Pre viac informácií o parkovaní nás kontaktujte vopred.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.roomOverview': 'Room Overview',
    'nav.roomEquipment': 'Room Equipment',
    'nav.supportServices': 'Lunch & Refreshments',
    'nav.pricing': 'Pricing',
    'nav.photoGallery': 'Photo Gallery',
    'nav.contact': 'Contact',
    'nav.parking': 'Parking',

    // Common UI
    'ui.languageToggle': 'Change language',
    'ui.siteName': 'NIKAR Training Center',

    // Page titles
    'page.home.title': 'Home',
    'page.roomOverview.title': 'Room Overview',
    'page.roomEquipment.title': 'Room Equipment',
    'page.supportServices.title': 'Lunch & Refreshments',
    'page.pricing.title': 'Pricing',
    'page.photoGallery.title': 'Photo Gallery',
    'page.contact.title': 'Contact',
    'page.parking.title': 'Parking (cars, motorcycles and bicycles)',

    // Page descriptions
    'page.home.description': 'Welcome to NIKAR Training Center - professional training facilities in Bratislava.',
    'page.roomOverview.description': 'Overview of available training rooms.',
    'page.roomEquipment.description': 'Equipment and amenities of our training rooms.',
    'page.supportServices.description': 'Lunch and refreshments for your training and conferences.',
    'page.pricing.description': 'Pricing for training room rentals.',
    'page.photoGallery.description': 'Photo gallery of our facilities.',
    'page.contact.description': 'Contact us for reservations or inquiries.',
    'page.parking.description': 'Parking information for NIKAR Training Center.',

    // Gallery categories
    'gallery.category.premises': 'PREMISES',
    'gallery.category.saleExhibition': 'SALE EXHIBITION',
    'gallery.category.exhibition': 'EXHIBITION',
    'gallery.category.opening': 'OPENING',

    // Album pages
    'album.backToGallery': 'Back to Gallery',
    'album.photosCount': 'photos',

    // Home page
    'home.intro': 'Nikar Training Center offers professional training facilities for rent.',
    'home.introDetail': 'Our business partners can enjoy high-end training facilities which thus enable them to fully concentrate on the course content.',
    'home.slogan.for': 'For',
    'home.slogan.training': 'Training',
    'home.slogan.excellence': 'Excellence',
    'home.featuredGallery': 'From Our Gallery',
    'home.cta.rooms': 'Room Overview',
    'home.cta.pricing': 'Pricing',
    'home.partners': 'Partners',

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
    'roomOverview.equipmentTable': 'Room Equipment Comparison',
    'roomOverview.comparison': 'Room Comparison',
    'roomOverview.cta': 'For current prices, visit our',
    'roomOverview.pricingLink': 'pricing page',
    'roomOverview.floorplans': 'Floor Plans',
    'roomOverview.floorplan.floor1': '1st Floor',
    'roomOverview.floorplan.floor2': '2nd Floor',
    'roomOverview.floorplan.cafeteria': 'Cafeteria',

    // Room names
    'room.brown101': 'Brown 101',
    'room.green102': 'Green 102',
    'room.yellow201': 'Yellow 201',
    'room.blue202': 'Blue 202',

    // Room details
    'room.details': 'Room Details',
    'room.floor': 'Floor',
    'room.backToOverview': 'Back to Room Overview',
    'room.gallery': 'Gallery',
    'room.features': 'Features',
    'room.otherRooms': 'Other rooms',

    // Room feature labels
    'room.feature.label': 'Feature',
    'room.feature.size': 'Size',
    'room.feature.capacity': 'Capacity',
    'room.feature.smartTV': 'Smart TV',
    'room.feature.tvScreen': 'TV Screen',
    'room.feature.secondaryScreen': 'Secondary Screen',
    'room.feature.flipchart': 'Flipchart',
    'room.feature.wifi': 'WiFi',
    'room.feature.extraTrainingSpace': 'Option for extra training space',
    'room.feature.terraceAccess': 'Direct terrace access',
    'room.feature.barrierFree': 'Barrier-free access',
    'room.feature.airConditioning': 'Air Conditioning',
    'room.feature.audioSystem': 'Audio System',

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
    'supportServices.refreshments': 'Refreshments',
    'supportServices.refreshments.water': 'Mineral water 2x0.7l',
    'supportServices.refreshments.hotDrinks': 'Hot drinks 2x',
    'supportServices.refreshments.coffee': 'Coffee',
    'supportServices.refreshments.cappuccino': 'Cappuccino',
    'supportServices.refreshments.coffeeChocolate': 'Coffee with chocolate',
    'supportServices.refreshments.chocolate': 'Chocolate',
    'supportServices.refreshments.chocomilk': 'Chocomilk',
    'supportServices.refreshments.tea': 'Tea',
    'supportServices.refreshments.biscuits': 'Biscuits',
    'supportServices.refreshments.fruits': 'Fruits',
    'supportServices.dining': 'Dining',
    'supportServices.dining.soup': 'Soup',
    'supportServices.dining.mainMeals': 'Main meals',
    'supportServices.dining.meatVeggie': 'meat and veggie option',
    'supportServices.dining.salad': 'Side dish salad',
    'supportServices.dining.dessert': 'Dessert',
    'supportServices.dining.softDrinks': 'Soft drinks',
    'supportServices.dining.glutenFree': 'Gluten-free diet lunch and refreshments we arrange upon request.',
    'supportServices.copying': 'Copying, printing and binding',
    'supportServices.pricingNote': 'Complete service pricing available on our',
    'supportServices.pricingLink': 'Pricing page',

    // Contact page
    'contact.intro': 'Interested in renting our facilities? Contact us for a non-binding quote or reservation.',
    'contact.addressLabel': 'Address',
    'contact.address': 'NIKAR s.r.o. \nLiptovská 10, \n821 09 Bratislava',
    'contact.phoneLabel': 'Phone',
    'contact.phone': '+421 254 642 652',
    'contact.emailLabel': 'Email',
    'contact.email': 'info@nikar.sk',
    'contact.hoursLabel': 'Opening Hours',
    'contact.hours': 'Monday - Friday: 8:00 AM - 5:00 PM',
    'contact.locationNote': 'We are located near Vajnorska Street with excellent public transport access and parking facilities.',
    'contact.mapTitle': 'Find us',

    // Parking page
    'parking.intro': 'Convenient parking is available for visitors to NIKAR Training Center.',
    'parking.options.title': 'Parking Options',
    'parking.options.onsite': 'On-site parking in the building area',
    'parking.options.street': 'Street parking in the surrounding area',
    'parking.instructions.title': 'Instructions',
    'parking.instructions.text': 'Please check in at reception upon arrival. Parking spaces are available on a first-come, first-served basis.',
    'parking.note': 'For more information about parking, please contact us in advance.'
  }
} as const;

// Slug mappings between languages
export const slugs = {
  sk: {
    'index': '',
    'room-overview': 'prehlad-miestnosti',
    'room-equipment': 'zariadenie-miestnosti',
    'support-services': 'obed-a-obcerstvenie',
    'pricing': 'cennik',
    'photo-gallery': 'fotogaleria',
    'contact': 'kontakt',
    'parking': 'parkovanie'
  },
  en: {
    'index': '',
    'room-overview': 'room-overview',
    'room-equipment': 'room-equipment',
    'support-services': 'lunch-and-refreshments',
    'pricing': 'pricing',
    'photo-gallery': 'photo-gallery',
    'contact': 'contact',
    'parking': 'parking'
  }
} as const;

// Navigation structure
export const navigation = [
  { key: 'index', navKey: 'nav.home' },
  { key: 'room-overview', navKey: 'nav.roomOverview' },
  { key: 'room-equipment', navKey: 'nav.roomEquipment' },
  { key: 'support-services', navKey: 'nav.supportServices' },
  { key: 'pricing', navKey: 'nav.pricing' },
  { key: 'parking', navKey: 'nav.parking' },
  { key: 'photo-gallery', navKey: 'nav.photoGallery' },
  { key: 'contact', navKey: 'nav.contact' }
] as const;
