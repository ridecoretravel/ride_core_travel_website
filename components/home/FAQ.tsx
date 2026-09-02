'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Are the prices fixed?',
    a: 'Yes. All prices shown are fixed fares. There are no surge charges, no peak-time premiums, and no hidden extras. The price you see when you enquire is exactly what you pay.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfer, cash, and all major debit/credit cards. Payment details are confirmed when your booking is accepted.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We ask for at least 24 hours notice for cancellations. Cancellations made with less notice may incur a fee. Please contact us as soon as possible if your plans change.',
  },
  {
    q: 'Do you offer meet & greet at the airport?',
    a: 'Yes. We offer a full meet & greet service — your driver will be waiting in the arrivals hall with a name board when you land.',
  },
  {
    q: 'What happens if my flight is delayed?',
    a: 'We track all flights in real time. If your flight is delayed, we automatically adjust your pickup time at no extra charge. You will not be charged for waiting time caused by a delayed flight.',
  },
  {
    q: 'How much luggage can I bring?',
    a: 'The Mercedes-Benz Vito Tourer has a generous boot that comfortably accommodates full-sized suitcases for all 8 passengers. If you have oversized items such as golf bags or wheelchairs, please mention this when booking.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We are based in Leeds and transfer to all major UK airports including Leeds Bradford (LBA), Manchester, Liverpool, East Midlands, Newcastle, Birmingham, and London Heathrow. We can also cover other UK-wide destinations — contact us to check.',
  },
  {
    q: 'Are you available 24/7?',
    a: 'Yes. We operate 24 hours a day, 7 days a week, 365 days a year — including Christmas and bank holidays. Early-morning departures and late-night arrivals are our speciality.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section className="bg-cream py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">FAQ</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y divide-charcoal/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-charcoal font-medium text-base leading-snug">{faq.q}</span>
                <span className={`text-gold flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                  <PlusIcon />
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-charcoal/60 text-sm leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PlusIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}
