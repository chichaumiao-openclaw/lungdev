import {
  atlasViews,
  otherAtlasViews,
  bundleCrossLinks,
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

function bundleSiteById(siteId) {
  return databasePortfolio.find((site) => site.id === siteId);
}

function bundleHref(siteId, route = 'home') {
  const site = bundleSiteById(siteId);
  if (!site) return '#';
  return route ? `${site.url}#${route}` : site.url;
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
      <p class="eyebrow">Four Lung Database Bundle</p>
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
            <strong>${stage.label}</strong>
            <p>${stage.window.replace(/\n/g, '<br>')}</p>
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
          (stage) => {
            return `<article class="stage-card structured card">
              <div class="card-inner">

                <div class="stage-header">
                  <div>
                    <p class="stage-label">${stage.label}</p>
                  </div>
                  <p class="stage-window">${stage.window.replace(/\n/g, '<br>')}</p>
                </div>

                <div class="section-block section-emphasis">
                  <p class="stage-section-header">Biological Emphasis</p>
                  <div class="section-body">
                    <p class="stage-bio-headline">${stage.headline}</p>
                    <p class="stage-bio-summary">${stage.summary}</p>
                    ${stage.biologicalEvents ? `
                      <button class="stage-inline-expand" data-target="bio-events-${stage.rank}">
                        Other Events <span class="expand-arrow">&#9654;</span>
                      </button>
                      <div class="stage-expand-content" id="bio-events-${stage.rank}">${stage.biologicalEvents}</div>
                    ` : ''}
                  </div>
                </div>

                <div class="section-block section-compartments">
                  <p class="stage-section-header">Dominant Compartments</p>
                  <div class="section-body">
                    ${renderChipList(stage.compartments)}
                    ${stage.cellInteractions ? `
                      <button class="stage-inline-expand" data-target="cell-interactions-${stage.rank}">
                        Cell-Cell Interactions <span class="expand-arrow">&#9654;</span>
                      </button>
                      <div class="stage-expand-content" id="cell-interactions-${stage.rank}">${stage.cellInteractions}</div>
                    ` : ''}
                  </div>
                </div>

                <div class="section-block section-question">
                  <p class="stage-section-header">Developmental Question</p>
                  <div class="section-body">
                    <p class="stage-question">${stage.question}</p>
                    ${stage.moreQuestions ? `
                      <button class="stage-inline-expand" data-target="more-questions-${stage.rank}">
                        More Questions <span class="expand-arrow">&#9654;</span>
                      </button>
                      <div class="stage-expand-content" id="more-questions-${stage.rank}">${stage.moreQuestions}</div>
                    ` : ''}
                  </div>
                </div>

              </div>
            </article>`;
          }
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

    <button
      type="button"
      class="atlas-extended-trigger"
      id="atlas-extended-toggle"
      aria-expanded="false"
      aria-controls="atlas-extended-drawer"
    >
      <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="3 6 8 11 13 6"/>
      </svg>
      Peripheral biological themes
    </button>

    <div class="atlas-extended-drawer" id="atlas-extended-drawer" role="region" aria-label="Extended developmental views">
      <div class="atlas-extended-drawer-inner">
        <div class="atlas-grid">
          ${otherAtlasViews
            .map(
              (view) => `<article class="atlas-card card">
                <span>${view.stage}</span>
                <h3>${view.title}</h3>
                <p>${view.summary}</p>
              </article>`
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>`;
}

export function renderAtlasViewerSection(selectedStage = 'fetal', mode = 'light') {
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
            ${track.tag ? `<span class="lineage-tag">${track.tag}</span>` : ''}
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
      'Releases anchored to developmental scope',
      'Each release row states the developmental window, assay footprint, and current confidence level.'
    )}
    <article class="card data-table-card">
      <div class="table-card-head">
        <div>
          <h3>Dataset release table</h3>
          <p>${compact ? `Showing ${visibleDatasets.length} of ${datasetReleases.length} current releases.` : `Showing all ${datasetReleases.length} current releases.`}</p>
        </div>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Stage</th>
              <th>Assays</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            ${visibleDatasets
              .map(
                (dataset) => `<tr class="dataset-row" data-dataset-id="${dataset.id}" style="cursor: pointer;">
                  <td>${dataset.id}</td>
                  <td><span class="stage-tag">${dataset.stage}</span></td>
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

export function renderDatasetDetailPage(datasetId) {
  const dataset = datasetReleases.find((d) => d.id === datasetId);
  
  if (!dataset) {
    return `<main class="page-shell">
      <section class="page-banner card">
        <p class="eyebrow">Dataset not found</p>
        <h1>Unknown Dataset</h1>
        <p>The requested dataset ID "${datasetId}" could not be found.</p>
      </section>
    </main>`;
  }

  // Dataset metadata based on ID
  const datasetMeta = {
    'LD-DS-001': {
      eyebrow: 'FULL SPECTRUM',
      title: 'Lung Development Atlas',
      description: 'Integrated single-cell atlas covering all lung developmental stages. Browse, filter, and download single-cell data spanning fetal, neonatal, pediatric, and adult stages.'
    }
  };

  const meta = datasetMeta[datasetId] || {
    eyebrow: dataset.stage.toUpperCase(),
    title: `${dataset.stage} Lung Dataset`,
    description: dataset.note
  };

  return `<main class="page-shell">
    <section class="page-banner card dataset-detail-banner">
      <p class="eyebrow">${meta.eyebrow} • ${dataset.id}</p>
      <h1>${meta.title}</h1>
      <p>${meta.description}</p>
    </section>

    <section class="section-block">
      <article class="card data-download-card">
        <div class="download-card-wrapper">
          <div class="download-table-controls">
            <input
              type="text"
              class="download-search-input"
              data-download-search
              placeholder="Search across all columns..."
              aria-label="Search dataset table"
            />
            <button type="button" class="ghost download-reset-btn" data-download-reset>Reset all filters</button>
          </div>
          <div class="table-container">
            <table class="data-table download-table" data-download-table>
              <thead>
                <tr>
                  <th>NUMBER <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="0"></th>
                  <th>SPECIES <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="1"></th>
                  <th>ATLAS <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="2"></th>
                  <th>TISSUE <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="3"></th>
                  <th>STATUS <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="4"></th>
                  <th>PLATFORM <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="5"></th>
                  <th>SEQ-TYPE <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="6"></th>
                  <th>YEAR <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="7"></th>
                  <th>ACCESSION <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="8"></th>
                  <th>link <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="9"></th>
                  <th>DATASETS <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="10"></th>
                  <th>DOI <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="11"></th>
                  <th>share</th>
                </tr>
              </thead>
              <tbody data-download-tbody>
                <!-- Data will be populated dynamically -->
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </section>
  </main>`;
}

export function renderEvidenceSection() {
  return `<section class="section-block" id="LD-EVIDENCE-001">
    ${renderSectionHead(
      'Evidence and provenance',
      'Make MVP scope explicit before deeper data integration',
      'The current approach favors transparent staging, route logic, and release framing over synthetic completeness.'
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
          (site) => `<a class="portfolio-card card" href="${bundleHref(site.id)}">
            <span>${site.axis}</span>
            <h3>${site.label}</h3>
            <p>${site.summary}</p>
            <strong>${site.status}</strong>
            <small>${site.customDomain}</small>
          </a>`
        )
        .join('')}
    </div>
  </section>`;
}

export function renderBundleBridgeSection(routeId, moduleId = 'LD-BRIDGE-001') {
  const links = bundleCrossLinks[routeId] ?? [];

  if (!links.length) return '';

  return `<section class="section-block" id="${moduleId}">
    ${renderSectionHead(
      'Bundle links',
      'Follow complementary routes across the four lung databases',
      'This page is cross-linked to the other portals so developmental questions can stay connected to infection, cancer, and evolution views.'
    )}
    <div class="bundle-bridge-grid">
      ${links
        .map((link) => {
          const site = bundleSiteById(link.siteId);
          if (!site) return '';
          return `<a class="bundle-bridge-card card" href="${bundleHref(link.siteId, link.route)}">
            <span>${site.axis} · ${site.label}</span>
            <h3>${link.title}</h3>
            <p>${link.summary}</p>
            <strong>${site.customDomain}</strong>
          </a>`;
        })
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
    ${renderBundleBridgeSection('home')}
    ${renderPortfolioSection()}
  </main>`;
}

export function renderAtlasPage(selectedStage = 'fetal', mode = 'light') {
  return `<main class="page-shell">
    ${renderPageBanner('atlas')}
    ${renderAtlasViewerSection(selectedStage, mode)}
    ${renderAtlasOverviewSection()}
    ${renderStageOverviewSection()}
    ${renderBundleBridgeSection('atlas')}
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
    ${renderBundleBridgeSection('lineages')}
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
    ${renderBundleBridgeSection('markers')}
  </main>`;
}

export function renderDatasetsPage() {
  return `<main class="page-shell">
    ${renderPageBanner('datasets')}
    ${renderDatasetSection()}
    ${renderEvidenceSection()}
    ${renderBundleBridgeSection('datasets')}
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
    ${renderBundleBridgeSection('about')}
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
