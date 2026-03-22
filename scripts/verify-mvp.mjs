import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);

const requiredFiles = [
  'src/main.js',
  'src/theme.js',
  'src/modules.js',
  'src/site-content.js',
  'src/router.js',
  'dist/index.html'
];

for (const rel of requiredFiles) {
  const p = resolve(root, rel);
  if (!existsSync(p)) {
    console.error(`Missing required artifact: ${rel}`);
    process.exit(1);
  }
}

const pageSource = readFileSync(resolve(root, 'src/main.js'), 'utf8');
const contentSource = readFileSync(resolve(root, 'src/site-content.js'), 'utf8');
const distSource = readFileSync(resolve(root, 'dist/index.html'), 'utf8');

const requiredRoutes = ['home', 'atlas', 'lineages', 'markers', 'datasets', 'about'];
for (const route of requiredRoutes) {
  const routeRegex = new RegExp(`['\"]${route}['\"]`, 'i');
  if (!routeRegex.test(pageSource) && !routeRegex.test(contentSource)) {
    console.error(`Missing required lungdev route/content for: ${route}`);
    process.exit(1);
  }
}

const requiredContent = ['LungDev', 'Development Atlas', 'Lineage Programs', 'Marker Programs', 'Datasets'];
for (const token of requiredContent) {
  if (!pageSource.includes(token) && !contentSource.includes(token) && !distSource.includes(token)) {
    console.error(`Missing required lungdev content token: ${token}`);
    process.exit(1);
  }
}

console.log('LungDev MVP verification passed.');
