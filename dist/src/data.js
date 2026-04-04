export const DATA_VERSION = '2026-03-31.lungdev-mvp.v1';
export const DETERMINISTIC_SEED = 20260331;

export const siteMeta = {
  siteId: 'lungdev',
  label: 'lungdev',
  title: 'Lung Development Atlas',
  githubPagesUrl: 'https://chichaumiao-openclaw.github.io/lungdev/',
  customDomain: 'lungdev.gznl.org',
  strapline: 'A single-cell database of lung development from early fetal stages to mature adulthood.',
  heroIntro:
    'Map how epithelial, stromal, vascular, and immune compartments emerge, diverge, and mature across the human lung developmental axis.',
  mission:
    'Create a stage-resolved single-cell resource for understanding how the lung develops from early fetal stages to mature adulthood.',
  release: 'Prototype release 0.1',
  coverage: 'Normal lung development first',
  focus: 'Developmental atlas, temporal programs, lineage emergence, and developmental origins of adult lung states.',
  defaultTheme: 'lungdev'
};

export const databasePortfolio = [
  {
    id: 'lungdev',
    label: 'lungdev',
    axis: 'Development',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungdev/',
    customDomain: 'lungdev.gznl.org',
    summary: 'Stage-resolved developmental atlas from early fetal lung to mature adulthood.'
  },
  {
    id: 'lunginf',
    label: 'lunginf',
    axis: 'Infection / inflammation',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lunginf/',
    customDomain: 'lunginf.gznl.org',
    summary: 'Host response, pathogen-specific remodeling, and injury-repair programs.'
  },
  {
    id: 'lungcancer',
    label: 'lungcancer',
    axis: 'Cancer',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungcancer/',
    customDomain: 'lungcancer.gznl.org',
    summary: 'Malignant ecosystems, microenvironment remodeling, and clinical heterogeneity.'
  },
  {
    id: 'lungevo',
    label: 'lungevo',
    axis: 'Evolution',
    status: 'Integrated MVP',
    url: 'https://chichaumiao-openclaw.github.io/lungevo/',
    customDomain: 'lungevo.gznl.org',
    summary: 'Cross-species respiratory programs, homology, and lineage innovation.'
  }
];

export const navigationItems = [
  { id: 'home', label: 'Home', kicker: 'Program overview' },
  { id: 'atlas', label: 'Atlas', kicker: 'Stage-centered browsing' },
  { id: 'lineages', label: 'Lineages', kicker: 'Trajectory and maturation logic' },
  { id: 'markers', label: 'Markers', kicker: 'Gene spotlight and search' },
  { id: 'datasets', label: 'Datasets', kicker: 'Release scope and provenance' },
  { id: 'about', label: 'About', kicker: 'Mission, scope, and roadmap' }
];

export const developmentStageFilters = [
  {
    id: 'embryonic',
    label: 'Embryonic',
    color: '#e4572e',
    detail: 'Earliest respiratory specification and primordium organization.'
  },
  {
    id: 'pseudoglandular',
    label: 'Pseudoglandular',
    color: '#f28f3b',
    detail: 'Branching morphogenesis expands airway architecture and distal buds.'
  },
  {
    id: 'canalicular',
    label: 'Canalicular',
    color: '#f5c542',
    detail: 'Distal compartments diversify as gas-exchange programs begin to emerge.'
  },
  {
    id: 'saccular',
    label: 'Saccular',
    color: '#4cbf6b',
    detail: 'Saccules and transitional alveolar programs dominate late prenatal development.'
  },
  {
    id: 'alveolar',
    label: 'Alveolar',
    color: '#3b82f6',
    detail: 'Alveolar maturation and adult-like maintenance-state structure become visible.'
  }
];

export const heroMetrics = [
  { label: 'Developmental bins', value: '5', detail: 'early fetal to adult' },
  { label: 'Curated lineage tracks', value: '4', detail: 'epithelial, stromal, vascular, immune' },
  { label: 'Marker spotlight genes', value: '10', detail: 'launch-ready examples' },
  { label: 'Prototype datasets', value: '4', detail: 'release cards with provenance' }
];

export const stageTimeline = [
  {
    rank: 1,
    slug: 'early-fetal',
    label: 'Early fetal',
    window: '5-9 post-conception weeks',
    headline: 'Branching programs ignite',
    summary: 'Distal SOX9-rich buds and patterning mesenchyme define the earliest respiratory scaffold.',
    compartments: ['Distal progenitors', 'Patterning mesenchyme', 'Primitive endothelium'],
    question: 'Which early progenitor states seed adult distal lineages?'
  },
  {
    rank: 2,
    slug: 'late-fetal',
    label: 'Late fetal',
    window: '10-24 post-conception weeks',
    headline: 'Airway and alveolar bifurcation sharpens',
    summary: 'Airway secretory, ciliated, and distal alveolar precursor states become transcriptionally separable.',
    compartments: ['Airway secretory cells', 'Alveolar precursors', 'Expanding vasculature'],
    question: 'When do airway-specialized and alveolar-specialized programs become distinct?'
  },
  {
    rank: 3,
    slug: 'neonatal',
    label: 'Neonatal',
    window: 'Birth to 1 month',
    headline: 'Gas-exchange readiness emerges',
    summary: 'AT1 and AT2 maturation, vascular stabilization, and matrix remodeling support early postnatal function.',
    compartments: ['Maturing AT1/AT2', 'Contractile stromal cells', 'Capillary endothelium'],
    question: 'Which transitional neonatal states mark functional adaptation at birth?'
  },
  {
    rank: 4,
    slug: 'pediatric',
    label: 'Pediatric',
    window: '1 month to 18 years',
    headline: 'Expansion and structural refinement',
    summary: 'Ongoing alveolar expansion and immune residency acquisition reshape the tissue composition landscape.',
    compartments: ['Growing alveolar units', 'Matrix fibroblasts', 'Resident immune cells'],
    question: 'Which programs remain plastic during lung growth and remodeling?'
  },
  {
    rank: 5,
    slug: 'adult',
    label: 'Adult',
    window: '18+ years',
    headline: 'Maintenance-state equilibrium',
    summary: 'Stable epithelial, stromal, vascular, and immune compartments define the mature lung reference frame.',
    compartments: ['Mature alveolar epithelium', 'Homeostatic stroma', 'Resident immunity'],
    question: 'Which adult states preserve developmental memory versus maintenance-only signatures?'
  }
];

export const atlasViews = [
  {
    title: 'Distal epithelial emergence',
    stage: 'Early fetal to late fetal',
    summary: 'Trace SOX9-positive bud states into SFTPC-positive alveolar precursors and later mature alveolar programs.'
  },
  {
    title: 'Airway maturation axis',
    stage: 'Late fetal to pediatric',
    summary: 'Separate secretory, ciliated, and epithelial support programs as airway compartments specialize.'
  },
  {
    title: 'Mesenchymal remodeling',
    stage: 'Fetal to adult',
    summary: 'Follow contractile, matrix-producing, and supportive stromal states as tissue architecture stabilizes.'
  },
  {
    title: 'Immune residency acquisition',
    stage: 'Neonatal to adult',
    summary: 'Map when lung-resident immune populations appear and how they decouple from developmental inflammation.'
  }
];

export const lineageTracks = [
  {
    name: 'Distal epithelial lineage',
    start: 'SOX9-positive distal buds',
    transition: 'Tip progenitor -> alveolar precursor -> mature AT1 / AT2 equilibrium',
    anchors: ['SOX9', 'SFTPC', 'AGER'],
    insight: 'The distal trajectory anchors developmental origin analysis for mature gas-exchange states.'
  },
  {
    name: 'Airway secretory lineage',
    start: 'Fetal airway epithelial progenitors',
    transition: 'Airway progenitor -> secretory intermediate -> club / secretory maintenance states',
    anchors: ['SCGB3A2', 'SCGB1A1', 'KRT19'],
    insight: 'Airway specialization clarifies when proximal epithelial programs diverge from distal maturation.'
  },
  {
    name: 'Mesenchymal support lineage',
    start: 'Patterning mesenchyme',
    transition: 'Patterning fibroblast -> matrix remodeling fibroblast -> adult support stroma',
    anchors: ['COL1A1', 'ACTA2', 'DCN'],
    insight: 'Stromal transitions frame the structural context in which epithelial maturation occurs.'
  },
  {
    name: 'Resident immune acquisition',
    start: 'Transient developmental immune influx',
    transition: 'Inflammatory recruitment -> tissue adaptation -> resident immune surveillance',
    anchors: ['LYZ', 'C1QA', 'HLA-DRA'],
    insight: 'This track helps separate developmental immune programs from later homeostatic residency.'
  }
];

export const markerCatalog = [
  {
    gene: 'SOX9',
    compartment: 'Epithelium',
    stage: 'Early fetal',
    lineage: 'Distal epithelial lineage',
    role: 'Distal tip progenitor regulator',
    summary: 'Highlights branching epithelial progenitors before alveolar maturation programs appear.'
  },
  {
    gene: 'SFTPC',
    compartment: 'Epithelium',
    stage: 'Late fetal',
    lineage: 'Distal epithelial lineage',
    role: 'Alveolar precursor and AT2-associated marker',
    summary: 'Tracks distal epithelial commitment into the surfactant-producing alveolar program.'
  },
  {
    gene: 'AGER',
    compartment: 'Epithelium',
    stage: 'Neonatal',
    lineage: 'Distal epithelial lineage',
    role: 'AT1 maturation marker',
    summary: 'Signals the emergence of thin, gas-exchange-specialized alveolar epithelium.'
  },
  {
    gene: 'SCGB3A2',
    compartment: 'Airway epithelium',
    stage: 'Late fetal',
    lineage: 'Airway secretory lineage',
    role: 'Early secretory airway program marker',
    summary: 'Marks airway epithelial specialization before adult club-cell stabilization.'
  },
  {
    gene: 'FOXJ1',
    compartment: 'Airway epithelium',
    stage: 'Late fetal',
    lineage: 'Airway secretory lineage',
    role: 'Ciliogenesis transcription factor',
    summary: 'Separates ciliated differentiation from parallel secretory epithelial branches.'
  },
  {
    gene: 'ACTA2',
    compartment: 'Stroma',
    stage: 'Neonatal',
    lineage: 'Mesenchymal support lineage',
    role: 'Contractile stromal marker',
    summary: 'Captures airway and vascular support states linked to structural refinement.'
  },
  {
    gene: 'COL1A1',
    compartment: 'Stroma',
    stage: 'Pediatric',
    lineage: 'Mesenchymal support lineage',
    role: 'Matrix-producing fibroblast marker',
    summary: 'Reflects extracellular matrix remodeling during growth and architectural stabilization.'
  },
  {
    gene: 'PECAM1',
    compartment: 'Vasculature',
    stage: 'Late fetal',
    lineage: 'Vascular maturation',
    role: 'Endothelial identity marker',
    summary: 'Provides a vascular anchor for mapping capillary expansion alongside alveolar maturation.'
  },
  {
    gene: 'C1QA',
    compartment: 'Immune',
    stage: 'Pediatric',
    lineage: 'Resident immune acquisition',
    role: 'Resident macrophage-associated marker',
    summary: 'Marks the acquisition of tissue-adapted immune surveillance states in the growing lung.'
  },
  {
    gene: 'HLA-DRA',
    compartment: 'Immune',
    stage: 'Adult',
    lineage: 'Resident immune acquisition',
    role: 'Antigen-presentation marker',
    summary: 'Highlights mature immune residency and local immune communication in adult tissue.'
  }
];

export const markerSearchSuggestions = ['SOX9', 'SFTPC', 'AGER', 'SCGB3A2', 'ACTA2'];

export const datasetReleases = [
  {
    id: 'LD-DS-001',
    title: 'Human fetal-to-adult reference integration',
    coverage: 'Early fetal to adult',
    cells: '182,400 cells',
    assays: 'scRNA-seq + snRNA-seq',
    status: 'Prototype metadata',
    note: 'Reference release defining the stage backbone for the MVP atlas.'
  },
  {
    id: 'LD-DS-002',
    title: 'Airway maturation cohort',
    coverage: 'Late fetal to pediatric',
    cells: '64,200 cells',
    assays: 'scRNA-seq',
    status: 'Prototype metadata',
    note: 'Focused on proximal epithelial specialization and secretory-ciliated transitions.'
  },
  {
    id: 'LD-DS-003',
    title: 'Neonatal alveolar transition panel',
    coverage: 'Neonatal',
    cells: '38,700 cells',
    assays: 'scRNA-seq + spatial anchoring',
    status: 'Prototype metadata',
    note: 'Captures birth-associated functional adaptation in the distal lung.'
  },
  {
    id: 'LD-DS-004',
    title: 'Adult maintenance-state reference',
    coverage: 'Adult',
    cells: '51,900 cells',
    assays: 'snRNA-seq',
    status: 'Prototype metadata',
    note: 'Provides the mature endpoint for developmental origin comparisons.'
  }
];

export const evidenceHighlights = [
  { label: 'Stage model', value: '5 bins', detail: 'early fetal -> late fetal -> neonatal -> pediatric -> adult' },
  { label: 'Primary filters', value: '5', detail: 'stage, age, region, cell type, dataset' },
  { label: 'Core lineage views', value: '4', detail: 'distal, airway, stromal, immune' },
  { label: 'Launch provenance cards', value: '4', detail: 'dataset release notes included' }
];

export const coreQuestions = [
  'How do major lung cell types emerge, differentiate, and mature over developmental time?',
  'Which cell states are stage-specific and which are persistent across stages?',
  'What transcriptional programs define fetal, neonatal, pediatric, and adult transitions?',
  'Which adult cell states can be traced back to developmental origins?'
];

export const targetUsers = [
  'Developmental biologists',
  'Lung biologists',
  'Single-cell analysts',
  'Clinicians interested in developmental origins'
];

export const scopeBoundaries = [
  'Normal lung development first; disease-focused comparisons are out of scope for the MVP.',
  'The organizing axis is developmental time rather than a generic dataset catalog.',
  'Multi-dataset integration is allowed, but developmental ordering is the primary navigation logic.'
];

export const metadataPriorities = [
  'Developmental stage',
  'Age',
  'Tissue region',
  'Cell type',
  'Lineage / trajectory',
  'Marker genes',
  'Dataset / source',
  'Provenance and release notes'
];

export const methodsResources = [
  {
    title: 'Atlas interpretation guide',
    detail: 'Summarizes how stage labels, lineage tracks, and marker spotlights should be read in the MVP.'
  },
  {
    title: 'Dataset provenance cards',
    detail: 'Expose release scope, assay type, and current prototype confidence for each reference set.'
  },
  {
    title: 'Phase expansion targets',
    detail: 'Defines how lungInf, lungcancer, and lungevo will inherit the scaffold without collapsing into one template.'
  }
];

export const provenanceHistory = [
  '2026-03-18 four-database scientific program defined',
  '2026-03-21 lungdev selected as the first implementation target',
  '2026-03-31 lungdev working directory created and MVP route refactor started'
];

export const routeCopy = {
  home: {
    eyebrow: 'Development axis',
    title: 'Track the emergence of the lung across developmental time',
    description: 'Use the homepage to orient around stage progression, lineage emergence, marker genes, and the MVP dataset footprint.'
  },
  atlas: {
    eyebrow: 'Stage browser',
    title: 'Atlas views organized by developmental stage',
    description: 'Use the developmental-stage buttons to switch the embedded UMAP between embryonic, pseudoglandular, canalicular, saccular, and alveolar views.'
  },
  lineages: {
    eyebrow: 'Trajectory logic',
    title: 'Lineages and maturation programs',
    description: 'Inspect how developmental trajectories connect transient progenitor states to mature adult compartments.'
  },
  markers: {
    eyebrow: 'Gene spotlight',
    title: 'Marker genes for developmental interpretation',
    description: 'Search markers across stage, lineage, and compartment to anchor developmental hypotheses.'
  },
  datasets: {
    eyebrow: 'Release scope',
    title: 'Datasets, provenance, and prototype evidence',
    description: 'Review what is in the MVP, what each release covers, and which metadata dimensions are explicitly tracked.'
  },
  about: {
    eyebrow: 'Mission and scope',
    title: 'Why lungdev exists inside the four-database program',
    description: 'Clarify the scientific mission, scope boundaries, target users, and how lungdev stays distinct from the other three portals.'
  }
};

export const bundleCrossLinks = {
  home: [
    {
      siteId: 'lunginf',
      route: 'conditions',
      title: 'Compare development with infection-driven remodeling',
      summary: 'Use condition anchors to ask which injury and repair states echo or diverge from developmental lung programs.'
    },
    {
      siteId: 'lungevo',
      route: 'species',
      title: 'Set human development inside vertebrate respiratory evolution',
      summary: 'Move from stage progression into fish-to-human species anchors to distinguish conserved from lineage-specific structure.'
    },
    {
      siteId: 'lungcancer',
      route: 'subtypes',
      title: 'Track adult-lineage programs resurfacing in tumor ecosystems',
      summary: 'Compare developmental cell-state logic with malignant subtype programs and therapy-linked plasticity.'
    }
  ],
  atlas: [
    {
      siteId: 'lungevo',
      route: 'species',
      title: 'Add comparative species context to developmental UMAP views',
      summary: 'Use the species backbone to ask which respiratory cell programs predate mature human lung states.'
    },
    {
      siteId: 'lunginf',
      route: 'conditions',
      title: 'Contrast developmental baselines with infected lung states',
      summary: 'Jump from normal stage-resolved tissue structure into healthy-versus-infected condition comparison.'
    }
  ],
  lineages: [
    {
      siteId: 'lungevo',
      route: 'programs',
      title: 'Compare lineage emergence with conserved and divergent programs',
      summary: 'Use evolutionary program calls to test which developmental transitions look deeply conserved versus later-specialized.'
    },
    {
      siteId: 'lungcancer',
      route: 'biomarkers',
      title: 'Check lineage-associated markers in tumor ecosystems',
      summary: 'Connect developmental lineage anchors to malignant and microenvironment biomarker interpretation.'
    }
  ],
  markers: [
    {
      siteId: 'lungcancer',
      route: 'biomarkers',
      title: 'Follow developmental markers into lung cancer biomarker space',
      summary: 'Compare developmental genes against subtype- and treatment-linked malignant marker programs.'
    },
    {
      siteId: 'lungevo',
      route: 'orthologs',
      title: 'Compare marker genes against ortholog and homology mappings',
      summary: 'Use the ortholog workspace to see which developmental markers stay interpretable across species.'
    }
  ],
  datasets: [
    {
      siteId: 'lunginf',
      route: 'datasets',
      title: 'Inspect the infection release table',
      summary: 'Compare developmental datasets with healthy-versus-infected release logic and immune-response framing.'
    },
    {
      siteId: 'lungevo',
      route: 'datasets',
      title: 'Review the comparative evolution release table',
      summary: 'Use comparative dataset provenance to align developmental interpretation with species and homology assumptions.'
    }
  ],
  about: [
    {
      siteId: 'lunginf',
      route: 'home',
      title: 'See how the infection portal stays distinct from development',
      summary: 'The infection axis centers host response, pathogen class, and tissue injury rather than developmental time.'
    },
    {
      siteId: 'lungcancer',
      route: 'home',
      title: 'See how the cancer portal reuses the shell without reusing the biology',
      summary: 'The cancer axis organizes the same platform around malignant ecosystems, subtype logic, and clinical heterogeneity.'
    },
    {
      siteId: 'lungevo',
      route: 'home',
      title: 'See how the evolution portal reframes lung questions comparatively',
      summary: 'The evolution axis centers homolog mapping, species anchors, and conserved versus divergent respiratory programs.'
    }
  ]
};

export const launchChecklist = [
  'Route-complete MVP across home, atlas, lineages, markers, datasets, and about',
  'Development-specific homepage narrative and stage timeline',
  'Marker spotlight and searchable gene catalog entry point',
  'Dataset cards with provenance and prototype status',
  'Cross-linked bundle metadata, mobile nav shell, and custom-domain deployment wiring',
  'Build and regression checks updated for lungdev'
];
