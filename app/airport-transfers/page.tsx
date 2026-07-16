import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { routePages } from '@/lib/routes'
import { routes as prices } from '@/lib/prices'
import { site } from '@/lib/site'
import FareTable from '@/components/FareTable'

export const metadata: Metadata = {
  title: 'Airport Transfers from Leeds | Fixed Prices | Ridecore Travel',
  description:
    'Fixed-price airport transfers from Leeds to Leeds Bradford, Manchester, Liverpool, London Heathrow and all UK airports. Premium fleet, 24/7, licensed.',
  alternates: { canonical: '/airport-transfers' },
  openGraph: {
    title: 'Airport Transfers from Leeds | Fixed Prices | Ridecore Travel',
    description:
      'Fixed-price premium transfers from Leeds to all major UK airports. 24/7, licensed by Leeds City Council.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function AirportTransfersPage() {
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ridecoretravel.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Airport Transfers', item: 'https://www.ridecoretravel.co.uk/airport-transfers' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cream/60">Airport Transfers</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <Image
          src="/images/routes/airport-transfers-hero.webp"
          alt="Premium airport transfer from Leeds — Mercedes Vito on motorway at dusk"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">From Leeds · 24/7</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream tracking-tight leading-[1.1] mb-4">
              Airport Transfers from Leeds
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              Fixed-price transfers to all major UK airports in our premium fleet.
              Licensed by Leeds City Council. Available 24 hours, 7 days a week.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-charcoal font-bold text-sm px-7 py-4 rounded-sm tracking-wide hover:bg-gold/90 transition-colors"
              >
                Book via WhatsApp
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="border border-cream/40 text-cream font-semibold text-sm px-7 py-4 rounded-sm tracking-wide hover:border-cream hover:bg-cream/5 transition-colors"
              >
                Call {site.phone}
              </a>
            </div>
            <p className="mt-5 text-cream/40 text-xs tracking-wide">
              Licensed by Leeds City Council · PHV Licence 25232 · Company No. 16758874
            </p>
          </div>
        </div>
      </section>

      {/* Route cards */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-cream tracking-tight mb-10">Choose Your Route</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {routePages.map((route) => {
              const price = prices.find((p) => p.slug === route.priceKey)
              return (
                <Link
                  key={route.slug}
                  href={`/airport-transfers/${route.slug}`}
                  className="group bg-graphite border border-white/8 rounded-sm p-6 flex flex-col gap-4 hover:border-gold/30 transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-gold text-[10px] font-semibold tracking-widest uppercase">From Leeds</span>
                    <h3 className="text-cream font-semibold text-base leading-snug group-hover:text-gold transition-colors">
                      {route.airportName}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-grey text-xs">
                    <span>{route.journeyTime}</span>
                    <span>·</span>
                    <span>{route.distance}</span>
                  </div>
                  {price && (
                    <div className="flex items-baseline gap-2 mt-auto pt-3 border-t border-white/8">
                      <span className="text-grey text-xs">from</span>
                      <span className="text-gold font-bold text-xl">£{price.any4}</span>
                      <span className="text-grey text-xs">/ 4-seater</span>
                    </div>
                  )}
                  <span className="text-gold text-xs font-semibold tracking-wide group-hover:underline">
                    View prices & book →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full fare table */}
      <section className="bg-graphite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-cream tracking-tight mb-8">All Fixed Fares</h2>
          <FareTable />
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-charcoal py-16 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Fixed Prices', body: 'Agreed before you travel. No surge pricing, ever.' },
              { title: 'Flight Tracking', body: 'We monitor your flight and adjust pickup automatically.' },
              { title: 'Premium Fleet', body: 'Spacious, clean, climate-controlled vehicles.' },
              { title: 'Licensed & Insured', body: 'PHV Licence 25232 · Leeds City Council · Co. 16758874.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <span className="text-gold text-xs font-semibold tracking-widest uppercase">✦</span>
                <h3 className="text-cream font-semibold text-sm">{item.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}
