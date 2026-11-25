import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { BookOpen, Building2, GraduationCap, Microscope, type LucideIcon } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { beneficiaries, images } from '@/content/research'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/significance')({
  head: () => ({ meta: [{ title: 'Significance · Digital Learning Aids' }] }),
  component: SignificancePage,
})

const icons: Record<(typeof beneficiaries)[number]['id'], LucideIcon> = {
  students: GraduationCap,
  faculty: BookOpen,
  admin: Building2,
  researchers: Microscope,
}

function SignificancePage() {
  const [sel, setSel] = useState(0)
  const b = beneficiaries[sel]
  const Icon = icons[b.id]

  return (
    <>
      <PageHero
        chapter="03"
        eyebrow="Significance of the Topic"
        title={
          <>
            Evidence that helps freshmen <span className="text-primary">learn better</span> from day one.
          </>
        }
        lede="This study shows how digital learning resources affect first-year engineering students’ performance and their academic transition. Four groups stand to benefit."
        image={images.classroom}
        imageAlt="An engineering professor points to a circuit simulation on a large screen while freshmen take notes on laptops and tablets"
      />

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Who benefits" title="Select a group to see what the findings mean for them" />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div role="tablist" aria-label="Beneficiaries" aria-orientation="vertical" className="grid gap-2">
              {beneficiaries.map((x, i) => {
                const I = icons[x.id]
                const on = i === sel
                return (
                  <button
                    key={x.id}
                    role="tab"
                    type="button"
                    aria-selected={on}
                    aria-controls="beneficiary-panel"
                    onClick={() => setSel(i)}
                    className={cn(
                      'group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all motion-reduce:transition-none',
                      on ? 'border-primary bg-primary text-primary-foreground shadow-lg' : 'border-border bg-card hover:border-primary/50',
                    )}
                  >
                    <span className={cn('grid size-11 shrink-0 place-items-center rounded-xl', on ? 'bg-primary-foreground/15' : 'bg-primary/10 text-primary')}>
                      <I className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex-1">
                      <span className={cn('block font-mono text-[11px] uppercase tracking-widest', on ? 'text-primary-foreground/70' : 'text-muted-foreground')}>
                        0{i + 1}
                      </span>
                      <span className="block font-display text-lg font-semibold">{x.who}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div id="beneficiary-panel" role="tabpanel" aria-live="polite" className="relative h-full overflow-hidden rounded-3xl bg-ink p-7 text-ink-foreground sm:p-10">
              <div className="bg-blueprint-dark absolute inset-0" aria-hidden="true" />
              <Icon className="absolute -bottom-6 -right-6 size-48 text-ink-foreground/[0.05]" aria-hidden="true" />
              <div key={b.id} className="rise relative [animation-duration:0.45s]">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{b.who}</p>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{b.headline}</h2>
                <p className="mt-4 max-w-lg leading-relaxed text-ink-foreground/75">{b.body}</p>
                <ul className="mt-8 grid gap-3">
                  {b.gains.map((g) => (
                    <li key={g} className="flex items-center gap-3 rounded-xl border border-ink-foreground/10 bg-ink-foreground/[0.04] px-4 py-3 text-sm">
                      <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto grid max-w-content gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1fr] md:items-center">
          <Reveal>
            <SectionHeading
              kicker="The bigger picture"
              title="From guesswork to informed choices"
              body="Freshmen, educators, and administrators already spend time and money on digital tools. This research gives them a way to know which ones are actually worth it."
            />
          </Reveal>
          <Reveal delay={100}>
            <ol className="space-y-4">
              {[
                { a: 'Students', b: 'pick the tools that strengthen fundamentals' },
                { a: 'Faculty', b: 'integrate and guide tool use early in the year' },
                { a: 'Administrators', b: 'invest in licenses and infrastructure that work' },
                { a: 'Researchers', b: 'extend the evidence to other campuses and programs' },
              ].map((s, i) => (
                <li key={s.a} className="flex items-start gap-4">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs text-primary-foreground">{i + 1}</span>
                  <p className="leading-relaxed">
                    <strong className="font-semibold">{s.a}</strong> <span className="text-muted-foreground">{s.b}</span>
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  )
}
