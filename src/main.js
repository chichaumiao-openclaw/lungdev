import { cssVarsFor } from './theme.js';
import {
  renderAboutPage,
  renderAtlasPage,
  renderDatasetsPage,
  renderHomePage,
  renderLineagesPage,
  renderMarkersPage,
  initMarkerSearch
} from './modules.js';
import { developmentStageFilters, navigationItems, siteMeta } from './data.js';
import { normalizeRoute, routeFromHash } from './router.js';

let route = routeFromHash(window.location.hash);
let mode = 'light';
let atlasStage = developmentStageFilters[0].id;

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
        <button type="button" class="ghost mode-toggle" id="mode-switcher">
          ${mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        </button>
        <nav class="nav-list" aria-label="lungdev navigation">
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
      <span>© Guangzhou National Laboratory</span>
      <span class="sep">|</span>
      ${institutionalLinks
        .map(
          (item) => `<a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.label}</a>`
        )
        .join('')}
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

function bindNavigation() {
  document.querySelectorAll('[data-route]').forEach((element) => {
    element.addEventListener('click', () => {
      route = normalizeRoute(element.getAttribute('data-route'));
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

function render(options = {}) {
  const { preserveScroll = false } = options;
  const previousScrollX = window.scrollX;
  const previousScrollY = window.scrollY;

  setTheme(mode);
  document.title = `${siteMeta.label} | ${currentRouteLabel()}`;
  document.getElementById('app').innerHTML = `${renderHeader()}${pageFor(route)}${renderFooter()}`;

  bindNavigation();
  bindViewerMessages();
  bindModeToggle();
  initMarkerSearch();

  if (preserveScroll) {
    requestAnimationFrame(() => window.scrollTo(previousScrollX, previousScrollY));
  }
}

window.addEventListener('hashchange', () => {
  route = routeFromHash(window.location.hash);
  render();
});

render();
