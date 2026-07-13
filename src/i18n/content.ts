export const languages = ['pl', 'en', 'hi'] as const;
export type Lang = (typeof languages)[number];

export type Copy = {
  locale: string; name: string; nav: { menu: string; story: string; visit: string };
  order: string; call: string; skip: string; language: string; heroEyebrow: string;
  hero: string; lead: string; heroNote: string; service: string; menuEyebrow: string;
  menuTitle: string; menuLead: string; allMenu: string; storyEyebrow: string; storyTitle: string;
  storyText: string; spiceEyebrow: string; spiceTitle: string; spiceText: string;
  visitEyebrow: string; visitTitle: string; map: string; addressLabel: string; hoursLabel: string;
  hours: string; footer: string; menuPageTitle: string; menuPageLead: string; menuCategories: string[];
  menuNote: string; visitLead: string; openDaily: string;
};

export const copy: Record<Lang, Copy> = {
  pl: {
    locale: 'pl_PL', name: 'Indian Curry Włochy',
    nav: { menu: 'Menu', story: 'O nas', visit: 'Kontakt' }, order: 'Zamów online', call: 'Zadzwoń',
    skip: 'Przejdź do treści', language: 'Wybierz język', heroEyebrow: 'KUCHNIA INDYJSKA · WARSZAWA WŁOCHY',
    hero: 'Smak Indii, który zostaje na dłużej.', lead: 'Ogień z tandoora, aromatyczne sosy i przyprawy mielone po to, by każdy kęs miał swoją historię.',
    heroNote: 'Równoległa 2 · codziennie 11:00–22:00', service: 'Na miejscu · na wynos · dostawa',
    menuEyebrow: 'OD CZEGO ZACZĄĆ', menuTitle: 'Ulubione dania. <em>Bez zgadywania.</em>',
    menuLead: 'Trzy pewniaki od naszych gości — kremowe, aromatyczne i dokładnie tak pikantne, jak lubisz.', allMenu: 'Zobacz całe menu',
    storyEyebrow: 'NASZA KUCHNIA', storyTitle: 'Nie skracamy drogi do <em>dobrego curry.</em>',
    storyText: 'Dajemy przyprawom czas, a piecowi tandoor ogień. Od pierwszego naan po ostatnią kroplę sosu — gotujemy dla pełnego, wyrazistego smaku.',
    spiceEyebrow: 'TWÓJ POZIOM OGNIA', spiceTitle: 'Ty mówisz, jak <em>ostro.</em>',
    spiceText: 'Łagodnie, średnio czy z charakterem? Dopasujemy pikantność do Twojego stołu, nie odwrotnie.',
    visitEyebrow: 'ZNAJDŹ NAS', visitTitle: 'Kolacja zaczyna się <em>blisko domu.</em>', map: 'Otwórz trasę w Google Maps',
    addressLabel: 'ADRES', hoursLabel: 'GODZINY', hours: 'Codziennie · 11:00–22:00',
    footer: 'Aromatyczna kuchnia indyjska w Warszawie', menuPageTitle: 'Co dziś <em>smakuje najlepiej?</em>',
    menuPageLead: 'Wybierz swoje ulubione danie i zamów w kilka chwil.', menuCategories: ['Przystawki', 'Dania główne', 'Wegetariańskie', 'Z pieca tandoor'],
    menuNote: 'Pełne menu, aktualne ceny i opcje dostawy znajdziesz po przejściu do zamówienia.', visitLead: 'Wpadnij na lunch, długą kolację albo odbierz swoje curry po drodze do domu.', openDaily: 'Otwarte codziennie'
  },
  en: {
    locale: 'en_GB', name: 'Indian Curry Włochy',
    nav: { menu: 'Menu', story: 'Our kitchen', visit: 'Visit' }, order: 'Order online', call: 'Call us',
    skip: 'Skip to content', language: 'Choose language', heroEyebrow: 'INDIAN KITCHEN · WARSAW WŁOCHY',
    hero: 'Indian flavour that stays with you.', lead: 'Tandoor fire, fragrant sauces and spices ground for one reason: every bite should have a story.',
    heroNote: 'Równoległa 2 · open daily 11:00–22:00', service: 'Dine in · takeaway · delivery',
    menuEyebrow: 'START HERE', menuTitle: 'Guest favourites. <em>No guesswork.</em>',
    menuLead: 'Three beloved dishes — creamy, aromatic and made as mild or as fiery as you like.', allMenu: 'See full menu',
    storyEyebrow: 'OUR KITCHEN', storyTitle: 'There is no shortcut to <em>great curry.</em>',
    storyText: 'We give spices their time and give the tandoor its fire. From the first naan to the final drop of sauce, we cook for deep, unmistakable flavour.',
    spiceEyebrow: 'YOUR HEAT LEVEL', spiceTitle: 'You decide how <em>hot.</em>',
    spiceText: 'Mild, medium or full of fire? We match the heat to your table, never the other way round.',
    visitEyebrow: 'FIND US', visitTitle: 'Dinner starts <em>close to home.</em>', map: 'Get directions in Google Maps',
    addressLabel: 'ADDRESS', hoursLabel: 'HOURS', hours: 'Every day · 11:00–22:00',
    footer: 'Aromatic Indian cooking in Warsaw', menuPageTitle: 'What are you <em>craving today?</em>',
    menuPageLead: 'Choose a favourite and order it in moments.', menuCategories: ['Starters', 'Mains', 'Vegetarian', 'From the tandoor'],
    menuNote: 'Find the full menu, current prices and delivery options when you open ordering.', visitLead: 'Come for lunch, a long dinner, or collect your curry on the way home.', openDaily: 'Open daily'
  },
  hi: {
    locale: 'hi_IN', name: 'इंडियन करी व्लोही',
    nav: { menu: 'मेन्यू', story: 'हमारी रसोई', visit: 'यहाँ आएँ' }, order: 'ऑनलाइन ऑर्डर करें', call: 'फ़ोन करें',
    skip: 'मुख्य सामग्री पर जाएँ', language: 'भाषा चुनें', heroEyebrow: 'भारतीय रसोई · वारसॉ व्लोही',
    hero: 'भारत का स्वाद, जो याद रह जाए।', lead: 'तंदूर की आँच, सुगंधित सॉस और ताज़े पिसे मसाले — ताकि हर निवाले की अपनी कहानी हो।',
    heroNote: 'रूव्नोलेग्वा 2 · हर दिन 11:00–22:00', service: 'रेस्तरां · टेकअवे · डिलीवरी',
    menuEyebrow: 'यहाँ से शुरू करें', menuTitle: 'मेहमानों की पसंद। <em>बिल्कुल सही चुनाव।</em>',
    menuLead: 'तीन पसंदीदा व्यंजन — क्रीमी, सुगंधित और आपके पसंद के तीखेपन के साथ।', allMenu: 'पूरा मेन्यू देखें',
    storyEyebrow: 'हमारी रसोई', storyTitle: 'अच्छी करी का <em>कोई शॉर्टकट नहीं।</em>',
    storyText: 'हम मसालों को समय देते हैं और तंदूर को उसकी आग। पहले नान से लेकर सॉस की आख़िरी बूंद तक, हम गहरे और भरपूर स्वाद के लिए पकाते हैं।',
    spiceEyebrow: 'तीखापन आपका', spiceTitle: 'आप चुनें कितना <em>तीखा।</em>',
    spiceText: 'हल्का, मध्यम या भरपूर तीखा? हम स्वाद को आपकी मेज़ के अनुसार बनाते हैं।',
    visitEyebrow: 'हमें खोजें', visitTitle: 'रात का खाना <em>घर के पास।</em>', map: 'Google Maps में रास्ता देखें',
    addressLabel: 'पता', hoursLabel: 'समय', hours: 'हर दिन · 11:00–22:00',
    footer: 'वारसॉ में सुगंधित भारतीय खाना', menuPageTitle: 'आज क्या <em>खाने का मन है?</em>',
    menuPageLead: 'अपना पसंदीदा चुनें और कुछ ही पलों में ऑर्डर करें।', menuCategories: ['स्टार्टर', 'मुख्य व्यंजन', 'शाकाहारी', 'तंदूर से'],
    menuNote: 'ऑर्डर खोलने पर आपको पूरा मेन्यू, वर्तमान कीमतें और डिलीवरी के विकल्प मिलेंगे।', visitLead: 'लंच, आराम से डिनर या घर जाते समय करी लेने के लिए आइए।', openDaily: 'हर दिन खुला'
  }
};

export const dishes = [
  { number: '01', name: 'Butter Chicken', price: '32 zł', type: ['Łagodne', 'Mild', 'हल्का'], description: ['Delikatny sos pomidorowo-maślany z nerkowcami.', 'A silky tomato-butter sauce with cashews.', 'काजू के साथ मुलायम टमाटर-मक्खन सॉस।'] },
  { number: '02', name: 'Tikka Masala', price: '32 zł', type: ['Aromatyczne', 'Aromatic', 'खुशबूदार'], description: ['Tandoor, pomidory, imbir i autorska mieszanka przypraw.', 'Tandoor chicken, tomatoes, ginger and our spice blend.', 'तंदूरी चिकन, टमाटर, अदरक और हमारे मसाले।'] },
  { number: '03', name: 'Paneer Curry', price: '30 zł', type: ['Wegetariańskie', 'Vegetarian', 'शाकाहारी'], description: ['Indyjski ser paneer w rozgrzewającym sosie curry.', 'Indian paneer in a warming curry sauce.', 'गर्माहट भरी करी सॉस में भारतीय पनीर।'] }
] as const;

export const langIndex = (lang: Lang) => languages.indexOf(lang);
