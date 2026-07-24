# Panel administratora KINELSKI.PL 5.0

## 1. Uruchomienie strony lokalnie

```bash
npm install
npm run dev
```

Panel lokalny:

```text
http://localhost:4321/admin
```

## 2. Utworzenie bezpiecznego tokenu GitHub

Na GitHub przejdź kolejno: **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.

Ustaw:

- **Token name:** `KINELSKI.PL administrator`
- **Expiration:** np. 90 dni
- **Repository access:** `Only select repositories`
- wybierz tylko repozytorium `gkinelski/kinelski.pl`
- **Repository permissions → Contents:** `Read and write`

Nie przyznawaj tokenowi dostępu do innych repozytoriów ani dodatkowych uprawnień.

## 3. Logowanie

Otwórz:

```text
https://kinelski.pl/admin
```

Wpisz token. Token jest używany wyłącznie w przeglądarce do bezpośredniej komunikacji z GitHub API. Domyślnie nie jest zapisywany po zamknięciu lub odświeżeniu strony.

## 4. Publikowanie

Każde kliknięcie **Zapisz i opublikuj** tworzy commit na gałęzi `main`. GitHub Actions automatycznie przebudowuje stronę Astro i publikuje nową wersję.

## 5. Ważne

- przed większymi zmianami pobierz kopię w zakładce **Zaawansowane**;
- token traktuj jak hasło;
- po utracie komputera lub podejrzeniu wycieku natychmiast usuń token w ustawieniach GitHub;
- panel nie edytuje workflow ani ustawień repozytorium, dlatego wystarczy uprawnienie `Contents: Read and write`.

## 6. Typografia i rozmiary tekstu

W menu **Typografia** można:

- wybrać wariant Kompaktowy, Standardowy, Powiększony lub Prezentacyjny;
- zmieniać globalną skalę tekstu;
- ustawiać osobne korekty dla tabletu i telefonu;
- regulować menu górne, nagłówki, karty, publikacje, monografie, przyciski, formularze, liczniki i stopkę;
- sprawdzać wynik w podglądzie komputera, tabletu i telefonu.

Zmiana jest widoczna w podglądzie natychmiast, ale trafia na stronę publiczną dopiero po kliknięciu **Zapisz i opublikuj**. Przycisk **Przywróć domyślne** odtwarza bezpieczne ustawienia wersji standardowej.


## Pierwsze uruchomienie panelu typografii

Jeżeli repozytorium zawiera jeszcze wersję 5.3.0 i nie ma pliku `src/data/typography.json`, panel 5.3.2 połączy się normalnie, zastosuje ustawienia standardowe i utworzy plik automatycznie przy pierwszym zapisie zmian typografii.
