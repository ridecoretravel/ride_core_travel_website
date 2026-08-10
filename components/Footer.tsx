import Image from 'next/image'
import Link from 'next/link'
import { site } from '@/lib/site'

const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Airport Transfers', href: '/airport-transfers' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about-us' },
  { label: 'Book a Transfer', href: '/booking' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

const footerRoutes = [
  { label: 'Leeds Bradford Airport', href: '/airport-transfers/leeds-bradford-airport-taxi' },
  { label: 'Manchester Airport',     href: '/airport-transfers/leeds-to-manchester-airport' },
  { label: 'Liverpool Airport',      href: '/airport-transfers/leeds-to-liverpool-airport' },
  { label: 'London Heathrow',        href: '/airport-transfers/leeds-to-heathrow' },
  { label: 'Birmingham Airport',     href: '/airport-transfers/leeds-to-birmingham-airport' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/brand/ridecore-travel-logo.svg"
              alt="Ridecore Travel logo"
              width={160}
              height={46}
            />
            <p className="text-grey text-sm leading-relaxed">
              Premium airport transfers from Leeds. Fixed prices, professional fleet.
            </p>
            <p className="text-grey text-xs leading-relaxed">
              Licensed by Leeds City Council · PHV Licence 25232<br />
              Company No. {site.companyNo} · Fully insured
            </p>
          </div>

          {/* Col 2: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-cream text-xs font-semibold tracking-widest uppercase">Contact</h3>
            <address className="not-italic flex flex-col gap-3 text-grey text-sm">
              <span>{site.address}</span>
              <a href={`tel:${site.phoneTel}`} className="hover:text-gold transition-colors">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors lowercase">
                {site.email}
              </a>
            </address>
          </div>

          {/* Col 3: Links */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-cream text-xs font-semibold tracking-widest uppercase">Routes</h3>
              <nav className="flex flex-col gap-2">
                {footerRoutes.map((l) => (
                  <Link key={l.label} href={l.href}
                    className="text-grey text-sm hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-cream text-xs font-semibold tracking-widest uppercase">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {footerNav.map((l) => (
                  <Link key={l.label} href={l.href}
                    className="text-grey text-sm hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Col 4: Hours + Socials */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-cream text-xs font-semibold tracking-widest uppercase mb-3">Hours</h3>
              <p className="text-grey text-sm">24/7 — Monday to Sunday</p>
              <p className="text-gold text-sm font-medium mt-1">Always available</p>
            </div>
            <div>
              <h3 className="text-cream text-xs font-semibold tracking-widest uppercase mb-3">Follow Us</h3>
              <div className="flex gap-3 flex-wrap">
                <SocialLink href={site.socials.facebook} label="Facebook"><FacebookIcon /></SocialLink>
                <SocialLink href={site.socials.instagram} label="Instagram"><InstagramIcon /></SocialLink>
                <SocialLink href={site.socials.tiktok} label="TikTok"><TikTokIcon /></SocialLink>
                <SocialLink href={site.socials.linkedin} label="LinkedIn"><LinkedInIcon /></SocialLink>
                <SocialLink href={site.socials.google} label="Google Reviews"><GoogleIcon /></SocialLink>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-sm overflow-hidden border border-white/10 h-48">
          <iframe
            title="Ridecore Travel location map"
            src="https://www.google.com/maps?q=114+Cottingley+Approach,+Leeds,+LS11+0HH&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-grey text-xs">© 2026 Ridecore Travel. All rights reserved.</p>
          <p className="text-grey text-xs">PHV Licence 25232 · Leeds City Council</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-grey hover:text-gold transition-colors"
    >
      {children}
    </a>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

