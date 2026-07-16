'use client'

import { useState, useEffect } from 'react'
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
}

const empty: Fields = {
  name: '', email: '', phone: '', passengers: '1',
  pickup: '', dropoff: '', date: '', time: '',
  luggage: '', additionalStops: '',
  returnJourney: false, returnDate: '', returnTime: '',
}

export default function BookingForm({ defaultDropoff }: { defaultDropoff?: string } = {}) {
  const [fields, setFields] = useState<Fields>({ ...empty, dropoff: defaultDropoff ?? '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

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
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Quote Request — Ridecore Travel')}&body=${body}`
      setStatus('idle')
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section id="booking" className="bg-graphite py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="text-gold text-[10px] font-semibold tracking-widest uppercase">Book a Transfer</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cream tracking-tight mt-3">
            Get Your Fixed-Price Quote
          </h2>
          <p className="text-grey mt-3 text-sm max-w-md mx-auto">
            Fill in your details and we&apos;ll confirm your fixed fare as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Form card ── */}
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
                  Submit another →
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
                  <PremiumInput
                    label="Pickup address"
                    icon={<LocIcon />}
                    name="pickup"
                    type="text"
                    placeholder="Street address or postcode"
                    value={fields.pickup}
                    onChange={set('pickup')}
                    required
                  />
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
                        <option>1–2 bags</option>
                        <option>3–4 bags</option>
                        <option>5–6 bags</option>
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

                  {/* Return journey toggle */}
                  <div className="sm:col-span-2">
                    <label className="flex items-center gap-3 cursor-pointer select-none group">
                      <button
                        type="button"
                        role="switch"
                        aria-checked={fields.returnJourney}
                        onClick={() => setFields(prev => ({ ...prev, returnJourney: !prev.returnJourney, returnDate: '', returnTime: '' }))}
                        className={`relative w-10 h-5 rounded-full border transition-all duration-200 flex-shrink-0 ${
                          fields.returnJourney ? 'bg-gold border-gold' : 'bg-white/8 border-white/15'
                        }`}
                      >
                        <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${fields.returnJourney ? 'translate-x-5' : ''}`} />
                      </button>
                      <span className="text-cream/80 text-sm font-medium">Add return journey</span>
                      {fields.returnJourney && (
                        <span className="text-gold text-xs font-semibold tracking-wide ml-auto">Return details below ↓</span>
                      )}
                    </label>
                  </div>

                  {/* Return date / time — shown when toggle on */}
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
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-2 text-grey text-[10px] font-semibold tracking-widest uppercase">
                      <span className="text-gold"><PaxIcon /></span>
                      Passengers
                    </label>
                    <div className="flex gap-2">
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <button
                          key={n}
                          type="button"
                          onClick={() => setFields(prev => ({ ...prev, passengers: String(n) }))}
                          className={`flex-1 py-3 text-sm font-semibold rounded-sm border transition-all ${
                            fields.passengers === String(n)
                              ? 'bg-gold text-charcoal border-gold'
                              : 'bg-graphite border-white/10 text-grey hover:border-gold/30 hover:text-cream'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>

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
                          Sending…
                        </>
                      ) : (
                        'Get My Fixed-Price Quote →'
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

          {/* ── Sidebar ── */}
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

/* ── Sub-components ── */

function PremiumInput({
  label, icon, name, type, placeholder, value, onChange, required, min,
}: {
  label: string; icon: React.ReactNode; name: string; type: string;
  placeholder?: string; value: string; onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean; min?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="flex items-center gap-2 text-grey text-[10px] font-semibold tracking-widest uppercase">
        <span className="text-gold">{icon}</span>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        min={min}
        className="bg-graphite border border-white/10 text-cream text-sm px-4 py-3.5 rounded-sm focus:outline-none focus:border-gold/50 focus:bg-white/3 transition-all placeholder:text-grey/50 [color-scheme:dark]"
      />
    </div>
  )
}

function DropdownArrow() {
  return (
    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-grey">
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}
function SpinnerIcon() {
  return (
    <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
    </svg>
  )
}
function LocIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg> }
function LuggageIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg> }
function StopsIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-6m0 0V3m0 12H6m6 0h6"/></svg> }
function DestIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg> }
function CalIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg> }
function TimeIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> }
function UserIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"/></svg> }
function PaxIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg> }
function MailIcon() { return <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg> }
function PhoneIcon() { return <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg> }
function WAIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> }
