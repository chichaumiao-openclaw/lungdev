import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);

const requiredFiles = [
  'CNAME',
  'src/main.js',
  'src/theme.js',
  'src/modules.js',
  'src/data.js',
  'README.md',
  'dist/index.html',
  'dist/CNAME',
  'dist/singlecell-viewer/index.html'
];

for (const rel of requiredFiles) {
  const path = resolve(root, rel);
  if (!existsSync(path)) {
    console.error(`Missing required artifact: ${rel}`);
    process.exit(1);
  }
}

const themeSource = readFileSync(resolve(root, 'src/theme.js'), 'utf8');
const routerSource = readFileSync(resolve(root, 'src/router.js'), 'utf8');
const moduleSource = readFileSync(resolve(root, 'src/modules.js'), 'utf8');
const mainSource = readFileSync(resolve(root, 'src/main.js'), 'utf8');
const dataSource = readFileSync(resolve(root, 'src/data.js'), 'utf8');
const readmeSource = readFileSync(resolve(root, 'README.md'), 'utf8');
const rootCname = readFileSync(resolve(root, 'CNAME'), 'utf8').trim();
const distCname = readFileSync(resolve(root, 'dist/CNAME'), 'utf8').trim();
const expectedCustomDomain = 'lungdev.gznl.org';

if (rootCname !== expectedCustomDomain || distCname !== expectedCustomDomain) {
  console.error(`CNAME mismatch: expected ${expectedCustomDomain}, got root=${rootCname} dist=${distCname}`);
  process.exit(1);
}

const requiredThemes = ['lungdev', 'lunginf', 'lungcancer', 'lungevo'];
for (const theme of requiredThemes) {
  if (!themeSource.includes(`${theme}:`)) {
    console.error(`Missing required theme token: ${theme}`);
    process.exit(1);
  }
}

const requiredRoutes = ['home', 'atlas', 'lineages', 'markers', 'datasets', 'about'];
for (const route of requiredRoutes) {
  if (!routerSource.includes(`'${route}'`) && !routerSource.includes(`"${route}"`)) {
    console.error(`Missing required lungdev route: ${route}`);
    process.exit(1);
  }
}

const requiredModules = [
  'LD-HERO-001',
  'LD-STAGE-001',
  'LD-ATLAS-001',
  'LD-UMAP-001',
  'LD-LINEAGE-001',
  'LD-MARKER-001',
  'LD-DATASET-001',
  'LD-BRIDGE-001',
  'LD-PORTFOLIO-001'
];
for (const moduleId of requiredModules) {
  if (!moduleSource.includes(moduleId)) {
    console.error(`Missing required lungdev module: ${moduleId}`);
    process.exit(1);
  }
}

const requiredTerms = ['lungdev', 'Lung Development Atlas', 'Development-first MVP'];
for (const term of requiredTerms) {
  if (!`${mainSource}\n${dataSource}\n${readmeSource}`.includes(term)) {
    console.error(`Missing required program term: ${term}`);
    process.exit(1);
  }
}

const requiredBundleTerms = ['bundle-switcher', 'nav-menu-toggle', 'githubPagesUrl', 'customDomain'];
for (const term of requiredBundleTerms) {
  if (!`${mainSource}\n${dataSource}`.includes(term)) {
    console.error(`Missing required bundle term: ${term}`);
    process.exit(1);
  }
}

const blockedLegacyTerms = ['Aptamer', 'RiboCentre', 'Riboswitch'];
for (const legacyTerm of blockedLegacyTerms) {
  if (`${mainSource}\n${moduleSource}\n${dataSource}`.includes(legacyTerm)) {
    console.error(`Legacy template term still present: ${legacyTerm}`);
    process.exit(1);
  }
}

console.log('MVP regression guard passed: lungdev routes, bundle shell, CNAME, modules, themes, README, and build artifacts are present.');
