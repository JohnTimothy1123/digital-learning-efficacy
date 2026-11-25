import { Fragment, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Presentation, MonitorPlay, Search, X } from 'lucide-react'
import { Cite, PageHero, SectionHeading } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { efficacyConditions, freshmanPath, images, shift } from '@/content/research'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/introduction')({
  head: () => ({ meta: [{ title: 'Introduction & Background · Digital Learning Aids' }] }),
  component: IntroductionPage,
})

function IntroductionPage() {
  return (
    <>
      <PageHero
        chapter="01"
        eyebrow="Introduction & Background"
        title={
          <>
            Engineering class has moved <span className="text-primary">beyond the lecture.</span>
          </>
        }
        lede="Online coding platforms, learning management systems, e-modules, and video tutorials now sit at the center of engineering education. They let students visualize abstract concepts, test code or hardware designs in real time, and review complex lessons at their own pace."
        image={images.desk}
        imageAlt="A student's desk with a laptop showing an online engineering mathematics lesson, handwritten calculus notes, a breadboard with LEDs, a calculator, and a phone"
      />

      {/* What earlier research found */}
      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            kicker="Introduction"
            title="Promising evidence, with a catch"
            body="Earlier studies suggest that well-integrated digital tools can raise engagement, motivation, collaboration, and independent learning."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <article className="h-full rounded-2xl border border-border bg-card p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">4-year multiple-case study</p>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug">
                Digital learning combined with hands-on activities supported students’ discipline-based skills, creativity,
                self-efficacy, collaboration, and self-directed learning.
              </p>
              <p className="mt-4 text-sm">
                <Cite>Ariza & Hernández Hernández, 2026</Cite>
              </p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="h-full rounded-2xl bg-primary p-7 text-primary-foreground">
              <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70">First-year engineering course</p>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug">
                How much students engaged with an educational mobile app was significantly associated with their academic
                performance.
              </p>
              <p className="mt-4 font-mono text-[0.8em] text-primary-foreground/75">(Anwar et al., 2025)</p>
            </article>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="mt-5 flex flex-col gap-5 rounded-2xl border-2 border-dashed border-primary/40 p-7 md:flex-row md:items-center">
            <p className="font-display text-xl font-bold md:w-64 md:shrink-0">The catch</p>
            <p className="leading-relaxed text-muted-foreground">
              Having educational technology does <strong className="text-foreground">not</strong> automatically improve
              academic performance. Whether a tool works depends on how it is integrated into instruction, the guidance
              educators give, and how well students can use it. Its actual effectiveness has to be measured.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Efficacy equation */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="bg-blueprint-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-content px-4 py-16 sm:px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">What decides whether a tool works</p>
          </Reveal>
          <div className="mt-8 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_auto]">
            {efficacyConditions.map((c, i) => (
              <Fragment key={c.title}>
                <Reveal delay={i * 120} className="rounded-2xl border border-ink-foreground/15 bg-ink-foreground/[0.04] p-5">
                  <p className="font-display text-lg font-semibold">{c.title}</p>
                  <p className="mt-2 text-sm text-ink-foreground/70">{c.body}</p>
                </Reveal>
                <span className="grid place-items-center font-display text-3xl text-accent" aria-hidden="true">
                  {i < efficacyConditions.length - 1 ? '×' : '='}
                </span>
              </Fragment>
            ))}
            <Reveal delay={400} className="grid place-items-center rounded-2xl bg-accent px-6 py-5 text-center text-accent-foreground">
              <p className="font-display text-2xl font-extrabold">Efficacy</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Background: the shift */}
      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              kicker="Background"
              title="From lecture hall to technology-enhanced learning"
              body="Engineering instruction has steadily shifted toward environments where students can test circuits or code right away, see abstract theory visually, and revisit difficult topics on their own. Pairing these resources with practical coursework builds technical competence, autonomy, and confidence."
            />
            <p className="mt-4 text-sm">
              <Cite>Ariza & Hernández Hernández, 2026</Cite>
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ShiftCompare />
          </Reveal>
        </div>
      </section>

      {/* Freshman transition */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              kicker="Why freshmen"
              title="The first year is a demanding transition"
              body="CpE freshmen at BatStateU Alangilan start with uneven technical backgrounds, yet must quickly master the subjects that every later course builds on."
            />
          </Reveal>
          <ol className="relative mt-12 grid gap-6 md:grid-cols-4">
            <span className="absolute left-0 right-0 top-5 hidden h-0.5 bg-gradient-to-r from-chart-2 via-primary to-accent md:block" aria-hidden="true" />
            {freshmanPath.map((s, i) => (
              <li key={s.step} className="relative">
                <Reveal delay={i * 110}>
                  <span className="relative z-10 grid size-10 place-items-center rounded-full border-2 border-primary bg-background font-mono text-sm font-medium text-primary">
                    {s.step}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={200}>
            <p className="mt-12 max-w-reading rounded-xl bg-card p-5 text-sm leading-relaxed text-muted-foreground">
              Because first-year engineering students stand to benefit from well-structured educational technology{' '}
              <Cite>Anwar et al., 2025</Cite>, understanding how these aids perform during this period matters.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Research gap */}
      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:items-center md:p-12">
            <span className="grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Search className="size-7" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The research gap</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Little local evidence exists.</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                Digital platforms are common in engineering classrooms, but few studies examine whether they actually help or
                hinder incoming students at BatStateU Alangilan. This study aims to identify what works, uncover learning
                barriers, and improve how technology supports early engineering education.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

function ShiftCompare() {
  const [mode, setMode] = useState<'before' | 'after'>('after')
  const data = shift[mode]
  const Icon = mode === 'before' ? Presentation : MonitorPlay

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div role="tablist" aria-label="Compare learning environments" className="grid grid-cols-2 gap-1 rounded-xl bg-muted p-1">
        {(['before', 'after'] as const).map((m) => (
          <button
            key={m}
            role="tab"
            type="button"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={cn(
              'rounded-lg px-3 py-2.5 text-sm font-medium transition-all',
              mode === m ? 'bg-card shadow-sm' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {m === 'before' ? 'Then' : 'Now'}
          </button>
        ))}
      </div>
      <div key={mode} className="rise mt-6 [animation-duration:0.45s]" role="tabpanel">
        <div className="flex items-center gap-3">
          <span className={cn('grid size-11 place-items-center rounded-xl', mode === 'after' ? 'bg-primary text-primary-foreground' : 'bg-chart-2 text-primary-foreground')}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <p className="font-display text-xl font-semibold">{data.label}</p>
        </div>
        <ul className="mt-5 space-y-3">
          {data.points.map((p) => (
            <li key={p} className="flex gap-3 text-sm leading-relaxed">
              {mode === 'before' ? (
                <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              ) : (
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              )}
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
