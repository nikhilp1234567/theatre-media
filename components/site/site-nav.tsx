'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services', hasMenu: true },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const serviceMenu = [
  ['Digital', 'Banner advertising'],
  ['On-screen', 'Foyer & bar screens'],
  ['Out-of-home', 'Poster sites'],
  ['Editorial', "What's On guides"],
  ['Keepsake', 'Theatre maps'],
  ['Fundraising', 'Seat sponsorship'],
]

function Logo() {
  return (
    <a href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--ink)] text-primary sm:size-9">
        <svg viewBox="0 0 24 24" className="size-[1.125rem] sm:size-5" fill="none" aria-hidden="true">
          <path
            d="M4 9c2.5-3 13.5-3 16 0v11H4V9Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M9 20v-7M15 20v-7" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </span>
      <span className="truncate font-serif text-lg font-semibold tracking-tight text-[var(--ink)] sm:text-xl">
        Stagecraft Media
      </span>
    </a>
  )
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasMenu && setMenuOpen(true)}
              onMouseLeave={() => link.hasMenu && setMenuOpen(false)}
            >
              <a
                href={link.href}
                className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  link.label === 'Home'
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
                {link.hasMenu && <ChevronDown className="size-3.5" />}
              </a>

              {link.hasMenu && (
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-popover p-3 shadow-xl shadow-black/5">
                        {serviceMenu.map(([title, desc]) => (
                          <a
                            key={title}
                            href="#services"
                            className="group rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
                          >
                            <p className="text-sm font-semibold text-[var(--ink)]">
                              {title}
                            </p>
                            <p className="text-xs text-muted-foreground">{desc}</p>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105 sm:inline-flex"
          >
            Start a project
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/60 py-3 text-base font-medium text-foreground/80"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Start a project
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
