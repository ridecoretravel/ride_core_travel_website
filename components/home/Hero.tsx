'use client'

import Image from 'next/image'
import { site } from '@/lib/site'
import QuoteForm from './QuoteForm'
import { PhoneIcon } from './FormFields'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      <Image src="/images/hero/hero-vito.webp" alt="Ridecore Travel premium airport transfer" fill priority className="object-cover hidden md:block" sizes="100vw" />
      <Image src="/images/hero/hero-vito-mobile.webp" alt="Ridecore Travel premium airport transfer" fill priority className="object-cover md:hidden" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-10">

        {/* Headline */}
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Leeds · 24/7 · Licensed</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-cream leading-[1.08] tracking-tight mb-3">
            Fixed-Price Airport<br className="hidden sm:block" /> Transfers from Leeds
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed">
            Premium 8-Seater Mercedes-Benz Airport Transfers from Leeds
          </p>
        </div>

        {/* ── Booking form card ── */}
        <QuoteForm />

        {/* Route quick-links */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { label: 'Leeds Bradford Airport', href: '/airport-transfers/leeds-bradford-airport-taxi' },
            { label: 'Manchester Airport',     href: '/airport-transfers/leeds-to-manchester-airport' },
            { label: 'Liverpool Airport',      href: '/airport-transfers/leeds-to-liverpool-airport' },
            { label: 'London Heathrow',        href: '/airport-transfers/leeds-to-heathrow' },
            { label: '8-Seater Group Transfers', href: '/airport-transfers/8-seater' },
          ].map(r => (
            <a key={r.href} href={r.href}
              className="text-[11px] text-cream/50 hover:text-gold transition-colors border border-white/10 hover:border-gold/30 px-3 py-1.5 rounded-sm tracking-wide">
              {r.label}
            </a>
          ))}
        </div>

        {/* Call CTA */}
        <div className="mt-4 flex items-center gap-4">
          <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors">
            <PhoneIcon />
            Prefer to call? {site.phone}
          </a>
          <span className="text-cream/20 text-xs">·</span>
          <span className="text-cream/30 text-xs">Licensed by Leeds City Council</span>
        </div>
      </div>
    </section>
  )
}
