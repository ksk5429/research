---
layout: page
title: research
permalink: /research/
description: Trust-weighted Multi-modal Evidence Fusion (TMEF) for Structural Health Monitoring.
nav: true
nav_order: 2
---

# Trust-weighted Multi-modal Evidence Fusion (TMEF) for SHM

**Thesis.** *How does heterogeneous evidence become trustworthy decisions in structural health monitoring?*

Safety-critical SHM decisions — inspect, continue, shut down, retrofit — are made from evidence that arrives in radically different forms. Continuous streams (vibration, strain, acoustic emission, fiber-optic strain). Discrete campaigns (bathymetry, CPT, inspection reports). Expensive simulations (FEM, PISA, limit-equilibrium). Expert judgment from site operators. Recommendations from AI agents. Each source carries its own reliability, cost, time-to-result, and failure mode. Classical Bayesian fusion assumes fixed likelihoods. Classical value-of-information is unimodal. Classical attribution ignores the fusion layer. **TMEF formalises the missing pieces.**

The program rests on established foundations — Dempster-Shafer 1976, Jøsang subjective logic 2001, Hall & Llinas 2001, Ades & Sutton 2006, Avci et al. 2021 *J. Sound Vib.*, Straub 2014 *RESS*, Pozzi & Der Kiureghian 2011 *Structural Safety* — and extends them through four research questions, each with creative solution approaches.

My PhD dissertation (SNU, defense 2026-09) is the SHM instance already validated — 22 centrifuge tests at the KAIST 70g facility, 1,794 Monte Carlo simulations, 32 months of field monitoring on a 4.2 MW offshore wind turbine in Gunsan with 22,617 analysis windows. Ch 7's three-channel Bayesian fusion delivered 67% posterior σ reduction and 40–70% realized-cost reduction vs calendar inspection; Ch 4's Buckingham-Pi cross-domain feature achieved 100% leave-one-soil-out classification across 5 soils (p = 0.0003). The dissertation proves TMEF works in SHM. **The postdoc formalises the missing pieces and validates across SHM structure types.**

---

## RQ1 — Unified representation of heterogeneous SHM evidence

> **Can we embed vibration waveforms, CPT profile functions, FEM scalar outputs, and inspection-log text into one latent manifold whose coordinates carry physical dimensions — so that Bayesian fusion happens in the latent without losing dimensional sanity, and the same manifold generalises across offshore-foundation and transmission-tower structures?**

**Challenge.** Too much shared-space collapses modality-specific structure. Too little means no fusion.

### Creative solution approaches

1. **Buckingham-Pi-axis manifold.** Treat the dissertation Ch 4 Pi-groups (including strain-acceleration coherence at f₁) as the native coordinates of the latent manifold. Every sensor maps to a position along these Pi-axes. The manifold has physical meaning *by construction*, not as an afterthought.
2. **Decision-anchored contrastive learning.** Replace ImageBind's image anchor with a *decision anchor* — the latent quantity the SHM decision actually depends on (e.g., S/D for scour, damage index for bridges). All modalities are trained to predict the same anchor from their own view. The shared latent emerges as what they agree on.
3. **Dimensionally-typed neural networks.** Each latent coordinate carries a declared physical unit; every operation (addition, inner product, concatenation) is checked via dimensional algebra at compile time. Violates-dimensions = compile error, not silent bug.
4. **Residual-decomposition architecture.** Latent = shared-across-modalities ⊕ modality-specific residual. Fusion uses only the shared part; residuals remain reversible for diagnostic inspection. A sensor that disagrees with all others shows up as a large residual, a flag for Paper 2's trust layer.

### Validation (all within SHM)

- **Primary** — offshore-wind tripod suction bucket (PhD data). Embedding must reproduce Ch 4's 100% LOSO result as a special case.
- **Secondary** — transmission-tower shallow foundations (my co-author line, J8–J12, five SCI 2022–2024). Cross-structure generalisation.

---

## RQ2 — Trust-weighted Bayesian fusion with source-aware credibility

> **Can SHM evidence fusion accommodate trust weights that are dynamic (update per observation), conflict-aware (decay on disagreement), envelope-gated (hard-zero on V&V violation), and consequence-coupled (sharpen with decision stakes) — while remaining mathematically coherent with Jøsang subjective logic and hierarchical Bayesian updating?**

Classical Bayesian fusion assumes fixed likelihoods. Real SHM decisions have variable trust.

### Creative solution approaches

1. **Variational subjective-logic posterior.** Learn belief / disbelief / uncertainty triples as amortised variational parameters. Each evidence source has its own triple; the triples update with observations; the Bayesian posterior is computed by Jøsang fusion operators on the triples.
2. **Hybrid hard + soft trust gate.** If a source's observation falls outside its verified envelope (e.g., FEM input outside V&V range, LLM query outside training distribution), its trust is hard-zeroed. Otherwise trust is a learned soft function of agreement history. Hard gate guarantees safety; soft gate captures nuance.
3. **Consequence-coupled trust sharpening.** Prior trust ∝ 1 / expected-cost-of-error. Shut-down decisions demand higher-trust evidence than continue-monitoring. The cost matrix from dissertation Ch 7 (calibrated on KEPCO operational figures) defines the sharpening curve.
4. **Meta-learned disagreement rules.** Train a trust-update rule on K-Fish's 30-contract Polymarket disagreement archive (Brier 0.213), then transfer to SHM where ground truth is scarce. Trust dynamics learned in one domain can bootstrap another.
5. **Multi-agent LLM ensemble with per-agent trust.** Each of K-Fish's 9 agents is an evidence source with its own calibrated trust profile. The Calibrator agent audits systematic biases and issues trust updates. This formalises the otherwise informal prediction-market deployment into engineering.

### Validation (all within SHM)

- **Primary** — PhD Ch 7 four-scenario set (healthy / early-warning / critical / near-failure) with *injected source-specific failures*: sensor faults, FEM out-of-envelope drifts, LLM hallucinations.
- **Secondary** — K-Fish 9-agent risk assessments on 50 hindcast SHM decisions (Gunsan events + published incidents + synthetic scenarios from Ch 7 library).

---

## RQ3 — Value-of-Information across cost-heterogeneous SHM modalities

> **Can we score a 10-minute spectral analysis, a 4-hour extended OMA run, a 1-week bathymetric survey, and a 2-week CPT on a single modality-invariant scale — producing a cost-per-information ranking a plant operator can read like a menu — by computing VoI in a dimensionally-normalised latent space rather than in raw sensor space?**

Dissertation Ch 7 VoI is unimodal (capacity vs frequency). SHM literature (Straub 2014; Pozzi & Der Kiureghian 2011) treats unimodal cases. Real operators face cost-heterogeneous modality menus.

### Creative solution approaches

1. **Latent-space KL-gain.** Compute expected posterior-entropy reduction in the RQ1 latent, not raw sensor space. Because the latent is dimensionally normalised, the same scalar applies to every modality.
2. **Cost-per-information menu.** Present VoI as "σ reduction per $1k and per day". Ranks measurements on a ratio that operators already think in — "is the $500k CPT worth it when I can get 70 % of the information from a $500 extended OMA run?"
3. **Counterfactual pre-measurement simulation.** For each candidate measurement, simulate its expected impact on the posterior under the current prior. If the expected decision change is below a threshold, drop the measurement *before paying for it*.
4. **Budget-constrained sequential rollout.** Given a fixed inspection budget (e.g., $100k over a year), find the optimal *sequence* of measurements — multi-step lookahead, not just myopic selection. Borrowed framing: multi-fidelity VoI (Peherstorfer-Willcox-Gunzburger 2018 *SIAM Rev.*).
5. **Regret-bandit framing.** Each measurement type is a bandit arm; costs and information gains are context. Thompson sampling with budget constraint. Produces an explore-exploit tradeoff that matches how real inspection programs evolve.

### Validation (all within SHM)

- **Primary** — Gunsan 32-month archive, 20 event windows with known outcomes. VoI-ordered sequence vs dissertation unimodal VoI vs calendar baseline. **Target: 30 %+ additional cost reduction beyond Ch 7's 40–70 %.**
- **Secondary** — published SHM benchmarks (IASC-ASCE, Z-24 Bridge, Dowling Hall footbridge) replayed retrospectively, testing modality-invariance across structure types.

---

## RQ4 — Trust calibration and attribution for AI-mediated SHM decisions

> **When an SHM AI outputs "S/D = 0.3 with 90 % CI [0.2, 0.4], recommend inspection" — can a four-layer attribution system (per-source Shapley + per-source trust + counterfactual flip + auditable JSON trail) measurably reduce BOTH overreliance AND under-reliance in practicing offshore engineers, compared to black-box output or single-layer XAI?**

Attribution, credit, and blame for multi-modal AI decisions is named in the 2024–2026 literature as nearly unsolved. Engineer overreliance on AI recommendations is measured (Klingbeil et al. 2024, *Comp. Human Behav.*); principled fixes for SHM-specific decisions are not.

### Creative solution approaches

1. **SHAP-on-fusion.** Compute Shapley values at the fusion layer where each evidence source is a "feature". Operator sees "vibration contributed +0.12, FEM contributed –0.05, Ch 4 feature contributed +0.08". Not single-model XAI; a fusion-native attribution.
2. **Counterfactual decision-flip disclosure.** "If vibration evidence increases by +10 %, the recommended decision flips from Inspect to Continue." Auto-generated and shown alongside the primary output. The operator immediately sees the decision's fragility.
3. **Provenance DAG visualisation.** Every composite output is rendered as a directed graph: raw sensor → processed feature → latent coordinate → posterior → decision. Per-edge weights and per-node trust scores are visible and clickable. The operator can "walk up" the graph to audit any step.
4. **LLM-generated attribution report with hard gates.** An LLM writes a natural-language justification — but cannot exceed per-source confidence bounds, cannot cite a source not in the fusion input, cannot omit uncertainty. Every claim is grounded in the provenance DAG.
5. **Longitudinal override-log analysis.** The operator's agreements and disagreements with the AI are logged over weeks. If the operator overrides AI repeatedly on similar decisions and AI was right, the system flags potential operator bias. If the operator defers repeatedly and AI was wrong, the system flags operator complacency. Trust calibration becomes measurable.
6. **Blame-attribution game (post-hoc).** When a decision turns out wrong, search for the single smallest source perturbation that would have flipped the decision to correct. That source gets "first responsibility"; but if no single source is sufficient, the fusion layer itself is flagged. Assigns credit and blame as a minimum-effort counterfactual.

### Validation (all within SHM)

- **Primary** — user study: 30–60 practicing offshore engineers (KEPCO Research, Unison, PRISM-AI industry partners). Between-subjects arms: {no attribution, source-contribution only, full four-layer}. 20 realistic Gunsan SHM decisions with known ground truth. Measure: decision accuracy, override-error rate, deference-error rate, trust-calibration curves.
- **Secondary** — Gunsan plant operators on 22,617-window archive, longitudinal override-log over 4-week deployment.

---

## Program outputs (2-year postdoc)

- **Four Q1 first-author papers**, one per research question (see targets per section above).
- **Open-source TMEF extension of [Op³](https://github.com/ksk5429/numerical_model)** — Buckingham-Pi latent encoder, subjective-logic trust layer, cross-modal VoI planner, attribution interface.
- **A cross-structure SHM benchmark** for multi-modal evidence fusion under trust constraints: offshore tripod bucket + transmission-tower shallow foundation + published SHM benchmark replays.

## Program grounding in the literature

- **Bayesian evidence fusion foundations.** Dempster (1967), Shafer (1976), Jøsang (2001, 2016) — subjective logic. Gelman et al. (BDA3, 2013). Ades & Sutton (2006). Sensoy et al. (2018) — evidential deep learning.
- **Multi-sensor fusion for SHM.** Hall & Llinas (2001). Avci et al. (2021) *J. Sound Vib.* SHM DL review. Azimi et al. (2020) *Sensors*.
- **Value of information in SHM.** Howard (1966). Straub (2014) *RESS*. Pozzi & Der Kiureghian (2011) *Structural Safety*. Chaloner & Verdinelli (1995) *Statistical Science*. Peherstorfer-Willcox-Gunzburger (2018) *SIAM Rev.* Houlsby (2011) BALD.
- **Digital twins for SHM.** Wagg, Worden, Barthorpe, Gardner (2020). Farrar & Worden (2012). Kapteyn, Pretorius, Willcox (2021) *Nature Comp. Sci.*
- **Trust calibration and attribution (RQ4).** Lakkaraju et al. (NeurIPS 2020/2021). Bansal et al. (2021) CHI. Klingbeil et al. (2024) *Comp. Human Behav.* Lundberg & Lee (2017) SHAP. Wachter-Mittelstadt-Russell (2017) counterfactuals.
- **Ryu-group lineage at KAIST.** Park, Moon, Ryu (2026) *npj AI* 2:10 — MCP-SIM self-correcting multi-agent LLM. Lee, Moon, Lee, Ryu (2025) arXiv 2506.00056 — knowledge-guided AI three-pillar framework. Yang, Kim, Ryu, Gu (2020) *npj CM* — CNN surrogate for mechanics.
