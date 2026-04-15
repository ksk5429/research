---
layout: page
title: RQ2 — Trust-weighted fusion
description: Source-aware credibility when evidence sources disagree or fail.
img: assets/img/8.jpg
importance: 2
category: tmef
permalink: /research/rq2-trust-fusion/
---

## Problem statement

Given that evidence sources have different reliability profiles, how do you update trust
when sources disagree, when one source has a known failure mode, or when the decision
consequence changes? Classical Bayesian fusion assumes fixed likelihoods — real decisions
have variable trust.

## Method

- **Source-specific likelihood networks** trained per modality with calibration targets
  (Brier, ECE), not just accuracy.
- **Trust update** inspired by Dempster–Shafer evidence theory with a discount factor tied
  to observed cross-source disagreement.
- **Failure-mode priors** encoded from domain knowledge (e.g. sensor icing, centrifuge
  scaling violation, FEM mesh dependence).
- **Decision-consequence coupling** — the same evidence can map to different posteriors if
  the cost of a wrong call changes (asymmetric loss).

## Primary case study

SHM fusion across three heterogeneous sources for the Gunsan 4.2 MW tripod: (i) 32 months
of accelerometer streams (continuous, high trust in normal regime, degrades after storm
events), (ii) discrete centrifuge comparison points (high trust, sparse), (iii) Monte-Carlo
FEM priors (1,794 runs, trust varies with soil-parameter confidence). The fusion layer
must recover a scour posterior consistent with the twin ROV survey in summer 2025.

## Secondary case study

Biomedical-age fusion under disagreement. When Horvath 2013 and GrimAge disagree by more
than 5 years on the same subject, what weighting is defensible? Which clock is
down-weighted in which subpopulation?

## Target venue

*Reliability Engineering & System Safety* or *Mechanical Systems and Signal Processing*
(2027 Q1 target).

## Status

In planning. Depends on RQ1 embedding. Postdoc year 1–2 (2026–2027).

## Related

- [Op³ framework](/research/op3/) — hosts the MC prior machinery.
- [K-Fish swarm](/research/k-fish/) — Calibrator agent is a trust-weighted fusion prototype
  at the LLM-ensemble level.
