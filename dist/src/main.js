import { cssVarsFor } from './theme.js';
import { renderGlobalSearch } from './modules.js';
import { siteConfig } from './site-content.js';
import { normalizeRoute, routeFromHash } from './router.js';

let route = routeFromHash(window.location.hash);
let mode = 'light';

function setTheme() {
  const styleTag = document.getElementById('theme-vars') ?? document.createElement('style');
  styleTag.id = 'theme-vars';
  styleTag.textContent = `:root { ${cssVarsFor(siteConfig.themeKey, mode)} }`;
  document.head.appendChild(styleTag);
  document.body.setAttribute('data-mode', mode);
}

function parseMetricValue(raw) {
  const numeric = Number(String(raw).replace(/[^\d.]/g, ''));
  return Number.isFinite(numeric) ? numeric : 0;
}

function nav() {
  return `<header>
    <div class="black-nav" aria-label="Global navigation">
      <a href="#home">${siteConfig.siteName}</a>
      <span>${siteConfig.tagline}</span>
    </div>
    <div class="top-nav">
      <strong>${siteConfig.siteName}</strong>
      <nav>
        ${siteConfig.routes
          .map(
            (key) => `<button class="nav-btn ${route === key ? 'active' : ''}" data-route="${key}">${siteConfig.navLabels[key] ?? key}</button>`
          )
          .join('')}
      </nav>
      <div class="theme-controls">
        <label>Mode
          <select id="mode-switcher">
            <option value="light" ${mode === 'light' ? 'selected' : ''}>Light</option>
            <option value="dark" ${mode === 'dark' ? 'selected' : ''}>Dark</option>
          </select>
        </label>
      </div>
    </div>
  </header>`;
}

function heroMetrics() {
  return siteConfig.metrics
    .map(
      (item) => `<div><strong data-animate-number="true" data-target="${parseMetricValue(item.value)}">${item.value}</strong><span>${item.label}</span></div>`
    )
    .join('');
}

function homePage() {
  return `<main class="page-home">
    <section class="hero card">
      <div>
        <span class="eyebrow">${siteConfig.hero.eyebrow}</span>
        <h1>${siteConfig.hero.title}</h1>
        <p>${siteConfig.hero.description}</p>
        <div class="actions">
          <button data-route="atlas">Open atlas</button>
          <button class="ghost" data-route="lineages">Explore lineages</button>
        </div>
      </div>
      <div class="hero-metrics">${heroMetrics()}</div>
    </section>

    <section class="card">
      <h2>Stage overview</h2>
      <div class="stats-grid compact">
        ${siteConfig.stageCards.map((item) => `<article class="mini-card"><strong>${item.name}</strong><span>${item.count}</span></article>`).join('')}
      </div>
    </section>

    <section class="stats-grid">
      ${siteConfig.lineageCards.map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}
    </section>

    <section class="card">
      <h2>Prototype modules</h2>
      <ul>
        <li>Development atlas entrypoint with stage-aware exploration</li>
        <li>Lineage transition stories for epithelial, mesenchymal, and immune compartments</li>
        <li>Marker gene spotlight for branching, maturation, and commitment programs</li>
        <li>Dataset releases and references prepared for download integration</li>
      </ul>
    </section>

    ${renderGlobalSearch()}
  </main>`;
}

function atlasPage() {
  return `<main class="page-browse">
    <section class="card">
      <h1>Development Atlas</h1>
      <p>Navigate developmental stages from embryonic to adult reference with reusable atlas cards and future dimensionality-reduction views.</p>
      <div class="stats-grid compact">
        ${siteConfig.stageCards.map((item) => `<article class="mini-card"><strong>${item.name}</strong><span>${item.count}</span></article>`).join('')}
      </div>
    </section>
    ${renderGlobalSearch()}
  </main>`;
}

function lineagesPage() {
  return `<main class="page-browse">
    <section class="card"><h1>Lineage Programs</h1><p>Track cell-state transitions and developmental branching logic across major lung compartments.</p></section>
    <section class="stats-grid">
      ${siteConfig.lineageCards.map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}
    </section>
  </main>`;
}

function markersPage() {
  return `<main class="page-browse">
    <section class="card"><h1>Marker Programs</h1><p>Curated stage-specific markers and lineage commitment signatures.</p></section>
    <section class="stats-grid">
      ${siteConfig.markerSections.map((item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`).join('')}
    </section>
  </main>`;
}

function datasetsPage() {
  return `<main class="page-browse">
    <section class="card"><h1>Datasets</h1><p>Shared download and release area for harmonized developmental datasets.</p></section>
    <section class="card"><ul>${siteConfig.datasets.map((item) => `<li>${item}</li>`).join('')}</ul></section>
  </main>`;
}

function aboutPage() {
  return `<main class="page-browse">
    <section class="card"><h1>About ${siteConfig.siteName}</h1><p>${siteConfig.about}</p></section>
  </main>`;
}

function renderPage() {
  switch (route) {
    case 'atlas':
      return atlasPage();
    case 'lineages':
      return lineagesPage();
    case 'markers':
      return markersPage();
    case 'datasets':
      return datasetsPage();
    case 'about':
      return aboutPage();
    default:
      return homePage();
  }
}

function render() {
  setTheme();
  document.body.innerHTML = `${nav()}${renderPage()}`;

  document.querySelectorAll('[data-route]').forEach((node) => {
    node.addEventListener('click', () => {
      const next = normalizeRoute(node.getAttribute('data-route'));
      window.location.hash = next;
    });
  });

  document.getElementById('mode-switcher')?.addEventListener('change', (event) => {
    mode = event.target.value;
    render();
  });
}

window.addEventListener('hashchange', () => {
  route = routeFromHash(window.location.hash);
  render();
});

render();
