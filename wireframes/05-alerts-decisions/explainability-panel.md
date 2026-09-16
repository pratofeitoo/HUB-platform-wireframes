# WF-05A — Explainability panel

Status: required interaction pattern

## Purpose

Answer “Why am I seeing this?” before the user accepts, rejects, or acts on an alert or recommendation.

## Panel sections

1. **Signal** — what changed and for whom/what.
2. **Rule** — rule ID, condition, window, threshold, and version.
3. **Evidence** — source fields, values, period, and freshness.
4. **Interpretation** — associated signals and confidence.
5. **Limitations** — missing data, uncertainty, and non-causal warning.
6. **Response** — add context, contest, decide, or defer.

## Accessibility and trust

The panel must be keyboard accessible, readable without color, and available before the primary action.

## Traceability

`GOV-05`, `GOV-06`, `GOV-08`, `ALT-01..08`.
