---
layout: page
title: "RQ3 — Value-of-Information across cost-heterogeneous SHM modalities"
description: Modality-invariant VoI for ranking next SHM measurements under cost, time, and information-gain heterogeneity.
img: assets/img/10.jpg
importance: 3
category: tmef
related_publications: true
---

## Research question

A Gunsan plant operator can order a 10-minute spectral analysis ($0), a 4-hour extended OMA run ($500 in crew time), a 1-week bathymetric survey ($50k + boat time), or a 2-week CPT at the foundation ($500k + dredge ship). Each has different information gain about the same latent state (true S/D). PhD Ch 7 VoI ranked *single-modality* observations (capacity vs frequency); it cannot handle cost heterogeneity or modality sequencing. The SHM-VoI literature (Straub 2014; Pozzi & Der Kiureghian 2011) treats unimodal cases.

**Hypothesis.** A **modality-invariant VoI** framework — where each candidate measurement is scored by expected information gain divided by (cost × time-to-result) under the current posterior — generalises across SHM modalities and across SHM structure types. Modality-invariance comes from computing VoI in the RQ1 latent space, not in raw sensor space.

## Method

- VoI formulation in the RQ1 latent: expected KL-divergence reduction per (cost, time) unit.
- **Sequential decision.** Pick the next measurement that maximises expected posterior variance reduction; re-plan after each observation.
- Baselines: classical fixed-budget Chaloner-Verdinelli design, BALD active learning (Houlsby 2011), multi-fidelity VoI (Peherstorfer-Willcox-Gunzburger 2018, *SIAM Rev.*).

## Case studies (inside SHM only)

| Case | Data | Role |
|---|---|---|
| Primary | Gunsan 32-month archive — next-measurement ranking across vibration, strain, bathymetry, CPT, FEM update | Paper 3 headline |
| Secondary | Published SHM benchmarks — IASC-ASCE SHM benchmark / Z-24 Bridge / Dowling Hall footbridge — retrospective VoI replay | Structure-type generalisation |

## Benchmark targets

- SHM primary: 20 Gunsan event windows with known outcomes → VoI-ordered sequence vs dissertation's unimodal VoI vs calendar baseline. **Target: 30%+ further cost reduction beyond Ch 7's 40–70%.**
- SHM secondary: match or improve detection-per-dollar vs the published decision baselines for each benchmark dataset.

## Novel contributions

1. First cross-modal SHM VoI framework validated on both offshore and bridge data.
2. Explicit cost-time heterogeneity in the information gain calculus.
3. Sequential-decision extension — not just static one-shot VoI.

## Target venue

*Structural Safety* (Q1, IF ~6), *Reliability Engineering & System Safety* (IF ~10), or *Decision Analysis* (INFORMS).

## Ryu-group lineage

Ryu's direction [3] — expert-guided sampling. Active learning / VoI is not a current Ryu-group theme; this paper opens it.

## Status

Planning. Paper 3 of TMEF, targeted months 13–20 of the postdoc.
