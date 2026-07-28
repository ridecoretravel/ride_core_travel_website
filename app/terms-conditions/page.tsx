import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Ridecore Travel',
  description: 'Terms and conditions for Ridecore Travel airport transfer services. Fixed-price transfers from Leeds, operated by Ridecore Travel Ltd.',
  alternates: { canonical: '/terms-conditions' },
}

const sections = [
  {
    title: '1. Company Information',
    body: `These Terms & Conditions apply to all bookings made with Ridecore Travel Ltd, a company registered in England and Wales (Company No. 16758874), operating under Leeds City Council Private Hire Vehicle Licence No. 25232. Registered address: 114 Cottingley Approach, Leeds, LS11 0HH. Contact: ${site.email} · ${site.phone}.`,
  },
  {
    title: '2. Bookings',
    body: 'All bookings must be made in advance via phone, WhatsApp, email, or our online quote form. A booking is only confirmed once you have received written confirmation from Ridecore Travel. We reserve the right to refuse or decline any booking at our discretion.',
  },
  {
    title: '3. Pricing',
    body: 'All fares are fixed and confirmed at the time of booking. The price you are quoted is the price you pay. There are no surge charges, congestion charges, or hidden fees unless agreed in writing before your journey. Prices are based on the pickup and destination locations and will be confirmed before your booking is accepted.',
  },
  {
    title: '4. Payment',
    body: 'A 10% deposit is required to secure your booking. Your booking is not confirmed until the deposit has been received. The remaining balance must be paid at least 2 days before the journey, unless otherwise agreed or payment by cash on the day of travel has been arranged in advance.',
  },
  {
    title: '5. Cancellations & Amendments',
    body: 'Cancellations made more than 24 hours before the scheduled pickup time will receive a full refund. Cancellations made within 24 hours of the scheduled pickup time may be subject to a cancellation fee of up to 50% of the fare. No-shows (where the passenger is not present at the agreed pickup location and time) will be charged the full fare. Any amendments to your booking are subject to availability and should be requested as early as possible.',
  },
  {
    title: '6. Waiting Time',
    body: 'For airport arrivals, we monitor all flights in real time and adjust your pickup time if your flight is delayed. We provide up to 45 minutes of free waiting time from the time your flight lands. For all other pickups, drivers will wait up to 10 minutes from the agreed pickup time. Additional waiting time may be charged.',
  },
  {
    title: '7. Passenger Conduct',
    body: 'Passengers must behave in a safe and respectful manner throughout the journey. Drivers reserve the right to refuse travel or terminate the journey if a passenger behaves in a threatening, abusive, violent, or unsafe manner. No refund will be given in these circumstances. Smoking, vaping, and the consumption of alcohol are strictly prohibited in our vehicles.',
  },
  {
    title: '8. Luggage',
    body: 'Passengers must ensure that the amount of luggage booked is suitable for the vehicle requested. Please inform us in advance if you are travelling with oversized luggage, bicycles, golf clubs, wheelchairs, pushchairs, or any other large items. Ridecore Travel reserves the right to refuse luggage that cannot be transported safely. We are not responsible for loss or damage to luggage unless caused by our negligence.',
  },
  {
    title: '9. Delays & Circumstances Beyond Our Control',
    body: 'Ridecore Travel will make every reasonable effort to arrive on time. However, we cannot accept liability for delays caused by traffic, road closures, accidents, severe weather, vehicle breakdowns, or any other circumstances beyond our reasonable control. If a delay occurs, we will keep you informed as soon as reasonably possible.',
  },
  {
    title: '10. Liability',
    body: 'Ridecore Travel is fully insured for private hire journeys. Our liability is limited to the value of the booked journey. We are not liable for indirect or consequential losses, including missed flights, missed connections, missed appointments, or business losses, except where such loss results directly from our negligence. Nothing in these Terms excludes or limits any liability that cannot legally be excluded under the laws of England and Wales.',
  },
  {
    title: '11. Complaints',
    body: `Any complaints should be submitted in writing within 7 days of your journey by emailing ${site.email}. We will acknowledge your complaint within 2 working days and aim to resolve it within 14 working days.`,
  },
  {
    title: '12. Privacy',
    body: 'Personal information collected during the booking process, including your name, email address, telephone number, and journey details, will only be used to provide and manage your booking. Your information will never be sold or shared with third parties except where required by law or where necessary to complete your booking.',
  },
  {
    title: '13. Governing Law',
    body: 'These Terms & Conditions are governed by the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.',
  },
  {
    title: '14. Changes to These Terms',
    body: 'Ridecore Travel reserves the right to amend these Terms & Conditions at any time. The version in force at the time your booking is confirmed will apply to your journey.',
  },
  {
    title: '15. Business & Travel Agent Bookings',
    body: 'This section applies only to bookings made by travel agents, tour operators, businesses, corporate clients, booking partners, or any third party booking on behalf of passengers. All quotations issued by Ridecore Travel for business and travel agent bookings are valid for 24 hours unless otherwise stated. Full payment must be received within 24 hours of accepting the quotation. If payment is not received within this period, the quotation will automatically expire, and Ridecore Travel reserves the right to release vehicle and driver availability. Once a booking has been confirmed by the business, travel agent, corporate client, or third party, the booking is considered final. Payments made for business and travel agent bookings are non-refundable if the passenger changes their plans, no longer requires the service, or the booking is cancelled after confirmation, except where required by law or agreed in writing by Ridecore Travel. Ridecore Travel reserves vehicles and drivers specifically for confirmed business and travel agent bookings. Cancellations, amendments, reductions in booked journeys, or no-shows will not qualify for refunds, credits, or transfers to another booking unless agreed in writing by Ridecore Travel. Ridecore Travel reserves the right to refuse future bookings from any business, travel agent, or booking partner with a history of repeated cancellations, non-payment, disputes, or failure to comply with these Terms & Conditions. By confirming a booking, the client acknowledges that they have read, understood, and accepted these terms in full.',
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-graphite border-b border-white/8 pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-grey">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <span className="text-cream/60">Terms & Conditions</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-graphite py-14 border-b border-white/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-cream tracking-tight mb-3">
            Terms & Conditions
          </h1>
          <p className="text-grey text-sm">
            Ridecore Travel Ltd · Company No. 16758874 · Last updated July 2026
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-charcoal py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col divide-y divide-white/6">
            {sections.map((s) => (
              <div key={s.title} className="py-7">
                <h2 className="text-cream font-semibold text-base mb-3">{s.title}</h2>
                <p className="text-grey text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-3">
            <p className="text-grey text-xs">
              Questions about these terms? Contact us at{' '}
              <a href={`mailto:${site.email}`} className="text-gold hover:underline lowercase">{site.email}</a>
              {' '}or call{' '}
              <a href={`tel:${site.phoneTel}`} className="text-gold hover:underline">{site.phone}</a>.
            </p>
            <Link href="/" className="text-gold text-xs font-semibold tracking-wide hover:underline">
              ← Back to homepage
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 lg:hidden" />
    </>
  )
}
