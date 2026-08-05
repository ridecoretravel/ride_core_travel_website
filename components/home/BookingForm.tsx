'use client'

import { site } from '@/lib/site'
import QuoteForm from './QuoteForm'
import { CheckIcon, PhoneIcon, WAIcon } from './FormFields'

export default function BookingForm({ defaultDropoff }: { defaultDropoff?: string } = {}) {
  return (
    <section id="booking" className="bg-graphite py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="text-gold text-[10px] font-semibold tracking-widest uppercase">Book a Transfer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cream tracking-tight mt-3">
            Get Your 8-Seater Fixed-Price Quote
          </h2>
          <p className="text-grey mt-3 text-sm max-w-md mx-auto">
            Fill in your details and we&apos;ll confirm your fixed fare as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Form card ── */}
          <div className="lg:col-span-3">
            <QuoteForm defaultDropoff={defaultDropoff} />
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Trust points */}
            <div className="bg-charcoal border border-white/8 rounded-sm overflow-hidden">
              <div className="px-7 py-5 border-b border-white/8">
                <span className="text-cream text-sm font-semibold">What&apos;s included</span>
              </div>
              <div className="px-7 py-6 flex flex-col gap-5">
                {[
                  { icon: <CheckIcon />, title: 'Fixed price guaranteed', sub: 'Confirmed before you travel. Zero surprises.' },
                  { icon: <CheckIcon />, title: 'Flight tracking', sub: 'We monitor your flight and adjust pickup automatically.' },
                  { icon: <CheckIcon />, title: '24/7 availability', sub: 'Early mornings, late nights, bank holidays.' },
                  { icon: <CheckIcon />, title: 'Licensed & insured', sub: 'PHV Licence 25232 · Leeds City Council.' },
                  { icon: <CheckIcon />, title: 'Company No. 16758874', sub: 'Ridecore Travel Ltd — registered in England & Wales.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3.5 items-start">
                    <span className="text-gold mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-cream text-sm font-medium leading-snug">{item.title}</p>
                      <p className="text-grey text-xs mt-0.5 leading-snug">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call / WhatsApp cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="bg-charcoal border border-white/8 rounded-sm px-5 py-5 flex flex-col gap-2 hover:border-gold/30 hover:bg-white/2 transition-all group"
              >
                <span className="text-gold group-hover:scale-110 transition-transform inline-block"><PhoneIcon /></span>
                <span className="text-cream text-sm font-semibold">Call us</span>
                <span className="text-grey text-xs">{site.phone}</span>
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal border border-white/8 rounded-sm px-5 py-5 flex flex-col gap-2 hover:border-gold/30 hover:bg-white/2 transition-all group"
              >
                <span className="text-gold group-hover:scale-110 transition-transform inline-block"><WAIcon /></span>
                <span className="text-cream text-sm font-semibold">WhatsApp</span>
                <span className="text-grey text-xs">Message us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
