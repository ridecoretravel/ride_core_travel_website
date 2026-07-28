import Link from 'next/link'
import { routes, pricesNote, type RoutePrice } from '@/lib/prices'
import { routePages } from '@/lib/routes'
import { site } from '@/lib/site'

interface Props {
  priceKey?: string
  compact?: boolean
}

const slugToPage: Record<string, string> = Object.fromEntries(
  routePages.map((r) => [r.priceKey, r.slug])
)

export default function FareTable({ priceKey, compact }: Props) {
  const rows: RoutePrice[] = priceKey
    ? routes.filter((r) => r.slug === priceKey)
    : routes

  return (
    <div className="flex flex-col gap-4">

      {/* Header */}
      <div className="hidden sm:grid grid-cols-3 gap-px bg-white/8 rounded-t-sm overflow-hidden text-[10px] font-semibold tracking-widest uppercase">
        <div className="bg-graphite col-span-2 px-5 py-3 text-grey">Route</div>
        <div className="bg-graphite px-3 py-3 text-gold text-center">8-Seater<br/>Executive</div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-px bg-white/8 rounded-sm overflow-hidden sm:rounded-t-none sm:rounded-b-sm">
        {rows.map((r, i) => {
          const pageSlug = slugToPage[r.slug]
          return (
            <div
              key={r.slug}
              className={`grid grid-cols-1 sm:grid-cols-3 gap-px ${i % 2 === 0 ? 'bg-graphite' : 'bg-charcoal'}`}
            >
              {/* Route name */}
              <div className="bg-inherit sm:col-span-2 px-5 py-4 text-sm font-medium flex items-center justify-between gap-3">
                {pageSlug ? (
                  <Link href={`/airport-transfers/${pageSlug}`} className="text-cream/80 hover:text-gold transition-colors">
                    {r.route}
                  </Link>
                ) : (
                  <span className="text-cream/80">{r.route}</span>
                )}
                {pageSlug && !compact && (
                  <Link href={`/airport-transfers/${pageSlug}`} className="text-[10px] text-gold/70 hover:text-gold transition-colors tracking-widest uppercase font-semibold whitespace-nowrap flex-shrink-0">
                    Details →
                  </Link>
                )}
              </div>

              {/* 8-Seater Executive */}
              <div className="bg-inherit px-3 py-4 flex sm:flex-col sm:items-center sm:justify-center items-center gap-2">
                <span className="sm:hidden text-grey text-xs w-36">8-Seater Executive:</span>
                <span className="text-gold font-bold text-lg">£{r.exec8}</span>
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-grey text-xs italic px-1">{pricesNote}</p>

      {!compact && (
        <div className="flex flex-wrap gap-3">
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer"
            className="inline-flex bg-gold text-charcoal text-sm font-bold px-6 py-3 rounded-sm tracking-wide hover:bg-gold/90 transition-colors">
            Book via WhatsApp
          </a>
          <a href={`tel:${site.phoneTel}`}
            className="inline-flex border border-white/20 text-cream text-sm font-semibold px-6 py-3 rounded-sm tracking-wide hover:border-gold/40 transition-colors">
            Call to Book
          </a>
        </div>
      )}
    </div>
  )
}
