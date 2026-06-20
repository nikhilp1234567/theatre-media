'use client'

import { motion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1] as const

export function Testimonial() {
  return (
    <section className="bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-10 font-mono text-xs uppercase tracking-[0.25em] text-primary"
        >
          05 / On the record
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: easing }}
          className="font-serif text-[clamp(1.6rem,4vw,3rem)] font-medium leading-[1.15] tracking-tight text-balance text-[var(--ink)]"
        >
          &ldquo;Theatre Media took our season guide from a chore to a
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
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="flex size-12 items-center justify-center rounded-full bg-primary font-serif text-sm font-semibold text-primary-foreground">
            SH
          </span>
          <div className="text-left">
            <p className="font-semibold text-[var(--ink)]">Sarah Holden</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Director · Lowther Pavilion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
