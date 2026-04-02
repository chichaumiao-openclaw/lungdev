import {
  atlasViews,
  coreQuestions,
  databasePortfolio,
  datasetReleases,
  evidenceHighlights,
  heroMetrics,
  launchChecklist,
  lineageTracks,
  markerCatalog,
  markerSearchSuggestions,
  metadataPriorities,
  methodsResources,
  provenanceHistory,
  routeCopy,
  scopeBoundaries,
  siteMeta,
  stageTimeline,
  targetUsers
} from './data.js';

function renderChipList(items) {
  return `<div class="chip-row">${items.map((item) => `<span class="chip">${item}</span>`).join('')}</div>`;
}

function renderSectionHead(kicker, title, description) {
  return `<div class="section-head">
    <p class="eyebrow">${kicker}</p>
    <h2>${title}</h2>
    <p>${description}</p>
  </div>`;
}

function getSingleCellViewerUrl() {
  if (typeof window === 'undefined') return './singlecell-viewer/';
  const pathname = window.location.pathname || '';
  if (pathname.includes('/dist/') || pathname.endsWith('/dist') || pathname.endsWith('/dist/index.html')) {
    return './singlecell-viewer/';
  }
  return './singlecell-viewer/dist/';
}

function viewerUrlForConfig(stageId, mode = 'light') {
  const baseUrl = getSingleCellViewerUrl();
  const url = new URL(baseUrl, typeof window === 'undefined' ? 'http://localhost' : window.location.href);
  if (stageId) url.searchParams.set('stage', stageId);
  url.searchParams.set('mode', mode === 'dark' ? 'dark' : 'light');
  if (typeof window === 'undefined') {
    return `${url.pathname}${url.search}`;
  }
  return `${url.pathname}${url.search}`;
}

function renderMarkerResults(items, options = {}) {
  const limit = Number(options.limit || 0);
  const visible = limit > 0 ? items.slice(0, limit) : items;

  if (!visible.length) {
    return `<div class="empty-state">No marker genes match the current search.</div>`;
  }

  return visible
    .map(
      (marker) => `<article class="marker-card">
        <div class="marker-head">
          <strong>${marker.gene}</strong>
          <span>${marker.stage}</span>
        </div>
        <p>${marker.role}</p>
        <div class="marker-meta">${marker.compartment} · ${marker.lineage}</div>
        <p class="marker-summary">${marker.summary}</p>
      </article>`
    )
    .join('');
}

export function renderHeroSection() {
  return `<section class="hero-shell card" id="LD-HERO-001">
    <div class="hero-copy">
      <p class="eyebrow">Four Lung Databases Prototype</p>
      <h1>${siteMeta.title}</h1>
      <p class="hero-strap">${siteMeta.strapline}</p>
      <p>${siteMeta.heroIntro}</p>
      <div class="action-row">
        <button type="button" data-route="atlas">Browse the atlas</button>
        <button type="button" class="ghost" data-route="markers">Open marker search</button>
      </div>
    </div>
    <div class="hero-side">
      <div class="release-panel">
        <span>Current build</span>
        <strong>${siteMeta.release}</strong>
        <p>${siteMeta.coverage}</p>
      </div>
      <div class="metric-grid">
        ${heroMetrics
          .map(
            (metric) => `<article class="metric-card">
              <span>${metric.label}</span>
              <strong>${metric.value}</strong>
              <p>${metric.detail}</p>
            </article>`
          )
          .join('')}
      </div>
    </div>
    <div class="timeline-ribbon">
      ${stageTimeline
        .map(
          (stage) => `<article class="timeline-stop">
            <span>${String(stage.rank).padStart(2, '0')}</span>
            <strong>${stage.label}</strong>
            <p>${stage.window}</p>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderStageOverviewSection() {
  return `<section class="section-block" id="LD-STAGE-001">
    ${renderSectionHead(
      'Developmental stages',
      'A stage-resolved scaffold from fetal lung to mature adult',
      'Each stage card anchors a distinct developmental question, dominant compartments, and biological emphasis.'
    )}
    <div class="stage-grid">
      ${stageTimeline
        .map(
          (stage) => `<article class="stage-card card">
            <div class="stage-meta">
              <span>${String(stage.rank).padStart(2, '0')}</span>
              <p>${stage.window}</p>
            </div>
            <h3>${stage.label}</h3>
            <p class="stage-headline">${stage.headline}</p>
            <p>${stage.summary}</p>
            ${renderChipList(stage.compartments)}
            <p class="stage-question">${stage.question}</p>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderAtlasOverviewSection() {
  return `<section class="section-block" id="LD-ATLAS-001">
    ${renderSectionHead(
      'Atlas lenses',
      'Core developmental views for the MVP atlas',
      'The atlas page is organized around stage-aware biological questions rather than a generic dataset table.'
    )}
    <div class="atlas-grid">
      ${atlasViews
        .map(
          (view) => `<article class="atlas-card card">
            <span>${view.stage}</span>
            <h3>${view.title}</h3>
            <p>${view.summary}</p>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderAtlasViewerSection(selectedStage = 'embryonic', mode = 'light') {
  const viewerUrl = viewerUrlForConfig(selectedStage, mode);

  return `<section class="section-block" id="LD-UMAP-001">
    <article class="card atlas-viewer-card atlas-viewer-wide">
      <div class="atlas-viewer-head">
        <div>
          <p class="eyebrow">Single-cell viewer</p>
          <h2>UMAP-first atlas exploration</h2>
          <p>The atlas page is centered on the embedded single-cell viewer. Developmental-stage controls now live inside the viewer so the embedding can stay wide and visually primary.</p>
        </div>
        <a class="atlas-link" href="${viewerUrl}" target="_blank" rel="noopener noreferrer">Open viewer in new tab</a>
      </div>
      <iframe
        title="lungdev single-cell UMAP viewer"
        src="${viewerUrl}"
        class="atlas-viewer-frame"
        loading="lazy"
      ></iframe>
      <p class="atlas-note">If the panel is blank, build the viewer in <code>singlecell-viewer/</code> and then rerun the top-level build.</p>
    </article>
  </section>`;
}

export function renderLineageSection(options = {}) {
  const compact = Boolean(options.compact);
  const tracks = compact ? lineageTracks.slice(0, 3) : lineageTracks;

  return `<section class="section-block" id="LD-LINEAGE-001">
    ${renderSectionHead(
      'Lineage explorer',
      'Trajectory stories that connect progenitor states to mature compartments',
      'Lineage cards define the developmental logic behind the atlas and highlight which marker genes anchor each transition.'
    )}
    <div class="lineage-grid ${compact ? 'compact' : ''}">
      ${tracks
        .map(
          (track) => `<article class="lineage-card card">
            <p class="lineage-label">${track.start}</p>
            <h3>${track.name}</h3>
            <p>${track.transition}</p>
            ${renderChipList(track.anchors)}
            <p class="lineage-insight">${track.insight}</p>
          </article>`
        )
        .join('')}
    </div>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="lineages">View all lineage tracks</button></div>`
        : ''
    }
  </section>`;
}

export function renderMarkerSection(options = {}) {
  const compact = Boolean(options.compact);
  const limit = compact ? 4 : markerCatalog.length;

  return `<section class="section-block" id="LD-MARKER-001">
    ${renderSectionHead(
      'Marker spotlight',
      'Search marker genes by stage, lineage, and compartment',
      'The MVP gene panel is designed for developmental interpretation, not exhaustive marker coverage.'
    )}
    <div class="card marker-search-panel" data-marker-search-root data-limit="${limit}">
      <div class="search-controls">
        <input
          type="text"
          class="search-input"
          data-marker-search
          placeholder="Search genes, stages, lineages, or compartments"
          aria-label="Search marker genes"
        />
        <button type="button" class="ghost" data-marker-reset>Reset</button>
      </div>
      <div class="chip-row">
        ${markerSearchSuggestions
          .map((gene) => `<button type="button" class="chip chip-button" data-marker-suggestion="${gene}">${gene}</button>`)
          .join('')}
      </div>
      <div class="marker-results" data-marker-results>${renderMarkerResults(markerCatalog, { limit })}</div>
    </div>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="markers">Open full marker catalog</button></div>`
        : ''
    }
  </section>`;
}

export function renderDatasetSection(options = {}) {
  const compact = Boolean(options.compact);
  const visibleDatasets = compact ? datasetReleases.slice(0, 3) : datasetReleases;

  return `<section class="section-block" id="LD-DATASET-001">
    ${renderSectionHead(
      'Datasets and releases',
      'Prototype releases anchored to developmental scope',
      'Each release row states the developmental window, assay footprint, and current prototype confidence level.'
    )}
    <article class="card data-table-card">
      <div class="table-card-head">
        <div>
          <h3>Dataset release table</h3>
          <p>${compact ? `Showing ${visibleDatasets.length} of ${datasetReleases.length} current prototype releases.` : `Showing all ${datasetReleases.length} current prototype releases.`}</p>
        </div>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dataset</th>
              <th>Coverage</th>
              <th>Cells</th>
              <th>Assays</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            ${visibleDatasets
              .map(
                (dataset) => `<tr>
                  <td>${dataset.id}</td>
                  <td><strong>${dataset.title}</strong></td>
                  <td>${dataset.coverage}</td>
                  <td>${dataset.cells}</td>
                  <td>${dataset.assays}</td>
                  <td><span class="table-status">${dataset.status}</span></td>
                  <td>${dataset.note}</td>
                </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>
    </article>
    ${
      compact
        ? `<div class="section-action"><button type="button" class="ghost" data-route="datasets">Open full dataset table</button></div>`
        : ''
    }
  </section>`;
}

export function renderEvidenceSection() {
  return `<section class="section-block" id="LD-EVIDENCE-001">
    ${renderSectionHead(
      'Evidence and provenance',
      'Make MVP scope explicit before deeper data integration',
      'The current prototype favors transparent staging, route logic, and release framing over synthetic completeness.'
    )}
    <div class="evidence-grid">
      <article class="card">
        <h3>Current evidence rails</h3>
        <div class="metric-grid">
          ${evidenceHighlights
            .map(
              (item) => `<article class="metric-card">
                <span>${item.label}</span>
                <strong>${item.value}</strong>
                <p>${item.detail}</p>
              </article>`
            )
            .join('')}
        </div>
      </article>
      <article class="card">
        <h3>Provenance timeline</h3>
        <ol class="timeline-list">
          ${provenanceHistory.map((item) => `<li>${item}</li>`).join('')}
        </ol>
      </article>
      <article class="card">
        <h3>Methods and resources</h3>
        <ul class="key-list">
          ${methodsResources.map((item) => `<li><strong>${item.title}:</strong> ${item.detail}</li>`).join('')}
        </ul>
      </article>
    </div>
  </section>`;
}

export function renderPortfolioSection() {
  const relatedSites = databasePortfolio.filter((site) => site.id !== siteMeta.siteId);

  return `<section class="section-block" id="LD-PORTFOLIO-001">
    ${renderSectionHead(
      'Portfolio context',
      'lungdev is one axis of a four-database system',
      'The technical base can be shared, but the scientific mission, filters, and question framing must remain distinct.'
    )}
    <div class="portfolio-grid">
      ${relatedSites
        .map(
          (site) => `<article class="portfolio-card card">
            <span>${site.axis}</span>
            <h3>${site.label}</h3>
            <p>${site.summary}</p>
            <strong>${site.status}</strong>
          </article>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderPageBanner(routeId) {
  const copy = routeCopy[routeId];

  return `<section class="page-banner card">
    <p class="eyebrow">${copy.eyebrow}</p>
    <h1>${copy.title}</h1>
    <p>${copy.description}</p>
  </section>`;
}

export function renderHomePage() {
  return `<main class="page-shell page-home">
    ${renderHeroSection()}
    ${renderStageOverviewSection()}
    ${renderAtlasOverviewSection()}
    ${renderLineageSection({ compact: true })}
    ${renderMarkerSection({ compact: true })}
    ${renderDatasetSection({ compact: true })}
    ${renderPortfolioSection()}
  </main>`;
}

export function renderAtlasPage(selectedStage = 'embryonic', mode = 'light') {
  return `<main class="page-shell">
    ${renderPageBanner('atlas')}
    ${renderAtlasViewerSection(selectedStage, mode)}
    ${renderAtlasOverviewSection()}
    ${renderStageOverviewSection()}
    ${renderEvidenceSection()}
  </main>`;
}

export function renderLineagesPage() {
  return `<main class="page-shell">
    ${renderPageBanner('lineages')}
    ${renderLineageSection()}
    <section class="section-block card" id="LD-QUESTION-001">
      ${renderSectionHead(
        'Core developmental questions',
        'Trajectory pages should answer concrete biological questions',
        'The lineages page exists to connect developmental ordering to interpretable maturation logic.'
      )}
      <ul class="key-list">
        ${coreQuestions.map((question) => `<li>${question}</li>`).join('')}
      </ul>
    </section>
  </main>`;
}

export function renderMarkersPage() {
  return `<main class="page-shell">
    ${renderPageBanner('markers')}
    ${renderMarkerSection()}
    <section class="section-block card" id="LD-META-001">
      ${renderSectionHead(
        'Metadata priorities',
        'Marker interpretation needs explicit metadata dimensions',
        'These fields drive the MVP marker views and later atlas filtering.'
      )}
      ${renderChipList(metadataPriorities)}
    </section>
  </main>`;
}

export function renderDatasetsPage() {
  return `<main class="page-shell">
    ${renderPageBanner('datasets')}
    ${renderDatasetSection()}
    ${renderEvidenceSection()}
  </main>`;
}

export function renderAboutPage() {
  return `<main class="page-shell">
    ${renderPageBanner('about')}
    <section class="split-grid">
      <article class="card">
        <h2>Scientific mission</h2>
        <p>${siteMeta.mission}</p>
        <p>${siteMeta.focus}</p>
      </article>
      <article class="card">
        <h2>Target users</h2>
        <ul class="key-list">
          ${targetUsers.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
      <article class="card">
        <h2>Scope boundaries</h2>
        <ul class="key-list">
          ${scopeBoundaries.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
      <article class="card">
        <h2>Launch checklist</h2>
        <ul class="key-list">
          ${launchChecklist.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
    </section>
    ${renderPortfolioSection()}
  </main>`;
}

function markerMatches(marker, query) {
  const haystack = [
    marker.gene,
    marker.compartment,
    marker.stage,
    marker.lineage,
    marker.role,
    marker.summary
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

export function initMarkerSearch() {
  const roots = document.querySelectorAll('[data-marker-search-root]');

  roots.forEach((root) => {
    if (root.dataset.bound === 'true') return;

    const input = root.querySelector('[data-marker-search]');
    const results = root.querySelector('[data-marker-results]');
    const reset = root.querySelector('[data-marker-reset]');
    const suggestionButtons = root.querySelectorAll('[data-marker-suggestion]');
    const limit = Number(root.dataset.limit || '0');

    if (!input || !results) return;

    function update(query = input.value.trim()) {
      const matches = query ? markerCatalog.filter((marker) => markerMatches(marker, query)) : markerCatalog;
      results.innerHTML = renderMarkerResults(matches, { limit });
    }

    input.addEventListener('input', () => update());
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        update();
      }
    });

    reset?.addEventListener('click', () => {
      input.value = '';
      update('');
    });

    suggestionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        input.value = button.dataset.markerSuggestion || '';
        update(input.value);
      });
    });

    update();
    root.dataset.bound = 'true';
  });
}
