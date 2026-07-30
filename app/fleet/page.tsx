import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Our Fleet | Premium Vehicles | Ridecore Travel Leeds',
  description: 'Ridecore Travel operates a premium fleet of vehicles for airport transfers from Leeds. Spacious, climate-controlled, up to 8 passengers. Fixed prices, 24/7.',
  alternates: { canonical: '/fleet' },
  openGraph: {
    title: 'Our Fleet | Ridecore Travel Leeds',
    description: 'Premium vehicles for airport transfers from Leeds. Up to 8 passengers, climate-controlled, immaculately maintained.',
    locale: 'en_GB',
    type: 'website',
  },
}

const galleryImages = [
  { src: '/images/fleet/vito-interior-1.webp', alt: 'Premium vehicle luxury interior seating' },
  { src: '/images/fleet/vito-interior-2.webp', alt: 'Vehicle interior passenger comfort view' },
  { src: '/images/fleet/vito-interior-3.webp', alt: 'Rear passenger seats with ample legroom' },
  { src: '/images/fleet/vito-luggage.webp',    alt: 'Boot space packed with suitcases and luggage' },
]

const features = [
  { title: 'Up to 8 Passengers', body: 'Spacious seating for the whole group — no need to split across multiple vehicles.' },
  { title: 'Climate Control', body: 'Temperature set to your preference before you board. Comfortable in all weather.' },
  { title: 'USB Charging', body: 'Keep your devices charged throughout your journey.' },
  { title: 'Ample Boot Space', body: 'Room for full-size suitcases, carry-on bags, and sports equipment.' },
  { title: 'Child Seats Available', body: 'Request a child seat when booking — we\'ll have it fitted and ready.' },
  { title: 'Immaculately Clean', body: 'Every vehicle is cleaned and inspected before each journey. No exceptions.' },
]

export default function FleetPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cream/60">Fleet</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <Image
          src="/images/fleet/vito-interior-1.webp"
          alt="Ridecore Travel premium fleet interior"
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-28">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Premium 8-Seater Mercedes-Benz</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream tracking-tight leading-[1.1] mb-4">
              Our Fleet
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Clean, spacious, and climate-controlled vehicles — maintained to the highest standard for every journey.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-sm group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={img.src} alt={img.alt} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={i === 0 ? '50vw' : '25vw'}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-graphite border border-white/8 rounded-sm p-6 flex flex-col gap-3 hover:border-gold/20 transition-colors">
                <span className="text-gold text-xs">✦</span>
                <h2 className="text-cream font-semibold tracking-tight">{f.title}</h2>
                <p className="text-grey text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-cream tracking-tight mb-3">Ready to Book?</h2>
          <p className="text-grey text-sm mb-8 max-w-md mx-auto">Fixed prices, no hidden fees. Get your quote in seconds.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking" className="bg-gold text-charcoal font-bold px-8 py-4 rounded-sm tracking-wide hover:bg-gold/90 transition-colors text-sm">
              Get a Fixed-Price Quote
            </Link>
            <a href={`tel:${site.phoneTel}`} className="border border-white/20 text-cream font-semibold px-8 py-4 rounded-sm tracking-wide hover:border-gold/40 transition-colors text-sm">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
