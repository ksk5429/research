---
layout: page
title: RQ3 — Cross-modal Value of Information
description: Optimal measurement sequencing when modalities differ in cost and information gain.
img: assets/img/9.jpg
importance: 3
category: tmef
permalink: /research/rq3-cross-modal-voi/
---

## Problem statement

When modalities differ in cost, time-to-result, and information gain per unit cost, how do
you design the optimal sequence of next measurements? Can VoI be evaluated **before** a
measurement is taken, using prior distributions over outcomes? Can VoI be made
modality-invariant, so engineers can compare a $200k ROV survey against a $5k lab index
test on the same axis?

## Method

- **Pre-posterior VoI** on the TMEF latent, computed over the prior predictive distribution
  of each candidate modality.
- **Cost-normalised VoI** in currency of a common decision metric (e.g. bits of scour-depth
  uncertainty per USD).
- **Sequential VoI** — next-best-measurement chosen conditional on currently realised
  evidence, with pruning for intractable branches.
- **Modality-invariant expression** by working in latent coordinates from RQ1 instead of
  raw physical units.

## Primary case study

Op³ Studio tool for operators of the Gunsan 4.2 MW turbine. Given the current fused
scour posterior, the tool ranks: ROV bathymetric survey, accelerometer campaign extension,
CPT verification drop, additional FEM sweep. Paper A already validates the unimodal VoI on
this case; RQ3 extends to the multi-modal, sequential setting.

## Secondary case study

Clinical-panel sequencing for biological age. Given a composite posterior from four clocks,
which next test (blood panel, functional measure, grip strength) buys the most uncertainty
reduction per dollar?

## Target venue

*Reliability Engineering & System Safety* — dedicated RQ3 paper (2027 target).

## Status

Unimodal VoI (the restricted version of RQ3) is already done in Paper A (drafted
2026-04-15). Cross-modal sequential version queued for postdoc year 2.

## Related

- [Paper A](/research/phd-dissertation/) — unimodal VoI proof-of-concept.
- [Op³ framework](/research/op3/) — hosts VoI evaluation.
