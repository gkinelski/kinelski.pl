export type AnalysisSource = {
  title: string;
  citation: string;
  url: string;
  label: string;
};

export type AnalysisSection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  note?: string;
};

export type Analysis = {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  lead: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  accent: string;
  metric: {
    value: string;
    label: string;
  };
  topics: string[];
  sections: AnalysisSection[];
  recommendations: string[];
  sources: AnalysisSource[];
  related: string[];
};

export const analyses: Analysis[] = [
  {
    slug: 'rezyliencja-miasta-inteligentnego',
    category: 'Rezyliencja miejska',
    title: 'Rezyliencja miasta inteligentnego: czym jest i jak ją budować',
    shortTitle: 'Jak budować rezyliencję miasta',
    description:
      'Czym jest rezyliencja miasta inteligentnego, jak wiąże się z bezpieczeństwem mieszkańców i jak model 4T+ przekłada ją na praktykę zarządzania.',
    lead:
      'Odporność miasta nie wynika z samej liczby sensorów, aplikacji i platform danych. Powstaje wtedy, gdy technologia, kompetencje, zaufanie i zdolność instytucji do współdziałania pozwalają utrzymać bezpieczeństwo oraz ciągłość usług w warunkach zakłóceń.',
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    readingTime: '8 min',
    accent: '4T+',
    metric: {
      value: 'N=1000',
      label: 'badanie mieszkańców GZM',
    },
    topics: ['rezyliencja miejska', 'Smart City', 'bezpieczeństwo energetyczne', 'model 4T+'],
    sections: [
      {
        id: 'definicja',
        eyebrow: 'Punkt wyjścia',
        title: 'Miasto odporne to więcej niż miasto cyfrowe',
        paragraphs: [
          'Miasto inteligentne warto traktować jako złożony system adaptacyjny. Infrastruktura, instytucje, mieszkańcy, przedsiębiorstwa i dane są w nim połączone siecią zależności. Zakłócenie w jednym obszarze — na przykład wzrost cen energii, awaria infrastruktury albo kryzys zaufania — może osłabić działanie wielu usług jednocześnie.',
          'Rezyliencja oznacza w tym ujęciu zdolność do rozpoznawania ryzyka, absorpcji zakłócenia, uczenia się i dostosowania, a następnie utrzymania lub odtworzenia kluczowych funkcji. Nie jest więc jednorazowym „powrotem do normy”. Jest trwałą kompetencją systemu miejskiego do działania w warunkach zmiany.',
          'Technologia może przyspieszyć diagnozę i koordynację, ale nie zastąpi zaufania, kompetencji ani sprawnych reguł współpracy. Z tego powodu cyfryzacja bez warstwy społecznej i instytucjonalnej może zwiększyć sprawność pojedynczego procesu, nie podnosząc odporności całego miasta.',
        ],
        note:
          'Wniosek autorski: inteligencja miasta jest zdolnością do wspólnego uczenia się i działania, a nie katalogiem zakupionych technologii.',
      },
      {
        id: 'model',
        eyebrow: 'Rama badawcza',
        title: 'Model 4T+ porządkuje źródła zdolności adaptacyjnej',
        paragraphs: [
          'Model 4T+ integruje cztery grupy kapitałów: technologię, talent, tolerancję i zaufanie. Znak „+” oznacza efekt ich współdziałania — rezyliencję oraz zdolność adaptacyjną, widoczną praktycznie w bezpieczeństwie mieszkańców i ciągłości usług publicznych.',
          'Technologia obejmuje infrastrukturę i narzędzia cyfrowe. Talent oznacza kompetencje, wiedzę i zdolność twórczego rozwiązywania problemów. Tolerancja opisuje otwartość na różnorodność i współpracę. Zaufanie dotyczy wiarygodności instytucji, przejrzystości decyzji i gotowości interesariuszy do współdziałania.',
          'Najważniejsza jest integracja. Wysoki poziom jednego kapitału nie kompensuje trwałych braków w pozostałych. Zaawansowana platforma danych nie pomoże, jeśli dane są niskiej jakości, odpowiedzialność jest rozproszona, a mieszkańcy nie ufają celom projektu.',
        ],
      },
      {
        id: 'badanie',
        eyebrow: 'Wyniki empiryczne',
        title: 'Co pokazało badanie mieszkańców GZM',
        paragraphs: [
          'Projekt badawczy opisany w monografii objął główne badanie 1000 mieszkańców Górnośląsko-Zagłębiowskiej Metropolii, 18 spotkań fokusowych ze 152 uczestnikami oraz dodatkowy moduł segmentacyjny. Dane analizowano z wykorzystaniem między innymi regresji, mediacji i modelowania równań strukturalnych.',
          'W przyjętym modelu integracja kapitałów 4T+ wiązała się z wyższą oceną skuteczności dekarbonizacji, bezpieczeństwa energetycznego i odporności miejskiej. Zaufanie pełniło rolę mechanizmu łączącego politykę klimatyczną z oceną skuteczności jej wdrażania, a bezpieczeństwo energetyczne wpływało na społeczną akceptację transformacji.',
          'Wyniki wskazały również szczególne znaczenie kapitału instytucjonalno-terytorialnego: koordynacji, jakości zarządzania oraz osadzenia decyzji w lokalnym kontekście. Gdy poczucie bezpieczeństwa energetycznego było niskie, osłabiał się efekt pozostałych kapitałów.',
        ],
        bullets: [
          'integracja technologii i kapitałów społecznych jest ważniejsza niż rozwój każdego z nich osobno;',
          'zaufanie wzmacnia gotowość do zaakceptowania kosztów i zmian organizacyjnych;',
          'bezpieczeństwo energetyczne działa jak warunek brzegowy transformacji;',
          'koordynacja instytucjonalna przekłada strategię na ciągłość usług i zdolność reagowania.',
        ],
        note:
          'Badanie miało charakter przekrojowy. Wyniki potwierdzają związki między konstruktami w przyjętym modelu, ale nie powinny być interpretowane jako prosty dowód przyczynowości dla każdego miasta.',
      },
      {
        id: 'bezpieczenstwo',
        eyebrow: 'Perspektywa mieszkańca',
        title: 'Bezpieczeństwo jest praktycznym testem rezyliencji',
        paragraphs: [
          'Mieszkaniec ocenia odporność miasta nie przez liczbę strategii, lecz przez doświadczenie codzienności: ciągłość dostaw energii i ciepła, przewidywalność kosztów, dostęp do usług oraz wiarygodność informacji w sytuacji niepewności. Dlatego bezpieczeństwo energetyczne jest jednocześnie rezultatem zarządzania i wskaźnikiem jego społecznej legitymizacji.',
          'W badaniach jakościowych akceptacja zmian była łączona ze stabilnością cen, przewidywalnością polityki, przejrzystością decyzji i możliwością udziału. Partycypacja nie była traktowana jako dodatek komunikacyjny, lecz jako sposób ograniczania ryzyka błędnej diagnozy oraz budowania poczucia sprawczości.',
          'Tak rozumiana rezyliencja łączy perspektywę techniczną i społeczną. System może być sprawny operacyjnie, a mimo to kruchy, jeżeli utraci zaufanie użytkowników lub przerzuci koszty adaptacji na grupy najbardziej wrażliwe.',
        ],
      },
      {
        id: 'praktyka',
        eyebrow: 'Zarządzanie',
        title: 'Jak przełożyć rezyliencję na decyzje',
        paragraphs: [
          'Pierwszym krokiem jest wspólna diagnoza ryzyk i zależności między usługami. Następnie trzeba wskazać właścicieli procesów, minimalne poziomy ciągłości działania oraz mierniki obejmujące nie tylko technikę, ale również kompetencje, zaufanie i dostępność wsparcia.',
          'Programy transformacyjne powinny być oceniane w dwóch horyzontach: efektywności inwestycji oraz wpływu na zdolność mieszkańców i instytucji do radzenia sobie z kolejnymi zakłóceniami. Taki podwójny pomiar ogranicza ryzyko, że krótkoterminowa optymalizacja osłabi odporność w dłuższym okresie.',
        ],
      },
    ],
    recommendations: [
      'Zmapuj zależności między energią, transportem, danymi i usługami społecznymi.',
      'Mierz kapitały 4T+ łącznie, a nie jako niezależne listy projektów.',
      'Włącz bezpieczeństwo i koszty gospodarstw domowych do oceny transformacji.',
      'Buduj zaufanie przez przejrzystość, udział interesariuszy i informację zwrotną.',
      'Traktuj technologię jako narzędzie ciągłości działania, nie jako samodzielny cel.',
    ],
    sources: [
      {
        title: 'Rezyliencja miast inteligentnych w warunkach transformacji energetyczno-klimatycznej',
        citation: 'Kinelski, G. (2026). Polskie Wydawnictwo Ekonomiczne S.A.',
        url: 'https://doi.org/10.33226/978-83-208-2706-4',
        label: 'DOI monografii',
      },
      {
        title: 'Smart City 4.0: Sustainable Urban Development in the Metropolis GZM',
        citation: 'Makieła, Z. J. i in. (2022). Sustainability, 14(6), 3516.',
        url: 'https://www.mdpi.com/2071-1050/14/6/3516',
        label: 'Strona wydawcy',
      },
    ],
    related: ['model-4t-plus', 'akceptacja-transformacji-energetycznej'],
  },
  {
    slug: 'model-4t-plus',
    category: 'Smart City i współzarządzanie',
    title: 'Model 4T+: dlaczego technologia nie wystarcza do budowy Smart City',
    shortTitle: 'Model 4T+: technologia to za mało',
    description:
      'Wyjaśnienie modelu 4T+: technologia, talent, tolerancja, zaufanie i ich integracja jako podstawa rezyliencji miasta inteligentnego.',
    lead:
      'Smart City nie staje się inteligentne przez sam zakup technologii. O wyniku decyduje to, czy narzędzia cyfrowe są połączone z kompetencjami, otwartością społeczną, zaufaniem i zdolnością instytucji do wspólnego działania.',
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    readingTime: '7 min',
    accent: '4 + 1',
    metric: {
      value: '4T+',
      label: 'zintegrowany model kapitałów',
    },
    topics: ['model 4T+', 'Smart City 4.0', 'zaufanie', 'zarządzanie miejskie'],
    sections: [
      {
        id: 'cztery-kapitaly',
        eyebrow: 'Konstrukcja modelu',
        title: 'Cztery kapitały i efekt ich integracji',
        paragraphs: [
          'Model 4T porządkuje cztery zasoby rozwoju miasta: technologię, talent, tolerancję i zaufanie. W badaniach nad Smart City 4.0 rama ta została rozwinięta o znak „+”, który oznacza zdolność adaptacyjną i rezyliencję wynikającą ze współdziałania kapitałów.',
          'Technologia dostarcza infrastruktury, danych i narzędzi automatyzacji. Talent pozwala je projektować, obsługiwać i twórczo wykorzystywać. Tolerancja poszerza zdolność systemu do uczenia się dzięki różnorodności perspektyw. Zaufanie obniża koszt współpracy i zwiększa wiarygodność wspólnych decyzji.',
          'Znak „+” jest kluczowy: nie oznacza piątej, niezależnej kategorii. Opisuje właściwość całego układu, która pojawia się wtedy, gdy kapitały są koordynowane przez sprawne instytucje i ukierunkowane na bezpieczeństwo mieszkańców.',
        ],
      },
      {
        id: 'technologia',
        eyebrow: 'Granice technocentryzmu',
        title: 'Technologia rozwiązuje zadania, ale nie ustanawia celu',
        paragraphs: [
          'Sensor może zmierzyć zużycie energii, platforma może połączyć dane, a algorytm może zaproponować wariant działania. Żadne z tych narzędzi nie rozstrzyga jednak samodzielnie, czy korzyści i koszty są podzielone sprawiedliwie, kto odpowiada za błąd ani czy mieszkańcy akceptują przyjęte priorytety.',
          'Badanie strategii miast GZM wykazało silną obecność technologii w dokumentach rozwojowych, ale słabsze operacjonalizowanie talentu, tolerancji i zaufania. Problemem nie był brak projektów informatycznych, lecz luka między deklaracją strategiczną, dokumentami operacyjnymi i praktyką współzarządzania.',
          'Podobny wniosek płynie z badań sieciowego zarządzania metropolią: narzędzia techniczne mogą obniżać zużycie energii i emisje, lecz wymagają koordynacji wielu gmin, dostawców i użytkowników. W systemie policentrycznym wartość technologii rośnie wraz z jakością relacji między uczestnikami.',
        ],
        note:
          'Technologia jest wzmacniaczem jakości zarządzania. Może przyspieszyć zarówno dobre procesy, jak i istniejący chaos organizacyjny.',
      },
      {
        id: 'kapitaly',
        eyebrow: 'Znaczenie praktyczne',
        title: 'Jak rozpoznać deficyt każdego z kapitałów',
        paragraphs: [
          'Deficyt technologii widać w niskiej jakości danych, braku interoperacyjności i ręcznym przekazywaniu informacji. Deficyt talentu ujawnia się wtedy, gdy organizacja kupuje rozwiązania, lecz nie ma kompetencji do ich utrzymania, oceny lub rozwoju.',
          'Deficyt tolerancji przejawia się zamykaniem procesu na odmienne potrzeby, unikaniem eksperymentów i dominacją jednej perspektywy. Deficyt zaufania widać w ukrywaniu danych, niskiej gotowości do współpracy oraz traktowaniu konsultacji jako obowiązku wykonywanego po podjęciu decyzji.',
          'W praktyce kapitały nakładają się na siebie. Brak kompetencji może obniżać zaufanie do systemu, a słabe zaufanie ograniczać wymianę danych. Dlatego diagnoza 4T+ powinna szukać sprzężeń zwrotnych, a nie jednego „najsłabszego ogniwa”.',
        ],
        bullets: [
          'Technologia: czy dane są wiarygodne, dostępne i interoperacyjne?',
          'Talent: czy organizacja potrafi ocenić i rozwijać rozwiązanie po zakończeniu projektu?',
          'Tolerancja: czy w procesie reprezentowane są różne grupy i scenariusze?',
          'Zaufanie: czy decyzje, odpowiedzialność i ograniczenia są przejrzyste?',
        ],
      },
      {
        id: 'pomiar',
        eyebrow: 'Pomiar i decyzje',
        title: 'Od listy projektów do portfela zdolności',
        paragraphs: [
          'Miasto może posiadać wiele projektów smart i nadal nie tworzyć spójnego systemu. Model 4T+ przesuwa punkt ciężkości z liczby wdrożeń na zdolność do współdziałania: jakość danych, kompetencje zespołów, udział interesariuszy, zaufanie do procesu i odporność usług.',
          'Ocena programu powinna więc obejmować jednocześnie rezultat operacyjny i społeczny. Przykładowo oszczędność energii jest ważna, ale trzeba też sprawdzić dostępność rozwiązania, wpływ na koszty mieszkańców, możliwość utrzymania technologii oraz sposób reagowania na awarie.',
          'Taka perspektywa pozwala budować portfel zdolności, a nie zbiór demonstratorów. Projekty są łączone wspólnymi standardami danych, odpowiedzialnością procesową, rozwojem kompetencji i mechanizmem uczenia się z wyników.',
        ],
      },
      {
        id: 'wdrozenie',
        eyebrow: 'Wdrożenie',
        title: 'Prosty test 4T+ przed uruchomieniem projektu',
        paragraphs: [
          'Przed decyzją inwestycyjną warto odpowiedzieć na pięć pytań: jaki problem mieszkańca rozwiązujemy, jakich danych potrzebujemy, kto posiada kompetencje do utrzymania rozwiązania, które grupy mogą ponieść koszty oraz jak będzie budowane i mierzone zaufanie.',
          'Jeżeli odpowiedzi dotyczą wyłącznie technologii i harmonogramu zakupu, projekt nie jest jeszcze gotowy jako inicjatywa Smart City. Brakuje mu mechanizmu integracji, który przekształca narzędzie w trwałą zdolność systemu miejskiego.',
        ],
      },
    ],
    recommendations: [
      'Zdefiniuj problem publiczny przed wyborem rozwiązania technicznego.',
      'Przypisz właścicieli danych, procesów i rezultatów społecznych.',
      'Uwzględnij rozwój kompetencji w budżecie i harmonogramie projektu.',
      'Włącz użytkowników przed ustaleniem wariantu, a nie po jego wyborze.',
      'Oceniaj projekt przez wpływ na rezyliencję i bezpieczeństwo usług.',
    ],
    sources: [
      {
        title: 'Rezyliencja miast inteligentnych w warunkach transformacji energetyczno-klimatycznej',
        citation: 'Kinelski, G. (2026). Polskie Wydawnictwo Ekonomiczne S.A.',
        url: 'https://doi.org/10.33226/978-83-208-2706-4',
        label: 'DOI monografii',
      },
      {
        title: 'Smart City 4.0: Sustainable Urban Development in the Metropolis GZM',
        citation: 'Makieła, Z. J. i in. (2022). Sustainability, 14(6), 3516.',
        url: 'https://www.mdpi.com/2071-1050/14/6/3516',
        label: 'Strona wydawcy',
      },
      {
        title: 'Tools for Network Smart City Management',
        citation: 'Makieła, Z. J. i in. (2022). Energies, 15(7), 2316.',
        url: 'https://www.mdpi.com/1996-1073/15/7/2316',
        label: 'Strona wydawcy',
      },
    ],
    related: ['rezyliencja-miasta-inteligentnego', 'akceptacja-transformacji-energetycznej'],
  },
  {
    slug: 'akceptacja-transformacji-energetycznej',
    category: 'Transformacja energetyczna',
    title: 'Akceptacja transformacji energetycznej: bezpieczeństwo, zaufanie i sprawiedliwość',
    shortTitle: 'Co buduje akceptację transformacji',
    description:
      'Dlaczego społeczna akceptacja transformacji energetycznej zależy od bezpieczeństwa, kosztów, zaufania i udziału mieszkańców w procesie decyzji.',
    lead:
      'Akceptacja społeczna nie jest kampanią informacyjną uruchamianą po podjęciu decyzji. Jest warunkiem projektowym transformacji: zależy od bezpieczeństwa dostaw, kosztów, sprawiedliwego podziału ryzyka i wiarygodności instytucji.',
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    readingTime: '8 min',
    accent: 'Zaufanie',
    metric: {
      value: 'N=444',
      label: 'badanie determinant dekarbonizacji',
    },
    topics: ['transformacja energetyczna', 'akceptacja społeczna', 'zaufanie', 'dekarbonizacja'],
    sections: [
      {
        id: 'warunek',
        eyebrow: 'Zmiana perspektywy',
        title: 'Akceptacja jest elementem projektu, nie komunikacją po fakcie',
        paragraphs: [
          'Transformacja energetyczna zmienia nie tylko technologię wytwarzania energii. Wpływa na ceny, sposób ogrzewania, mobilność, rynek pracy i poczucie bezpieczeństwa. Mieszkańcy oceniają ją więc przez konkretne doświadczenia, a nie przez samą zgodność z odległym celem klimatycznym.',
          'Jeżeli udział mieszkańców rozpoczyna się dopiero po wyborze wariantu, konsultacje łatwo stają się próbą uzyskania zgody na gotowe rozwiązanie. Włączenie interesariuszy wcześniej pozwala ujawnić bariery, ryzyka dystrybucyjne i lokalną wiedzę, zanim zostaną zamknięte najważniejsze decyzje.',
          'Akceptacja nie oznacza braku konfliktu. Oznacza przekonanie, że proces jest zrozumiały, uczciwy, przewidywalny i daje możliwość realnego wpływu. To właśnie jakość procesu decyzyjnego buduje zdolność do kontynuowania zmian mimo kosztów i niepewności.',
        ],
      },
      {
        id: 'wyniki-2021',
        eyebrow: 'Badanie dekarbonizacji',
        title: 'Wiedza i lokalne instrumenty zwiększają gotowość do zmiany',
        paragraphs: [
          'Badanie determinant dekarbonizacji przeprowadzone na próbie 444 osób wskazało znaczenie edukacji, wiedzy i świadomości ekologicznej. Respondenci łączyli skuteczność zmian również z odnawialnymi źródłami energii, programami wymiany źródeł ciepła, wsparciem finansowym i modernizacją infrastruktury.',
          'Szczególne znaczenie przypisywano rozwiązaniom bliskim mieszkańcom. Lokalne programy wsparcia były postrzegane jako bardziej konkretne i użyteczne niż odległe instrumenty państwowe. Wynika z tego praktyczna rola samorządu: powinien on tłumaczyć cele na dostępne ścieżki działania, uwzględniające warunki danego miasta lub gminy.',
          'Sama wiedza nie usuwa jednak bariery kosztowej. Informacja staje się skuteczna wtedy, gdy towarzyszy jej wykonalne rozwiązanie: doradztwo, finansowanie, przewidywalne zasady i możliwość sprawdzenia efektów.',
        ],
        note:
          'Wyniki dotyczą opinii respondentów i służą identyfikacji postrzeganych determinant. Nie są automatycznym rankingiem skuteczności wszystkich instrumentów publicznych.',
      },
      {
        id: 'bezpieczenstwo-zaufanie',
        eyebrow: 'Model 4T+',
        title: 'Bezpieczeństwo i zaufanie tworzą społeczną infrastrukturę transformacji',
        paragraphs: [
          'W badaniu mieszkańców GZM opisanym w monografii bezpieczeństwo energetyczne było dodatnio związane z akceptacją dekarbonizacji. To ważna wskazówka: mieszkańcy są bardziej gotowi popierać zmianę, gdy nie postrzegają jej jako zagrożenia dla ciągłości dostaw i stabilności kosztów gospodarstwa domowego.',
          'Zaufanie pełniło w modelu rolę mediatora między polityką klimatyczną a oceną skuteczności jej wdrażania. Oznacza to, że nawet poprawnie zaprojektowane narzędzie może zostać ocenione słabo, jeśli instytucja nie wyjaśnia decyzji, nie reaguje na informację zwrotną lub zmienia reguły w sposób nieprzewidywalny.',
          'Badania fokusowe wzmacniają tę interpretację. Uczestnicy łączyli gotowość do zmiany z przejrzystością, stabilnością cen, ciągłością dostaw, poczuciem wpływu oraz sprawiedliwym rozłożeniem kosztów. Technologia była ważna, ale pozostawała narzędziem w szerszym procesie społecznym.',
        ],
        bullets: [
          'bezpieczeństwo dostaw i przewidywalność kosztów;',
          'jasne reguły oraz odpowiedzialność instytucji;',
          'dostęp do wiedzy, doradztwa i wsparcia finansowego;',
          'możliwość wpływu na wariant i sposób wdrożenia;',
          'ochrona grup szczególnie narażonych na koszty zmiany.',
        ],
      },
      {
        id: 'sprawiedliwosc',
        eyebrow: 'Sprawiedliwa transformacja',
        title: 'Liczy się nie tylko suma korzyści, ale też ich podział',
        paragraphs: [
          'Projekt może być racjonalny ekonomicznie w skali systemu, a jednocześnie nieakceptowalny dla grupy, która ponosi skoncentrowany koszt. Dlatego ocena powinna obejmować sprawiedliwość dystrybucyjną — kto płaci i kto korzysta — oraz proceduralną — kto uczestniczy i w jaki sposób uwzględnia się jego argumenty.',
          'W praktyce oznacza to analizę wpływu na gospodarstwa o różnych dochodach, najemców i właścicieli, seniorów, osoby o ograniczonej mobilności oraz przedsiębiorców zależnych od lokalnej infrastruktury. Środki osłonowe powinny być projektowane równolegle z inwestycją, a nie dopiero po ujawnieniu oporu.',
          'Sprawiedliwość zwiększa również trwałość decyzji. Program postrzegany jako uczciwy jest mniej podatny na zmianę nastrojów, dezinformację i konflikt polityczny, ponieważ jego legitymizacja opiera się na doświadczeniu procesu, a nie tylko na obietnicy przyszłych korzyści.',
        ],
      },
      {
        id: 'komunikacja',
        eyebrow: 'Praktyka samorządu i organizacji',
        title: 'Komunikacja powinna pokazywać decyzje, ograniczenia i korzyści lokalne',
        paragraphs: [
          'Skuteczna narracja nie sprowadza się do hasła o redukcji emisji. Łączy cel klimatyczny z jakością powietrza, stabilnością usług, kosztami energii, zdrowiem i rozwojem lokalnym. Powinna również uczciwie wskazywać ograniczenia, niepewności i kryteria wyboru wariantu.',
          'Najbardziej wiarygodny proces tworzy zamkniętą pętlę informacji: instytucja publikuje założenia i dane, mieszkańcy zgłaszają potrzeby, projekt odpowiada na te uwagi, a po wdrożeniu prezentowane są wyniki i odchylenia. W ten sposób komunikacja staje się częścią zarządzania, a nie warstwą promocyjną.',
        ],
      },
    ],
    recommendations: [
      'Rozpocznij udział interesariuszy przed wyborem wariantu technicznego.',
      'Połącz cele klimatyczne z bezpieczeństwem, kosztami i lokalnymi korzyściami.',
      'Projektuj finansowanie, doradztwo i osłony razem z inwestycją.',
      'Publikuj kryteria decyzji, dane wejściowe i odpowiedzi na zgłoszone uwagi.',
      'Mierz zaufanie i akceptację w czasie, a nie tylko na końcu konsultacji.',
    ],
    sources: [
      {
        title: 'Determinants of Decarbonization—How to Realize Sustainable and Low Carbon Cities?',
        citation: 'Drożdż, W. i in. (2021). Energies, 14(9), 2640.',
        url: 'https://www.mdpi.com/1996-1073/14/9/2640',
        label: 'Strona wydawcy',
      },
      {
        title: 'Rezyliencja miast inteligentnych w warunkach transformacji energetyczno-klimatycznej',
        citation: 'Kinelski, G. (2026). Polskie Wydawnictwo Ekonomiczne S.A.',
        url: 'https://doi.org/10.33226/978-83-208-2706-4',
        label: 'DOI monografii',
      },
    ],
    related: ['rezyliencja-miasta-inteligentnego', 'model-4t-plus'],
  },
  {
    slug: 'cyfrowe-blizniaki-transformacja-energetyczna',
    category: 'Gospodarka cyfrowa',
    title: 'Cyfrowe bliźniaki w transformacji energetycznej: od modelu do zdolności operacyjnej',
    shortTitle: 'Cyfrowe bliźniaki w energetyce',
    description:
      'Jak cyfrowe bliźniaki wspierają sieci i aktywa energetyczne oraz dlaczego ich skalowanie wymaga jakości danych, interoperacyjności i cyberbezpieczeństwa.',
    lead:
      'Cyfrowy bliźniak nie jest efektowną wizualizacją ani kolejnym repozytorium danych. Staje się wartościowy dopiero wtedy, gdy łączy aktualny obraz obiektu z modelami, analizą i procesem podejmowania decyzji — w bezpiecznym, odpowiedzialnie zarządzanym środowisku.',
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    readingTime: '9 min',
    accent: 'DT',
    metric: {
      value: '4',
      label: 'polskie grupy energetyczne w studium przypadków',
    },
    topics: ['cyfrowe bliźniaki', 'energetyka', 'cyberbezpieczeństwo', 'zarządzanie danymi'],
    sections: [
      {
        id: 'definicja',
        eyebrow: 'Technologia i proces',
        title: 'Cyfrowy bliźniak to dynamiczna relacja z obiektem fizycznym',
        paragraphs: [
          'Cyfrowy bliźniak jest cyfrową reprezentacją obiektu lub systemu, zasilaną danymi o jego rzeczywistym stanie. W dojrzałej postaci relacja ma charakter dwukierunkowy: dane aktualizują model, a wyniki symulacji i analiz wspierają decyzje dotyczące świata fizycznego.',
          'To odróżnia bliźniaka od statycznego modelu, dashboardu czy cyfrowej dokumentacji. Wartość powstaje dzięki ciągłości aktualizacji, wiarygodnej semantyce danych, możliwości wykonywania scenariuszy „co, jeśli” oraz osadzeniu wyników w konkretnym procesie operacyjnym.',
          'W energetyce cyfrowy bliźniak może obejmować pojedynczy element, instalację, fragment sieci albo system przedsiębiorstwa. Im szerszy zakres, tym większe znaczenie mają interoperacyjność, odpowiedzialność za dane i zasady współpracy między zespołami IT oraz OT.',
        ],
      },
      {
        id: 'zastosowania',
        eyebrow: 'Studium wielokrotne',
        title: 'Cztery archetypy zastosowań w polskiej energetyce',
        paragraphs: [
          'Artykuł z 2026 roku analizuje publicznie opisane inicjatywy czterech polskich grup energetycznych: Enei, Energi, PGE i Tauronu. Porównanie wskazuje, że pod wspólnym określeniem cyfrowego bliźniaka funkcjonują rozwiązania o różnym zakresie i dojrzałości.',
          'Pierwszą grupę tworzą bliźniaki sieciowe wspierające obserwowalność, analizę stanów i planowanie pracy systemu. Druga obejmuje bliźniaki aktywów nastawione na dostępność, diagnostykę i utrzymanie. Trzecia dotyczy elastyczności oraz sterowania zasobami, a czwarta — bliźniaków kompetencyjnych wykorzystywanych do szkoleń i bezpiecznego ćwiczenia procedur.',
          'Te archetypy mogą współistnieć w jednej organizacji. Nie tworzą prostej drabiny, po której każde przedsiębiorstwo musi przejść w tej samej kolejności. Powinny być dobierane do problemu biznesowego, jakości dostępnych danych i poziomu gotowości procesów.',
        ],
        bullets: [
          'bliźniak sieciowy: obserwowalność, symulacja i wsparcie dyspozycji;',
          'bliźniak aktywa: diagnostyka, predykcja i utrzymanie;',
          'bliźniak elastyczności: bilansowanie i koordynacja rozproszonych zasobów;',
          'bliźniak kompetencyjny: szkolenia, procedury i świadomość sytuacyjna.',
        ],
        note:
          'Analiza opiera się na publicznych ujawnieniach. Potwierdza opisane kierunki inicjatyw, ale nie jest niezależnym audytem ich pełnej dojrzałości ani efektów technicznych.',
      },
      {
        id: 'capability-stack',
        eyebrow: 'Dojrzałość',
        title: 'Wartość tworzy cały stos zdolności, nie pojedyncza aplikacja',
        paragraphs: [
          'Wnioskiem ze studium przypadków jest traktowanie cyfrowego bliźniaka jako stosu zdolności. U jego podstaw znajdują się akwizycja i jakość danych. Kolejne warstwy obejmują wspólny model informacyjny, repozytoria, symulację, analitykę, interfejs użytkownika oraz integrację z decyzjami operacyjnymi.',
          'Słaba warstwa podstawowa ogranicza wszystko, co znajduje się wyżej. Model predykcyjny nie będzie wiarygodny bez aktualnych danych o topologii i aktywach. Z kolei poprawna analiza nie przełoży się na wynik, jeśli nie wiadomo, kto może podjąć decyzję i kto odpowiada za jej konsekwencje.',
          'Dlatego skalowanie cyfrowych bliźniaków wymaga wspólnych standardów, semantyki i utrzymania jednego wiarygodnego źródła danych. W przeciwnym razie organizacja tworzy cyfrową mozaikę: wiele efektownych modeli, które trudno łączyć, aktualizować i wykorzystywać poza pojedynczym projektem.',
        ],
      },
      {
        id: 'bezpieczenstwo',
        eyebrow: 'Warunki brzegowe',
        title: 'Zarządzanie danymi i cyberbezpieczeństwo muszą być częścią architektury',
        paragraphs: [
          'Integracja danych operacyjnych, chmury, narzędzi analitycznych i systemów zewnętrznych zwiększa powierzchnię ataku. Zagrożenia obejmują manipulację sygnałami, nieuprawniony dostęp do informacji o infrastrukturze, modyfikację modelu oraz błędne decyzje podjęte na podstawie zatrutych danych.',
          'Bezpieczeństwo nie może być końcowym testem gotowego rozwiązania. Powinno obejmować segmentację środowisk IT i OT, zarządzanie tożsamością, kontrolę dostępu, pochodzenie danych, monitorowanie integralności modelu, plan reakcji oraz odpowiedzialność dostawców komponentów.',
          'Równie ważne jest governance danych: kto jest właścicielem definicji, kto zatwierdza zmianę modelu, jak mierzy się jakość i jak długo przechowuje się dane. Bez tych reguł techniczna interoperacyjność nie prowadzi do interoperacyjności organizacyjnej.',
        ],
      },
      {
        id: 'przestrzen',
        eyebrow: 'Planowanie przestrzenne',
        title: 'Połączenie bliźniaka z GIS może usprawnić decyzje inwestycyjne',
        paragraphs: [
          'Inwestycje energetyczne są osadzone w przestrzeni i wpływają na mieszkańców, środowisko oraz inne sieci infrastruktury. Integracja danych technicznych z GIS pozwala porównywać warianty lokalizacji, analizować ograniczenia i wcześniej identyfikować potencjalne konflikty.',
          'Cyfrowy bliźniak może dzięki temu stać się wspólnym środowiskiem dialogu: pokazuje parametry techniczne i przestrzenne, a scenariusze pomagają wyjaśnić skutki alternatywnych decyzji. Nie zastępuje jednak konsultacji ani rozstrzygnięć publicznych — poprawia ich podstawę informacyjną.',
          'Największy potencjał pojawia się wtedy, gdy model łączy dane infrastrukturalne, przestrzenne i społeczne. Pozwala to oceniać nie tylko wykonalność techniczną, ale także dostępność korzyści, wpływ na grupy wrażliwe oraz ryzyko pogłębiania ubóstwa energetycznego.',
        ],
      },
      {
        id: 'start',
        eyebrow: 'Pierwszy krok',
        title: 'Zaczynać należy od decyzji, którą bliźniak ma poprawić',
        paragraphs: [
          'Dobra inicjatywa nie zaczyna się od pytania „jaki cyfrowy bliźniak kupić?”, lecz „jaką decyzję podejmujemy zbyt wolno, zbyt drogo lub przy zbyt małej wiedzy?”. Dopiero potem określa się wymagany model, częstotliwość danych, tolerancję błędu i poziom automatyzacji.',
          'Pilotaż powinien posiadać mierzalny rezultat, właściciela biznesowego, plan utrzymania danych i kryteria skalowania. Jeżeli nie można wskazać decyzji, która zmieni się dzięki modelowi, powstaje raczej demonstrator niż zdolność operacyjna.',
        ],
      },
    ],
    recommendations: [
      'Zdefiniuj decyzję operacyjną i oczekiwany rezultat przed wyborem platformy.',
      'Ustal właścicieli danych, modeli i procesów biznesowych.',
      'Projektuj interoperacyjność, semantykę i cyberbezpieczeństwo od początku.',
      'Rozróżniaj demonstrator, bliźniak operacyjny i rozwiązanie predykcyjne.',
      'Łącz dane techniczne z GIS i kontekstem społecznym tam, gdzie decyzja ma wymiar przestrzenny.',
    ],
    sources: [
      {
        title: 'Digital Twins as Tools for Energy Transition: Data Governance, Cybersecurity, and Spatial Planning',
        citation: 'Benduch, D. i in. (2026). Sustainability, 18(12), 5961.',
        url: 'https://www.mdpi.com/2071-1050/18/12/5961',
        label: 'Strona wydawcy',
      },
      {
        title: 'Application of Smart Technologies in Metropolis GZM to Reduce Harmful Emissions in District Heating Systems',
        citation: 'Kinelski, G. i in. (2021). Energies, 14(22), 7665.',
        url: 'https://www.mdpi.com/1996-1073/14/22/7665',
        label: 'Strona wydawcy',
      },
      {
        title: 'Tools for Network Smart City Management',
        citation: 'Makieła, Z. J. i in. (2022). Energies, 15(7), 2316.',
        url: 'https://www.mdpi.com/1996-1073/15/7/2316',
        label: 'Strona wydawcy',
      },
    ],
    related: ['model-4t-plus', 'rezyliencja-miasta-inteligentnego'],
  },
];

export const analysesBySlug = Object.fromEntries(
  analyses.map((analysis) => [analysis.slug, analysis])
) as Record<string, Analysis>;
