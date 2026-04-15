---
layout: page
title: "RQ4 — Trust calibration and attribution for AI-mediated SHM decisions"
description: Credit, blame, and operator trust calibration for multi-modal SHM composite outputs.
img: assets/img/9.jpg
importance: 4
category: tmef
related_publications: true
---

## Research question

Paper 2's fusion system produces composite outputs — "S/D = 0.3 with 90% CI [0.2, 0.4], recommend inspection". Paper 3's VoI system produces next-measurement rankings. A Gunsan plant operator who accepts or rejects these has no principled way to know (a) *which parts of the input* the system weighted most, (b) *which source* dominated, (c) *what would have to change* for the decision to flip, (d) who gets credit or blame when the decision is wrong. This is the attribution + accountability problem for multi-modal AI-mediated SHM decisions — named in the literature as nearly unsolved.

## Method

- **Attribution architecture.** Four layers: (source-contribution via SHAP-on-fusion) + (trust-weighted confidence bars per source, from Paper 2) + (counterfactual "what would flip this decision") + (formal audit trail per decision as structured JSON).
- **Op³ Studio as platform.** Existing FastAPI + React + sandboxed LLM chat shell becomes the experimental UI.
- **Between-subjects user study.** Three arms — {no attribution, source-contribution only, full four-layer attribution}. 30–60 practicing offshore engineers recruited via KEPCO Research, Unison, CRE, PRISM-AI industry partners.
- **Tasks.** 20 realistic Gunsan SHM decisions with known ground truth from the PhD dataset.
- **Metrics.** Decision accuracy, agreement rate with AI, override-error rate, deference-error rate, trust-calibration curves (pre- vs post-task confidence).

## Baselines

- Generic LLM recommendation (no fusion, no attribution).
- Paper 2 fusion output with no attribution.
- Classical XAI on single-model SHM predictions.

## Novel contributions

1. First attribution framework *for multi-modal fusion systems* — not single-model.
2. First trust-calibration user study with practicing offshore engineers on a real SHM tool.
3. Formal credit / blame assignment protocol that survives post-hoc review.
4. Empirical measurement of when attribution helps vs hurts operator decisions.

## Target venue

***Automation in Construction*** (Q1, IF ~10), *Mechanical Systems and Signal Processing* (Q1, IF ~8.4), or *Computers in Human Behavior* (Q1).

## Ryu-group lineage

Novel territory for his group — opens a human-factors thread PRISM-AI center currently lacks. Citations back to Ryu arXiv 2506.00056 pillar 3 (LLM interface for domain experts) and Park-Moon-Ryu 2026 *npj AI* (MCP-SIM's reflection-revision loop, which TMEF extends into attribution).

## Status

Planning. Paper 4 of TMEF, targeted months 17–24 of the postdoc.
