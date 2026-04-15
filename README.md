# Kyeong Sun Kim — Research Profile

Academic website for **Kyeong Sun Kim (김경선)**, PhD candidate in Civil & Environmental Engineering at **Seoul National University** (advisor: Prof. Sung-Ryul Kim; defense September 2026).

**Live site:** [ksk5429.github.io/research](https://ksk5429.github.io/research/)

---

## Research program

**TMEF — Trust-weighted Multi-modal Evidence Fusion for Engineering Decisions.**

> *How does heterogeneous evidence become trustworthy decisions?*

Safety-critical engineering decisions draw on evidence that arrives in wildly different forms: continuous sensor streams, discrete lab results, expensive engineering simulations, expert judgment, AI-agent recommendations. Each source has its own reliability, cost, and failure mode. TMEF formalises this across four research questions:

1. **Unified representation of heterogeneous evidence** — embed physically different signal types into a shared latent space without collapsing modality-specific structure.
2. **Trust-weighted fusion with source-aware credibility** — Bayesian posterior with learnable, dynamic trust hyperparameters; handle disagreement, failure modes, consequence-dependence.
3. **Value-of-Information across cost-heterogeneous modalities** — design the optimal next measurement when modalities differ in cost, time-to-result, and information gain per unit cost.
4. **Trust calibration for AI-mediated composite metrics** — attribution, credit, and accountability for multi-modal AI decisions; when does the human know which parts of the input to trust?

My PhD dissertation is the structural health monitoring instance of this framework, validated on **22 centrifuge tests** at the KAIST 70g facility, **1,794 Monte Carlo simulations**, and **32 months of field monitoring** on a 4.2 MW offshore wind turbine in Gunsan, South Korea.

Full program details: see the [research page](https://ksk5429.github.io/research/research/) on the live site.

---

## Featured work

* **[Op³](https://github.com/ksk5429/numerical_model)** — open-source Python framework for scour assessment of offshore wind turbine foundations. `pip install op3-framework` · 140 tests · 39 V&V benchmarks · [Zenodo DOI](https://doi.org/10.5281/zenodo.19476542).
* **[K-Fish](https://github.com/ksk5429/quant)** — 9-agent LLM swarm with Bayesian confidence-weighted fusion and a Calibrator agent that audits its own reasoning. Brier 0.213 on 30 resolved Polymarket contracts.
* **PhD dissertation** — *Integrated Numerical and Digital Twin Framework for Scour Assessment of Offshore Wind Turbine with Tripod Suction Bucket Foundations.*

---

## About this repository

This repository hosts the source for [ksk5429.github.io/research](https://ksk5429.github.io/research/), built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme (MIT).

* Content lives in `_pages/`, `_projects/`, `_news/`, `_bibliography/papers.bib`, and `_data/cv.yml`.
* Theme and layout files (`_layouts/`, `_sass/`, `_includes/`, `assets/`) are al-folio upstream, modified minimally.
* GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

### Local preview

```bash
bundle install
bundle exec jekyll serve
```

Requires Ruby ≥ 3.0 and Bundler. Then open `http://localhost:4000/research/`.

---

## Contact

* Email: kyeongsunkim@snu.ac.kr
* GitHub: [@ksk5429](https://github.com/ksk5429)
* ResearchGate: [Kyeong-Sun-Kim-2](https://www.researchgate.net/profile/Kyeong-Sun-Kim-2)

---

## License

Site source: MIT License (inherited from [al-folio](https://github.com/alshedivat/al-folio)).
Content (text, figures, publications): © 2026 Kyeong Sun Kim — all rights reserved unless otherwise noted.
