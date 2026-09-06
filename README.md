# Aurin — storefront prototype

A React front end for the Aurin storefront design. Six routes, a working cart,
and a three-step checkout. Nothing is connected to a backend: no payments are
taken and no orders exist.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

Node 18 or newer.

## What is here

| Route | File | What works |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Category filter on the featured row, newsletter sign-up |
| `/collection` | `src/pages/Collection.jsx` | Category filter and price sort |
| `/product/:slug` | `src/pages/Product.jsx` | Gallery, colour, size, quantity, add to bag, accordions |
| `/cart` | `src/pages/Cart.jsx` | Quantity, remove, live totals, free-shipping progress |
| `/checkout` | `src/pages/Checkout.jsx` | Three steps, country-dependent delivery and duty copy, PayPal or card |
| `/about` | `src/pages/About.jsx` | Static |

Cart state lives in `src/context/CartContext.jsx` and persists to
`localStorage` under `aurin.cart.v1`.

## What to replace before this is a real store

- **Every image.** They are CSS gradient blocks labelled "product image".
  Photograph your samples and swap them in.
- **`src/data/products.js`.** Names, prices, copy and variants are samples in
  the $40–80 band. This file is the whole catalogue.
- **Anything in `[SQUARE BRACKETS]`** — support email, founder name, review
  text and counts, the delivery date range.
- **"Aurin".** Placeholder name. Clear it on IP India, USPTO, the .com and the
  social handles first.

## What this is not

No backend, no payment gateway, no inventory, no orders, no analytics. The
"Pay with PayPal" and card buttons are UI only. On the real store this design
becomes a Shopify Liquid theme (Horizon or Dawn + Shopify CLI) so that
checkout, apps, pixels and the theme editor keep working — this React app is
the visual and interaction reference for that build.

## Design decisions carried from the business plan

- Prices $40–80, free shipping at $75 to push order value
- Delivery stated honestly: 2–6 days US from New Jersey, 8–12 days tracked elsewhere
- Duty paid by the seller; UK VAT shown inclusive at checkout
- PayPal beside card everywhere a payment can start
- No countdown timers, no invented scarcity, no fabricated reviews
