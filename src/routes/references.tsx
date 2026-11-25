import { useMemo, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Check, Copy, Download, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'
import { formatApa, references } from '@/content/research'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/references')({
  head: () => ({ meta: [{ title: 'References · Digital Learning Aids' }] }),
  component: ReferencesPage,
})

const filters = ['All', 'Introduction & Background', 'Discussion', 'Supplementary reading'] as const

function ReferencesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const [copied, setCopied] = useState<string | null>(null)
  const list = useMemo(
    () =>
      [...references]
        .filter((r) => filter === 'All' || r.used === filter)
        .sort((a, b) => a.authors.localeCompare(b.authors)),
    [filter],
  )

  async function copy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      toast.success('Citation copied')
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 2000)
    } catch {
      toast.error('Couldn’t copy. Select the text and copy it manually.')
    }
  }

  return (
    <>
      <PageHero
        chapter="05"
        eyebrow="References"
        title={
          <>
            Sources, <span className="text-primary">2023–2026.</span>
          </>
        }
        lede="Peer-reviewed journal articles and research reports cited on this website, in APA 7th edition format. Each links to its DOI or publisher page."
      >
        <a
          href="/docs/digital-learning-aids-research-paper.pdf"
          download
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 motion-reduce:transition-none"
        >
          <Download className="size-4" aria-hidden="true" /> Download the full paper (PDF)
        </a>
      </PageHero>

      <section className="mx-auto max-w-content px-4 py-16 sm:px-6">
        <div role="group" aria-label="Filter references by section" className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const count = f === 'All' ? references.length : references.filter((r) => r.used === f).length
            return (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  filter === f ? 'border-foreground bg-foreground text-background' : 'border-border bg-card hover:border-foreground/40',
                )}
              >
                {f}
                <span className={cn('font-mono text-xs', filter === f ? 'text-background/70' : 'text-muted-foreground')}>{count}</span>
              </button>
            )
          })}
        </div>

        <ol className="mt-10 divide-y divide-border border-y border-border">
          {list.map((r, i) => {
            const apa = formatApa(r)
            return (
              <li key={r.id}>
                <Reveal delay={Math.min(i, 5) * 50} className="grid gap-4 py-7 md:grid-cols-[5rem_1fr_auto] md:gap-8">
                  <p className="font-display text-3xl font-bold text-primary/80">{r.year}</p>
                  <div className="min-w-0">
                    <p className="pl-8 -indent-8 leading-relaxed">
                      {r.authors} ({r.year}). <span className="italic">{r.title}</span>. {r.source}.{' '}
                      <a href={r.url} target="_blank" rel="noreferrer" className="break-all text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
                        {r.url}
                      </a>
                    </p>
                    <p className="mt-3 flex flex-wrap gap-2 text-xs">
                      <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">{r.used}</span>
                      <span className="rounded-full bg-muted px-2.5 py-1 font-mono text-muted-foreground">({r.inText})</span>
                    </p>
                  </div>
                  <div className="flex gap-2 md:flex-col">
                    <button
                      type="button"
                      onClick={() => copy(r.id, apa)}
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      {copied === r.id ? <Check className="size-4 text-chart-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                      {copied === r.id ? 'Copied' : 'Copy APA'}
                    </button>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      <ExternalLink className="size-4" aria-hidden="true" /> Open
                    </a>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </section>
    </>
  )
}
