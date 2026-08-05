'use client'

import { useState } from 'react'
import {
  AIRPORTS, PremiumInput, PremiumSelect, PassengersField, ReturnJourneyToggle, FieldLabel,
  LocIcon, DestIcon, CalIcon, TimeIcon, LuggageIcon, StopsIcon, PlaneIcon, UserIcon, MailIcon, PhoneIcon,
} from './FormFields'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function QuoteForm({ defaultDropoff }: { defaultDropoff?: string } = {}) {
  const [pickup, setPickup]         = useState('')
  const [dropoff, setDropoff]       = useState(defaultDropoff ?? '')
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
          additionalStops: stops,
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
    <div className="bg-charcoal/85 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden">

      <div className="px-5 py-3.5 border-b border-white/8 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 sm:justify-between">
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
            We&apos;ve received your details and will be in touch as soon as possible with your fixed price. Check your email or phone.
          </p>
          <button
            onClick={() => { setStatus('idle'); setName(''); setEmail(''); setPhone(''); setPickup(''); setDropoff(defaultDropoff ?? ''); setDate(''); setTime(''); setPassengers('1'); setReturnOn(false); setLuggage(''); setStops(''); setFlightNumber('') }}
            className="mt-2 text-gold text-xs tracking-widest uppercase font-semibold hover:underline"
          >
            Submit another →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

            {/* Pickup */}
            <PremiumInput
              label="Pickup address"
              icon={<LocIcon />}
              name="pickup"
              type="text"
              value={pickup}
              onChange={e => setPickup(e.target.value)}
              placeholder="Full address including postcode"
              required
            />

            {/* Drop-off */}
            <PremiumSelect
              label="Drop-off / Airport"
              icon={<DestIcon />}
              name="dropoff"
              value={dropoff}
              onChange={e => setDropoff(e.target.value)}
              required
              placeholder="Select airport"
              options={AIRPORTS}
            />

            {/* Date */}
            <PremiumInput
              label="Date"
              icon={<CalIcon />}
              name="date"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              min={today}
              required
            />

            {/* Time */}
            <PremiumInput
              label="Time"
              icon={<TimeIcon />}
              name="time"
              type="time"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
            />

            {/* Passengers */}
            <PassengersField value={passengers} onChange={setPassengers} />

            {/* Luggage */}
            <PremiumSelect
              label="Luggage"
              icon={<LuggageIcon />}
              name="luggage"
              value={luggage}
              onChange={e => setLuggage(e.target.value)}
              required
              placeholder="Select luggage amount"
              options={['1–2 bags', '3–4 bags', '5–6 bags', '7+ / oversized bags']}
            />

            {/* Additional stops */}
            <div className="flex flex-col gap-1.5">
              <FieldLabel icon={<StopsIcon />}>Additional stops</FieldLabel>
              <input
                type="text"
                value={stops}
                onChange={e => setStops(e.target.value)}
                placeholder="e.g. Pick up from Hotel Indigo, Leeds (optional)"
                className="w-full bg-graphite border border-white/10 text-cream text-sm px-4 py-3.5 rounded-sm placeholder:text-grey/50 focus:outline-none focus:border-gold/50 focus:bg-white/3 transition-all"
              />
            </div>

            {/* Return journey toggle */}
            <ReturnJourneyToggle checked={returnOn} onToggle={() => setReturnOn(v => !v)} />

            {/* Return fields — date, time & flight number */}
            {returnOn && (
              <>
                <PremiumInput
                  label="Return date"
                  icon={<CalIcon />}
                  name="returnDate"
                  type="date"
                  value={returnDate}
                  onChange={e => setReturnDate(e.target.value)}
                  min={date || today}
                  required
                />
                <PremiumInput
                  label="Return time"
                  icon={<TimeIcon />}
                  name="returnTime"
                  type="time"
                  value={returnTime}
                  onChange={e => setReturnTime(e.target.value)}
                  required
                />
                <PremiumInput
                  label="Flight number"
                  icon={<PlaneIcon />}
                  name="flightNumber"
                  type="text"
                  value={flightNumber}
                  onChange={e => setFlightNumber(e.target.value)}
                  placeholder="e.g. BA1234"
                />
              </>
            )}

            {/* Divider */}
            <div className="sm:col-span-2 lg:col-span-3 border-t border-white/8 pt-1">
              <span className="text-grey text-[10px] font-semibold tracking-widest uppercase">Your details</span>
            </div>

            {/* Personal details */}
            <PremiumInput
              label="Full name"
              icon={<UserIcon />}
              name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="First and last name"
              required
            />
            <PremiumInput
              label="Phone number"
              icon={<PhoneIcon />}
              name="phone"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="07xxx xxxxxx"
              required
            />
            <PremiumInput
              label="Email address"
              icon={<MailIcon />}
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

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
  )
}
