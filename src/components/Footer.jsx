import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.6fr) repeat(3, minmax(0, 1fr))',
          gap: 48,
          paddingBottom: 40
        }}
        className="footer-grid"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="disp" style={{ fontSize: 24, letterSpacing: '0.34em', color: '#F6F4EF' }}>AURIN</div>
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.7, maxWidth: 300 }}>
            Considered objects for everyday use. Registered in Pune, India. Shipped from the United States.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="footer-head">Shop</span>
          <Link to="/collection">All products</Link>
          <Link to="/collection">New arrivals</Link>
          <a href="#gift-cards">Gift cards</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="footer-head">Help</span>
          <a href="#shipping">Shipping &amp; delivery</a>
          <a href="#returns">Returns &amp; refunds</a>
          <a href="#contact">Contact</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <span className="footer-head">Company</span>
          <Link to="/about">About</Link>
          <a href="#terms">Terms of service</a>
          <a href="#privacy">Privacy policy</a>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
          paddingTop: 32,
          borderTop: '1px solid rgba(246,244,239,0.14)',
          fontSize: 12,
          letterSpacing: '0.06em'
        }}
      >
        <span>© 2026 Aurin. All prices in USD.</span>
        <span>Instagram · Pinterest · YouTube</span>
      </div>
    </footer>
  )
}
