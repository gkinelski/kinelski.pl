# KINELSKI.PL 5.3.1 — panel typografii

## Dodano

- osobne menu **Typografia** w panelu administratora,
- cztery bezpieczne warianty: Kompaktowy, Standardowy, Powiększony i Prezentacyjny,
- globalną skalę tekstu oraz osobne korekty dla tabletu i telefonu,
- regulację tekstu podstawowego, leadów i interlinii,
- regulację nazwy serwisu, pozycji menu, przełącznika języka, wysokości i odstępów nawigacji,
- regulację tytułu strony głównej, tytułów podstron, sekcji i kart,
- osobne ustawienia tytułów publikacji, monografii i kart kariery,
- ustawienia przycisków, formularzy, etykiet, metadanych, liczników i stopki,
- podgląd na żywo dla komputera, tabletu i telefonu,
- kontrolowane zakresy wartości chroniące responsywny układ strony,
- zapis ustawień w `src/data/typography.json` oraz obsługę kopii zapasowych.

## Bezpieczeństwo zmian

Panel nie pozwala ustawić wartości spoza bezpiecznych zakresów. Astro dodatkowo waliduje i ogranicza liczby podczas kompilacji, dzięki czemu błędna wartość nie powinna rozbić układu strony.
