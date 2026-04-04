import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DATA_VERSION,
  DETERMINISTIC_SEED,
  bundleCrossLinks,
  databasePortfolio,
  datasetReleases,
  markerCatalog,
  navigationItems,
  provenanceHistory,
  siteMeta,
  stageTimeline
} from '../src/data.js';

test('portfolio exposes the four orthogonal lung database axes', () => {
  assert.equal(databasePortfolio.length, 4);
  assert.deepEqual(
    databasePortfolio.map((site) => site.id),
    ['lungdev', 'lunginf', 'lungcancer', 'lungevo']
  );
  assert.ok(
    databasePortfolio.every(
      (site) => /^https:\/\/chichaumiao-openclaw\.github\.io\/lung/.test(site.url) && /\.gznl\.org$/.test(site.customDomain)
    )
  );
});

test('lungdev navigation uses the planned MVP routes', () => {
  assert.deepEqual(
    navigationItems.map((item) => item.id),
    ['home', 'atlas', 'lineages', 'markers', 'datasets', 'about']
  );
});

test('stage timeline is ordered from early fetal to adult', () => {
  assert.equal(stageTimeline.length, 5);
  assert.deepEqual(stageTimeline.map((stage) => stage.rank), [1, 2, 3, 4, 5]);
  assert.equal(stageTimeline[0].label, 'Early fetal');
  assert.equal(stageTimeline.at(-1).label, 'Adult');
});

test('marker catalog exposes developmental context for each gene', () => {
  assert.ok(markerCatalog.length >= 8);
  assert.ok(
    markerCatalog.every(
      (marker) => marker.gene && marker.compartment && marker.stage && marker.lineage && marker.summary
    )
  );
});

test('dataset releases describe scope, assay, and scale', () => {
  assert.ok(datasetReleases.every((dataset) => dataset.id && dataset.coverage && dataset.assays && dataset.cells));
});

test('site metadata identifies the lungdev workspace', () => {
  assert.equal(siteMeta.siteId, 'lungdev');
  assert.equal(siteMeta.defaultTheme, 'lungdev');
  assert.equal(siteMeta.githubPagesUrl, 'https://chichaumiao-openclaw.github.io/lungdev/');
  assert.equal(siteMeta.customDomain, 'lungdev.gznl.org');
});

test('bundle cross-links cover the route-level development entry points', () => {
  assert.deepEqual(Object.keys(bundleCrossLinks), ['home', 'atlas', 'lineages', 'markers', 'datasets', 'about']);
  assert.ok(bundleCrossLinks.atlas.some((link) => link.siteId === 'lungevo' && link.route === 'species'));
  assert.ok(bundleCrossLinks.markers.some((link) => link.siteId === 'lungcancer' && link.route === 'biomarkers'));
});

test('provenance history is chronological', () => {
  const dates = provenanceHistory.map((event) => event.slice(0, 10));
  const sorted = [...dates].sort();
  assert.deepEqual(dates, sorted);
});

test('data versioning metadata is present for reproducibility', () => {
  assert.match(DATA_VERSION, /^\d{4}-\d{2}-\d{2}\./);
  assert.equal(DETERMINISTIC_SEED, 20260331);
});
