---
layout: page
title: "RQ1 — Unified representation of heterogeneous SHM evidence"
description: A physically-constrained latent space for multi-modal SHM sensor data.
img: assets/img/12.jpg
importance: 1
category: tmef
related_publications: true
---

## Research question

How do you embed physically different SHM signal types — continuous waveforms (vibration, strain, acoustic emission), discrete observations (CPT profile, bathymetric survey), FEM scalar outputs (V-H-M envelope, natural frequency), inspection-report text, maintenance logs — into a shared latent space where Bayesian inference is tractable? What minimum structural constraint keeps the embedding physically meaningful?

**Challenge.** Too much shared-space collapses modality-specific structure. Too little means no fusion.

## Method

- **Modality encoders.** CNN for vibration waveforms; graph-NN or functional encoder for CPT profiles-as-functions; MLP for scalar FEM outputs; LLM-based text encoder for inspection logs.
- **Shared latent.** Contrastive learning anchored on a decision-relevant quantity (e.g. S/D for scour assessment, damage index for bridges), not on image modality.
- **Physics constraint.** Latent must preserve Buckingham-Pi non-dimensional groups (my PhD Ch 4 identified strain-acceleration coherence at f₁ as a scale-invariant feature with 100% LOSO across 5 centrifuge soils, p = 0.0003 — a special case of this RQ).
- **Validation.** Embedding must reproduce Ch 4's LOSO result as a baseline on the offshore-wind dataset, AND generalise to a second SHM structure type (transmission-tower foundation, co-author dataset J8–J12).

## Case studies (inside SHM only)

| Case | Data | Role |
|---|---|---|
| Primary | Offshore wind tripod suction bucket — 22 centrifuge + 1,794 MC + 32 mo field | Paper 1 headline |
| Secondary | Transmission-tower shallow foundation (J8–J12, my co-author line) | Cross-structure generalisation |

## Novel contributions

1. Physics-constrained multi-modal latent for SHM — alternative to image-anchored binding.
2. First demonstration of cross-structure representation transfer (offshore wind → transmission tower) inside SHM with a single shared encoder.
3. Open-source release as a TMEF extension of [Op³](https://github.com/ksk5429/numerical_model).

## Target venue

*Mechanical Systems and Signal Processing* (Q1, IF ~8.4), *Structural Health Monitoring* (Q1, IF ~5.7), or *Advanced Engineering Informatics* (Q1).

## Status

Planning. Paper 1 of TMEF, targeted months 1–8 of the postdoc (Oct 2026 – May 2027).
