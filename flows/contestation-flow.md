# Contestation flow

`View data/recommendation -> Ask why -> Submit correction or contestation -> Case assigned -> Evidence reviewed -> Response recorded -> Person notified`

## User and goal

- User: affected employee or authorized data subject; reviewer: designated RH, Data, Operations, or DPO role.
- Goal: understand, correct, or contest governed data or a recommendation without retaliation or hidden state changes.

## Entry point

The person opens an authorized data, score, or recommendation view and selects `Ask why`, `Correct`, or `Contest`.

## Steps

1. Show the relevant source, period, rule or calculation, limitations, and visible data state.
2. Capture the correction or contestation request and optional supporting evidence.
3. Assign the case to an authorized reviewer with an SLA.
4. Review source lineage, evidence, consent/purpose, and the affected record.
5. Record the response, correction, or reason for rejection.
6. Notify the person and preserve the case history.

## Decision and error branches

- If evidence is incomplete, request clarification without closing the case.
- If a source is stale or unavailable, mark the limitation and pause the decision where appropriate.
- If the request is outside the reviewer scope, route it without exposing restricted data.
- A rejected request must include a human reason and a further escalation path when applicable.

## Permission and LGPD checks

- The person can access their own permitted record; reviewers see only the minimum authorized scope.
- Protect sensitive fields with purpose, legal basis, consent, retention, and revocation checks.
- Do not disclose another person’s data while explaining a recommendation or comparison.

## Endpoint

The person receives a recorded response and the record is corrected, retained with a documented decision, or escalated for further review.

## Audit events

Request opened, evidence submitted, case assigned, source viewed, reviewer action, correction applied, response recorded, notification sent, and escalation.

## Validation criteria

- A user can understand why the data or recommendation appeared before contesting it.
- Corrections and responses preserve before/after lineage and human ownership.
- No unauthorized or sensitive data is revealed during the case.
