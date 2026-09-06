import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { units } = useCart()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const close = () => setOpen(false)

  return (
    <>
      <div className="announce">Ships from our US warehouse — delivered in 2–6 days</div>

      <header className="header">
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
        </button>

        <nav>
          <NavLink to="/collection">Shop</NavLink>
          <NavLink to="/collection">Collections</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Link to="/" className="disp wordmark" onClick={close}>AURIN</Link>

        <div className="head-right">
          <a href="#search" className="desktop-only">Search</a>
          <a href="#account" className="desktop-only">Account</a>
          <Link to="/cart">Bag ({units})</Link>
        </div>
      </header>

      <div className={'mobile-menu' + (open ? ' open' : '')}>
        <Link to="/collection" onClick={close}>Shop</Link>
        <Link to="/about" onClick={close}>About</Link>
        <Link to="/cart" onClick={close}>Bag ({units})</Link>
      </div>

      {pathname !== '/' ? null : null}
    </>
  )
}
