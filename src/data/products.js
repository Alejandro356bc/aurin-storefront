// Sample catalogue. Prices sit in the $40–80 band the business plan calls for.
// Replace names, copy and prices with your real range; every image is a placeholder.

const tones = {
  bone: ['linear-gradient(200deg, #EDE7DA 0%, #D3CAB8 100%)', 'linear-gradient(140deg, #E4DCCB 0%, #C8BFAC 100%)', 'linear-gradient(20deg, #EFEADE 0%, #CFC6B3 100%)', 'linear-gradient(260deg, #E7E0D2 0%, #D5CCBA 100%)'],
  olive: ['linear-gradient(200deg, #CFD0BC 0%, #8E9077 100%)', 'linear-gradient(140deg, #C4C6AF 0%, #83866D 100%)', 'linear-gradient(20deg, #D6D7C5 0%, #969881 100%)', 'linear-gradient(260deg, #CBCCB6 0%, #8A8C72 100%)'],
  ink: ['linear-gradient(200deg, #B6B4AC 0%, #55554D 100%)', 'linear-gradient(140deg, #ACAAA2 0%, #4B4B44 100%)', 'linear-gradient(20deg, #BFBDB5 0%, #5E5E55 100%)', 'linear-gradient(260deg, #B2B0A8 0%, #51514A 100%)']
}

export const shotLabels = ['Main image', 'Detail', 'In use', 'Scale']

export const products = [
  {
    slug: 'fold-weekender',
    name: 'Fold Weekender',
    category: 'Carry',
    price: 74,
    tone: 'linear-gradient(200deg, #E2DACA 0%, #C3B9A4 100%)',
    blurb: 'A soft-structured overnight bag in coated canvas, with a leather base that takes a scuff well. Folds flat when it is empty, which is the only reason we kept it after four weeks of testing.',
    colours: [
      { name: 'Bone', swatch: '#DED6C6', tones: tones.bone },
      { name: 'Olive', swatch: '#5C5E45', tones: tones.olive },
      { name: 'Ink', swatch: '#23241F', tones: tones.ink }
    ],
    sizes: [
      { label: 'Small', sub: '28 litres', price: 74 },
      { label: 'Large', sub: '40 litres', price: 86 }
    ],
    details: 'Coated 18oz canvas, vegetable-tanned leather base and handles, antique-brass hardware. Small holds 28 litres, large holds 40. Weighs 1.1 kg empty. Wipes clean; do not machine wash.'
  },
  {
    slug: 'hallam-wool-throw',
    name: 'Hallam Wool Throw',
    category: 'Home',
    price: 68,
    tone: 'linear-gradient(210deg, #E6DFD0 0%, #C8BFAB 100%)',
    blurb: 'Lambswool woven in a close herringbone, heavy enough to stay where you put it. Warm without the weight of a blanket.',
    colours: [
      { name: 'Oat', swatch: '#DED6C6', tones: tones.bone },
      { name: 'Moss', swatch: '#5C5E45', tones: tones.olive }
    ],
    sizes: [{ label: 'One size', sub: '130 × 180 cm', price: 68 }],
    details: '100% lambswool, 130 × 180 cm, hand-finished fringe. Dry clean only. Weighs 900 g.'
  },
  {
    slug: 'everyday-tote',
    name: 'Everyday Tote',
    category: 'Carry',
    price: 62,
    tone: 'linear-gradient(185deg, #E4DCCC 0%, #BFB6A1 100%)',
    blurb: 'One large compartment, one interior pocket, handles long enough for a shoulder. It does not try to do anything else.',
    colours: [
      { name: 'Bone', swatch: '#DED6C6', tones: tones.bone },
      { name: 'Ink', swatch: '#23241F', tones: tones.ink }
    ],
    sizes: [{ label: 'One size', sub: '38 × 34 × 12 cm', price: 62 }],
    details: 'Waxed cotton canvas with leather handles. Holds a 15-inch laptop. Unlined interior with one slip pocket.'
  },
  {
    slug: 'ashwell-carafe',
    name: 'Ashwell Carafe',
    category: 'Home',
    price: 58,
    tone: 'linear-gradient(155deg, #EDE7DA 0%, #D8CFBD 100%)',
    blurb: 'Hand-blown, slightly irregular, and balanced enough to pour one-handed. The tumbler sits on top as a lid.',
    colours: [{ name: 'Clear', swatch: '#DED6C6', tones: tones.bone }],
    sizes: [{ label: 'One size', sub: '1 litre', price: 58 }],
    details: 'Hand-blown borosilicate glass, 1 litre, with a matching 200 ml tumbler. Dishwasher safe on a gentle cycle.'
  },
  {
    slug: 'nine-slot-organiser',
    name: 'Nine-Slot Organiser',
    category: 'Desk',
    price: 52,
    tone: 'linear-gradient(140deg, #EFE9DC 0%, #D4CBB9 100%)',
    blurb: 'Nine felt-lined compartments in a solid oak frame. Made for the things that otherwise live loose in a drawer.',
    colours: [{ name: 'Oak', swatch: '#DED6C6', tones: tones.bone }],
    sizes: [{ label: 'One size', sub: '32 × 24 × 5 cm', price: 52 }],
    details: 'Solid white oak with wool felt lining. Nine compartments. Oiled finish; re-oil once a year.'
  },
  {
    slug: 'marlowe-desk-tray',
    name: 'Marlowe Desk Tray',
    category: 'Desk',
    price: 46,
    tone: 'linear-gradient(170deg, #E9E3D6 0%, #CEC5B2 100%)',
    blurb: 'A shallow leather tray for keys, cards and whatever comes out of your pockets. Stitched, not glued.',
    colours: [
      { name: 'Tan', swatch: '#DED6C6', tones: tones.bone },
      { name: 'Ink', swatch: '#23241F', tones: tones.ink }
    ],
    sizes: [{ label: 'One size', sub: '22 × 16 cm', price: 46 }],
    details: 'Vegetable-tanned leather, hand-stitched corners, 22 × 16 cm. Develops a patina with use.'
  },
  {
    slug: 'card-wallet',
    name: 'Card Wallet',
    category: 'Carry',
    price: 44,
    tone: 'linear-gradient(195deg, #E7E0D1 0%, #C6BDA8 100%)',
    blurb: 'Four card slots and a centre pocket for folded notes. Thin enough for a front pocket, which is the whole point.',
    colours: [
      { name: 'Bone', swatch: '#DED6C6', tones: tones.bone },
      { name: 'Ink', swatch: '#23241F', tones: tones.ink }
    ],
    sizes: [{ label: 'One size', sub: '10 × 7.5 cm', price: 44 }],
    details: 'Vegetable-tanned leather, four card slots, one note pocket. 10 × 7.5 cm, 3 mm thick.'
  },
  {
    slug: 'stone-soap-dish',
    name: 'Stone Soap Dish',
    category: 'Home',
    price: 41,
    tone: 'linear-gradient(165deg, #ECE6D9 0%, #D1C8B6 100%)',
    blurb: 'Cut from a single piece of marble with a slope that actually drains. Heavy enough that it stays put.',
    colours: [{ name: 'Marble', swatch: '#DED6C6', tones: tones.bone }],
    sizes: [{ label: 'One size', sub: '13 × 9 cm', price: 41 }],
    details: 'Solid marble, 13 × 9 cm, sloped and channelled to drain. Rinse and dry occasionally.'
  }
]

export const categories = ['All', 'Home', 'Carry', 'Desk']

export const findProduct = (slug) => products.find((p) => p.slug === slug)

export const money = (n) => '$' + Number(n).toFixed(2)

export const FREE_SHIPPING_THRESHOLD = 75
export const FLAT_SHIPPING = 8
