import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site, SITE_URL } from '@/lib/site'
import BookingForm from '@/components/home/BookingForm'
import RouteFAQ from '@/components/RouteFAQ'
import RichText from '@/components/RichText'

const PATH = '/leeds-to-london-day-return'
const TITLE = 'Leeds to London Day Return | Fixed £800 | Ridecore Travel'
const DESCRIPTION =
  'Fixed-price Leeds to London day return, £800 with 8 hours free waiting time in London. Door-to-door 8-seater Mercedes-Benz Vito, one driver there and back. Licensed by Leeds City Council.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/images/hero/hero-vito.webp', width: 1200, height: 800 }],
  },
}

const intro = [
  "A day return to London usually means an early train, a fixed return time you can't move, and a taxi or Tube at both ends. Ridecore Travel's Leeds to London day return is one fixed fare for the whole round trip — your driver takes you down, waits with the vehicle, and brings you back the same day.",
  'This is built for business meetings, court dates, hospital appointments, conferences and one-off events where you need to be in London for part of the day and back in Leeds the same evening, without depending on train times or booking a separate return leg.',
]

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: 'How the £800 day return works',
    paragraphs: [
      'The £800 fixed fare covers the full round trip in one 8-seater [Mercedes-Benz Vito Tourer](/fleet) — door-to-door pickup anywhere in Leeds, the drive down to London, 8 hours of free waiting time at your destination, and the return drive back to Leeds. There is no meter, no surge pricing and no separate charge for the driver waiting during those 8 hours.',
      'Your journey is roughly 200 miles each way and typically takes around 4 hours depending on traffic and your exact London postcode — we build a realistic timing plan around your appointment when you book.',
    ],
  },
  {
    heading: 'What happens if you need longer than 8 hours',
    paragraphs: [
      'Most meetings, appointments and single-day events comfortably fit inside the included 8 hours. If your day runs over, let us know as early as possible — extra waiting time can usually be arranged, and we will confirm the rate with you directly rather than surprise you with it afterwards.',
    ],
  },
  {
    heading: 'Congestion Charge and ULEZ',
    paragraphs: [
      'Depending on your exact drop-off location within London, the Congestion Charge or ULEZ may apply. We will confirm whether this affects your specific route and pickup point when you book, so there are no surprises on the day.',
    ],
  },
  {
    heading: 'Why one fixed-price vehicle instead of the train',
    paragraphs: [
      "With a day return by train you are locked into a specific return service and still need transport at both ends. With Ridecore Travel, one 8-seater Mercedes-Benz Vito Tourer takes your whole group door-to-door, the same driver waits for you in London, and there's nothing to coordinate for the return leg — you simply travel back when your day is done.",
    ],
  },
]

const faqs = [
  {
    q: 'How much is a Leeds to London day return?',
    a: 'A Leeds to London day return with Ridecore Travel is a fixed £800, which includes 8 hours of free waiting time in London and the return journey back to Leeds. The price is agreed before you travel — no meter, no surge pricing and no hidden extras.',
  },
  {
    q: 'What is included in the 8 hours of free waiting time?',
    a: 'Your driver and vehicle wait with you in London at no extra charge for up to 8 hours from arrival, so you can attend a meeting, appointment or event and travel straight back without booking a separate return journey.',
  },
  {
    q: 'What happens if my day in London runs longer than 8 hours?',
    a: "Let us know as soon as you can. Extra waiting time beyond the included 8 hours can usually be arranged — we'll confirm the additional rate with you directly rather than add anything unexpected to your fare.",
  },
  {
    q: 'How long does the drive from Leeds to London take?',
    a: 'The journey is roughly 200 miles each way and typically takes around 4 hours, depending on traffic and your exact pickup and drop-off points. We plan your pickup time around your appointment in London.',
  },
  {
    q: 'Do I need to pay the Congestion Charge or ULEZ separately?',
    a: 'This depends on your exact drop-off location in London. We will confirm whether the Congestion Charge or ULEZ applies to your specific route and pickup point when you book.',
  },
  {
    q: 'How many passengers and how much luggage can the vehicle take?',
    a: 'Our Mercedes-Benz Vito Tourer seats up to 8 passengers with a generous boot for luggage, briefcases and equipment — ideal for a business group or a family day trip to London.',
  },
  {
    q: 'Can I book a Leeds to London day return for an early morning meeting?',
    a: 'Yes. We operate 24/7, so early-morning pickups for a morning meeting or appointment in London are no problem — tell us your appointment time when booking and we will confirm your pickup time.',
  },
  {
    q: 'Is this only for business travel?',
    a: "No. While it's popular for business meetings and court dates, the same fixed-price day return works equally well for events, appointments, or a family day out in London — the vehicle and price are the same either way.",
  },
]

export default function LondonDayReturnPage() {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: site.name,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    telephone: site.phoneTel,
    areaServed: ['London', 'Leeds', 'West Yorkshire'],
    openingHours: 'Mo-Su 00:00-23:59',
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
      { '@type': 'ListItem', position: 2, name: 'Leeds to London Day Return', item: `${SITE_URL}${PATH}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* 1. Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cream/60">Leeds to London Day Return</span>
        </div>
      </div>

      {/* 2. Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-vito.webp"
          alt="Mercedes-Benz Vito Tourer ready for a long-distance day return — Ridecore Travel Leeds to London"
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
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Fixed Price · Same-Day Return</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-[1.1] tracking-tight mb-4">
              Leeds to London Day Return — Fixed £800
            </h1>
            <p className="text-cream/70 text-lg mb-8">
              8 hours free waiting time · One driver there and back · Mercedes-Benz 8-Seater
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/booking"
                className="bg-gold text-charcoal font-semibold px-7 py-4 rounded-sm text-center tracking-wide hover:bg-gold/90 transition-colors text-sm"
              >
                Get a Quote
              </Link>
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
            <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mt-3 mb-6">
              Leeds to London Day Return Price
            </h2>
            <div className="bg-graphite border border-white/8 rounded-sm p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-cream font-semibold">Leeds ⇄ London — Round Trip</p>
                <p className="text-grey text-sm mt-1">Includes 8 hours of free waiting time in London</p>
              </div>
              <span className="text-gold font-bold text-3xl flex-shrink-0">£800</span>
            </div>
            <p className="text-grey text-xs italic mt-3">Fare is priced from Leeds City Centre. Extra waiting time beyond 8 hours can be arranged and confirmed at booking.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-charcoal font-bold text-sm px-6 py-3 rounded-sm tracking-wide hover:bg-gold/90 transition-colors"
              >
                Book via WhatsApp
              </a>
              <Link
                href="/booking"
                className="border border-white/20 text-cream font-semibold text-sm px-6 py-3 rounded-sm tracking-wide hover:border-gold/40 transition-colors"
              >
                Online Quote Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3b. Intro + long-form sections */}
      <section className="bg-charcoal pb-20 pt-4 border-t border-white/8">
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

      {/* 4. Why book this service */}
      <section className="bg-graphite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mb-10">
            What&apos;s Included in Your Day Return
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {[
              { title: 'Fixed £800 Return', copy: 'One fare for the whole round trip — agreed before you travel, no surge charges or surprises.' },
              { title: '8 Hours Free Waiting', copy: 'Your driver and vehicle wait with you in London at no extra charge for up to 8 hours.' },
              { title: '8-Seater Mercedes Vito', copy: 'Spacious, climate-controlled, and immaculately clean. Fits up to 8 passengers and luggage.' },
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
                Travel to London in comfort in our premium 8-seater Mercedes-Benz Vito Tourer. With reclining seats,
                climate control, ample luggage space and USB charging — built for a long day on the road, there and back.
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

      {/* 6. FAQ */}
      <RouteFAQ faqs={faqs} />

      {/* 7. Booking form — pre-filled */}
      <BookingForm defaultDropoff="London (Day Return)" />

      {/* 8. Related services */}
      <section className="bg-graphite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-cream text-lg font-semibold mb-7 tracking-tight">Other Ways We Can Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/airport-transfers/leeds-to-heathrow"
              className="group bg-charcoal border border-white/8 rounded-sm px-5 py-4 flex items-center justify-between hover:border-gold/30 transition-colors"
            >
              <div>
                <p className="text-cream text-sm font-medium group-hover:text-gold transition-colors">Leeds to Heathrow Airport</p>
                <p className="text-grey text-xs mt-0.5">One-way or return airport transfer</p>
              </div>
              <span className="text-gold text-sm flex-shrink-0 ml-4">→</span>
            </Link>
            <Link
              href="/airport-transfers"
              className="bg-charcoal border border-white/8 rounded-sm px-5 py-4 flex items-center justify-between hover:border-gold/30 transition-colors group"
            >
              <p className="text-cream text-sm font-medium group-hover:text-gold transition-colors">View All Fixed Fares</p>
              <span className="text-gold text-sm">→</span>
            </Link>
            <Link
              href="/services"
              className="bg-charcoal border border-white/8 rounded-sm px-5 py-4 flex items-center justify-between hover:border-gold/30 transition-colors group"
            >
              <p className="text-cream text-sm font-medium group-hover:text-gold transition-colors">All Services</p>
              <span className="text-gold text-sm">→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}
