import { useEffect, useRef, useState } from 'react'
import { Table2, BarChart3 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import {
  delosReyesEngagement,
  delosReyesMean,
  engagementScale,
  siegaDevices,
  siegaStats,
  tapioFactors,
} from '@/content/research'

/* Series colors validated for colorblind separation: before = blue, after = crimson. */
const BEFORE = 'var(--chart-2)'
const AFTER = 'var(--chart-1)'

function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, seen }
}

function ViewToggle({
  table,
  onChange,
  label,
}: {
  table: boolean
  onChange: (v: boolean) => void
  label: string
}) {
  return (
    <div role="group" aria-label={`${label} view`} className="inline-flex rounded-lg border border-border bg-background p-0.5 text-xs font-medium">
      {[
        { v: false, icon: BarChart3, text: 'Chart' },
        { v: true, icon: Table2, text: 'Table' },
      ].map(({ v, icon: Icon, text }) => (
        <button
          key={text}
          type="button"
          aria-pressed={table === v}
          onClick={() => onChange(v)}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 transition-colors',
            table === v ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground',
          )}
        >
          <Icon className="size-3.5" aria-hidden="true" />
          {text}
        </button>
      ))}
    </div>
  )
}

function verbal(v: number) {
  if (v >= 3.26) return 'To a great extent'
  if (v >= 2.51) return 'To a moderate extent'
  if (v >= 1.76) return 'To some extent'
  return 'Not at all'
}

/* ---------- Delos Reyes: before vs. after dumbbell ---------- */

export function EngagementDumbbell() {
  const { ref, seen } = useInView<HTMLDivElement>()
  const [table, setTable] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const pos = (v: number) => ((v - 1) / 3) * 100

  return (
    <figure className="rounded-2xl border border-border bg-card p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <figcaption>
          <p className="font-display text-lg font-semibold">Student engagement before and after multimedia</p>
          <p className="mt-1 text-sm text-muted-foreground">Mean rating, 1 (not at all) to 4 (to a great extent) · Delos Reyes (2025)</p>
        </figcaption>
        <ViewToggle table={table} onChange={setTable} label="Engagement" />
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground" aria-hidden={table}>
        <span className="inline-flex items-center gap-2">
          <span className="size-2.5 rounded-full" style={{ background: BEFORE }} /> Before
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="size-2.5 rounded-full" style={{ background: AFTER }} /> After
        </span>
      </div>

      {table ? (
        <div className="mt-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Indicator</TableHead>
                <TableHead className="text-right">Before</TableHead>
                <TableHead className="text-right">After</TableHead>
                <TableHead className="text-right">Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {delosReyesEngagement.map((r) => (
                <TableRow key={r.indicator}>
                  <TableCell className="whitespace-normal">{r.indicator}</TableCell>
                  <TableCell className="text-right font-mono">{r.before.toFixed(2)}</TableCell>
                  <TableCell className="text-right font-mono">{r.after.toFixed(2)}</TableCell>
                  <TableCell className="text-right font-mono">+{(r.after - r.before).toFixed(2)}</TableCell>
                </TableRow>
              ))}
              <TableRow className="font-semibold">
                <TableCell>Overall mean</TableCell>
                <TableCell className="text-right font-mono">{delosReyesMean.before.toFixed(2)}</TableCell>
                <TableCell className="text-right font-mono">{delosReyesMean.after.toFixed(2)}</TableCell>
                <TableCell className="text-right font-mono">+{(delosReyesMean.after - delosReyesMean.before).toFixed(2)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div ref={ref} className="mt-6">
          <div className="grid gap-x-4 px-2 sm:grid-cols-[38%_1fr]" aria-hidden="true">
            <span className="hidden sm:block" />
            <div className="flex justify-between font-mono text-[11px] text-muted-foreground">
              {[1, 2, 3, 4].map((t) => (
                <span key={t} className="flex w-0 justify-center">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <ul className="mt-2 space-y-1">
            {delosReyesEngagement.map((r, i) => {
              const a = pos(r.before)
              const b = seen ? pos(r.after) : a
              const isActive = active === i
              return (
                <li key={r.indicator}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(i)}
                    onBlur={() => setActive(null)}
                    aria-label={`${r.indicator}: before ${r.before}, after ${r.after}`}
                    className={cn(
                      'grid w-full items-center gap-x-4 gap-y-1 rounded-lg px-2 py-2.5 text-left transition-colors sm:grid-cols-[38%_1fr]',
                      isActive ? 'bg-muted' : 'hover:bg-muted/60',
                    )}
                  >
                    <span className="text-sm leading-snug">{r.indicator}</span>
                    <span className="relative block h-6">
                      {[0, 33.333, 66.666, 100].map((g) => (
                        <span key={g} className="absolute inset-y-0 w-px bg-border" style={{ left: `${g}%` }} aria-hidden="true" />
                      ))}
                      <span
                        className="absolute top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-foreground/25 transition-all duration-[1100ms] ease-out motion-reduce:transition-none"
                        style={{ left: `${a}%`, width: `${b - a}%`, transitionDelay: `${i * 90}ms` }}
                        aria-hidden="true"
                      />
                      <span
                        className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-card"
                        style={{ left: `${a}%`, background: BEFORE }}
                        aria-hidden="true"
                      />
                      <span
                        className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-card transition-all duration-[1100ms] ease-out motion-reduce:transition-none"
                        style={{ left: `${b}%`, background: AFTER, transitionDelay: `${i * 90}ms` }}
                        aria-hidden="true"
                      />
                      {isActive && (
                        <span
                          className="absolute -top-9 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 font-mono text-[11px] text-background shadow-lg"
                          style={{ left: `${(a + b) / 2}%` }}
                        >
                          {r.before.toFixed(2)} → {r.after.toFixed(2)} · +{(r.after - r.before).toFixed(2)}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="mt-5 grid gap-3 border-t border-border pt-5 sm:grid-cols-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Mean before</p>
              <p className="font-display text-3xl font-bold">{delosReyesMean.before.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">{verbal(delosReyesMean.before)}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Mean after</p>
              <p className="font-display text-3xl font-bold text-primary">{delosReyesMean.after.toFixed(2)}</p>
              <p className="text-xs text-muted-foreground">{verbal(delosReyesMean.after)}</p>
            </div>
            <div className="text-xs leading-relaxed text-muted-foreground">
              <p className="mb-1 font-mono uppercase tracking-widest">Scale</p>
              {engagementScale.map((s) => (
                <p key={s.range}>
                  <span className="font-mono">{s.range}</span> · {s.label}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </figure>
  )
}

/* ---------- Siega: device distribution ---------- */

export function DeviceBars() {
  const { ref, seen } = useInView<HTMLDivElement>()
  const [metric, setMetric] = useState<'percent' | 'frequency'>('percent')
  const [table, setTable] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const max = metric === 'percent' ? 30 : 200

  return (
    <figure className="rounded-2xl border border-border bg-card p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <figcaption>
          <p className="font-display text-lg font-semibold">Digital learning aids used by CpE students</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {siegaStats.respondents} respondents, {siegaStats.responses} responses (multiple answers) · Siega (2025)
          </p>
        </figcaption>
        <div className="flex flex-wrap gap-2">
          <div role="group" aria-label="Metric" className="inline-flex rounded-lg border border-border bg-background p-0.5 text-xs font-medium">
            {(['percent', 'frequency'] as const).map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={metric === m}
                onClick={() => setMetric(m)}
                className={cn(
                  'rounded-md px-2.5 py-1.5 capitalize transition-colors',
                  metric === m ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {m}
              </button>
            ))}
          </div>
          <ViewToggle table={table} onChange={setTable} label="Devices" />
        </div>
      </div>

      {table ? (
        <div className="mt-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Frequency</TableHead>
                <TableHead className="text-right">Percent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {siegaDevices.map((d) => (
                <TableRow key={d.category}>
                  <TableCell>{d.category}</TableCell>
                  <TableCell className="text-right font-mono">{d.frequency}</TableCell>
                  <TableCell className="text-right font-mono">{d.percent}%</TableCell>
                </TableRow>
              ))}
              <TableRow className="font-semibold">
                <TableCell>Total</TableCell>
                <TableCell className="text-right font-mono">{siegaStats.responses}</TableCell>
                <TableCell className="text-right font-mono">100%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div ref={ref} className="mt-6 space-y-[2px]">
          {siegaDevices.map((d, i) => {
            const v = metric === 'percent' ? d.percent : d.frequency
            const w = seen ? (v / max) * 100 : 0
            const dim = active !== null && active !== d.category
            return (
              <div
                key={d.category}
                className="grid grid-cols-[8.5rem_1fr] items-center gap-3 py-1 sm:grid-cols-[12rem_1fr]"
                onMouseEnter={() => setActive(d.category)}
                onMouseLeave={() => setActive(null)}
              >
                <span className={cn('text-sm transition-opacity', dim && 'opacity-50')}>{d.category}</span>
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      'h-5 rounded-r-[4px] transition-[width,opacity] duration-700 ease-out motion-reduce:transition-none',
                      dim && 'opacity-40',
                    )}
                    style={{ width: `${w}%`, background: AFTER, transitionDelay: `${i * 60}ms`, minWidth: seen ? 3 : 0 }}
                  />
                  <span className={cn('font-mono text-xs tabular-nums transition-opacity', dim && 'opacity-50')}>
                    {metric === 'percent' ? `${v}%` : v}
                  </span>
                </span>
              </div>
            )
          })}
        </div>
      )}
    </figure>
  )
}

/* ---------- Tapio & Gapol: reliability ---------- */

export function ReliabilityBars() {
  const { ref, seen } = useInView<HTMLDivElement>()
  const [open, setOpen] = useState(0)
  const threshold = 0.7

  return (
    <figure className="rounded-2xl border border-border bg-card p-5 sm:p-7">
      <figcaption>
        <p className="font-display text-lg font-semibold">Three factors behind students’ perceptions of digital tools</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Reliability (Cronbach’s α, 0–1) for each factor · Tapio & Gapol (2025). Select a factor to read what it measures.
        </p>
      </figcaption>
      <div ref={ref} className="relative mt-6 space-y-3">
        {tapioFactors.map((f, i) => (
          <button
            key={f.factor}
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(i)}
            className={cn(
              'block w-full rounded-xl border p-4 text-left transition-colors',
              open === i ? 'border-primary/50 bg-primary/[0.04]' : 'border-transparent hover:bg-muted/60',
            )}
          >
            <span className="flex items-baseline justify-between gap-3">
              <span className="font-medium">{f.factor}</span>
              <span className="font-mono text-sm tabular-nums">α = {f.alpha.toFixed(3)}</span>
            </span>
            <span className="relative mt-2.5 block h-3 rounded-full bg-muted">
              <span
                className="absolute inset-y-0 left-0 rounded-r-[4px] transition-[width] duration-700 ease-out motion-reduce:transition-none"
                style={{ width: seen ? `${f.alpha * 100}%` : 0, background: AFTER, transitionDelay: `${i * 120}ms` }}
              />
              <span
                className="absolute -inset-y-1 w-px bg-foreground/60"
                style={{ left: `${threshold * 100}%` }}
                aria-hidden="true"
              />
            </span>
            {open === i && (
              <span className="mt-3 block text-sm text-muted-foreground">
                {f.description}. <span className="font-mono text-xs">{f.items} items</span>
              </span>
            )}
          </button>
        ))}
        <p className="pl-4 text-xs text-muted-foreground">
          The vertical line marks α = 0.70, the common threshold for acceptable reliability. All three factors exceed it.
        </p>
      </div>
    </figure>
  )
}

/* ---------- Siega: correlation meter ---------- */

export function CorrelationMeter() {
  const { ref, seen } = useInView<HTMLElement>()
  const r = siegaStats.r
  const pos = ((r + 1) / 2) * 100
  const bands = [
    { from: -1, to: -0.5, label: 'Strong −' },
    { from: -0.5, to: -0.1, label: 'Weak −' },
    { from: -0.1, to: 0.1, label: 'None' },
    { from: 0.1, to: 0.5, label: 'Weak +' },
    { from: 0.5, to: 1, label: 'Strong +' },
  ]
  return (
    <figure ref={ref} className="rounded-2xl bg-ink p-6 text-ink-foreground sm:p-8">
      <figcaption className="font-mono text-xs uppercase tracking-widest text-ink-foreground/60">
        Technology use vs. academic performance · Siega (2025)
      </figcaption>
      <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-2">
        <p className="font-display text-6xl font-extrabold leading-none text-accent">r = {r}</p>
        <p className="pb-1 font-mono text-sm text-ink-foreground/80">p = {siegaStats.p} &lt; 0.05</p>
      </div>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-foreground/75">
        A weak but statistically significant positive relationship: more technology use goes with slightly better
        performance, though it does not guarantee success.
      </p>
      <div className="relative mt-8">
        <div className="flex h-3 gap-[2px] overflow-hidden rounded-full">
          {bands.map((b) => (
            <span
              key={b.label}
              className={cn('h-full', b.label === 'Weak +' ? 'bg-accent/70' : 'bg-ink-foreground/15')}
              style={{ width: `${((b.to - b.from) / 2) * 100}%` }}
            />
          ))}
        </div>
        <span
          className="absolute -top-2 h-7 w-1 -translate-x-1/2 rounded-full bg-ink-foreground shadow-[0_0_0_3px_var(--ink)] transition-[left] duration-1000 ease-out motion-reduce:transition-none"
          style={{ left: `${seen ? pos : 50}%` }}
          aria-hidden="true"
        />
        <div className="mt-3 flex justify-between font-mono text-[11px] text-ink-foreground/55">
          <span>−1</span>
          <span>0</span>
          <span>+1</span>
        </div>
      </div>
    </figure>
  )
}
