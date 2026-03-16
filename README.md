# Lung Development Atlas (DB1)

MVP for the first database in the 4-database respiratory atlas plan.

## Scope (current MVP)
- Search: gene / cell type / tissue
- Filter: species / stage / platform
- Visualization: metadata-based summary placeholder for UMAP page
- Detail pages: evidence + source + version
- Download/API: minimal working endpoints

## Repository Structure
- `template/freeze.md`: frozen master-template contract
- `spec/schema_v1.yaml`: unified schema v1
- `configs/development_atlas.yaml`: DB1 config
- `rev/checklist.md`: review gates
- `data/sample/development_records.json`: sample data for local validation
- `frontend/`: static frontend for six-page atlas shell
- `server.mjs`: minimal local server + API routes

## Run locally
```bash
cd /Users/macmini/coding/4database/lungdev
npm start
```

Open: `http://localhost:3000`

## Working API
- `GET /api/search?q=&species=&stage=&platform=`
- `GET /api/browse?q=&species=&stage=&platform=`
- `GET /api/detail/:record_id`
- `GET /api/download`

## Current limitations
- UMAP page is a placeholder summary, not a true embedding renderer yet.
- Data source is sample JSON, not production dataset integration yet.
- No test harness yet; this is a demoable MVP shell.
