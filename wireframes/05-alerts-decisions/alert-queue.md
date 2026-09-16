# WF-05B — Alert queue

## Layout

```text
Header: Alerts · scope · period · freshness
Filters: status · severity · area · owner · SLA

Table
├── Severity
├── Alert
├── Affected object
├── Owner
├── Age / SLA
├── Value at risk
└── Status / next action
```

## Queue behavior

- Default sort: highest severity, then nearest SLA breach.
- Preserve filters in the URL.
- Never hide an unresolved critical alert because a source is stale; mark the data condition.
- Every open, assignment, decision, and status change is auditable.
