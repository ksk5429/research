---
layout: page
title: Op³
description: Open-source Python framework for scour assessment of offshore wind turbine foundations.
img: assets/img/1.jpg
importance: 1
category: software
permalink: /research/op3/
---

## What

**Op³** is a Python framework for scour assessment of offshore wind turbine foundations with
suction bucket / tripod-bucket configurations. It wraps OpenSeesPy, OpenFAST, and OptumGX,
and is the computational backbone of the TMEF SHM instance.

## Status — v1.0.0-rc2 (2026-04)

- **PyPI:** `pip install op3-framework`
- **Tests:** 140 passing
- **V&V:** 39 validation benchmarks (92% of planned)
- **Figures:** 34 reproducible figures
- **License:** MIT
- **Repo:** [github.com/ksk5429/numerical_model](https://github.com/ksk5429/numerical_model)

## What it does

- Coupled OptumGX ↔ OpenFAST aero-hydro-servo-elastic analysis for scour-affected turbines.
- Monte Carlo propagation of soil uncertainty through 3D limit analysis.
- Physics-informed encoder (RQ1 prototype) mapping foundation response to a shared latent.
- Value-of-Information evaluation on the fused posterior (RQ3 unimodal prototype).
- 1D BNWF reduction of full 3D analyses for real-time field use.

## Why it matters

The Op³ pipeline is the thing that makes TMEF concretely testable on a real foundation.
Paper A (drafted 2026-04-15) uses Op³ end-to-end: 1,794 MC runs → encoder → VoI ranking.

## Related

- [PhD dissertation](/research/phd-dissertation/) — uses Op³ for Ch 4–8.
- [RQ1](/research/rq1-representation/), [RQ3](/research/rq3-cross-modal-voi/).
