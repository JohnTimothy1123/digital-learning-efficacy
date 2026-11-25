import { createFileRoute } from '@tanstack/react-router'
import { Code2, Palette, Search, BarChart3, Users } from 'lucide-react'
import { PageHero, SectionHeading } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { CdnImage } from '@/components/site/cdn-image'
import { course, team } from '@/content/research'

export const Route = createFileRoute('/developers')({
  head: () => ({ meta: [{ title: 'Website Developers · Digital Learning Aids' }] }),
  component: DevelopersPage,
})

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w[0] ?? ''))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('')
}

const process = [
  { icon: Search, title: 'Research', body: 'Gathered and reviewed recent studies on digital learning aids in engineering.' },
  { icon: BarChart3, title: 'Visualize', body: 'Turned tables and figures into interactive charts and infographics.' },
  { icon: Palette, title: 'Design', body: 'Built a crimson-and-ink theme inspired by circuits and blueprints.' },
  { icon: Code2, title: 'Develop', body: 'Coded a responsive site that works on desktops, tablets, and phones.' },
]

function DevelopersPage() {
  return (
    <>
      <PageHero
        chapter="04"
        eyebrow="Website Developers"
        title={
          <>
            The team behind <span className="text-primary">the research.</span>
          </>
        }
        lede={`${course.program} students of the ${course.college}, ${course.campus}.`}
      />

      <section className="mx-auto max-w-content px-4 py-20 sm:px-6">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <li key={`${m.name}-${i}`}>
              <Reveal delay={i * 70} className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50">
                <div className="bg-blueprint relative aspect-[4/3] overflow-hidden bg-secondary">
                  {m.photo ? (
                    <CdnImage src={m.photo} alt={`Portrait of ${m.name}`} sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" />
                  ) : (
                    <div className="grid size-full place-items-center">
                      <span className="grid size-24 place-items-center rounded-full bg-primary font-display text-3xl font-bold text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none">
                        {initials(m.name) || <Users className="size-8" aria-hidden="true" />}
                      </span>
                    </div>
                  )}
                  <span className="absolute left-4 top-4 rounded-md bg-card/90 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold">{m.name}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.contribution}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-content px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading kicker="How we built it" title="From paper to website" />
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 90} className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-5 font-mono text-xs text-muted-foreground">Step {i + 1}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
