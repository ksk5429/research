---
layout: page
title: research
permalink: /research/
description: Trust-weighted Multi-modal Evidence Fusion (TMEF) — one thesis, four research questions.
nav: true
nav_order: 2
---

# Trust-weighted Multi-modal Evidence Fusion (TMEF)

**Thesis:** *How does heterogeneous evidence become trustworthy decisions?*

Safety-critical engineering and biomedical decisions draw on evidence that arrives in wildly
different forms — continuous sensor streams, discrete lab panels, expensive simulations,
expert judgment, AI-agent recommendations. Each source has its own reliability, cost, and
failure mode. Classical Bayesian fusion assumes fixed likelihoods; classical Value-of-
Information is unimodal; classical attribution ignores the fusion layer. The TMEF research
program answers four questions that the literature names as open.

## The four research questions

### RQ1 — Unified representation of heterogeneous evidence
How do you embed physically different signal types into a shared latent space where Bayesian
inference becomes tractable? What minimum structural constraint keeps the embedding
physically meaningful? Challenge: too much shared-space collapses modality-specific
structure; too little means no fusion.
[→ RQ1 project](/research/rq1-representation/)

### RQ2 — Trust-weighted fusion with source-aware credibility
Given that evidence sources have different reliability profiles, how do you update trust when
sources disagree, when one source has a known failure mode, or when the decision consequence
changes? Classical Bayesian fusion assumes fixed likelihoods — real decisions have variable
trust.
[→ RQ2 project](/research/rq2-trust-fusion/)

### RQ3 — Value-of-Information across cost-heterogeneous modalities
When modalities differ in cost, time-to-result, and information gain per unit cost, how do
you design the optimal sequence of next measurements? Can VoI be evaluated before a
measurement is taken, using prior distributions over outcomes? Can VoI be made
modality-invariant?
[→ RQ3 project](/research/rq3-cross-modal-voi/)

### RQ4 — Trust calibration for AI-mediated composite metrics
How do you quantify credit and blame when a decision turns out to be wrong — the sensor, the
fusion model, the AI, or the human who accepted it? Attribution + trust + accountability for
multi-modal AI decisions is nearly unsolved. What attribution mechanism makes appropriate
override / deference possible? How does the human know which parts of the input to trust?
[→ RQ4 project](/research/rq4-attribution/)

## Case studies
* **SHM primary** — offshore wind turbine tripod suction-bucket foundations (PhD dissertation).
  22 centrifuge tests, 1,794 Monte Carlo simulations, 32-month field monitoring of a 4.2 MW
  turbine in Gunsan.
* **Biomedical secondary** — biological-age composite from open aging-clock cohorts (NHANES,
  UK Biobank) using Horvath 2013 / PhenoAge / GrimAge / DunedinPACE.
* **HCI** — user study with practicing offshore engineers on Op³ Studio (RQ4).

## Program outputs
* Four Q1 first-author papers, one per research question (2026–2028).
* Open-source extension of Op³ framework to support the TMEF fusion and attribution layers.
* Cross-domain benchmark (physical + biomedical) for multi-modal evidence fusion under trust
  constraints.
