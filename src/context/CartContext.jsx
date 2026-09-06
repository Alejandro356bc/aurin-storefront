import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { FREE_SHIPPING_THRESHOLD, FLAT_SHIPPING } from '../data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'aurin.cart.v1'

const read = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(read)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* private mode — cart stays in memory for this session */
    }
  }, [items])

  const value = useMemo(() => {
    const add = (line) => {
      setItems((prev) => {
        const i = prev.findIndex((x) => x.id === line.id)
        if (i === -1) return [...prev, line]
        const next = prev.slice()
        next[i] = { ...next[i], qty: next[i].qty + line.qty }
        return next
      })
    }
    const setQty = (id, qty) =>
      setItems((prev) => prev.map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x)))
    const remove = (id) => setItems((prev) => prev.filter((x) => x.id !== id))
    const clear = () => setItems([])

    const subtotal = items.reduce((a, x) => a + x.price * x.qty, 0)
    const units = items.reduce((a, x) => a + x.qty, 0)
    const freeShipping = subtotal >= FREE_SHIPPING_THRESHOLD
    const shipping = items.length === 0 ? 0 : freeShipping ? 0 : FLAT_SHIPPING
    const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)

    return { items, add, setQty, remove, clear, subtotal, units, shipping, freeShipping, remaining, total: subtotal + shipping }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
