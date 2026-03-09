const view = document.getElementById('view');
const filtersEl = document.getElementById('filters');
const versionEl = document.getElementById('version');

let records = [];
let state = { query: '', species: 'all', stage: 'all', platform: 'all' };

async function loadData() {
  const resp = await fetch('../data/sample/development_records.json');
  records = await resp.json();
  versionEl.textContent = `Schema v1 | Data version: ${records[0]?.version ?? 'n/a'}`;
}

function filterRecords() {
  return records.filter(r => {
    const q = state.query.toLowerCase();
    const passQuery = !q || [r.gene_symbol, r.cell_type, r.tissue].some(v => (v || '').toLowerCase().includes(q));
    const passSpecies = state.species === 'all' || r.species === state.species;
    const passStage = state.stage === 'all' || r.stage_or_disease === state.stage;
    const passPlatform = state.platform === 'all' || r.platform === state.platform;
    return passQuery && passSpecies && passStage && passPlatform;
  });
}

function renderFilters() {
  const stages = [...new Set(records.map(r => r.stage_or_disease))];
  const platforms = [...new Set(records.map(r => r.platform))];
  filtersEl.innerHTML = `
    <h3>Filters</h3>
    <input placeholder="Search gene/cell/tissue" value="${state.query}" id="q" />
    <select id="species"><option value="all">All species</option><option value="human">human</option><option value="mouse">mouse</option></select>
    <select id="stage"><option value="all">All stages</option>${stages.map(s => `<option value="${s}">${s}</option>`).join('')}</select>
    <select id="platform"><option value="all">All platforms</option>${platforms.map(s => `<option value="${s}">${s}</option>`).join('')}</select>
  `;
  ['q','species','stage','platform'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      state.query = document.getElementById('q').value;
      state.species = document.getElementById('species').value;
      state.stage = document.getElementById('stage').value;
      state.platform = document.getElementById('platform').value;
      route();
    });
  });
  document.getElementById('species').value = state.species;
  document.getElementById('stage').value = state.stage;
  document.getElementById('platform').value = state.platform;
}

function renderBrowse() {
  const rows = filterRecords();
  view.innerHTML = `<h2>Browse</h2><table><thead><tr><th>record</th><th>species</th><th>cell_type</th><th>gene</th><th>stage</th><th>detail</th></tr></thead><tbody>${rows.map(r => `<tr><td>${r.record_id}</td><td>${r.species}</td><td>${r.cell_type}</td><td>${r.gene_symbol ?? '-'}</td><td>${r.stage_or_disease}</td><td><a href="#/celltype/${r.record_id}">Open</a></td></tr>`).join('')}</tbody></table>`;
}

function renderHome() {
  const rows = filterRecords();
  view.innerHTML = `<h2>Home</h2><div class="card">Total records: ${rows.length}</div><div class="card">Unique cell types: ${new Set(rows.map(r => r.cell_type)).size}</div>`;
}

function renderDetail(id) {
  const r = records.find(x => x.record_id === id);
  if (!r) { view.innerHTML = '<p>Not found</p>'; return; }
  view.innerHTML = `<h2>CellType Detail</h2>
  <div class="card"><b>${r.cell_type}</b> (${r.species})<br/>Gene: ${r.gene_symbol || '-'}<br/>Stage: ${r.stage_or_disease}<br/>Platform: ${r.platform}</div>
  <div class="card"><h3>Evidence</h3>Source: ${r.source_ref}<br/>Level: ${r.evidence_level}<br/>Version: ${r.version}</div>
  <a href="#/gene/${r.record_id}">Open Gene/Target Detail</a>`;
}

function renderGene(id) {
  const r = records.find(x => x.record_id === id);
  if (!r) { view.innerHTML = '<p>Not found</p>'; return; }
  view.innerHTML = `<h2>Gene/Target Detail</h2><div class="card">Gene: <b>${r.gene_symbol || 'N/A'}</b><br/>Cell type: ${r.cell_type}<br/>Source: ${r.source_ref}<br/>Evidence: ${r.evidence_level}</div>`;
}

function renderViz() {
  view.innerHTML = `<h2>Visualization</h2><div class="card">UMAP placeholder (metadata coloring default: species)</div><p>Current subset size: ${filterRecords().length}</p>`;
}

function renderDownload() {
  view.innerHTML = `<h2>Download/API</h2><div class="card"><a href="../data/sample/development_records.json" download>Download JSON</a></div><div class="card">API (planned): /search /browse /detail /download</div>`;
}

function route() {
  const hash = window.location.hash || '#/home';
  const [_, page, id] = hash.split('/');
  renderFilters();
  if (page === 'home') renderHome();
  else if (page === 'browse') renderBrowse();
  else if (page === 'celltype') renderDetail(id);
  else if (page === 'gene') renderGene(id);
  else if (page === 'visualization') renderViz();
  else if (page === 'download') renderDownload();
  else renderHome();
}

window.addEventListener('hashchange', route);
await loadData();
route();
