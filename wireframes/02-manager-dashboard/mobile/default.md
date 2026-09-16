# WF-02M — Manager Dashboard / default mobile

Status: provisional wireframe specification

## User and context

- Role: Manager.
- Scope: current manager hierarchy, selected period, and optional project within authorized access.
- Entry: `/manager`.
- Viewport intent: narrow mobile viewport, portrait first; all primary actions remain reachable without horizontal scrolling.

## Responsive hierarchy

```text
Header: menu · team scope · notifications · profile
Scope bar: period · project · freshness
Main
├── Team summary: goal attainment · capacity · utilization · open actions
├── Alerts requiring attention: stacked cards
├── Goal/performance trend: compact chart with text summary
├── Capacity: person/project list with authorized detail
├── Action plans: owner · due date · SLA
└── Recent context requests / check-ins
```

- Keep team, period, and project scope as explicit controls. Show the active hierarchy label and do not expose data outside it.
- Render summary metrics as a two-column grid at 390 px and a single-column stack below 360 px. Each metric includes definition, period, source, freshness, and status on expansion.
- Replace the desktop alert table with stacked cards showing severity, alert title, affected object, owner, age/SLA, status, and `Open alert`. Preserve the default sort: highest severity, then nearest SLA breach.
- Present trend and capacity as separate sections. A chart must have a text equivalent and must not imply that score movement proves cause.
- Use a compact action-plan list with owner, due date, progress, and SLA state. Keep create/revise/assign actions behind explicit controls.
- Put context requests near the alert or action they inform. A manager can add context before creating a recommendation or action.

## Interaction and guardrails

- Selecting an alert opens the governed alert detail, with links to explanation, decision, action, escalation, suppression, and close.
- Add-context and create-action forms open as full-screen sheets on mobile, retain the alert/team context, and require owner and due date where applicable.
- Person-level fields are limited to the authorized hierarchy and masked when restricted. Sensitive data remains hidden in screen text, charts, exports, and accessibility labels.
- Assignment, decision, escalation, suppression, close, and action changes identify the human actor and create an audit event.
- The prototype uses synthetic organizations, users, KPIs, alerts, decisions, and ROI only. Metrics and recommendations remain provisional until validated.

## Required mobile states

No team data, stale allocation, partial data, integration error, restricted person data, action required, permission denied, sensitive data hidden, action pending/success, audit history, and session expired.

## Verification notes

- Check 320 px, 390 px, and 768 px widths for no horizontal overflow, readable alert cards, and reachable controls.
- Verify scope changes refresh team metrics, alert cards preserve severity/SLA ordering, and alert selection reaches the governed detail.
- Verify keyboard and screen-reader order follows scope → summary → alerts → trend → capacity → action plans → context requests.

## Traceability

`SCR-02`, `BL-012`, `MOD-02`, `GOV-03`, `GOV-05`, `GOV-08`.
