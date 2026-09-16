# MVP wireframe review

## Review sequence

1. Executive Cockpit: can the user identify what needs attention?
2. Manager Dashboard: can the user reach the relevant alert within the authorized scope?
3. Explainability: can the user understand the evidence and limitations?
4. Decision: is human ownership and reason explicit?
5. Action Plan: are owner, due date, and outcome defined?
6. ROI: can Finance distinguish estimate from validated value?

## Reviewers

Product, Data, RH/People Analytics, Finance, Security/LGPD, and pilot stakeholders.

## Status

Open — first review not yet conducted.

## Documentation pass — 2026-09-16

- Added provisional mobile specifications for `SCR-01`, `SCR-02`, `SCR-05`, and `SCR-06`.
- The specifications preserve authorized scope, source freshness, synthetic-data boundaries, LGPD masking, human decision ownership, contestation/correction paths, and the distinction between estimated, influenced, validated, and realized value.
- Browser verification of these documentation requirements remains pending until the corresponding prototype routes and states are implemented.

## Prototype smoke evidence — 2026-09-16

- Desktop check at 1440 px: `SCR-01` rendered with the Executive Cockpit heading, 3 priority rows, and `scrollWidth === clientWidth` (1425 px content width).
- Mobile check at 390 px: `SCR-01` rendered with 5 KPI cards, 3 priority rows, and `scrollWidth === clientWidth` (375 px content width).
- Interaction check: selecting `Margem em risco — Consulting` updated the selected row and explanation context; submitting synthetic review context produced `Decision recorded and audit event created.`
- This is smoke evidence for the existing exploratory prototype only. It does not validate the new mobile documentation as implemented behavior, nor does it constitute Product, Data, RH, Finance, Security/LGPD, or pilot approval.
