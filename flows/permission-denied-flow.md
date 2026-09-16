# Permission denied flow

`Attempt access -> Explain restriction without leaking sensitive data -> Show permitted alternative -> Offer request or escalation path when applicable`

## User and goal

- User: any authenticated user attempting an unavailable screen, object, field, or action.
- Goal: understand that access is restricted and continue safely within permitted scope.

## Entry point

An access check denies a route, drill-down, sensitive field, export, or state-changing action.

## Steps

1. Show a neutral restriction message and the denied object/action category.
2. Do not reveal the existence, values, identity, or sensitivity of unauthorized records.
3. Offer the permitted aggregate, parent screen, or alternative workflow.
4. Offer an access request or escalation path when policy allows.
5. Return the user to the prior authorized context.

## Decision and error branches

- Distinguish denied access from missing data without exposing protected details.
- If the session expired, route through session renewal without discarding safe unsaved context.
- If authorization service fails, fail closed and provide a retry/support path.
- Requests outside the user’s authority remain pending for an authorized reviewer.

## Permission and LGPD checks

- Apply deny-by-default tenant, organization, hierarchy, role, sensitivity, purpose, legal-basis, consent, and retention checks.
- Mask restricted data in message text, exports, charts, and accessibility labels.
- Do not use error wording that enables tenant or person enumeration.

## Endpoint

The user reaches an authorized alternative, submits a governed request, or receives a recoverable support path; no protected data is displayed.

## Audit events

Access attempted, denied, alternative shown, request submitted, escalation routed, and authorization service failure.

## Validation criteria

- Denied users cannot infer protected values or records.
- The message is understandable and gives a useful next step.
- Denials are auditable without storing unnecessary sensitive content.
