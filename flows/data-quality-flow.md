# Data quality flow

`Data Diagnostics -> Source/job detail -> Review freshness or rejection -> Reprocess or export rejection -> Verify quality -> Inspect KPI lineage`

## User and goal

- User: Data/Admin or authorized HUB Manager.
- Goal: diagnose source reliability and restore trustworthy data without silently changing or hiding downstream signals.

## Entry point

The authorized operator opens `/data/diagnostics` from a freshness alert, failed job, rejection report, or KPI lineage review.

## Steps

1. Review job/source status, last update, freshness SLA, record counts, and rejection count.
2. Open source or job detail and inspect the affected domain and lineage.
3. Reprocess a safe job or export rejection details for controlled remediation.
4. Verify reconciliation, freshness, and downstream KPI impact.
5. Inspect the KPI lineage and communicate the resulting data state.

## Decision and error branches

- If reprocessing is unsafe or fails, preserve the original error, show retry/DLQ state, and escalate.
- If data is partial or stale, mark affected KPIs and alerts instead of presenting them as current.
- If lineage is missing, block approval or validation that depends on it.
- Permission-denied access shows only the permitted diagnostic alternative.

## Permission and LGPD checks

- Restrict source records by tenant, role, and data domain; prefer counts and masked identifiers.
- Do not export sensitive fields without the required authorization, purpose, legal basis, consent, and retention controls.
- Keep diagnostic access and reprocessing actions auditable.

## Endpoint

The source is verified as healthy, remains visibly degraded with an owner and next action, or is escalated with preserved evidence.

## Audit events

Diagnostics viewed, source/job opened, rejection exported, reprocess requested, retry completed/failed, reconciliation completed, lineage viewed, and escalation.

## Validation criteria

- Errors and stale states are visible and actionable.
- Reprocessing is idempotent and does not silently duplicate records.
- A reviewer can trace an affected KPI to source, transformation, and current data condition.
