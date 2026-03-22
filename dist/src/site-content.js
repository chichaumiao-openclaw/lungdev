export const siteConfig = {
  siteName: 'LungDev',
  tagline: 'A developmental atlas for lung formation, lineage transitions, and stage-specific programs.',
  themeKey: 'blue',
  routes: ['home', 'atlas', 'lineages', 'markers', 'datasets', 'about'],
  navLabels: {
    home: 'Home',
    atlas: 'Development Atlas',
    lineages: 'Lineages',
    markers: 'Marker Programs',
    datasets: 'Datasets',
    about: 'About'
  },
  hero: {
    eyebrow: 'Development-focused prototype',
    title: 'Map lung development across stages, lineages, and marker programs',
    description:
      'LungDev organizes embryonic-to-adult developmental references into one navigation model for stage-aware exploration, lineage transitions, and reusable atlas datasets.'
  },
  metrics: [
    { label: 'Developmental stages', value: '12' },
    { label: 'Cell states tracked', value: '48' },
    { label: 'Reference datasets', value: '16' },
    { label: 'Marker programs', value: '96' }
  ],
  stageCards: [
    { name: 'Embryonic', count: '4 atlases' },
    { name: 'Fetal', count: '5 atlases' },
    { name: 'Neonatal', count: '3 atlases' },
    { name: 'Adult reference', count: '4 atlases' }
  ],
  lineageCards: [
    { title: 'Epithelial trajectories', text: 'Follow proximal-distal differentiation and alveolar maturation programs.' },
    { title: 'Mesenchymal remodeling', text: 'Track fibroblast, smooth muscle, and stromal niche transitions over time.' },
    { title: 'Immune seeding', text: 'Summarize resident immune population emergence during development.' }
  ],
  markerSections: [
    { title: 'Branching morphogenesis markers', text: 'Prioritize genes tied to early epithelial bud outgrowth and branching events.' },
    { title: 'Alveolar maturation markers', text: 'Surface stage-linked signatures for AT1/AT2 maturation and surfactant programs.' },
    { title: 'Lineage commitment markers', text: 'Compare progenitor-to-terminal-state marker switches across datasets.' }
  ],
  datasets: [
    'Single-cell developmental atlas releases',
    'Spatial maps of fetal and neonatal lung',
    'Cross-stage marker reference panels',
    'Trajectory-ready harmonized matrices'
  ],
  about:
    'Prototype built from the shared four-database template. This first version proves the IA, theme system, and route structure for the development-focused site.'
};
