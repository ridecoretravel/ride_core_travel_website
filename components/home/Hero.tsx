'use client'

import Image from 'next/image'
import { useState } from 'react'
import { site } from '@/lib/site'

const AIRPORTS = [
  'Leeds Bradford Airport (LBA)',
  'Manchester Airport',
  'Liverpool Airport',
  'London Heathrow',
  'London Gatwick',
  'Birmingham Airport',
  'Edinburgh Airport',
  'Bristol Airport',
  'Other destination',
]

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Hero() {
  const [pickup, setPickup]         = useState('')
  const [dropoff, setDropoff]       = useState('')
  const [date, setDate]             = useState('')
  const [time, setTime]             = useState('')
  const [passengers, setPassengers] = useState('1')
  const [name, setName]             = useState('')
  const [phone, setPhone]           = useState('')
  const [email, setEmail]           = useState('')
  const [returnOn, setReturnOn]     = useState(false)
  const [returnDate, setReturnDate] = useState('')
  const [returnTime, setReturnTime] = useState('')
  const [flightNumber, setFlightNumber] = useState('')
  const [luggage, setLuggage]       = useState('')
  const [stopsOn, setStopsOn]       = useState(false)
  const [stops, setStops]           = useState('')
  const [status, setStatus]         = useState<Status>('idle')

  const today = new Date().toISOString().split('T')[0]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, email, phone, passengers,
          pickup, dropoff, date, time,
          luggage,
          additionalStops: stopsOn ? stops : '',
          returnJourney: returnOn,
          returnDate: returnOn ? returnDate : '',
          returnTime: returnOn ? returnTime : '',
          flightNumber: returnOn ? flightNumber : '',
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

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
        <div className="bg-charcoal/85 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden">

          <div className="px-5 py-3.5 border-b border-white/8 flex items-center justify-between">
            <span className="text-cream text-sm font-semibold">Get Your 8-Seater Fixed-Price Quote</span>
            <span className="text-grey text-xs">Please note: We only provide 8-seater airport transfers.</span>
          </div>

          {status === 'sent' ? (
            <div className="px-6 py-14 flex flex-col items-center gap-4 text-center">
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#b29a75" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-cream text-xl font-semibold">Quote Request Sent!</h3>
              <p className="text-grey text-sm max-w-sm leading-relaxed">
                We've received your details and will be in touch as soon as possible with your fixed price. Check your email or phone.
              </p>
              <button
                onClick={() => { setStatus('idle'); setName(''); setEmail(''); setPhone(''); setPickup(''); setDropoff(''); setDate(''); setTime(''); setPassengers('1'); setReturnOn(false); setLuggage(''); setStopsOn(false); setStops(''); setFlightNumber('') }}
                className="mt-2 text-gold text-xs tracking-widest uppercase font-semibold hover:underline"
              >
                Submit another →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                {/* Pickup */}
                <Field label="Pickup address">
                  <input
                    type="text"
                    value={pickup}
                    onChange={e => setPickup(e.target.value)}
                    placeholder="Full address including postcode"
                    required
                    className={input}
                  />
                </Field>

                {/* Drop-off */}
                <Field label="Drop-off / Airport">
                  <div className="relative">
                    <select value={dropoff} onChange={e => setDropoff(e.target.value)} required className={`${input} appearance-none pr-8 [&>option]:bg-charcoal`}>
                      <option value="">Select airport</option>
                      {AIRPORTS.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                    <Chevron />
                  </div>
                </Field>

                {/* Date */}
                <Field label="Date">
                  <input type="date" value={date} onChange={e => setDate(e.target.value)} min={today} required className={`${input} [color-scheme:dark]`} />
                </Field>

                {/* Time */}
                <Field label="Time">
                  <input type="time" value={time} onChange={e => setTime(e.target.value)} required className={`${input} [color-scheme:dark]`} />
                </Field>

                {/* Passengers */}
                <Field label="Passengers">
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <button key={n} type="button" onClick={() => setPassengers(String(n))}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-sm border transition-all ${passengers === String(n) ? 'bg-gold text-charcoal border-gold' : 'bg-white/5 border-white/12 text-grey hover:border-gold/30 hover:text-cream'}`}>
                        {n}
                      </button>
                    ))}
                  </div>
                </Field>

                {/* Luggage */}
                <Field label="Luggage">
                  <div className="relative">
                    <select value={luggage} onChange={e => setLuggage(e.target.value)} required className={`${input} appearance-none pr-8 [&>option]:bg-charcoal`}>
                      <option value="">Select luggage amount</option>
                      <option>1–2 bags</option>
                      <option>3–4 bags</option>
                      <option>5–6 bags</option>
                      <option>7+ / oversized bags</option>
                    </select>
                    <Chevron />
                  </div>
                </Field>

                {/* Return journey toggle */}
                <Field label="Return journey?">
                  <div className="flex items-center h-[42px] gap-3">
                    <button type="button" role="switch" aria-checked={returnOn} onClick={() => setReturnOn(v => !v)}
                      className={`relative w-10 h-5 rounded-full border transition-all flex-shrink-0 ${returnOn ? 'bg-gold border-gold' : 'bg-white/8 border-white/15'}`}>
                      <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${returnOn ? 'translate-x-5' : ''}`} />
                    </button>
                    <span className="text-cream/70 text-sm">{returnOn ? 'Yes — add return details' : 'One way'}</span>
                  </div>
                </Field>

                {/* Additional stops */}
                <Field label="Additional stops?">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center h-[42px] gap-3">
                      <button type="button" role="switch" aria-checked={stopsOn} onClick={() => setStopsOn(v => !v)}
                        className={`relative w-10 h-5 rounded-full border transition-all flex-shrink-0 ${stopsOn ? 'bg-gold border-gold' : 'bg-white/8 border-white/15'}`}>
                        <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${stopsOn ? 'translate-x-5' : ''}`} />
                      </button>
                      <span className="text-cream/70 text-sm">{stopsOn ? 'Yes — add stop details' : 'No additional stops'}</span>
                    </div>
                    {stopsOn && (
                      <input type="text" value={stops} onChange={e => setStops(e.target.value)} placeholder="e.g. Pick up from Hotel Indigo, Leeds" required className={input} />
                    )}
                  </div>
                </Field>

                {/* Return fields — date, time & flight number */}
                {returnOn && (
                  <>
                    <Field label="Return date">
                      <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} min={date || today} required className={`${input} [color-scheme:dark]`} />
                    </Field>
                    <Field label="Return time">
                      <input type="time" value={returnTime} onChange={e => setReturnTime(e.target.value)} required className={`${input} [color-scheme:dark]`} />
                    </Field>
                    <Field label="Flight number">
                      <input type="text" value={flightNumber} onChange={e => setFlightNumber(e.target.value)} placeholder="e.g. BA1234" className={input} />
                    </Field>
                  </>
                )}

                {/* Divider */}
                <div className="sm:col-span-2 lg:col-span-3 border-t border-white/8 pt-1">
                  <span className="text-grey text-[10px] font-semibold tracking-widest uppercase">Your details</span>
                </div>

                {/* Personal details */}
                <Field label="Full name">
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="First and last name" required className={input} />
                </Field>
                <Field label="Phone number">
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="07xxx xxxxxx" required className={input} />
                </Field>
                <Field label="Email address">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required className={input} />
                </Field>

                {/* Submit */}
                <div className="sm:col-span-2 lg:col-span-3 pt-1">
                  {status === 'error' && (
                    <p className="text-red-400 text-xs mb-2">Something went wrong — please try again or call us directly.</p>
                  )}
                  <button type="submit" disabled={status === 'sending'}
                    className="w-full bg-gold text-charcoal font-bold text-sm tracking-widest uppercase py-4 rounded-sm hover:bg-gold/90 active:scale-[.99] transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                        </svg>
                        Sending…
                      </>
                    ) : 'Get My Fixed-Price Quote →'}
                  </button>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 justify-center">
                    {['Fixed price · no surprises', 'No payment now', '24/7 availability'].map(t => (
                      <span key={t} className="text-cream/40 text-[11px] flex items-center gap-1.5">
                        <span className="text-gold text-[8px]">✦</span>{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Route quick-links */}
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { label: 'Leeds Bradford Airport', href: '/airport-transfers/leeds-bradford-airport-taxi' },
            { label: 'Manchester Airport',     href: '/airport-transfers/leeds-to-manchester-airport' },
            { label: 'Liverpool Airport',      href: '/airport-transfers/leeds-to-liverpool-airport' },
            { label: 'London Heathrow',        href: '/airport-transfers/leeds-to-heathrow' },
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

const input = 'w-full bg-white/5 border border-white/12 text-cream text-sm px-3.5 py-2.5 rounded-sm placeholder:text-grey/50 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-gold text-[10px] font-semibold tracking-widest uppercase">{label}</label>
      {children}
    </div>
  )
}

function Chevron() {
  return (
    <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-grey">
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}
