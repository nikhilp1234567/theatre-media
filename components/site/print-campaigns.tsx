'use client'

import { motion } from 'framer-motion'
import { Reveal } from './reveal'

function Card({
  image,
  alt,
  tag,
  title,
  className = '',
  delay = 0,
}: {
  image: string
  alt: string
  tag: string
  title: string
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={`group relative overflow-hidden rounded-2xl border border-border ${className}`}
    >
      <img
        src={image || '/placeholder.svg'}
        alt={alt}
        width={1024}
        height={1024}
        loading="lazy"
        decoding="async"
        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--gold)]">
          {tag}
        </p>
        <p className="font-serif text-2xl font-medium text-background lg:text-3xl">
          {title}
        </p>
      </div>
    </motion.div>
  )
}

export function PrintCampaigns() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <p className="mb-10 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary max-lg:justify-center sm:text-xs sm:tracking-[0.25em]">
          <span className="hidden h-px w-8 bg-primary sm:block" />
          03 / Craft &amp; reach
        </p>
      </Reveal>

      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <Card
          image="/images/print-fan.webp"
          alt="Premium theatre magazines fanned out"
          tag="Print"
          title="Tactile, premium, kept."
          className="min-h-[340px] lg:col-span-7 lg:min-h-[460px]"
        />
        <div className="grid gap-4 lg:col-span-5 lg:gap-5">
          <Card
            image="/images/marquee.webp"
            alt="A theatre marquee glowing at night"
            tag="Campaigns"
            title="Marquee to inbox."
            className="min-h-[220px]"
            delay={0.1}
          />
          <Card
            image="/images/studio-team.webp"
            alt="A creative studio team collaborating"
            tag="Studio"
            title="Embedded with you."
            className="min-h-[220px]"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  )
}
