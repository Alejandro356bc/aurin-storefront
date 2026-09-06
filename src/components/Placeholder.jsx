export default function Placeholder({ tone, label, height, style }) {
  return (
    <div className="ph" style={{ backgroundImage: tone, height, ...style }}>
      {label ? <span className="ph-tag">{label}</span> : null}
    </div>
  )
}
