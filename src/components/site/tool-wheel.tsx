import { useState } from 'react'
import {
  BookCheck,
  ClipboardCheck,
  Cloud,
  FileText,
  FlaskConical,
  Gamepad2,
  GraduationCap,
  Library,
  Presentation,
  Video,
  type LucideIcon,
} from 'lucide-react'
import { educationTools } from '@/content/research'
import { cn } from '@/lib/utils'

const icons: Record<(typeof educationTools)[number]['id'], LucideIcon> = {
  lms: GraduationCap,
  video: Video,
  exam: ClipboardCheck,
  cloud: Cloud,
  docs: FileText,
  game: Gamepad2,
  library: Library,
  lab: FlaskConical,
  board: Presentation,
  grade: BookCheck,
}

/**
 * Interactive version of Figure 1 (Dancsa et al., 2023): the ten categories of
 * Education 4.0 tools arranged around a hub. Select a tool to read about it.
 */
export function ToolWheel() {
  const [sel, setSel] = useState(0)
  const tool = educationTools[sel]
  const Icon = icons[tool.id]
  const n = educationTools.length

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
      {/* Wheel (tablet and up) */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[34rem] sm:block">
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
          <circle cx="50" cy="50" r="38" fill="none" stroke="var(--border)" strokeWidth="0.4" strokeDasharray="1 1.4" />
          {educationTools.map((t, i) => {
            const a = (i / n) * Math.PI * 2 - Math.PI / 2
            return (
              <line
                key={t.id}
                x1="50"
                y1="50"
                x2={50 + Math.cos(a) * 38}
                y2={50 + Math.sin(a) * 38}
                stroke={i === sel ? 'var(--primary)' : 'var(--border)'}
                strokeWidth={i === sel ? 0.7 : 0.3}
                className="transition-all duration-300"
              />
            )
          })}
        </svg>
        <div className="absolute left-1/2 top-1/2 grid size-[34%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink p-3 text-center text-ink-foreground shadow-xl">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-foreground/60">Education</p>
            <p className="font-display text-2xl font-extrabold leading-none text-accent md:text-3xl">4.0</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-foreground/60">Tools</p>
          </div>
        </div>
        {educationTools.map((t, i) => {
          const a = (i / n) * Math.PI * 2 - Math.PI / 2
          const x = 50 + Math.cos(a) * 38
          const y = 50 + Math.sin(a) * 38
          const I = icons[t.id]
          const on = i === sel
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSel(i)}
              onMouseEnter={() => setSel(i)}
              aria-pressed={on}
              aria-label={t.name}
              className={cn(
                'group absolute grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border bg-card shadow-sm transition-all duration-300 md:size-16 motion-reduce:transition-none',
                on ? 'scale-110 border-primary bg-primary text-primary-foreground shadow-lg' : 'border-border hover:border-primary/60',
              )}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <I className="size-6" aria-hidden="true" />
            </button>
          )
        })}
      </div>

      {/* Chips (mobile) */}
      <div className="grid grid-cols-2 gap-2 sm:hidden">
        {educationTools.map((t, i) => {
          const I = icons[t.id]
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSel(i)}
              aria-pressed={i === sel}
              className={cn(
                'flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition-colors',
                i === sel ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card',
              )}
            >
              <I className="size-4 shrink-0" aria-hidden="true" />
              {t.name}
            </button>
          )
        })}
      </div>

      {/* Detail */}
      <div aria-live="polite" className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {String(sel + 1).padStart(2, '0')} / {n}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold">{tool.name}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{tool.body}</p>
        <div className="mt-5 rounded-lg bg-muted px-4 py-3 text-sm">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">In a CpE freshman’s week</span>
          <p className="mt-1">{tool.example}</p>
        </div>
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            onClick={() => setSel((sel - 1 + n) % n)}
            className="rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Previous tool
          </button>
          <button
            type="button"
            onClick={() => setSel((sel + 1) % n)}
            className="rounded-lg bg-foreground px-3 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Next tool
          </button>
        </div>
      </div>
    </div>
  )
}
