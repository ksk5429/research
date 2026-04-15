---
layout: page
title: RQ1 — Unified representation
description: Embedding heterogeneous evidence into a shared, physically meaningful latent space.
img: assets/img/7.jpg
importance: 1
category: tmef
permalink: /research/rq1-representation/
---

## Problem statement

How do you embed physically different signal types — acceleration time histories,
discrete laboratory readings, expensive FEM outputs, expert scores — into a shared latent
space where Bayesian inference becomes tractable? What minimum structural constraint keeps
the embedding physically meaningful? Too much shared-space collapses modality-specific
structure; too little means no fusion.

## Method

- **Physics-informed encoder** that maps scour geometry, foundation response, and soil state
  into a low-dimensional latent with Buckingham-Pi groups as the invariance axis.
- **Cross-domain features** constructed from dimensionless numbers so centrifuge, FEM, and
  field data share the same coordinate system.
- **Correlation-preserving loss** penalising embeddings that destroy known physical
  monotonicities (e.g. natural-frequency vs scour-depth).
- **Supervised contrastive head** to align runs differing only in noise while separating
  runs differing in physics.

## Primary case study

PhD Ch 4 establishes the empirical basis. A Buckingham-Pi feature set, trained only on
centrifuge tests, transfers to FEM and to 32 months of field data from a 4.2 MW offshore
wind turbine in Gunsan. Leave-one-scenario-out accuracy: **100% (p = 0.0003)**. 1,794 Monte
Carlo runs confirm that the latent coordinate recovered under arbitrary soil-parameter
draws remains monotone in scour depth (Spearman = 0.9976 on dim-1).

## Secondary case study

Biological-age composite on NHANES / UK Biobank cohorts using Horvath 2013, PhenoAge,
GrimAge, and DunedinPACE clocks. Each clock is a different modality with its own noise and
domain of validity; the goal is a shared embedding that lets a clinician reason jointly
about all four.

## Target venue

*Reliability Engineering & System Safety* — first RQ1 paper bundled with VoI results
(drafted 2026-04-15, submission within 2 weeks).

## Status

Planning complete. Primary case study has a publishable result (Ch 4 / Paper A draft).
Secondary case study queued for postdoc year 1 (2026–2027).

## Related

- [Op³ framework](/research/op3/) — encoder implementation, 1,794 MC runs.
- [PhD dissertation](/research/phd-dissertation/) — Ch 4 primary evidence.
