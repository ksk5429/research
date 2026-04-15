---
layout: about
title: about
permalink: /
subtitle: PhD candidate · Seoul National University · <a href="/research/research/">Research program — TMEF for SHM</a>

profile:
  align: right
  image:
  image_circular: false
  more_info: >
    <p><strong>Kyeong Sun Kim (김경선)</strong></p>
    <p>Dept. Civil & Env. Engineering</p>
    <p>Seoul National University</p>
    <p>Seoul, South Korea</p>
    <p><a href="mailto:kyeongsunkim@snu.ac.kr">kyeongsunkim@snu.ac.kr</a></p>
    <p><a href="https://github.com/ksk5429">github.com/ksk5429</a></p>

news: true
selected_papers: false
social: false
---

## How does heterogeneous evidence become trustworthy decisions?

A modern SHM decision — is this offshore foundation healthy? is this bridge safe to keep open? — fuses evidence that arrives in radically different forms: continuous sensor streams, discrete inspection campaigns, expensive engineering simulations, expert judgment, AI-agent recommendations. Each source has its own reliability, cost, time-to-result, and failure mode.

Classical Bayesian fusion treats the likelihoods as fixed. Classical value-of-information is unimodal. Classical attribution ignores the fusion layer entirely. My research program, **Trust-weighted Multi-modal Evidence Fusion (TMEF)**, formalises the missing pieces through four research questions and validates them on structural health monitoring data I collected across centrifuge, simulation, and 32 months of field deployment.

**The four research questions** I work on:

1. **Unified representation.** Can we embed vibration, strain, CPT, FEM, and inspection text into one physics-constrained latent manifold without losing modality-specific structure?
2. **Trust-weighted fusion.** Can SHM Bayesian inference accommodate dynamic, consequence-coupled trust hyperparameters that respond to disagreement and envelope violations?
3. **Cross-modal VoI.** Can we rank a 10-minute spectral analysis, a 1-week bathymetry, and a 2-week CPT on one modality-invariant cost-per-information scale?
4. **Attribution & accountability.** When an AI-mediated SHM decision is wrong, can we assign credit and blame across sensor, model, AI, and human in a way that calibrates trust?

The program rests on established foundations — Dempster-Shafer, Jøsang subjective logic, Ades-Sutton evidence synthesis, Straub VoI, Avci SHM fusion. Full program, creative solution approaches, and target venues are on the [research page](/research/research/).

## What I've built

- **PhD dissertation (SNU, defense 2026-09)** — an integrated numerical and digital-twin framework for scour assessment of offshore wind turbine foundations. 22 centrifuge tests at the KAIST 70g facility, 1,794 Monte Carlo simulations, 32 months of field monitoring on a 4.2 MW turbine in Gunsan, 22,617 analysis windows with zero false alarms. Ch 7's three-channel Bayesian fusion delivered 67 % posterior σ reduction and 40–70 % realized-cost reduction vs calendar inspection.
- **[Op³](https://github.com/ksk5429/numerical_model)** — open-source Python framework for offshore wind turbine foundation analysis. `pip install op3-framework` · 140 tests · 39 V&V benchmarks · [Zenodo DOI](https://doi.org/10.5281/zenodo.19476542).
- **[K-Fish](https://github.com/ksk5429/quant)** — 9-agent LLM swarm with Bayesian confidence-weighted fusion and a Calibrator agent that audits its reasoning. A precursor architecture for TMEF's multi-agent evidence aggregation with source-specific trust.

## About me

BS in Civil & Environmental Engineering at UC Berkeley (2016). PhD at Seoul National University under Prof. Sung-Ryul Kim (defense September 2026). Director at Marine Master Technology Co. Engineer at Myungil Jack-Up Ocean, Korea's sole manufacturer of modular jack-up barges. Best reached by email.
