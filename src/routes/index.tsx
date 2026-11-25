import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, Check, X } from 'lucide-react'
import { CdnImage } from '@/components/site/cdn-image'
import { Reveal } from '@/components/site/reveal'
import { SectionHeading } from '@/components/site/page-hero'
import { aidTypes, course, delosReyesMean, images, navItems, siegaStats } from '@/content/research'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/')({
  component: Home,
})

const chapters = [
  { desc: 'Why freshmen and why now: the shift to technology-enhanced engineering classes.' },
  { desc: 'Five studies, interactive charts, and the ten categories of Education 4.0 tools.' },
  { desc: 'Who benefits from the findings: students, faculty, administrators, researchers.' },
  { desc: 'The group behind this research website.' },
  { desc: 'Nine peer-reviewed sources, 2023–2026, with DOI links.' },
]

const claims = [
  {
    claim: 'Giving students digital tools automatically improves their grades.',
    fact: false,
    why: 'Siega (2025) found only a weak link (r = 0.145). Efficacy depends on integration, guidance, and how well students use the tools.',
  },
  {
    claim: 'Smartphones are the most-used learning technology among CpE students.',
    fact: true,
    why: '27% of responses in Siega (2025), ahead of laptops (20%) and internet resources (18%).',
  },
  {
    claim: 'Multimedia lessons moved math engagement from “to some extent” to “to a great extent.”',
    fact: true,
    why: 'Mean engagement rose from 2.38 to 3.90 on a 4-point scale at Batangas State University (Delos Reyes, 2025).',
  },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-blueprint absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_75%)]" aria-hidden="true" />
        <svg className="pointer-events-none absolute -right-20 top-10 hidden h-[520px] w-[720px] text-primary/25 lg:block" viewBox="0 0 720 520" fill="none" aria-hidden="true">
          <path className="trace" d="M0 80 H220 L260 120 H420 L460 80 H720" stroke="currentColor" strokeWidth="2" />
          <path className="trace [animation-delay:0.8s]" d="M0 470 H160 L200 430 H380 L420 470 H720" stroke="currentColor" strokeWidth="2" />
          <circle className="pulse-dot" cx="260" cy="120" r="5" fill="var(--accent)" />
          <circle className="pulse-dot [animation-delay:1.2s]" cx="420" cy="470" r="5" fill="var(--accent)" />
        </svg>
        <div className="relative mx-auto grid max-w-content gap-12 px-4 pb-16 pt-12 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pb-24">
          <div>
            <p className="rise inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary pulse-dot" />
              {course.program} · {course.campus.replace('Batangas State University – ', 'BatStateU ')}
            </p>
            <h1 className="rise mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] [animation-delay:80ms] sm:text-6xl lg:text-[4.25rem]">
              Do digital learning aids <span className="relative whitespace-nowrap text-primary">really help<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true"><path d="M2 9 Q100 -2 198 7" stroke="var(--accent)" strokeWidth="4" fill="none" strokeLinecap="round" /></svg></span> CpE freshmen learn?
            </h1>
            <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms]">
              Assessing the efficacy of digital learning aids for freshmen Computer Engineering students at Batangas State
              University – Alangilan Campus: coding platforms, LMS, e-modules, and video tutorials.
            </p>
            <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
              <Link
                to="/introduction"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground shadow-[0_10px_30px_-12px_var(--primary)] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
              >
                Start reading
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
              <Link
                to="/discussion"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 font-medium transition-colors hover:border-foreground/40"
              >
                See the evidence
              </Link>
            </div>
          </div>

          <div className="rise relative [animation-delay:200ms]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_40px_80px_-40px_oklch(0.22_0.025_258/0.55)] lg:aspect-[5/4]">
              <CdnImage
                src={images.hero}
                alt="Freshmen engineering students collaborating in a computer lab with a laptop, code on screen, and a breadboard circuit"
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-8">
              <p className="font-mono text-[10.5px] uppercase tracking-widest text-muted-foreground">Engagement, 1–4 scale</p>
              <p className="mt-1 font-display text-3xl font-bold">
                <span className="text-chart-2">{delosReyesMean.before.toFixed(2)}</span>
                <span className="mx-2 text-muted-foreground">→</span>
                <span className="text-primary">{delosReyesMean.after.toFixed(2)}</span>
              </p>
              <p className="text-xs text-muted-foreground">after multimedia · Delos Reyes, 2025</p>
            </div>
            <div className="absolute -top-5 right-4 rounded-2xl bg-ink px-4 py-3 text-ink-foreground shadow-xl sm:-right-4">
              <p className="font-mono text-[10.5px] uppercase tracking-widest text-ink-foreground/60">CpE students using tech often</p>
              <p className="font-display text-3xl font-bold text-accent">{siegaStats.frequentUse}%</p>
            </div>
          </div>
        </div>
      </section>

      {/* The core idea */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="bg-blueprint-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-content gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr] md:items-center md:py-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">The research question</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Availability is not the same as efficacy.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-foreground/75">
              Digital tools are already everywhere in engineering classrooms. What remains unclear, especially locally, is
              whether they genuinely strengthen comprehension or add new challenges for students still adjusting to
              college.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-foreground/10">
              {[
                { k: `${siegaStats.respondents}`, v: 'CpE students surveyed on their tech use (Siega, 2025)' },
                { k: `${siegaStats.daily}%`, v: 'use computer technology for school every day' },
                { k: `r = ${siegaStats.r}`, v: 'weak but significant link between tech use and performance' },
                { k: '3', v: 'conditions that decide efficacy: integration, guidance, student skill' },
              ].map((s) => (
                <div key={s.k} className="bg-ink p-5 sm:p-6">
                  <dt className="font-display text-3xl font-bold text-accent sm:text-4xl">{s.k}</dt>
                  <dd className="mt-2 text-sm leading-snug text-ink-foreground/70">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Aid types */}
      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              kicker="What we mean"
              title="Four kinds of digital learning aids"
              body="The study focuses on tools that freshmen meet in their first engineering courses: tools for visualizing abstract concepts, testing code and hardware designs in real time, and reviewing lessons at their own pace."
            />
          </Reveal>
          <ol className="divide-y divide-border border-y border-border">
            {aidTypes.map((a, i) => (
              <li key={a.id}>
                <Reveal delay={i * 70} className="group grid gap-2 py-7 sm:grid-cols-[3.5rem_1fr_1fr] sm:gap-6">
                  <span className="font-mono text-sm text-primary">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">{a.name}</h3>
                    <p className="mt-1.5 text-muted-foreground">{a.blurb}</p>
                  </div>
                  <p className="self-end text-sm text-muted-foreground sm:text-right">
                    <span className="font-mono text-[11px] uppercase tracking-widest">Used for</span>
                    <br />
                    <span className="text-foreground">{a.use}</span>
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Myth or fact */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading kicker="Quick check" title="Myth or fact?" body="Test what you know before you read. Pick an answer to see what the research says." />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {claims.map((c, i) => (
              <Reveal key={c.claim} delay={i * 90}>
                <ClaimCard {...c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter index */}
      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading kicker="Explore the study" title="Read it in five short sections" />
        </Reveal>
        <ul className="mt-10 grid gap-4 md:grid-cols-6">
          {navItems.slice(1).map((n, i) => (
            <li key={n.to} className={cn(i < 2 ? 'md:col-span-3' : 'md:col-span-2')}>
              <Reveal delay={i * 60} className="h-full">
                <Link
                  to={n.to}
                  className={cn(
                    'group flex h-full flex-col justify-between gap-8 rounded-2xl border p-6 transition-all hover:-translate-y-1 motion-reduce:transition-none',
                    i === 1 ? 'border-transparent bg-primary text-primary-foreground' : 'border-border bg-card hover:border-primary/50',
                  )}
                >
                  <span className="flex items-start justify-between">
                    <span className={cn('font-mono text-sm', i === 1 ? 'text-primary-foreground/70' : 'text-muted-foreground')}>
                      0{i + 1}
                    </span>
                    <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
                  </span>
                  <span>
                    <span className="block font-display text-2xl font-bold">{n.label}</span>
                    <span className={cn('mt-2 block text-sm', i === 1 ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                      {chapters[i].desc}
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

function ClaimCard({ claim, fact, why }: { claim: string; fact: boolean; why: string }) {
  const [answer, setAnswer] = useState<boolean | null>(null)
  const correct = answer === fact

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      <p className="font-display text-lg font-semibold leading-snug">“{claim}”</p>
      <div className="mt-auto pt-6">
        {answer === null ? (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setAnswer(false)}
              className="flex-1 rounded-lg border border-border px-3 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40 hover:bg-muted"
            >
              Myth
            </button>
            <button
              type="button"
              onClick={() => setAnswer(true)}
              className="flex-1 rounded-lg border border-border px-3 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40 hover:bg-muted"
            >
              Fact
            </button>
          </div>
        ) : (
          <div aria-live="polite" className="rise [animation-duration:0.4s]">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span className={cn('grid size-5 place-items-center rounded-full text-primary-foreground', correct ? 'bg-chart-4' : 'bg-primary')}>
                {correct ? <Check className="size-3.5" aria-hidden="true" /> : <X className="size-3.5" aria-hidden="true" />}
              </span>
              {correct ? 'Correct' : 'Not quite'}: it’s a {fact ? 'fact' : 'myth'}.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{why}</p>
            <button type="button" onClick={() => setAnswer(null)} className="mt-3 text-xs font-medium text-muted-foreground underline underline-offset-4 hover:text-foreground">
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
