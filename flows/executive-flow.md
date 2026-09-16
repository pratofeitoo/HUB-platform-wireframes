# Executive flow

`Login -> Executive Cockpit -> KPI/risk detail -> Driver analysis -> Scenario simulation -> Approve decision -> ROI evidence`

## User and goal

- User: Executive or Sponsor.
- Goal: prioritize authorized business risks and approve human-owned follow-up without mistaking correlation for causation.

## Entry point

The executive signs in and opens `/executive` for an authorized organization and period.

## Steps

1. Confirm organization, period, freshness, and aggregate scope.
2. Review revenue, margin, people, client-risk, priority decisions, and HUB ROI signals.
3. Open KPI/risk detail and driver analysis.
4. Review scenario premises and limitations if simulation is available.
5. Approve, defer, request analysis, or reject a human-owned decision with reason.
6. Inspect linked action and ROI evidence.

## Decision and error branches

- Restricted drill-down shows an access explanation and permitted aggregate alternative.
- Stale, partial, or unavailable data is labelled and does not become a hidden zero.
- A scenario is illustrative until its premises and outputs are validated.
- Approval records executive intent but does not execute an autonomous people decision.

## Permission and LGPD checks

- Default to aggregates; authorize drill-down by tenant, organization, hierarchy, role, and sensitivity.
- Mask restricted people data in views, exports, and assistive text.
- Audit sensitive reads, exports, simulations, and approvals.

## Endpoint

The executive has a recorded human decision with linked next step and evidence, or a visible request/defer/reject state.

## Audit events

Login/access decision, scope changed, KPI/risk viewed, driver opened, simulation run, decision recorded, evidence viewed/exported, and action followed.

## Validation criteria

- The user can identify what needs attention and why.
- Source, freshness, confidence, limitations, and scope are visible.
- The decision reason and human owner are explicit.

## Success condition

The executive can understand the signal, inspect authorized evidence, and approve a human-owned action without mistaking correlation for causation.
