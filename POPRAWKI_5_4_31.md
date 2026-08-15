# KINELSKI.PL 5.4.31 — Google Analytics 4 za zgodą

## Zakres

- dodano GA4 dla strumienia `kinelski.pl` z identyfikatorem `G-M6CN2GNB11`;
- dodano własny baner zgody cookies z trybem Consent Mode v2;
- pomiar analityczny jest domyślnie wyłączony i uruchamia się dopiero po zgodzie;
- dodano możliwość cofnięcia decyzji przez „Ustawienia cookies” w stopce;
- zaktualizowano politykę prywatności i datę jej obowiązywania;
- zaktualizowano CSP, aby zezwalała wyłącznie na wymagane domeny Google Analytics;
- rozszerzono audyt produkcyjny o sprawdzenie identyfikatora GA4 i banera zgody.

## Konfiguracja

Identyfikator oraz klucz zapisu decyzji znajdują się w:

```text
src/data/analytics.json
```

Google Analytics nie obejmuje panelu administratora, który korzysta z osobnego layoutu.
