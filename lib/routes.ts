export interface RouteData {
  slug: string
  airportName: string
  heroImage: string
  heroAlt: string
  journeyTime: string
  distance: string
  priceKey: string
  metaTitle: string
  metaDescription: string
  faqs: { q: string; a: string }[]
}

export const routePages: RouteData[] = [
  {
    slug: 'leeds-bradford-airport-taxi',
    airportName: 'Leeds Bradford Airport (LBA)',
    heroImage: '/images/routes/lba-airport.webp',
    heroAlt: 'Leeds Bradford Airport terminal entrance at dusk — Ridecore Travel transfers from Leeds',
    journeyTime: '20–30 minutes',
    distance: '~9 miles',
    priceKey: 'lba',
    metaTitle: 'Leeds Bradford Airport Taxi | Fixed-Price Transfers | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi transfers between Leeds and Leeds Bradford Airport. 8-seater Mercedes Vito, 24/7, licensed by Leeds City Council.',
    faqs: [
      {
        q: 'How long does it take to get from Leeds City Centre to Leeds Bradford Airport?',
        a: 'The journey from Leeds City Centre to Leeds Bradford Airport (LBA) typically takes 20–30 minutes depending on traffic. We recommend allowing extra time during rush hours.',
      },
      {
        q: 'Do you track flights at Leeds Bradford Airport?',
        a: 'Yes. We monitor your flight in real time. If your flight lands early or is delayed, we adjust the pickup time automatically at no extra charge.',
      },
      {
        q: 'Can you do a same-day return to Leeds Bradford Airport?',
        a: 'Absolutely. We operate 24/7 and can cover both outbound and return journeys on the same day. Just let us know your full itinerary when booking.',
      },
      {
        q: 'How much luggage can I bring?',
        a: 'Our Mercedes-Benz Vito Tourer has a generous boot. All 8 passengers can bring full-size suitcases comfortably. For oversized items such as golf bags, please mention them at booking.',
      },
      {
        q: 'Is Leeds Bradford Airport far from Leeds?',
        a: 'LBA is approximately 9 miles north-west of Leeds City Centre, making it one of the most convenient airports for Leeds residents.',
      },
    ],
  },
  {
    slug: 'leeds-to-manchester-airport',
    airportName: 'Manchester Airport',
    heroImage: '/images/routes/manchester-airport.webp',
    heroAlt: 'Manchester Airport Terminal 2 departures — Ridecore Travel fixed-price transfers from Leeds',
    journeyTime: '1 hour 10 minutes',
    distance: '~45 miles',
    priceKey: 'manchester',
    metaTitle: 'Leeds to Manchester Airport Taxi | Fixed Price | Ridecore Travel',
    metaDescription:
      'Book a fixed-price transfer from Leeds to Manchester Airport. 8-seater Mercedes Vito, flight tracking, 24/7 availability.',
    faqs: [
      {
        q: 'How long is the drive from Leeds to Manchester Airport?',
        a: 'The journey from Leeds City Centre to Manchester Airport takes approximately 1 hour 10 minutes via the M62. Journey times may vary with traffic.',
      },
      {
        q: 'Which terminal at Manchester Airport do you drop off at?',
        a: 'We drop off at whichever terminal your airline uses — Terminal 1, 2, or 3. Please provide your airline and flight number when booking so we can confirm the correct terminal.',
      },
      {
        q: 'Do you track flights for delays at Manchester Airport?',
        a: 'Yes. We track all flights in real time. If your inbound flight is delayed, we adjust your pickup time at no extra cost.',
      },
      {
        q: 'Can I book a return transfer to Manchester Airport?',
        a: 'Yes. We offer fixed-price returns. Book both legs together for peace of mind — your return price is fixed at the time of booking.',
      },
      {
        q: 'How many suitcases can fit in the vehicle?',
        a: 'The Mercedes-Benz Vito Tourer has ample boot space to comfortably carry luggage for all 8 passengers. Please mention any oversized items at booking.',
      },
    ],
  },
  {
    slug: 'leeds-to-liverpool-airport',
    airportName: 'Liverpool John Lennon Airport',
    heroImage: '/images/routes/liverpool-airport.webp',
    heroAlt: 'Liverpool John Lennon Airport entrance — Ridecore Travel transfers from Leeds',
    journeyTime: '1 hour 30 minutes',
    distance: '~75 miles',
    priceKey: 'liverpool',
    metaTitle: 'Leeds to Liverpool Airport Taxi | Fixed Price | Ridecore Travel',
    metaDescription:
      'Fixed-price airport transfers from Leeds to Liverpool John Lennon Airport. Premium 8-seater Mercedes Vito, 24/7.',
    faqs: [
      {
        q: 'How long does it take to drive from Leeds to Liverpool Airport?',
        a: 'The journey from Leeds City Centre to Liverpool John Lennon Airport takes approximately 1 hour 30 minutes via the M62, depending on traffic conditions.',
      },
      {
        q: 'Is the price fixed for Leeds to Liverpool Airport?',
        a: 'Yes. The price is agreed and fixed before your journey begins. There are no hidden charges, surge fees, or extras.',
      },
      {
        q: 'Do you monitor flights at Liverpool John Lennon Airport?',
        a: 'Yes. We track your flight and adjust your pickup time in real time if there are any delays, at no extra charge.',
      },
      {
        q: 'Can you collect us from Liverpool Airport for the return journey?',
        a: 'Absolutely. We cover both outbound and return legs. Book both together and we will monitor your inbound flight for any changes.',
      },
      {
        q: 'Is this route available early mornings and late nights?',
        a: 'Yes. We operate 24/7, 365 days a year — including early departures, late arrivals, and bank holidays.',
      },
    ],
  },
  {
    slug: 'leeds-to-heathrow',
    airportName: 'London Heathrow Airport',
    heroImage: '/images/routes/heathrow-airport.webp',
    heroAlt: 'London Heathrow Airport Terminal 5 — Ridecore Travel long-distance transfers from Leeds',
    journeyTime: '3 hours 30 minutes',
    distance: '~200 miles',
    priceKey: 'heathrow',
    metaTitle: 'Leeds to Heathrow Airport Taxi | Fixed Price | Ridecore Travel',
    metaDescription:
      'Book a reliable fixed-price transfer from Leeds to London Heathrow. 8-seater Mercedes Vito, professional licensed drivers.',
    faqs: [
      {
        q: 'How long does the drive from Leeds to Heathrow take?',
        a: 'The journey from Leeds City Centre to London Heathrow Airport takes approximately 3 hours 30 minutes via the M1. We factor in traffic and recommend ample pre-departure time.',
      },
      {
        q: 'Which Heathrow terminal do you drop off at?',
        a: 'We drop off at Terminals 2, 3, 4, or 5 depending on your airline. Please provide your flight details when booking so we go to the correct terminal.',
      },
      {
        q: 'Is the Leeds to Heathrow price fixed?',
        a: 'Yes. Your price is fixed at the time of booking. No motorway tolls, congestion charges, or hidden extras are added on the day.',
      },
      {
        q: 'Do you offer flight tracking for Heathrow arrivals?',
        a: 'Yes. For return journeys from Heathrow, we track your inbound flight and adjust pickup timing automatically so you are never left waiting.',
      },
      {
        q: 'Is an 8-seater comfortable for such a long journey?',
        a: 'Absolutely. The Mercedes-Benz Vito Tourer is a premium people carrier with comfortable reclining seats, climate control, and ample legroom — ideal for long-distance airport runs.',
      },
      {
        q: 'Can I book a Leeds to Heathrow transfer for the same day?',
        a: 'We accept same-day bookings subject to availability. For long-distance routes we recommend booking in advance to guarantee your slot.',
      },
    ],
  },
  {
    slug: 'leeds-to-birmingham-airport',
    airportName: 'Birmingham Airport',
    heroImage: '/images/routes/birmingham-airport.webp',
    heroAlt: 'Aircraft on the stand at Birmingham Airport at sunset — Ridecore Travel fixed-price transfers from Leeds',
    journeyTime: '2 hours 15 minutes',
    distance: '~120 miles',
    priceKey: 'birmingham',
    metaTitle: 'Leeds to Birmingham Airport Taxi | Fixed Price £250 | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds to Birmingham Airport, from £250. 8-seater Mercedes Vito, real-time flight tracking, 24/7, licensed by Leeds City Council.',
    faqs: [
      {
        q: 'How much is a taxi from Leeds to Birmingham Airport?',
        a: 'A fixed-price taxi from Leeds to Birmingham Airport costs £250 in our 8-seater Mercedes-Benz Vito Tourer. This price is agreed before you travel — there are no surge charges, tolls, or hidden extras added on the day.',
      },
      {
        q: 'How long does it take to get from Leeds to Birmingham Airport?',
        a: 'The journey from Leeds to Birmingham Airport takes approximately 2 hours 15 minutes via the M1 and M42, covering around 120 miles. We build in extra time for traffic so you arrive comfortably ahead of your flight.',
      },
      {
        q: 'Is a taxi or the train cheaper from Leeds to Birmingham Airport?',
        a: 'For a group, a taxi is usually the better value. Our fixed £250 fare covers up to 8 passengers travelling door-to-door in one vehicle, which typically works out far cheaper than 8 separate train tickets plus the connecting transfer from Birmingham International station to the terminal.',
      },
      {
        q: 'Which terminal at Birmingham Airport do you drop off at?',
        a: 'Birmingham Airport has a single main terminal building, so we drop off and collect from the same location every time regardless of your airline — no need to specify a terminal when booking.',
      },
      {
        q: 'Do you track flights for Birmingham Airport arrivals and departures?',
        a: 'Yes. We monitor your flight number in real time, so if your flight to or from Birmingham Airport is delayed, we automatically adjust your pickup time at no extra charge.',
      },
      {
        q: 'Can I book a same-day return to Birmingham Airport from Leeds?',
        a: 'Yes. We operate 24/7 and can cover both your outbound and return journey in the same booking, with your return price fixed at the time of booking.',
      },
      {
        q: 'How much luggage can I bring on a Leeds to Birmingham Airport transfer?',
        a: 'Our Mercedes-Benz Vito Tourer 8-seater has a generous boot that comfortably fits full-size suitcases for all 8 passengers, making it ideal for groups, families, and business travellers heading to Birmingham Airport.',
      },
    ],
  },
]

export function getRouteBySlug(slug: string): RouteData | undefined {
  return routePages.find((r) => r.slug === slug)
}
