import type { ReactNode } from 'react'
import { CdnImage } from './cdn-image'

/** Shared heading block for inner pages. */
export function PageHero({
  chapter,
  eyebrow,
  title,
  lede,
  image,
  imageAlt = '',
  children,
}: {
  chapter: string
  eyebrow: string
  title: ReactNode
  lede: ReactNode
  image?: string
  imageAlt?: string
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-blueprint absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className={`relative mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:py-20 ${image ? 'lg:grid-cols-[1.1fr_1fr] lg:items-center' : ''}`}>
        <div className="rise">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
            <span className="rounded-sm bg-primary px-1.5 py-0.5 text-primary-foreground">{chapter}</span>
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-reading text-lg leading-relaxed text-muted-foreground">{lede}</p>
          {children}
        </div>
        {image && (
          <div className="rise relative [animation-delay:150ms]">
            <div className="absolute -inset-3 -z-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-dashed border-primary/30" aria-hidden="true" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_oklch(0.22_0.025_258/0.45)]">
              <CdnImage src={image} alt={imageAlt} priority sizes="(min-width: 1024px) 560px, 100vw" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionHeading({
  kicker,
  title,
  body,
  className = '',
}: {
  kicker: string
  title: ReactNode
  body?: ReactNode
  className?: string
}) {
  return (
    <div className={`max-w-reading ${className}`}>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{body}</p>}
    </div>
  )
}

export function Cite({ children }: { children: ReactNode }) {
  return <span className="whitespace-nowrap font-mono text-[0.8em] text-muted-foreground">({children})</span>
}
