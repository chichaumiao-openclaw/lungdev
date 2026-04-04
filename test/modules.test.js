import test from 'node:test';
import assert from 'node:assert/strict';
import { renderAtlasPage, renderDatasetsPage, renderHomePage, renderMarkersPage } from '../src/modules.js';

test('home page includes the core lungdev MVP modules', () => {
  const html = renderHomePage();
  const requiredIds = [
    'LD-HERO-001',
    'LD-STAGE-001',
    'LD-ATLAS-001',
    'LD-LINEAGE-001',
    'LD-MARKER-001',
    'LD-DATASET-001',
    'LD-BRIDGE-001',
    'LD-PORTFOLIO-001'
  ];

  for (const id of requiredIds) {
    assert.ok(html.includes(id), `missing module: ${id}`);
  }

  assert.match(html, /Lung Development Atlas/);
  assert.match(html, /early fetal stages to mature adulthood/i);
  assert.match(html, /Four Lung Database Bundle/);
  assert.match(html, /Browse the atlas/);
  assert.match(html, /https:\/\/chichaumiao-openclaw\.github\.io\/lunginf\/#conditions/);
});

test('markers page exposes searchable gene spotlight UI', () => {
  const html = renderMarkersPage();

  assert.match(html, /Search marker genes by stage, lineage, and compartment/);
  assert.match(html, /data-marker-search-root/);
  assert.match(html, /SOX9/);
  assert.match(html, /SFTPC/);
});

test('datasets page includes evidence and provenance rails', () => {
  const html = renderDatasetsPage();

  assert.match(html, /LD-EVIDENCE-001/);
  assert.match(html, /LD-BRIDGE-001/);
  assert.match(html, /Dataset release table/);
  assert.match(html, /Human fetal-to-adult reference integration/);
  assert.match(html, /<table class="data-table">/);
  assert.match(html, /Provenance timeline/);
});

test('atlas page centers on the embedded single-cell viewer', () => {
  const html = renderAtlasPage('canalicular', 'dark');

  assert.match(html, /LD-UMAP-001/);
  assert.match(html, /UMAP-first atlas exploration/);
  assert.match(html, /singlecell-viewer/);
  assert.match(html, /iframe/);
  assert.match(html, /stage=canalicular/);
  assert.match(html, /mode=dark/);
  assert.match(html, /Follow complementary routes across the four lung databases/);
});
