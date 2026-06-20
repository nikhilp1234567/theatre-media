'use client'

import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'

type Slide = {
  num: string
  tag: string
  title: string
  lede: string
  body: string
  bullets: string[]
  cta: string
  image: string
  alt: string
}

const slides: Slide[] = [
  {
    num: '01',
    tag: 'Digital',
    title: 'Banner ads on your website',
    lede: 'New customers for the local businesses that love you.',
    body: 'We design, sell and traffic high-impact display banners on your theatre’s website, with deep links straight into each advertiser’s social channels and online storefronts. Every campaign is approved by you, art-directed by our studio and reported with full click-through analytics.',
    bullets: [
      'Curated local advertisers only',
      'Direct links to socials & sites',
      'Monthly performance reports',
    ],
    cta: 'Enquire about digital',
    image: '/images/marquee.png',
    alt: 'A glowing theatre marquee at dusk',
  },
  {
    num: '02',
    tag: 'On-screen',
    title: 'Foyer & bar screen advertising',
    lede: 'Beautifully art-directed digital advertising on the screens inside your foyer and bar.',
    body: 'We programme, schedule and refresh the loop, mixing your show trailers and venue announcements with carefully chosen local advertising. The result feels like part of the experience, not an interruption — and generates a meaningful new revenue stream.',
    bullets: ['Mixed with your own promos', 'Refreshed monthly', 'Daypart targeting'],
    cta: 'Enquire about on-screen',
    image: '/images/foyer-screen.png',
    alt: 'A theatre foyer bar with a digital advertising screen',
  },
  {
    num: '03',
    tag: 'Out-of-home',
    title: 'Poster advertising inside your theatre',
    lede: 'Strategically placed poster sites in the highest-traffic positions across your building.',
    body: 'From the box office queue to the stalls corridor, we audit your building, identify the most valuable wall space and turn each frame into a sellable site. We sell, design, print and rotate the posters, and you receive a cheque every quarter.',
    bullets: ['Site audit & valuation', 'We sell, design and rotate', 'Quarterly revenue share'],
    cta: 'Enquire about out-of-home',
    image: '/images/poster-frame.png',
    alt: 'A gold framed theatre poster lit on a foyer wall',
  },
  {
    num: '04',
    tag: 'Editorial',
    title: "Free Theatre 'What's On' Guides",
    lede: "A complete What's On guide for your venue — and you no longer pay for it.",
    body: 'Editorial planning, copywriting, photography, design, print and distribution — all delivered by our in-house team and underwritten entirely by local advertising. You approve every page; we do the heavy lifting and put guides into the hands of audiences across your catchment.',
    bullets: ['End-to-end production', 'You approve every page', 'Distributed across your catchment'],
    cta: 'Enquire about editorial',
    image: '/images/whats-on-guides.png',
    alt: "A stack of premium printed theatre What's On guides",
  },
  {
    num: '05',
    tag: 'Keepsake',
    title: "Free 'Theatre Maps' branded to your venue",
    lede: 'A high-quality pocket map you can give to every visitor as a beautiful free memento of their evening with you.',
    body: 'Folded, printed on a tactile uncoated stock and entirely branded to your theatre, the map highlights your venue, the streets around it and the local restaurants, bars and hotels who help fund it. Visitors keep them. Visitors come back.',
    bullets: ['Pocket-sized, premium stock', 'Your branding throughout', 'Funded by local partners'],
    cta: 'Enquire about keepsake',
    image: '/images/theatre-map.png',
    alt: 'A folded illustrated pocket theatre district map',
  },
  {
    num: '06',
    tag: 'Community',
    title: 'Tickets for veterans',
    lede: 'We fundraise on your behalf so we can purchase theatre tickets for local veterans directly from your box office.',
    body: 'Every veteran ticket is bought at full price through your box office, supporting your bottom line while filling seats with people who might otherwise never come. We handle the fundraising, the partnerships with veterans’ associations and the invitations.',
    bullets: ['Tickets bought at full price', 'Partnerships with local RBL & associations', 'Filled seats, real impact'],
    cta: 'Enquire about community',
    image: '/images/veterans.png',
    alt: 'Smiling military veterans seated in a theatre auditorium',
  },
  {
    num: '07',
    tag: 'Fundraising',
    title: 'Seat sponsorship programmes',
    lede: 'We facilitate professionally accountable, fully transparent seat sponsorship campaigns — raising much-needed funds for your ongoing aims.',
    body: 'From the dedication plaque on the headrest to the donor wall in the foyer, we manage the entire programme: marketing, sales, payment processing, plaque manufacture and donor reporting — with audited accounts delivered to your board.',
    bullets: ['Audited, transparent reporting', 'Dedication plaques manufactured & fitted', 'Donor stewardship included'],
    cta: 'Enquire about fundraising',
    image: '/images/theatre-seats.png',
    alt: 'Rows of red velvet theatre seats',
  },
]

const easing = [0.22, 1, 0.36, 1] as const

export function ServiceSlides() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0])
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (next: number) => {
      setState(([curr]) => {
        const total = slides.length
        const target = (next + total) % total
        return [target, target > curr || (curr === total - 1 && target === 0) ? 1 : -1]
      })
    },
    [],
  )

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => go(index + 1), 7000)
    return () => clearInterval(t)
  }, [index, paused, go])

  const slide = slides[index]

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[var(--ink)] py-24 text-background lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" />
              02 / What we do
            </p>
            <h2 className="max-w-xl font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.05] tracking-tight text-background">
              One partner, the{' '}
              <span className="italic text-[var(--gold)]">whole pipeline.</span>
            </h2>
          </div>

          {/* controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-background/60">
              <span className="text-background">{slide.num}</span> / 07
            </span>
            <button
              type="button"
              aria-label="Previous service"
              onClick={() => go(index - 1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-[var(--ink)]"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next service"
              onClick={() => go(index + 1)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-background/25 text-background transition-colors hover:bg-background hover:text-[var(--ink)]"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </Reveal>

        {/* slide viewport */}
        <div className="relative overflow-hidden rounded-3xl border border-background/10 bg-background/[0.03]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.55, ease: easing }}
              className="grid items-stretch lg:grid-cols-2"
            >
              {/* image */}
              <div className="relative min-h-[300px] overflow-hidden lg:min-h-[560px]">
                <motion.img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.alt}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: easing }}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 to-transparent" />
                <span className="pointer-events-none absolute left-6 top-4 font-serif text-[7rem] leading-none text-background/15 lg:text-[10rem]">
                  {slide.num}
                </span>
              </div>

              {/* content */}
              <div className="flex flex-col justify-center gap-6 p-8 lg:p-14">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  {slide.num} · {slide.tag}
                </p>
                <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.6rem)] font-medium leading-[1.05] text-background">
                  {slide.title}
                </h3>
                <p className="font-serif text-lg italic leading-relaxed text-[var(--gold)]">
                  {slide.lede}
                </p>
                <p className="text-pretty leading-relaxed text-background/70">
                  {slide.body}
                </p>

                <ul className="mt-2 flex flex-col gap-2.5">
                  {slide.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-background/85">
                      <span className="h-px w-6 bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group mt-3 inline-flex w-fit items-center gap-2 border border-background/25 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-background transition-colors hover:border-primary hover:text-primary"
                >
                  {slide.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* progress dots */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.num}
              type="button"
              aria-label={`Go to ${s.tag}`}
              onClick={() => go(i)}
              className={`group flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                i === index
                  ? 'bg-background text-[var(--ink)]'
                  : 'text-background/50 hover:text-background'
              }`}
            >
              <span className="font-mono">{s.num}</span>
              <span className="hidden sm:inline">{s.tag}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
