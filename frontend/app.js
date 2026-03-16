const view = document.getElementById('view');
const filtersEl = document.getElementById('filters');
const versionEl = document.getElementById('version');

let records = [];
let state = { query: '', species: 'all', stage: 'all', platform: 'all' };

function queryString() {
  const params = new URLSearchParams();
  if (state.query) params.set('q', state.query);
  if (state.species) params.set('species', state.species);
  if (state.stage) params.set('stage', state.stage);
  if (state.platform) params.set('platform', state.platform);
  return params.toString();
}

async function loadBrowseData() {
  const resp = await fetch(`/api/browse?${queryString()}`);
  const data = await resp.json();
  records = data.items || [];
  versionEl.textContent = `Schema v1 | Records: ${data.total ?? 0} | Data version: ${records[0]?.version ?? 'n/a'}`;
}

async function loadAllDataForFilters() {
  const resp = await fetch('/api/browse');
  const data = await resp.json();
  return data.items || [];
}

function renderFilters(allRecords) {
  const stages = [...new Set(allRecords.map(r => r.stage_or_disease))];
  const platforms = [...new Set(allRecords.map(r => r.platform))];
  filtersEl.innerHTML = `
    <h3>Filters</h3>
    <input placeholder="Search gene/cell/tissue" value="${state.query}" id="q" />
    <select id="species"><option value="all">All species</option><option value="human">human</option><option value="mouse">mouse</option></select>
    <select id="stage"><option value="all">All stages</option>${stages.map(s => `<option value="${s}">${s}</option>`).join('')}</select>
    <select id="platform"><option value="all">All platforms</option>${platforms.map(s => `<option value="${s}">${s}</option>`).join('')}</select>
  `;
  ['q','species','stage','platform'].forEach(id => {
    document.getElementById(id).addEventListener('input', async () => {
      state.query = document.getElementById('q').value;
      state.species = document.getElementById('species').value;
      state.stage = document.getElementById('stage').value;
      state.platform = document.getElementById('platform').value;
      await route();
    });
  });
  document.getElementById('species').value = state.species;
  document.getElementById('stage').value = state.stage;
  document.getElementById('platform').value = state.platform;
}

function renderBrowse() {
  view.innerHTML = `<h2>Browse</h2><table><thead><tr><th>record</th><th>species</th><th>cell_type</th><th>gene</th><th>stage</th><th>detail</th></tr></thead><tbody>${records.map(r => `<tr><td>${r.record_id}</td><td>${r.species}</td><td>${r.cell_type}</td><td>${r.gene_symbol ?? '-'}</td><td>${r.stage_or_disease}</td><td><a href="#/celltype/${r.record_id}">Open</a></td></tr>`).join('')}</tbody></table>`;
}

function renderHome() {
  view.innerHTML = `<h2>Home</h2><div class="card">Total records: ${records.length}</div><div class="card">Unique cell types: ${new Set(records.map(r => r.cell_type)).size}</div><div class="card">Must-answer question: 发育阶段中关键细胞谱系如何转变？</div>`;
}

async function renderDetail(id) {
  const resp = await fetch(`/api/detail/${id}`);
  const r = await resp.json();
  if (!resp.ok) { view.innerHTML = '<p>Not found</p>'; return; }
  view.innerHTML = `<h2>CellType Detail</h2>
  <div class="card"><b>${r.cell_type}</b> (${r.species})<br/>Gene: ${r.gene_symbol || '-'}<br/>Stage: ${r.stage_or_disease}<br/>Platform: ${r.platform}</div>
  <div class="card"><h3>Evidence</h3>Source: ${r.source_ref}<br/>Level: ${r.evidence_level}<br/>Version: ${r.version}</div>
  <a href="#/gene/${r.record_id}">Open Gene/Target Detail</a>`;
}

async function renderGene(id) {
  const resp = await fetch(`/api/detail/${id}`);
  const r = await resp.json();
  if (!resp.ok) { view.innerHTML = '<p>Not found</p>'; return; }
  view.innerHTML = `<h2>Gene/Target Detail</h2><div class="card">Gene: <b>${r.gene_symbol || 'N/A'}</b><br/>Cell type: ${r.cell_type}<br/>Source: ${r.source_ref}<br/>Evidence: ${r.evidence_level}</div>`;
}

function renderViz() {
  const bySpecies = Object.entries(records.reduce((acc, r) => { acc[r.species] = (acc[r.species] || 0) + 1; return acc; }, {}));
  view.innerHTML = `<h2>Visualization</h2><div class="card">UMAP placeholder (metadata coloring default: species)</div><div class="card">${bySpecies.map(([k,v]) => `${k}: ${v}`).join('<br/>')}</div>`;
}

async function renderDownload() {
  const resp = await fetch('/api/download');
  const data = await resp.json();
  view.innerHTML = `<h2>Download/API</h2><div class="card"><a href="/api/download" target="_blank">Open download payload</a></div><div class="card">Version: ${data.version}<br/>Schema: <a href="${data.schema}" target="_blank">${data.schema}</a><br/>Endpoints: /api/search /api/browse /api/detail/:id /api/download</div>`;
}

async function route() {
  const allRecords = await loadAllDataForFilters();
  await loadBrowseData();
  const hash = window.location.hash || '#/home';
  const [_, page, id] = hash.split('/');
  renderFilters(allRecords);
  if (page === 'home') renderHome();
  else if (page === 'browse') renderBrowse();
  else if (page === 'celltype') await renderDetail(id);
  else if (page === 'gene') await renderGene(id);
  else if (page === 'visualization') renderViz();
  else if (page === 'download') await renderDownload();
  else renderHome();
}

window.addEventListener('hashchange', () => { route(); });
route();
