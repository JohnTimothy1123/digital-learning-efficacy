import { Link, useLocation } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { course, navItems, siteTitle } from '@/content/research'
import { LogoMark } from './logo'

export function PageStepper() {
  const { pathname } = useLocation()
  const idx = navItems.findIndex((n) => n.to === pathname)
  if (idx === -1) return null
  const prev = navItems[idx - 1]
  const next = navItems[idx + 1]

  return (
    <nav aria-label="Section navigation" className="mx-auto max-w-content px-4 py-12 sm:px-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link
            to={prev.to}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <ArrowLeft className="size-5 text-muted-foreground transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" />
            <span>
              <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">Previous</span>
              <span className="font-display text-lg font-semibold">{prev.label}</span>
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && (
          <Link
            to={next.to}
            className="group flex items-center justify-end gap-4 rounded-xl border border-border bg-card p-5 text-right transition-colors hover:border-primary/50"
          >
            <span>
              <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">Next</span>
              <span className="font-display text-lg font-semibold">{next.label}</span>
            </span>
            <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          </Link>
        )}
      </div>
    </nav>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="bg-blueprint-dark absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="size-9" />
            <span className="font-display text-xl font-bold">Digital Learning Aids</span>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-foreground/70">{siteTitle}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink-foreground/50">
            {course.program} · {course.campus}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-foreground/50">Sections</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-ink-foreground/80 transition-colors hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="relative border-t border-ink-foreground/10">
        <p className="mx-auto max-w-content px-4 py-5 text-xs text-ink-foreground/50 sm:px-6">
          An academic research website. Data and findings are cited from the published studies listed on the References page.
        </p>
      </div>
    </footer>
  )
}
