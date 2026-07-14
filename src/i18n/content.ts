export const languages = ['pl', 'en', 'hi'] as const;
export type Lang = (typeof languages)[number];

/** External ordering system (full menu + prices live here). */
export const ORDER_URL = 'https://indian-curry-rownolegla.order.app.hd.digital/menus';
export const MAPS_URL = 'https://maps.app.goo.gl/4Qmb9Q32fz2zGqhP9';
export const PHONE = '+48500091313';
export const PHONE_DISPLAY = '+48 500 091 313';

type L = Record<Lang, string>;

export type Content = {
  locale: string;
  name: string;
  nav: { menu: string; story: string; visit: string };
  order: string;
  call: string;
  language: string;
  skip: string;
  // home
  hero: string;
  lead: string;
  now: string;
  selected: string;
  menuLead: string;
  menuLink: string;
  storyTitle: string;
  storyText: string;
  heatScale: string;
  visitTitle: string;
  visitLead: string;
  directions: string;
  addressLabel: string;
  hoursLabel: string;
  phoneLabel: string;
  hours: string;
  footer: string;
  rights: string;
  // menu page
  menuPageTitle: string;
  menuPageLead: string;
  menuPageNote: string;
  // visit page
  visitPageTitle: string;
  visitPageLead: string;
  mapLabel: string;
  // legend
  vegLabel: string;
  nonvegLabel: string;
  spicyLabel: string;
};

export const copy: Record<Lang, Content> = {
  pl: {
    locale: 'pl_PL',
    name: 'Indian Curry Włochy',
    nav: { menu: 'Menu', story: 'O nas', visit: 'Kontakt' },
    order: 'Zamów online',
    call: 'Zadzwoń',
    language: 'Wybierz język',
    skip: 'Przejdź do treści',
    hero: 'Indie na talerzu. Włochy po sąsiedzku.',
    lead: 'Aromatyczne curry, ogień z tandoora i dania przygotowane tak ostro, jak lubisz.',
    now: 'Otwarte codziennie · 11:00–22:00',
    selected: 'Polecamy',
    menuLead: 'Kremowe, pikantne, wegetariańskie — znajdź swój ulubiony smak.',
    menuLink: 'Zobacz pełne menu',
    storyTitle: 'Smak, który robi <em>różnicę.</em>',
    storyText:
      'Nie skracamy drogi do dobrego curry. Świeże przyprawy, prawdziwy tandoor i czas tworzą dania, do których chce się wracać.',
    heatScale: 'Ostrość dobierasz sam — od łagodnego do naprawdę ostrego.',
    visitTitle: 'Wpadnij po <em>dobry wieczór.</em>',
    visitLead:
      'Na miejscu, na wynos lub z dostawą. Znajdziesz nas przy Równoległej 2 w Warszawie.',
    directions: 'Otwórz trasę',
    addressLabel: 'Adres',
    hoursLabel: 'Godziny',
    phoneLabel: 'Telefon',
    hours: 'Codziennie · 11:00–22:00',
    footer: 'Kuchnia indyjska w Warszawie Włochy',
    rights: 'Wszystkie prawa zastrzeżone.',
    menuPageTitle: 'Co dziś <em>zamawiasz?</em>',
    menuPageLead:
      'Nasze najczęściej zamawiane dania z tandoora, garnka i patelni.',
    menuPageNote: 'Pełna karta z cenami jest w systemie zamówień.',
    visitPageTitle: 'Dobre curry jest <em>blisko.</em>',
    visitPageLead:
      'Przyjdź na lunch, kolację albo odbierz zamówienie po drodze do domu.',
    mapLabel: 'Jak dojechać',
    vegLabel: 'Wegetariańskie',
    nonvegLabel: 'Z mięsem',
    spicyLabel: 'Ostre',
  },
  en: {
    locale: 'en_GB',
    name: 'Indian Curry Włochy',
    nav: { menu: 'Menu', story: 'Our kitchen', visit: 'Visit' },
    order: 'Order online',
    call: 'Call us',
    language: 'Choose language',
    skip: 'Skip to content',
    hero: 'India on your plate. Włochy next door.',
    lead: 'Fragrant curry, tandoor fire and food made as mild or as fiery as you like.',
    now: 'Open daily · 11:00–22:00',
    selected: 'Our favourites',
    menuLead: 'Creamy, spicy, vegetarian — find the flavour that is yours.',
    menuLink: 'See the full menu',
    storyTitle: 'Flavour that makes <em>a difference.</em>',
    storyText:
      'There is no shortcut to great curry. Fresh spices, a real tandoor and time create dishes worth returning for.',
    heatScale: 'You set the heat — from gentle to genuinely fiery.',
    visitTitle: 'Come by for <em>a good evening.</em>',
    visitLead:
      'Dine in, takeaway or delivery. Find us on Równoległa 2 in Warsaw.',
    directions: 'Get directions',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    phoneLabel: 'Phone',
    hours: 'Every day · 11:00–22:00',
    footer: 'Indian cooking in Warsaw Włochy',
    rights: 'All rights reserved.',
    menuPageTitle: 'What are you <em>ordering today?</em>',
    menuPageLead:
      'The dishes people order most — from the tandoor, the pot and the pan.',
    menuPageNote: 'The full menu with prices is in our ordering system.',
    visitPageTitle: 'Great curry is <em>close by.</em>',
    visitPageLead:
      'Join us for lunch or dinner, or collect an order on your way home.',
    mapLabel: 'Find us',
    vegLabel: 'Vegetarian',
    nonvegLabel: 'Contains meat',
    spicyLabel: 'Spicy',
  },
  hi: {
    locale: 'hi_IN',
    name: 'इंडियन करी व्लोही',
    nav: { menu: 'मेन्यू', story: 'हमारी रसोई', visit: 'यहाँ आएँ' },
    order: 'ऑनलाइन ऑर्डर करें',
    call: 'फ़ोन करें',
    language: 'भाषा चुनें',
    skip: 'मुख्य सामग्री पर जाएँ',
    hero: 'थाली में भारत। व्लोही आपके पास।',
    lead: 'सुगंधित करी, तंदूर की आँच और आपकी पसंद के अनुसार तीखापन।',
    now: 'हर दिन खुला · 11:00–22:00',
    selected: 'हमारी पसंद',
    menuLead: 'क्रीमी, तीखा, शाकाहारी — अपना पसंदीदा स्वाद खोजें।',
    menuLink: 'पूरा मेन्यू देखें',
    storyTitle: 'ऐसा स्वाद जो <em>फर्क़ लाए।</em>',
    storyText:
      'अच्छी करी का कोई शॉर्टकट नहीं। ताज़े मसाले, असली तंदूर और समय मिलकर यादगार स्वाद बनाते हैं।',
    heatScale: 'तीखापन आप चुनें — हल्के से लेकर बहुत तीखे तक।',
    visitTitle: 'आइए एक <em>अच्छी शाम के लिए।</em>',
    visitLead:
      'रेस्तरां में, टेकअवे या डिलीवरी। हम वारसॉ में रूव्नोलेग्वा 2 पर हैं।',
    directions: 'रास्ता देखें',
    addressLabel: 'पता',
    hoursLabel: 'समय',
    phoneLabel: 'फ़ोन',
    hours: 'हर दिन · 11:00–22:00',
    footer: 'वारसॉ व्लोही में भारतीय खाना',
    rights: 'सर्वाधिकार सुरक्षित।',
    menuPageTitle: 'आज क्या <em>ऑर्डर करेंगे?</em>',
    menuPageLead:
      'सबसे ज़्यादा ऑर्डर होने वाले व्यंजन — तंदूर, कढ़ाई और पैन से।',
    menuPageNote: 'पूरा मेन्यू और क़ीमतें ऑर्डर सिस्टम में हैं।',
    visitPageTitle: 'अच्छी करी <em>पास ही है।</em>',
    visitPageLead:
      'लंच, डिनर या घर जाते समय टेकअवे के लिए आइए।',
    mapLabel: 'हम यहाँ हैं',
    vegLabel: 'शाकाहारी',
    nonvegLabel: 'मांसाहारी',
    spicyLabel: 'तीखा',
  },
};

/** Three signature dishes shown on the home page, with translated descriptions. */
export const favourites: { name: string; veg: boolean; desc: L }[] = [
  {
    name: 'Butter Chicken',
    veg: false,
    desc: {
      pl: 'Kurczak z tandoora w aksamitnym sosie pomidorowo-maślanym, ze śmietaną i nerkowcami.',
      en: 'Tandoor chicken in a silky tomato-and-butter sauce, finished with cream and cashews.',
      hi: 'तंदूरी चिकन, रेशमी टमाटर-मक्खन सॉस में, क्रीम और काजू के साथ।',
    },
  },
  {
    name: 'Paneer Butter Masala',
    veg: true,
    desc: {
      pl: 'Domowy paneer w łagodnym sosie masala z pomidorów, kozieradki i masła.',
      en: 'House paneer simmered in a mellow tomato masala with fenugreek and butter.',
      hi: 'घर का पनीर, मेथी और मक्खन वाली नरम टमाटर मसाला में।',
    },
  },
  {
    name: 'Chicken Biryani',
    veg: false,
    desc: {
      pl: 'Ryż basmati przekładany aromatycznym kurczakiem, szafranem i smażoną cebulą.',
      en: 'Basmati rice layered with spiced chicken, saffron and fried onions.',
      hi: 'बासमती चावल, मसालेदार चिकन, केसर और तली प्याज़ की परतों के साथ।',
    },
  },
];

export type Dish = { name: string; veg: boolean; spicy?: boolean };
export type MenuCategory = { id: string; title: L; items: Dish[] };

/**
 * On-page menu. Dish names are the internationally used names (kept untranslated,
 * as they appear on Polish menus too); category titles are localised.
 * No prices here on purpose — prices live in the ordering system.
 */
export const menu: MenuCategory[] = [
  {
    id: 'tandoor',
    title: { pl: 'Z tandoora', en: 'From the tandoor', hi: 'तंदूर से' },
    items: [
      { name: 'Chicken Tikka', veg: false },
      { name: 'Tandoori Chicken', veg: false },
      { name: 'Seekh Kebab', veg: false, spicy: true },
      { name: 'Paneer Tikka', veg: true },
    ],
  },
  {
    id: 'curries',
    title: { pl: 'Curry', en: 'Curries', hi: 'करी' },
    items: [
      { name: 'Butter Chicken', veg: false },
      { name: 'Chicken Tikka Masala', veg: false },
      { name: 'Lamb Rogan Josh', veg: false },
      { name: 'Lamb Vindaloo', veg: false, spicy: true },
      { name: 'Chicken Korma', veg: false },
      { name: 'Chicken Madras', veg: false, spicy: true },
    ],
  },
  {
    id: 'vegetarian',
    title: { pl: 'Wegetariańskie', en: 'Vegetarian', hi: 'शाकाहारी' },
    items: [
      { name: 'Palak Paneer', veg: true },
      { name: 'Paneer Butter Masala', veg: true },
      { name: 'Dal Makhani', veg: true },
      { name: 'Chana Masala', veg: true },
      { name: 'Aloo Gobi', veg: true },
      { name: 'Malai Kofta', veg: true },
    ],
  },
  {
    id: 'rice',
    title: { pl: 'Ryż i biryani', en: 'Rice & biryani', hi: 'चावल और बिरयानी' },
    items: [
      { name: 'Chicken Biryani', veg: false },
      { name: 'Vegetable Biryani', veg: true },
      { name: 'Jeera Rice', veg: true },
      { name: 'Basmati Rice', veg: true },
    ],
  },
  {
    id: 'breads',
    title: { pl: 'Chlebki', en: 'Breads', hi: 'रोटी और नान' },
    items: [
      { name: 'Butter Naan', veg: true },
      { name: 'Garlic Naan', veg: true },
      { name: 'Cheese Naan', veg: true },
      { name: 'Aloo Paratha', veg: true },
    ],
  },
  {
    id: 'sides',
    title: { pl: 'Przystawki i dodatki', en: 'Starters & sides', hi: 'स्टार्टर और साइड' },
    items: [
      { name: 'Vegetable Samosa', veg: true },
      { name: 'Onion Bhaji', veg: true },
      { name: 'Papadum', veg: true },
      { name: 'Raita', veg: true },
    ],
  },
  {
    id: 'sweets',
    title: { pl: 'Desery i napoje', en: 'Sweets & drinks', hi: 'मिठाई और पेय' },
    items: [
      { name: 'Gulab Jamun', veg: true },
      { name: 'Mango Lassi', veg: true },
      { name: 'Masala Chai', veg: true },
    ],
  },
];
