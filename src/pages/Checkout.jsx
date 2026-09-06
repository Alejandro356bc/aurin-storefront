import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { TruckIcon, ShieldIcon, LockIcon, CheckIcon } from '../components/Icons'
import { money } from '../data/products'
import { useCart } from '../context/CartContext'

const COUNTRIES = {
  'United States': {
    note: 'Ships from our New Jersey warehouse. Arrives in 2–6 business days, tracked. Import duty is already paid — nothing to pay on delivery.',
    dutyLabel: 'Duties & import fees',
    dutyValue: () => 'Paid by us',
    vat: 0
  },
  'United Kingdom': {
    note: 'Ships tracked from our supplier warehouse. Arrives in 8–12 days. UK VAT is included in the price shown — nothing to pay on delivery.',
    dutyLabel: 'UK VAT (included)',
    dutyValue: (total) => money(total - total / 1.2),
    vat: 0.2
  },
  Australia: {
    note: 'Ships tracked and arrives in 8–12 days. No duty or GST on orders under A$1,000 — nothing to pay on delivery.',
    dutyLabel: 'Duties & import fees',
    dutyValue: () => 'None due',
    vat: 0
  }
}

const STEPS = ['Contact', 'Delivery', 'Payment']

export default function Checkout() {
  const { items, subtotal, shipping, total, clear, freeShipping } = useCart()
  const [step, setStep] = useState(0)
  const [country, setCountry] = useState('United States')
  const [method, setMethod] = useState('paypal')
  const [placed, setPlaced] = useState(false)
  const navigate = useNavigate()

  if (items.length === 0 && !placed) return <Navigate to="/cart" replace />

  const rules = COUNTRIES[country]

  if (placed) {
    return (
      <section className="wrap" style={{ paddingTop: 120, paddingBottom: 160, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, textAlign: 'center' }}>
        <CheckIcon size={34} />
        <h1 className="disp" style={{ margin: 0, fontSize: 'clamp(32px, 4vw, 48px)' }}>Thank you — order placed.</h1>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: 'var(--body)', maxWidth: 520 }}>
          A confirmation is on its way to your inbox. You will get a tracking number as soon as it leaves the warehouse,
          usually within one working day.
        </p>
        <p style={{ margin: 0, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Prototype — no payment was taken and no order exists
        </p>
        <Link className="btn" to="/" style={{ marginTop: 10 }}>Back to the shop</Link>
      </section>
    )
  }

  return (
    <>
      <header className="header">
        <Link to="/cart" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', flexBasis: 0, flexGrow: 1 }}>
          ← Back to bag
        </Link>
        <Link to="/" className="disp wordmark">AURIN</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end', flexBasis: 0, flexGrow: 1 }}>
          <LockIcon />
          <span style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Secure checkout</span>
        </div>
      </header>

      <section className="wrap two-col-checkout" style={{ paddingTop: 56, paddingBottom: 96 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
          <div className="steps">
            {STEPS.map((label, i) => (
              <button
                key={label}
                onClick={() => setStep(i)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 11,
                  padding: '12px 22px 12px 0',
                  marginRight: 22,
                  borderRight: i < 2 ? '1px solid var(--line)' : 'none',
                  color: i === step ? 'var(--ink)' : '#9A9484'
                }}
              >
                <span
                  className="step-num"
                  style={
                    i === step
                      ? { background: 'var(--accent)', color: '#FBF9F5' }
                      : { color: '#9A9484', border: '1px solid var(--line-strong)' }
                  }
                >
                  {i + 1}
                </span>
                <span style={{ fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{label}</span>
              </button>
            ))}
          </div>

          {step === 0 && (
            <form
              onSubmit={(e) => { e.preventDefault(); setStep(1) }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <h2 className="disp" style={{ margin: 0, fontSize: 30 }}>Contact</h2>
              <input type="email" required placeholder="Email address" />
              <input type="tel" placeholder="Phone (for the courier only)" />
              <label style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 14, color: 'var(--body)', lineHeight: 1.6 }}>
                <input type="checkbox" style={{ width: 'auto', padding: 0, marginTop: 3 }} />
                <span>Email me when new pieces land. Two emails a month, unsubscribe in one click.</span>
              </label>
              <button className="btn" type="submit" style={{ alignSelf: 'flex-start' }}>Continue to delivery</button>
            </form>
          )}

          {step === 1 && (
            <form
              onSubmit={(e) => { e.preventDefault(); setStep(2) }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <h2 className="disp" style={{ margin: 0, fontSize: 30 }}>Delivery</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                <span className="eyebrow">Country</span>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {Object.keys(COUNTRIES).map((c) => (
                    <button
                      type="button"
                      key={c}
                      className={'chip' + (c === country ? ' on' : '')}
                      onClick={() => setCountry(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 14 }}>
                <input required placeholder="First name" />
                <input required placeholder="Last name" />
              </div>
              <input required placeholder="Address" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 14 }}>
                <input required placeholder="City" />
                <input placeholder="State / County" />
                <input required placeholder="Postcode" />
              </div>

              <div className="notice">
                <div className="notice-row">
                  <TruckIcon />
                  <span>{rules.note}</span>
                </div>
              </div>

              <button className="btn" type="submit" style={{ alignSelf: 'flex-start' }}>Continue to payment</button>
            </form>
          )}

          {step === 2 && (
            <form
              onSubmit={(e) => { e.preventDefault(); clear(); setPlaced(true) }}
              style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
            >
              <h2 className="disp" style={{ margin: 0, fontSize: 30 }}>Payment</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { id: 'paypal', label: 'PayPal', note: 'Pay with your PayPal balance, bank or card.' },
                  { id: 'card', label: 'Credit or debit card', note: 'Visa, Mastercard, American Express.' }
                ].map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '18px 20px',
                      width: '100%',
                      background: 'var(--surface)',
                      border: m.id === method ? '1px solid var(--ink)' : '1px solid var(--line)'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: 15,
                        height: 15,
                        borderRadius: '50%',
                        flexShrink: 0,
                        boxShadow: m.id === method
                          ? '0 0 0 1px var(--accent), inset 0 0 0 3px var(--surface)'
                          : '0 0 0 1px #C9C2B2',
                        background: m.id === method ? 'var(--accent)' : 'transparent'
                      }}
                    />
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start', textAlign: 'left' }}>
                      <span style={{ fontSize: 15.5 }}>{m.label}</span>
                      <span style={{ fontSize: 13, color: 'var(--muted)' }}>{m.note}</span>
                    </span>
                  </button>
                ))}
              </div>

              {method === 'card' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <input required placeholder="Card number" inputMode="numeric" />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 14 }}>
                    <input required placeholder="MM / YY" />
                    <input required placeholder="CVC" inputMode="numeric" />
                  </div>
                  <input required placeholder="Name on card" />
                </div>
              )}

              <button
                type="submit"
                className={method === 'paypal' ? 'btn-paypal' : 'btn btn-block'}
              >
                {method === 'paypal' ? 'Continue with PayPal' : `Pay ${money(total)}`}
              </button>

              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: 'var(--muted)' }}>
                By placing this order you agree to our <a href="#terms" style={{ borderBottom: '1px solid var(--line-strong)' }}>terms of service</a>{' '}
                and <a href="#refunds" style={{ borderBottom: '1px solid var(--line-strong)' }}>refund policy</a>.
                Charged in US dollars; your bank may add a conversion fee.
              </p>
            </form>
          )}
        </div>

        <aside className="summary" style={{ padding: '34px 32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {items.map((l) => (
              <div key={l.id} style={{ display: 'grid', gridTemplateColumns: '70px minmax(0, 1fr) auto', gap: 16, alignItems: 'center' }}>
                <Placeholder tone={l.tone} height={86} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 14.5 }}>{l.name}</span>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>{l.variant}</span>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>Qty {l.qty}</span>
                </div>
                <span style={{ fontSize: 14.5 }}>{money(l.price * l.qty)}</span>
              </div>
            ))}
          </div>

          <div className="rule" />

          <div style={{ display: 'flex', gap: 10 }}>
            <input placeholder="Discount code" style={{ flexGrow: 1 }} />
            <button type="button" className="btn-outline" style={{ padding: '0 22px', fontSize: 11.5, letterSpacing: '0.16em' }}>Apply</button>
          </div>

          <div className="rule" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="summary-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="summary-row"><span>Shipping</span><span>{freeShipping ? 'Free' : money(shipping)}</span></div>
            <div className="summary-row"><span>{rules.dutyLabel}</span><span>{rules.dutyValue(total)}</span></div>
          </div>

          <div className="rule" />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 16 }}>Total</span>
            <span className="disp" style={{ fontSize: 28 }}>{money(total)}</span>
          </div>

          <div className="notice-row" style={{ fontSize: 13, borderTop: '1px solid var(--line)', paddingTop: 18 }}>
            <ShieldIcon size={16} />
            <span>Payments handled by our provider. Card details never touch our servers.</span>
          </div>
        </aside>
      </section>
    </>
  )
}
