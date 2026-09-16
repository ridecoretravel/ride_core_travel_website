export interface RouteContentSection {
  heading: string
  paragraphs: string[]
}

export interface RouteData {
  slug: string
  airportName: string
  airportCode?: string
  heroImage: string
  heroAlt: string
  /** Optional override for the hero H1. Falls back to "Leeds to {airportName} Taxi — Fixed Price, 24/7". */
  h1?: string
  /** Optional override for the line under the H1. Falls back to "{journeyTime} · {distance} · Mercedes-Benz 8-Seater". */
  heroTagline?: string
  journeyTime: string
  distance: string
  priceKey: string
  metaTitle: string
  metaDescription: string
  /** Leeds-focused intro paragraphs, rendered directly under the price block. Supports inline [label](/path) links. */
  intro?: string[]
  /** Long-form landing-page sections (route info, airport info, pick-up info…). Supports inline [label](/path) links. */
  sections?: RouteContentSection[]
  faqs: { q: string; a: string }[]
}

export const routePages: RouteData[] = [
  {
    slug: 'leeds-bradford-airport-taxi',
    airportName: 'Leeds Bradford Airport (LBA)',
    airportCode: 'LBA',
    heroImage: '/images/routes/lba-airport.webp',
    heroAlt: 'Leeds Bradford Airport terminal entrance at dusk — Ridecore Travel transfers from Leeds',
    h1: 'Leeds Bradford Airport Taxi — Fixed Price, 24/7',
    heroTagline: '20–30 minutes from Leeds City Centre · ~9 miles · Mercedes-Benz 8-Seater',
    journeyTime: '20–30 minutes',
    distance: '~9 miles',
    priceKey: 'lba',
    metaTitle: 'Leeds Bradford Airport Taxi | Fixed £60 8-Seater | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi to Leeds Bradford Airport from £60 in an 8-seater Mercedes-Benz Vito. Door-to-door from anywhere in Leeds, 24/7, flight tracking, licensed by Leeds City Council.',
    intro: [
      'Leeds Bradford Airport is the closest airport to Leeds — around 9 miles north-west of the city centre, on the edge of Yeadon. On paper it is a short hop, but the A658 and Harrogate Road can be slow at peak times and the airport has a paid drop-off zone, so a fixed-price door-to-door taxi is usually the calmest way to start a trip.',
      'Ridecore Travel runs a single premium vehicle — an 8-seater [Mercedes-Benz Vito Tourer](/fleet) — so whether you are travelling solo, as a couple or as a full group of eight with luggage, the price is the same fixed fare agreed before you set off. We cover every LS postcode and the wider Leeds area, 24 hours a day, 365 days a year.',
    ],
    sections: [
      {
        heading: 'The route from Leeds to Leeds Bradford Airport',
        paragraphs: [
          'From Leeds City Centre the drive is typically 20–30 minutes via the A65 and A658, or the ring road and Harrogate Road depending on where you start. Early-morning departures before 6am are usually quicker; Friday afternoons, school runs and the summer holiday getaway are the slowest windows, so we build extra time into your pickup for those.',
          'We collect from any address in Leeds — LS1 to LS29, plus Horsforth, Guiseley, Rawdon, Yeadon, Otley, Bramhope, Cookridge, Adel, Headingley, Pudsey, Morley and everywhere in between. Pickups outside Leeds City Centre are welcome; the fare may vary slightly with distance, and we confirm the exact price when you book.',
        ],
      },
      {
        heading: 'Drop-off, pick-up and terminal',
        paragraphs: [
          'Leeds Bradford Airport has a single terminal. For departures we drop you directly at the terminal forecourt drop-off area. For arrivals we track your flight number in real time and adjust the pickup automatically if you land early or late, then meet you once you have cleared baggage reclaim — there is no extra charge for reasonable waiting time after landing.',
          'If you would prefer a meet-and-greet inside the terminal with a name board, just ask when booking and we will arrange it.',
        ],
      },
      {
        heading: 'Why book ahead instead of a rank taxi',
        paragraphs: [
          'A pre-booked fixed-price transfer means your fare is agreed in advance with no meter, no surge pricing and no queueing at a rank after a long flight. You get the same 8-seater Mercedes whether it is one passenger or a family of eight, real-time flight tracking on the return leg, and a licensed PHV driver (Leeds City Council licence 25232).',
          'Travelling as a group, or with a lot of luggage? See our dedicated [8-seater airport transfer](/airport-transfers/8-seater) page. Heading further afield instead? We also run fixed-price transfers from Leeds to [Manchester Airport](/airport-transfers/leeds-to-manchester-airport) and [London Heathrow](/airport-transfers/leeds-to-heathrow).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a taxi to Leeds Bradford Airport?',
        a: 'Our fixed fare from Leeds City Centre to Leeds Bradford Airport is £60 in an 8-seater Mercedes-Benz Vito Tourer. The price is agreed before you travel — no meter, no surge pricing, no hidden extras. Pickups outside the city centre may vary slightly with distance; we confirm the exact price when you book.',
      },
      {
        q: 'How long does it take to get from Leeds City Centre to Leeds Bradford Airport?',
        a: 'The journey from Leeds City Centre to Leeds Bradford Airport (LBA) typically takes 20–30 minutes depending on traffic. We recommend allowing extra time during rush hours, the school run and summer holiday periods, and we build that buffer into your pickup time.',
      },
      {
        q: 'Do you track flights at Leeds Bradford Airport?',
        a: 'Yes. We monitor your flight in real time. If your flight lands early or is delayed, we adjust the pickup time automatically at no extra charge, and meet you once you have cleared baggage reclaim.',
      },
      {
        q: 'Do you charge for the airport drop-off fee?',
        a: 'Leeds Bradford Airport operates a paid drop-off zone at the terminal. The drop-off charge is included in your quoted fixed fare — there is nothing extra to pay on the day.',
      },
      {
        q: 'Can you do a same-day return to Leeds Bradford Airport?',
        a: 'Absolutely. We operate 24/7 and can cover both outbound and return journeys on the same day. Just let us know your full itinerary when booking and your return price is fixed at the same time.',
      },
      {
        q: 'How much luggage can I bring?',
        a: 'Our Mercedes-Benz Vito Tourer has a generous boot. All 8 passengers can bring full-size suitcases comfortably. For oversized items such as golf bags, skis or a pushchair, please mention them at booking so we can plan the load.',
      },
      {
        q: 'Which areas of Leeds do you cover for LBA transfers?',
        a: 'Every LS postcode and the wider Leeds area — including Horsforth, Guiseley, Rawdon, Yeadon, Otley, Bramhope, Headingley, Pudsey and Morley. Pickups from outside Leeds are also welcome; the fare may vary with distance.',
      },
    ],
  },
  {
    slug: 'leeds-to-manchester-airport',
    airportName: 'Manchester Airport',
    airportCode: 'MAN',
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
    airportCode: 'LPL',
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
    slug: 'leeds-to-east-midlands-airport',
    airportName: 'East Midlands Airport',
    airportCode: 'EMA',
    heroImage: '/images/routes/east-midlands-airport.jpg',
    heroAlt: 'East Midlands Airport terminal — Ridecore Travel fixed-price 8-seater transfers from Leeds',
    journeyTime: '~1 hour 40 minutes',
    distance: '~85 miles',
    priceKey: 'eastmidlands',
    metaTitle: 'Leeds to East Midlands Airport Taxi | Fixed £170 8-Seater | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds to East Midlands Airport, £170 in an 8-seater Mercedes-Benz Vito. 24/7, real-time flight tracking, licensed by Leeds City Council.',
    intro: [
      'East Midlands Airport (EMA) sits near Castle Donington, roughly 85 miles south of Leeds and a straightforward run down the M1. It is a popular base for Jet2, Ryanair and TUI holiday routes, and for many Leeds travellers a fixed departure time from EMA is worth the extra distance.',
      'Ridecore Travel covers the full Leeds-to-EMA route in one 8-seater [Mercedes-Benz Vito Tourer](/fleet) at a single fixed fare of £170 — the same price for one passenger or a group of eight with luggage. No meter, no surge pricing, and your flight tracked in real time on the return leg.',
    ],
    sections: [
      {
        heading: 'The route from Leeds to East Midlands Airport',
        paragraphs: [
          'The drive is almost entirely motorway: south on the M1 to junction 23A, then a short link road to the terminal. Allow around 1 hour 40 minutes from Leeds City Centre in normal traffic. The M1 around Nottingham and the J23A–J24 stretch can be slow at peak times and during roadworks, so we build a buffer into early-morning and holiday pickups.',
          'We collect from any address across Leeds and the wider LS postcode area. Pickups from outside Leeds City Centre are welcome and the fare is confirmed at the time of booking.',
        ],
      },
      {
        heading: 'East Midlands Airport terminal and drop-off',
        paragraphs: [
          'EMA has a single terminal. For departures we drop at the terminal drop-off area (the airport charges a drop-off fee, which is included in your fixed fare). For arrivals we track your flight number, adjust the pickup time if you are early or delayed, and meet you after baggage reclaim at no extra charge for reasonable waiting.',
          'A meet-and-greet with a name board inside the terminal can be arranged on request.',
        ],
      },
      {
        heading: 'Why a fixed-price transfer for this route',
        paragraphs: [
          'For an early Jet2 or Ryanair departure from EMA, a door-to-door 8-seater removes the two things that go wrong most often on holiday travel days: parking and timing. Your fare is fixed before you travel, the whole group and its luggage travel together in one vehicle, and the return leg is flight-tracked so nobody is left waiting.',
          'Travelling as a group of six to eight? See our [8-seater airport transfer](/airport-transfers/8-seater) page. Prefer to fly from closer to home? We also cover [Leeds Bradford Airport](/airport-transfers/leeds-bradford-airport-taxi) and [Manchester Airport](/airport-transfers/leeds-to-manchester-airport).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a taxi from Leeds to East Midlands Airport?',
        a: 'A fixed-price taxi from Leeds to East Midlands Airport is £170 in our 8-seater Mercedes-Benz Vito Tourer. The price covers up to 8 passengers and is agreed before you travel — no surge charges, tolls or hidden extras. Pickups outside Leeds City Centre may vary with distance.',
      },
      {
        q: 'How long does it take to drive from Leeds to East Midlands Airport?',
        a: 'Around 1 hour 40 minutes from Leeds City Centre, almost entirely on the M1 to junction 23A, covering roughly 85 miles. We build in extra time for traffic around Nottingham and for early-morning holiday getaways.',
      },
      {
        q: 'Which terminal does East Midlands Airport have?',
        a: 'East Midlands Airport has a single terminal building, so we drop off and collect from the same location every time regardless of your airline — there is no terminal to specify when booking.',
      },
      {
        q: 'Do you track flights for East Midlands Airport arrivals?',
        a: 'Yes. We monitor your flight number in real time. If your flight to or from East Midlands Airport is delayed or lands early, we adjust your pickup automatically at no extra charge.',
      },
      {
        q: 'Can I book a same-day return to East Midlands Airport from Leeds?',
        a: 'Yes. We operate 24/7 and can cover both your outbound and return journey in the same booking, with the return price fixed at the time of booking.',
      },
      {
        q: 'How much luggage can I bring?',
        a: 'Our Mercedes-Benz Vito Tourer 8-seater has a generous boot that comfortably fits full-size suitcases for all 8 passengers — ideal for families and groups heading on holiday from EMA. Mention oversized items such as golf bags at booking.',
      },
    ],
  },
  {
    slug: 'leeds-to-newcastle-airport',
    airportName: 'Newcastle International Airport',
    airportCode: 'NCL',
    heroImage: '/images/routes/newcastle-airport.avif',
    heroAlt: 'Newcastle International Airport terminal — Ridecore Travel fixed-price 8-seater transfers from Leeds',
    journeyTime: '~1 hour 50 minutes',
    distance: '~95 miles',
    priceKey: 'newcastle',
    metaTitle: 'Leeds to Newcastle Airport Taxi | Fixed £230 8-Seater | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds to Newcastle International Airport, £230 in an 8-seater Mercedes-Benz Vito. 24/7, real-time flight tracking, licensed by Leeds City Council.',
    intro: [
      'Newcastle International Airport (NCL) is around 95 miles north of Leeds, near Woolsington on the north-west edge of Newcastle, and the drive is a clear run up the A1(M). Some Leeds travellers choose Newcastle for a specific airline, route or flight time not available closer to home.',
      'Ridecore Travel runs the full Leeds-to-Newcastle route in one 8-seater [Mercedes-Benz Vito Tourer](/fleet) at a fixed fare of £230 — the same whether you are one passenger or a group of eight. The price is agreed before you travel and your return flight is tracked in real time.',
    ],
    sections: [
      {
        heading: 'The route from Leeds to Newcastle Airport',
        paragraphs: [
          'From Leeds the drive is almost all dual carriageway and motorway: north on the A1(M) past Wetherby, Scotch Corner and Durham, then the A696 to the airport. Allow around 1 hour 50 minutes from Leeds City Centre in normal conditions. The A1(M) can slow around Newcastle at rush hour, so we add a buffer to early and peak-time pickups.',
          'We collect from any address in Leeds and the wider LS postcode area. Pickups from outside Leeds City Centre are welcome; the fare is confirmed when you book.',
        ],
      },
      {
        heading: 'Newcastle Airport terminal and drop-off',
        paragraphs: [
          'Newcastle International Airport has a single terminal. For departures we drop at the terminal forecourt (the airport charges a drop-off fee, which is included in your fixed fare). For arrivals we track your flight, adjust the pickup if you are early or delayed, and meet you after baggage reclaim with no extra charge for reasonable waiting time.',
          'A meet-and-greet with a name board can be arranged on request.',
        ],
      },
      {
        heading: 'Why book a fixed-price transfer',
        paragraphs: [
          'On a long route like Leeds to Newcastle, a fixed fare protects you from meter creep and surge pricing, and a single 8-seater keeps the whole group and its luggage together for the full journey. The return leg is flight-tracked so your driver is waiting when you land, not the other way around.',
          'Booking for a larger group? See our [8-seater airport transfer](/airport-transfers/8-seater) page. We also run fixed-price transfers from Leeds to [Leeds Bradford Airport](/airport-transfers/leeds-bradford-airport-taxi), [Manchester Airport](/airport-transfers/leeds-to-manchester-airport) and [London Heathrow](/airport-transfers/leeds-to-heathrow).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a taxi from Leeds to Newcastle Airport?',
        a: 'A fixed-price taxi from Leeds to Newcastle International Airport is £230 in our 8-seater Mercedes-Benz Vito Tourer. The fare covers up to 8 passengers and is agreed before you travel — no surge pricing, tolls or hidden extras. Pickups outside Leeds City Centre may vary with distance.',
      },
      {
        q: 'How long does it take to drive from Leeds to Newcastle Airport?',
        a: 'Around 1 hour 50 minutes from Leeds City Centre, mostly on the A1(M) north, covering roughly 95 miles. We allow extra time for traffic around Newcastle at peak hours.',
      },
      {
        q: 'Which terminal does Newcastle Airport have?',
        a: 'Newcastle International Airport has a single terminal building, so we use the same drop-off and pick-up location every time regardless of your airline — no terminal to specify when booking.',
      },
      {
        q: 'Do you track flights for Newcastle Airport arrivals?',
        a: 'Yes. We monitor your flight number in real time and adjust your pickup automatically if your flight to or from Newcastle is delayed or lands early, at no extra charge.',
      },
      {
        q: 'Can I book a same-day return to Newcastle Airport from Leeds?',
        a: 'Yes. We operate 24/7 and can cover both the outbound and return journey in one booking, with the return price fixed at the time of booking.',
      },
      {
        q: 'How much luggage can I bring on a Leeds to Newcastle Airport transfer?',
        a: 'Our Mercedes-Benz Vito Tourer 8-seater has a generous boot that comfortably fits full-size suitcases for all 8 passengers. Please mention oversized items such as golf bags or skis at booking.',
      },
    ],
  },
  {
    slug: 'leeds-to-birmingham-airport',
    airportName: 'Birmingham Airport',
    airportCode: 'BHX',
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
  {
    slug: 'leeds-to-heathrow',
    airportName: 'London Heathrow Airport',
    airportCode: 'LHR',
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
    slug: 'lba-to-manchester-airport',
    airportName: 'Manchester Airport',
    airportCode: 'MAN',
    heroImage: '/images/routes/manchester-airport.webp',
    heroAlt: 'Manchester Airport Terminal 2 departures — Ridecore Travel transfers from Leeds Bradford Airport',
    h1: 'Leeds Bradford Airport to Manchester Airport Taxi — Fixed Price, 24/7',
    heroTagline: '1 hour 10 minutes · ~54 miles · Mercedes-Benz 8-Seater',
    journeyTime: '1 hour 10 minutes',
    distance: '~54 miles',
    priceKey: 'lba-manchester',
    metaTitle: 'Leeds Bradford Airport to Manchester Airport Taxi | Fixed £140 | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds Bradford Airport to Manchester Airport, £140 in an 8-seater Mercedes-Benz Vito. 24/7, real-time flight tracking, licensed by Leeds City Council.',
    intro: [
      'Landing at Leeds Bradford Airport but flying onward — or connecting in — from Manchester Airport? A fixed-price transfer between the two removes the need to work out trains, connections and terminal changes with luggage in tow.',
      'Ridecore Travel covers the full LBA-to-Manchester run in one 8-seater [Mercedes-Benz Vito Tourer](/fleet) at a fixed fare of £140 — the same price for one passenger or a full group of eight. No meter, no surge pricing, and your onward flight tracked in real time.',
    ],
    sections: [
      {
        heading: 'The route from Leeds Bradford Airport to Manchester Airport',
        paragraphs: [
          'The drive runs south via the A658, Leeds ring road and M62, covering around 54 miles in roughly 1 hour 10 minutes in normal traffic. The M62 around Manchester can slow at peak times, so we build extra time into early and late pickups.',
          'We collect directly from the LBA terminal forecourt, or from any address across Leeds and the wider LS postcode area if you are starting the journey from home rather than off an inbound flight.',
        ],
      },
      {
        heading: 'Manchester Airport terminal and drop-off',
        paragraphs: [
          'Manchester Airport has three terminals. Tell us your airline and flight number when booking and we will confirm which terminal to use and drop you right at departures. For arrivals into Manchester, we track your flight and adjust pickup automatically if you land early or late.',
          'A meet-and-greet with a name board inside the terminal can be arranged on request.',
        ],
      },
      {
        heading: 'Why book a fixed-price transfer between airports',
        paragraphs: [
          'Connecting between two airports by public transport usually means at least one change and a walk between platforms and terminals with luggage. A door-to-door 8-seater keeps your group and bags together for the whole journey, at a fare agreed before you travel.',
          'Flying into LBA and heading further afield? We also cover [Leeds Bradford Airport to Liverpool Airport](/airport-transfers/lba-to-liverpool-airport) and [Leeds Bradford Airport to Heathrow](/airport-transfers/lba-to-heathrow).',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a taxi from Leeds Bradford Airport to Manchester Airport?',
        a: 'A fixed-price taxi from Leeds Bradford Airport to Manchester Airport is £140 in our 8-seater Mercedes-Benz Vito Tourer, agreed before you travel with no surge pricing or hidden extras.',
      },
      {
        q: 'How long does it take to get from Leeds Bradford Airport to Manchester Airport?',
        a: 'Around 1 hour 10 minutes covering roughly 54 miles via the M62, depending on traffic. We build in extra time for peak-hour congestion around Manchester.',
      },
      {
        q: 'Which terminal at Manchester Airport do you use?',
        a: 'We drop off and collect at whichever terminal your airline uses — Terminal 1, 2 or 3. Please provide your airline and flight number when booking.',
      },
      {
        q: 'Do you track flights for this route?',
        a: 'Yes. We monitor both your Leeds Bradford Airport and Manchester Airport flights in real time and adjust your pickup automatically at no extra charge.',
      },
      {
        q: 'Can I book this as part of a same-day connection?',
        a: 'Yes. We operate 24/7 and regularly cover tight connections between LBA and Manchester Airport — let us know your flight times when booking.',
      },
    ],
  },
  {
    slug: 'lba-to-liverpool-airport',
    airportName: 'Liverpool John Lennon Airport',
    airportCode: 'LPL',
    heroImage: '/images/routes/liverpool-airport.webp',
    heroAlt: 'Liverpool John Lennon Airport entrance — Ridecore Travel transfers from Leeds Bradford Airport',
    h1: 'Leeds Bradford Airport to Liverpool Airport Taxi — Fixed Price, 24/7',
    heroTagline: '1 hour 25 minutes · ~74 miles · Mercedes-Benz 8-Seater',
    journeyTime: '1 hour 25 minutes',
    distance: '~74 miles',
    priceKey: 'lba-liverpool',
    metaTitle: 'Leeds Bradford Airport to Liverpool Airport Taxi | Fixed £160 | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds Bradford Airport to Liverpool John Lennon Airport, £160 in an 8-seater Mercedes-Benz Vito. 24/7, real-time flight tracking, licensed by Leeds City Council.',
    intro: [
      'Some routes and airlines only fly from Liverpool John Lennon Airport, and Leeds Bradford Airport is a common first landing point for travellers heading on that way. A fixed-price transfer between the two covers the full 74-mile run in one vehicle.',
      'Ridecore Travel runs the LBA-to-Liverpool route in one 8-seater [Mercedes-Benz Vito Tourer](/fleet) at a fixed fare of £160 — the same whether you are travelling solo or as a group of eight with luggage.',
    ],
    sections: [
      {
        heading: 'The route from Leeds Bradford Airport to Liverpool Airport',
        paragraphs: [
          'The drive heads west via the M62, covering around 74 miles in roughly 1 hour 25 minutes in normal traffic. Traffic around Manchester and the M62/M57 interchange can add time at peak periods, so we build a buffer into early and holiday pickups.',
          'We collect directly from the LBA terminal forecourt, or from anywhere in Leeds and the wider LS postcode area if your journey starts from home.',
        ],
      },
      {
        heading: 'Liverpool Airport terminal and drop-off',
        paragraphs: [
          'Liverpool John Lennon Airport has a single terminal, so there is no terminal to specify when booking. For departures we drop directly at the terminal forecourt; for arrivals we track your flight and adjust the pickup time automatically if you land early or late.',
          'A meet-and-greet with a name board inside the terminal can be arranged on request.',
        ],
      },
      {
        heading: 'Why book a fixed-price airport-to-airport transfer',
        paragraphs: [
          'There is no direct public transport link between LBA and Liverpool Airport, so most travellers are looking at multiple trains or a long coach journey. A single 8-seater keeps your whole group and luggage together for one straightforward journey at a price agreed in advance.',
          'Also flying via LBA to Manchester or Heathrow? See our [Leeds Bradford Airport to Manchester Airport](/airport-transfers/lba-to-manchester-airport) and [Leeds Bradford Airport to Heathrow](/airport-transfers/lba-to-heathrow) pages.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a taxi from Leeds Bradford Airport to Liverpool Airport?',
        a: 'A fixed-price taxi from Leeds Bradford Airport to Liverpool John Lennon Airport is £160 in our 8-seater Mercedes-Benz Vito Tourer, agreed before you travel.',
      },
      {
        q: 'How long does it take to drive from Leeds Bradford Airport to Liverpool Airport?',
        a: 'Around 1 hour 25 minutes covering roughly 74 miles via the M62, depending on traffic conditions.',
      },
      {
        q: 'Is there a direct terminal to specify at Liverpool Airport?',
        a: 'No. Liverpool John Lennon Airport has a single terminal building, so we use the same drop-off and pick-up point every time.',
      },
      {
        q: 'Do you track flights on this route?',
        a: 'Yes. We monitor flights at both airports in real time and adjust your pickup automatically if there are delays, at no extra charge.',
      },
      {
        q: 'Can I book this transfer for a tight same-day connection?',
        a: 'Yes, we operate 24/7. Let us know your flight times when booking and we will plan the pickup accordingly.',
      },
    ],
  },
  {
    slug: 'lba-to-heathrow',
    airportName: 'London Heathrow Airport',
    airportCode: 'LHR',
    heroImage: '/images/routes/heathrow-airport.webp',
    heroAlt: 'London Heathrow Airport Terminal 5 — Ridecore Travel long-distance transfers from Leeds Bradford Airport',
    h1: 'Leeds Bradford Airport to Heathrow Taxi — Fixed Price, 24/7',
    heroTagline: '3 hours 30 minutes · ~205 miles · Mercedes-Benz 8-Seater',
    journeyTime: '3 hours 30 minutes',
    distance: '~205 miles',
    priceKey: 'lba-heathrow',
    metaTitle: 'Leeds Bradford Airport to Heathrow Taxi | Fixed £450 | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds Bradford Airport to London Heathrow, £450 in an 8-seater Mercedes-Benz Vito. 24/7, real-time flight tracking, licensed by Leeds City Council.',
    faqs: [
      {
        q: 'How much is a taxi from Leeds Bradford Airport to Heathrow?',
        a: 'A fixed-price taxi from Leeds Bradford Airport to London Heathrow is £450 in our 8-seater Mercedes-Benz Vito Tourer, agreed before you travel with no tolls, surge pricing or hidden extras.',
      },
      {
        q: 'How long does the drive from Leeds Bradford Airport to Heathrow take?',
        a: 'Around 3 hours 30 minutes covering roughly 205 miles via the M1, depending on traffic. We factor in extra time and recommend booking with plenty of notice for connecting flights.',
      },
      {
        q: 'Which Heathrow terminal do you drop off at?',
        a: 'We drop off at Terminals 2, 3, 4 or 5 depending on your onward airline. Please provide your flight details when booking.',
      },
      {
        q: 'Do you track flights for this route?',
        a: 'Yes. We monitor your flight at Leeds Bradford Airport and your onward flight at Heathrow, adjusting the pickup automatically if either is delayed.',
      },
      {
        q: 'Is an 8-seater comfortable for such a long journey?',
        a: 'Yes. The Mercedes-Benz Vito Tourer has comfortable reclining seats, climate control and ample legroom — ideal for a long-distance airport-to-airport run.',
      },
    ],
  },
  {
    slug: 'leeds-to-dover-port',
    airportName: 'Dover Port',
    heroImage: '/images/routes/airport-transfers-hero.webp',
    heroAlt: 'Mercedes Vito on the motorway at dusk — Ridecore Travel transfers from Leeds to Dover Port',
    heroTagline: '4 hours 30 minutes · ~267 miles · Mercedes-Benz 8-Seater',
    journeyTime: '4 hours 30 minutes',
    distance: '~267 miles',
    priceKey: 'dover',
    metaTitle: 'Leeds to Dover Port Taxi | Fixed £525 8-Seater | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds to Dover Port, £525 in an 8-seater Mercedes-Benz Vito. Cruise and ferry transfers, 24/7, licensed by Leeds City Council.',
    intro: [
      'Dover Port is around 267 miles south of Leeds — a long run, but a straightforward one for cruise passengers and ferry travellers who need one vehicle for the whole group and all the luggage a cruise or continental trip involves.',
      'Ridecore Travel covers the full Leeds-to-Dover route in one 8-seater [Mercedes-Benz Vito Tourer](/fleet) at a fixed fare of £525 — the same whether you are one passenger or a group of eight with cruise cases.',
    ],
    sections: [
      {
        heading: 'The route from Leeds to Dover Port',
        paragraphs: [
          'The drive is mostly motorway: south on the M1, around London on the M25, then down the A2/M2 into Dover — around 4 hours 30 minutes covering roughly 267 miles in normal traffic. The M25 and approach to Dover can be significantly slower during school holidays and peak cruise-season weekends, so we build extra time into early departures.',
          'We collect from any address across Leeds and the wider LS postcode area. Given the length of this route, we recommend booking as early as possible to secure your slot, especially for weekend cruise departures.',
        ],
      },
      {
        heading: 'Dover cruise and ferry terminals',
        paragraphs: [
          'We drop off directly at the relevant Dover cruise terminal or ferry check-in area — tell us your cruise line or ferry operator when booking so we go to the correct terminal. For return journeys we track your ferry crossing or cruise disembarkation time where possible and adjust pickup accordingly.',
          'Travelling with cruise luggage? Let us know your case count at booking (up to 8 large cases comfortably fit alongside 8 passengers) so we can confirm the load in advance.',
        ],
      },
      {
        heading: 'Why book a fixed-price transfer for a long-distance port run',
        paragraphs: [
          'A 267-mile door-to-door transfer removes the need for an overnight stop, parking at the port, or coordinating train connections with heavy luggage. Your fare is fixed before you travel, and the whole group and its cases travel together for the entire journey.',
          'Also considering Southampton for your cruise? See our [Leeds to Southampton Port](/airport-transfers/leeds-to-southampton-port) page.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much is a taxi from Leeds to Dover Port?',
        a: 'A fixed-price taxi from Leeds to Dover Port is £525 in our 8-seater Mercedes-Benz Vito Tourer, covering up to 8 passengers and their luggage, agreed before you travel.',
      },
      {
        q: 'How long does it take to drive from Leeds to Dover Port?',
        a: 'Around 4 hours 30 minutes covering roughly 267 miles, mostly via the M1 and M25. We build in extra time for traffic around London and during peak cruise season.',
      },
      {
        q: 'Can you drop off at a specific cruise or ferry terminal?',
        a: 'Yes. Tell us your cruise line or ferry operator when booking and we will confirm and drop off at the correct terminal.',
      },
      {
        q: 'How much luggage can you carry for a cruise?',
        a: 'Our Mercedes-Benz Vito Tourer comfortably carries full-size cases for all 8 passengers. Let us know your exact luggage count at booking so we can plan the load.',
      },
      {
        q: 'Can you collect us from Dover Port on our return?',
        a: 'Yes. We cover both outbound and return legs — book both together and we will confirm your return pickup time closer to your sailing or disembarkation date.',
      },
      {
        q: 'Do you charge more for early-morning cruise departures?',
        a: 'No. The £525 fixed fare applies 24/7, including early-morning departures for cruise check-in.',
      },
    ],
  },
  {
    slug: 'leeds-to-southampton-port',
    airportName: 'Southampton Port',
    heroImage: '/images/routes/airport-transfers-hero.webp',
    heroAlt: 'Mercedes Vito on the motorway at dusk — Ridecore Travel transfers from Leeds to Southampton Port',
    heroTagline: '3 hours 55 minutes · ~235 miles · Mercedes-Benz 8-Seater',
    journeyTime: '3 hours 55 minutes',
    distance: '~235 miles',
    priceKey: 'southampton',
    metaTitle: 'Leeds to Southampton Port Taxi | Fixed £570 8-Seater | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds to Southampton Port, £570 in an 8-seater Mercedes-Benz Vito. Cruise transfers, 24/7, licensed by Leeds City Council.',
    faqs: [
      {
        q: 'How much is a taxi from Leeds to Southampton Port?',
        a: 'A fixed-price taxi from Leeds to Southampton Port is £570 in our 8-seater Mercedes-Benz Vito Tourer, covering up to 8 passengers and their luggage, agreed before you travel.',
      },
      {
        q: 'How long does it take to drive from Leeds to Southampton Port?',
        a: 'Around 3 hours 55 minutes covering roughly 235 miles, mostly via the M1 and M3. We allow extra time for traffic around London and during peak cruise-season weekends.',
      },
      {
        q: 'Can you drop off at a specific cruise terminal in Southampton?',
        a: 'Yes. Tell us your cruise line and terminal when booking (Southampton has several cruise terminals) and we will confirm and drop off at the correct one.',
      },
      {
        q: 'How much luggage can you carry for a cruise?',
        a: 'Our Mercedes-Benz Vito Tourer comfortably carries full-size cases for all 8 passengers. Let us know your exact luggage count at booking so we can plan the load.',
      },
      {
        q: 'Can you collect us from Southampton Port on our return?',
        a: 'Yes. We cover both outbound and return legs — book both together and we will confirm your return pickup time closer to your disembarkation date.',
      },
    ],
  },
  {
    slug: 'leeds-train-station-to-manchester-airport',
    airportName: 'Manchester Airport',
    airportCode: 'MAN',
    heroImage: '/images/routes/manchester-airport.webp',
    heroAlt: 'Manchester Airport Terminal 2 departures — Ridecore Travel transfers from Leeds Train Station',
    h1: 'Leeds Train Station to Manchester Airport Taxi — Fixed Price, 24/7',
    heroTagline: '1 hour 10 minutes · ~45 miles · Mercedes-Benz 8-Seater',
    journeyTime: '1 hour 10 minutes',
    distance: '~45 miles',
    priceKey: 'manchester-train',
    metaTitle: 'Leeds Train Station to Manchester Airport Taxi | Fixed £135 | Ridecore Travel',
    metaDescription:
      'Fixed-price taxi from Leeds Train Station to Manchester Airport, £135 in an 8-seater Mercedes-Benz Vito. 24/7, real-time flight tracking, licensed by Leeds City Council.',
    faqs: [
      {
        q: 'How much is a taxi from Leeds Train Station to Manchester Airport?',
        a: 'A fixed-price taxi from Leeds Train Station to Manchester Airport is £135 in our 8-seater Mercedes-Benz Vito Tourer, agreed before you travel with no surge pricing or hidden extras.',
      },
      {
        q: 'Where do you pick up from at Leeds Train Station?',
        a: 'We meet you at the forecourt outside the station, wherever is easiest for loading luggage. Let us know your exit or platform when booking and we will confirm the exact meeting point.',
      },
      {
        q: 'How long does the journey to Manchester Airport take?',
        a: 'Around 1 hour 10 minutes covering roughly 45 miles via the M62, depending on traffic. We build in extra time for peak-hour congestion.',
      },
      {
        q: 'Which terminal at Manchester Airport do you drop off at?',
        a: 'We drop off at whichever terminal your airline uses — Terminal 1, 2 or 3. Please provide your flight details when booking.',
      },
      {
        q: 'Can you track my connecting train if it is delayed?',
        a: 'Yes. Let us know your train service and expected arrival time when booking, and we will adjust your pickup if your train is delayed, at no extra charge.',
      },
    ],
  },
]

export function getRouteBySlug(slug: string): RouteData | undefined {
  return routePages.find((r) => r.slug === slug)
}
