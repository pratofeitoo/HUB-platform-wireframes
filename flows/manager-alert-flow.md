# Manager alert flow

`Manager Dashboard -> Alert detail -> Explainability -> Add context -> Create action -> Assign owner -> Track SLA -> Close or escalate`

## User and goal

- User: Manager within the authorized hierarchy.
- Goal: understand a team-scoped alert, add context, and coordinate a human-owned action.

## Entry point

The manager opens `/manager` and selects an alert requiring attention.

## Steps

1. Confirm team, period, project, freshness, and authorized person/project scope.
2. Open alert detail and review severity, affected object, trigger rule, period, SLA, and source.
3. Open explainability and inspect confidence, limitations, related signals, and contestation path.
4. Add human context before deciding whether action is appropriate.
5. Create an action, assign an owner and due date, and track SLA.
6. Close or escalate after reviewing outcome and evidence.

## Decision and error branches

- Ask for more context or analysis when the signal is ambiguous; do not infer cause from score movement.
- Escalate when outside the manager’s authority or when SLA risk is high.
- Keep the alert open when data is stale, partial, or integration-failed; show the condition.
- Permission-denied and sensitive-data-hidden states offer only authorized alternatives.

## Permission and LGPD checks

- Limit person-level data to the manager’s current tenant and hierarchy.
- Mask sensitive fields and do not expose them through charts, exports, or accessibility labels.
- Require authorized role, purpose, legal basis, consent, and retention behavior for sensitive inputs.

## Endpoint

The alert has a recorded human decision and a linked action with owner, due date, and tracked outcome, or is explicitly escalated, deferred, suppressed, or closed.

## Audit events

Alert viewed, context added, decision recorded, action created, owner assigned, escalation made, and alert closed.

## Validation criteria

- The manager can reach the relevant alert without crossing hierarchy boundaries.
- Explanation is available before action and does not claim causation.
- Every action is linked to the alert and decision and remains auditable.
