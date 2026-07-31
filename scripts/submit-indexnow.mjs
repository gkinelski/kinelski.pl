import fs from 'node:fs';

const host = 'kinelski.pl';
const siteUrl = `https://${host}`;
const key = '2c0026577a9f79ecf165ed8017bc0f71';
const keyLocation = `${siteUrl}/${key}.txt`;

const monographs = JSON.parse(
  fs.readFileSync(new URL('../src/data/monographs.json', import.meta.url), 'utf8')
);

const routes = [
  '/',
  '/o-mnie/',
  '/kariera/',
  '/bibliometria/',
  '/badania/',
  '/publikacje/',
  '/monografie/',
  '/aktywnosc/',
  '/projekty/',
  '/kontakt/',
  '/asystent/',
  '/bezpieczenstwo/',
  ...monographs.items.map((item) => `/monografie/${item.slug}/`),
];

const urlList = [...new Set(routes)].map((route) => new URL(route, siteUrl).href);
try {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      host,
      key,
      keyLocation,
      urlList,
    }),
  });

  if (response.ok || response.status === 202) {
    console.log(`IndexNow przyjął ${urlList.length} adresów (HTTP ${response.status}).`);
  } else {
    const message = await response.text();
    console.warn(
      `IndexNow nie przyjął zgłoszenia (HTTP ${response.status}). Publikacja strony pozostaje ważna. ${message}`
    );
  }
} catch (error) {
  console.warn(
    `Nie udało się połączyć z IndexNow. Publikacja strony pozostaje ważna. ${error instanceof Error ? error.message : String(error)}`
  );
}
