import React, { useEffect, useMemo, useState } from 'react';
import { json } from 'd3-fetch';
import SingleCellPlot from './SingleCellPlot.jsx';

const DEVELOPMENT_STAGES = [
  { id: 'embryonic', label: 'Embryonic' },
  { id: 'pseudoglandular', label: 'Pseudoglandular' },
  { id: 'canalicular', label: 'Canalicular' },
  { id: 'saccular', label: 'Saccular' },
  { id: 'alveolar', label: 'Alveolar' }
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
  const [obsColumns, setObsColumns] = useState({});
  const [obsFields, setObsFields] = useState([]);
  const [colorField, setColorField] = useState('');
  const [geneQuery, setGeneQuery] = useState('');
  const [geneMatches, setGeneMatches] = useState([]);
  const [geneIndex, setGeneIndex] = useState([]);
  const [activeGene, setActiveGene] = useState('');
  const [geneValues, setGeneValues] = useState(null);

  useEffect(() => {
    async function loadStaticData() {
      const base = import.meta.env.BASE_URL || './';
      const [umapColumns, metadata] = await Promise.all([
        json(`${base}data/umap_columns.json`),
        json(`${base}data/metadata.json`)
      ]);

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

      const metadataFields = metadata?.obs_fields || [
        { name: 'cell_type', kind: 'categorical' },
        { name: 'organ', kind: 'categorical' }
      ];
      const mergedFields = metadataFields.some((field) => field.name === 'development_stage')
        ? metadataFields
        : [{ name: 'development_stage', kind: 'categorical' }, ...metadataFields];
      setObsFields(mergedFields);
      setColorField(metadata?.default_color_field || '');
      setGeneIndex(metadata?.genes || []);
    }

    loadStaticData();
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-mode', viewerMode);
  }, [viewerMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    url.searchParams.set('stage', selectedStage);
    url.searchParams.set('mode', viewerMode);
    window.history.replaceState({}, '', url);
    window.parent?.postMessage({ type: 'lungdev-stage-change', stage: selectedStage }, '*');
  }, [selectedStage, viewerMode]);

  useEffect(() => {
    if (!geneQuery) {
      setGeneMatches([]);
      return;
    }
    const q = geneQuery.trim().toLowerCase();
    if (!q) {
      setGeneMatches([]);
      return;
    }
    setGeneMatches(geneIndex.filter((g) => g.toLowerCase().includes(q)).slice(0, 20));
  }, [geneQuery, geneIndex]);

  async function selectGene(gene) {
    const base = import.meta.env.BASE_URL || './';
    setActiveGene(gene);
    const payload = await json(`${base}data/gene_expr/${encodeURIComponent(gene)}.json`);
    setGeneValues(payload?.values || null);
  }

  const obsColor = useMemo(() => {
    if (!colorField) return [];
    if (colorField === 'organ') return baseData.map((d) => d.organ);
    if (colorField === 'cell_type') return baseData.map((d) => d.cell_type);
    if (colorField === 'development_stage') return baseData.map((d) => d.development_stage);
    return obsColumns[colorField] || [];
  }, [colorField, baseData, obsColumns]);

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

    return baseData.map((d, i) => {
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
        return { ...d, color: categoryColor(String(label)) };
      }
      return { ...d, color: [140, 140, 140, 160] };
    });
  }, [baseData, geneValues, obsColor]);

  const activeStageLabel = DEVELOPMENT_STAGES.find((item) => item.id === selectedStage)?.label ?? 'Embryonic';

  return (
    <div className="app-wrap" data-mode={viewerMode}>
      <header>
        <h2>React Single-Cell Data Viewer</h2>
        <p>{viewerMode === 'dark' ? 'Dark' : 'Light'} mode synced from the parent lungdev atlas page</p>
      </header>
      <div className="dashboard-layout">
        <div>
          <div className="panel">
            <h3>Developmental Stage</h3>
            <p className="hint">Switch the UMAP subset between the five lung development stages.</p>
            <div className="stage-button-grid">
              {DEVELOPMENT_STAGES.map((stage, index) => (
                <button
                  key={stage.id}
                  className={`stage-button ${selectedStage === stage.id ? 'active' : ''}`}
                  style={{ '--stageTone': ['#e4572e', '#f28f3b', '#f5c542', '#4cbf6b', '#3b82f6'][index] }}
                  onClick={() => setSelectedStage(stage.id)}
                >
                  {stage.label}
                </button>
              ))}
            </div>
            <div className="stage-badge">Stage subset: {activeStageLabel}</div>
          </div>
          <div className="panel" style={{ marginTop: 12 }}>
            <h3>Color Controls</h3>
            <label>Obs metadata field</label>
            <select value={colorField} onChange={(e) => { setActiveGene(''); setGeneValues(null); setColorField(e.target.value); }}>
              <option value="">(coordinates only)</option>
              {obsFields.map((f) => <option key={f.name} value={f.name}>{f.name} ({f.kind})</option>)}
            </select>
            <label style={{ marginTop: 8 }}>Gene search (var_names)</label>
            <input value={geneQuery} onChange={(e) => setGeneQuery(e.target.value)} placeholder="e.g. LST1" />
            {geneMatches.length > 0 && (
              <div className="gene-list">
                {geneMatches.map((g) => <button key={g} onClick={() => selectGene(g)}>{g}</button>)}
              </div>
            )}
            <p className="hint">{activeGene ? `Colored by ${activeGene} expression (viridis)` : (colorField ? `Colored by ${colorField}` : 'Coordinate-only rendering')}</p>
          </div>
        </div>
        <SingleCellPlot data={coloredData} selectedStage={selectedStage} stageLabel={activeStageLabel} />
      </div>
    </div>
  );
}
