'use client'

import { Reveal, RevealGroup, RevealItem } from './reveal'

const pillars = [
  {
    title: 'Editorial',
    desc: 'In-house writers, picture editors and copywriters.',
  },
  {
    title: 'Design',
    desc: 'Award-winning art direction and typography.',
  },
  {
    title: 'Sales',
    desc: 'A 22-strong advertising desk in Lytham.',
  },
  {
    title: 'Print',
    desc: 'FSC-certified production across the UK.',
  },
]

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8 lg:py-36"
    >
      <Reveal>
        <p className="mb-10 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary max-lg:justify-center sm:text-xs sm:tracking-[0.25em]">
          <span className="hidden h-px w-8 bg-primary sm:block" />
          01 / Who we are
        </p>
      </Reveal>

      <div className="grid gap-12 max-lg:text-center lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <h2 className="mx-auto max-w-[13ch] font-serif text-[clamp(2rem,7vw,3.4rem)] font-medium leading-[1.05] tracking-tight text-[var(--ink)] lg:mx-0 lg:max-w-none lg:text-[clamp(2rem,4.5vw,3.4rem)]">
            A full-service media company,{' '}
            <span className="italic text-primary">built backstage.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal delay={0.1}>
            <p className="text-pretty text-lg leading-relaxed text-foreground/80">
              We don&apos;t just design. We commission, edit, sell and ship —
              running every stage of the publishing pipeline so your venue can
              focus on the next show. From quarterly season guides to
              opening-night souvenir programmes, our work lives in the hands of
              three million UK theatregoers each year.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-pretty text-lg leading-relaxed text-foreground/80">
              Our self-funding model — built on premium local advertising sales
              — means our entire output costs your venue nothing. We are the
              only media partner you&apos;ll need.
            </p>
          </Reveal>
        </div>
      </div>

      <RevealGroup className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => (
          <RevealItem
            key={p.title}
            className="group bg-card p-7 transition-colors hover:bg-secondary"
          >
            <div className="mb-4 h-8 w-px bg-primary transition-all duration-300 group-hover:h-10" />
            <h3 className="font-serif text-xl font-semibold text-[var(--ink)]">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.desc}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}
