---
title: HUB MVP — Product Requirements Document
status: active-provisional
version: 0.1
last_updated: 2026-09-16
owner: Product, to be confirmed
canonical_source: Obsidian vault technical plan and workbook
---

# HUB MVP — Product Requirements Document

This is a provisional, living PRD for the HUB MVP wireframe and prototype workspace. It describes what the product should enable and why; it does not replace the canonical technical plan, formal RBAC/ABAC decisions, KPI approvals, legal review, or production architecture.

The structure follows the linked Figma PRD guidance: product overview, purpose and value, features, personas and user stories, flows, release criteria, risks, non-functional requirements, assumptions/dependencies, and success measures. The linked guidance also emphasizes keeping a PRD concise, traceable, and revisable as the team learns.

## 1. Product overview

HUB is a role-aware platform that connects governed business and people signals to context, explanation, human decisions, actions, follow-up, and validated value.

```text
Signal → Context → Explanation → Human decision → Action → Follow-up → Validated value
```

The MVP is intended to help an organization see prioritized performance and business signals, understand the evidence and limitations, make accountable decisions, coordinate follow-up actions, and allow Finance to validate value without confusing estimates with realized results.

**Product state:** provisional design and prototype phase. The current implementation is an exploratory Executive Cockpit with synthetic data; the full MVP is not implemented or production-ready.

## 2. Problem and opportunity

Today, relevant information may be distributed across performance, PSA/timesheet, CRM, ERP, HRIS, KPI, alert, and audit sources. Users need a governed way to connect these signals without losing source lineage, authorization boundaries, human context, or financial validation.

The MVP should reduce the distance between:

- noticing a signal and understanding its evidence;
- understanding an alert and assigning human ownership;
- recording a decision and creating a linked action;
- taking action and validating whether value was influenced, validated, or realized.

The product must not turn a statistical association into a causal claim or make autonomous decisions about hiring, promotion, dismissal, punishment, or other consequential people outcomes.

## 3. Goals and non-goals

### Goals

- Provide an aggregated, role-appropriate view of business, people, client, and HUB Impact signals.
- Make source, rule, period, freshness, confidence, limitations, and authorized scope visible where a signal is interpreted.
- Convert governed alerts into human-owned decisions and linked actions with audit history.
- Support KPI definition, versioning, lineage, and approval as a governed foundation.
- Give Finance a controlled path to review evidence and distinguish estimated, influenced, validated, and realized value.
- Establish a traceable design and prototype foundation for pilot validation with Monks and cross-functional reviewers.

### Non-goals for this MVP

- Production integrations or live model decisions.
- Real employee, HR, health, demographic, payroll, client, supplier, or financial records in the prototype.
- Supplier Marketplace (`SCR-08`), academic, community, and other Phase 2 capabilities.
- Replacing formal legal, security, finance, HR, or governance approval.
- Treating illustrative KPI targets, alerts, or value amounts as approved requirements.

## 4. Users and personas

The following are role-based product personas, not personal records. Formal permissions remain pending RBAC/ABAC and LGPD validation.

| Persona | Need | MVP responsibility |
|---|---|---|
| Executive / Sponsor | Prioritize business risks and decisions using aggregates and authorized drill-down. | Review cockpit, inspect drivers, approve or defer decisions, review value. |
| Manager | Understand team goals, capacity, alerts, and actions within the authorized hierarchy. | Add context, decide, assign actions, track SLA, escalate or close. |
| Employee | Understand personal progress and development and correct or contest relevant information. | Review own journey, respond, update, and contest. |
| RH / People Analytics | Govern people-related indicators and policy boundaries. | Review KPI definitions, sensitivity, consent, fairness, and aggregate access. |
| Finance | Reconcile costs and validate value with evidence. | Review premises, attach evidence, validate, request correction, or reject. |
| HUB Manager | Operate signal quality, adoption, decisions, actions, and HUB value. | Configure governed workflows, monitor adoption, and coordinate review. |
| Data / Admin | Monitor source reliability, lineage, quality, and tenant-safe operation. | Diagnose jobs, freshness, rejections, lineage, and access conditions. |

## 5. User stories

- As an Executive, I want to see the most important authorized risks and decisions so that I can prioritize attention without exposing unnecessary person-level data.
- As a Manager, I want to open an alert, see its evidence and limitations, add context, and decide on a linked action so that the signal becomes accountable follow-up.
- As an Employee, I want to see my own progress and contest incorrect information so that the record can be corrected through a governed path.
- As RH or Finance, I want KPI definitions, formulas, owners, targets, versions, and lineage to be governed so that measures are not ambiguous.
- As Finance, I want to inspect premises and evidence before validating value so that estimated benefit is not presented as realized return.
- As Data/Admin, I want errors, stale sources, rejected records, and lineage to remain visible so that quality problems are not silent.

## 6. MVP feature requirements

| ID | Capability | Requirement | Priority / state |
|---|---|---|---|
| FR-01 | Global shell and access | Show tenant/organization, scope, period, freshness, role context, navigation, and permission outcomes. | Critical; provisional |
| FR-02 | Executive Cockpit (`SCR-01`) | Show revenue, margin, people signal, client risk, priority decisions, drivers, scenarios, and HUB ROI using aggregates and authorized drill-down. | Critical; prototype exists |
| FR-03 | Manager Dashboard (`SCR-02`) | Show team goals, capacity, utilization, alerts, trends, actions, ownership, and SLA within the manager hierarchy. | Critical; specified, partial prototype representation |
| FR-04 | My Journey (`SCR-03`) | Show an employee’s goals, check-ins, feedback, skills, development plan, and correction/contestation path. | High; specified, implementation pending |
| FR-05 | KPI Governance (`SCR-04`) | Create, propose, version, approve, and trace KPI definitions, formulas, owners, targets, alert thresholds, and lineage. | Critical; specified, implementation pending |
| FR-06 | Alerts and Decisions Center (`SCR-05`) | Queue governed alerts by severity/SLA; support assignment, explanation, context, decision, action, escalation, suppression, and close. | Critical; core interactions represented |
| FR-07 | Explainability | For each alert or score, show source data, rule, period, confidence, limitations, authorized scope, and contestation/correction affordance. | Critical; represented in prototype, validation pending |
| FR-08 | Decision and action | Require human actor and reason/context; link decisions to actions, owner, due date, status, evidence, and audit events. | Critical; prototype interaction exists |
| FR-09 | HUB ROI (`SCR-06`) | Show adoption, action-over-alerts, time to decision, cost, payback, and separate estimated, influenced, validated, and realized value. | Critical; value comparison represented |
| FR-10 | Data Diagnostics (`SCR-07`) | Show integration jobs, freshness, rejections, lineage, quality, and recoverable error states. | High; specified, implementation pending |
| FR-11 | Shared states | Support loading, empty, partial data, stale data, integration error, permission denied, sensitive data hidden, action pending/success, audit history, and session expired. | Critical; documentation and implementation pending |
| FR-12 | Audit and governance | Record material reads of restricted data, assignments, decisions, actions, status changes, evidence, and approvals with actor, object, timestamp, reason, and resulting status. | Critical; required, implementation pending |

## 7. Core experience and flows

The primary MVP journey is:

```text
Executive Cockpit
→ KPI / Driver Detail
→ Manager Dashboard
→ Alert Detail
→ Explainability
→ Human Decision
→ Action Plan
→ HUB ROI
→ Finance Validation
→ Validated Value
```

Required behavior:

- Selecting an alert updates the explanation context.
- Explanation appears before consequential action and includes limitations.
- Decisions identify the human actor and reason.
- Actions remain linked to the alert and decision.
- Status changes are auditable and recoverable where appropriate.
- Finance validation is separate from manager or sponsor decision-making.
- Contestation and correction remain available to the affected person where applicable.

## 8. Data, authority, and governance requirements

- The approved Obsidian vault technical plan and workbook are canonical. Workspace snapshots are derived and must not silently redefine them.
- Prototype and examples use synthetic organizations, users, KPIs, alerts, decisions, and ROI only.
- Every displayed KPI or value should expose its definition/ID, source, transformation or lineage, period, freshness, unit, status, and authorization context where relevant.
- Access is deny-by-default across tenant, organization, hierarchy, role, and sensitivity boundaries. Formal RBAC/ABAC validation is pending.
- Sensitive fields require a valid consent identifier, purpose, and LGPD legal basis where the canonical source requires them. Sensitive data is aggregate-only or masked according to policy; revocation and retention behavior require validation.
- Do not expose restricted data through charts, exports, screen text, or accessibility labels.
- Correlation, model output, or alert status is not proof of causation.
- The system surfaces signals and recommendations; humans own consequential decisions.
- ROI uses a single governed ledger with deduplication and the canonical progression `Potencial → Influenciado → Validado → Realizado`. No baseline means ROI remains zero or illustrative.

## 9. Success metrics and evaluation plan

These targets are provisional source-derived criteria and must be validated with Product, Data, RH, Finance, Security/LGPD, and pilot stakeholders before adoption.

| Metric | Provisional target / definition | Evidence |
|---|---|---|
| Active adoption | `KPI-HUB-01`: active users / eligible users; target 75%. | Telemetry and tenant-scoped review. |
| Alert-to-action conversion | `KPI-HUB-02`: alerts with action / valid alerts; target 65%. | Audit log and linked action records. |
| Time to decision | `KPI-HUB-03`: average decision date minus alert date; target 3 days, alert at 10 days. | Audit log. |
| Platform ROI | `KPI-HUB-04`: (validated benefits - HUB cost) / HUB cost; target 100%. | Finance reconciliation and evidence. |
| Data quality | Essential telemetry event quality at least 99.5%; source freshness and rejection SLAs visible. | Data Diagnostics and audit evidence. |
| Pilot signal quality | Pilot criteria such as 80% mapped revenue, 95% reconciled margin, and 85% goal-quality coverage are proposed, not approved. | Pilot scorecard and Finance/RH review. |
| User trust and comprehension | Reviewers can identify source, limitation, human owner, and value state in usability sessions. | Cross-functional usability review; no numeric target approved yet. |

Evaluation should combine product analytics, audit-log checks, reconciliation, usability review, fairness and drift review where applicable, and documented stakeholder feedback. Metrics are not evidence of causal impact by themselves.

## 10. Non-functional requirements

- **Security and privacy:** tenant isolation, deny-by-default authorization, least privilege, sensitive-field masking, consent/legal-basis controls, retention enforcement, and no sensitive data in synthetic fixtures.
- **Auditability:** essential events include actor, object, tenant, timestamp, action, reason, source/status, and resulting state; canonical audit envelope and retention remain subject to implementation validation.
- **Explainability:** displayed signals must carry evidence, rule, period, confidence, limitations, and model/rule version where applicable.
- **Reliability:** integration failure, stale data, partial data, rejected records, and retry/reconciliation conditions must be visible and recoverable; errors must never be silent.
- **Accessibility:** keyboard-reachable controls, readable status text, non-color-only communication, text alternatives for charts, and responsive layouts without horizontal overflow.
- **Performance:** scope changes and core queue interactions should provide clear loading and freshness feedback; production latency targets require engineering definition.
- **Localization:** current prototype language is mixed English/Portuguese; final language strategy is an open decision and must be confirmed before release.
- **Traceability:** each screen and release criterion maps to source requirements, wireframes, data contracts, validation evidence, and recorded decisions.

## 11. Scope, dependencies, and assumptions

### Dependencies

- Canonical KPI catalog and version/approval decisions.
- Tenant-safe integrations for HRIS, performance, PSA/timesheet, CRM, ERP/finance, telemetry, and audit sources.
- Formal RBAC/ABAC, consent, legal-basis, retention, hierarchy, and sensitive-data decisions.
- Finance definitions and evidence rules for validated and realized value.
- Pilot selection of three to five alerts, owners, thresholds, and SLAs.
- Cross-functional review with Product, Data, RH, Finance, Security/LGPD, and pilot stakeholders.

### Assumptions to validate

- Organization and hierarchy are sufficient boundaries for the first pilot.
- The selected KPIs and alert rules are useful and understandable to their intended reviewers.
- Authorized aggregate views can deliver value without exposing unnecessary individual data.
- Human review capacity exists for alerts, decisions, contestations, and Finance validation.
- The prototype remains a demonstration until stakeholders explicitly approve an implementation baseline.

## 12. Risks and mitigations

| Risk | Impact | Mitigation / release gate |
|---|---|---|
| Sensitive or cross-tenant data exposure | High | Deny-by-default tests, tenant isolation, masking, consent/legal-basis checks, and Security/LGPD approval. |
| Automated or biased people decisions | High | Human-in-the-loop decision capture, explainability, contestation, fairness review, and prohibition on autonomous consequential decisions. |
| Estimates presented as proven ROI | High | Separate value states, evidence requirements, Finance validation, and governed ledger deduplication. |
| Poor source quality or stale integrations | High | Freshness, partial/error states, rejection visibility, lineage, retries, and Data Diagnostics. |
| KPI ambiguity or unapproved thresholds | High | KPI catalog versioning, owner and formula approval, provisional labels, and source reconciliation. |
| Low alert usefulness or review overload | Medium | Pilot with three to five alerts, SLA review, suppression rules, and measure action-over-alerts and decision time. |
| Scope expansion into deferred capabilities | Medium | Maintain the seven-screen MVP boundary and record changes in the decision log. |

## 13. Release criteria

The MVP may move from provisional prototype toward pilot only when the following are evidenced and approved by the appropriate reviewers:

- All seven MVP screens have detailed specifications and traceability to canonical source requirements.
- Global shell, shared states, role-aware navigation, and permission-denied behavior are represented.
- The signal-to-value loop works end to end with linked alert, decision, action, evidence, and value records.
- Prototype fixtures and demos contain synthetic data only, with sensitive fields masked or absent.
- Source lineage, freshness, confidence, limitations, and audit affordances are visible where relevant.
- Human actor, reason, context, correction, and contestation paths are functional.
- Estimated, influenced, validated, and realized values are visibly and semantically distinct.
- RBAC/ABAC, tenant isolation, consent, hierarchy, retention, and sensitive-data behaviors are validated.
- Desktop and mobile verification passes at agreed target widths with no known horizontal overflow or inert core control.
- Data reconciliation, Finance validation, and pilot success metrics are documented.
- Cross-functional review findings, unresolved assumptions, and approvals are recorded; no provisional material is represented as approved production requirements.

## 14. Traceability index

| PRD area | Workspace evidence |
|---|---|
| Product objective and boundaries | `MASTER-PLAN.md`, `docs/project-brief.md`, `docs/scope-and-boundaries.md` |
| Screen and role architecture | `planning/screen-inventory.md`, `planning/screen-map.md`, `planning/role-access-matrix.md` |
| Core journeys | `flows/core-mvp-value-loop.md`, `flows/manager-alert-flow.md`, `flows/finance-roi-validation-flow.md` |
| Alert and decision requirements | `wireframes/05-alerts-decisions/`, `planning/interaction-model.md` |
| KPI and ROI requirements | `wireframes/04-kpi-governance/`, `wireframes/06-hub-roi/`, `planning/data-to-screen-map.md` |
| States and governance | `planning/state-inventory.md`, `wireframes/00-global/shared-states/`, `docs/working-agreements.md` |
| Source requirements | `sources/source-register.md`, `sources/source-snapshots/Planilha_Tecnica_Desenvolvimento_HUB.md` |
| Validation and decisions | `validation/mvp-wireframe-review.md`, `decisions/decision-log.md`, `decisions/validation-log.md` |

## 15. Open decisions

- Final document owner and approving stakeholders.
- Final visual identity, navigation labels, and language/localization strategy.
- Pilot alerts, owners, SLAs, thresholds, and approved KPI formulas.
- Formal RBAC/ABAC, tenant, hierarchy, consent, legal-basis, retention, and sensitive-data behavior.
- Individual versus aggregate drill-down policy.
- Finance definitions of validated and realized value and the required evidence package.
- Whether the prototype remains a demonstration or becomes the implementation base.

## Source note

The PRD structure was informed by Figma’s public guide, [How to create a product requirements document](https://www.figma.com/resource-library/product-requirements-document/), accessed 2026-09-16. Product-specific requirements in this document are derived from the current workspace and its canonical-source register, not from the Figma article.
