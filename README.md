# kinelski.pl — kompletna wersja 3.0

Wielostronicowy serwis akademicki oparty na danych z pełnego pakietu habilitacyjnego.

## Strony
- index.html
- o-mnie.html
- badania.html
- publikacje.html (dynamiczne filtrowanie 53 pozycji)
- monografia.html
- aktywnosc.html
- kontakt.html

## Dane
- assets/data/publications.json
- assets/data/conferences.json
- do-pobrania/publikacje.csv

## Uruchomienie
Otwórz folder w VS Code i uruchom index.html za pomocą Live Server.

## Publikacja
Wgraj całą zawartość folderu do repozytorium gkinelski/kinelski.pl.
GitHub: Settings → Pages → Deploy from a branch → main / root.
Custom domain: kinelski.pl.
Nie usuwaj rekordów DNS `home` i `_acme-challenge.home`, ponieważ obsługują Home Assistant.

## Przed publikacją
- potwierdź treść sekcji kariery i funkcji;
- uruchom adres grzegorz@kinelski.pl lub zmień adres kontaktowy;
- sprawdź wszystkie linki zewnętrzne;
- sprawdź stronę na telefonie.
