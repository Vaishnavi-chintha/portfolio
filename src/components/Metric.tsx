export default function Metric({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="metric">
      <div className="metric__value">{value}</div>
      <div className="metric__label">{label}</div>
      {sub && <div className="metric__sub">{sub}</div>}
    </div>
  )
}
