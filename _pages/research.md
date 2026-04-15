---
layout: page
title: research
permalink: /research/
description: Trust-weighted Multi-modal Evidence Fusion for Structural Health Monitoring.
nav: true
nav_order: 2
---

# Trust-weighted Multi-modal Evidence Fusion (TMEF) for SHM

**Thesis.** *How does heterogeneous evidence become trustworthy decisions in structural health monitoring?*

Safety-critical SHM decisions — inspect / continue / shut down — draw on evidence in many forms: continuous sensor streams, discrete campaigns, expensive simulations, expert judgment, AI-agent recommendations. Each source has its own reliability, cost, and failure mode. Classical Bayesian fusion assumes fixed likelihoods; classical VoI is unimodal; classical attribution ignores the fusion layer.

TMEF formalises the missing pieces through four research questions, grounded in established Bayesian-fusion and multi-sensor-fusion literatures (Dempster-Shafer 1976, Jøsang subjective logic 2001, Hall & Llinas 2001, Ades & Sutton 2006, Avci et al. 2021, Straub 2014, Pozzi & Der Kiureghian 2011).

## The four research questions

### RQ1 — Unified representation of heterogeneous SHM evidence
How do you embed physically different SHM signal types — continuous waveforms (vibration, strain, acoustic emission), discrete observations (CPT profile, bathymetric survey), FEM scalar outputs (V-H-M envelope, natural frequency), inspection-report text, maintenance logs — into a shared latent space where Bayesian inference is tractable? What minimum structural constraint (dimensional algebra, non-dimensional Pi-group invariance) keeps the embedding physically meaningful? Challenge: too much shared-space collapses modality-specific structure; too little means no fusion.
[→ RQ1 project](/research/projects/rq1-representation/)

### RQ2 — Trust-weighted Bayesian fusion with source-aware credibility
Given that SHM evidence sources have different reliability profiles, how do you update trust when sources disagree, when one source has a known failure mode, or when the decision consequence changes? Classical Bayesian fusion assumes fixed likelihoods — real SHM decisions have variable trust. Subjective logic (Jøsang) and evidential deep learning (Sensoy et al. 2018) provide the mathematical substrate.
[→ RQ2 project](/research/projects/rq2-trust-fusion/)

### RQ3 — Value-of-Information across cost-heterogeneous SHM modalities
When SHM modalities differ in cost (spectral analysis ≈ free vs foundation CPT ≈ $500k), time-to-result, and information gain per unit cost, how do you design the optimal sequence of next measurements? Can VoI be evaluated before the measurement using prior distributions over outcomes? Can it be made modality-invariant so a single framework ranks acoustic, vibration, strain, and geophysical campaigns on the same scale? Extends unimodal SHM VoI (Straub 2014; Pozzi & Der Kiureghian 2011) into the cross-modal regime.
[→ RQ3 project](/research/projects/rq3-cross-modal-voi/)

### RQ4 — Trust calibration and attribution for AI-mediated SHM decisions
When a multi-modal SHM system produces a composite output — "scour state S/D = 0.3 ± 0.08, recommend inspection" — how do you quantify credit and blame when the decision turns out wrong? Which sensor, which FEM, which fusion step, which AI agent, or the human who accepted the output? Attribution + trust + accountability for multi-modal AI-mediated SHM decisions is nearly unsolved. What attribution mechanism makes appropriate operator override or deference possible?
[→ RQ4 project](/research/projects/rq4-attribution/)

## Case studies (all within SHM)

* **Primary — offshore wind turbine tripod suction-bucket foundations** (PhD dissertation). 22 centrifuge tests at the KAIST 70g facility, 1,794 Monte Carlo simulations via Op³, 32-month vibration-based field monitoring of a 4.2 MW turbine in Gunsan with 22,617 analysis windows.
* **Secondary (Paper 1)** — transmission-tower shallow foundations: my co-author publication line (5 SCI in 2022–2024) provides a cross-structure SHM case study within the same methodological framework.
* **Secondary (Paper 3)** — published SHM benchmark datasets: IASC-ASCE SHM benchmark, Z-24 Bridge archive, Dowling Hall footbridge. Public data, no access friction, established ground-truth states.
* **HCI (Paper 4)** — user study with practicing offshore engineers and KEPCO plant operators on Op³ Studio.

## Program outputs

* Four Q1 first-author papers, one per research question (2026–2028).
* Open-source TMEF extension of [Op³](https://github.com/ksk5429/numerical_model) — subjective-logic trust layer, cross-modal VoI planner, attribution interface.
* A defensible cross-structure SHM benchmark for multi-modal evidence fusion under trust constraints.
