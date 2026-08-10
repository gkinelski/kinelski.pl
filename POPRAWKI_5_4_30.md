# KINELSKI.PL 5.4.30

## Interaktywne CV z projektami z wcześniejszych wersji CV

Wersja 5.4.30 rozwija istniejącą stronę Kariera bez zmiany architektury Astro ani sposobu publikowania na GitHub Pages.

### Co dodano

- trzeci filtr osi kariery: **Projekt lub wdrożenie**;
- filtrowanie łączne według spółki/organizacji, stanowiska i projektu;
- adresowalne filtry w URL (`firma`, `stanowisko`, `projekt`), dzięki czemu wybrany widok można udostępnić;
- etap **Doradca Zarządu — Górnośląsko-Zagłębiowska Metropolia** z projektami grupy zakupowej energii i współpracy klastrów energii;
- dodatkowe projekty z najnowszego CV oraz wcześniejszych CV, m.in. aukcje rynku mocy, farmy wiatrowe i PV, jednostki ciepłownicze, LW Bogdanka, due diligence aktywów GZE, EnergiaPro/Enion, door-to-door, unbundling, SLA, windykacja i automatyzacja odczytów;
- kontrolę audytową kompletności kluczy projektów i obecności etapu GZM.

### Źródła lokalne

Zakres projektów porównano z następującymi dokumentami znajdującymi się na dysku użytkownika:

- `20260314 CV POL GK.docx` — najnowsze CV zawodowe;
- `Kwestionariusz gk CV ENEA_grzegorz kinelski_egonzehnder.docx` — szczegółowy opis ról i osiągnięć;
- `20250409 GK pol CV CURRICULUM VITAE.docx` — wersja porównawcza;
- `20180901 CURRICULUM VITAE kinelski cv v8 pl.docx` — doradztwo dla Górnośląsko-Zagłębiowskiej Metropolii;
- `20170330 CURRICULUM VITAE kinelski cv v8 pl.docx` — doradztwo dla PKP Energetyka i projekty restrukturyzacyjne.

Nie przeniesiono danych prywatnych, takich jak PESEL, adres, prywatny telefon ani zgoda rekrutacyjna.

### Kompatybilność

- zachowano dotychczasowe `career.json` i edycję przez panel administratora;
- stare wpisy projektów zapisane jako tekst są nadal obsługiwane przez komponent;
- brak zmian w konfiguracji domeny, GitHub Pages i workflow wdrożeniowym;
- numer wersji projektu: `5.4.30`.
