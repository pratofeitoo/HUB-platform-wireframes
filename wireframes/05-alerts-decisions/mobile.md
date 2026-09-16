# WF-05M — Alerts and Decisions Center / mobile

Status: provisional wireframe specification

## User and context

- Roles: HUB Manager or Manager, limited by tenant, hierarchy, and assigned permissions.
- Scope: selected organization/team, period, and authorized alert set.
- Entry: `/alerts`.
- Viewport intent: mobile queue and review flow with no horizontal table scrolling.

## Responsive hierarchy

```text
Header: menu · Alerts and Decisions · notifications · profile
Scope: organization/team · period · freshness
Filters: status · severity · area · owner · SLA
Queue: stacked alert cards, sorted by severity then SLA breach
Review sheet/page
├── Alert identity · status · SLA · owner
├── Affected object within authorized scope
├── Trigger rule · period · source freshness
├── Explanation: source · confidence · limitations · contestation
├── Human decision and context
└── Action, escalation, suppression, or close
```

- Filters open in a modal sheet with selected filter count and an explicit apply/clear action. Preserve filters in the URL.
- Each card shows severity and status as text, alert ID/title, affected object, owner, age/SLA, value at risk, and next action. Never communicate severity by color alone.
- Selecting a card opens a full-screen review surface with a persistent alert title and back control. Do not lose queue position or filter state.
- Show stale or partial source conditions directly beside the affected evidence. Never hide an unresolved critical alert because data is stale.
- Keep the decision form separate from the explanation. The reviewer must see source, rule, period, confidence, limitations, and contestation before recording a decision.

## Lifecycle and actions

The mobile surface supports `unassigned`, `in progress`, `escalated`, `suppressed`, `awaiting Finance validation`, and `closed`. Status changes require an explicit human action, actor, reason where applicable, and audit event. Suppression and close must remain reversible or provide the documented recovery path.

- `Assume` assigns the alert to the current human reviewer and records the timestamp.
- `Add context` accepts optional notes without treating them as verified evidence.
- `Record decision` requires the decision reason and preserves contestation/correction access.
- `Create action` requires an owner and due date; the action remains linked to the alert and decision.
- `Escalate`, `Suppress`, and `Close` require confirmation and a reason. Finance validation is a separate state and is never implied by manager approval.

## Required mobile states

Loading, empty queue, partial data, stale data, integration error, permission denied, sensitive data hidden, session expired, action pending/success, audit history, and every lifecycle state above.

## Verification notes

- Check 320 px and 390 px widths for card wrapping, filter-sheet reachability, and no horizontal overflow.
- Verify selecting an alert updates the explanation, all lifecycle transitions remain auditable, and restricted affected objects stay masked.
- Verify decision and action submission expose human ownership and preserve the contestation path.

## Traceability

`SCR-05`, `ALT-01..08`, `BL-010`, `BL-011`, `GOV-05`, `GOV-06`, `GOV-09`.
