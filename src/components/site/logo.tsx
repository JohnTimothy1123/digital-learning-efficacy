/** Chip-shaped mark: a microcontroller with a lit pin, for the CpE theme. */
export function LogoMark({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="7" y="7" width="18" height="18" rx="3.5" fill="var(--primary)" />
      <rect x="11.5" y="11.5" width="9" height="9" rx="1.5" fill="var(--primary-foreground)" opacity="0.92" />
      <circle cx="16" cy="16" r="2.2" fill="var(--accent)" />
      {[11, 16, 21].map((p) => (
        <g key={p} stroke="var(--foreground)" strokeWidth="1.6" strokeLinecap="round">
          <line x1={p} y1="2.5" x2={p} y2="6" />
          <line x1={p} y1="26" x2={p} y2="29.5" />
          <line x1="2.5" y1={p} x2="6" y2={p} />
          <line x1="26" y1={p} x2="29.5" y2={p} />
        </g>
      ))}
    </svg>
  )
}
