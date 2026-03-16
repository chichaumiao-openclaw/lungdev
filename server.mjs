import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

const dataPath = path.join(__dirname, 'data/sample/development_records.json');
const frontendDir = path.join(__dirname, 'frontend');

function loadRecords() {
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

function sendJson(res, code, payload) {
  res.writeHead(code, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(payload, null, 2));
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath);
  const types = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8'
  };
  if (!fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  res.writeHead(200, { 'Content-Type': types[ext] || 'text/plain; charset=utf-8' });
  fs.createReadStream(filePath).pipe(res);
}

function applyFilters(records, searchParams) {
  const q = (searchParams.get('q') || '').toLowerCase();
  const species = searchParams.get('species') || 'all';
  const stage = searchParams.get('stage') || 'all';
  const platform = searchParams.get('platform') || 'all';

  return records.filter((r) => {
    const passQ = !q || [r.gene_symbol, r.cell_type, r.tissue].some(v => String(v || '').toLowerCase().includes(q));
    const passSpecies = species === 'all' || r.species === species;
    const passStage = stage === 'all' || r.stage_or_disease === stage;
    const passPlatform = platform === 'all' || r.platform === platform;
    return passQ && passSpecies && passStage && passPlatform;
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  if (url.pathname === '/api/search' || url.pathname === '/api/browse') {
    const records = applyFilters(loadRecords(), url.searchParams);
    sendJson(res, 200, { total: records.length, items: records });
    return;
  }

  if (url.pathname.startsWith('/api/detail/')) {
    const id = url.pathname.split('/').pop();
    const rec = loadRecords().find(r => r.record_id === id);
    if (!rec) return sendJson(res, 404, { error: 'record_not_found', record_id: id });
    return sendJson(res, 200, rec);
  }

  if (url.pathname === '/api/download') {
    const records = loadRecords();
    sendJson(res, 200, {
      version: records[0]?.version || 'unknown',
      schema: '/spec/schema_v1.yaml',
      items: records
    });
    return;
  }

  if (url.pathname === '/spec/schema_v1.yaml') {
    return serveFile(res, path.join(__dirname, 'spec/schema_v1.yaml'));
  }

  if (url.pathname === '/data/sample/development_records.json') {
    return serveFile(res, dataPath);
  }

  let filePath = path.join(frontendDir, url.pathname === '/' ? 'index.html' : url.pathname.replace(/^\//, ''));
  if (!filePath.startsWith(frontendDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  if (url.pathname === '/' || !path.extname(filePath)) {
    filePath = path.join(frontendDir, 'index.html');
  }
  serveFile(res, filePath);
});

server.listen(PORT, () => {
  console.log(`lungdev running at http://localhost:${PORT}`);
});
