# Recommendation lifecycle

`Generated -> Explained -> Human reviewed -> Accepted, modified, or rejected -> Action tracked -> Outcome measured`

## User and goal

- User: authorized Manager, Executive, RH, or HUB Manager reviewing a recommendation.
- Goal: understand a recommendation, apply human judgment, and measure an outcome without automating consequential people decisions.

## Entry point

A versioned rule, model, or governed workflow generates a recommendation in an authorized screen or alert queue.

## Steps

1. Open the recommendation and inspect source, rule/model version, period, confidence, limitations, and affected scope.
2. Add human context or request more analysis.
3. Accept, modify, defer, or reject the recommendation with a reason.
4. Create and track any linked action with owner and due date.
5. Record outcome and evidence for follow-up measurement.

## Decision and error branches

- Low confidence, stale, partial, or unavailable inputs require visible limitation handling.
- A reviewer can reject or modify the recommendation; the original output remains in history.
- Recommendations never autonomously decide hiring, promotion, dismissal, punishment, or another consequential people outcome.
- Contestation or correction routes to the affected person’s governed flow.

## Permission and LGPD checks

- Enforce tenant, hierarchy, role, sensitivity, purpose, legal basis, consent, and retention controls.
- Use aggregate or masked inputs and outputs where individual data is not authorized.
- Include fairness, disparity, drift, and bias review where the recommendation affects people.

## Endpoint

The recommendation is accepted, modified, deferred, or rejected by a named human, with a linked action and measured outcome or an explicit reason for no action.

## Audit events

Recommendation generated, viewed, explained, context added, reviewed, accepted/modified/deferred/rejected, action created, outcome recorded, and contestation linked.

## Validation criteria

- The reviewer can explain the recommendation’s evidence and limitations.
- The human decision is distinguishable from the system suggestion.
- Outcome measurement does not retroactively convert association into causal proof.
