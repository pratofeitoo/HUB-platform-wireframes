# WF-01A — Executive Cockpit / default desktop

Status: provisional wireframe specification

## User and context

- Role: Executive or Sponsor.
- Scope: organization aggregate, selected period, authorized drill-down.
- Entry: `/executive`.

## Layout

```text
Global header: organization · period · freshness · notifications · profile
Sidebar: Overview · Performance · Business · Intelligence · Impact

Main
├── Page title + scope summary
├── KPI row: Revenue · Margin · People signal · Client risk · HUB ROI
├── Priority decisions panel
├── Trend panel: revenue/margin/performance over time
├── Risk and driver panel
└── Recent validated value / evidence panel
```

## Interaction

- Selecting a KPI opens `kpi-detail.md`.
- Selecting a risk opens `driver-analysis.md` or the authorized alert detail.
- Selecting Simulate opens the scenario simulator.
- Selecting Approve requires an explicit decision reason and creates an audit event.

## Data contract

Show KPI ID, definition, value, unit, target, period, source, last update, and status. Display estimated and validated value separately.

## Required states

Loading, no authorized aggregate, stale source, partial data, integration error, restricted drill-down, and normal state.

## Traceability

`SCR-01`, `BL-013`, `MOD-01`, `MOD-02`, `MOD-04`, `MOD-08`, `GOV-03`, `GOV-06`.
