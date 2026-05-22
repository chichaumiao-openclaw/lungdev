import React, { useEffect, useMemo, useState } from 'react';
import { json } from 'd3-fetch';
import SingleCellPlot from './SingleCellPlot.jsx';

const DEVELOPMENT_STAGES = [
  { id: 'fetal', label: 'Fetal' }
];

function getInitialStage() {
  const fallback = DEVELOPMENT_STAGES[0].id;
  if (typeof window === 'undefined') return fallback;
  const stage = new URLSearchParams(window.location.search).get('stage');
  return DEVELOPMENT_STAGES.some((item) => item.id === stage) ? stage : fallback;
}

function getInitialMode() {
  if (typeof window === 'undefined') return 'light';
  const mode = new URLSearchParams(window.location.search).get('mode');
  return mode === 'dark' ? 'dark' : 'light';
}

function assignDevelopmentalStages(x, y) {
  const points = x.map((xValue, index) => ({
    index,
    score: Number(xValue || 0) + Number(y[index] || 0) * 0.18
  }));
  points.sort((a, b) => a.score - b.score);
  const assignments = new Array(points.length);
  points.forEach((point, rank) => {
    const stageIndex = Math.min(
      DEVELOPMENT_STAGES.length - 1,
      Math.floor((rank * DEVELOPMENT_STAGES.length) / Math.max(points.length, 1))
    );
    assignments[point.index] = DEVELOPMENT_STAGES[stageIndex].id;
  });
  return assignments;
}

function hslToRgba(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h * 12) % 12;
    return Math.round(255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))));
  };
  return [f(0), f(8), f(4), 220];
}

function viridisColor(tRaw) {
  const t = Math.max(0, Math.min(1, tRaw));
  const stops = [
    [0.0, [68, 1, 84]],
    [0.25, [59, 82, 139]],
    [0.5, [33, 145, 140]],
    [0.75, [94, 201, 98]],
    [1.0, [253, 231, 37]]
  ];
  for (let i = 1; i < stops.length; i += 1) {
    const [t1, c1] = stops[i - 1];
    const [t2, c2] = stops[i];
    if (t <= t2) {
      const p = (t - t1) / (t2 - t1 || 1);
      return [
        Math.round(c1[0] + (c2[0] - c1[0]) * p),
        Math.round(c1[1] + (c2[1] - c1[1]) * p),
        Math.round(c1[2] + (c2[2] - c1[2]) * p),
        225
      ];
    }
  }
  return [253, 231, 37, 225];
}

function categoryColor(category) {
  let hash = 0;
  for (let i = 0; i < category.length; i += 1) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  return hslToRgba((hash % 360) / 360, 0.65, 0.52);
}

export default function App() {
  const [selectedStage, setSelectedStage] = useState(getInitialStage);
  const [viewerMode] = useState(getInitialMode);
  const [baseData, setBaseData] = useState([]);
  const [h5adMeta, setH5adMeta] = useState(null);
  const [obsColumns, setObsColumns] = useState({});
  const [obsFields, setObsFields] = useState([]);
  const [colorField, setColorField] = useState('cell_type');
  const [geneQuery, setGeneQuery] = useState('');
  const [geneMatches, setGeneMatches] = useState([]);
  const [geneIndex, setGeneIndex] = useState([]);
  const [activeGene, setActiveGene] = useState('');
  const [geneValues, setGeneValues] = useState(null);
  const [loading, setLoading] = useState(false);

  // ── Load data based on selected stage ────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    async function loadData() {
      const base = import.meta.env.BASE_URL || './';

      // ── Fetal: load real h5ad data ────────────────────────────────
      if (selectedStage === 'fetal') {
        try {
          const fullData = await json(`${base}data/fetal_full.json`);
          if (cancelled) return;
          const n = Math.min(fullData.x.length, fullData.y.length);
          const points = new Array(n);
          for (let i = 0; i < n; i++) {
            const p = { id: i, x: fullData.x[i], y: fullData.y[i] };
            for (const key of Object.keys(fullData.obs || {})) {
              if (Array.isArray(fullData.obs[key])) {
                p[key] = fullData.obs[key][i] ?? null;
              }
            }
            p.development_stage = 'fetal';
            points[i] = p;
          }
          setBaseData(points);
          setObsColumns(fullData.obs || {});
          setH5adMeta(fullData._meta || null);

          // Build obs_fields from meta
          const fields = (fullData._meta?.obs_fields || []).map((f) => ({
            name: f.name,
            kind: f.kind,
            label: f.label || f.name
          }));
          // Add development_stage
          if (!fields.find((f) => f.name === 'development_stage')) {
            fields.unshift({ name: 'development_stage', kind: 'categorical', label: 'Development Stage' });
          }
          setObsFields(fields);

          // Default color field
          const defaultColor = fullData._meta?.obs_fields?.find((f) => f.name === 'cell_type')?.name || 'cell_type';
          setColorField(defaultColor);
          setGeneIndex([]);
        } catch (err) {
          console.error('Failed to load fetal_full.json:', err);
        }
      } else {
        // ── Other stages: bundled data + synthetic stage assignment ──
        try {
          const [umapColumns, metadata] = await Promise.all([
            json(`${base}data/umap_columns.json`),
            json(`${base}data/metadata.json`)
          ]);
          if (cancelled) return;

          const x = umapColumns?.x || [];
          const y = umapColumns?.y || [];
          const organ = umapColumns?.organ || [];
          const cellType = umapColumns?.cell_type || [];
          const n = Math.min(x.length, y.length);
          const developmentalStage = assignDevelopmentalStages(x, y);

          const points = new Array(n);
          for (let i = 0; i < n; i += 1) {
            points[i] = {
              id: i,
              x: x[i],
              y: y[i],
              organ: organ[i] ?? 'All',
              cell_type: cellType[i] ?? 'unknown',
              development_stage: developmentalStage[i]
            };
          }

          setBaseData(points);
          setObsColumns({ ...(umapColumns?.obs || {}), development_stage: developmentalStage });
          setH5adMeta(null);

          const metadataFields = metadata?.obs_fields || [
            { name: 'cell_type', kind: 'categorical' },
            { name: 'organ', kind: 'categorical' }
          ];
          const mergedFields = metadataFields.some((field) => field.name === 'development_stage')
            ? metadataFields
            : [{ name: 'development_stage', kind: 'categorical', label: 'Development Stage' }, ...metadataFields];
          setObsFields(mergedFields);
          setColorField(metadata?.default_color_field || 'cell_type');
          setGeneIndex(metadata?.genes || []);
        } catch (err) {
          console.error('Failed to load bundled data:', err);
        }
      }
    }

    loadData();
    return () => { cancelled = true; };
  }, [selectedStage]);

  // ── Sync body mode ─────────────────────────────────────────────────
  useEffect(() => {
    document.body.setAttribute('data-mode', viewerMode);
  }, [viewerMode]);

  // ── Update URL / postMessage ────────────────────────────────────────
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('stage', selectedStage);
    url.searchParams.set('mode', viewerMode);
    window.history.replaceState({}, '', url);
    window.parent?.postMessage({ type: 'lungdev-stage-change', stage: selectedStage }, '*');
  }, [selectedStage, viewerMode]);

  // ── Gene search ────────────────────────────────────────────────────
  useEffect(() => {
    if (!geneQuery) { setGeneMatches([]); return; }
    const q = geneQuery.trim().toLowerCase();
    if (!q) { setGeneMatches([]); return; }
    setGeneMatches(geneIndex.filter((g) => g.toLowerCase().includes(q)).slice(0, 20));
  }, [geneQuery, geneIndex]);

  async function selectGene(gene) {
    const base = import.meta.env.BASE_URL || './';
    setActiveGene(gene);
    const payload = await json(`${base}data/gene_expr/${encodeURIComponent(gene)}.json`);
    setGeneValues(payload?.values || null);
  }

  // ── Determine filtered data (for non-fetal stages, filter by stage) ─
  const displayData = useMemo(() => {
    if (selectedStage === 'fetal') {
      // Fetal: show all fetal cells (no filtering)
      return baseData;
    }
    // Other stages: filter by development_stage
    return baseData.filter((d) => d.development_stage === selectedStage);
  }, [baseData, selectedStage]);

  // ── Build color array ───────────────────────────────────────────────
  const obsColor = useMemo(() => {
    if (!colorField) return [];
    if (colorField === 'organ') return displayData.map((d) => d.organ);
    if (colorField === 'cell_type') return displayData.map((d) => d.cell_type);
    if (colorField === 'development_stage') return displayData.map((d) => d.development_stage);
    // h5ad fields
    if (h5adMeta?.unique_values?.[colorField]) {
      return displayData.map((d) => d[colorField]);
    }
    return obsColumns[colorField] || [];
  }, [colorField, displayData, obsColumns, h5adMeta]);

  // ── Build colored points ────────────────────────────────────────────
  const coloredData = useMemo(() => {
    let geneMin = Infinity;
    let geneMax = -Infinity;
    if (geneValues) {
      for (const v of geneValues) {
        if (v < geneMin) geneMin = v;
        if (v > geneMax) geneMax = v;
      }
    }
    const obsNumeric = obsColor.map((x) => Number(x)).filter((x) => Number.isFinite(x));
    const obsMin = obsNumeric.length ? Math.min(...obsNumeric) : 0;
    const obsMax = obsNumeric.length ? Math.max(...obsNumeric) : 1;

    return displayData.map((d, i) => {
      if (geneValues) {
        const v = Number(geneValues[i] ?? 0);
        const t = geneMax > geneMin ? (v - geneMin) / (geneMax - geneMin) : 0.5;
        return { ...d, color: viridisColor(t) };
      }
      if (obsColor.length) {
        const label = obsColor[i];
        if (label === null || label === undefined || label === '') return { ...d, color: [130, 130, 130, 180] };
        if (!Number.isNaN(Number(label)) && String(label).trim() !== '') {
          const num = Number(label);
          const t = obsMax > obsMin ? (num - obsMin) / (obsMax - obsMin) : 0.5;
          return { ...d, color: viridisColor(t) };
        }
        // Use h5ad color map if available
        if (h5adMeta?.color_maps?.[colorField]?.[String(label)]) {
          const hex = h5adMeta.color_maps[colorField][String(label)];
          return { ...d, color: hexToRgba(hex, 220) };
        }
        return { ...d, color: categoryColor(String(label)) };
      }
      return { ...d, color: [140, 140, 140, 160] };
    });
  }, [displayData, geneValues, obsColor, h5adMeta]);

  const activeStageLabel = DEVELOPMENT_STAGES.find((item) => item.id === selectedStage)?.label ?? 'Fetal';

  // ── Unique categories for sidebar (fetal cell types) ──────────────
  const uniqueCategories = useMemo(() => {
    if (!h5adMeta || !h5adMeta.unique_values?.[colorField]) return [];
    return h5adMeta.unique_values[colorField];
  }, [h5adMeta, colorField]);

  const [hiddenCategories, setHiddenCategories] = useState(new Set());
  const [showCellTypeSidebar, setShowCellTypeSidebar] = useState(selectedStage === 'fetal');

  function toggleCategory(cat) {
    setHiddenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  function showAll() { setHiddenCategories(new Set()); }
  function hideAll() {
    setHiddenCategories(new Set(uniqueCategories));
  }

  const sidebarFilteredData = useMemo(() => {
    if (!showCellTypeSidebar || hiddenCategories.size === 0) return coloredData;
    return coloredData.filter((d) => !hiddenCategories.has(d[colorField]));
  }, [coloredData, hiddenCategories, showCellTypeSidebar, colorField]);

  const categoryCounts = useMemo(() => {
    const counts = {};
    displayData.forEach((d) => {
      const key = d[colorField];
      if (key) counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }, [displayData, colorField]);

  return (
    <div className="app-wrap" data-mode={viewerMode}>
      <header>
        <h2>Fetal Lung Development Atlas</h2>
        <p>{viewerMode === 'dark' ? 'Dark' : 'Light'} mode &mdash; {displayData.length.toLocaleString()} cells displayed</p>
      </header>
      {loading && <div className="loading-bar">Loading {selectedStage} data...</div>}
      <div className="dashboard-layout">
        <div>
          <div className="panel">
            <h3>Developmental Stage</h3>
            <p className="hint">Switch between lung development stages.</p>
            <div className="stage-button-grid">
              {DEVELOPMENT_STAGES.map((stage, index) => (
                <button
                  key={stage.id}
                  className={`stage-button ${selectedStage === stage.id ? 'active' : ''}`}
                  style={{ '--stageTone': ['#e4572e', '#f28f3b', '#f5c542', '#4cbf6b', '#3b82f6'][index] }}
                  onClick={() => {
                    setSelectedStage(stage.id);
                    setShowCellTypeSidebar(stage.id === 'fetal');
                    setHiddenCategories(new Set());
                  }}
                >
                  {stage.label}
                </button>
              ))}
            </div>
            <div className="stage-badge">Active: {activeStageLabel}</div>
          </div>
          <div className="panel" style={{ marginTop: 12 }}>
            <h3>Color by</h3>
            <select value={colorField} onChange={(e) => {
              setActiveGene('');
              setGeneValues(null);
              setColorField(e.target.value);
            }}>
              <option value="">(coordinates only)</option>
              {obsFields.map((f) => <option key={f.name} value={f.name}>{f.label || f.name} ({f.kind})</option>)}
            </select>
            <label style={{ marginTop: 8 }}>Gene search</label>
            <input value={geneQuery} onChange={(e) => setGeneQuery(e.target.value)} placeholder="e.g. SFTPC" />
            {geneMatches.length > 0 && (
              <div className="gene-list">
                {geneMatches.map((g) => <button key={g} onClick={() => selectGene(g)}>{g}</button>)}
              </div>
            )}
            <p className="hint">
              {activeGene
                ? `Colored by ${activeGene} (viridis)`
                : colorField
                  ? `Colored by ${colorField}`
                  : 'Coordinate-only rendering'}
            </p>
            {selectedStage === 'fetal' && h5adMeta && (
              <button
                className="sidebar-toggle-btn"
                style={{ marginTop: 8 }}
                onClick={() => setShowCellTypeSidebar((v) => !v)}
              >
                {showCellTypeSidebar ? 'Hide' : 'Show'} group panel ({uniqueCategories.length})
              </button>
            )}
          </div>
        </div>
        <SingleCellPlot
          data={sidebarFilteredData}
          selectedStage={selectedStage}
          stageLabel={activeStageLabel}
          colorField={colorField}
          showCellTypeSidebar={showCellTypeSidebar && selectedStage === 'fetal'}
          uniqueCategories={uniqueCategories}
          categoryCounts={categoryCounts}
          hiddenCategories={hiddenCategories}
          onToggleCategory={toggleCategory}
          onShowAll={showAll}
          onHideAll={hideAll}
          h5adMeta={h5adMeta}
        />
      </div>
    </div>
  );
}

// ── Utility: hex to rgba ─────────────────────────────────────────────
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b, alpha];
}
