'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

const projects = [
  {
    title: 'Lowther Pavilion',
    type: 'Tri-fold brochure',
    year: '2025',
    image: '/images/work-trifold.png',
    alt: 'Lowther Pavilion tri-fold brochure on a terracotta background',
  },
  {
    title: 'Grand Theatre',
    type: 'Programme template',
    year: '2025',
    image: '/images/work-programme.png',
    alt: 'Grand Theatre programme booklet on a cream background',
  },
  {
    title: 'Designed to Perform',
    type: 'Marketing campaign',
    year: '2024',
    image: '/images/work-campaign.png',
    alt: 'Designed to Perform marketing campaign materials',
  },
]

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8 lg:py-32"
    >
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" />
            04 / Selected work
          </p>
          <h2 className="max-w-xl font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.05] tracking-tight text-[var(--ink)]">
            Print that audiences{' '}
            <span className="italic text-primary">take home.</span>
          </h2>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-primary"
        >
          Brief us today
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href="#contact"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            className="group block"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary">
              <img
                src={p.image || '/placeholder.svg'}
                alt={p.alt}
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--ink)]/0 transition-colors duration-500 group-hover:bg-[var(--ink)]/30">
                <span className="flex size-14 translate-y-3 items-center justify-center rounded-full bg-background text-[var(--ink)] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between border-t border-border pt-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.type}
                </p>
              </div>
              <span className="font-mono text-sm text-primary">{p.year}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
