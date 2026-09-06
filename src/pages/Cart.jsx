import { Link, useNavigate } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import { ShieldIcon, ReturnIcon } from '../components/Icons'
import { money, FREE_SHIPPING_THRESHOLD } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, setQty, remove, subtotal, shipping, total, freeShipping, remaining } = useCart()
  const navigate = useNavigate()
  const empty = items.length === 0
  const progress = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))

  return (
    <section className="wrap two-col" style={{ paddingTop: 64, paddingBottom: 96 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
        <h1 className="disp" style={{ margin: 0, fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1 }}>Your bag</h1>

        {empty ? null : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ height: 3, background: 'var(--line)', overflow: 'hidden' }}>
              <div style={{ height: 3, width: `${progress}%`, background: 'var(--accent)', transition: 'width 0.3s ease' }} />
            </div>
            <span style={{ fontSize: 13.5, color: 'var(--body)' }}>
              {freeShipping
                ? 'Shipping is on us. Leaves New Jersey within one working day.'
                : `Add ${money(remaining)} more for free shipping.`}
            </span>
          </div>
        )}

        {empty ? (
          <div style={{ padding: '70px 0', textAlign: 'center', borderTop: '1px solid var(--line)' }}>
            <p style={{ margin: '0 0 22px', fontSize: 18, color: 'var(--muted)' }}>Your bag is empty.</p>
            <Link className="btn" to="/collection">Back to the shop</Link>
          </div>
        ) : (
          <div>
            {items.map((l) => (
              <div className="cart-line" key={l.id}>
                <Placeholder tone={l.tone} height={148} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link to={`/product/${l.slug}`} style={{ fontSize: 17 }}>{l.name}</Link>
                  <span className="eyebrow">{l.variant}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 18, paddingTop: 6, flexWrap: 'wrap' }}>
                    <div className="stepper" style={{ borderColor: 'var(--line-strong)', minWidth: 108 }}>
                      <button aria-label="Decrease" style={{ padding: '10px 14px', fontSize: 15 }} onClick={() => setQty(l.id, l.qty - 1)}>−</button>
                      <span style={{ fontSize: 14 }}>{l.qty}</span>
                      <button aria-label="Increase" style={{ padding: '10px 14px', fontSize: 15 }} onClick={() => setQty(l.id, l.qty + 1)}>+</button>
                    </div>
                    <button
                      onClick={() => remove(l.id)}
                      style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--line-strong)', paddingBottom: 3 }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <span style={{ fontSize: 17 }}>{money(l.price * l.qty)}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--line)' }} />
          </div>
        )}

        <Link to="/collection" style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', alignSelf: 'flex-start', borderBottom: '1px solid var(--line-strong)', paddingBottom: 4 }}>
          Continue shopping
        </Link>
      </div>

      <aside className="summary">
        <h2 className="disp" style={{ margin: 0, fontSize: 26 }}>Summary</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
          <div className="summary-row"><span>Subtotal</span><span>{money(subtotal)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>{empty ? money(0) : freeShipping ? 'Free' : money(shipping)}</span></div>
          <div className="summary-row"><span>Duties &amp; import fees</span><span>Paid by us</span></div>
          <div className="summary-row"><span>Tax</span><span>Calculated at checkout</span></div>
        </div>

        <div className="rule" />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: 17 }}>Total</span>
          <span className="disp" style={{ fontSize: 30 }}>{money(total)}</span>
        </div>
        <span style={{ fontSize: 12, color: 'var(--muted)', marginTop: -10 }}>All prices in US dollars.</span>

        <button className="btn btn-block" disabled={empty} onClick={() => navigate('/checkout')}>Checkout</button>
        <button className="btn-paypal" disabled={empty} style={empty ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}>Pay with PayPal</button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, borderTop: '1px solid var(--line)', paddingTop: 20 }}>
          <div className="notice-row" style={{ fontSize: 13 }}>
            <ShieldIcon size={16} />
            <span>Card details go straight to the payment provider. We never see or hold them.</span>
          </div>
          <div className="notice-row" style={{ fontSize: 13 }}>
            <ReturnIcon size={16} />
            <span>Thirty days to return anything, refunded in full.</span>
          </div>
        </div>
      </aside>
    </section>
  )
}
