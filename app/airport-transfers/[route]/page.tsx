import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { routePages, getRouteBySlug } from '@/lib/routes'
import { routes as priceRoutes } from '@/lib/prices'
import { site } from '@/lib/site'
import FareTable from '@/components/FareTable'
import BookingForm from '@/components/home/BookingForm'
import RouteFAQ from '@/components/RouteFAQ'

/* ── Static generation ── */
export async function generateStaticParams() {
  return routePages.map((r) => ({ route: r.slug }))
}

/* ── Per-page metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ route: string }>
}): Promise<Metadata> {
  const { route } = await params
  const data = getRouteBySlug(route)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/airport-transfers/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      locale: 'en_GB',
      type: 'website',
      images: [{ url: data.heroImage, width: 1200, height: 800 }],
    },
  }
}

/* ── Page ── */
export default async function RoutePage({
  params,
}: {
  params: Promise<{ route: string }>
}) {
  const { route } = await params
  const data = getRouteBySlug(route)
  if (!data) notFound()

  const otherRoutes = routePages.filter((r) => r.slug !== data.slug)

  const taxiLd = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: site.name,
    description: data.metaDescription,
    url: `https://www.ridecoretravel.co.uk/airport-transfers/${data.slug}`,
    telephone: site.phoneTel,
    areaServed: [data.airportName, 'Leeds', 'West Yorkshire'],
    openingHours: 'Mo-Su 00:00-23:59',
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.ridecoretravel.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Airport Transfers', item: 'https://www.ridecoretravel.co.uk/airport-transfers' },
      { '@type': 'ListItem', position: 3, name: data.airportName, item: `https://www.ridecoretravel.co.uk/airport-transfers/${data.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* 1. Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/airport-transfers" className="hover:text-gold transition-colors">Airport Transfers</Link>
          <span>/</span>
          <span className="text-cream/60">{data.airportName}</span>
        </div>
      </div>

      {/* 2. Route hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"

        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 pt-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Fixed Price · 24/7</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-[1.1] tracking-tight mb-4">
              Leeds to {data.airportName} Taxi — Fixed Price, 24/7
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              {data.journeyTime} · {data.distance} · Premium Fleet
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/booking"
                className="bg-gold text-charcoal font-semibold px-7 py-4 rounded-sm text-center tracking-wide hover:bg-gold/90 transition-colors text-sm"
              >
                Get a Quote
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="border border-cream/40 text-cream font-semibold px-7 py-4 rounded-sm text-center tracking-wide hover:border-cream hover:bg-cream/5 transition-colors text-sm"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Price block */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Fixed Fare</span>
            <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mt-3 mb-8">
              {data.airportName} Transfer Price
            </h2>
            <FareTable priceKey={data.priceKey} compact />
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-charcoal font-bold text-sm px-6 py-3 rounded-sm tracking-wide hover:bg-gold/90 transition-colors"
              >
                Book via WhatsApp
              </a>
              <a
                href="/booking"
                className="border border-white/20 text-cream font-semibold text-sm px-6 py-3 rounded-sm tracking-wide hover:border-gold/40 transition-colors"
              >
                Online Quote Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why book this route */}
      <section className="bg-graphite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mb-10">
            Why Book Your {data.airportName} Transfer With Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { title: 'Fixed Pricing', copy: 'Your fare is agreed before you travel — no surge charges, no surprises on the day.' },
              { title: 'Real-Time Flight Tracking', copy: `We monitor your flight at ${data.airportName} and adjust pickup if you land early or late.` },
              { title: '8-Seater Mercedes Vito', copy: 'Spacious, climate-controlled, and immaculately clean. Fits up to 8 passengers and all luggage.' },
              { title: 'Licensed & Insured', copy: 'PHV Licence 25232 issued by Leeds City Council. Company No. 16758874.' },
            ].map((f, i) => (
              <div key={f.title} className="flex flex-col gap-3">
                <span className="w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center text-gold text-xs font-bold">
                  {i + 1}
                </span>
                <h3 className="text-cream font-semibold tracking-tight">{f.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The vehicle */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">The Fleet</span>
              <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight">
                Mercedes-Benz Vito Tourer — 8 Seats
              </h2>
              <p className="text-grey leading-relaxed">
                Travel in comfort on your {data.airportName} transfer in our premium 8-seater Mercedes-Benz Vito Tourer.
                With ample luggage space, climate control, and USB charging — ideal for families, groups, and business travellers.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                {['8 Seats', 'Climate Control', 'USB Charging', 'Ample Boot Space'].map((f) => (
                  <span key={f} className="flex items-center gap-2 text-cream/60 text-sm">
                    <span className="text-gold text-[10px]">✦</span>{f}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/fleet/vito-interior-1.webp"
                  alt="Mercedes Vito Tourer luxury interior seating"
                  fill className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/fleet/vito-luggage.webp"
                  alt="Mercedes Vito boot packed with suitcases"
                  fill className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Route FAQ */}
      <RouteFAQ faqs={data.faqs} />

      {/* 7. Booking form — pre-filled */}
      <BookingForm defaultDropoff={data.airportName} />

      {/* 8. Related routes */}
      <section className="bg-graphite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-cream text-lg font-semibold mb-7 tracking-tight">Other Routes We Cover</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherRoutes.map((r) => {
              const price = priceRoutes.find((p) => p.slug === r.priceKey)
              return (
                <Link
                  key={r.slug}
                  href={`/airport-transfers/${r.slug}`}
                  className="group bg-charcoal border border-white/8 rounded-sm px-5 py-4 flex items-center justify-between hover:border-gold/30 transition-colors"
                >
                  <div>
                    <p className="text-cream text-sm font-medium group-hover:text-gold transition-colors">
                      {r.airportName}
                    </p>
                    <p className="text-grey text-xs mt-0.5">{r.journeyTime} · {r.distance}</p>
                  </div>
                  {price && (
                    <span className="text-gold font-bold text-sm flex-shrink-0 ml-4">from £{price.exec8}</span>
                  )}
                </Link>
              )
            })}
            <Link
              href="/#fares"
              className="bg-charcoal border border-white/8 rounded-sm px-5 py-4 flex items-center justify-between hover:border-gold/30 transition-colors group"
            >
              <p className="text-cream text-sm font-medium group-hover:text-gold transition-colors">View All Fixed Fares</p>
              <span className="text-gold text-sm">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}
