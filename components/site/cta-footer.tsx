'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  ['3M', 'theatregoers reached each year'],
  ['2008', 'integrated media since'],
  ['£0', 'cost to your venue'],
  ['22', 'on the advertising desk'],
]

export function CtaFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-[var(--ink)] text-background">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary max-lg:justify-center sm:text-xs sm:tracking-[0.25em]">
            <span className="hidden h-px w-8 bg-primary sm:block" />
            Start a project
          </p>
          <h2 className="mx-auto max-w-[13ch] font-serif text-[clamp(2.2rem,8vw,4.5rem)] font-medium leading-[1.02] tracking-tight text-background max-lg:text-center lg:mx-0 lg:max-w-3xl lg:text-[clamp(2.2rem,5.5vw,4.5rem)]">
            Let&apos;s make print that{' '}
            <span className="italic text-[var(--gold)]">moves audiences.</span>
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap lg:justify-start">
            <a
              href="mailto:hello@stagecraftmedia.co.uk"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-105"
            >
              Brief us today
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:hello@stagecraftmedia.co.uk"
              className="font-mono text-sm tracking-normal text-background/70 transition-colors hover:text-background sm:tracking-wide"
            >
              hello@stagecraftmedia.co.uk
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="bg-[var(--ink)] p-7">
              <p className="font-serif text-4xl font-medium text-[var(--gold)]">
                {value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-background/60">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-background/15 pt-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary text-[var(--ink)]">
              <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                <path
                  d="M4 9c2.5-3 13.5-3 16 0v11H4V9Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path d="M9 20v-7M15 20v-7" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <span className="font-serif text-lg font-semibold text-background">
              Stagecraft Media
            </span>
          </div>
          <p className="font-mono text-[0.7rem] uppercase leading-relaxed tracking-[0.14em] text-background/50 sm:text-xs lg:tracking-[0.2em]">
            © {new Date().getFullYear()} Stagecraft Media · Lytham, UK
          </p>
        </div>
      </div>
    </footer>
  )
}
