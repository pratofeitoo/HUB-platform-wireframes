# User flows

See the detailed flow files in `flows/`. Each flow is a provisional user-flow specification with a user/goal, entry point, meaningful steps, decision and error branches, permission/LGPD checks, endpoint, audit events, and validation criteria.

## Flow inventory

| Flow | Primary user | Endpoint |
|---|---|---|
| Core MVP value loop | Executive, Manager, Finance | Validated value or visible pending/estimated state |
| Executive | Executive / Sponsor | Recorded human decision and linked evidence |
| Manager alert | Manager | Linked action with owner/due date, escalation, defer, suppress, or close |
| Alert lifecycle | HUB Manager / Manager | Closed, escalated, suppressed, or awaiting Finance |
| Recommendation lifecycle | Authorized reviewer | Human decision and measured outcome |
| Finance ROI validation | Finance | Validated/realized value or pending/rejected state |
| KPI approval | KPI owner, RH/Product, Finance | Versioned and published KPI or pending/rejected draft |
| Employee development | Employee | Check-in/development plan or tracked contestation |
| Contestation | Employee / data subject | Response, correction, or escalation |
| Data quality | Data/Admin | Verified source or visible degraded/escalated state |
| Permission denied | Any authenticated user | Authorized alternative or governed request |

The first prototype must demonstrate the Manager alert journey and Finance ROI validation journey end to end. These documents do not claim that the unimplemented routes are already functional.
