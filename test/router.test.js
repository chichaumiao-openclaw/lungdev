import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeRoute, routeFromHash } from '../src/router.js';

test('normalizeRoute accepts supported lungdev routes only', () => {
  assert.equal(normalizeRoute('HOME'), 'home');
  assert.equal(normalizeRoute('atlas'), 'atlas');
  assert.equal(normalizeRoute('LINEAGES'), 'lineages');
  assert.equal(normalizeRoute('markers'), 'markers');
  assert.equal(normalizeRoute('datasets'), 'datasets');
  assert.equal(normalizeRoute('about'), 'about');
  assert.equal(normalizeRoute('unknown'), 'home');
});

test('routeFromHash parses lungdev hash routes safely', () => {
  assert.equal(routeFromHash('#atlas'), 'atlas');
  assert.equal(routeFromHash('#LINEAGES'), 'lineages');
  assert.equal(routeFromHash('#datasets'), 'datasets');
  assert.equal(routeFromHash(''), 'home');
  assert.equal(routeFromHash('#not-a-route'), 'home');
});
