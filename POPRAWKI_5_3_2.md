# KINELSKI.PL 5.3.2 — poprawka połączenia panelu typografii

## Naprawiono

- panel administratora nie przerywa już logowania błędem 404, gdy w repozytorium nie ma jeszcze pliku `src/data/typography.json`,
- przy pierwszym połączeniu panel ładuje bezpieczne wartości domyślne typografii,
- przy pierwszym zapisie panel automatycznie tworzy brakujący plik `typography.json` na GitHubie,
- zapis nowych plików przez GitHub Contents API nie wysyła pustego pola `sha`,
- zachowano wszystkie funkcje wersji 5.3.1.
