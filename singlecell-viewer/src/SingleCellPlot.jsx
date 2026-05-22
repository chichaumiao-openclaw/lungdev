import React, { useEffect, useMemo, useRef } from 'react';

function hslToRgba(h, s, l, a) {
  const aa = s * Math.min(l, 1 - l);
  const f = (n) => {
    const k = (n + h * 12) % 12;
    return Math.round(255 * (l - aa * Math.max(-1, Math.min(k - 3, 9 - k, 1))));
  };
  return [f(0), f(8), f(4), a];
}

function categoryColor(category) {
  let hash = 0;
  for (let i = 0; i < category.length; i += 1) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  return hslToRgba((hash % 360) / 360, 0.65, 0.52, 220);
}

function getCategoryColor(cat, colorField, h5adMeta) {
  if (h5adMeta?.color_maps?.[colorField]?.[cat]) {
    const hex = h5adMeta.color_maps[colorField][cat];
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b, 220];
  }
  return categoryColor(cat);
}

export default function SingleCellPlot({
  data,
  selectedStage,
  stageLabel,
  colorField,
  showCellTypeSidebar,
  uniqueCategories,
  categoryCounts,
  hiddenCategories,
  onToggleCategory,
  onShowAll,
  onHideAll,
  h5adMeta
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const computed = getComputedStyle(document.body);
    const canvasFill = computed.getPropertyValue('--viewer-canvas').trim() || '#0b1220';

    const width = canvas.clientWidth || 900;
    const height = canvas.clientHeight || 560;
    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = canvasFill;
    ctx.fillRect(0, 0, width, height);

    if (!data.length) return;

    const minX = Math.min(...data.map((d) => d.x));
    const maxX = Math.max(...data.map((d) => d.x));
    const minY = Math.min(...data.map((d) => d.y));
    const maxY = Math.max(...data.map((d) => d.y));
    const spanX = Math.max(maxX - minX, 1e-6);
    const spanY = Math.max(maxY - minY, 1e-6);
    const pad = 16;

    // Point size: larger for small datasets, smaller for large
    const ptSize = data.length < 10000 ? 2.2 : data.length < 50000 ? 1.8 : 1.2;

    for (const d of data) {
      const px = ((d.x - minX) / spanX) * (width - pad * 2) + pad;
      const py = height - (((d.y - minY) / spanY) * (height - pad * 2) + pad);
      const c = d.color || [120, 120, 120, 220];
      ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},0.82)`;
      ctx.fillRect(px, py, ptSize, ptSize);
    }
  }, [data]);

  return (
    <div className="plot-with-sidebar">
      <div className="panel plot-panel">
        <h3>
          UMAP &mdash; {data.length.toLocaleString()} cells
          {hiddenCategories.size > 0 && ` (${(data.length).toLocaleString()} visible)`}
        </h3>
        <p className="hint">{stageLabel} stage{colorField ? ` · colored by ${colorField}` : ''}</p>
        <div className="plot-main">
          <canvas ref={canvasRef} className="umap-canvas" />
        </div>
      </div>

      {showCellTypeSidebar && uniqueCategories.length > 0 && (
        <div className="panel cell-type-sidebar">
          <div className="sidebar-header">
            <h4>Group</h4>
            <div className="sidebar-actions">
              <button className="sidebar-btn" onClick={onShowAll}>Show All</button>
              <button className="sidebar-btn" onClick={onHideAll}>Hide All</button>
            </div>
          </div>
          <div className="cell-type-list">
            {uniqueCategories.map((cat) => {
              const isHidden = hiddenCategories.has(cat);
              const color = getCategoryColor(cat, colorField, h5adMeta);
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  className={`cell-type-item ${isHidden ? 'cell-type-item--hidden' : ''}`}
                  onClick={() => onToggleCategory(cat)}
                  title={cat}
                >
                  <span
                    className="cell-type-swatch"
                    style={{ background: `rgba(${color[0]},${color[1]},${color[2]},0.85)` }}
                  />
                  <span className="cell-type-name">{cat}</span>
                  <span className="cell-type-count">{count.toLocaleString()}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
