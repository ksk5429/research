---
layout: about
title: about
permalink: /
subtitle: PhD candidate, Seoul National University · Research program — <a href="/research/research/">Trust-weighted Multi-modal Evidence Fusion for SHM</a>

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Dept. Civil & Env. Engineering</p>
    <p>Seoul National University</p>
    <p>Seoul, South Korea</p>

news: true
selected_papers: true
social: true
---

I study **how heterogeneous evidence becomes trustworthy decisions in structural health monitoring (SHM)**.

A modern SHM decision — is this offshore foundation healthy? is this bridge safe to keep open? — is made by fusing evidence that arrives in very different forms. Continuous sensor streams (accelerometers, strain gauges, fiber optics, acoustic emission). Discrete updates (bathymetric surveys, inspection reports, CPT). Expensive engineering simulations (FEM, PISA, limit-equilibrium analyses). Expert judgment from the site operator. Recommendations from an AI agent. Each evidence source has its own reliability, cost, and failure mode. Classical Bayesian fusion treats the likelihoods as fixed; classical value-of-information is unimodal; classical attribution ignores the fusion layer entirely.

My research program, **Trust-weighted Multi-modal Evidence Fusion (TMEF)**, formalises the missing pieces through four research questions — unified representation of heterogeneous SHM evidence, trust-weighted Bayesian fusion with source-aware credibility, cross-modal value-of-information under cost heterogeneity, and trust calibration plus attribution for AI-mediated SHM decisions. The program is grounded in established Bayesian-fusion and multi-sensor-fusion literatures (Jøsang subjective logic, Dempster-Shafer, Ades-Sutton evidence synthesis, Straub VoI, Avci SHM deep-learning fusion). My PhD dissertation at SNU is the SHM instance already validated — 22 centrifuge tests at the KAIST 70g facility, 1,794 Monte Carlo simulations, and 32 months of field monitoring on a 4.2 MW offshore wind turbine in Gunsan. Full program in the [research](/research/research/) section.

In parallel I maintain [Op³](https://github.com/ksk5429/numerical_model) — an open-source Python framework for scour assessment of offshore wind turbine foundations (140 tests, 39 V&V benchmarks, PyPI-distributed). I also build [K-Fish](https://github.com/ksk5429/quant), a 9-agent LLM swarm whose Calibrator agent audits its own reasoning — a precursor architecture for trust-weighted multi-agent evidence aggregation in SHM.

I hold a BS in Civil & Environmental Engineering from UC Berkeley (2016) and will defend my PhD at SNU in September 2026 under Prof. Sung-Ryul Kim. I also serve as Director at Marine Master Technology Co. and as an engineer at Myungil Jack-Up Ocean.
