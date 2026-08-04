'use client'

import { useState, useEffect, useRef } from 'react'
import { site } from '@/lib/site'
import {
  AIRPORTS, PremiumInput, PassengersField, ReturnJourneyToggle, DropdownArrow,
  CheckIcon, SpinnerIcon, LocIcon, LuggageIcon, StopsIcon, PlaneIcon, DestIcon,
  CalIcon, TimeIcon, UserIcon, MailIcon, PhoneIcon, WAIcon,
} from './FormFields'

interface Fields {
  name: string
  email: string
  phone: string
  passengers: string
  pickup: string
  dropoff: string
  date: string
  time: string
  luggage: string
  additionalStops: string
  returnJourney: boolean
  returnDate: string
  returnTime: string
  flightNumber: string
}

const empty: Fields = {
  name: '', email: '', phone: '', passengers: '1',
  pickup: '', dropoff: '', date: '', time: '',
  luggage: '', additionalStops: '',
  returnJourney: false, returnDate: '', returnTime: '', flightNumber: '',
}

export default function BookingForm({ defaultDropoff }: { defaultDropoff?: string } = {}) {
  const [fields, setFields] = useState<Fields>({ ...empty, dropoff: defaultDropoff ?? '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [pcLookup, setPcLookup] = useState<'idle'|'loading'|'ok'|'err'>('idle')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const UK_PC = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i
    const trimmed = fields.pickup.trim()
    if (!UK_PC.test(trimmed)) { setPcLookup('idle'); return }
    if (timerRef.current) clearTimeout(timerRef.current)
    setPcLookup('loading')
    timerRef.current = setTimeout(async () => {
      try {
        const pc = trimmed.replace(/\s+/g, '')
        const res = await fetch(`https://api.postcodes.io/postcodes/${pc}`)
        const json = await res.json()
        if (json.status === 200) {
          const { postcode, admin_ward, admin_district } = json.result
          setFields(prev => ({ ...prev, pickup: `${postcode}, ${admin_ward}, ${admin_district}` }))
          setPcLookup('ok')
        } else {
          setPcLookup('err')
        }
      } catch {
        setPcLookup('err')
      }
    }, 400)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [fields.pickup])

  // Receive pre-fill from hero widget
  useEffect(() => {
    function onPrefill(e: Event) {
      const d = (e as CustomEvent).detail
      setFields(prev => ({ ...prev, ...d }))
    }
    window.addEventListener('prefill-booking', onPrefill)
    return () => window.removeEventListener('prefill-booking', onPrefill)
  }, [])

  function set(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFields(prev => ({ ...prev, [key]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
    } catch {
      // Fallback: mailto
      const body = encodeURIComponent(
        Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n')
      )
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Quote Request â€” Ridecore Travel')}&body=${body}`
      setStatus('idle')
    }
  }

  const today = new Date().toISOString().split('T')[0]

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

          {/* â”€â”€ Form card â”€â”€ */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="bg-charcoal border border-gold/20 rounded-sm flex flex-col items-center justify-center gap-5 py-20 px-8 text-center">
                <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#b29a75" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-cream text-xl font-semibold tracking-tight">Quote Request Received</h3>
                <p className="text-grey text-sm max-w-xs leading-relaxed">
                  We&apos;ll send your fixed-price quote as soon as possible. Check your email or phone.
                </p>
                <button
                  onClick={() => { setFields(empty); setStatus('idle') }}
                  className="mt-2 text-gold text-xs tracking-widest uppercase font-semibold hover:underline"
                >
                  Submit another â†’
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-charcoal border border-white/8 rounded-sm overflow-hidden">

                {/* Form header stripe */}
                <div className="px-8 py-5 border-b border-white/8 flex items-center justify-between">
                  <span className="text-cream text-sm font-semibold tracking-tight">Journey Details</span>
                  <span className="text-grey text-xs">All fields required</span>
                </div>

                <div className="px-8 py-7 grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Route row */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-2 text-grey text-[10px] font-semibold tracking-widest uppercase">
                      <span className="text-gold"><LocIcon /></span>Pickup address
                    </label>
                    <div className="relative">
                      <input
                        name="pickup"
                        type="text"
                        placeholder="e.g. LS11 0HH or full address"
                        value={fields.pickup}
                        onChange={e => { setFields(prev => ({ ...prev, pickup: e.target.value })); setPcLookup('idle') }}
                        required
                        className={`w-full bg-graphite border border-white/10 text-cream text-sm px-4 py-3.5 pr-9 rounded-sm placeholder:text-grey/50 focus:outline-none focus:border-gold/50 focus:bg-white/3 transition-all ${pcLookup === 'ok' ? 'border-gold/60' : ''}`}
                      />
                      {pcLookup === 'loading' && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2">
                          <svg className="animate-spin text-gold" width="14" height="14" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                          </svg>
                        </span>
                      )}
                      {pcLookup === 'ok' && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gold text-sm">âœ“</span>}
                    </div>
                    <p className="text-grey/50 text-[10px]">Type your postcode and it will auto-fill your area</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-2 text-grey text-[10px] font-semibold tracking-widest uppercase">
                      <span className="text-gold"><DestIcon /></span>
                      Drop-off / Airport
                    </label>
                    <div className="relative">
                      <select
                        name="dropoff"
                        value={fields.dropoff}
                        onChange={set('dropoff')}
                        required
                        className="w-full appearance-none bg-graphite border border-white/10 text-cream text-sm px-4 py-3.5 rounded-sm focus:outline-none focus:border-gold/50 focus:bg-white/3 transition-all pr-9 [&>option]:bg-charcoal"
                      >
                        <option value="">Select airport or destination</option>
                        {AIRPORTS.map(a => <option key={a} value={a}>{a}</option>)}
                      </select>
                      <DropdownArrow />
                    </div>
                  </div>

                  {/* Date / Time */}
                  <PremiumInput
                    label="Pickup date"
                    icon={<CalIcon />}
                    name="date"
                    type="date"
                    value={fields.date}
                    onChange={set('date')}
                    min={today}
                    required
                  />
                  <PremiumInput
                    label="Pickup time"
                    icon={<TimeIcon />}
                    name="time"
                    type="time"
                    value={fields.time}
                    onChange={set('time')}
                    required
                  />

                  {/* Luggage */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-2 text-grey text-[10px] font-semibold tracking-widest uppercase">
                      <span className="text-gold"><LuggageIcon /></span>
                      Luggage
                    </label>
                    <div className="relative">
                      <select name="luggage" value={fields.luggage} onChange={set('luggage')} required
                        className="w-full appearance-none bg-graphite border border-white/10 text-cream text-sm px-4 py-3.5 rounded-sm focus:outline-none focus:border-gold/50 transition-all pr-9 [&>option]:bg-charcoal">
                        <option value="">Select luggage amount</option>
                        <option>1â€“2 bags</option>
                        <option>3â€“4 bags</option>
                        <option>5â€“6 bags</option>
                        <option>7+ / oversized bags</option>
                      </select>
                      <DropdownArrow />
                    </div>
                  </div>

                  {/* Additional stops */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-2 text-grey text-[10px] font-semibold tracking-widest uppercase">
                      <span className="text-gold"><StopsIcon /></span>
                      Additional stops
                    </label>
                    <input
                      name="additionalStops"
                      type="text"
                      placeholder="e.g. Pick up from Hotel Indigo, Leeds (optional)"
                      value={fields.additionalStops}
                      onChange={set('additionalStops')}
                      className="bg-graphite border border-white/10 text-cream text-sm px-4 py-3.5 rounded-sm focus:outline-none focus:border-gold/50 transition-all placeholder:text-grey/50"
                    />
                  </div>

                  {/* Passengers */}
                  <PassengersField value={fields.passengers} onChange={n => setFields(prev => ({ ...prev, passengers: n }))} />

                  {/* Return journey toggle */}
                  <ReturnJourneyToggle
                    checked={fields.returnJourney}
                    onToggle={() => setFields(prev => ({ ...prev, returnJourney: !prev.returnJourney, returnDate: '', returnTime: '' }))}
                  />

                  {/* Return date / time â€” shown when toggle on */}
                  {fields.returnJourney && (
                    <>
                      <PremiumInput
                        label="Return date"
                        icon={<CalIcon />}
                        name="returnDate"
                        type="date"
                        value={fields.returnDate}
                        onChange={e => setFields(prev => ({ ...prev, returnDate: e.target.value }))}
                        min={fields.date || today}
                        required={fields.returnJourney}
                      />
                      <PremiumInput
                        label="Return time"
                        icon={<TimeIcon />}
                        name="returnTime"
                        type="time"
                        value={fields.returnTime}
                        onChange={e => setFields(prev => ({ ...prev, returnTime: e.target.value }))}
                        required={fields.returnJourney}
                      />
                      <PremiumInput
                        label="Flight number"
                        icon={<PlaneIcon />}
                        name="flightNumber"
                        type="text"
                        placeholder="e.g. BA1234"
                        value={fields.flightNumber}
                        onChange={set('flightNumber')}
                      />
                    </>
                  )}

                  {/* Divider */}
                  <div className="sm:col-span-2 border-t border-white/6 -mx-8 px-8 pt-5">
                    <span className="text-grey text-[10px] font-semibold tracking-widest uppercase">Your details</span>
                  </div>

                  <PremiumInput
                    label="Full name"
                    icon={<UserIcon />}
                    name="name"
                    type="text"
                    placeholder="First and last name"
                    value={fields.name}
                    onChange={set('name')}
                    required
                  />
                  <PremiumInput
                    label="Email"
                    icon={<MailIcon />}
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={set('email')}
                    required
                  />
                  <PremiumInput
                    label="Phone"
                    icon={<PhoneIcon />}
                    name="phone"
                    type="tel"
                    placeholder="07xxx xxxxxx"
                    value={fields.phone}
                    onChange={set('phone')}
                    required
                  />

                  {/* Submit */}
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-gold text-charcoal font-bold text-sm tracking-widest uppercase py-4 rounded-sm hover:bg-gold/90 active:scale-[.99] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {status === 'sending' ? (
                        <>
                          <SpinnerIcon />
                          Sendingâ€¦
                        </>
                      ) : (
                        'Get My Fixed-Price Quote â†’'
                      )}
                    </button>
                    <p className="text-grey text-[11px] text-center mt-3">
                      No payment taken now. We confirm your price as soon as possible.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* â”€â”€ Sidebar â”€â”€ */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Trust points */}
            <div className="bg-charcoal border border-white/8 rounded-sm overflow-hidden">
              <div className="px-7 py-5 border-b border-white/8">
                <span className="text-cream text-sm font-semibold">What's included</span>
              </div>
              <div className="px-7 py-6 flex flex-col gap-5">
                {[
                  { icon: <CheckIcon />, title: 'Fixed price guaranteed', sub: 'Confirmed before you travel. Zero surprises.' },
                  { icon: <CheckIcon />, title: 'Flight tracking', sub: 'We monitor your flight and adjust pickup automatically.' },
                  { icon: <CheckIcon />, title: '24/7 availability', sub: 'Early mornings, late nights, bank holidays.' },
                  { icon: <CheckIcon />, title: 'Licensed & insured', sub: 'PHV Licence 25232 Â· Leeds City Council.' },
                  { icon: <CheckIcon />, title: 'Company No. 16758874', sub: 'Ridecore Travel Ltd â€” registered in England & Wales.' },
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
