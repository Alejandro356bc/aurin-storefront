import { useState } from 'react'
import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import ProductCard from '../components/ProductCard'
import TrustStrip from '../components/TrustStrip'
import { TruckIcon, ReturnIcon, ShieldIcon, StarIcon, CheckIcon } from '../components/Icons'
import { products, categories } from '../data/products'

const reviews = [
  '[REAL CUSTOMER REVIEW — two or three sentences on the product, in the buyer’s own words.]',
  '[REAL CUSTOMER REVIEW — ideally one that mentions how quickly it arrived.]',
  '[REAL CUSTOMER REVIEW — one that answers a doubt a first-time visitor would have.]'
]

export default function Home() {
  const [cat, setCat] = useState('All')
  const [signedUp, setSignedUp] = useState(false)

  const shown = (cat === 'All' ? products : products.filter((p) => p.category === cat)).slice(0, 4)

  return (
    <>
      <section className="grid-2" style={{ alignItems: 'stretch', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30, paddingTop: 96, paddingBottom: 96 }}>
          <div className="eyebrow">The Autumn Edit — No. 01</div>
          <h1 className="disp" style={{ margin: 0, fontSize: 'clamp(44px, 5.4vw, 78px)', lineHeight: 0.99, letterSpacing: '-0.02em', textWrap: 'pretty' }}>
            Objects made<br />to be kept.
          </h1>
          <p style={{ margin: 0, maxWidth: 430, fontSize: 16.5, lineHeight: 1.68, color: 'var(--body)' }}>
            A short, deliberate range of everyday things — chosen for how they feel in the hand, not for how many we can move.
            Stocked in the US, shipped tracked, returnable for thirty days.
          </p>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', paddingTop: 6 }}>
            <Link className="btn" to="/collection">Shop the edit</Link>
            <Link className="link-underline" to="/about">Our story</Link>
          </div>
        </div>
        <Placeholder
          tone="linear-gradient(200deg, #E6DFD1 0%, #D2C9B7 52%, #B9AF9A 100%)"
          label="Hero image — replace with your product photograph"
          style={{ minHeight: 560 }}
        />
      </section>

      <TrustStrip />

      <section className="wrap" style={{ paddingTop: 88, paddingBottom: 96 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', paddingBottom: 34 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="eyebrow">In stock now</div>
            <h2 className="disp" style={{ margin: 0, fontSize: 44, lineHeight: 1 }}>The considered few</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {categories.map((c) => (
              <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>
        <div className="grid-4">
          {shown.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      <section className="grid-2" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <Placeholder
          tone="linear-gradient(320deg, #E3DCCD 0%, #CFC5B1 60%, #ADA48F 100%)"
          label="Editorial image — in-use or studio still life"
          style={{ minHeight: 500 }}
        />
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26, paddingTop: 88, paddingBottom: 88 }}>
          <div className="eyebrow">Why so few things</div>
          <h2 className="disp" style={{ margin: 0, fontSize: 'clamp(30px, 3vw, 42px)', lineHeight: 1.08 }}>
            We would rather sell one good thing than forty average ones.
          </h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.72, color: 'var(--body)' }}>
            Every piece is ordered as a sample first, used for a fortnight, and photographed by us before it goes on the site.
            If it does not survive that, it does not get listed. That is the whole selection process.
          </p>
          <Link className="link-underline" to="/about" style={{ alignSelf: 'flex-start' }}>Read how we choose</Link>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 88, paddingBottom: 88 }}>
        <div className="grid-3" style={{ gap: 56 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TruckIcon size={26} />
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 400 }}>Real delivery dates</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--body)' }}>
              US orders leave a New Jersey warehouse and arrive in two to six days. Everything else is eight to twelve,
              tracked from the moment it ships. No estimates we cannot keep.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ReturnIcon size={26} />
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 400 }}>Thirty days, no argument</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--body)' }}>
              Send it back within thirty days for a full refund. Under fifteen dollars we refund and tell you to keep it —
              the return costs more than the piece.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ShieldIcon size={26} />
            <h3 style={{ margin: 0, fontSize: 17, fontWeight: 400 }}>Pay how you like</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: 'var(--body)' }}>
              PayPal and every major card, prices shown in US dollars. Your details go straight to the payment provider —
              we never hold a card number.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ borderTop: '1px solid var(--line)', paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, paddingBottom: 44 }}>
          <div className="eyebrow">From the people who bought one</div>
          <h2 className="disp" style={{ margin: 0, fontSize: 38 }}>Verified reviews</h2>
        </div>
        <div className="grid-3" style={{ gap: 24 }}>
          {reviews.map((text, i) => (
            <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 3 }}>
                {[0, 1, 2, 3, 4].map((s) => <StarIcon key={s} />)}
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.68, color: '#2C2A22' }}>{text}</p>
              <span className="eyebrow">Verified buyer · [City]</span>
            </div>
          ))}
        </div>
        <p style={{ margin: '26px 0 0', textAlign: 'center', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
          Placeholder — replace with real reviews once you have them
        </p>
      </section>

      <section className="wrap" style={{ background: 'var(--ink)', color: '#F1EDE4', paddingTop: 84, paddingBottom: 84 }}>
        <div className="grid-2" style={{ gap: 72, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h2 className="disp" style={{ margin: 0, fontSize: 'clamp(30px, 3vw, 42px)', lineHeight: 1.06, color: 'var(--bone)' }}>
              Two emails a month.<br />Sometimes one.
            </h2>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: '#A9A294', maxWidth: 400 }}>
              New pieces, restocks, and the occasional note on why something did not make the cut. Nothing else.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {signedUp ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid rgba(246,244,239,0.3)', paddingBottom: 18 }}>
                <CheckIcon />
                <span style={{ fontSize: 17, color: 'var(--bone)' }}>Thank you — you are on the list.</span>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSignedUp(true) }}
                style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(246,244,239,0.3)' }}
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  style={{ flexGrow: 1, background: 'transparent', border: 0, color: 'var(--bone)', fontSize: 16, padding: '14px 2px' }}
                />
                <button type="submit" style={{ color: 'var(--bone)', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '14px 4px' }}>
                  Subscribe
                </button>
              </form>
            )}
            <span style={{ fontSize: 12, color: '#8B8577', lineHeight: 1.6 }}>Unsubscribe in one click. We never sell your address.</span>
          </div>
        </div>
      </section>
    </>
  )
}
