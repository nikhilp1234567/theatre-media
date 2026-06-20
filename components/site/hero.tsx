'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const easing = [0.22, 1, 0.36, 1] as const

const lineVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easing, delay: 0.15 + i * 0.1 },
  }),
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40"
    >
      {/* soft warm glow accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 size-[36rem] rounded-full bg-accent/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 -z-10 size-[30rem] rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* left — copy */}
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={lineVariants}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary"
          >
            <span className="h-px w-8 bg-primary" />
            Est. 2008 · An integrated media company
          </motion.p>

          <h1 className="font-serif text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[0.98] tracking-tight text-[var(--ink)]">
            <motion.span
              custom={1}
              initial="hidden"
              animate="show"
              variants={lineVariants}
              className="block text-balance"
            >
              The print &amp; publishing
            </motion.span>
            <motion.span
              custom={2}
              initial="hidden"
              animate="show"
              variants={lineVariants}
              className="block text-balance"
            >
              partner
            </motion.span>
            <motion.span
              custom={3}
              initial="hidden"
              animate="show"
              variants={lineVariants}
              className="block italic text-primary"
            >
              for the performing arts.
            </motion.span>
          </h1>

          <motion.p
            custom={4}
            initial="hidden"
            animate="show"
            variants={lineVariants}
            className="mt-8 max-w-md text-pretty text-base leading-relaxed text-foreground/75"
          >
            Theatre Media is a full-service publishing house for theatres, opera
            houses and arts venues — designing, producing, distributing and
            monetising the print that moves audiences from the foyer to their
            seats.
          </motion.p>

          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={lineVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105"
            >
              View the portfolio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-primary"
            >
              Brief us today
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* right — framed stage image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: easing, delay: 0.25 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-[var(--ink)]/10">
            <motion.img
              src="/images/hero-stage.png"
              alt="An ornate empty theatre stage lit by a single warm spotlight"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: easing }}
              className="aspect-[4/5] size-full object-cover lg:aspect-[5/6]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>

          {/* floating caption card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easing, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card/95 px-6 py-5 shadow-xl shadow-[var(--ink)]/10 backdrop-blur sm:block"
          >
            <p className="font-serif text-3xl font-medium text-[var(--ink)]">
              3M+
            </p>
            <p className="mt-1 max-w-[10rem] text-xs leading-relaxed text-muted-foreground">
              UK theatregoers hold our work each year
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
