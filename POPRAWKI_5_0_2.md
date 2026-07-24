# KINELSKI.PL 5.0.2

## Poprawka kompilacji produkcyjnej

Usunięto błąd `CompilerError: Unexpected token` w `src/pages/admin.astro`.
Przyczyną był brak zamykającego znacznika `</AdminLayout>` na końcu strony panelu administratora.

Wersja 5.0.2 zawiera wszystkie poprawki typowania z 5.0.1 oraz poprawną strukturę komponentu Astro.

## Test na MacBooku

```bash
cd ~/Documents/KINELSKI_5_0_2
npm install
npm run check
npm run build
npm run preview
```
