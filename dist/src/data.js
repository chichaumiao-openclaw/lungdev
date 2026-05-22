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
  release: 'Release 0.1',
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
    id: 'fetal',
    label: 'Fetal',
    color: '#e4572e',
    detail: 'Earliest respiratory specification and primordium organization.'
  }
];

export const heroMetrics = [
  { label: 'Developmental bins', value: '1', detail: 'fetal' },
  { label: 'Curated lineage tracks', value: '4', detail: 'epithelial, stromal, vascular, immune' },
  { label: 'Marker spotlight genes', value: '10', detail: 'launch-ready examples' },
  { label: 'Datasets', value: '4', detail: 'release cards with provenance' }
];

export const stageTimeline = [
  {
    rank: 1,
    slug: 'early-fetal',
    label: '01 Early fetal',
    window: 'Human: 5–9 pcw\nMouse: E9.5–E12.5',
    headline: 'Branching programs ignite',
    summary: 'Distal SOX9-rich buds and patterning mesenchyme define the earliest respiratory scaffold.',
    compartments: ['Distal progenitors', 'Patterning mesenchyme', 'Primitive endothelium'],
    question: 'Which early progenitor states seed adult distal lineages?',
    biologicalEvents: `<ul>
      <li><strong>Branching morphogenesis:</strong> Formation of the primitive bronchial tree through repetitive branching</li>
      <li><strong>Proximal-distal patterning:</strong> Establishment of airway vs. distal epithelial identity</li>
      <li><strong>SOX9+ distal tip progenitors:</strong> Key stem cell population for distal lung development</li>
      <li><strong>Mesenchymal expansion:</strong> Formation of patterning mesenchyme surrounding epithelial buds</li>
      <li><strong>Primitive vasculature:</strong> Emergence of endothelial cells forming primitive capillary networks</li>
    </ul>`,
    cellInteractions: `<ul>
      <li><strong>Epithelial-mesenchymal crosstalk:</strong> FGF10 from mesenchyme to epithelial tips via FGFR2b</li>
      <li><strong>Wnt signaling:</strong> Wnt2/Wnt2b in mesenchyme activates β-catenin in epithelium</li>
      <li><strong>BMP antagonism:</strong> Noggin (mesenchyme) antagonizes BMP4 to permit branching</li>
      <li><strong>SHH signaling:</strong> Epithelial SHH patterns surrounding mesenchyme</li>
    </ul>`,
    moreQuestions: `<ul>
      <li><strong>What initiates the first branching event?</strong> — Understanding organ size/shape determination</li>
      <li><strong>How is SOX9 activity temporally regulated?</strong> — CRITICAL for distal lung diseases</li>
      <li><strong>Origin of lung mesenchymal diversity?</strong> — Implications for fibrosis and repair</li>
      <li><strong>Cross-species conservation of early progenitors?</strong> — Human-to-mouse translation gaps</li>
    </ul>`
  },
  {
    rank: 2,
    slug: 'late-fetal',
    label: '02 Late fetal',
    window: 'Human: 10–24 pcw\nMouse: E12.5–E17.5',
    headline: 'Airway differentiation accelerates and alveolar priming begins',
    summary: 'Airway secretory, ciliated, and distal alveolar precursor states become transcriptionally separable.',
    compartments: ['Airway secretory cells', 'Alveolar precursors', 'Expanding vasculature'],
    question: 'When do airway-specialized and alveolar-specialized programs become distinct?',
    biologicalEvents: `<ul>
      <li><strong>Canalicular to saccular transition:</strong> Formation of terminal sacs (saccules) — canalicular (10–16 pcw) transitions into saccular phase (16–24 pcw)</li>
      <li><strong>Airway epithelial differentiation:</strong> Separation of proximal airway lineages</li>
      <li><strong>Ciliated cell emergence:</strong> Onset of mucociliary differentiation</li>
      <li><strong>Secretory cell specification:</strong> Secretory progenitor specification begins (mature club cells emerge postnatally)</li>
      <li><strong>Alveolar precursor emergence:</strong> BP (bipotent progenitor) cells emerge and initiate AT1/AT2 fate specification in late fetal period (full maturation completes postnatally)</li>
    </ul>`,
    cellInteractions: `<ul>
      <li><strong>Notch lateral inhibition:</strong> DLL3 and JAG1/2 mediate secretory vs. ciliated fate specification via lateral inhibition</li>
      <li><strong>Mesenchymal-epithelial signaling:</strong> PDGFB/PDGFC from epithelium recruits alveolar fibroblasts and pericytes</li>
      <li><strong>Hypoxia signaling:</strong> HIF pathway drives microvascular remodeling and saccular structural refinement</li>
      <li><strong>Immune-epithelial crosstalk:</strong> Emerging myeloid populations near epithelial tips contribute to tissue patterning</li>
    </ul>`,
    moreQuestions: `<ul>
      <li><strong>Timing of AT1/AT2 fate specification?</strong> — Prematurity & BPD implications</li>
      <li><strong>Goblet cell origin in human fetal lung?</strong> — Asthma developmental origins</li>
      <li><strong>Innervation timing and its role?</strong> — Control of breathing onset</li>
      <li><strong>Spatial patterning of airway lineages?</strong> — Regional susceptibility to disease</li>
    </ul>`
  },
  {
    rank: 3,
    slug: 'neonatal',
    label: '03 Neonatal',
    window: 'Human: Birth–1 mo\nMouse: P0–P5',
    headline: 'Gas-exchange readiness emerges',
    summary: 'AT1 and AT2 maturation, vascular stabilization, and matrix remodeling support early postnatal function.',
    compartments: ['Maturing AT1/AT2', 'Contractile stromal cells', 'Capillary endothelium'],
    question: 'Which transitional neonatal states mark functional adaptation at birth?',
    biologicalEvents: `<ul>
      <li><strong>Alveolarization onset:</strong> Formation of true alveoli with thin gas-exchange membranes</li>
      <li><strong>AT1/AT2 maturation:</strong> Progressive functional maturation of alveolar epithelial cells (full maturation extends into childhood)</li>
      <li><strong>Vascular remodeling:</strong> Capillary network maturation and stabilization</li>
      <li><strong>Matrix remodeling:</strong> Progressive collagen subtype remodeling with elastic fiber deposition in the alveolar interstitium</li>
      <li><strong>Stretch-induced signaling:</strong> Mechanical forces drive alveolar epithelial maturation</li>
      <li><strong>YAP/TAZ mechanotransduction:</strong> Mechanical stretch activates YAP/TAZ transcriptional program; critical for alveolar epithelial maturation and secondary septation initiation</li>
    </ul>`,
    cellInteractions: `<ul>
      <li><strong>AT1-AT2 crosstalk:</strong> Physical interaction and signaling required for AT2 homeostasis</li>
      <li><strong>Lipid signaling:</strong> AT2-derived surfactant lipids affect alveolar mechanics</li>
      <li><strong>Macrophage-epithelial interaction:</strong> Alveolar macrophages clear debris and regulate repair</li>
      <li><strong>Fibroblast-myofibroblast transition:</strong> TGF-β and PDGF signaling drive alveolar interstitial myofibroblast activation; PDGFB/PDGFRβ drives interstitial cell recruitment during secondary septation</li>
      <li><strong>YAP/TAZ mechanosensing:</strong> Matrix stiffness and cyclic stretch activate YAP/TAZ; coordinates epithelial-mesenchymal cross-talk during alveolar formation</li>
    </ul>`,
    moreQuestions: `<ul>
      <li><strong>Mechanical triggers of alveolar formation?</strong> — YAP/TAZ-dependent mechanosensing; BPD prevention strategies</li>
      <li><strong>AT2-to-AT1 transdifferentiation capacity?</strong> — Regenerative medicine potential</li>
      <li><strong>Microbiome influence on alveolarization?</strong> — Early-life lung health</li>
      <li><strong>Sex differences in neonatal lung development?</strong> — Gender-specific medicine</li>
    </ul>`
  },
  {
    rank: 4,
    slug: 'pediatric',
    label: '04 Pediatric',
    window: 'Human: 1 mo–10 yr (up to adolescence)\nMouse: P5–P30',
    headline: 'Expansion and structural refinement',
    summary: 'Ongoing alveolar expansion and immune residency acquisition reshape the tissue composition landscape.',
    compartments: ['Growing alveolar units', 'Matrix fibroblasts', 'Resident immune cells'],
    question: 'Which programs remain plastic during lung growth and remodeling?',
    biologicalEvents: `<ul>
      <li><strong>Alveolar multiplication:</strong> Secondary septation creates new alveoli until ~8–10 years, with ongoing refinement potentially extending into adolescence</li>
      <li><strong>Airway growth:</strong> Diameter and length increase proportionally with body size</li>
      <li><strong>Immune system education:</strong> Adaptive immunity continues to develop and diversify; innate immunity remains the dominant defense in early childhood</li>
      <li><strong>Stem cell niche establishment:</strong> Quiescent pools of basal cells and AT2 cells</li>
      <li><strong>Environmental exposure:</strong> Response to pathogens, allergens, and pollutants</li>
    </ul>`,
    cellInteractions: `<ul>
      <li><strong>Basal cell-stromal interaction:</strong> Niche signals maintain basal cell quiescence</li>
      <li><strong>Immune-epithelial dialogue:</strong> ILC2s respond to alarmins from damaged epithelium</li>
      <li><strong>Neuronal-epithelial crosstalk:</strong> Cholinergic signaling regulates airway mucus secretion, ciliary beating, and smooth muscle tone</li>
      <li><strong>Microbiome-immune education:</strong> Early colonizing bacteria shape lung immunity</li>
    </ul>`,
    moreQuestions: `<ul>
      <li><strong>When does alveolarization truly complete?</strong> — ~8–10 yr in humans; critical window for lung insults</li>
      <li><strong>Developmental origins of asthma?</strong> — Early intervention strategies</li>
      <li><strong>Air pollution impact on developing lung?</strong> — Public health implications</li>
      <li><strong>Sexual dimorphism in pediatric lung?</strong> — Explain asthma gender bias</li>
    </ul>`
  },
  {
    rank: 5,
    slug: 'adult',
    label: '05 Adult',
    window: 'Human: 18+ yr\nMouse: ≥P30',
    headline: 'Maintenance-state equilibrium',
    summary: 'Stable epithelial, stromal, vascular, and immune compartments define the mature lung reference frame.',
    compartments: ['Mature alveolar epithelium', 'Homeostatic stroma', 'Resident immunity'],
    question: 'Which adult states preserve developmental memory versus maintenance-only signatures?',
    biologicalEvents: `<ul>
      <li><strong>Epithelial homeostasis:</strong> Continuous turnover of airway and alveolar epithelium</li>
      <li><strong>Basal cell-driven repair:</strong> Tracheobronchial regeneration from KRT5+ TP63+ basal cells</li>
      <li><strong>AT2 stem cell function:</strong> scRNA-seq reveals heterogeneity in AT2 populations</li>
      <li><strong>Vascular maintenance:</strong> Endothelial cell turnover and remodeling</li>
      <li><strong>Immune surveillance:</strong> Resident memory T cells and alveolar macrophages</li>
    </ul>`,
    cellInteractions: `<ul>
      <li><strong>Basal cell differentiation:</strong> Lineage plasticity in response to injury; basal cells replenish airway lineages while distal progenitors drive alveolar repair</li>
      <li><strong>AT2 → AT1 differentiation:</strong> Injury-induced reprogramming for repair</li>
      <li><strong>BASC expansion:</strong> Bronchioalveolar stem cells expand during repair in mouse lung (Notch-dependent); a human equivalent remains poorly defined in steady-state adult lung</li>
      <li><strong>Senescence in aging:</strong> p16Ink4a+ senescent cells accumulate; affect repair capacity</li>
    </ul>`,
    moreQuestions: `<ul>
      <li><strong>Can we enhance human alveolar regeneration?</strong> — COPD/IPF therapeutics</li>
      <li><strong>Aging's impact on stem cell niches?</strong> — Age-related lung disease</li>
      <li><strong>Cell-of-origin of lung adenocarcinoma?</strong> — Cancer prevention strategies</li>
      <li><strong>Organoid-to-in-vivo translation?</strong> — Personalized medicine</li>
    </ul>`
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

export const otherAtlasViews = [
  {
    title: 'Endothelial-epithelial crosstalk',
    stage: 'Early fetal to adult',
    summary: 'Map the interaction between vasculogenesis and angiogenesis; trace VEGF/BMP4/WNT/ANG-1 signaling pathways that govern pulmonary vascular development.'
  },
  {
    title: 'Neuroendocrine bioactive niche',
    stage: 'Fetal to neonatal',
    summary: 'Identify ASCL1/NOTCH/Igf2 regulated programs in the largest bioactive peptide reservoir; follow the commitment of facultative stem cells.'
  },
  {
    title: 'Cellular plasticity & regeneration',
    stage: 'Late fetal to adult',
    summary: 'Trace the reversible transformation between AT2 and AT1 cells; follow Club to PNEC transdifferentiation and EMT dynamics.'
  },
  {
    title: 'Aging-development axis',
    stage: 'Adult to elderly',
    summary: 'Investigate the developmental-aging continuum of AT2 cells; map SASP factors and their role in progressive pulmonary fibrosis.'
  }
];

export const lineageTracks = [
  {
    name: 'Distal epithelial lineage',
    start: 'SOX9-positive distal buds',
    transition: 'Tip progenitor -> alveolar precursor -> mature AT1 / AT2 equilibrium',
    anchors: ['SOX9', 'SFTPC', 'AGER'],
    insight: 'The distal trajectory anchors developmental origin analysis for mature gas-exchange states.',
    tag: 'Core Lineage'
  },
  {
    name: 'Airway secretory lineage',
    start: 'Fetal airway epithelial progenitors',
    transition: 'Airway progenitor -> secretory intermediate -> club / secretory maintenance states',
    anchors: ['SCGB3A2', 'SCGB1A1', 'KRT19'],
    insight: 'Airway specialization clarifies when proximal epithelial programs diverge from distal maturation.',
    tag: 'Core Lineage'
  },
  {
    name: 'Mesenchymal support lineage',
    start: 'Patterning mesenchyme',
    transition: 'Patterning fibroblast -> matrix remodeling fibroblast -> adult support stroma',
    anchors: ['COL1A1', 'ACTA2', 'DCN'],
    insight: 'Stromal transitions frame the structural context in which epithelial maturation occurs.',
    tag: 'Core Lineage'
  },
  {
    name: 'Resident immune acquisition',
    start: 'Transient developmental immune influx',
    transition: 'Inflammatory recruitment -> tissue adaptation -> resident immune surveillance',
    anchors: ['LYZ', 'C1QA', 'HLA-DRA'],
    insight: 'This track helps separate developmental immune programs from later homeostatic residency.',
    tag: 'Core Lineage'
  },
  {
    name: 'Endothelial lineage',
    start: 'General capillary progenitor',
    transition: 'gCap progenitor -> aCap / gCap bifurcation -> mature capillary network',
    anchors: ['PECAM1', 'CA4', 'GPIHBP1'],
    insight: 'Describes how the pulmonary microvascular network synchronizes with alveolar epithelium to establish the blood-gas barrier.',
    tag: 'Supplementary Lineage'
  },
  {
    name: 'Neuroendocrine lineage',
    start: 'Airway epithelial progenitor',
    transition: 'Airway progenitor -> Pre-PNEC -> mature PNEC / NE cluster',
    anchors: ['ASCL1', 'CHGA', 'CALCA'],
    insight: 'Resolves the origin of the lung bioactive peptide reservoir and the specialization of rare cell populations.',
    tag: 'Supplementary Lineage'
  },
  {
    name: 'Cell plasticity track',
    start: 'Bipotential alveolar progenitor',
    transition: 'Bipotential progenitor -> AT2-state ↔ AT1-state (reversible transitions)',
    anchors: ['ETV5', 'NKX2-1', 'HOPX'],
    insight: 'Demonstrates how cell states oscillate or commit between fates during injury repair or late development.',
    tag: 'Supplementary Lineage'
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
  },
  {
    gene: 'CA4',
    compartment: 'Vasculature',
    stage: 'Neonatal',
    lineage: 'Endothelial lineage',
    role: 'Capillary differentiation marker',
    summary: 'Marks aerocyte (aCap) specialization in the neonatal lung, supporting gas-exchange maturation.'
  },
  {
    gene: 'GPIHBP1',
    compartment: 'Vasculature',
    stage: 'Neonatal',
    lineage: 'Endothelial lineage',
    role: 'Lipid transport in capillaries',
    summary: 'Highlights general capillary (gCap) identity and the establishment of the alveolar capillary network.'
  },
  {
    gene: 'ASCL1',
    compartment: 'Airway epithelium',
    stage: 'Late fetal',
    lineage: 'Neuroendocrine lineage',
    role: 'NE cell fate determinant',
    summary: 'Master regulator driving airway progenitors toward the neuroendocrine differentiation program.'
  },
  {
    gene: 'CHGA',
    compartment: 'Airway epithelium',
    stage: 'Late fetal',
    lineage: 'Neuroendocrine lineage',
    role: 'NE granule component',
    summary: 'Tracks the maturation of neuroendocrine granules and peptide hormone production in PNECs.'
  },
  {
    gene: 'CALCA',
    compartment: 'Airway epithelium',
    stage: 'Neonatal',
    lineage: 'Neuroendocrine lineage',
    role: 'Bioactive peptide marker',
    summary: 'Encodes CGRP and marks mature PNEC clusters as part of the lung bioactive peptide reservoir.'
  },
  {
    gene: 'ETV5',
    compartment: 'Epithelium',
    stage: 'Late fetal',
    lineage: 'Cell plasticity track',
    role: 'AT2 maintenance transcription factor',
    summary: 'Maintains the AT2 progenitor state and regulates bipotential progenitor identity.'
  },
  {
    gene: 'NKX2-1',
    compartment: 'Epithelium',
    stage: 'Early fetal',
    lineage: 'Cell plasticity track',
    role: 'Lung identity master regulator',
    summary: 'Essential for lung endoderm specification and continues to regulate AT1/AT2 fate decisions.'
  },
  {
    gene: 'HOPX',
    compartment: 'Epithelium',
    stage: 'Neonatal',
    lineage: 'Cell plasticity track',
    role: 'AT1 identity marker and plasticity regulator',
    summary: 'Defines the AT1 state and participates in AT2-to-AT1 transdifferentiation during injury.'
  }
];

export const markerSearchSuggestions = ['SOX9', 'SFTPC', 'AGER', 'SCGB3A2', 'ACTA2', 'PECAM1', 'CA4', 'ASCL1', 'CHGA', 'HOPX'];

export const datasetReleases = [
  {
    id: 'LD-DS-001',
    stage: 'Fetal, Neonatal, Pediatric, Adult',
    assays: 'scRNA-seq',
    status: 'Metadata',
    note: 'Integrated single-cell atlas covering all lung developmental stages.'
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
  'Age (distinguish gestational age GA vs post-conceptional weeks pcw; ~2-week offset)',
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
    detail: 'Expose release scope, assay type, and current confidence for each reference set.'
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
    description: 'Use the developmental-stage buttons to switch the embedded UMAP between fetal, pseudoglandular, canalicular, saccular, and alveolar views.'
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
    title: 'Datasets, provenance, and evidence',
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
  'Dataset cards with provenance and status',
  'Cross-linked bundle metadata, mobile nav shell, and custom-domain deployment wiring',
  'Build and regression checks updated for lungdev'
];
