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

addCheck(
  packageData.version === packageLock.version &&
    packageData.version === packageLock.packages?.['']?.version,
  `Wersja projektu jest spójna: ${packageData.version}.`,
  'Wersje w package.json i package-lock.json nie są spójne.'
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
  if (!/<h1[\s>]/i.test(html)) errors.push(`${route}: brak nagłówka H1.`);
  if (!/<meta[^>]+property="og:image"[^>]+content="https:\/\/kinelski\.pl\//i.test(html))
    errors.push(`${route}: brak grafiki Open Graph.`);
}
checks.push(`Metadane sprawdzono na ${indexableFiles.length} stronach indeksowanych.`);

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
}

for (const warning of warnings) console.warn(`UWAGA: ${warning}`);
for (const check of checks) console.log(`OK: ${check}`);

if (errors.length) {
  for (const error of errors) console.error(`BŁĄD: ${error}`);
  console.error(`\nAudyt zakończony: ${errors.length} błędów.`);
  process.exit(1);
}

console.log(`\nAudyt zakończony pomyślnie: ${checks.length} kontroli, 0 błędów.`);
