# Instrukcja wdrożenia KINELSKI.PL 5.4.30

Wersja jest przygotowana do lokalnego testu i ręcznego wdrożenia. Nie wykonuje publikacji automatycznie.

Lockfile odświeżono do Astro `7.2.0`, `@astrojs/check` `0.9.10` i esbuild `0.28.2`. TypeScript pozostaje na `6.0.3`, ponieważ aktualne `@astrojs/check` deklaruje kompatybilność z TypeScript 5–6, a wersja 7 nie jest jeszcze wspierana przez to narzędzie.

## 1. Test lokalny

W katalogu projektu uruchom:

```bash
npm ci
npm run check
npm run build
npm run audit
```

`npm run audit` uruchom dopiero po `npm run build`, ponieważ sprawdza katalog `dist`.

## 2. Publikacja w istniejącym repozytorium

Przed skopiowaniem zmian pobierz najnowszy stan z GitHuba:

```bash
cd ~/Documents/KINELSKI_PUBLISH
git pull --rebase origin main
```

Skopiuj zawartość tej paczki do `KINELSKI_PUBLISH`, zachowując katalog `.git` repozytorium publikacyjnego i pomijając `node_modules`, `dist`, `.astro` oraz `.DS_Store`.

Przy standardowych katalogach użytkownika możesz użyć:

```bash
rsync -av --delete \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.astro' \
  --exclude='.DS_Store' \
  ~/Documents/KINELSKI_5_4_30/ \
  ~/Documents/KINELSKI_PUBLISH/
```

Następnie wykonaj ponownie:

```bash
cd ~/Documents/KINELSKI_PUBLISH
npm ci
npm run check
npm run build
npm run audit
git add -A
git commit -m "KINELSKI.PL 5.4.30 - interaktywne CV i projekty z CV"
git push origin main
```

Nie używaj `git push --force`. Jeśli pojawi się `fetch first`, wykonaj `git pull --rebase origin main` i sprawdź konflikt przed dalszym krokiem.

## 3. Co sprawdzić po wdrożeniu

Po zakończeniu GitHub Actions sprawdź:

- `/kariera/` — trzy filtry: spółka/organizacja, stanowisko, projekt;
- etap „Doradca Zarządu — Górnośląsko-Zagłębiowska Metropolia”;
- projekty ENEA, PKP Energetyka, TAURON/GZE i Vattenfall;
- możliwość połączenia kilku filtrów oraz wyczyszczenia filtrów;
- zachowanie strony w siedmiu językach;
- `/admin/` — edycję sekcji `Kariera` i `Interaktywne CV`.

## 4. Zasada aktualizacji

Przed każdą kolejną zmianą pracuj na najnowszym `origin/main`. Nie nadpisuj repozytorium starszą kopią lokalną.
