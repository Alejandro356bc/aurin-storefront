const base = {
  fill: 'none',
  strokeWidth: 1.3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export function TruckIcon({ size = 18, color = 'var(--accent)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base}>
      <path d="M3 8h13v9H3z" />
      <path d="M16 11h3.4l1.6 3v3h-5" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  )
}

export function ReturnIcon({ size = 18, color = 'var(--accent)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base}>
      <path d="M20 12a8 8 0 1 1-2.4-5.7" />
      <path d="M20 4v4.4h-4.4" />
    </svg>
  )
}

export function ShieldIcon({ size = 18, color = 'var(--accent)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base}>
      <path d="M12 3.2 19.5 6v5.4c0 4.3-3 8-7.5 9.4-4.5-1.4-7.5-5.1-7.5-9.4V6z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </svg>
  )
}

export function CheckIcon({ size = 20, color = 'var(--accent)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base} strokeWidth={1.4}>
      <path d="m5 12.6 4.4 4.4L19 7.4" />
    </svg>
  )
}

export function StarIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#B9B2A2" strokeWidth={1.3} strokeLinejoin="round">
      <path d="m12 3.6 2.5 5.4 5.9.7-4.4 4 1.2 5.8L12 16.6 6.8 19.5 8 13.7 3.6 9.7l5.9-.7z" />
    </svg>
  )
}

export function LockIcon({ size = 15, color = 'var(--muted)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" stroke={color} {...base} strokeWidth={1.4}>
      <rect x="4.5" y="10.5" width="15" height="9.5" />
      <path d="M8 10.5V7.4a4 4 0 0 1 8 0v3.1" />
    </svg>
  )
}
