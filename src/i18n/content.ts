export const languages = ['pl', 'en', 'hi'] as const;
export type Lang = (typeof languages)[number];

const common = { address: 'Równoległa 2, 02-235 Warszawa', hours: '10:00–22:00' };
export const copy = {
  pl: { locale: 'pl_PL', name: 'Indian Curry 2', nav: ['Menu', 'O nas', 'Kontakt'], order: 'Zamów online', hero: ['Curry, które', 'stawia na nogi.'], lead: 'Aromatyczne sosy, ogień z tandoora i przyprawy mielone dla pełnego smaku.', menuTitle: 'Trzy smaki, od których warto zacząć.', menuLead: 'Każde danie zamówisz online z dostawą lub na odbiór.', spiceTitle: 'Ty wybierasz, jak bardzo piecze.', spiceLead: 'Od kremowej kormy po ogniste vindaloo — powiedz nam, jaki poziom ostrości lubisz.', visitTitle: 'Dobre curry jest bliżej, niż myślisz.', map: 'Otwórz trasę w Google Maps', footer: 'Kuchnia indyjska na Ochocie', ...common },
  en: { locale: 'en_GB', name: 'Indian Curry 2', nav: ['Menu', 'Our story', 'Visit us'], order: 'Order online', hero: ['Curry that', 'gets you going.'], lead: 'Aromatic sauces, tandoor fire and freshly ground spices for full flavour.', menuTitle: 'Three dishes worth starting with.', menuLead: 'Order every dish online for delivery or collection.', spiceTitle: 'You choose how hot it gets.', spiceLead: 'From creamy korma to fiery vindaloo — tell us the heat level you love.', visitTitle: 'Great curry is closer than you think.', map: 'Get directions in Google Maps', footer: 'Indian cuisine in Ochota', ...common },
  hi: { locale: 'hi_IN', name: 'Indian Curry 2', nav: ['मेन्यू', 'हमारे बारे में', 'संपर्क'], order: 'ऑनलाइन ऑर्डर करें', hero: ['वह करी जो', 'आपको तरोताज़ा कर दे।'], lead: 'खुशबूदार सॉस, तंदूर की आँच और ताज़े पिसे मसाले, भरपूर स्वाद के लिए।', menuTitle: 'शुरू करने के लिए तीन पसंदीदा व्यंजन।', menuLead: 'हर व्यंजन ऑनलाइन डिलीवरी या पिक-अप के लिए उपलब्ध है।', spiceTitle: 'आप चुनें कि कितना तीखा चाहिए।', spiceLead: 'मलाईदार कोरमा से तीखे विंदालू तक — अपना पसंदीदा तीखापन बताएं।', visitTitle: 'अच्छी करी आपके बहुत करीब है।', map: 'Google Maps में रास्ता देखें', footer: 'ओचोटा में भारतीय भोजन', ...common }
} as const;
export const dishes = [
  { name: 'Butter Chicken', price: '36 zł', tag: ['Łagodne', 'Mild', 'हल्का'], text: ['Grillowany kurczak w sosie pomidorowo-maślanym z nerkowcami.', 'Grilled chicken in a silky tomato-butter sauce with cashews.', 'काजू के साथ मुलायम टमाटर-मक्खन सॉस में ग्रिल्ड चिकन।'] },
  { name: 'Chicken Tikka Masala', price: '36 zł', tag: ['Aromatyczne', 'Aromatic', 'खुशबूदार'], text: ['Kurczak z tandoora, pomidory, imbir i czosnek.', 'Tandoor chicken, tomatoes, ginger and garlic.', 'तंदूरी चिकन, टमाटर, अदरक और लहसुन।'] },
  { name: 'Paneer Curry', price: '30 zł', tag: ['Wegetariańskie', 'Vegetarian', 'शाकाहारी'], text: ['Indyjski ser paneer w rozgrzewającym sosie curry.', 'Indian paneer in a warming curry sauce.', 'गरमाहट भरे करी सॉस में भारतीय पनीर।'] }
];
export const langIndex = (lang: Lang) => languages.indexOf(lang);
