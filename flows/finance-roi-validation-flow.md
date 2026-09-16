# Finance ROI validation flow

`HUB ROI -> Benefit detail -> Review assumptions -> Attach evidence -> Validate realized value -> Approve financial result`

## User and goal

- User: Finance reviewer; supporting roles: Sponsor and HUB Manager.
- Goal: determine whether a proposed financial value is supported by evidence and can progress through the governed value states.

## Entry point

Finance opens `/impact/roi` for an authorized tenant, period, initiative, and evidence set.

## Steps

1. Review adoption, actions over alerts, time to decision, cost, payback, and value-state summary.
2. Open benefit detail and review assumptions, model/rule version, baseline, attribution, and source lineage.
3. Attach or inspect evidence references.
4. Validate, request correction, or reject the value with a reason.
5. Approve the financial result only when the required evidence and reconciliation are complete.

## Decision and error branches

- No baseline or incomplete evidence keeps value `Potential`, `Influenced`, or `Estimated`.
- Duplicate or conflicting attribution is held for reconciliation; do not double count.
- Stale or failed finance sources keep the result pending and visible.
- A rejected result returns to correction with the original decision and audit history intact.

## Permission and LGPD checks

- Restrict financial detail, evidence, and exports by tenant, role, and finance authorization.
- Avoid exposing individual people data in benefit calculations; use aggregates or masked identifiers.
- Apply purpose, legal basis, consent, retention, and audit controls where people-related inputs are involved.

## Endpoint

The value is explicitly marked `Validated` or `Realized` with Finance evidence and approval, or remains visibly estimated/influenced/pending/rejected.

## Audit events

ROI viewed, benefit opened, assumptions viewed/changed, evidence attached, validation requested, correction requested, value validated/rejected, and financial result approved.

## Validation criteria

- Estimated and validated value remain visually and semantically separate.
- The ledger prevents double counting by beneficiary, lever, period, and intervention.
- Finance can reproduce the result from source, premises, evidence, and actor history.
