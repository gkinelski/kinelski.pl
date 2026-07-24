# KINELSKI.PL 5.0.2

# KINELSKI.PL 5.0.1 — panel administratora

Pełna wersja serwisu Astro z panelem administratora oraz poprawkami typowania dla Astro 7.1.3.

## Uruchomienie

```bash
npm install
npm run dev
```

Strona:

```text
http://localhost:4321/
```

Panel administratora:

```text
http://localhost:4321/admin
```

## Kontrola przed publikacją

```bash
npm run check
npm run build
npm run preview
```

## Kontakt na stronie

```text
gkinelski@wsb.edu.pl
```

## Panel administratora

Instrukcja znajduje się w pliku:

```text
INSTRUKCJA_PANELU_ADMINISTRATORA.md
```

## Publikacja

Po poprawnym teście skopiuj zawartość projektu do lokalnego repozytorium `kinelski.pl`, następnie wykonaj:

```bash
git add .
git commit -m "KINELSKI.PL 5.0.1 - panel administratora i poprawki kompilacji"
git push
```


Poprawka 5.0.2: zamknięto komponent `AdminLayout` w `src/pages/admin.astro`, co usuwało błąd kompilacji produkcyjnej.
