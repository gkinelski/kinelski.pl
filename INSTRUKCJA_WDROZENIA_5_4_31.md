# Wdrożenie KINELSKI.PL 5.4.31

1. W katalogu `KINELSKI_PUBLISH` uruchom:

   ```bash
   npm ci
   npm run check
   npm run build
   npm run audit
   ```

2. Otwórz lokalny podgląd i sprawdź stronę główną oraz `/polityka-prywatnosci/`.

3. Nie publikuj bez potwierdzenia użytkownika. Po akceptacji zmian wykonaj commit i `git push origin main`.

4. Po wdrożeniu w GA4 użyj „Raporty czasu rzeczywistego” i otwórz stronę w osobnym oknie po zaakceptowaniu statystyk. Dane mogą pojawić się z krótkim opóźnieniem.
