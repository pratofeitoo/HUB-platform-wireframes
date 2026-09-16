# KPI approval flow

`Draft KPI -> Validate required fields -> Submit -> RH/Product review -> Finance review when financial -> Approve or reject -> Version and publish`

## User and goal

- User: KPI owner, RH/Product reviewer, Finance reviewer when financially linked, or Admin.
- Goal: publish a clear, versioned, lineage-linked KPI with an accountable approval decision.

## Entry point

An authorized owner opens the KPI Governance view and creates or edits a draft KPI.

## Steps

1. Enter definition, formula, unit, granularity, cadence, source, owner, target, alert threshold, and financial linkage.
2. Validate required fields and lineage references.
3. Submit the draft for review.
4. RH/Product reviews meaning, sensitivity, and usefulness.
5. Finance reviews financially linked formulas, targets, and value semantics.
6. Approve or reject with reason; approved definitions receive a version and publish status.

## Decision and error branches

- Missing required fields block submission and identify the field without losing the draft.
- Rejection returns the KPI to draft with reviewer reason and history.
- A formula or threshold change creates a new version; it must not silently rewrite historical results.
- Conflicting source or lineage keeps the KPI pending reconciliation.

## Permission and LGPD checks

- Only authorized owners and reviewers can edit or approve KPI definitions.
- Sensitive dimensions require policy, purpose, legal basis, consent, aggregate access, and fairness review.
- Approval and publication are tenant-scoped and auditable.

## Endpoint

The KPI is versioned and published for authorized use, or remains a draft/rejected/pending-review version with no silent production effect.

## Audit events

Draft created, field changed, validation failed, submitted, RH/Product reviewed, Finance reviewed, approved/rejected, versioned, and published.

## Validation criteria

- Another reviewer can reproduce the KPI from definition, formula, source, and version.
- Financially linked KPIs have Finance review.
- Historical values retain the definition version used at calculation time.
