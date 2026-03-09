# Master Template Freeze (v1)

Status: **Frozen for DB1/DB2 delivery window**

## 1) Route Contract
Fixed routes (all enabled):
- `/home`
- `/browse`
- `/celltype/:id`
- `/gene/:id`
- `/visualization`
- `/download`

No route renames/splits during this sprint.

## 2) Layout Contract
- Top navigation
- Left filter panel
- Main content region
- Bottom/right version badge area (always visible)

## 3) Component Contract
Required shared components:
1. `SearchBox`
   - modes: gene | cell_type | tissue
2. `FilterPanel`
   - keys: species, stage_or_disease, platform
3. `DataTable`
   - pagination + column toggle + CSV export
4. `EvidenceCard`
   - source_ref, evidence_level, version
5. `UMAPViewer`
   - default color by metadata key

## 4) Data/API Contract
Frontend must only consume unified endpoints:
- `GET /search`
- `GET /browse`
- `GET /detail`
- `GET /download`

No direct database-specific query logic in UI layer.

## 5) Tracking Contract
Required events:
- `search_submitted`
- `filter_changed`
- `result_opened`
- `download_triggered`

## 6) Change Policy (until DB2 ship)
Allowed:
- theme colors
- labels/copy
- feature flags in config

Blocked (requires PI+Eng+Rev approval):
- schema key changes
- route changes
- component prop signature changes
