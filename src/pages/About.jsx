import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'

const steps = [
  {
    n: '01',
    title: 'We order one, at our own cost',
    body: 'Nothing is listed from a supplier catalogue photograph. A sample comes to Pune first, and it is paid for like any other order.'
  },
  {
    n: '02',
    title: 'We use it for a fortnight',
    body: 'Daily, properly, until something breaks or it earns its place. Most things do not survive this step, which is why the range is short.'
  },
  {
    n: '03',
    title: 'We photograph it ourselves',
    body: 'Every image on this site is of the actual item you will receive, shot in daylight. If a colour looks different in person, that is a fault we want to hear about.'
  },
  {
    n: '04',
    title: 'We stock it where you are',
    body: 'Once a piece sells consistently we hold stock in New Jersey, so US orders arrive in days rather than weeks and the duty is settled before it reaches you.'
  }
]

const facts = [
  ['Where orders ship from', 'New Jersey, USA · and partner warehouses'],
  ['US delivery', '2–6 business days, tracked'],
  ['UK & Australia delivery', '8–12 days, tracked'],
  ['Who pays import duty', 'We do — nothing to pay on delivery'],
  ['Returns window', '30 days from delivery'],
  ['Reply time to an email', 'Within 12 hours']
]

export default function About() {
  return (
    <>
      <section className="wrap" style={{ paddingTop: 96, paddingBottom: 72, display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 960 }}>
        <div className="eyebrow">About</div>
        <h1 className="disp" style={{ margin: 0, fontSize: 'clamp(40px, 4.8vw, 68px)', lineHeight: 1.02 }}>
          A very small shop, run properly.
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.68, color: 'var(--body)', maxWidth: 660 }}>
          Aurin is one person in Pune, a short list of suppliers, and a warehouse in New Jersey. There is no team page
          because there is no team. What there is instead: honest delivery dates, real photographs, and a refund policy
          that does not fight you.
        </p>
      </section>

      <div className="wrap">
        <Placeholder
          tone="linear-gradient(210deg, #E8E1D2 0%, #CFC5B1 55%, #B0A793 100%)"
          label="Workspace or product-in-context photograph"
          height={420}
        />
      </div>

      <section className="wrap" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="about-grid">
          <h2 className="disp" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 38px)', lineHeight: 1.1 }}>
            How something gets on the site
          </h2>
          <div>
            {steps.map((s, i) => (
              <div
                key={s.n}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px minmax(0, 1fr)',
                  gap: 28,
                  padding: '28px 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: i === steps.length - 1 ? '1px solid var(--line)' : 'none'
                }}
              >
                <span className="disp" style={{ fontSize: 30, color: 'var(--accent)' }}>{s.n}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 19, fontWeight: 400 }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.72, color: 'var(--body)' }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ background: 'var(--ink)', color: '#F1EDE4', paddingTop: 88, paddingBottom: 88 }}>
        <div className="grid-2" style={{ gap: 80 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div className="footer-head">The plain facts</div>
            <h2 className="disp" style={{ margin: 0, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.1, color: 'var(--bone)' }}>
              Things other shops bury in a policy page
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {facts.map(([k, v], i) => (
              <div
                className="fact-row"
                key={k}
                style={i === facts.length - 1 ? { borderBottom: '1px solid rgba(246,244,239,0.14)' } : undefined}
              >
                <span style={{ color: '#A9A294' }}>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 96, paddingBottom: 96, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22, textAlign: 'center' }}>
        <div className="eyebrow">A note from the shop</div>
        <p className="disp" style={{ margin: 0, fontSize: 'clamp(22px, 2.6vw, 34px)', lineHeight: 1.36, maxWidth: 860 }}>
          “If a piece disappoints you, write to me and I will make it right — usually before you have finished
          explaining the problem.”
        </p>
        <span style={{ fontSize: 13.5, color: 'var(--muted)' }}>[YOUR NAME], founder · [SUPPORT EMAIL]</span>
        <Link className="btn" to="/collection" style={{ marginTop: 14 }}>See the range</Link>
      </section>
    </>
  )
}
