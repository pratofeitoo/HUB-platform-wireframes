# WF-06M — HUB ROI / mobile

Status: provisional wireframe specification

## User and context

- Roles: Sponsor or Finance, limited by tenant and financial authorization.
- Scope: selected organization, period, initiative, and evidence set.
- Entry: `/roi`.
- Viewport intent: mobile review and validation flow; financial comparisons remain readable without horizontal scrolling.

## Responsive hierarchy

```text
Header: menu · HUB ROI · scope · profile
Freshness banner: last update · source condition
Outcome summary: adoption · action over alerts · time to decision
Value measures: estimated · influenced · validated · realized
Cost and return: platform cost · payback · ROI
Evidence and assumptions: expandable rows
Finance validation: status · owner · evidence action
Audit history
```

- Show scope and period before all values. A change in scope refreshes measures and records the selected context.
- Use stacked measure rows or cards, each with amount, state, evidence status, owner, period, source, and last update.
- Keep estimated, influenced, validated, and realized values in separate sections with explicit labels and distinct visual treatments. Never add them into one proven-return number.
- Make chart comparisons secondary to the labelled values and provide a text summary. Values marked illustrative or provisional stay labelled until Finance validates them.
- Put assumptions and premises in an expandable section. Evidence attachment and validation actions are visible only to authorized Finance users.
- Show platform cost separately from benefits and state the calculation/model version used for ROI and payback.

## Finance validation interaction

- `Review premises` opens the model assumptions and source lineage.
- `Attach evidence` accepts a documented evidence reference; it does not turn an estimate into validated value.
- `Submit for Finance validation` creates a pending review with human owner and audit event.
- Finance may validate, request correction, or reject with a reason. Validated and realized statuses require the relevant evidence and remain distinct.

## Required mobile states

Loading, no authorized financial scope, partial data, stale source, integration error, permission denied, sensitive data hidden, action pending/success, audit history, session expired, and estimated/influenced/validated/realized lifecycle states.

## Verification notes

- Check 320 px and 390 px widths for amount wrapping, table-to-stack conversion, and no horizontal overflow.
- Verify scope and source freshness remain visible, estimates cannot appear as validated, and Finance-only actions are unavailable to unauthorized roles.
- Verify validation, correction, and rejection capture a human actor, reason, evidence reference, and audit history.

## Traceability

`SCR-06`, `BL-014`, `BL-015`, `MOD-08`, `GOV-09`, `FLD-022`, `FLD-023`.
