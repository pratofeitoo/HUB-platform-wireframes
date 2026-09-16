# Core MVP value loop

```text
Executive Cockpit
    |-> open KPI or risk
KPI / Driver Detail
    |-> inspect associated signals
Manager Dashboard
    |-> open alert
Alert Detail
    |-> why am I seeing this?
Explainability Panel
    |-> human context and decision
Decision Record
    |-> create follow-up
Action Plan
    |-> outcome and evidence
HUB ROI
    |-> Finance review
Validated Value
```

## User and goal

- Users: Executive/Sponsor begins the review; Manager or HUB Manager provides context and action; Finance validates value.
- Goal: turn an authorized signal into a human-owned action and an evidence-backed value outcome.

## Entry point

The user signs in and opens the role-appropriate cockpit, dashboard, or alert notification within an authorized tenant and period.

## Steps

1. Review aggregate KPI or risk signal.
2. Open KPI or driver detail and inspect associated signals.
3. Open the authorized Manager Dashboard and select an alert.
4. Read explanation, source, rule, period, confidence, limitations, and human context.
5. Record a human decision with reason/context.
6. Create, assign, and track a linked action.
7. Submit outcome and evidence to HUB ROI.
8. Finance reviews premises and validates or rejects value.

## Decision and error branches

- No authorized aggregate or drill-down: show permitted alternative without leakage.
- Stale, partial, or failed data: preserve the signal, mark the condition, and block only the affected action when required.
- Decision may be accepted, modified, deferred, or rejected; no autonomous consequential people decision is allowed.
- Finance may request correction or keep value estimated/influenced instead of validating it.

## Permission and LGPD checks

- Apply tenant, hierarchy, role, sensitivity, purpose, legal-basis, consent, and retention checks at each screen transition.
- Use aggregate or masked views for sensitive people data.
- Audit exports and restricted reads as well as state-changing actions.

## Endpoint

The loop ends in `Validated Value` only after Finance evidence review; otherwise it ends in a visible pending, corrected, rejected, influenced, or estimated state.

## Audit events

Sign-in/access decision, KPI viewed, driver opened, alert viewed, context added, decision recorded, action created/assigned, outcome submitted, evidence attached, and Finance validation decision.

## Validation criteria

- Alert, decision, action, evidence, and value remain linked by stable identifiers.
- Human actor and reason are visible at decision points.
- Estimated, influenced, validated, and realized value cannot be confused.
- Source freshness and limitations remain visible throughout the journey.

## Completion criteria

- The same alert, decision, action, and value record remains linked.
- Human actor and reason are always visible.
- Source freshness and limitations are visible at each relevant step.
- Estimated value cannot be mistaken for validated value.
- All state changes create audit events.
