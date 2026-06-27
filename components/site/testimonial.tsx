'use client'

import { motion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1] as const

export function Testimonial() {
  return (
    <section className="bg-accent py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-10 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.25em]"
        >
          05 / On the record
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: easing }}
          className="mx-auto max-w-[18ch] font-serif text-[clamp(1.85rem,7.2vw,2.45rem)] font-medium leading-[1.12] tracking-tight text-[var(--ink)] sm:max-w-4xl sm:text-[clamp(1.6rem,4vw,3rem)] sm:leading-[1.15] sm:text-balance"
        >
          &ldquo;Stagecraft Media took our season guide from a chore to a
          centrepiece. Our audiences keep them on the coffee table — and our
          advertising line jumped{' '}
          <span className="italic text-primary">40% in a single year.</span>
          &rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-primary-foreground">
            SH
          </span>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-[var(--ink)]">Sarah Holden</p>
            <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
              Director · Lowther Pavilion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
