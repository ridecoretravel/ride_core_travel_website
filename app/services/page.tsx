import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site, SITE_URL } from '@/lib/site'
import { routePages } from '@/lib/routes'
import { routes as prices } from '@/lib/prices'

export const metadata: Metadata = {
  title: 'Our Services | Airport Transfers Leeds | Ridecore Travel',
  description:
    'Ridecore Travel offers fixed-price airport transfers, group travel, corporate transfers and long-distance journeys from Leeds. Premium fleet, 24/7.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services | Airport Transfers Leeds | Ridecore Travel',
    description: 'Premium airport transfers, group travel and corporate journeys from Leeds. Fixed prices, 24/7.',
    locale: 'en_GB',
    type: 'website',
  },
}

const services = [
  {
    icon: <FlightIcon />,
    title: 'Airport Transfers',
    description:
      'Fixed-price transfers from Leeds to all major UK airports. We track your flight in real time and adjust pickup automatically if you land early or late. No hidden fees, no surge pricing.',
    link: '/airport-transfers',
    linkLabel: 'View all routes & fares',
  },
  {
    icon: <GroupIcon />,
    title: 'Group Travel',
    description:
      'Our premium vehicles are perfect for families, sports teams, hen & stag parties, and any group up to 8 passengers. Everyone travels together in comfort.',
    link: '/booking',
    linkLabel: 'Get a group quote',
  },
  {
    icon: <BriefcaseIcon />,
    title: 'Corporate Travel',
    description:
      'Reliable, professional transfers for business travellers. Fixed pricing, punctual drivers, and a premium vehicle — everything you need for a stress-free business journey.',
    link: '/booking',
    linkLabel: 'Book corporate transfer',
  },
  {
    icon: <RouteIcon />,
    title: 'Long-Distance Journeys',
    description:
      'Need to travel further than the airport? We cover long-distance journeys across the UK. From Leeds to London, Edinburgh, or anywhere in between — contact us for a bespoke quote.',
    link: `tel:${site.phoneTel}`,
    linkLabel: 'Call for a quote',
  },
]

export default function ServicesPage() {
  const servicesLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Airport Transfer & Private Hire',
    provider: {
      '@type': ['TaxiService', 'LocalBusiness'],
      name: site.name,
      url: SITE_URL,
    },
    areaServed: 'Leeds, West Yorkshire',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ridecore Travel Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
        },
      })),
    },
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cream/60">Services</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-vito.webp"
          alt="Ridecore Travel Mercedes Vito premium airport transfer service from Leeds"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-28">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">What We Offer</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream tracking-tight leading-[1.1] mb-4">
              Our Services
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Premium transfers from Leeds — fixed prices, professional drivers, 24/7 availability.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-graphite border border-white/8 rounded-sm p-8 flex flex-col gap-5 hover:border-gold/20 transition-colors"
              >
                <span className="text-gold">{s.icon}</span>
                <h2 className="text-cream text-xl font-bold tracking-tight">{s.title}</h2>
                <p className="text-grey text-sm leading-relaxed flex-1">{s.description}</p>
                <a
                  href={s.link}
                  className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase hover:underline"
                >
                  {s.linkLabel} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes we cover */}
      <section className="bg-graphite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Airport Routes</span>
          <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mt-3 mb-10">
            Routes We Cover
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {routePages.map((route) => {
              const price = prices.find((p) => p.slug === route.priceKey)
              return (
                <Link
                  key={route.slug}
                  href={`/airport-transfers/${route.slug}`}
                  className="group bg-charcoal border border-white/8 rounded-sm p-6 flex flex-col gap-3 hover:border-gold/30 transition-colors"
                >
                  <h3 className="text-cream font-semibold text-sm leading-snug group-hover:text-gold transition-colors">
                    {route.airportName}
                  </h3>
                  <p className="text-grey text-xs">{route.journeyTime} · {route.distance}</p>
                  {price && (
                    <p className="text-gold font-bold text-lg mt-auto pt-3 border-t border-white/8">
                      from £{price.exec8}
                    </p>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vehicle */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="/images/fleet/vito-interior-1.webp" alt="Mercedes Vito interior" fill className="object-cover" loading="lazy" sizes="25vw" />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="/images/fleet/vito-interior-2.webp" alt="Mercedes Vito passenger seating" fill className="object-cover" loading="lazy" sizes="25vw" />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="/images/fleet/vito-interior-3.webp" alt="Mercedes Vito rear seats" fill className="object-cover" loading="lazy" sizes="25vw" />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image src="/images/fleet/vito-luggage.webp" alt="Mercedes Vito boot with luggage" fill className="object-cover" loading="lazy" sizes="25vw" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">The Fleet</span>
              <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight">
                Premium Vehicles — Up to 8 Seats
              </h2>
              <p className="text-grey leading-relaxed">
                Every journey is made in our immaculately maintained premium fleet. Spacious, comfortable,
                and climate-controlled — with ample boot space for all your luggage.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {['8 Passenger Seats', 'Climate Control', 'USB Charging Points', 'Ample Boot Space', 'Professional Driver', 'Child Seats Available'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-cream/60 text-sm">
                    <span className="text-gold text-[10px] flex-shrink-0">✦</span>{f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite py-16 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-5">
          <h2 className="text-2xl font-bold text-cream tracking-tight">Ready to Book?</h2>
          <p className="text-grey max-w-md">Get your fixed price confirmed as soon as possible.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/booking" className="bg-gold text-charcoal font-bold text-sm px-7 py-4 rounded-sm tracking-wide hover:bg-gold/90 transition-colors">
              Get a Quote
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer"
              className="border border-white/20 text-cream font-semibold text-sm px-7 py-4 rounded-sm tracking-wide hover:border-gold/40 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}

function FlightIcon() {
  return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
}
function GroupIcon() {
  return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
}
function BriefcaseIcon() {
  return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
}
function RouteIcon() {
  return <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg>
}

