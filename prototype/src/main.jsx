import { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const alertsSeed = [
  { id: 'ALT-01', title: 'Queda persistente em Delivery', severity: 'Crítico', impact: 'R$ 320k em risco', status: 'Em análise', signal: 'Atingimento caiu 18 pontos no período.', rule: 'Atingimento <75% em 2 períodos', source: 'Performance + PSA', owner: 'Marina Costa' },
  { id: 'ALT-03', title: 'Margem em risco — Consulting', severity: 'Alto', impact: 'R$ 210k oportunidade', status: 'Não atribuído', signal: 'Margem abaixo do limite configurado.', rule: 'Margem <20% ou queda >5 p.p.', source: 'ERP + Timesheet', owner: 'Não atribuído' },
  { id: 'ALT-02', title: 'Ociosidade em APAC', severity: 'Médio', impact: 'R$ 180k oportunidade', status: 'Em análise', signal: 'Capacidade disponível acima do esperado.', rule: 'Alocação <65% e capacidade >40h', source: 'PSA + CRM', owner: 'João Lima' },
]

const kpis = [
  ['Revenue', '$24.8M', '+6%', 'positive'],
  ['Margin', '18.2%', '+1.4 pp', 'positive'],
  ['People signal', '72', '-6', 'warning'],
  ['Client risk', '8%', '+3 pp', 'critical'],
  ['HUB ROI', '2.7x', '+0.6x', 'positive'],
]

function Icon({ children }) { return <span className="icon" aria-hidden="true">{children}</span> }

function App() {
  const [alerts, setAlerts] = useState(alertsSeed)
  const [selectedId, setSelectedId] = useState(alertsSeed[0].id)
  const [decision, setDecision] = useState('approve')
  const [context, setContext] = useState('')
  const [filter, setFilter] = useState('All')
  const [toast, setToast] = useState('')
  const selected = alerts.find((alert) => alert.id === selectedId) ?? alerts[0]

  const visibleAlerts = useMemo(() => filter === 'All' ? alerts : alerts.filter((alert) => alert.severity === filter), [alerts, filter])

  function submitDecision() {
    setAlerts((current) => current.map((alert) => alert.id === selected.id ? { ...alert, status: decision === 'approve' ? 'Decisão registrada' : 'Aguardando análise' } : alert))
    setToast(decision === 'approve' ? 'Decision recorded and audit event created.' : 'Decision saved for later review.')
    window.setTimeout(() => setToast(''), 2600)
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><strong>HUB</strong><span>People<br />Performance<br />Together</span></div>
        <nav aria-label="Primary navigation">
          <button className="nav-item active"><Icon>▥</Icon>Executive Cockpit</button>
          <button className="nav-item"><Icon>♧</Icon>Alerts &amp; Decisions <b className="count">5</b></button>
          <button className="nav-item"><Icon>♙</Icon>People &amp; Teams</button>
          <button className="nav-item"><Icon>▣</Icon>Clients &amp; Revenue</button>
          <button className="nav-item"><Icon>⌁</Icon>Analysis &amp; Explainability</button>
          <button className="nav-item"><Icon>▤</Icon>Action Plans</button>
          <button className="nav-item"><Icon>▥</Icon>ROI &amp; Outcomes</button>
        </nav>
        <div className="sidebar-bottom"><button className="nav-item"><Icon>⚙</Icon>Settings</button><button className="nav-item"><Icon>?</Icon>Help</button></div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="context-control"><span>Organization</span><strong>Acme Professional Services</strong>⌄</button>
          <button className="context-control"><span>Period</span><strong>Q2 2025 (Apr – Jun)</strong>⌄</button>
          <div className="freshness"><span className="fresh-dot" />Data refreshed <strong>Today, 09:24</strong></div>
          <button className="notification" aria-label="Notifications">♧<b>5</b></button>
          <div className="user"><span className="avatar">JD</span><strong>Jordan Davis</strong>⌄</div>
        </header>

        <div className="content">
          <section className="page-heading"><div><h1>Executive Cockpit</h1><p>A single view from people signals to business outcomes</p></div><div className="system-strip"><div><span>◷</span><small>Last updated</small><strong>Today, 09:24</strong></div><div><small>Data coverage</small><strong>98%</strong></div><div><span>♙</span><small>Human review</small><strong>12 items pending</strong></div></div></section>

          <section className="kpi-grid" aria-label="Key performance indicators">{kpis.map(([label, value, delta, tone]) => <article className="kpi" key={label}><h2>{label}</h2><strong>{value}</strong><div className={`delta ${tone}`}>{tone === 'critical' ? '▲' : tone === 'warning' ? '▼' : '▲'} {delta}</div><small>vs. prior period</small><div className={`spark ${tone}`} /></article>)}</section>

          <section className="middle-grid">
            <article className="panel decision-panel"><div className="panel-heading"><h2>Priority decisions</h2><span>{visibleAlerts.length + 2} items</span></div><div className="table-head"><span>Priority</span><span>Issue</span><span>Impact</span><span>Human review</span><span>Action</span></div>{visibleAlerts.map((alert) => <button className={`decision-row ${selectedId === alert.id ? 'selected' : ''}`} key={alert.id} onClick={() => setSelectedId(alert.id)}><span><em className={`severity ${alert.severity.toLowerCase()}`}>{alert.severity}</em></span><strong>{alert.title}</strong><span>{alert.impact}</span><span className="review">♙ Required<br /><small>{alert.status}</small></span><span className="outline-button">Open driver</span></button>)}</article>
            <article className="panel explain-panel"><div className="panel-heading"><h2>Why am I seeing this?</h2><button className="text-button">View methodology</button></div><div className="alert-title"><em className={`severity ${selected.severity.toLowerCase()}`}>{selected.severity}</em><div><h3>{selected.title}</h3><p>{selected.signal}</p></div></div><div className="tabs"><button className="tab active">Key drivers</button><button className="tab">Segments</button><button className="tab">Trends</button><button className="tab">Related signals</button></div><div className="driver-list"><div><span>Workload intensity</span><b style={{ width: '88%' }} /><strong>+42%</strong></div><div><span>Manager span of control</span><b style={{ width: '62%' }} /><strong>+28%</strong></div><div><span>Career progression signal</span><b style={{ width: '38%' }} /><strong>−24%</strong></div><div><span>Engagement score</span><b style={{ width: '30%' }} /><strong>−18%</strong></div></div><div className="based-on"><strong>This is based on:</strong><ul><li>{selected.source}</li><li>Selected period and authorized scope</li><li>Human context pending</li></ul></div></article>
          </section>

          <section className="bottom-grid">
            <article className="panel human-panel"><div className="panel-heading"><div><h2>Human decision</h2><p>Review the insight, add context, and decide on next steps.</p></div></div><div className="decision-form"><div><strong>Your decision</strong><label><input type="radio" name="decision" checked={decision === 'approve'} onChange={() => setDecision('approve')} /> Approve decision</label><label><input type="radio" name="decision" checked={decision === 'review'} onChange={() => setDecision('review')} /> Request more analysis</label><label><input type="radio" name="decision" checked={decision === 'later'} onChange={() => setDecision('later')} /> Not at this time</label></div><label className="context-label"><strong>Add context <small>(optional)</small></strong><textarea value={context} onChange={(event) => setContext(event.target.value)} placeholder="Add your notes, context, or specific guidance..." maxLength={500} /><small>{context.length}/500</small></label></div><div className="form-actions"><button className="primary-button" onClick={submitDecision}>{decision === 'approve' ? 'Approve decision' : 'Save decision'}</button><button className="secondary-button" onClick={() => setContext('')}>Save for later</button></div></article>
            <article className="panel action-panel"><div className="panel-heading"><div><h2>Action plan</h2><p>Turn decisions into actions and track progress.</p></div></div><label className="check-row"><input type="checkbox" defaultChecked /> Rebalance team workload <time>30 Jun 2025</time></label><label className="check-row"><input type="checkbox" /> Initiate manager coaching <time>15 Jul 2025</time></label><label className="check-row"><input type="checkbox" /> Review resourcing plan <time>31 Jul 2025</time></label><label className="check-row"><input type="checkbox" /> Monitor people signal <time>Ongoing</time></label><button className="add-action" onClick={() => setToast('Action plan item added to the draft.')}>＋ Add action</button></article>
            <article className="panel roi-panel"><div className="panel-heading"><div><h2>Estimated vs. validated value</h2><p>Track the business impact of decisions.</p></div></div><div className="legend"><span><i className="estimate" />Estimated value</span><span><i className="validated" />Validated value</span></div><div className="bars"><div style={{ height: '72%' }}><span>$320k</span></div><div style={{ height: '55%' }}><span>$260k</span></div><div style={{ height: '90%' }}><span>$480k</span></div><div style={{ height: '65%' }}><span>$310k</span></div><div style={{ height: '42%' }}><span>$210k</span></div><div style={{ height: '18%' }}><span>$90k</span></div></div><div className="bar-labels"><span>Attrition risk</span><span>Client health</span><span>Margin improvement</span></div><small className="footnote">Values are illustrative until validated by Finance.</small></article>
          </section>
        </div>
      </main>
      {toast && <div className="toast" role="status">✓ {toast}</div>}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
