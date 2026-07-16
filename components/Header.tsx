'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/lib/site'

const routeLinks = [
  { label: 'Leeds Bradford Airport', href: '/airport-transfers/leeds-bradford-airport-taxi', time: '20–30 min' },
  { label: 'Manchester Airport',      href: '/airport-transfers/leeds-to-manchester-airport', time: '~1 hr 10 min' },
  { label: 'Liverpool Airport',       href: '/airport-transfers/leeds-to-liverpool-airport',  time: '~1 hr 30 min' },
  { label: 'London Heathrow',         href: '/airport-transfers/leeds-to-heathrow',           time: '~3 hr 30 min' },
]

export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [dropOpen, setDropOpen]     = useState(false)
  const dropRef                     = useRef<HTMLDivElement>(null)
  const pathname                    = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // close dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  // close everything on route change
  useEffect(() => { setMenuOpen(false); setDropOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-charcoal ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.6)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/brand/ridecore-travel-logo.svg"
            alt="Ridecore Travel logo"
            width={170}
            height={48}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-sm tracking-wide text-cream/80 hover:text-gold transition-colors">
            Home
          </Link>

          {/* Airport Transfers dropdown */}
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen((v) => !v)}
              className="flex items-center gap-1 text-sm tracking-wide text-cream/80 hover:text-gold transition-colors"
              aria-expanded={dropOpen}
            >
              Airport Transfers
              <svg
                width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}
                className={`transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-graphite border border-white/10 rounded-sm shadow-2xl overflow-hidden">
                <div className="px-4 py-2 border-b border-white/8">
                  <span className="text-gold text-[10px] font-semibold tracking-widest uppercase">Routes from Leeds</span>
                </div>
                {routeLinks.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-cream/80 hover:text-gold hover:bg-white/3 transition-colors"
                  >
                    <span>{r.label}</span>
                    <span className="text-grey text-xs">{r.time}</span>
                  </Link>
                ))}
                <div className="border-t border-white/8">
                  <Link
                    href="/airport-transfers"
                    className="flex items-center justify-between px-4 py-3 text-xs text-gold hover:bg-white/3 transition-colors font-semibold tracking-wide"
                  >
                    All Routes & Fares →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/services" className="text-sm tracking-wide text-cream/80 hover:text-gold transition-colors">
            Services
          </Link>
          <Link href="/#fleet" className="text-sm tracking-wide text-cream/80 hover:text-gold transition-colors">
            Fleet
          </Link>
          <Link href="/airport-transfers" className="text-sm tracking-wide text-cream/80 hover:text-gold transition-colors">
            Fares
          </Link>
          <Link href="/blog" className="text-sm tracking-wide text-cream/80 hover:text-gold transition-colors">
            Blog
          </Link>
          <Link href="/about-us" className="text-sm tracking-wide text-cream/80 hover:text-gold transition-colors">
            About
          </Link>
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-2 text-cream/90 hover:text-gold transition-colors text-sm font-medium"
          >
            <PhoneIcon />
            {site.phone}
            <span className="text-[10px] font-semibold tracking-widest text-gold border border-gold/50 px-1.5 py-0.5 rounded-sm">
              24/7
            </span>
          </a>
          <Link
            href="/booking"
            className="bg-gold text-charcoal text-sm font-semibold px-5 py-2.5 rounded-sm tracking-wide hover:bg-gold/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-cream"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile drawer — full screen overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${menuOpen ? 'visible' : 'invisible'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel — slides in from right */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-charcoal flex flex-col shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
            <Image
              src="/images/brand/ridecore-travel-logo.svg"
              alt="Ridecore Travel logo"
              width={140}
              height={40}
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-cream/70 hover:text-gold hover:border-gold/30 transition-colors"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">

            <NavItem href="/" onClick={() => setMenuOpen(false)}>Home</NavItem>
            <NavItem href="/services" onClick={() => setMenuOpen(false)}>Services</NavItem>
            <NavItem href="/#fleet" onClick={() => setMenuOpen(false)}>Fleet</NavItem>
            <NavItem href="/airport-transfers" onClick={() => setMenuOpen(false)}>Fares</NavItem>
            <NavItem href="/blog" onClick={() => setMenuOpen(false)}>Blog</NavItem>
            <NavItem href="/about-us" onClick={() => setMenuOpen(false)}>About Us</NavItem>

            {/* Airport Transfers group */}
            <div className="mt-4 mb-1">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-gold/70 px-1 mb-2">
                Airport Transfers
              </p>
              <div className="bg-graphite rounded-sm border border-white/6 overflow-hidden">
                {routeLinks.map((r, i) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 text-sm text-cream/80 hover:text-gold hover:bg-white/4 transition-colors ${i < routeLinks.length - 1 ? 'border-b border-white/6' : ''}`}
                  >
                    <span>{r.label}</span>
                    <span className="text-grey text-xs">{r.time}</span>
                  </Link>
                ))}
                <Link
                  href="/airport-transfers"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-xs text-gold font-semibold tracking-wide border-t border-white/8 hover:bg-white/4 transition-colors"
                >
                  All Routes & Fares
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </nav>

          {/* Bottom CTA area */}
          <div className="px-6 py-5 border-t border-white/8 flex flex-col gap-3">
            {/* Contact row */}
            <div className="flex gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-cream text-sm font-medium py-3 rounded-sm hover:border-gold/30 hover:text-gold transition-colors"
              >
                <PhoneIcon />{site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 flex items-center justify-center bg-white/5 border border-white/10 text-cream rounded-sm hover:border-gold/30 hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
            {/* Primary CTA */}
            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="bg-gold text-charcoal font-bold text-sm tracking-wide py-3.5 rounded-sm text-center hover:bg-gold/90 transition-colors"
            >
              Get a Quote
            </Link>
            <p className="text-grey text-[11px] text-center">
              Licensed by Leeds City Council · 24/7
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavItem({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center justify-between px-1 py-3 text-base font-medium text-cream/80 hover:text-gold border-b border-white/6 transition-colors group"
    >
      {children}
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="text-white/20 group-hover:text-gold/50 transition-colors">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </Link>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
function HamburgerIcon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

