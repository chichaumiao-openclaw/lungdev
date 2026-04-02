# lungdev

`lungdev` is the first implemented site in the four-database lung single-cell program:

- `lungdev`: development
- `lungInf`: infection / inflammation
- `lungcancer`: cancer
- `lungevo`: evolution

## Mission

Lung Development Atlas is a stage-resolved portal for understanding how the lung develops from early fetal stages to mature adulthood.

This site is the **Development-first MVP** for the broader four-database system. The navigation, modules, and dataset framing are organized around developmental biology rather than a generic dataset shell.

## MVP routes

- `home`
- `atlas`
- `lineages`
- `markers`
- `datasets`
- `about`

## Working scope

- Stage-centered atlas exploration
- Single-Cell Data Viewer embedded on the atlas route
- Developmental lineage and maturation summaries
- Marker gene search
- Dataset release table with provenance context
- About page describing mission, scope, and portfolio role

## Local development

From `/Users/chichau/current_projects/database4/lungdev`:

```bash
npm install
npm run build
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/dist/
```

## Validation

```bash
npm test
npm run build
npm run verify:mvp
```
