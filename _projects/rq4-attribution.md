---
layout: page
title: RQ4 — Trust calibration & attribution
description: Credit, blame, and appropriate override for AI-mediated engineering decisions.
img: assets/img/10.jpg
importance: 4
category: tmef
permalink: /research/rq4-attribution/
---

## Problem statement

How do you quantify credit and blame when a decision turns out to be wrong — the sensor,
the fusion model, the AI, or the human who accepted it? Attribution + trust + accountability
for multi-modal AI decisions is nearly unsolved. What attribution mechanism makes
**appropriate override / appropriate deference** possible? How does the human know which
parts of the input to trust?

## Method

- **Attribution at the fusion layer** using Shapley values over evidence sources, not over
  raw features, so engineers can read "the FEM prior carried 62% of this call".
- **Counterfactual explanations** — what evidence, changed by how much, would flip the
  decision?
- **Trust calibration curves** per source: when does the human override agree with ground
  truth? When does deference fail?
- **HCI study with practising offshore engineers** on Op³ Studio, measuring override
  quality before and after attribution is shown.

## Primary case study

Op³ Studio (structured-output LLM interface over Op³) used by engineers at Marine Master
Technology Co. and collaborators. Decision task: given fused evidence, should this
foundation be re-inspected within 30 days? Override-quality metric: does the engineer's
choice beat both the human-alone and the AI-alone baselines.

## Secondary case study

K-Fish Calibrator agent — when 8 orthogonal reasoning frames produce divergent quant
signals, the Calibrator must attribute disagreement to (a) frame failure mode, (b) input
ambiguity, or (c) true regime uncertainty. Same mathematics, different domain.

## Target venue

*ACM CHI* or *Human Factors* for the HCI study; *Reliability Engineering & System Safety*
for the attribution formalism (2028 target).

## Status

Earliest among the four — depends on RQ1/RQ2/RQ3. Postdoc year 2–3 (2027–2028).

## Related

- [K-Fish swarm](/research/k-fish/) — LLM-domain instance of the same problem.
- [Op³ framework](/research/op3/) — the carrier for the HCI study.
