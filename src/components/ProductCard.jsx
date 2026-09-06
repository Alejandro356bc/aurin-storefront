import { Link } from 'react-router-dom'
import Placeholder from './Placeholder'
import { money } from '../data/products'

export default function ProductCard({ product, height = 372 }) {
  return (
    <Link className="card" to={`/product/${product.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Placeholder tone={product.tone} label="Product image" height={height} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div className="card-title">
          <span>{product.name}</span>
          <span style={{ color: 'var(--body)' }}>{money(product.price)}</span>
        </div>
        <span className="eyebrow">{product.category}</span>
      </div>
    </Link>
  )
}
