import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us | Ridecore Travel | Leeds Airport Transfers',
  description:
    'Ridecore Travel is a licensed Leeds-based airport transfer company. Premium fleet, fixed prices, 24/7. Licensed by Leeds City Council — PHV Licence 25232.',
  alternates: { canonical: '/about-us' },
  openGraph: {
    title: 'About Ridecore Travel | Leeds Airport Transfers',
    description: 'Licensed Leeds airport transfer company. Fixed prices, professional drivers, premium fleet. Available 24/7.',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cream/60">About</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/trust/vito-licensed.webp"
          alt="Ridecore Travel licensed Mercedes Vito — Leeds City Council PHV licensed vehicle"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-28">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Leeds-Based · Fully Licensed</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream tracking-tight leading-[1.1] mb-4">
              About Ridecore Travel
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              A professional, licensed airport transfer company based in Leeds — built around reliability, fixed pricing, and a premium experience.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight">
                Leeds-Based. Licensed. Professional.
              </h2>
              <div className="flex flex-col gap-4 text-grey text-sm leading-relaxed">
                <p>
                  Ridecore Travel is a private hire transfer company based in Leeds, West Yorkshire. We specialise in
                  fixed-price airport transfers with a premium fleet to provide
                  comfortable, reliable journeys for individuals, families, and groups.
                </p>
                <p>
                  We are fully licensed by Leeds City Council under PHV Licence 25232, and registered in England and
                  Wales as Ridecore Travel Ltd (Company No. 16758874). Every journey is fully insured and carried out
                  by a professional, DBS-checked driver.
                </p>
                <p>
                  Our commitment is simple: a fixed price agreed before you travel, a professional driver who arrives
                  on time, and a clean, comfortable vehicle that makes the start and end of your journey stress-free.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-4">
              {[
                { label: 'Licensing Authority', value: 'Leeds City Council' },
                { label: 'PHV Licence', value: '25232' },
                { label: 'Company Name', value: 'Ridecore Travel Ltd' },
                { label: 'Company Number', value: '16758874' },
                { label: 'Incorporated', value: '2nd October 2025' },
                { label: 'Registered In', value: 'England & Wales' },
                { label: 'Fleet', value: 'Premium Vehicles' },
                { label: 'Capacity', value: 'Up to 8 passengers' },
                { label: 'Availability', value: '24/7 · Mon–Sun · 365 days' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/6">
                  <span className="text-grey text-sm">{item.label}</span>
                  <span className="text-cream text-sm font-semibold text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-graphite py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">What We Stand For</span>
          <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight mt-3 mb-10">
            Our Commitments
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Fixed Prices Always', body: 'Your price is agreed before your journey begins. No surge pricing, no hidden extras, no surprises on arrival.' },
              { title: 'Punctuality', body: 'We track your flight and monitor traffic in real time. Your driver will be ready when you are — not a minute later.' },
              { title: 'Professionalism', body: 'Every driver is DBS-checked, licensed by Leeds City Council, and committed to a courteous, professional service.' },
              { title: 'Premium Fleet', body: 'Immaculately maintained vehicles. Clean, comfortable, and climate-controlled every single journey.' },
              { title: 'Transparency', body: 'No small print surprises. Our cancellation policy, payment terms, and pricing are clear from the start.' },
              { title: '24/7 Availability', body: 'Early departures, late-night arrivals, bank holidays — we operate around your schedule, not ours.' },
            ].map((v) => (
              <div key={v.title} className="flex flex-col gap-3 bg-charcoal border border-white/8 rounded-sm p-6 hover:border-gold/20 transition-colors">
                <span className="text-gold text-xs">✦</span>
                <h3 className="text-cream font-semibold tracking-tight">{v.title}</h3>
                <p className="text-grey text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet image */}
      <section className="bg-charcoal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/fleet/vito-interior-1.webp"
                alt="Mercedes Vito Tourer interior — premium 8-seater airport transfer vehicle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">The Fleet</span>
              <h2 className="text-2xl font-bold text-cream tracking-tight">Premium Fleet. Done Right.</h2>
              <p className="text-grey text-sm leading-relaxed">
                We operate a carefully maintained premium fleet, ensuring every journey meets the same high standard.
                Our vehicles are kept immaculately clean and serviced to the highest level.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase hover:underline"
              >
                View our services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="bg-graphite py-16 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-cream tracking-tight mb-3">Get in Touch</h2>
              <div className="flex flex-col gap-3 text-sm">
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-3 text-grey hover:text-gold transition-colors">
                  <span className="text-gold">📞</span>{site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-grey hover:text-gold transition-colors lowercase">
                  <span className="text-gold">✉</span>{site.email}
                </a>
                <span className="flex items-center gap-3 text-grey">
                  <span className="text-gold">📍</span>{site.address}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:items-end gap-3">
              <Link href="/booking"
                className="bg-gold text-charcoal font-bold text-sm px-7 py-4 rounded-sm tracking-wide hover:bg-gold/90 transition-colors text-center">
                Book a Transfer
              </Link>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer"
                className="border border-white/20 text-cream font-semibold text-sm px-7 py-4 rounded-sm tracking-wide hover:border-gold/40 transition-colors text-center">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}

