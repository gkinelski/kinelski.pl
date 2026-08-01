import fs from 'node:fs';
import path from 'node:path';

const root = fs.realpathSync(process.cwd());
const distDir = path.resolve(root, 'dist');

if (path.dirname(distDir) !== root || path.basename(distDir) !== 'dist') {
  throw new Error('Nieprawidłowa ścieżka katalogu produkcyjnego.');
}

if (!fs.existsSync(distDir) || !fs.statSync(distDir).isDirectory()) {
  throw new Error('Brak poprawnie zbudowanego katalogu dist.');
}

const privateTargets = [
  path.join(distDir, 'admin'),
  path.join(distDir, 'admin-data'),
  path.join(distDir, 'i18n-admin.js'),
];

for (const target of privateTargets) {
  const relative = path.relative(distDir, target);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`Odrzucono niebezpieczną ścieżkę: ${target}`);
  }
  fs.rmSync(target, { recursive: true, force: true });
}

const assetsDir = path.join(distDir, '_astro');
if (fs.existsSync(assetsDir)) {
  for (const entry of fs.readdirSync(assetsDir)) {
    if (/^admin\.[A-Za-z0-9_-]+\.css$/.test(entry)) {
      fs.rmSync(path.join(assetsDir, entry), { force: true });
    }
  }
}

console.log('Wersja produkcyjna nie zawiera panelu /admin ani danych /admin-data.');
