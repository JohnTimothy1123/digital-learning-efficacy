import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, TriangleAlert } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Cite, PageHero, SectionHeading } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { CorrelationMeter, DeviceBars, EngagementDumbbell, ReliabilityBars } from '@/components/site/charts'
import { ToolWheel } from '@/components/site/tool-wheel'
import { dancsaCompetencies, siegaStats, suBenefits, suConcerns, synthesis } from '@/content/research'

export const Route = createFileRoute('/discussion')({
  head: () => ({ meta: [{ title: 'Discussion · Digital Learning Aids' }] }),
  component: DiscussionPage,
})

const studies = [
  { id: 'multimedia', n: '2.1', title: 'Multimedia & engagement', cite: 'Delos Reyes, 2025' },
  { id: 'perceptions', n: '2.2', title: 'Student perceptions', cite: 'Tapio & Gapol, 2025' },
  { id: 'cpe-usage', n: '2.3', title: 'CpE technology use', cite: 'Siega, 2025' },
  { id: 'benefits', n: '2.4', title: 'Benefits & concerns', cite: 'Su et al., 2025' },
  { id: 'tools', n: '2.5', title: 'Education 4.0 tools', cite: 'Dancsa et al., 2023' },
]

function StudyHeader({ n, title, cite, place }: { n: string; title: string; cite: string; place?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Study {n}</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      </div>
      <div className="text-right text-sm">
        <Cite>{cite}</Cite>
        {place && <p className="mt-1 text-xs text-muted-foreground">{place}</p>}
      </div>
    </div>
  )
}

function DiscussionPage() {
  return (
    <>
      <PageHero
        chapter="02"
        eyebrow="Discussion of the Topic"
        title={
          <>
            What the research says about <span className="text-primary">digital learning aids</span>
          </>
        }
        lede="Five recent studies from the Philippines and abroad show how digital tools affect engagement, perceptions, and performance, and where they fall short. Each one informs how this study assesses aids for CpE freshmen."
      >
        <nav aria-label="Studies on this page" className="mt-8 flex flex-wrap gap-2">
          {studies.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm transition-colors hover:border-primary/50"
            >
              <span className="font-mono text-xs text-primary">{s.n}</span>
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {/* 2.1 Delos Reyes */}
      <section id="multimedia" className="mx-auto max-w-content scroll-mt-20 px-4 py-20 sm:px-6">
        <Reveal>
          <StudyHeader n="2.1" title="Multimedia lifts engagement and scores" cite="Delos Reyes, 2025" place="College Mathematics · Batangas State University" />
        </Reveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="leading-relaxed text-muted-foreground">
              After multimedia resources were integrated into college math classes, students showed better participation,
              interaction quality, behavioral engagement, and peer collaboration.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Post-test scores were also <strong className="text-foreground">higher than pre-test scores in all four lessons</strong>,
              pointing to stronger understanding of the subject.
            </p>
            <div className="mt-6 rounded-xl bg-secondary p-5 text-sm leading-relaxed">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Link to this study</p>
              <p className="mt-1">Shows how digital aids can make lessons more interactive, which guides how we measure engagement and learning performance among CpE freshmen.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <EngagementDumbbell />
          </Reveal>
        </div>
      </section>

      {/* 2.2 Tapio & Gapol */}
      <section id="perceptions" className="scroll-mt-20 border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
          <Reveal>
            <StudyHeader n="2.2" title="Three things shape how students see digital tools" cite="Tapio & Gapol, 2025" place="General education courses · Philippine private university" />
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <ReliabilityBars />
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Onsite classes</p>
                  <p className="mt-2 font-display text-xl font-semibold">Digital Learning Support rated highest</p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Online classes</p>
                  <p className="mt-2 font-display text-xl font-semibold">Engagement slightly higher</p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Digital tools support participation and motivation, but their effect <strong className="text-foreground">varies with the learning environment</strong>.
                  This gives a basis for examining understanding, engagement, accessibility, and confidence among CpE freshmen.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2.3 Siega */}
      <section id="cpe-usage" className="mx-auto max-w-content scroll-mt-20 px-4 py-20 sm:px-6">
        <Reveal>
          <StudyHeader n="2.3" title="How CpE students actually use technology" cite="Siega, 2025" place="CpE students · Makati Science Technological Institute of the Philippines" />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <DeviceBars />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">How often they use it for school</p>
                <div className="mt-4 flex h-4 gap-[2px] overflow-hidden rounded-full" role="img" aria-label={`${siegaStats.daily}% daily, ${siegaStats.threeToFour}% three to four times a week, ${100 - siegaStats.frequentUse}% less often`}>
                  <span className="bg-chart-1" style={{ width: `${siegaStats.daily}%` }} />
                  <span className="bg-chart-2" style={{ width: `${siegaStats.threeToFour}%` }} />
                  <span className="bg-muted" style={{ width: `${100 - siegaStats.frequentUse}%` }} />
                </div>
                <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-chart-1" />Daily</dt>
                    <dd className="font-display text-2xl font-bold">{siegaStats.daily}%</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-chart-2" />3–4× a week</dt>
                    <dd className="font-display text-2xl font-bold">{siegaStats.threeToFour}%</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-muted ring-1 ring-border" />Less often</dt>
                    <dd className="font-display text-2xl font-bold">{100 - siegaStats.frequentUse}%</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Average GPA</p>
                <p className="mt-2 font-display text-4xl font-bold">
                  {siegaStats.gpa} <span className="text-lg font-medium text-muted-foreground">≈ {siegaStats.gpaPercent}%</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Classified as Very Satisfactory</p>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal delay={100}>
          <div className="mt-6">
            <CorrelationMeter />
          </div>
        </Reveal>
      </section>

      {/* 2.4 Su et al. */}
      <section id="benefits" className="scroll-mt-20 border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
          <Reveal>
            <StudyHeader n="2.4" title="Benefits and concerns in engineering education" cite="Su et al., 2025" place="Review of AI, AR/VR, and LMS in engineering" />
          </Reveal>
          <Reveal delay={80}>
            <Tabs defaultValue="benefits" className="mt-10">
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="benefits" className="gap-2">
                  <CheckCircle2 className="size-4" aria-hidden="true" /> Benefits
                </TabsTrigger>
                <TabsTrigger value="concerns" className="gap-2">
                  <TriangleAlert className="size-4" aria-hidden="true" /> Concerns
                </TabsTrigger>
              </TabsList>
              <TabsContent value="benefits" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {suBenefits.map((b, i) => (
                    <div key={b.title} className="rise rounded-2xl border border-border bg-card p-6 [animation-duration:0.5s]" style={{ animationDelay: `${i * 60}ms` }}>
                      <p className="font-mono text-xs text-primary">0{i + 1}</p>
                      <p className="mt-2 font-display text-xl font-semibold">{b.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="concerns" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {suConcerns.map((b, i) => (
                    <div key={b.title} className="rise rounded-2xl border border-dashed border-foreground/25 bg-card p-6 [animation-duration:0.5s]" style={{ animationDelay: `${i * 60}ms` }}>
                      <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
                      <p className="mt-2 font-display text-xl font-semibold">{b.title}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-reading leading-relaxed text-muted-foreground">
              The authors’ conclusion: digital tools can make engineering education more flexible, interactive, and effective,{' '}
              <strong className="text-foreground">but only when they are implemented well</strong> and institutions address cost,
              access, and training.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2.5 Dancsa et al. */}
      <section id="tools" className="mx-auto max-w-content scroll-mt-20 px-4 py-20 sm:px-6">
        <Reveal>
          <StudyHeader n="2.5" title="The ten categories of Education 4.0 tools" cite="Dancsa et al., 2023" place="Figure 1 · Categories of digital learning aids" />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 max-w-reading leading-relaxed text-muted-foreground">
            Blended learning, which mixes face-to-face and online activity, grew quickly during COVID-19. These tools help
            students build skills for their future careers. Explore each category below.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10">
            <ToolWheel />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Competencies developed</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {dancsaCompetencies.map((c) => (
                  <span key={c} className="rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary">{c}</span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Students also improve problem-solving, communication, speaking, and critical-thinking skills.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-2xl border border-dashed border-foreground/25 p-6">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                <TriangleAlert className="size-3.5" aria-hidden="true" /> Watch out for
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                Fatigue and anxiety from heavy video conferencing, and lower engagement without face-to-face interaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Synthesis */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="bg-blueprint-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-content px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              kicker="Synthesis"
              title={<span className="text-ink-foreground">What the five studies add up to</span>}
              className="[&_p]:text-accent"
            />
          </Reveal>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-ink-foreground/10 md:grid-cols-2">
            {synthesis.map((s, i) => (
              <li key={s.k} className="bg-ink">
                <Reveal delay={i * 80} className="h-full p-7">
                  <p className="font-mono text-sm text-accent">0{i + 1}</p>
                  <p className="mt-3 font-display text-2xl font-semibold">{s.k}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{s.v}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
