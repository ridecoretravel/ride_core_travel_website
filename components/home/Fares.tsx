import Image from 'next/image'
import FareTable from '@/components/FareTable'

export default function Fares() {
  return (
    <section id="fares" className="bg-charcoal py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-gold text-xs font-semibold tracking-widest uppercase">Transparent Pricing</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-cream tracking-tight text-center mb-4">
          Airport Transfer Fixed Fares
        </h2>
        <p className="text-grey text-center mb-14 max-w-xl mx-auto">
          Fixed prices from Leeds City Centre. No surge pricing, no hidden fees.
        </p>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <FareTable />
          </div>

          <div className="lg:col-span-2">
            <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="/images/routes/vito-airport-terminal.webp"
                alt="Mercedes Vito at airport terminal departure drop-off"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-cream text-sm font-semibold">Leeds-Based · 24/7 · Licensed</p>
                <p className="text-cream/60 text-xs mt-1">PHV Licence 25232 · Leeds City Council</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
