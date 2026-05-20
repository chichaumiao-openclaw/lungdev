(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={light:{surface:`#FFFFFF`,surfaceAlt:`#EEF7F7`,background:`#F5FBFC`,backgroundStrong:`#DBF0F3`,textPrimary:`#11202A`,textSecondary:`#405866`,onPrimary:`#F7FEFF`,shadowColor:`rgba(11, 30, 40, 0.08)`},dark:{surface:`#0B1E28`,surfaceAlt:`#12303D`,background:`#06131A`,backgroundStrong:`#0A1C26`,textPrimary:`#E5F0F4`,textSecondary:`#9EB7C0`,onPrimary:`#041015`,shadowColor:`rgba(0, 0, 0, 0.35)`}},t={lungdev:{label:`Lung Development`,light:{primary:`#0E7490`,primaryHover:`#0A5A70`,primarySoft:`#D6F2F7`,accent:`#22A884`,accentStrong:`#157A62`,border:`#9FD3DC`,heroGlow:`rgba(34, 168, 132, 0.28)`},dark:{primary:`#72D7F0`,primaryHover:`#9BE5F7`,primarySoft:`#103748`,accent:`#59D6AD`,accentStrong:`#8FE2C7`,border:`#1E4E5C`,heroGlow:`rgba(89, 214, 173, 0.25)`}},lunginf:{label:`Lung Infection`,light:{primary:`#C75B12`,primaryHover:`#9D430A`,primarySoft:`#FCE6D5`,accent:`#D93A2F`,accentStrong:`#A52A22`,border:`#E6B18B`,heroGlow:`rgba(217, 58, 47, 0.25)`},dark:{primary:`#F7A15A`,primaryHover:`#FBC089`,primarySoft:`#4A2314`,accent:`#FF7A6D`,accentStrong:`#FFB2A8`,border:`#6C3A22`,heroGlow:`rgba(255, 122, 109, 0.24)`}},lungcancer:{label:`Lung Cancer`,light:{primary:`#9340D8`,primaryHover:`#742CB1`,primarySoft:`#EFDFFD`,accent:`#D640A2`,accentStrong:`#A52C7C`,border:`#D2B2F1`,heroGlow:`rgba(214, 64, 162, 0.24)`},dark:{primary:`#D89BFF`,primaryHover:`#E8BEFF`,primarySoft:`#311647`,accent:`#FF82C8`,accentStrong:`#FFC1E6`,border:`#54306F`,heroGlow:`rgba(255, 130, 200, 0.22)`}},lungevo:{label:`Lung Evolution`,light:{primary:`#2F7D4A`,primaryHover:`#225B36`,primarySoft:`#DCEEDB`,accent:`#6B8E23`,accentStrong:`#4B6414`,border:`#B8D2B0`,heroGlow:`rgba(107, 142, 35, 0.24)`},dark:{primary:`#8ED09B`,primaryHover:`#B3E0BC`,primarySoft:`#17311F`,accent:`#C7E676`,accentStrong:`#DDF29E`,border:`#31503A`,heroGlow:`rgba(199, 230, 118, 0.22)`}}};function n(n,r=`light`){let i=t[n]??t.lungdev,a=r===`dark`?`dark`:`light`,o={...e[a],...i[a]},s=Object.entries(o).map(([e,t])=>`--${e}: ${t};`);return s.push(`--mode: ${a};`),s.join(`
`)}var r={siteId:`lungdev`,label:`lungdev`,title:`Lung Development Atlas`,githubPagesUrl:`https://chichaumiao-openclaw.github.io/lungdev/`,customDomain:`lungdev.gznl.org`,strapline:`A single-cell database of lung development from early fetal stages to mature adulthood.`,heroIntro:`Map how epithelial, stromal, vascular, and immune compartments emerge, diverge, and mature across the human lung developmental axis.`,mission:`Create a stage-resolved single-cell resource for understanding how the lung develops from early fetal stages to mature adulthood.`,release:`Prototype release 0.1`,coverage:`Normal lung development first`,focus:`Developmental atlas, temporal programs, lineage emergence, and developmental origins of adult lung states.`,defaultTheme:`lungdev`},i=[{id:`lungdev`,label:`lungdev`,axis:`Development`,status:`Integrated MVP`,url:`https://chichaumiao-openclaw.github.io/lungdev/`,customDomain:`lungdev.gznl.org`,summary:`Stage-resolved developmental atlas from early fetal lung to mature adulthood.`},{id:`lunginf`,label:`lunginf`,axis:`Infection / inflammation`,status:`Integrated MVP`,url:`https://chichaumiao-openclaw.github.io/lunginf/`,customDomain:`lunginf.gznl.org`,summary:`Host response, pathogen-specific remodeling, and injury-repair programs.`},{id:`lungcancer`,label:`lungcancer`,axis:`Cancer`,status:`Integrated MVP`,url:`https://chichaumiao-openclaw.github.io/lungcancer/`,customDomain:`lungcancer.gznl.org`,summary:`Malignant ecosystems, microenvironment remodeling, and clinical heterogeneity.`},{id:`lungevo`,label:`lungevo`,axis:`Evolution`,status:`Integrated MVP`,url:`https://chichaumiao-openclaw.github.io/lungevo/`,customDomain:`lungevo.gznl.org`,summary:`Cross-species respiratory programs, homology, and lineage innovation.`}],a=[{id:`home`,label:`Home`,kicker:`Program overview`},{id:`atlas`,label:`Atlas`,kicker:`Stage-centered browsing`},{id:`lineages`,label:`Lineages`,kicker:`Trajectory and maturation logic`},{id:`markers`,label:`Markers`,kicker:`Gene spotlight and search`},{id:`datasets`,label:`Datasets`,kicker:`Release scope and provenance`},{id:`about`,label:`About`,kicker:`Mission, scope, and roadmap`}],o=[{id:`embryonic`,label:`Embryonic`,color:`#e4572e`,detail:`Earliest respiratory specification and primordium organization.`},{id:`pseudoglandular`,label:`Pseudoglandular`,color:`#f28f3b`,detail:`Branching morphogenesis expands airway architecture and distal buds.`},{id:`canalicular`,label:`Canalicular`,color:`#f5c542`,detail:`Distal compartments diversify as gas-exchange programs begin to emerge.`},{id:`saccular`,label:`Saccular`,color:`#4cbf6b`,detail:`Saccules and transitional alveolar programs dominate late prenatal development.`},{id:`alveolar`,label:`Alveolar`,color:`#3b82f6`,detail:`Alveolar maturation and adult-like maintenance-state structure become visible.`}],s=[{label:`Developmental bins`,value:`5`,detail:`early fetal to adult`},{label:`Curated lineage tracks`,value:`4`,detail:`epithelial, stromal, vascular, immune`},{label:`Marker spotlight genes`,value:`10`,detail:`launch-ready examples`},{label:`Prototype datasets`,value:`4`,detail:`release cards with provenance`}],c=[{rank:1,slug:`early-fetal`,label:`01 Early fetal`,window:`Human: 5–9 pcw
Mouse: E9.5–E12.5`,headline:`Branching programs ignite`,summary:`Distal SOX9-rich buds and patterning mesenchyme define the earliest respiratory scaffold.`,compartments:[`Distal progenitors`,`Patterning mesenchyme`,`Primitive endothelium`],question:`Which early progenitor states seed adult distal lineages?`,biologicalEvents:`<ul>
      <li><strong>Branching morphogenesis:</strong> Formation of the primitive bronchial tree through repetitive branching</li>
      <li><strong>Proximal-distal patterning:</strong> Establishment of airway vs. distal epithelial identity</li>
      <li><strong>SOX9+ distal tip progenitors:</strong> Key stem cell population for distal lung development</li>
      <li><strong>Mesenchymal expansion:</strong> Formation of patterning mesenchyme surrounding epithelial buds</li>
      <li><strong>Primitive vasculature:</strong> Emergence of endothelial cells forming primitive capillary networks</li>
    </ul>`,cellInteractions:`<ul>
      <li><strong>Epithelial-mesenchymal crosstalk:</strong> FGF10 from mesenchyme to epithelial tips via FGFR2b</li>
      <li><strong>Wnt signaling:</strong> Wnt2/Wnt2b in mesenchyme activates β-catenin in epithelium</li>
      <li><strong>BMP antagonism:</strong> Noggin (mesenchyme) antagonizes BMP4 to permit branching</li>
      <li><strong>SHH signaling:</strong> Epithelial SHH patterns surrounding mesenchyme</li>
    </ul>`,moreQuestions:`<ul>
      <li><strong>What initiates the first branching event?</strong> — Understanding organ size/shape determination</li>
      <li><strong>How is SOX9 activity temporally regulated?</strong> — CRITICAL for distal lung diseases</li>
      <li><strong>Origin of lung mesenchymal diversity?</strong> — Implications for fibrosis and repair</li>
      <li><strong>Cross-species conservation of early progenitors?</strong> — Human-to-mouse translation gaps</li>
    </ul>`},{rank:2,slug:`late-fetal`,label:`02 Late fetal`,window:`Human: 10–24 pcw
Mouse: E12.5–E17.5`,headline:`Airway differentiation accelerates and alveolar priming begins`,summary:`Airway secretory, ciliated, and distal alveolar precursor states become transcriptionally separable.`,compartments:[`Airway secretory cells`,`Alveolar precursors`,`Expanding vasculature`],question:`When do airway-specialized and alveolar-specialized programs become distinct?`,biologicalEvents:`<ul>
      <li><strong>Canalicular to saccular transition:</strong> Formation of terminal sacs (saccules) — canalicular (10–16 pcw) transitions into saccular phase (16–24 pcw)</li>
      <li><strong>Airway epithelial differentiation:</strong> Separation of proximal airway lineages</li>
      <li><strong>Ciliated cell emergence:</strong> Onset of mucociliary differentiation</li>
      <li><strong>Secretory cell specification:</strong> Secretory progenitor specification begins (mature club cells emerge postnatally)</li>
      <li><strong>Alveolar precursor emergence:</strong> BP (bipotent progenitor) cells emerge and initiate AT1/AT2 fate specification in late fetal period (full maturation completes postnatally)</li>
    </ul>`,cellInteractions:`<ul>
      <li><strong>Notch lateral inhibition:</strong> DLL3 and JAG1/2 mediate secretory vs. ciliated fate specification via lateral inhibition</li>
      <li><strong>Mesenchymal-epithelial signaling:</strong> PDGFB/PDGFC from epithelium recruits alveolar fibroblasts and pericytes</li>
      <li><strong>Hypoxia signaling:</strong> HIF pathway drives microvascular remodeling and saccular structural refinement</li>
      <li><strong>Immune-epithelial crosstalk:</strong> Emerging myeloid populations near epithelial tips contribute to tissue patterning</li>
    </ul>`,moreQuestions:`<ul>
      <li><strong>Timing of AT1/AT2 fate specification?</strong> — Prematurity & BPD implications</li>
      <li><strong>Goblet cell origin in human fetal lung?</strong> — Asthma developmental origins</li>
      <li><strong>Innervation timing and its role?</strong> — Control of breathing onset</li>
      <li><strong>Spatial patterning of airway lineages?</strong> — Regional susceptibility to disease</li>
    </ul>`},{rank:3,slug:`neonatal`,label:`03 Neonatal`,window:`Human: Birth–1 mo
Mouse: P0–P5`,headline:`Gas-exchange readiness emerges`,summary:`AT1 and AT2 maturation, vascular stabilization, and matrix remodeling support early postnatal function.`,compartments:[`Maturing AT1/AT2`,`Contractile stromal cells`,`Capillary endothelium`],question:`Which transitional neonatal states mark functional adaptation at birth?`,biologicalEvents:`<ul>
      <li><strong>Alveolarization onset:</strong> Formation of true alveoli with thin gas-exchange membranes</li>
      <li><strong>AT1/AT2 maturation:</strong> Progressive functional maturation of alveolar epithelial cells (full maturation extends into childhood)</li>
      <li><strong>Vascular remodeling:</strong> Capillary network maturation and stabilization</li>
      <li><strong>Matrix remodeling:</strong> Progressive collagen subtype remodeling with elastic fiber deposition in the alveolar interstitium</li>
      <li><strong>Stretch-induced signaling:</strong> Mechanical forces drive alveolar epithelial maturation</li>
      <li><strong>YAP/TAZ mechanotransduction:</strong> Mechanical stretch activates YAP/TAZ transcriptional program; critical for alveolar epithelial maturation and secondary septation initiation</li>
    </ul>`,cellInteractions:`<ul>
      <li><strong>AT1-AT2 crosstalk:</strong> Physical interaction and signaling required for AT2 homeostasis</li>
      <li><strong>Lipid signaling:</strong> AT2-derived surfactant lipids affect alveolar mechanics</li>
      <li><strong>Macrophage-epithelial interaction:</strong> Alveolar macrophages clear debris and regulate repair</li>
      <li><strong>Fibroblast-myofibroblast transition:</strong> TGF-β and PDGF signaling drive alveolar interstitial myofibroblast activation; PDGFB/PDGFRβ drives interstitial cell recruitment during secondary septation</li>
      <li><strong>YAP/TAZ mechanosensing:</strong> Matrix stiffness and cyclic stretch activate YAP/TAZ; coordinates epithelial-mesenchymal cross-talk during alveolar formation</li>
    </ul>`,moreQuestions:`<ul>
      <li><strong>Mechanical triggers of alveolar formation?</strong> — YAP/TAZ-dependent mechanosensing; BPD prevention strategies</li>
      <li><strong>AT2-to-AT1 transdifferentiation capacity?</strong> — Regenerative medicine potential</li>
      <li><strong>Microbiome influence on alveolarization?</strong> — Early-life lung health</li>
      <li><strong>Sex differences in neonatal lung development?</strong> — Gender-specific medicine</li>
    </ul>`},{rank:4,slug:`pediatric`,label:`04 Pediatric`,window:`Human: 1 mo–10 yr (up to adolescence)
Mouse: P5–P30`,headline:`Expansion and structural refinement`,summary:`Ongoing alveolar expansion and immune residency acquisition reshape the tissue composition landscape.`,compartments:[`Growing alveolar units`,`Matrix fibroblasts`,`Resident immune cells`],question:`Which programs remain plastic during lung growth and remodeling?`,biologicalEvents:`<ul>
      <li><strong>Alveolar multiplication:</strong> Secondary septation creates new alveoli until ~8–10 years, with ongoing refinement potentially extending into adolescence</li>
      <li><strong>Airway growth:</strong> Diameter and length increase proportionally with body size</li>
      <li><strong>Immune system education:</strong> Adaptive immunity continues to develop and diversify; innate immunity remains the dominant defense in early childhood</li>
      <li><strong>Stem cell niche establishment:</strong> Quiescent pools of basal cells and AT2 cells</li>
      <li><strong>Environmental exposure:</strong> Response to pathogens, allergens, and pollutants</li>
    </ul>`,cellInteractions:`<ul>
      <li><strong>Basal cell-stromal interaction:</strong> Niche signals maintain basal cell quiescence</li>
      <li><strong>Immune-epithelial dialogue:</strong> ILC2s respond to alarmins from damaged epithelium</li>
      <li><strong>Neuronal-epithelial crosstalk:</strong> Cholinergic signaling regulates airway mucus secretion, ciliary beating, and smooth muscle tone</li>
      <li><strong>Microbiome-immune education:</strong> Early colonizing bacteria shape lung immunity</li>
    </ul>`,moreQuestions:`<ul>
      <li><strong>When does alveolarization truly complete?</strong> — ~8–10 yr in humans; critical window for lung insults</li>
      <li><strong>Developmental origins of asthma?</strong> — Early intervention strategies</li>
      <li><strong>Air pollution impact on developing lung?</strong> — Public health implications</li>
      <li><strong>Sexual dimorphism in pediatric lung?</strong> — Explain asthma gender bias</li>
    </ul>`},{rank:5,slug:`adult`,label:`05 Adult`,window:`Human: 18+ yr
Mouse: ≥P30`,headline:`Maintenance-state equilibrium`,summary:`Stable epithelial, stromal, vascular, and immune compartments define the mature lung reference frame.`,compartments:[`Mature alveolar epithelium`,`Homeostatic stroma`,`Resident immunity`],question:`Which adult states preserve developmental memory versus maintenance-only signatures?`,biologicalEvents:`<ul>
      <li><strong>Epithelial homeostasis:</strong> Continuous turnover of airway and alveolar epithelium</li>
      <li><strong>Basal cell-driven repair:</strong> Tracheobronchial regeneration from KRT5+ TP63+ basal cells</li>
      <li><strong>AT2 stem cell function:</strong> scRNA-seq reveals heterogeneity in AT2 populations</li>
      <li><strong>Vascular maintenance:</strong> Endothelial cell turnover and remodeling</li>
      <li><strong>Immune surveillance:</strong> Resident memory T cells and alveolar macrophages</li>
    </ul>`,cellInteractions:`<ul>
      <li><strong>Basal cell differentiation:</strong> Lineage plasticity in response to injury; basal cells replenish airway lineages while distal progenitors drive alveolar repair</li>
      <li><strong>AT2 → AT1 differentiation:</strong> Injury-induced reprogramming for repair</li>
      <li><strong>BASC expansion:</strong> Bronchioalveolar stem cells expand during repair in mouse lung (Notch-dependent); a human equivalent remains poorly defined in steady-state adult lung</li>
      <li><strong>Senescence in aging:</strong> p16Ink4a+ senescent cells accumulate; affect repair capacity</li>
    </ul>`,moreQuestions:`<ul>
      <li><strong>Can we enhance human alveolar regeneration?</strong> — COPD/IPF therapeutics</li>
      <li><strong>Aging's impact on stem cell niches?</strong> — Age-related lung disease</li>
      <li><strong>Cell-of-origin of lung adenocarcinoma?</strong> — Cancer prevention strategies</li>
      <li><strong>Organoid-to-in-vivo translation?</strong> — Personalized medicine</li>
    </ul>`}],l=[{title:`Distal epithelial emergence`,stage:`Early fetal to late fetal`,summary:`Trace SOX9-positive bud states into SFTPC-positive alveolar precursors and later mature alveolar programs.`},{title:`Airway maturation axis`,stage:`Late fetal to pediatric`,summary:`Separate secretory, ciliated, and epithelial support programs as airway compartments specialize.`},{title:`Mesenchymal remodeling`,stage:`Fetal to adult`,summary:`Follow contractile, matrix-producing, and supportive stromal states as tissue architecture stabilizes.`},{title:`Immune residency acquisition`,stage:`Neonatal to adult`,summary:`Map when lung-resident immune populations appear and how they decouple from developmental inflammation.`}],u=[{title:`Endothelial-epithelial crosstalk`,stage:`Early fetal to adult`,summary:`Map the interaction between vasculogenesis and angiogenesis; trace VEGF/BMP4/WNT/ANG-1 signaling pathways that govern pulmonary vascular development.`},{title:`Neuroendocrine bioactive niche`,stage:`Fetal to neonatal`,summary:`Identify ASCL1/NOTCH/Igf2 regulated programs in the largest bioactive peptide reservoir; follow the commitment of facultative stem cells.`},{title:`Cellular plasticity & regeneration`,stage:`Late fetal to adult`,summary:`Trace the reversible transformation between AT2 and AT1 cells; follow Club to PNEC transdifferentiation and EMT dynamics.`},{title:`Aging-development axis`,stage:`Adult to elderly`,summary:`Investigate the developmental-aging continuum of AT2 cells; map SASP factors and their role in progressive pulmonary fibrosis.`}],d=[{name:`Distal epithelial lineage`,start:`SOX9-positive distal buds`,transition:`Tip progenitor -> alveolar precursor -> mature AT1 / AT2 equilibrium`,anchors:[`SOX9`,`SFTPC`,`AGER`],insight:`The distal trajectory anchors developmental origin analysis for mature gas-exchange states.`,tag:`Core Lineage`},{name:`Airway secretory lineage`,start:`Fetal airway epithelial progenitors`,transition:`Airway progenitor -> secretory intermediate -> club / secretory maintenance states`,anchors:[`SCGB3A2`,`SCGB1A1`,`KRT19`],insight:`Airway specialization clarifies when proximal epithelial programs diverge from distal maturation.`,tag:`Core Lineage`},{name:`Mesenchymal support lineage`,start:`Patterning mesenchyme`,transition:`Patterning fibroblast -> matrix remodeling fibroblast -> adult support stroma`,anchors:[`COL1A1`,`ACTA2`,`DCN`],insight:`Stromal transitions frame the structural context in which epithelial maturation occurs.`,tag:`Core Lineage`},{name:`Resident immune acquisition`,start:`Transient developmental immune influx`,transition:`Inflammatory recruitment -> tissue adaptation -> resident immune surveillance`,anchors:[`LYZ`,`C1QA`,`HLA-DRA`],insight:`This track helps separate developmental immune programs from later homeostatic residency.`,tag:`Core Lineage`},{name:`Endothelial lineage`,start:`General capillary progenitor`,transition:`gCap progenitor -> aCap / gCap bifurcation -> mature capillary network`,anchors:[`PECAM1`,`CA4`,`GPIHBP1`],insight:`Describes how the pulmonary microvascular network synchronizes with alveolar epithelium to establish the blood-gas barrier.`,tag:`Supplementary Lineage`},{name:`Neuroendocrine lineage`,start:`Airway epithelial progenitor`,transition:`Airway progenitor -> Pre-PNEC -> mature PNEC / NE cluster`,anchors:[`ASCL1`,`CHGA`,`CALCA`],insight:`Resolves the origin of the lung bioactive peptide reservoir and the specialization of rare cell populations.`,tag:`Supplementary Lineage`},{name:`Cell plasticity track`,start:`Bipotential alveolar progenitor`,transition:`Bipotential progenitor -> AT2-state ↔ AT1-state (reversible transitions)`,anchors:[`ETV5`,`NKX2-1`,`HOPX`],insight:`Demonstrates how cell states oscillate or commit between fates during injury repair or late development.`,tag:`Supplementary Lineage`}],f=[{gene:`SOX9`,compartment:`Epithelium`,stage:`Early fetal`,lineage:`Distal epithelial lineage`,role:`Distal tip progenitor regulator`,summary:`Highlights branching epithelial progenitors before alveolar maturation programs appear.`},{gene:`SFTPC`,compartment:`Epithelium`,stage:`Late fetal`,lineage:`Distal epithelial lineage`,role:`Alveolar precursor and AT2-associated marker`,summary:`Tracks distal epithelial commitment into the surfactant-producing alveolar program.`},{gene:`AGER`,compartment:`Epithelium`,stage:`Neonatal`,lineage:`Distal epithelial lineage`,role:`AT1 maturation marker`,summary:`Signals the emergence of thin, gas-exchange-specialized alveolar epithelium.`},{gene:`SCGB3A2`,compartment:`Airway epithelium`,stage:`Late fetal`,lineage:`Airway secretory lineage`,role:`Early secretory airway program marker`,summary:`Marks airway epithelial specialization before adult club-cell stabilization.`},{gene:`FOXJ1`,compartment:`Airway epithelium`,stage:`Late fetal`,lineage:`Airway secretory lineage`,role:`Ciliogenesis transcription factor`,summary:`Separates ciliated differentiation from parallel secretory epithelial branches.`},{gene:`ACTA2`,compartment:`Stroma`,stage:`Neonatal`,lineage:`Mesenchymal support lineage`,role:`Contractile stromal marker`,summary:`Captures airway and vascular support states linked to structural refinement.`},{gene:`COL1A1`,compartment:`Stroma`,stage:`Pediatric`,lineage:`Mesenchymal support lineage`,role:`Matrix-producing fibroblast marker`,summary:`Reflects extracellular matrix remodeling during growth and architectural stabilization.`},{gene:`PECAM1`,compartment:`Vasculature`,stage:`Late fetal`,lineage:`Vascular maturation`,role:`Endothelial identity marker`,summary:`Provides a vascular anchor for mapping capillary expansion alongside alveolar maturation.`},{gene:`C1QA`,compartment:`Immune`,stage:`Pediatric`,lineage:`Resident immune acquisition`,role:`Resident macrophage-associated marker`,summary:`Marks the acquisition of tissue-adapted immune surveillance states in the growing lung.`},{gene:`HLA-DRA`,compartment:`Immune`,stage:`Adult`,lineage:`Resident immune acquisition`,role:`Antigen-presentation marker`,summary:`Highlights mature immune residency and local immune communication in adult tissue.`},{gene:`CA4`,compartment:`Vasculature`,stage:`Neonatal`,lineage:`Endothelial lineage`,role:`Capillary differentiation marker`,summary:`Marks aerocyte (aCap) specialization in the neonatal lung, supporting gas-exchange maturation.`},{gene:`GPIHBP1`,compartment:`Vasculature`,stage:`Neonatal`,lineage:`Endothelial lineage`,role:`Lipid transport in capillaries`,summary:`Highlights general capillary (gCap) identity and the establishment of the alveolar capillary network.`},{gene:`ASCL1`,compartment:`Airway epithelium`,stage:`Late fetal`,lineage:`Neuroendocrine lineage`,role:`NE cell fate determinant`,summary:`Master regulator driving airway progenitors toward the neuroendocrine differentiation program.`},{gene:`CHGA`,compartment:`Airway epithelium`,stage:`Late fetal`,lineage:`Neuroendocrine lineage`,role:`NE granule component`,summary:`Tracks the maturation of neuroendocrine granules and peptide hormone production in PNECs.`},{gene:`CALCA`,compartment:`Airway epithelium`,stage:`Neonatal`,lineage:`Neuroendocrine lineage`,role:`Bioactive peptide marker`,summary:`Encodes CGRP and marks mature PNEC clusters as part of the lung bioactive peptide reservoir.`},{gene:`ETV5`,compartment:`Epithelium`,stage:`Late fetal`,lineage:`Cell plasticity track`,role:`AT2 maintenance transcription factor`,summary:`Maintains the AT2 progenitor state and regulates bipotential progenitor identity.`},{gene:`NKX2-1`,compartment:`Epithelium`,stage:`Early fetal`,lineage:`Cell plasticity track`,role:`Lung identity master regulator`,summary:`Essential for lung endoderm specification and continues to regulate AT1/AT2 fate decisions.`},{gene:`HOPX`,compartment:`Epithelium`,stage:`Neonatal`,lineage:`Cell plasticity track`,role:`AT1 identity marker and plasticity regulator`,summary:`Defines the AT1 state and participates in AT2-to-AT1 transdifferentiation during injury.`}],p=[`SOX9`,`SFTPC`,`AGER`,`SCGB3A2`,`ACTA2`,`PECAM1`,`CA4`,`ASCL1`,`CHGA`,`HOPX`],m=[{id:`LD-DS-001`,stage:`Full Spectrum`,assays:`scRNA-seq`,status:`Prototype metadata`,note:`Integrated single-cell atlas covering all lung developmental stages.`}],h=[{label:`Stage model`,value:`5 bins`,detail:`early fetal -> late fetal -> neonatal -> pediatric -> adult`},{label:`Primary filters`,value:`5`,detail:`stage, age, region, cell type, dataset`},{label:`Core lineage views`,value:`4`,detail:`distal, airway, stromal, immune`},{label:`Launch provenance cards`,value:`4`,detail:`dataset release notes included`}],ee=[`How do major lung cell types emerge, differentiate, and mature over developmental time?`,`Which cell states are stage-specific and which are persistent across stages?`,`What transcriptional programs define fetal, neonatal, pediatric, and adult transitions?`,`Which adult cell states can be traced back to developmental origins?`],te=[`Developmental biologists`,`Lung biologists`,`Single-cell analysts`,`Clinicians interested in developmental origins`],ne=[`Normal lung development first; disease-focused comparisons are out of scope for the MVP.`,`The organizing axis is developmental time rather than a generic dataset catalog.`,`Multi-dataset integration is allowed, but developmental ordering is the primary navigation logic.`],re=[`Developmental stage`,`Age (distinguish gestational age GA vs post-conceptional weeks pcw; ~2-week offset)`,`Tissue region`,`Cell type`,`Lineage / trajectory`,`Marker genes`,`Dataset / source`,`Provenance and release notes`],ie=[{title:`Atlas interpretation guide`,detail:`Summarizes how stage labels, lineage tracks, and marker spotlights should be read in the MVP.`},{title:`Dataset provenance cards`,detail:`Expose release scope, assay type, and current prototype confidence for each reference set.`},{title:`Phase expansion targets`,detail:`Defines how lungInf, lungcancer, and lungevo will inherit the scaffold without collapsing into one template.`}],g=[`2026-03-18 four-database scientific program defined`,`2026-03-21 lungdev selected as the first implementation target`,`2026-03-31 lungdev working directory created and MVP route refactor started`],ae={home:{eyebrow:`Development axis`,title:`Track the emergence of the lung across developmental time`,description:`Use the homepage to orient around stage progression, lineage emergence, marker genes, and the MVP dataset footprint.`},atlas:{eyebrow:`Stage browser`,title:`Atlas views organized by developmental stage`,description:`Use the developmental-stage buttons to switch the embedded UMAP between embryonic, pseudoglandular, canalicular, saccular, and alveolar views.`},lineages:{eyebrow:`Trajectory logic`,title:`Lineages and maturation programs`,description:`Inspect how developmental trajectories connect transient progenitor states to mature adult compartments.`},markers:{eyebrow:`Gene spotlight`,title:`Marker genes for developmental interpretation`,description:`Search markers across stage, lineage, and compartment to anchor developmental hypotheses.`},datasets:{eyebrow:`Release scope`,title:`Datasets, provenance, and prototype evidence`,description:`Review what is in the MVP, what each release covers, and which metadata dimensions are explicitly tracked.`},about:{eyebrow:`Mission and scope`,title:`Why lungdev exists inside the four-database program`,description:`Clarify the scientific mission, scope boundaries, target users, and how lungdev stays distinct from the other three portals.`}},oe={home:[{siteId:`lunginf`,route:`conditions`,title:`Compare development with infection-driven remodeling`,summary:`Use condition anchors to ask which injury and repair states echo or diverge from developmental lung programs.`},{siteId:`lungevo`,route:`species`,title:`Set human development inside vertebrate respiratory evolution`,summary:`Move from stage progression into fish-to-human species anchors to distinguish conserved from lineage-specific structure.`},{siteId:`lungcancer`,route:`subtypes`,title:`Track adult-lineage programs resurfacing in tumor ecosystems`,summary:`Compare developmental cell-state logic with malignant subtype programs and therapy-linked plasticity.`}],atlas:[{siteId:`lungevo`,route:`species`,title:`Add comparative species context to developmental UMAP views`,summary:`Use the species backbone to ask which respiratory cell programs predate mature human lung states.`},{siteId:`lunginf`,route:`conditions`,title:`Contrast developmental baselines with infected lung states`,summary:`Jump from normal stage-resolved tissue structure into healthy-versus-infected condition comparison.`}],lineages:[{siteId:`lungevo`,route:`programs`,title:`Compare lineage emergence with conserved and divergent programs`,summary:`Use evolutionary program calls to test which developmental transitions look deeply conserved versus later-specialized.`},{siteId:`lungcancer`,route:`biomarkers`,title:`Check lineage-associated markers in tumor ecosystems`,summary:`Connect developmental lineage anchors to malignant and microenvironment biomarker interpretation.`}],markers:[{siteId:`lungcancer`,route:`biomarkers`,title:`Follow developmental markers into lung cancer biomarker space`,summary:`Compare developmental genes against subtype- and treatment-linked malignant marker programs.`},{siteId:`lungevo`,route:`orthologs`,title:`Compare marker genes against ortholog and homology mappings`,summary:`Use the ortholog workspace to see which developmental markers stay interpretable across species.`}],datasets:[{siteId:`lunginf`,route:`datasets`,title:`Inspect the infection release table`,summary:`Compare developmental datasets with healthy-versus-infected release logic and immune-response framing.`},{siteId:`lungevo`,route:`datasets`,title:`Review the comparative evolution release table`,summary:`Use comparative dataset provenance to align developmental interpretation with species and homology assumptions.`}],about:[{siteId:`lunginf`,route:`home`,title:`See how the infection portal stays distinct from development`,summary:`The infection axis centers host response, pathogen class, and tissue injury rather than developmental time.`},{siteId:`lungcancer`,route:`home`,title:`See how the cancer portal reuses the shell without reusing the biology`,summary:`The cancer axis organizes the same platform around malignant ecosystems, subtype logic, and clinical heterogeneity.`},{siteId:`lungevo`,route:`home`,title:`See how the evolution portal reframes lung questions comparatively`,summary:`The evolution axis centers homolog mapping, species anchors, and conserved versus divergent respiratory programs.`}]},_=[`Route-complete MVP across home, atlas, lineages, markers, datasets, and about`,`Development-specific homepage narrative and stage timeline`,`Marker spotlight and searchable gene catalog entry point`,`Dataset cards with provenance and prototype status`,`Cross-linked bundle metadata, mobile nav shell, and custom-domain deployment wiring`,`Build and regression checks updated for lungdev`];function v(e){return`<div class="chip-row">${e.map(e=>`<span class="chip">${e}</span>`).join(``)}</div>`}function y(e,t,n){return`<div class="section-head">
    <p class="eyebrow">${e}</p>
    <h2>${t}</h2>
    <p>${n}</p>
  </div>`}function b(e){return i.find(t=>t.id===e)}function x(e,t=`home`){let n=b(e);return n?t?`${n.url}#${t}`:n.url:`#`}function se(){if(typeof window>`u`)return`./singlecell-viewer/`;let e=window.location.pathname||``;return e.includes(`/dist/`)||e.endsWith(`/dist`)||e.endsWith(`/dist/index.html`)?`./singlecell-viewer/`:`./singlecell-viewer/dist/`}function ce(e,t=`light`){let n=se(),r=new URL(n,typeof window>`u`?`http://localhost`:window.location.href);return e&&r.searchParams.set(`stage`,e),r.searchParams.set(`mode`,t===`dark`?`dark`:`light`),`${r.pathname}${r.search}`}function S(e,t={}){let n=Number(t.limit||0),r=n>0?e.slice(0,n):e;return r.length?r.map(e=>`<article class="marker-card">
        <div class="marker-head">
          <strong>${e.gene}</strong>
          <span>${e.stage}</span>
        </div>
        <p>${e.role}</p>
        <div class="marker-meta">${e.compartment} · ${e.lineage}</div>
        <p class="marker-summary">${e.summary}</p>
      </article>`).join(``):`<div class="empty-state">No marker genes match the current search.</div>`}function C(){return`<section class="hero-shell card" id="LD-HERO-001">
    <div class="hero-copy">
      <p class="eyebrow">Four Lung Database Bundle</p>
      <h1>${r.title}</h1>
      <p class="hero-strap">${r.strapline}</p>
      <p>${r.heroIntro}</p>
      <div class="action-row">
        <button type="button" data-route="atlas">Browse the atlas</button>
        <button type="button" class="ghost" data-route="markers">Open marker search</button>
      </div>
    </div>
    <div class="hero-side">
      <div class="release-panel">
        <span>Current build</span>
        <strong>${r.release}</strong>
        <p>${r.coverage}</p>
      </div>
      <div class="metric-grid">
        ${s.map(e=>`<article class="metric-card">
              <span>${e.label}</span>
              <strong>${e.value}</strong>
              <p>${e.detail}</p>
            </article>`).join(``)}
      </div>
    </div>
    <div class="timeline-ribbon">
      ${c.map(e=>`<article class="timeline-stop">
            <strong>${e.label}</strong>
            <p>${e.window.replace(/\n/g,`<br>`)}</p>
          </article>`).join(``)}
    </div>
  </section>`}function w(){return`<section class="section-block" id="LD-STAGE-001">
    ${y(`Developmental stages`,`A stage-resolved scaffold from fetal lung to mature adult`,`Each stage card anchors a distinct developmental question, dominant compartments, and biological emphasis.`)}
    <div class="stage-grid">
      ${c.map(e=>`<article class="stage-card structured card">
              <div class="card-inner">

                <div class="stage-header">
                  <div>
                    <p class="stage-label">${e.label}</p>
                  </div>
                  <p class="stage-window">${e.window.replace(/\n/g,`<br>`)}</p>
                </div>

                <div class="section-block section-emphasis">
                  <p class="stage-section-header">Biological Emphasis</p>
                  <div class="section-body">
                    <p class="stage-bio-headline">${e.headline}</p>
                    <p class="stage-bio-summary">${e.summary}</p>
                    ${e.biologicalEvents?`
                      <button class="stage-inline-expand" data-target="bio-events-${e.rank}">
                        Other Events <span class="expand-arrow">&#9654;</span>
                      </button>
                      <div class="stage-expand-content" id="bio-events-${e.rank}">${e.biologicalEvents}</div>
                    `:``}
                  </div>
                </div>

                <div class="section-block section-compartments">
                  <p class="stage-section-header">Dominant Compartments</p>
                  <div class="section-body">
                    ${v(e.compartments)}
                    ${e.cellInteractions?`
                      <button class="stage-inline-expand" data-target="cell-interactions-${e.rank}">
                        Cell-Cell Interactions <span class="expand-arrow">&#9654;</span>
                      </button>
                      <div class="stage-expand-content" id="cell-interactions-${e.rank}">${e.cellInteractions}</div>
                    `:``}
                  </div>
                </div>

                <div class="section-block section-question">
                  <p class="stage-section-header">Developmental Question</p>
                  <div class="section-body">
                    <p class="stage-question">${e.question}</p>
                    ${e.moreQuestions?`
                      <button class="stage-inline-expand" data-target="more-questions-${e.rank}">
                        More Questions <span class="expand-arrow">&#9654;</span>
                      </button>
                      <div class="stage-expand-content" id="more-questions-${e.rank}">${e.moreQuestions}</div>
                    `:``}
                  </div>
                </div>

              </div>
            </article>`).join(``)}
    </div>
  </section>`}function T(){return`<section class="section-block" id="LD-ATLAS-001">
    ${y(`Atlas lenses`,`Core developmental views for the MVP atlas`,`The atlas page is organized around stage-aware biological questions rather than a generic dataset table.`)}
    <div class="atlas-grid">
      ${l.map(e=>`<article class="atlas-card card">
            <span>${e.stage}</span>
            <h3>${e.title}</h3>
            <p>${e.summary}</p>
          </article>`).join(``)}
    </div>

    <button
      type="button"
      class="atlas-extended-trigger"
      id="atlas-extended-toggle"
      aria-expanded="false"
      aria-controls="atlas-extended-drawer"
    >
      <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="3 6 8 11 13 6"/>
      </svg>
      Peripheral biological themes
    </button>

    <div class="atlas-extended-drawer" id="atlas-extended-drawer" role="region" aria-label="Extended developmental views">
      <div class="atlas-extended-drawer-inner">
        <div class="atlas-grid">
          ${u.map(e=>`<article class="atlas-card card">
                <span>${e.stage}</span>
                <h3>${e.title}</h3>
                <p>${e.summary}</p>
              </article>`).join(``)}
        </div>
      </div>
    </div>
  </section>`}function le(e=`embryonic`,t=`light`){let n=ce(e,t);return`<section class="section-block" id="LD-UMAP-001">
    <article class="card atlas-viewer-card atlas-viewer-wide">
      <div class="atlas-viewer-head">
        <div>
          <p class="eyebrow">Single-cell viewer</p>
          <h2>UMAP-first atlas exploration</h2>
          <p>The atlas page is centered on the embedded single-cell viewer. Developmental-stage controls now live inside the viewer so the embedding can stay wide and visually primary.</p>
        </div>
        <a class="atlas-link" href="${n}" target="_blank" rel="noopener noreferrer">Open viewer in new tab</a>
      </div>
      <iframe
        title="lungdev single-cell UMAP viewer"
        src="${n}"
        class="atlas-viewer-frame"
        loading="lazy"
      ></iframe>
      <p class="atlas-note">If the panel is blank, build the viewer in <code>singlecell-viewer/</code> and then rerun the top-level build.</p>
    </article>
  </section>`}function E(e={}){let t=!!e.compact,n=t?d.slice(0,3):d;return`<section class="section-block" id="LD-LINEAGE-001">
    ${y(`Lineage explorer`,`Trajectory stories that connect progenitor states to mature compartments`,`Lineage cards define the developmental logic behind the atlas and highlight which marker genes anchor each transition.`)}
    <div class="lineage-grid ${t?`compact`:``}">
      ${n.map(e=>`<article class="lineage-card card">
            ${e.tag?`<span class="lineage-tag">${e.tag}</span>`:``}
            <p class="lineage-label">${e.start}</p>
            <h3>${e.name}</h3>
            <p>${e.transition}</p>
            ${v(e.anchors)}
            <p class="lineage-insight">${e.insight}</p>
          </article>`).join(``)}
    </div>
    ${t?`<div class="section-action"><button type="button" class="ghost" data-route="lineages">View all lineage tracks</button></div>`:``}
  </section>`}function D(e={}){let t=!!e.compact,n=t?4:f.length;return`<section class="section-block" id="LD-MARKER-001">
    ${y(`Marker spotlight`,`Search marker genes by stage, lineage, and compartment`,`The MVP gene panel is designed for developmental interpretation, not exhaustive marker coverage.`)}
    <div class="card marker-search-panel" data-marker-search-root data-limit="${n}">
      <div class="search-controls">
        <input
          type="text"
          class="search-input"
          data-marker-search
          placeholder="Search genes, stages, lineages, or compartments"
          aria-label="Search marker genes"
        />
        <button type="button" class="ghost" data-marker-reset>Reset</button>
      </div>
      <div class="chip-row">
        ${p.map(e=>`<button type="button" class="chip chip-button" data-marker-suggestion="${e}">${e}</button>`).join(``)}
      </div>
      <div class="marker-results" data-marker-results>${S(f,{limit:n})}</div>
    </div>
    ${t?`<div class="section-action"><button type="button" class="ghost" data-route="markers">Open full marker catalog</button></div>`:``}
  </section>`}function O(e={}){let t=!!e.compact,n=t?m.slice(0,3):m;return`<section class="section-block" id="LD-DATASET-001">
    ${y(`Datasets and releases`,`Prototype releases anchored to developmental scope`,`Each release row states the developmental window, assay footprint, and current prototype confidence level.`)}
    <article class="card data-table-card">
      <div class="table-card-head">
        <div>
          <h3>Dataset release table</h3>
          <p>${t?`Showing ${n.length} of ${m.length} current prototype releases.`:`Showing all ${m.length} current prototype releases.`}</p>
        </div>
      </div>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Stage</th>
              <th>Assays</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            ${n.map(e=>`<tr class="dataset-row" data-dataset-id="${e.id}" style="cursor: pointer;">
                  <td>${e.id}</td>
                  <td><span class="stage-tag">${e.stage}</span></td>
                  <td>${e.assays}</td>
                  <td><span class="table-status">${e.status}</span></td>
                  <td>${e.note}</td>
                </tr>`).join(``)}
          </tbody>
        </table>
      </div>
    </article>
    ${t?`<div class="section-action"><button type="button" class="ghost" data-route="datasets">Open full dataset table</button></div>`:``}
  </section>`}function k(e){let t=m.find(t=>t.id===e);if(!t)return`<main class="page-shell">
      <section class="page-banner card">
        <p class="eyebrow">Dataset not found</p>
        <h1>Unknown Dataset</h1>
        <p>The requested dataset ID "${e}" could not be found.</p>
      </section>
    </main>`;let n={"LD-DS-001":{eyebrow:`FULL SPECTRUM`,title:`Lung Development Atlas`,description:`Integrated single-cell atlas covering all lung developmental stages. Browse, filter, and download single-cell data spanning fetal, neonatal, pediatric, and adult stages.`}}[e]||{eyebrow:t.stage.toUpperCase(),title:`${t.stage} Lung Dataset`,description:t.note};return`<main class="page-shell">
    <section class="page-banner card dataset-detail-banner">
      <p class="eyebrow">${n.eyebrow} • ${t.id}</p>
      <h1>${n.title}</h1>
      <p>${n.description}</p>
    </section>

    <section class="section-block">
      <article class="card data-download-card">
        <div class="download-card-wrapper">
          <div class="download-table-controls">
            <input
              type="text"
              class="download-search-input"
              data-download-search
              placeholder="Search across all columns..."
              aria-label="Search dataset table"
            />
            <button type="button" class="ghost download-reset-btn" data-download-reset>Reset all filters</button>
          </div>
          <div class="table-container">
            <table class="data-table download-table" data-download-table>
              <thead>
                <tr>
                  <th>SPECIES <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="0"></th>
                  <th>REGION <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="1"></th>
                  <th>STAGE <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="2"></th>
                  <th>AGE <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="3"></th>
                  <th>PLATFORM <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="4"></th>
                  <th>SEQ METHOD <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="5"></th>
                  <th>YEAR <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="6"></th>
                  <th>CELLS <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="7"></th>
                  <th>DOI <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="8"></th>
                  <th>ACCESSION <input type="text" class="col-filter-input" placeholder="Filter..." data-col-filter="9"></th>
                  <th>DOWNLOAD</th>
                </tr>
              </thead>
              <tbody data-download-tbody>
                <!-- Data will be populated dynamically -->
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </section>
  </main>`}function A(){return`<section class="section-block" id="LD-EVIDENCE-001">
    ${y(`Evidence and provenance`,`Make MVP scope explicit before deeper data integration`,`The current prototype favors transparent staging, route logic, and release framing over synthetic completeness.`)}
    <div class="evidence-grid">
      <article class="card">
        <h3>Current evidence rails</h3>
        <div class="metric-grid">
          ${h.map(e=>`<article class="metric-card">
                <span>${e.label}</span>
                <strong>${e.value}</strong>
                <p>${e.detail}</p>
              </article>`).join(``)}
        </div>
      </article>
      <article class="card">
        <h3>Provenance timeline</h3>
        <ol class="timeline-list">
          ${g.map(e=>`<li>${e}</li>`).join(``)}
        </ol>
      </article>
      <article class="card">
        <h3>Methods and resources</h3>
        <ul class="key-list">
          ${ie.map(e=>`<li><strong>${e.title}:</strong> ${e.detail}</li>`).join(``)}
        </ul>
      </article>
    </div>
  </section>`}function j(){let e=i.filter(e=>e.id!==r.siteId);return`<section class="section-block" id="LD-PORTFOLIO-001">
    ${y(`Portfolio context`,`lungdev is one axis of a four-database system`,`The technical base can be shared, but the scientific mission, filters, and question framing must remain distinct.`)}
    <div class="portfolio-grid">
      ${e.map(e=>`<a class="portfolio-card card" href="${x(e.id)}">
            <span>${e.axis}</span>
            <h3>${e.label}</h3>
            <p>${e.summary}</p>
            <strong>${e.status}</strong>
            <small>${e.customDomain}</small>
          </a>`).join(``)}
    </div>
  </section>`}function M(e,t=`LD-BRIDGE-001`){let n=oe[e]??[];return n.length?`<section class="section-block" id="${t}">
    ${y(`Bundle links`,`Follow complementary routes across the four lung databases`,`This page is cross-linked to the other portals so developmental questions can stay connected to infection, cancer, and evolution views.`)}
    <div class="bundle-bridge-grid">
      ${n.map(e=>{let t=b(e.siteId);return t?`<a class="bundle-bridge-card card" href="${x(e.siteId,e.route)}">
            <span>${t.axis} · ${t.label}</span>
            <h3>${e.title}</h3>
            <p>${e.summary}</p>
            <strong>${t.customDomain}</strong>
          </a>`:``}).join(``)}
    </div>
  </section>`:``}function N(e){let t=ae[e];return`<section class="page-banner card">
    <p class="eyebrow">${t.eyebrow}</p>
    <h1>${t.title}</h1>
    <p>${t.description}</p>
  </section>`}function P(){return`<main class="page-shell page-home">
    ${C()}
    ${w()}
    ${T()}
    ${E({compact:!0})}
    ${D({compact:!0})}
    ${O({compact:!0})}
    ${M(`home`)}
    ${j()}
  </main>`}function F(e=`embryonic`,t=`light`){return`<main class="page-shell">
    ${N(`atlas`)}
    ${le(e,t)}
    ${T()}
    ${w()}
    ${M(`atlas`)}
    ${A()}
  </main>`}function I(){return`<main class="page-shell">
    ${N(`lineages`)}
    ${E()}
    <section class="section-block card" id="LD-QUESTION-001">
      ${y(`Core developmental questions`,`Trajectory pages should answer concrete biological questions`,`The lineages page exists to connect developmental ordering to interpretable maturation logic.`)}
      <ul class="key-list">
        ${ee.map(e=>`<li>${e}</li>`).join(``)}
      </ul>
    </section>
    ${M(`lineages`)}
  </main>`}function L(){return`<main class="page-shell">
    ${N(`markers`)}
    ${D()}
    <section class="section-block card" id="LD-META-001">
      ${y(`Metadata priorities`,`Marker interpretation needs explicit metadata dimensions`,`These fields drive the MVP marker views and later atlas filtering.`)}
      ${v(re)}
    </section>
    ${M(`markers`)}
  </main>`}function R(){return`<main class="page-shell">
    ${N(`datasets`)}
    ${O()}
    ${A()}
    ${M(`datasets`)}
  </main>`}function z(){return`<main class="page-shell">
    ${N(`about`)}
    <section class="split-grid">
      <article class="card">
        <h2>Scientific mission</h2>
        <p>${r.mission}</p>
        <p>${r.focus}</p>
      </article>
      <article class="card">
        <h2>Target users</h2>
        <ul class="key-list">
          ${te.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>
      <article class="card">
        <h2>Scope boundaries</h2>
        <ul class="key-list">
          ${ne.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>
      <article class="card">
        <h2>Launch checklist</h2>
        <ul class="key-list">
          ${_.map(e=>`<li>${e}</li>`).join(``)}
        </ul>
      </article>
    </section>
    ${M(`about`)}
    ${j()}
  </main>`}function B(e,t){return[e.gene,e.compartment,e.stage,e.lineage,e.role,e.summary].join(` `).toLowerCase().includes(t.toLowerCase())}function V(){document.querySelectorAll(`[data-marker-search-root]`).forEach(e=>{if(e.dataset.bound===`true`)return;let t=e.querySelector(`[data-marker-search]`),n=e.querySelector(`[data-marker-results]`),r=e.querySelector(`[data-marker-reset]`),i=e.querySelectorAll(`[data-marker-suggestion]`),a=Number(e.dataset.limit||`0`);if(!t||!n)return;function o(e=t.value.trim()){n.innerHTML=S(e?f.filter(t=>B(t,e)):f,{limit:a})}t.addEventListener(`input`,()=>o()),t.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),o())}),r?.addEventListener(`click`,()=>{t.value=``,o(``)}),i.forEach(e=>{e.addEventListener(`click`,()=>{t.value=e.dataset.markerSuggestion||``,o(t.value)})}),o(),e.dataset.bound=`true`})}var H=new Set([`home`,`atlas`,`lineages`,`markers`,`datasets`,`about`]);function U(e){if(typeof e!=`string`)return`home`;let t=e.trim().toLowerCase();return H.has(t)?t:`home`}function W(e){return typeof e!=`string`||e.length===0?`home`:U(e.startsWith(`#`)?e.slice(1):e)}function ue(e){if(typeof e!=`string`||e.length===0)return null;let t=(e.startsWith(`#`)?e.slice(1):e).match(/^datasets\/(LD-DS-\d+)$/i);return t?{route:`dataset-detail`,datasetId:t[1].toUpperCase()}:null}var G=W(window.location.hash),K=null,q=`light`,J=o[0].id,Y=!1,de=[{label:`Home`,href:`http://www.gznl.org/`,icon:`./src/assets/header/home.svg`},{label:`Database`,href:`https://www.gznl.org/database/`,icon:`./src/assets/header/database.svg`},{label:`Research`,href:`https://www.gznl.org/research/`,icon:`./src/assets/header/research.svg`},{label:`About us`,href:`https://www.gznl.org/aboutus/`,icon:`./src/assets/header/aboutus.svg`},{label:`GZNL-RDC`,href:`https://gzlab.ac.cn/`,icon:`./src/assets/header/gznl2.svg`}];function fe(e){let t=document.getElementById(`theme-vars`)??document.createElement(`style`);t.id=`theme-vars`,t.textContent=`:root { ${n(r.defaultTheme,e)} }`,document.head.appendChild(t),document.body.setAttribute(`data-mode`,e)}function pe(){return a.find(e=>e.id===G)?.label??`Home`}function X(e){return`${e.url}#home`}function me(){return`<div class="bundle-switcher">
    <div class="bundle-switcher-head">
      <span class="bundle-switcher-title">Lung Database Bundle</span>
      <span class="bundle-domain">${r.customDomain}</span>
    </div>
    <div class="bundle-links" aria-label="Four lung database bundle switcher">
      ${i.map(e=>`<a
            class="bundle-pill ${e.id===r.siteId?`active`:``}"
            href="${X(e)}"
            ${e.id===r.siteId?`aria-current="page"`:``}
          >
            <span class="bundle-pill-label">${e.label}</span>
            <small>${e.axis}</small>
          </a>`).join(``)}
    </div>
  </div>`}function Z(){return`<header class="app-header">
    <div class="institutional-nav">
      ${de.map(e=>`<a class="institutional-link" href="${e.href}" target="_blank" rel="noopener noreferrer">
            <img src="${e.icon}" alt="" />
            <span>${e.label}</span>
          </a>`).join(``)}
    </div>
    <div class="top-nav">
      <div class="brand-block">
        <div class="brand-mark">LD</div>
        <div>
          <p class="eyebrow">Development axis</p>
          <div class="brand-title">${r.label}</div>
          <p class="brand-copy">${r.strapline}</p>
        </div>
      </div>
      <div class="nav-cluster">
        <div class="nav-utility-row">
          ${me()}
          <div class="nav-actions">
            <button type="button" class="ghost mode-toggle" id="mode-switcher">
              ${q===`light`?`Switch to dark mode`:`Switch to light mode`}
            </button>
            <button
              type="button"
              class="ghost nav-toggle"
              id="nav-menu-toggle"
              aria-expanded="${Y?`true`:`false`}"
              aria-controls="site-navigation"
            >
              ${Y?`Close menu`:`Open menu`}
            </button>
          </div>
        </div>
        <nav class="nav-list ${Y?`open`:``}" id="site-navigation" aria-label="lungdev navigation">
          ${a.map(e=>`<button
                type="button"
                class="nav-btn ${e.id===G?`active`:``}"
                data-route="${e.id}"
                title="${e.kicker}"
                aria-current="${e.id===G?`page`:`false`}"
              >
                <span class="nav-label">${e.label}</span>
                <span class="nav-tooltip" role="tooltip">${e.kicker}</span>
              </button>`).join(``)}
        </nav>
      </div>
    </div>
  </header>`}function Q(){return`<footer class="black-footer">
    <div class="black-footer-inner">
      <div class="footer-stack">
        <div class="footer-row">
          <span>© RNAcentre</span>
          <span class="sep">|</span>
          <a href="https://www.rnacentre.org/" target="_blank" rel="noopener noreferrer">www.rnacentre.org</a>
        </div>
        <div class="footer-row footer-address">
          <span class="footer-heading">Address</span>
          <span class="footer-address-text">Building F, Guangzhou National Laboratory 9 Xingdao North Road, Guangzhou International Bio Island, Haizhu District, Guangzhou, Guangdong, China.</span>
        </div>
        <div class="footer-row footer-bundle">
          <span class="footer-heading">Bundle</span>
          ${i.map(e=>`<a href="${X(e)}" ${e.id===r.siteId?`aria-current="page"`:``}>${e.label}</a>`).join(``)}
        </div>
        <div class="footer-row footer-domain">
          <span class="footer-heading">GitHub Pages</span>
          <a href="${r.githubPagesUrl}" target="_blank" rel="noopener noreferrer">${r.githubPagesUrl}</a>
          <span class="sep">|</span>
          <span class="footer-heading">Custom domain</span>
          <strong>${r.customDomain}</strong>
        </div>
      </div>
    </div>
  </footer>`}function he(e){let t=U(e);return t===`atlas`?F(J,q):t===`lineages`?I():t===`markers`?L():t===`datasets`?R():t===`about`?z():P()}function ge(e){return k(e)}function _e(){document.querySelectorAll(`[data-route]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=U(e.getAttribute(`data-route`));if(Y=!1,G===t&&window.location.hash===`#${t}`){$({preserveScroll:!0});return}G=t,window.location.hash=G})})}function ve(){window.__lungdevViewerListenerBound||(window.addEventListener(`message`,e=>{let t=e.data;!t||t.type!==`lungdev-stage-change`||o.some(e=>e.id===t.stage)&&(J=t.stage)}),window.__lungdevViewerListenerBound=!0)}function ye(){document.getElementById(`mode-switcher`)?.addEventListener(`click`,()=>{q=q===`light`?`dark`:`light`,$({preserveScroll:!0})})}function be(){document.getElementById(`nav-menu-toggle`)?.addEventListener(`click`,()=>{Y=!Y,$({preserveScroll:!0})})}function xe(){let e=document.getElementById(`atlas-extended-toggle`),t=document.getElementById(`atlas-extended-drawer`);!e||!t||e.addEventListener(`click`,()=>{let n=t.classList.contains(`is-open`);t.classList.toggle(`is-open`),e.classList.toggle(`is-open`),e.setAttribute(`aria-expanded`,String(!n))})}function Se(){document.querySelectorAll(`.expand-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-target`),n=document.getElementById(t);if(!n)return;let r=n.style.display===`block`,i=e.closest(`.stage-card`);i.querySelectorAll(`.expand-content`).forEach(e=>{e.style.display=`none`}),i.querySelectorAll(`.expand-btn`).forEach(e=>{e.classList.remove(`active`)}),r||(n.style.display=`block`,e.classList.add(`active`))})}),document.querySelectorAll(`.stage-inline-expand`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-target`),n=document.getElementById(t);if(!n)return;let r=n.style.display===`block`,i=e.closest(`.stage-card`);i.querySelectorAll(`.stage-expand-content`).forEach(e=>{e.style.display=`none`}),i.querySelectorAll(`.stage-inline-expand`).forEach(e=>{e.classList.remove(`active`)}),r||(n.style.display=`block`,e.classList.add(`active`))})})}function $(e={}){let{preserveScroll:t=!1}=e,n=window.scrollX,i=window.scrollY;fe(q),K?(document.title=`Dataset Detail | ${K} | ${r.label}`,document.getElementById(`app`).innerHTML=`${Z()}${ge(K)}${Q()}`):(document.title=`${r.label} | ${pe()}`,document.getElementById(`app`).innerHTML=`${Z()}${he(G)}${Q()}`),_e(),ve(),ye(),be(),Se(),xe(),V(),Ce(),we(),t&&requestAnimationFrame(()=>window.scrollTo(n,i))}function Ce(){document.querySelectorAll(`.dataset-row`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-dataset-id`);t&&(K=t,window.location.hash=`datasets/${t}`)})})}function we(){let e=document.querySelector(`[data-download-search]`),t=document.querySelector(`[data-download-reset]`),n=document.querySelectorAll(`[data-col-filter]`),r=document.querySelector(`[data-download-tbody]`),i=document.querySelector(`[data-download-table]`);if(!e||!r||!i)return;r.innerHTML=`
    <tr><td colspan="11" style="text-align: center; color: var(--textSecondary); padding: 40px;">No data available. Dataset content coming soon.</td></tr>
  `;function a(){let t=e.value.toLowerCase(),i=Array.from(n).map(e=>e.value.toLowerCase());r.querySelectorAll(`tr`).forEach(e=>{let n=e.querySelectorAll(`td`);if(n.length===0)return;let r=!0;t&&(r=Array.from(n).some(e=>e.textContent.toLowerCase().includes(t)));let a=!0;i.some(e=>e)&&(a=i.every((e,t)=>{if(!e)return!0;let r=t<n.length?t:-1;return r===-1?!0:n[r].textContent.toLowerCase().includes(e)})),e.style.display=r&&a?``:`none`})}e.addEventListener(`input`,a),n.forEach(e=>{e.addEventListener(`input`,a)}),t?.addEventListener(`click`,()=>{e.value=``,n.forEach(e=>{e.value=``}),a()})}window.addEventListener(`hashchange`,()=>{let e=ue(window.location.hash);e?(K=e.datasetId,G=`datasets`):(K=null,G=W(window.location.hash)),Y=!1,$()}),$();