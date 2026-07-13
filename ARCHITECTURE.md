# Indian Curry Włochy — plan i architektura

## Cel

Jednostronicowy marketingowy punkt wejścia restauracji, który w kilka sekund odpowiada na trzy pytania: co to za miejsce, co zamówić i jak tam trafić. Główną akcją jest przejście do aktualnego systemu zamówień; druga — nawigacja w Google Maps.

## Kierunek designu: „nocny stół z przyprawami”

- **Kolory:** Forest Night `#17322A`, Tandoor Shadow `#0D211B`, Rice Paper `#F3EDDF`, Saffron `#EF9F38`, Chili `#C75135`.
- **Typografia:** Newsreader (emocjonalne, duże tytuły), Plus Jakarta Sans (czytelny interfejs), DM Mono (adres, etykiety, dane), Noto Sans Devanagari dla hindi.
- **Kompozycja:** fotohero jako wejście do restauracji; następnie spokojna redakcyjna karta menu, ciemna opowieść o kuchni, intensywnie chilli-sekcja ostrości i mapa jako graficzny finał.
- **Motyw rozpoznawczy:** kręgi „przypraw” — subtelny napis-ornament w hero i abstrakcyjne koła wokół adresu. To jedno odważne rozpoznawalne rozwiązanie, a reszta layoutu pozostaje dyscyplinowana.

## Struktura

```text
src/
  pages/[lang]/       # /pl, /en, /hi plus Menu i Kontakt
  components/         # Header, Footer
  layouts/             # SEO, alternate language URLs, Restaurant JSON-LD
  i18n/content.ts      # wszystkie teksty i pozycje menu
  styles/global.css    # tokeny i responsywny UI
public/images/         # hero i zdjęcie sekcji kuchni
```

## Konwersja i dostępność

- CTA prowadzą wyłącznie do właściwego systemu zamówień oraz do przekazanej wizytówki Google Maps.
- Każdy język ma własny adres, `hreflang` i tag `lang`; hindi ma font z alfabetem dewanagari.
- Widoczne focus states, link „przejdź do treści”, semantyczne nagłówki, obsługa `prefers-reduced-motion`.
- Layout jest mobile-first: desktop dodaje dwukolumnowe kompozycje, nie ukrywa treści.
