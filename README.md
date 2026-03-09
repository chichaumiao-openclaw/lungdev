# Lung Development Atlas (DB1)

MVP for the first database in the 4-database respiratory atlas plan.

## Scope (Week 1)
- Search: gene / cell type / tissue
- Filter: species / stage / platform
- Visualization: UMAP (metadata coloring default)
- Detail pages: evidence + source + version
- Download/API: minimal endpoints

## Repository Structure
- `template/freeze.md`: frozen master-template contract
- `spec/schema_v1.yaml`: unified schema v1
- `configs/development_atlas.yaml`: DB1 config
- `rev/checklist.md`: review gates
- `data/sample/development_records.json`: sample data for local validation

## Next Steps
1. Implement API handlers against `schema_v1`.
2. Bind frontend to unified endpoints (`/search`, `/browse`, `/detail`, `/download`).
3. Run Rev checklist before demo.
