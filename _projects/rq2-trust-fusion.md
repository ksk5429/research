---
layout: page
title: "RQ2 — Trust-weighted Bayesian fusion with source-aware credibility"
description: Learnable, dynamic trust hyperparameters for SHM evidence fusion.
img: assets/img/11.jpg
importance: 2
category: tmef
related_publications: true
---

## Research question

PhD Ch 7 fused three channels (frequency, capacity, Ch 4 cross-domain feature) with *fixed* likelihoods. Real SHM decisions have variable trust: a frequency estimate during a storm is untrustworthy; an FEM output outside its V&V envelope is untrustworthy; an LLM agent reasoning outside its training distribution is untrustworthy. How do you perform Bayesian posterior inference with **explicit, dynamic, learnable trust hyperparameters** that update when sources disagree, fail, or operate outside their validated envelope?

## Method

- **Hierarchical Bayesian model** (Gelman et al. 2013) with per-channel trust hyperparameters `τ_A`, `τ_B`, `τ_C`.
- **Subjective Logic** (Jøsang 2001, 2016) — belief / disbelief / uncertainty triple as the fusion algebra. Under-used in SHM but a near-perfect fit.
- **Conflict-aware operators** — Yager's rule, PCR5 (Smarandache-Dezert).
- **Evidential Deep Learning** (Sensoy et al. 2018, NeurIPS) — NN outputs belief masses, not probabilities; RQ2 brings this into SHM.
- **Trust-update rules.** Disagreement-triggered decay, V&V-envelope gating, consequence-weighted sharpening.
- **Multi-agent extension.** K-Fish-style 9-agent LLM swarm where each agent is an evidence source with its own trust profile. Calibrator agent produces audit updates.

## Case studies (inside SHM only)

| Case | Data | Role |
|---|---|---|
| Primary | Ch 7 four-scenario set (healthy / early / critical / near-failure) with injected source-failure perturbations | Paper 2 headline |
| Secondary | K-Fish 9-agent risk assessments on 50 hindcast SHM events (Gunsan + published incidents + synthetic) | Multi-agent generalisation |

## Novel contributions

1. First formal trust-weighted extension of SHM Bayesian fusion.
2. Bridge between subjective logic (classical evidence theory) and evidential deep learning.
3. Agent-specific trust for multi-agent LLM — formalises K-Fish's informal Polymarket deployment (Brier 0.213).
4. Empirical trust-update rules calibrated on SHM decision consequences.

## Target venue

***Information Fusion*** (Q1, IF ~18 — the premier venue), *Reliability Engineering & System Safety* (IF ~10), or *npj AI*.

## Ryu-group lineage

Directly extends Park, Moon, Ryu (2026) *npj AI* 2:10 (MCP-SIM self-correcting multi-agent LLM framework) by adding explicit agent-trust hyperparameters. Ryu's group provides the multi-agent architecture; TMEF adds the trust layer.

## Status

Planning. Paper 2 of TMEF, targeted months 7–14 of the postdoc.
