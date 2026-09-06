import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Placeholder from '../components/Placeholder'
import ProductCard from '../components/ProductCard'
import { TruckIcon, ReturnIcon, StarIcon } from '../components/Icons'
import { findProduct, products, money, shotLabels } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Product() {
  const { slug } = useParams()
  const product = findProduct(slug)

  const [shot, setShot] = useState(0)
  const [colourIdx, setColourIdx] = useState(0)
  const [sizeIdx, setSizeIdx] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [openPanel, setOpenPanel] = useState(0)

  const { add } = useCart()

  const related = useMemo(
    () => products.filter((p) => p.slug !== slug).slice(0, 3),
    [slug]
  )

  if (!product) return <Navigate to="/collection" replace />

  const colour = product.colours[Math.min(colourIdx, product.colours.length - 1)]
  const size = product.sizes[Math.min(sizeIdx, product.sizes.length - 1)]

  const panels = [
    { title: 'Details', body: product.details },
    {
      title: 'Shipping',
      body:
        'US orders ship from our New Jersey warehouse and arrive in two to six business days. UK and Australia ship tracked and take eight to twelve days. Duties are paid by us on US orders; UK VAT is included in the price you see.'
    },
    {
      title: 'Returns',
      body:
        'Thirty days from delivery, unused and in its packaging, for a full refund to the original payment method. Write to [SUPPORT EMAIL] and we send a label. Refunds are processed within two working days of the piece reaching us.'
    }
  ]

  const onAdd = () => {
    add({
      id: `${product.slug}--${colour.name}--${size.label}`,
      slug: product.slug,
      name: product.name,
      variant: product.sizes.length > 1 ? `${colour.name} · ${size.label}, ${size.sub}` : colour.name,
      price: size.price,
      qty,
      tone: colour.tones[0]
    })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2200)
  }

  return (
    <>
      <div className="wrap" style={{ paddingTop: 22, paddingBottom: 22, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        <Link to="/collection" style={{ color: 'var(--muted)' }}>Shop</Link>
        {' / '}
        <Link to="/collection" style={{ color: 'var(--muted)' }}>{product.category}</Link>
        {' / '}
        {product.name}
      </div>

      <section className="wrap pdp" style={{ paddingBottom: 88 }}>
        <div className="pdp-gallery">
          <div className="pdp-thumbs">
            {shotLabels.map((label, i) => (
              <button
                key={label}
                aria-label={label}
                onClick={() => setShot(i)}
                style={{
                  height: 84,
                  width: 84,
                  padding: 0,
                  backgroundImage: colour.tones[i % colour.tones.length],
                  border: i === shot ? '1px solid var(--ink)' : '1px solid var(--line)',
                  opacity: i === shot ? 1 : 0.72
                }}
              />
            ))}
          </div>
          <div className="ph pdp-main" style={{ backgroundImage: colour.tones[shot % colour.tones.length] }}>
            <span className="ph-tag">{`${shotLabels[shot]} — ${colour.name}`}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 26, paddingTop: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="eyebrow">{product.category} — in stock, New Jersey</div>
            <h1 className="disp" style={{ margin: 0, fontSize: 'clamp(32px, 3.4vw, 46px)', lineHeight: 1.05 }}>{product.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 24 }}>{money(size.price)}</span>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>Free shipping over $75</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', gap: 3 }}>
                {[0, 1, 2, 3, 4].map((s) => <StarIcon key={s} />)}
              </div>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>[RATING] from [REVIEW COUNT] verified reviews</span>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.72, color: 'var(--body)' }}>{product.blurb}</p>

          <div className="rule" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="eyebrow">Colour</span>
              <span style={{ fontSize: 13, color: 'var(--body)' }}>{colour.name}</span>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {product.colours.map((c, i) => (
                <button
                  key={c.name}
                  aria-label={c.name}
                  onClick={() => setColourIdx(i)}
                  style={{
                    height: 34,
                    width: 34,
                    borderRadius: '50%',
                    background: c.swatch,
                    boxShadow: i === colourIdx
                      ? '0 0 0 1px var(--bone) inset, 0 0 0 1.5px var(--ink)'
                      : '0 0 0 1px rgba(20,19,14,0.16)'
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="eyebrow">Size</span>
              <span style={{ fontSize: 12, color: 'var(--muted)' }}>{size.sub}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(2, product.sizes.length)}, minmax(0, 1fr))`, gap: 10 }}>
              {product.sizes.map((z, i) => (
                <button
                  key={z.label}
                  onClick={() => setSizeIdx(i)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 4,
                    padding: '14px 16px',
                    minHeight: 48,
                    textAlign: 'left',
                    background: i === sizeIdx ? 'var(--ink)' : 'transparent',
                    color: i === sizeIdx ? 'var(--bone)' : 'var(--ink)',
                    border: i === sizeIdx ? '1px solid var(--ink)' : '1px solid var(--line-strong)'
                  }}
                >
                  <span style={{ fontSize: 14 }}>{z.label}</span>
                  <span style={{ fontSize: 12, opacity: 0.62 }}>{z.sub} · {money(z.price)}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'stretch', flexWrap: 'wrap' }}>
            <div className="stepper">
              <button aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <button className="btn" style={{ flexGrow: 1 }} onClick={onAdd}>
              {added ? 'Added to bag' : 'Add to bag'}
            </button>
          </div>

          <button className="btn-paypal">Pay with PayPal</button>

          <div className="notice">
            <div className="notice-row">
              <TruckIcon />
              <span>In stock in New Jersey. Order today and it arrives <strong style={{ fontWeight: 500 }}>[DATE RANGE]</strong> in the US, 8–12 days elsewhere.</span>
            </div>
            <div className="notice-row">
              <ReturnIcon />
              <span>Thirty days to send it back, refunded in full.</span>
            </div>
          </div>

          <div>
            {panels.map((p, i) => (
              <div className="acc" key={p.title}>
                <button onClick={() => setOpenPanel(openPanel === i ? -1 : i)} aria-expanded={openPanel === i}>
                  <span>{p.title}</span>
                  <span style={{ fontSize: 18, color: 'var(--muted)' }}>{openPanel === i ? '−' : '+'}</span>
                </button>
                {openPanel === i ? <p>{p.body}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ borderTop: '1px solid var(--line)', paddingTop: 80, paddingBottom: 96 }}>
        <h2 className="disp" style={{ margin: '0 0 34px', fontSize: 36 }}>Goes with it</h2>
        <div className="grid-3">
          {related.map((p) => <ProductCard key={p.slug} product={p} height={340} />)}
        </div>
      </section>
    </>
  )
}
