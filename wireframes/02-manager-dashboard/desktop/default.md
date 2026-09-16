# WF-02A — Manager Dashboard / default desktop

Status: provisional wireframe specification

## User and context

- Role: Manager.
- Scope: current manager hierarchy, selected period, optional project.
- Entry: `/manager`.

## Layout

```text
Header: Team · period · project · freshness

Main
├── Team summary: goal attainment · capacity · utilization · open actions
├── Alerts requiring attention
├── Goal and performance trend
├── Capacity by person/project
├── Action plans and SLA status
└── Recent check-ins / context requests
```

## Primary action

Select an alert to open `wireframes/05-alerts-decisions/alert-detail.md`.

## Guardrails

- Limit person-level data to the authorized hierarchy.
- Do not infer performance causes from score movement.
- Ask for context before creating a recommendation or action.

## Required states

No team data, stale allocation, restricted person data, integration error, action-required, and normal state.

## Traceability

`SCR-02`, `BL-012`, `MOD-02`, `GOV-03`, `GOV-05`, `GOV-08`.
