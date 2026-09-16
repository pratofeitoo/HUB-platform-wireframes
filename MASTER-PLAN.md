---
title: HUB Platform Wireframes — Master Plan
status: active-provisional
workspace: /Users/paulorezende/Documents/Codex/HUB-platform-wireframes
entry_point: true
last_updated: 2026-09-16
---

# HUB Platform Wireframes — Master Plan

This is the continuation entry point for future Codex sessions working on the standalone HUB platform wireframe and prototype workspace.

## How to continue in a new Codex session

1. Read this file completely.
2. Check `git status --short`.
3. Inspect the relevant files under `planning/`, `wireframes/`, `flows/`, and `prototype/`.
4. Continue the first incomplete item in the active work queue.
5. Run the relevant build and browser checks.
6. Update this file when status, decisions, blockers, or next tasks change.

Suggested prompt:

```text
Open and follow:
/Users/paulorezende/Documents/Codex/HUB-platform-wireframes/MASTER-PLAN.md

Continue the first incomplete task in the active work queue. Preserve source authority, provisional labels, synthetic-data boundaries, LGPD safeguards, human review, and verification requirements.
```

## 1. Project objective

Create a traceable, role-aware platform wireframe and lightweight interactive prototype for the HUB MVP.

The central product model is:

```text
Signal → Context → Explanation → Human decision → Action → Follow-up → Validated value
```

The workspace translates the HUB technical plan into screen architecture, user flows, interface states, design-system foundations, synthetic prototype data, and implementation-oriented specifications.

## 2. Current status

**Phase:** MVP wireframe implementation and responsive validation.

**Overall:** Active, provisional design and prototype phase.

| Area | Status |
|---|---|
| Standalone workspace | Created |
| Local Git repository | Initialized; changes not committed |
| Canonical source copies | Copied verbatim and checksum-verified |
| Screen map and inventory | Initial version created |
| Role/access matrix | Initial version; formal validation pending |
| Core MVP flow | Specified |
| Detailed wireframe briefs | Started |
| Design-system foundation | Provisional tokens and patterns created |
| Interactive prototype | Executive Cockpit implemented |
| Prototype build | Passing with Vite |
| Desktop browser check | Completed |
| Mobile browser check | Completed; overflow issue fixed |
| Stakeholder validation | Pending |
| Production readiness | Not claimed |

## 3. Completed work

### Workspace and sources

- Created this standalone workspace and initialized local Git.
- Created source governance files and the folder structure.
- Copied the technical Markdown and workbook into `sources/source-snapshots/`.
- Recorded provenance and checksums in `sources/snapshot-metadata.yaml`.
- Kept the Obsidian vault as the authoritative source if copies diverge.

### Planning and wireframes

- Created the screen map, screen inventory, navigation model, information architecture, role/access matrix, state inventory, data-to-screen map, MVP boundary, and requirements traceability.
- Created specifications for Executive Cockpit, KPI detail, driver analysis, Manager Dashboard, alert detail, alert queue, explainability, human decision, action plan, and ROI validation.
- Created the core MVP value-loop flow.
- Standardized all eleven flow specifications with user goals, entry points, steps, branches, governance checks, endpoints, audit events, and validation criteria.

### Prototype

- Created a React/Vite prototype under `prototype/`.
- Added synthetic organizations, users, KPIs, alerts, decisions, and ROI data.
- Implemented alert selection and explanation updates.
- Implemented decision selection, context entry, status update, and action-plan feedback.
- Added desktop/mobile responsive styles.
- Saved the visual concept at `prototype/public/assets/hub-executive-cockpit-concept.png`.

## 4. MVP scope

| ID | Screen | Primary role(s) | Current state |
|---|---|---|---|
| SCR-01 | Executive Cockpit | Executive, Sponsor | In prototype |
| SCR-02 | Manager Dashboard | Manager | Specified; partial prototype representation |
| SCR-03 | My Journey | Employee | Brief created; implementation pending |
| SCR-04 | KPI Governance | RH, Finance, Admin | Brief created; implementation pending |
| SCR-05 | Alerts and Decisions Center | HUB Manager, Manager | Core interactions represented |
| SCR-06 | HUB ROI | Sponsor, Finance | Value comparison represented |
| SCR-07 | Data Diagnostics | Data, Admin | Brief created; implementation pending |

Deferred:

- `SCR-08` Supplier Marketplace — MVP+1.
- `SCR-09` Indicator API — system interface; UI treatment deferred.
- Academic, communities, and other Phase 2 capabilities.

## 5. Canonical source locations

### Vault sources

- `/Users/paulorezende/Library/Mobile Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The New HUB dev-2/03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB.md`
- `/Users/paulorezende/Library/Mobile Documents/iCloud~md~obsidian/Documents/Work/WORK/HUB/Projects/2026/The New HUB dev-2/03-approved/nucleo-inteligencia/planilha-tecnica-completa-desenvolvimento/01-source/Planilha_Tecnica_Desenvolvimento_HUB.xlsx`

### Workspace snapshots

- `sources/source-snapshots/Planilha_Tecnica_Desenvolvimento_HUB.md`
- `sources/source-snapshots/Planilha_Tecnica_Desenvolvimento_HUB.xlsx`
- `sources/snapshot-metadata.yaml`
- `sources/source-register.md`

### Authority rule

The approved vault files remain canonical. Workspace files are snapshots or derived material. If they differ, record the discrepancy and resolve it against the vault source; do not silently overwrite either version.

## 6. Workspace map

```text
HUB-platform-wireframes/
├── MASTER-PLAN.md          ← continuation entry point
├── docs/                   ← brief, scope, glossary, agreements
├── sources/                ← snapshots, provenance, extracts
├── planning/               ← IA, screens, roles, states, traceability
├── decisions/              ← decisions, assumptions, validation, ADRs
├── wireframes/             ← screen specifications and states
├── flows/                  ← end-to-end journeys
├── matrices/               ← CSV cross-reference tables
├── design-system/          ← tokens, components, patterns, accessibility
├── prototype/              ← React/Vite implementation
├── sample-data/            ← synthetic data only
├── assets/                 ← brand, icons, diagrams, exports
├── validation/             ← reviews, research, pilot evidence
├── handoff/                ← reviewed implementation material
└── archive/                ← historical and superseded work
```

## 7. Active product flow

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

- Alert selection changes the explanation context.
- Explanation shows source, rule, period, confidence, limitations, and human context.
- Decision capture identifies the human actor and reason.
- Action plans remain linked to the decision and alert.
- Estimated, influenced, validated, and realized value remain distinct.
- Intended production state changes are auditable.

## 8. Active work queue

### Immediate

- [x] Add detailed mobile specifications for Executive Cockpit, Manager Dashboard, Alerts, and HUB ROI.
- [ ] Add remaining shared-state specifications: partial data, integration error, action success, session expired, and access denied.
- [ ] Add detailed alert lifecycle states: unassigned, in progress, escalated, suppressed, awaiting Finance, and closed.
- [ ] Add Manager Dashboard route/view to the prototype.
- [ ] Add dedicated Alert Detail and Explainability interaction view.

### Next

- [ ] Add KPI Governance view and version/approval interaction.
- [ ] Add My Journey employee view and contestation interaction.
- [ ] Add Data Diagnostics view using synthetic job/source data.
- [ ] Add HUB ROI Finance validation interaction.
- [ ] Load prototype data from `sample-data/` instead of inline seed data.
- [ ] Add prototype role switcher for Executive, Manager, Employee, Finance, and Data/Admin.

### Source and validation

- [ ] Extract workbook sheets into `sources/extracted-data/` with row-level provenance.
- [ ] Reconcile KPI and alert IDs in the matrices against the copied workbook.
- [ ] Confirm final language strategy: English, Portuguese, or localization.
- [ ] Validate RBAC/ABAC, tenant, hierarchy, consent, and sensitive-data behavior.
- [ ] Review with Product, Data, RH, Finance, Security/LGPD, and pilot stakeholders.
- [ ] Prepare reviewed implementation material under `handoff/`.

## 9. Verification commands

```bash
cd /Users/paulorezende/Documents/Codex/HUB-platform-wireframes/prototype
npm install
npm run build
npm run dev
```

```bash
cd /Users/paulorezende/Documents/Codex/HUB-platform-wireframes
git status --short
shasum -a 256 sources/source-snapshots/Planilha_Tecnica_Desenvolvimento_HUB.md
shasum -a 256 sources/source-snapshots/Planilha_Tecnica_Desenvolvimento_HUB.xlsx
```

Browser checks:

- desktop first viewport;
- mobile viewport;
- alert selection;
- explanation update;
- decision submission;
- action-plan interaction;
- no horizontal overflow;
- readable text and accessible controls.

## 10. Open decisions and blockers

### Open decisions

- [ ] Final visual identity and approved design tokens.
- [ ] Final navigation labels and route naming.
- [ ] Three to five alerts for the Monks pilot.
- [ ] Approved KPI formulas, thresholds, and targets.
- [ ] Formal RBAC/ABAC matrix.
- [ ] Individual versus aggregate drill-down policy.
- [ ] Finance definition of validated and realized value.
- [ ] Whether the prototype remains a demonstration or becomes an implementation base.

### Current blockers

No technical blocker prevents continued prototype work. Product and governance validation remain open before promotion to an approved interface specification.

## 11. Operating rules

- Use explicit status labels: `provisional`, `proposed`, `illustrative`, `validated`, `approved`, `rejected`, and `superseded`.
- Use synthetic data only. Never add real employee, HR, health, demographic, payroll, client, supplier, or financial records.
- Minimize sensitive fields and respect purpose, legal basis, consent, retention, tenant, and hierarchy constraints.
- Mask restricted data in screens, charts, exports, and accessibility labels.
- Preserve correction and contestation paths.
- The platform may surface signals and recommendations but must not autonomously decide hiring, promotion, dismissal, punishment, or other consequential people outcomes.
- Never present correlation as proof of causation.
- Record material design decisions in `decisions/decision-log.md`.

## 12. Definition of done for the first MVP milestone

- [ ] All seven MVP screens have detailed specifications.
- [ ] Global shell and shared states are represented.
- [ ] Core signal-to-value loop works end to end in the prototype.
- [ ] Role-aware navigation and access behavior are represented.
- [ ] Prototype uses documented synthetic data.
- [ ] Explanation and human decision behavior are functional.
- [ ] Estimated and validated value are visibly distinct.
- [ ] Desktop and mobile layouts are checked.
- [ ] No known horizontal overflow or inert core control remains.
- [ ] Source, freshness, confidence, limitations, and audit affordances are represented where relevant.
- [ ] Each MVP screen traces to source requirements.
- [ ] Review findings and unvalidated assumptions are recorded.
- [ ] Reviewed outputs are ready for handoff without being misrepresented as approved production requirements.

## Continuation instruction

Start with the first unchecked task under **Immediate**. After completing it:

1. run `npm run build`;
2. verify the relevant desktop and mobile states in a browser;
3. update planning, validation, and decision records;
4. update this file's status and next task;
5. leave the Git working tree inspectable for review.
