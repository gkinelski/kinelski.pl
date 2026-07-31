import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const errors = [];
const warnings = [];
const checks = [];

const readJson = (relativePath) =>
  JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));

const addCheck = (condition, success, failure) => {
  if (condition) checks.push(success);
  else errors.push(failure);
};

const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(filePath) : [filePath];
  });

if (!fs.existsSync(distDir)) {
  console.error('Brak katalogu dist. Najpierw uruchom pełny build strony.');
  process.exit(1);
}

const packageData = readJson('package.json');
const packageLock = readJson('package-lock.json');
const site = readJson('src/data/siteContent.json');
const publications = readJson('src/data/publications.json');
const publicationSummary = readJson('src/data/publication-summary.json');
const monographs = readJson('src/data/monographs.json');
const energyProjects = readJson('src/data/energyProjects.json');
const conferences = readJson('src/data/conferences.json');
const contact = readJson('src/data/contact.json');
const expectedVersion = '5.4.26';
const analysisSlugs = [
  'rezyliencja-miasta-inteligentnego',
  'model-4t-plus',
  'akceptacja-transformacji-energetycznej',
  'cyfrowe-blizniaki-transformacja-energetyczna',
];

addCheck(
  packageData.version === packageLock.version &&
    packageData.version === packageLock.packages?.['']?.version,
  `Wersja projektu jest spójna: ${packageData.version}.`,
  'Wersje w package.json i package-lock.json nie są spójne.'
);
addCheck(
  packageData.version === expectedVersion,
  `Audyt dotyczy oczekiwanej wersji ${expectedVersion}.`,
  `Oczekiwano wersji ${expectedVersion}, zapisano ${packageData.version}.`
);

const publicationMetric = Number(
  site.home.metrics.find((metric) => metric.label.includes('publikacji'))?.value
);
addCheck(
  publications.length === 66 &&
    publicationSummary.count === publications.length &&
    publicationMetric === publications.length,
  `Licznik publikacji jest spójny: ${publications.length}.`,
  `Niespójny licznik publikacji: baza ${publications.length}, podsumowanie ${publicationSummary.count}, strona główna ${publicationMetric}.`
);

const publicationNumbers = publications.map((publication) => Number(publication.lp));
addCheck(
  new Set(publicationNumbers).size === publications.length &&
    Math.min(...publicationNumbers) === 1 &&
    Math.max(...publicationNumbers) === publications.length,
  'Numeracja publikacji jest pełna i bez duplikatów.',
  'Numeracja publikacji zawiera lukę, duplikat albo wartość spoza zakresu.'
);

const postDoctoral = publications.filter((publication) => publication.period === 'po').length;
const preDoctoral = publications.filter((publication) => publication.period === 'przed').length;
addCheck(
  postDoctoral === 53 && preDoctoral === 13,
  `Podział publikacji jest spójny: ${postDoctoral} po doktoracie i ${preDoctoral} przed doktoratem.`,
  `Niespójny podział publikacji: ${postDoctoral} po doktoracie i ${preDoctoral} przed doktoratem.`
);

const incompletePublications = publications.filter(
  (publication) => !publication.title?.trim() || !publication.authors?.trim() || !publication.year
);
addCheck(
  incompletePublications.length === 0,
  'Każda publikacja ma tytuł, autorów i rok.',
  `Brakuje podstawowych danych w ${incompletePublications.length} publikacjach.`
);

const invalidDois = publications.filter(
  (publication) =>
    publication.doi?.trim() && !/^10\.\d{4,9}\/\S+$/i.test(publication.doi.trim())
);
addCheck(
  invalidDois.length === 0,
  'Wszystkie zapisane identyfikatory DOI mają poprawny format.',
  `Nieprawidłowy format DOI w publikacjach LP: ${invalidDois.map((item) => item.lp).join(', ')}.`
);

const monographCategoryCount = monographs.categories.reduce(
  (total, category) => total + Number(category.count || 0),
  0
);
addCheck(
  monographs.items.length === monographs.summary.total &&
    monographs.items.length === monographCategoryCount,
  `Licznik monografii jest spójny: ${monographs.items.length}.`,
  `Niespójny licznik monografii: baza ${monographs.items.length}, podsumowanie ${monographs.summary.total}, kategorie ${monographCategoryCount}.`
);

const energyProjectCount = energyProjects.organisations.reduce(
  (total, organisation) => total + organisation.projects.length,
  0
);
const declaredEnergyProjectCount = Number(
  energyProjects.metrics.find((metric) => metric.label.includes('programów'))?.value
);
addCheck(
  energyProjectCount === declaredEnergyProjectCount,
  `Licznik projektów energetycznych jest spójny: ${energyProjectCount}.`,
  `Niespójny licznik projektów energetycznych: baza ${energyProjectCount}, licznik ${declaredEnergyProjectCount}.`
);

addCheck(
  conferences.length === 40,
  `Baza wystąpień konferencyjnych zawiera ${conferences.length} pozycji.`,
  `Baza wystąpień konferencyjnych zawiera ${conferences.length} pozycji zamiast oczekiwanych 40.`
);

const contactText = JSON.stringify(contact);
addCheck(
  contactText.includes('gkinelski@wsb.edu.pl') &&
    contactText.includes('grzegorz@kinelski.pl'),
  'Oba ustalone kanały e-mail są zapisane w danych kontaktowych.',
  'Brakuje jednego z ustalonych adresów e-mail w danych kontaktowych.'
);

const htmlFiles = walk(distDir).filter((filePath) => filePath.endsWith('.html'));
const routeForFile = (filePath) => {
  const relative = path.relative(distDir, filePath).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative === '404.html') return '/404';
  return `/${relative.replace(/\/index\.html$/, '').replace(/\.html$/, '')}`;
};

const indexableFiles = htmlFiles.filter((filePath) => {
  const route = routeForFile(filePath);
  return route !== '/404' && route !== '/admin' && route !== '/monografia';
});

for (const filePath of indexableFiles) {
  const html = fs.readFileSync(filePath, 'utf8');
  const route = routeForFile(filePath);
  if (!/<title>[^<]+<\/title>/i.test(html)) errors.push(`${route}: brak tytułu strony.`);
  if (!/<meta[^>]+name="description"[^>]+content="[^"]+"/i.test(html))
    errors.push(`${route}: brak opisu meta.`);
  if (!/<link[^>]+rel="canonical"[^>]+href="https:\/\/kinelski\.pl\//i.test(html))
    errors.push(`${route}: brak poprawnego adresu canonical.`);
  if (
    route !== '/' &&
    !new RegExp(
      `<link[^>]+rel="canonical"[^>]+href="https:\\/\\/kinelski\\.pl${route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\/"`,
      'i'
    ).test(html)
  ) {
    errors.push(`${route}: canonical nie odpowiada końcowemu adresowi GitHub Pages z ukośnikiem.`);
  }
  if (!/<h1[\s>]/i.test(html)) errors.push(`${route}: brak nagłówka H1.`);
  if (!/<meta[^>]+property="og:image"[^>]+content="https:\/\/kinelski\.pl\//i.test(html))
    errors.push(`${route}: brak grafiki Open Graph.`);
  if (!/<meta[^>]+name="referrer"[^>]+content="strict-origin-when-cross-origin"/i.test(html))
    errors.push(`${route}: brak bezpiecznej polityki referrer.`);
  if (!html.includes('"@type":"WebPage"'))
    errors.push(`${route}: brak danych strukturalnych WebPage.`);
}
checks.push(`Metadane sprawdzono na ${indexableFiles.length} stronach indeksowanych.`);

const aboutPath = path.join(distDir, 'o-mnie', 'index.html');
if (fs.existsSync(aboutPath)) {
  const aboutHtml = fs.readFileSync(aboutPath, 'utf8');
  addCheck(
    aboutHtml.includes('"@type":"ProfilePage"') &&
      aboutHtml.includes('"propertyID":"ORCID"') &&
      aboutHtml.includes('"propertyID":"Web of Science ResearcherID"'),
    'Profil autora ma dane ProfilePage oraz stałe identyfikatory naukowe.',
    'Profil autora nie zawiera pełnych danych ProfilePage, ORCID i ResearcherID.'
  );
} else {
  errors.push('Brakuje zbudowanej strony /o-mnie.');
}

const homepagePath = path.join(distDir, 'index.html');
if (fs.existsSync(homepagePath)) {
  const homepageHtml = fs.readFileSync(homepagePath, 'utf8');
  addCheck(
    /<meta[^>]+name="google-site-verification"[^>]+content="[^"]+"/i.test(homepageHtml),
    'Strona główna zawiera znacznik weryfikacyjny Google Search Console.',
    'Strona główna nie zawiera znacznika weryfikacyjnego Google Search Console.'
  );
}

const internalTargets = new Set();
for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/gi)) {
    let target = match[1].trim();
    if (
      !target ||
      target.startsWith('#') ||
      target.startsWith('mailto:') ||
      target.startsWith('tel:') ||
      target.startsWith('data:') ||
      target.startsWith('blob:') ||
      target.startsWith('javascript:')
    ) {
      continue;
    }
    if (target.startsWith('https://kinelski.pl/')) {
      target = target.slice('https://kinelski.pl'.length);
    } else if (/^https?:\/\//i.test(target) || target.startsWith('//')) {
      continue;
    }
    if (!target.startsWith('/')) continue;
    target = decodeURIComponent(target.split('#')[0].split('?')[0]);
    if (target) internalTargets.add(target);
  }
}

const targetExists = (target) => {
  if (target === '/') return fs.existsSync(path.join(distDir, 'index.html'));
  const normalized = target.replace(/^\/+/, '').replace(/\/+$/, '');
  return (
    fs.existsSync(path.join(distDir, normalized)) ||
    fs.existsSync(path.join(distDir, `${normalized}.html`)) ||
    fs.existsSync(path.join(distDir, normalized, 'index.html'))
  );
};

for (const target of [...internalTargets].sort()) {
  if (!targetExists(target)) errors.push(`Nieistniejący odnośnik lub zasób lokalny: ${target}`);
}
checks.push(`Sprawdzono ${internalTargets.size} unikalnych odnośników i zasobów lokalnych.`);

const sitemapPath = path.join(distDir, 'sitemap-0.xml');
addCheck(
  fs.existsSync(sitemapPath),
  'Mapa strony została wygenerowana.',
  'Brakuje wygenerowanej mapy strony.'
);

if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  if (sitemap.includes('/admin') || sitemap.includes('/admin-data/') || sitemap.includes('/404')) {
    errors.push('Mapa strony zawiera techniczną lub wyłączoną z indeksowania trasę.');
  } else {
    checks.push('Mapa strony nie zawiera panelu ani tras technicznych.');
  }
  addCheck(
    sitemap.includes('https://kinelski.pl/bezpieczenstwo'),
    'Mapa strony zawiera publiczną stronę bezpieczeństwa.',
    'Mapa strony nie zawiera publicznej strony bezpieczeństwa.'
  );
  addCheck(
    sitemap.includes('https://kinelski.pl/analizy') &&
      analysisSlugs.every((slug) => sitemap.includes(`https://kinelski.pl/analizy/${slug}`)),
    'Mapa strony zawiera dział Analizy i cztery opracowania.',
    'Mapa strony nie zawiera kompletu nowych analiz.'
  );
}

for (const slug of analysisSlugs) {
  const analysisPath = path.join(distDir, 'analizy', slug, 'index.html');
  if (!fs.existsSync(analysisPath)) {
    errors.push(`Brakuje zbudowanej analizy /analizy/${slug}/.`);
    continue;
  }
  const analysisHtml = fs.readFileSync(analysisPath, 'utf8');
  if (!analysisHtml.includes('"@type":"ScholarlyArticle"')) {
    errors.push(`/analizy/${slug}/: brak danych strukturalnych ScholarlyArticle.`);
  }
  if (!analysisHtml.includes('Podstawa opracowania')) {
    errors.push(`/analizy/${slug}/: brak jawnej sekcji źródłowej.`);
  }
}
checks.push(`Sprawdzono ${analysisSlugs.length} autorskie analizy i ich dane strukturalne.`);

const securityPath = path.join(distDir, '.well-known', 'security.txt');
addCheck(
  fs.existsSync(securityPath),
  'Plik /.well-known/security.txt został opublikowany.',
  'Brakuje pliku /.well-known/security.txt.'
);
if (fs.existsSync(securityPath)) {
  const securityText = fs.readFileSync(securityPath, 'utf8');
  addCheck(
    /^Contact: mailto:grzegorz@kinelski\.pl$/m.test(securityText) &&
      /^Expires: \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/m.test(securityText) &&
      /^Canonical: https:\/\/kinelski\.pl\/\.well-known\/security\.txt$/m.test(securityText) &&
      /^Policy: https:\/\/kinelski\.pl\/bezpieczenstwo\/$/m.test(securityText),
    'security.txt zawiera kontakt, termin ważności, adres kanoniczny i politykę.',
    'security.txt nie zawiera wszystkich wymaganych pól.'
  );
}

const llmsPath = path.join(distDir, 'llms.txt');
addCheck(
  fs.existsSync(llmsPath) &&
    fs.readFileSync(llmsPath, 'utf8').includes('0000-0002-5768-463X') &&
    fs.readFileSync(llmsPath, 'utf8').includes('AAA-3088-2020'),
  'Maszynowy opis /llms.txt zawiera potwierdzone identyfikatory autora.',
  'Brakuje poprawnego pliku /llms.txt.'
);

const indexNowKey = '2c0026577a9f79ecf165ed8017bc0f71';
const indexNowKeyPath = path.join(distDir, `${indexNowKey}.txt`);
addCheck(
  fs.existsSync(indexNowKeyPath) &&
    fs.readFileSync(indexNowKeyPath, 'utf8').trim() === indexNowKey,
  'Plik weryfikacyjny IndexNow jest dostępny i spójny.',
  'Brakuje poprawnego pliku weryfikacyjnego IndexNow.'
);

for (const warning of warnings) console.warn(`UWAGA: ${warning}`);
for (const check of checks) console.log(`OK: ${check}`);

if (errors.length) {
  for (const error of errors) console.error(`BŁĄD: ${error}`);
  console.error(`\nAudyt zakończony: ${errors.length} błędów.`);
  process.exit(1);
}

console.log(`\nAudyt zakończony pomyślnie: ${checks.length} kontroli, 0 błędów.`);
