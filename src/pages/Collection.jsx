import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

const sorts = ['Newest', 'Price low', 'Price high']

export default function Collection() {
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState('Newest')

  const shown = useMemo(() => {
    const list = cat === 'All' ? products.slice() : products.filter((p) => p.category === cat)
    if (sort === 'Price low') list.sort((a, b) => a.price - b.price)
    if (sort === 'Price high') list.sort((a, b) => b.price - a.price)
    return list
  }, [cat, sort])

  return (
    <>
      <section className="wrap" style={{ paddingTop: 72, paddingBottom: 40, display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 860 }}>
        <div className="eyebrow">Everything in stock — {products.length} pieces</div>
        <h1 className="disp" style={{ margin: 0, fontSize: 'clamp(38px, 4.4vw, 62px)', lineHeight: 1.02 }}>The full range</h1>
        <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: 'var(--body)' }}>
          Eight things. Each one was ordered as a sample, lived with for a fortnight, and kept.
          When something new goes on, something usually comes off.
        </p>
      </section>

      <section className="wrap">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
            padding: '18px 0'
          }}
        >
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="eyebrow" style={{ paddingRight: 8 }}>Filter</span>
            {categories.map((c) => (
              <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="eyebrow" style={{ paddingRight: 8 }}>Sort</span>
            {sorts.map((o) => (
              <button key={o} className={'chip' + (o === sort ? ' on' : '')} onClick={() => setSort(o)}>{o}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 40, paddingBottom: 96 }}>
        {shown.length === 0 ? (
          <div style={{ padding: '90px 0', textAlign: 'center' }}>
            <p style={{ margin: 0, fontSize: 18, color: 'var(--muted)' }}>Nothing in that range yet. Try another filter.</p>
          </div>
        ) : (
          <div className="grid-4">
            {shown.map((p) => <ProductCard key={p.slug} product={p} height={396} />)}
          </div>
        )}
      </section>
    </>
  )
}
