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
    menuPageNote: 'To nasze najczęściej zamawiane dania. Pełną kartę i zamówienie znajdziesz w systemie online.',
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
    menuPageNote: 'These are our most-ordered dishes. The complete menu and ordering are in the online system.',
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
    menuPageNote: 'ये हमारे सबसे लोकप्रिय व्यंजन हैं। पूरा मेन्यू और ऑर्डर ऑनलाइन सिस्टम में है।',
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

/**
 * On-page menu — the actual dishes and prices (PLN) from the restaurant's own
 * ordering system, curated to the most popular items. Dish names are the
 * internationally used names (kept untranslated, as on the Polish menu);
 * category titles and notes are localised. `veg` omitted = protein is a choice
 * (see the category note); the full card lives in the ordering system.
 */
export type Dish = { name: string; veg?: boolean; spicy?: boolean; price?: number };
export type MenuCategory = { id: string; title: L; note?: L; items: Dish[] };

export const menu: MenuCategory[] = [
  {
    id: 'lunch',
    title: { pl: 'Lunch', en: 'Lunch', hi: 'लंच' },
    note: {
      pl: 'W dni powszednie 11:00–16:00.',
      en: 'Weekdays 11:00–16:00.',
      hi: 'सोम–शुक्र 11:00–16:00।',
    },
    items: [
      { name: 'Methi Chicken', veg: false, price: 26 },
      { name: 'Chicken Tikka Butter Masala', veg: false, price: 26 },
      { name: 'Dal Tadka', veg: true, price: 26 },
    ],
  },
  {
    id: 'starters',
    title: { pl: 'Przystawki', en: 'Starters', hi: 'स्टार्टर' },
    items: [
      { name: 'Vegetable Samosa', veg: true, price: 18 },
      { name: 'Onion Bhaji', veg: true, price: 20 },
      { name: 'Mix Vegetable Pakora', veg: true, price: 23 },
      { name: 'Paneer Tikka', veg: true, price: 28 },
      { name: 'Chicken Tikka', veg: false, price: 28 },
      { name: 'Tandoori Chicken', veg: false, price: 30 },
      { name: 'Chicken 65', veg: false, spicy: true, price: 34 },
      { name: 'Chicken Lollypop', veg: false, price: 30 },
      { name: 'Prawn Tikka', veg: false, price: 36 },
      { name: 'Fish Tikka (Salmon)', veg: false, price: 50 },
    ],
  },
  {
    id: 'soups',
    title: { pl: 'Zupy', en: 'Soups', hi: 'सूप' },
    items: [
      { name: 'Dal Shorba', veg: true, price: 18 },
      { name: 'Tomato Soup', veg: true, price: 18 },
      { name: 'Chicken Soup', veg: false, price: 20 },
      { name: 'Mutton Soup', veg: false, price: 23 },
    ],
  },
  {
    id: 'curries',
    title: { pl: 'Curry', en: 'Curries', hi: 'करी' },
    note: {
      pl: 'Wybierz sos i dodatek: warzywa 30 · paneer 33 · kurczak 36 · ryba 37 · jagnięcina 44 · krewetki 44 zł.',
      en: 'Pick a sauce and a filling: veg 30 · paneer 33 · chicken 36 · fish 37 · lamb 44 · prawns 44 zł.',
      hi: 'सॉस और फ़िलिंग चुनें: सब्ज़ी 30 · पनीर 33 · चिकन 36 · मछली 37 · मटन 44 · झींगा 44 zł.',
    },
    items: [
      { name: 'Butter Masala' },
      { name: 'Tikka Masala' },
      { name: 'Korma' },
      { name: 'Jalfrezi', spicy: true },
      { name: 'Kadai' },
      { name: 'Madras', spicy: true },
      { name: 'Vindaloo', spicy: true },
      { name: 'Curry (coconut)' },
      { name: 'Methi' },
      { name: 'Spinach (Palak)' },
      { name: 'Mango' },
      { name: 'Chilli', spicy: true },
    ],
  },
  {
    id: 'vegetarian',
    title: { pl: 'Dania wegetariańskie', en: 'Vegetarian', hi: 'शाकाहारी' },
    items: [
      { name: 'Dal Makhani', veg: true, price: 30 },
      { name: 'Chana Masala', veg: true, price: 30 },
      { name: 'Aloo Gobi Matar', veg: true, price: 30 },
      { name: 'Vegetable Kofta', veg: true, price: 31 },
      { name: 'Matar Paneer', veg: true, price: 33 },
      { name: 'Matar Mushroom', veg: true, price: 33 },
    ],
  },
  {
    id: 'biryani',
    title: { pl: 'Biryani', en: 'Biryani', hi: 'बिरयानी' },
    note: {
      pl: 'Hyderabadi, aromatyczny ryż basmati.',
      en: 'Hyderabadi style, fragrant basmati rice.',
      hi: 'हैदराबादी अंदाज़, ख़ुशबूदार बासमती।',
    },
    items: [
      { name: 'Vegetable Biryani', veg: true, price: 33 },
      { name: 'Chicken Biryani', veg: false, price: 40 },
      { name: 'Lamb Biryani', veg: false, price: 45 },
      { name: 'Prawn Biryani', veg: false, price: 50 },
    ],
  },
  {
    id: 'rice',
    title: { pl: 'Ryż', en: 'Rice', hi: 'चावल' },
    items: [
      { name: 'Plain Rice', veg: true, price: 10 },
      { name: 'Jeera Rice', veg: true, price: 15 },
      { name: 'Lemon Rice', veg: true, price: 16 },
      { name: 'Methi Pulao', veg: true, price: 18 },
      { name: 'Egg Fried Rice', veg: false, price: 22 },
    ],
  },
  {
    id: 'breads',
    title: { pl: 'Placki z tandoora', en: 'Tandoor breads', hi: 'रोटी और नान' },
    items: [
      { name: 'Plain Naan', veg: true, price: 10 },
      { name: 'Butter Naan', veg: true, price: 12 },
      { name: 'Garlic Naan', veg: true, price: 14 },
      { name: 'Coriander Naan', veg: true, price: 14 },
      { name: 'Tandoori Roti', veg: true, price: 10 },
      { name: 'Lachha Paratha', veg: true, price: 13 },
      { name: 'Onion Kulcha', veg: true, price: 21 },
    ],
  },
  {
    id: 'sides',
    title: { pl: 'Dodatki', en: 'Sides', hi: 'साइड' },
    items: [
      { name: 'Roasted Papad', veg: true, price: 8 },
      { name: 'Masala Papad', veg: true, price: 12 },
      { name: 'Mix Raita', veg: true, price: 14 },
    ],
  },
  {
    id: 'sweets',
    title: { pl: 'Desery', en: 'Desserts', hi: 'मिठाई' },
    items: [
      { name: 'Gulab Jamun', veg: true, price: 15 },
      { name: 'Kheer', veg: true, price: 18 },
    ],
  },
  {
    id: 'drinks',
    title: { pl: 'Napoje', en: 'Drinks', hi: 'पेय' },
    items: [
      { name: 'Mango Lassi', veg: true, price: 14 },
      { name: 'Salty Lassi', veg: true, price: 14 },
      { name: 'Mango Juice', veg: true, price: 14 },
      { name: 'Ginger Lemon Drink', veg: true, price: 15 },
      { name: 'Soft drinks 500 ml', veg: true, price: 8 },
    ],
  },
];
