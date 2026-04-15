---
layout: page
title: K-Fish
description: A 9-agent LLM swarm whose Calibrator audits its own reasoning.
img: assets/img/2.jpg
importance: 2
category: software
permalink: /research/k-fish/
---

## What

**K-Fish** is a quantitative-reasoning swarm of 9 LLM agents that reason about the same
question through structurally orthogonal frames (Schoenegger 2024), then aggregate under a
Calibrator that is trained to audit its own disagreement.

## Why it matters to TMEF

K-Fish is the LLM-domain instance of RQ2 (trust-weighted fusion) and RQ4 (attribution).
The eight frames behave like heterogeneous sensors; the Calibrator is a trust-aware fusion
layer; override-vs-deference data from the Calibrator's history feeds the RQ4 HCI study.

## Status

- **Repo:** [github.com/ksk5429/quant](https://github.com/ksk5429/quant)
- 4 public exercises run (215 analyses, 21 signals)
- Tiered 8-Fish / 9-Fish modes
- **Next:** Ex005 differential-update mode (only re-run frames whose evidence changed).

## Related

- [RQ2](/research/rq2-trust-fusion/), [RQ4](/research/rq4-attribution/).
