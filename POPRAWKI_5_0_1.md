# KINELSKI.PL 5.0.1 — poprawka kompilacji

Ta wersja usuwa błędy zgłoszone przez `npm run check` w Astro 7.1.3.

## Poprawiono

- typy danych konferencji i elementów DOM w `ConferenceList.astro`;
- typy projektów w `ProjectCard.astro`;
- typy obszarów badawczych i publikacji w `ResearchArea.astro`;
- bezpieczne filtrowanie wyróżnionych publikacji na stronie głównej;
- pełne typowanie skryptu wyszukiwarki publikacji;
- obsługę `dataset`, `value` i `hidden` dla właściwych elementów HTML;
- typy komponentów publikacji, mobilności i etapów programu badawczego;
- jawne `is:inline` dla skryptów JSON-LD, panelu administratora i asystenta.

## Test na Macu

```bash
cd ~/Documents/KINELSKI_5_0_1
npm install
npm run check
npm run build
npm run preview
```

Oczekiwany wynik `npm run check`:

```text
0 errors
```
