# WF-01M — Executive Cockpit / default mobile

Status: provisional wireframe specification

## User and context

- Role: Executive or Sponsor.
- Scope: organization aggregate, selected period, and authorized drill-down only.
- Entry: `/executive`.
- Viewport intent: narrow mobile viewport, portrait first; the same information remains available in landscape without horizontal scrolling.

## Responsive hierarchy

```text
Header: menu · organization · notifications · profile
Scope: period · freshness
Main
├── Page title + review count
├── KPI cards: horizontal scroll, one card visible at a time
├── Priority decisions: stacked alert rows
├── Selected insight: explanation summary + source/limitations
├── Human decision: collapsed until an alert is selected
└── Value snapshot: estimated and validated shown as separate measures
```

- Collapse the sidebar into a labelled menu control. Do not remove the current role or authorized scope from the accessible name.
- Keep organization and period as separate controls. A changed scope refreshes all cards and records the selected scope in the audit trail.
- Keep the data-freshness status visible above the first KPI. Stale or partial data is a condition on the affected measure, not a reason to hide a critical alert.
- KPI cards use a horizontal, keyboard- and touch-accessible list. Each card shows KPI ID, value, unit, period, delta, target/status, source, and last update on activation or expansion.
- Stack priority decisions as full-width rows. Each row exposes severity, title, impact, review status, owner, and an `Open driver` action. Do not rely on color alone.
- Open the explanation and decision content in the same view below the selected row or in a full-screen sheet. Preserve a back control and the selected alert title.
- Place estimated, influenced, validated, and realized value in distinct labelled rows. Do not combine them into a single total or imply causation.

## Interaction and guardrails

- Selecting a KPI opens its authorized KPI detail view; restricted drill-down shows the permission-denied state without exposing hidden person-level data.
- Selecting a priority row updates the explanation context and shows source, rule, period, confidence, limitations, and human context status before any decision action.
- `Approve decision` requires an explicit reason or context according to the decision specification, identifies the human actor, and creates an audit event.
- The prototype may display synthetic values only. Any real employee, health, demographic, payroll, client, supplier, or financial record is out of scope.
- Screen copy must preserve provisional or illustrative labels for unvalidated metrics and value estimates.

## Required mobile states

Loading skeleton, no authorized aggregate, empty queue, partial data, stale source, integration error, restricted drill-down, sensitive data hidden, action pending/success, audit history, and session expired.

## Verification notes

- Check 320 px, 390 px, and 768 px widths for no horizontal overflow and readable controls.
- Verify alert selection changes the explanation, decision submission identifies human review, and estimated versus validated values remain visually distinct.
- Verify keyboard focus order follows scope → KPIs → priority decisions → explanation → human decision → value snapshot.

## Traceability

`SCR-01`, `BL-013`, `MOD-01`, `MOD-02`, `MOD-04`, `MOD-08`, `GOV-03`, `GOV-06`.
