# Rev Gate Checklist (DB1 MVP)

## A. Usability (must pass all)
- [ ] Gene / Cell type / Tissue search works
- [ ] Species / Stage / Platform filters work
- [ ] UMAP renders with metadata default coloring
- [ ] CellType and Gene detail pages open from browse results
- [ ] Download page provides at least CSV + JSON

## B. Consistency (must pass all)
- [ ] API keys follow `schema_v1` exactly
- [ ] Null handling is explicit and documented
- [ ] Shared components and interactions match template freeze
- [ ] Same query path <= 3 clicks to evidence card

## C. Misleading-risk control (must pass all)
- [ ] Every detail item has non-empty `source_ref`
- [ ] `evidence_level` is visible without extra click
- [ ] `version` is visible on detail and download pages
- [ ] No conclusive language without evidence card

## D. Release gates
- [ ] P0 bugs = 0
- [ ] P1 bugs <= 3 with owner+deadline
- [ ] Demo script query set prepared (>=3 scenarios)
