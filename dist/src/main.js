import { cssVarsFor } from './theme.js';
import { columnConfig, downloadRows } from './lungdev_download_data.js';
import {
  renderAboutPage,
  renderAtlasPage,
  renderDatasetsPage,
  renderDatasetDetailPage,
  renderHomePage,
  renderLineagesPage,
  renderMarkersPage,
  initMarkerSearch
} from './modules.js';
import { databasePortfolio, developmentStageFilters, navigationItems, siteMeta } from './data.js';
import { normalizeRoute, routeFromHash, parseDatasetDetailRoute } from './router.js';

let route = routeFromHash(window.location.hash);
let datasetDetailId = null;
let mode = 'light';
let atlasStage = developmentStageFilters[0].id;
let mobileNavOpen = false;

const institutionalLinks = [
  {
    label: 'Home',
    href: 'http://www.gznl.org/',
    icon: './src/assets/header/home.svg'
  },
  {
    label: 'Database',
    href: 'https://www.gznl.org/database/',
    icon: './src/assets/header/database.svg'
  },
  {
    label: 'Research',
    href: 'https://www.gznl.org/research/',
    icon: './src/assets/header/research.svg'
  },
  {
    label: 'About us',
    href: 'https://www.gznl.org/aboutus/',
    icon: './src/assets/header/aboutus.svg'
  },
  {
    label: 'GZNL-RDC',
    href: 'https://gzlab.ac.cn/',
    icon: './src/assets/header/gznl2.svg'
  }
];

function setTheme(modeKey) {
  const styleTag = document.getElementById('theme-vars') ?? document.createElement('style');
  styleTag.id = 'theme-vars';
  styleTag.textContent = `:root { ${cssVarsFor(siteMeta.defaultTheme, modeKey)} }`;
  document.head.appendChild(styleTag);
  document.body.setAttribute('data-mode', modeKey);
}

function currentRouteLabel() {
  return navigationItems.find((item) => item.id === route)?.label ?? 'Home';
}

function bundleHomeHref(site) {
  return `${site.url}#home`;
}

function renderBundleSwitcher() {
  return `<div class="bundle-switcher">
    <div class="bundle-switcher-head">
      <span class="bundle-switcher-title">Lung Database Bundle</span>
      <span class="bundle-domain">${siteMeta.customDomain}</span>
    </div>
    <div class="bundle-links" aria-label="Four lung database bundle switcher">
      ${databasePortfolio
        .map(
          (site) => `<a
            class="bundle-pill ${site.id === siteMeta.siteId ? 'active' : ''}"
            href="${bundleHomeHref(site)}"
            ${site.id === siteMeta.siteId ? 'aria-current="page"' : ''}
          >
            <span class="bundle-pill-label">${site.label}</span>
            <small>${site.axis}</small>
          </a>`
        )
        .join('')}
    </div>
  </div>`;
}

function renderHeader() {
  return `<header class="app-header">
    <div class="institutional-nav">
      ${institutionalLinks
        .map(
          (item) => `<a class="institutional-link" href="${item.href}" target="_blank" rel="noopener noreferrer">
            <img src="${item.icon}" alt="" />
            <span>${item.label}</span>
          </a>`
        )
        .join('')}
    </div>
    <div class="top-nav">
      <div class="brand-block">
        <div class="brand-mark">LD</div>
        <div>
          <p class="eyebrow">Development axis</p>
          <div class="brand-title">${siteMeta.label}</div>
          <p class="brand-copy">${siteMeta.strapline}</p>
        </div>
      </div>
      <div class="nav-cluster">
        <div class="nav-utility-row">
          ${renderBundleSwitcher()}
          <div class="nav-actions">
            <button type="button" class="ghost mode-toggle" id="mode-switcher">
              ${mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            </button>
            <button
              type="button"
              class="ghost nav-toggle"
              id="nav-menu-toggle"
              aria-expanded="${mobileNavOpen ? 'true' : 'false'}"
              aria-controls="site-navigation"
            >
              ${mobileNavOpen ? 'Close menu' : 'Open menu'}
            </button>
          </div>
        </div>
        <nav class="nav-list ${mobileNavOpen ? 'open' : ''}" id="site-navigation" aria-label="lungdev navigation">
          ${navigationItems
            .map(
              (item) => `<button
                type="button"
                class="nav-btn ${item.id === route ? 'active' : ''}"
                data-route="${item.id}"
                title="${item.kicker}"
                aria-current="${item.id === route ? 'page' : 'false'}"
              >
                <span class="nav-label">${item.label}</span>
                <span class="nav-tooltip" role="tooltip">${item.kicker}</span>
              </button>`
            )
            .join('')}
        </nav>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `<footer class="black-footer">
    <div class="black-footer-inner">
      <div class="footer-stack">
        <div class="footer-row">
          <span>© RNAcentre</span>
          <span class="sep">|</span>
          <a href="https://www.rnacentre.org/" target="_blank" rel="noopener noreferrer">www.rnacentre.org</a>
        </div>
        <div class="footer-row footer-address">
          <span class="footer-heading">Address</span>
          <span class="footer-address-text">Building F, Guangzhou National Laboratory 9 Xingdao North Road, Guangzhou International Bio Island, Haizhu District, Guangzhou, Guangdong, China.</span>
        </div>
        <div class="footer-row footer-bundle">
          <span class="footer-heading">Bundle</span>
          ${databasePortfolio
            .map(
              (site) => `<a href="${bundleHomeHref(site)}" ${site.id === siteMeta.siteId ? 'aria-current="page"' : ''}>${site.label}</a>`
            )
            .join('')}
        </div>
        <div class="footer-row footer-domain">
          <span class="footer-heading">GitHub Pages</span>
          <a href="${siteMeta.githubPagesUrl}" target="_blank" rel="noopener noreferrer">${siteMeta.githubPagesUrl}</a>
          <span class="sep">|</span>
          <span class="footer-heading">Custom domain</span>
          <strong>${siteMeta.customDomain}</strong>
        </div>
      </div>
    </div>
  </footer>`;
}

function pageFor(name) {
  const safeRoute = normalizeRoute(name);
  if (safeRoute === 'atlas') return renderAtlasPage(atlasStage, mode);
  if (safeRoute === 'lineages') return renderLineagesPage();
  if (safeRoute === 'markers') return renderMarkersPage();
  if (safeRoute === 'datasets') return renderDatasetsPage();
  if (safeRoute === 'about') return renderAboutPage();
  return renderHomePage();
}

function pageForDatasetDetail(datasetId) {
  return renderDatasetDetailPage(datasetId);
}

function bindNavigation() {
  document.querySelectorAll('[data-route]').forEach((element) => {
    element.addEventListener('click', () => {
      const nextRoute = normalizeRoute(element.getAttribute('data-route'));
      mobileNavOpen = false;

      if (route === nextRoute && window.location.hash === `#${nextRoute}`) {
        render({ preserveScroll: true });
        return;
      }

      route = nextRoute;
      window.location.hash = route;
    });
  });
}

function bindViewerMessages() {
  if (window.__lungdevViewerListenerBound) return;

  window.addEventListener('message', (event) => {
    const payload = event.data;
    if (!payload || payload.type !== 'lungdev-stage-change') return;
    if (!developmentStageFilters.some((stage) => stage.id === payload.stage)) return;
    atlasStage = payload.stage;
  });

  window.__lungdevViewerListenerBound = true;
}

function bindModeToggle() {
  document.getElementById('mode-switcher')?.addEventListener('click', () => {
    mode = mode === 'light' ? 'dark' : 'light';
    render({ preserveScroll: true });
  });
}

function bindMenuToggle() {
  document.getElementById('nav-menu-toggle')?.addEventListener('click', () => {
    mobileNavOpen = !mobileNavOpen;
    render({ preserveScroll: true });
  });
}

function bindAtlasExtendedToggle() {
  const btn = document.getElementById('atlas-extended-toggle');
  const drawer = document.getElementById('atlas-extended-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open');
    btn.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
}

function bindExpandButtons() {
  // Handle expand buttons
  document.querySelectorAll('.expand-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (!targetContent) return;

      const isVisible = targetContent.style.display === 'block';
      const card = btn.closest('.stage-card');
      card.querySelectorAll('.expand-content').forEach((content) => {
        content.style.display = 'none';
      });
      card.querySelectorAll('.expand-btn').forEach((b) => {
        b.classList.remove('active');
      });

      if (!isVisible) {
        targetContent.style.display = 'block';
        btn.classList.add('active');
      }
    });
  });

  // Handle structured layout expand buttons
  document.querySelectorAll('.stage-inline-expand').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (!targetContent) return;

      const isVisible = targetContent.style.display === 'block';
      const card = btn.closest('.stage-card');
      card.querySelectorAll('.stage-expand-content').forEach((content) => {
        content.style.display = 'none';
      });
      card.querySelectorAll('.stage-inline-expand').forEach((b) => {
        b.classList.remove('active');
      });

      if (!isVisible) {
        targetContent.style.display = 'block';
        btn.classList.add('active');
      }
    });
  });
}

function render(options = {}) {
  const { preserveScroll = false } = options;
  const previousScrollX = window.scrollX;
  const previousScrollY = window.scrollY;

  setTheme(mode);
  
  // Render dataset detail page if active
  if (datasetDetailId) {
    document.title = `Dataset Detail | ${datasetDetailId} | ${siteMeta.label}`;
    document.getElementById('app').innerHTML = `${renderHeader()}${pageForDatasetDetail(datasetDetailId)}${renderFooter()}`;
  } else {
    document.title = `${siteMeta.label} | ${currentRouteLabel()}`;
    document.getElementById('app').innerHTML = `${renderHeader()}${pageFor(route)}${renderFooter()}`;
  }

  bindNavigation();
  bindViewerMessages();
  bindModeToggle();
  bindMenuToggle();
  bindExpandButtons();
  bindAtlasExtendedToggle();
  initMarkerSearch();
  bindDatasetRowClicks();
  bindDownloadTableFilters();

  if (preserveScroll) {
    requestAnimationFrame(() => window.scrollTo(previousScrollX, previousScrollY));
  }
}

function bindDatasetRowClicks() {
  document.querySelectorAll('.dataset-row').forEach((row) => {
    row.addEventListener('click', () => {
      const datasetId = row.getAttribute('data-dataset-id');
      if (datasetId) {
        datasetDetailId = datasetId;
        window.location.hash = `datasets/${datasetId}`;
      }
    });
  });
}

function bindDownloadTableFilters() {
  const searchInput = document.querySelector('[data-download-search]');
  const resetBtn = document.querySelector('[data-download-reset]');
  const filterInputs = document.querySelectorAll('[data-col-filter]');
  const tbody = document.querySelector('[data-download-tbody]');
  const table = document.querySelector('[data-download-table]');
  
  if (!searchInput || !tbody || !table) return;

  if (!searchInput || !tbody || !table) return;

  // Render rows from downloadRows (12 columns: Number, Species, Atlas, Tissue, Status, Platform, Seq-type, Year, Accession, Datasets, DOI, Download)
  function renderCell(cell) {
    if (cell.type === 'link') {
      const url = cell.url || '#';
      return url && url !== '#'
        ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${cell.value}</a>`
        : cell.value;
    }
    if (cell.type === 'doi') {
      const url = cell.url || '';
      return url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${cell.value}</a>` : cell.value;
    }
    if (cell.type === 'download') {
      const url = cell.url || '#';
      const label = cell.label || 'Download';
      return url && url !== '#'
        ? `<a href="${url}" target="_blank" rel="noopener noreferrer" class="download-link-btn">${label}</a>`
        : label;
    }
    return cell.value || '';
  }

  tbody.innerHTML = downloadRows.map((row) =>
    `<tr>${row.cells.map((cell) => `<td>${renderCell(cell)}</td>`).join('')}</tr>`
  ).join('');

  function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const colFilters = Array.from(filterInputs).map((input) => input.value.toLowerCase());
    const rows = tbody.querySelectorAll('tr');

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      if (cells.length === 0) return;

      let matchesSearch = true;
      if (searchTerm) {
        matchesSearch = Array.from(cells).some((cell) => cell.textContent.toLowerCase().includes(searchTerm));
      }

      let matchesColFilters = true;
      if (colFilters.some((f) => f)) {
        matchesColFilters = colFilters.every((filter, i) => {
          if (!filter) return true;
          const cellIndex = i < cells.length ? i : -1;
          if (cellIndex === -1) return true;
          return cells[cellIndex].textContent.toLowerCase().includes(filter);
        });
      }

      row.style.display = matchesSearch && matchesColFilters ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', applyFilters);

  filterInputs.forEach((input) => {
    input.addEventListener('input', applyFilters);
  });

  resetBtn?.addEventListener('click', () => {
    searchInput.value = '';
    filterInputs.forEach((input) => { input.value = ''; });
    applyFilters();
  });
}

window.addEventListener('hashchange', () => {
  // Check for dataset detail route first
  const detailRoute = parseDatasetDetailRoute(window.location.hash);
  if (detailRoute) {
    datasetDetailId = detailRoute.datasetId;
    route = 'datasets';
  } else {
    datasetDetailId = null;
    route = routeFromHash(window.location.hash);
  }
  mobileNavOpen = false;
  render();
});

render();
