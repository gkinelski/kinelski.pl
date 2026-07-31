# Indeksowanie, bezpieczeństwo i reputacja KINELSKI.PL 5.4.25

## Co zostało przygotowane w stronie

- spójne dane strukturalne `Person`, `WebSite`, `WebPage` i `ProfilePage`;
- stałe identyfikatory ORCID i Web of Science ResearcherID;
- rozszerzone odnośniki potwierdzające tożsamość autora;
- kanoniczne adresy, metadane udostępniania i aktualna mapa strony;
- publiczna polityka odpowiedzialnego zgłaszania problemów;
- zgodny z RFC 9116 plik `/.well-known/security.txt`;
- maszynowy opis najważniejszych treści w `/llms.txt`;
- automatyczne zgłoszenie kanonicznych adresów do IndexNow po przyszłej publikacji.

Te elementy ułatwiają robotom jednoznaczne rozpoznanie domeny, autora i treści. Nie gwarantują pozycji w wynikach ani natychmiastowej zmiany reputacji domeny — na te wyniki wpływają również czas, jakość treści, prawdziwe odnośniki z innych serwisów i zachowania odbiorców.

## Priorytet 1: wymuszenie HTTPS w GitHub Pages

Kontrola z 31 lipca 2026 r. wykazała, że `https://kinelski.pl` ma ważny certyfikat, ale `http://kinelski.pl` nadal zwraca stronę bez przekierowania.

Po publikacji wersji 5.4.25:

1. Otwórz repozytorium `gkinelski/kinelski.pl` na GitHub.
2. Wejdź w **Settings → Pages**.
3. W sekcji GitHub Pages zaznacz **Enforce HTTPS**.
4. Po kilku minutach sprawdź, czy wejście na `http://kinelski.pl` automatycznie prowadzi do `https://kinelski.pl`.

To ustawienie powinno być wykonane przez właściciela repozytorium. Nie należy dodawać własnych skryptowych przekierowań zamiast funkcji GitHub Pages.

## Priorytet 2: Google Search Console

1. Otwórz `https://search.google.com/search-console`.
2. Dodaj usługę typu **Domena** o wartości `kinelski.pl`.
3. Skopiuj rekord TXT podany przez Google i dodaj go w panelu DNS operatora domeny.
4. Po weryfikacji przejdź do **Mapy witryn** i zgłoś:
   `https://kinelski.pl/sitemap-index.xml`
5. W narzędziu kontroli adresu sprawdź i poproś o indeksację co najmniej:
   - `https://kinelski.pl/`
   - `https://kinelski.pl/o-mnie`
   - `https://kinelski.pl/badania`
   - `https://kinelski.pl/publikacje`
   - `https://kinelski.pl/monografie`
   - `https://kinelski.pl/kariera`
6. Raz w miesiącu sprawdzaj sekcje **Indeksowanie stron**, **HTTPS**, **Podstawowe wskaźniki internetowe** i **Ręczne działania**.

Nie należy dodawać do kodu przypadkowego znacznika weryfikacyjnego. Najlepsza dla tej domeny jest weryfikacja DNS, ponieważ obejmuje HTTPS, HTTP, domenę główną i `www`.

## Priorytet 3: Bing, Copilot i IndexNow

1. Otwórz `https://www.bing.com/webmasters`.
2. Zaimportuj zweryfikowaną usługę z Google Search Console albo dodaj domenę ręcznie.
3. Sprawdź, czy Bing widzi mapę:
   `https://kinelski.pl/sitemap-index.xml`
4. Po publikacji 5.4.25 GitHub automatycznie powiadomi IndexNow o kanonicznych adresach strony.
5. W Bing Webmaster Tools sprawdzaj **Site Explorer**, **URL Inspection** i raporty bezpieczeństwa.

## Priorytet 4: reputacja domeny w filtrach bezpieczeństwa

Jeżeli Infoblox, firmowy DNS albo brama bezpieczeństwa blokuje stronę:

1. administrator sieci powinien dodać dokładne domeny `kinelski.pl` i `www.kinelski.pl` do listy dozwolonych;
2. właściciel domeny powinien przesłać do dostawcy filtra prośbę o ponowną klasyfikację lub zgłoszenie false positive;
3. w zgłoszeniu warto podać, że strona:
   - działa przez ważny certyfikat HTTPS,
   - jest statyczną stroną naukową i zawodową,
   - nie wymaga logowania i nie przyjmuje płatności,
   - publikuje kontakt bezpieczeństwa w `/.well-known/security.txt`;
4. po wymuszeniu HTTPS należy ponowić skan i klasyfikację.

Lokalna lista dozwolonych w jednej organizacji usuwa blokadę dla tej sieci, ale nie zmienia globalnej klasyfikacji. Dlatego warto wykonać również zgłoszenie false positive.

## Priorytet 5: wzrost realnego autorytetu

Najsilniejsze bezpieczne sygnały popularności to prawdziwe odnośniki z wiarygodnych miejsc. Adres `https://kinelski.pl` powinien być konsekwentnie dodany do:

- profilu Akademii WSB i stron jednostki;
- ORCID, Web of Science i Scopus, jeśli dany profil pozwala dodać witrynę;
- oficjalnych biogramów konferencyjnych i programów wydarzeń;
- stron redakcji, rad naukowych i instytucji, w których autor pełni funkcje;
- repozytoriów publikacji i stron wydawców tam, gdzie można uzupełnić profil autora;
- LinkedIn w polu oficjalnej strony.

Nazwa autora, ORCID, ResearcherID i adres strony powinny być wszędzie zapisywane identycznie. Nie należy kupować odnośników, korzystać z farm linków, automatycznych katalogów ani masowo powielać tych samych tekstów.

## Ochrona domeny i poczty

Kontrola DNS z 31 lipca 2026 r. potwierdziła rekord DS dla DNSSEC, serwery pocztowe OVH oraz politykę SPF. Nie znaleziono publicznego rekordu DMARC.

Przed dodaniem DMARC należy:

1. sprawdzić w OVH, czy dla poczty `@kinelski.pl` jest aktywny DKIM;
2. utworzyć osobny adres do raportów DMARC albo wybrać usługę, która je czytelnie agreguje;
3. rozpocząć od polityki obserwacyjnej `p=none`;
4. po sprawdzeniu wszystkich legalnych nadawców przejść do `quarantine`, a docelowo do `reject`.

Nie należy od razu ustawiać `p=reject` bez kontroli DKIM i źródeł wysyłki, ponieważ mogłoby to blokować prawidłowe wiadomości. DMARC chroni reputację poczty domenowej i ogranicza podszywanie się pod nadawcę; nie zastępuje HTTPS ani zabezpieczeń samej strony.

Opcjonalnie można rozważyć rekord CAA ograniczający wystawianie certyfikatów. Należy go dodać dopiero po potwierdzeniu aktualnego wystawcy obsługiwanego przez GitHub Pages, aby nie zablokować automatycznego odnawiania certyfikatu.

## Jak oceniać postęp

Co miesiąc należy zapisać:

- liczbę prawidłowo zaindeksowanych stron w Google i Bing;
- zapytania, wyświetlenia, kliknięcia i średnią pozycję;
- liczbę domen rzeczywiście odsyłających do `kinelski.pl`;
- ewentualne ostrzeżenia HTTPS, bezpieczeństwa lub ręczne działania;
- najczęściej odwiedzane podstrony i nowe, wartościowe odnośniki.

Pierwsze dane zwykle pojawiają się po weryfikacji narzędzi, a pełniejsza ocena wymaga kilku tygodni. Wzrost powinien wynikać z jakości, aktualności i cytowalności treści, a nie z prób manipulowania algorytmami.
