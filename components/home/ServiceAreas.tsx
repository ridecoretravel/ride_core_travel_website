const airports = [
  { label: 'Leeds Bradford Airport', href: '/airport-transfers/leeds-bradford-airport-taxi' },
  { label: 'Manchester Airport', href: '/airport-transfers/leeds-to-manchester-airport' },
  { label: 'Liverpool Airport', href: '/airport-transfers/leeds-to-liverpool-airport' },
  { label: 'East Midlands Airport', href: '/airport-transfers/leeds-to-east-midlands-airport' },
  { label: 'Newcastle Airport', href: '/airport-transfers/leeds-to-newcastle-airport' },
  { label: 'Birmingham Airport', href: '/airport-transfers/leeds-to-birmingham-airport' },
  { label: 'London Heathrow', href: '/airport-transfers/leeds-to-heathrow' },
  { label: '8-seater group transfers', href: '/airport-transfers/8-seater' },
  { label: 'Any UK Airport', href: '/booking' },
]

export default function ServiceAreas() {
  return (
    <section className="bg-graphite py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <div>
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Service Areas</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-cream tracking-tight">
            Serving Leeds &amp; All UK Airports
          </h2>
          <p className="text-grey leading-relaxed">
            Airport transfers from Leeds to{' '}
            {airports.map((a, i) => (
              <span key={a.label}>
                <a href={a.href} className="text-cream/80 hover:text-gold transition-colors underline-offset-2 hover:underline">
                  {a.label}
                </a>
                {i < airports.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
          <a
            href="/booking"
            className="inline-flex mx-auto bg-gold text-charcoal font-semibold px-7 py-3.5 rounded-sm tracking-wide hover:bg-gold/90 transition-colors text-sm"
          >
            Get a Quote for Your Route
          </a>
        </div>
      </div>
    </section>
  )
}

