import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { routePages } from '@/lib/routes'
import { routes as priceRoutes } from '@/lib/prices'
import { site, SITE_URL } from '@/lib/site'
import FareTable from '@/components/FareTable'
import BookingForm from '@/components/home/BookingForm'
import RouteFAQ from '@/components/RouteFAQ'
import RichText from '@/components/RichText'

const PATH = '/airport-transfers/8-seater'
const DESCRIPTION =
  'Fixed-price 8-seater airport transfers from Leeds. One Mercedes-Benz Vito for up to 8 passengers and luggage — same price whether you travel as a group or solo. 24/7, licensed by Leeds City Council.'

export const metadata: Metadata = {
  title: '8-Seater Airport Transfers from Leeds | Fixed Price | Ridecore Travel',
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: '8-Seater Airport Transfers from Leeds | Fixed Price | Ridecore Travel',
    description:
      'One Mercedes-Benz Vito for up to 8 passengers and luggage, at a fixed price to every major UK airport. 24/7 from Leeds.',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/hero/hero-vito.webp', width: 1200, height: 800 }],
  },
}

const intro = [
  'Every Ridecore Travel transfer is an 8-seater. We run one vehicle — a premium [Mercedes-Benz Vito Tourer](/fleet) with eight passenger seats and a full-size boot — so there is no "standard car" upsell and no splitting your group across two vehicles. The fixed fare is the same whether one person travels or all eight.',
  'That makes us a straightforward choice for families, stag and hen groups, sports teams, business travellers and anyone flying from Leeds who would rather keep everyone, and all the luggage, together in one vehicle for the whole journey.',
]

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: 'One vehicle, one fixed price, up to 8 passengers',
    paragraphs: [
      'The price you are quoted covers the whole vehicle — up to 8 passengers — not a per-seat fare. For a group heading to the airport this is almost always cheaper than separate taxis, train tickets or airport parking, and there is no surge pricing or meter. Your fare is agreed before you travel and confirmed in writing.',
      'Pickups are from any address across Leeds and the wider LS postcode area, 24 hours a day. Pickups from outside Leeds City Centre are welcome and priced on distance.',
    ],
  },
  {
    heading: 'Luggage for a full group',
    paragraphs: [
      'The Vito Tourer carries full-size suitcases for all 8 passengers alongside hand luggage. If you are close to a full group with a full set of large cases, tell us at booking and we will confirm the load works — and flag anything oversized such as golf bags, ski gear, a wheelchair or a pushchair so it is planned for.',
    ],
  },
  {
    heading: 'Fixed fares to every airport we cover',
    paragraphs: [
      'The 8-seater fixed fare applies on every route we run — from the short hop to [Leeds Bradford Airport](/airport-transfers/leeds-bradford-airport-taxi) to the long runs to [Birmingham](/airport-transfers/leeds-to-birmingham-airport) and [London Heathrow](/airport-transfers/leeds-to-heathrow). Full prices are in the table below; each route also has its own page with journey detail and FAQs.',
    ],
  },
  {
    heading: 'When an 8-seater transfer makes sense',
    paragraphs: [
      'Groups of 5–8 where separate cars would cost more and arrive apart. Families with children and a car-full of luggage. Early-morning departures where airport parking for a week outweighs the transfer fare. Business groups who want one booking, one invoice and a licensed PHV driver (Leeds City Council licence 25232). Return legs where real-time flight tracking means the driver is waiting when you land.',
    ],
  },
]

const faqs = [
  {
    q: 'Do you have vehicles smaller than 8 seats?',
    a: 'No — we run a single 8-seater Mercedes-Benz Vito Tourer. You are welcome to book it for any number of passengers from 1 to 8; the fixed fare is the same either way, so smaller groups simply travel with more space.',
  },
  {
    q: 'Is the price per person or for the whole vehicle?',
    a: 'For the whole vehicle. The quoted fixed fare covers up to 8 passengers travelling together — there is no per-seat charge.',
  },
  {
    q: 'How much luggage fits with 8 passengers?',
    a: 'The Vito Tourer takes full-size suitcases for all 8 passengers plus hand luggage. For a full group with a full set of large cases, or for oversized items such as golf bags or ski equipment, let us know at booking so we can confirm and plan the load.',
  },
  {
    q: 'Can you fit child seats?',
    a: 'Yes — please request child or booster seats when booking and tell us the ages of the children so we bring the right ones. There is no extra charge.',
  },
  {
    q: 'Is an 8-seater comfortable for a long airport run?',
    a: 'Yes. The Mercedes-Benz Vito Tourer is a premium people carrier with proper seats, climate control, USB charging and ample legroom and boot space — it is built for long motorway journeys such as Leeds to Heathrow or Birmingham.',
  },
  {
    q: 'How do I get a fixed price for my group?',
    a: `Use the online quote form, message us on WhatsApp, or call ${site.phone}. Tell us your pickup address, airport, date, time and passenger and luggage numbers, and we will confirm the fixed fare as soon as possible.`,
  },
]

export default function EightSeaterPage() {
  const taxiLd = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: `${site.name} — 8-Seater Airport Transfers`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    telephone: site.phoneTel,
    areaServed: ['Leeds', 'West Yorkshire'],
    openingHours: 'Mo-Su 00:00-23:59',
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
      telephone: site.phoneTel,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '114 Cottingley Approach',
        addressLocality: 'Leeds',
        postalCode: 'LS11 0HH',
        addressCountry: 'GB',
      },
    },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Airport Transfers', item: `${SITE_URL}/airport-transfers` },
      { '@type': 'ListItem', position: 3, name: '8-Seater Transfers', item: `${SITE_URL}${PATH}` },
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
          <span className="text-cream/60">8-Seater Transfers</span>
        </div>
      </div>

      {/* 2. Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-vito.webp"
          alt="Mercedes-Benz Vito Tourer 8-seater — Ridecore Travel airport transfers from Leeds"
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
              8-Seater Airport Transfers from Leeds
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              One Mercedes-Benz Vito · up to 8 passengers · fixed price to every UK airport
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/booking"
                className="bg-gold text-charcoal font-semibold px-7 py-4 rounded-sm text-center tracking-wide hover:bg-gold/90 transition-colors text-sm"
              >
                Get a Group Quote
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

      {/* 3. Fixed fares */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Fixed Fares</span>
            <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mt-3 mb-8">
              8-Seater Prices from Leeds
            </h2>
            <FareTable />
          </div>
        </div>
      </section>

      {/* 3b. Intro + long-form sections */}
      <section className="bg-graphite py-20 border-t border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            {intro.map((para, i) => (
              <RichText
                key={i}
                text={para}
                className={
                  i === 0
                    ? 'text-cream/80 text-lg leading-relaxed font-light border-l-2 border-gold pl-5'
                    : 'text-grey text-base leading-relaxed'
                }
              />
            ))}
          </div>

          {sections.map((sec) => (
            <div key={sec.heading} className="flex flex-col gap-3">
              <h2 className="text-cream text-xl md:text-2xl font-semibold tracking-tight">{sec.heading}</h2>
              {sec.paragraphs.map((para, i) => (
                <RichText key={i} text={para} className="text-grey text-base leading-relaxed" />
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 4. The vehicle */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">The Fleet</span>
              <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight">
                Mercedes-Benz Vito Tourer — 8 Seats
              </h2>
              <p className="text-grey leading-relaxed">
                Spacious, climate-controlled and immaculately kept, with USB charging and a full-size boot.
                It is the only vehicle we run — every transfer, every route.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                {['8 Seats', 'Climate Control', 'USB Charging', 'Ample Boot Space'].map((f) => (
                  <span key={f} className="flex items-center gap-2 text-cream/60 text-sm">
                    <span className="text-gold text-[10px]">✦</span>{f}
                  </span>
                ))}
              </div>
              <Link href="/fleet" className="text-gold text-sm font-semibold hover:underline mt-1">
                More about the vehicle →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/fleet/vito-interior-1.webp"
                  alt="Mercedes Vito Tourer 8-seater interior seating"
                  fill className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/fleet/vito-luggage.webp"
                  alt="Mercedes Vito boot packed with suitcases for a full group"
                  fill className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <RouteFAQ faqs={faqs} />

      {/* 6. Booking form */}
      <BookingForm />

      {/* 7. Route pages */}
      <section className="bg-graphite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-cream text-lg font-semibold mb-7 tracking-tight">8-Seater Fixed Fares by Route</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {routePages.map((r) => {
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
                    <span className="text-gold font-bold text-sm flex-shrink-0 ml-4">£{price.exec8}</span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}
