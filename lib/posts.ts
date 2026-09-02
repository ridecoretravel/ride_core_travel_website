export type Post = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  featuredImage: string
  featuredImageAlt: string
  publishDate: string
  /** ISO date the post was last substantively updated. Falls back to publishDate. */
  updatedDate?: string
  readTime: string
  faqs: { q: string; a: string }[]
  body: Section[]
  /** Second button on the inline CTA card. Defaults to the Heathrow route page. */
  ctaRoute?: { label: string; href: string }
  /** Rendered as a "Related pages" list at the foot of the article. */
  relatedRoutes?: { label: string; href: string }[]
}

export type Section = {
  type: 'intro' | 'h2' | 'h3' | 'p' | 'ul' | 'cta'
  /** Single paragraph / list-intro text. Supports inline [label](/path) links. */
  content?: string
  heading?: string
  /** Extra paragraphs under an h2/h3 heading. Supports inline [label](/path) links. */
  paragraphs?: string[]
  /** Bullet list items. Supports inline [label](/path) links. */
  items?: string[]
}

export const posts: Post[] = [
  {
    slug: 'stress-free-airport-transfer-tips',
    title: '5 Tips for a Stress-Free Airport Transfer from Leeds',
    excerpt: 'A few small decisions can make the difference between a calm start to your journey and a stressful one. Here are five practical tips from the team at Ridecore Travel.',
    metaTitle: '5 Tips for a Stress-Free Airport Transfer from Leeds | Ridecore Travel',
    metaDescription: 'Travelling from Leeds to the airport? Here are 5 practical tips to make your transfer smoother — from timing your pickup to tracking your flight.',
    featuredImage: '/images/blog/airport-transfer-tips.webp',
    featuredImageAlt: 'Premium Mercedes Vito airport transfer from Leeds',
    publishDate: '2026-06-20',
    readTime: '4 min read',
    faqs: [
      {
        q: 'How early should I book my airport transfer?',
        a: 'We recommend booking as soon as you know your travel dates, especially for early-morning flights or busy holiday periods. As a guide, we suggest arriving at the airport 2 hours before a UK/domestic flight and 3 hours before an international flight — your pickup time is calculated backward from that.',
      },
      {
        q: 'Do you track flights for delays?',
        a: 'Yes. We monitor your flight number in real time and adjust your pickup automatically if your flight lands early or late, so you\'re never left waiting or rushing.',
      },
      {
        q: 'What if my group has a lot of luggage?',
        a: 'Our Mercedes-Benz Vito Tourer seats up to 8 passengers with generous boot space, comfortably fitting a full set of suitcases for the whole group.',
      },
      {
        q: 'Are your prices really fixed?',
        a: 'Yes — the price you\'re quoted is the price you pay, with no surge pricing or hidden extras. Note that prices may vary depending on your exact pickup location.',
      },
      {
        q: 'Can I book a transfer for the middle of the night?',
        a: 'Yes, we operate 24/7, including early mornings, late nights, and bank holidays.',
      },
    ],
    body: [
      {
        type: 'intro',
        content: 'Getting to the airport should be the easy part of your trip — not the part you worry about. Whether you\'re heading to Leeds Bradford, Manchester, Liverpool, or further afield to Heathrow, a few small decisions can make the difference between a calm start to your journey and a stressful one. Here are five practical tips from the team at Ridecore Travel.',
      },
      {
        type: 'h2',
        heading: '1. Book your transfer earlier than you think you need to',
        content: 'Airport traffic, roadworks, and unpredictable weather can all add time to a journey that looks straightforward on a map. Booking your fixed-price transfer in advance — rather than trying to arrange something last-minute — means your pickup time is built around your flight, not the other way around. As a rough guide, we recommend arriving at the terminal 2 hours before a domestic/UK flight and 3 hours before an international one.',
      },
      {
        type: 'h2',
        heading: '2. Know your fixed price before you travel',
        content: 'One of the most stressful parts of any taxi journey is not knowing what it\'ll cost until you arrive. With a fixed-price transfer, your fare is agreed before you set off — no meter, no surge pricing, no surprises at the other end. Check our fixed fares for Manchester, Liverpool, Heathrow and Leeds Bradford Airport before you book.',
      },
      {
        type: 'h2',
        heading: '3. Let your driver track your flight, not the clock',
        content: 'Flights get delayed. A good airport transfer service should track your actual flight number, not just the scheduled time on your booking — so if you land early or late, your driver adjusts automatically. This is especially useful on long-haul routes like Leeds to Heathrow, where a delay of an hour or two is common.',
      },
      {
        type: 'h2',
        heading: '4. Pack smart, but don\'t worry about space',
        content: 'If you\'re travelling as a family or group, luggage space is often the first thing people worry about. An 8-seater Mercedes Vito comfortably handles a full set of suitcases for up to 8 passengers, so there\'s no need to leave anyone or anything behind.',
      },
      {
        type: 'h2',
        heading: '5. Have your pickup details ready and confirmed the night before',
        content: 'A quick check the evening before — pickup address, time, and your driver\'s contact number — avoids any last-minute confusion on travel day. If your flight is at an unusual hour, remember that a 24/7 service means early-morning and late-night pickups are no different to any other time.',
      },
    ],
  },

  {
    slug: 'how-much-taxi-leeds-to-manchester-airport',
    title: 'How Much Is a Taxi From Leeds to Manchester Airport?',
    excerpt: 'A clear breakdown of what a Leeds to Manchester Airport transfer costs, what is included, and how a fixed-price 8-seater compares to the train, the coach and a metered taxi.',
    metaTitle: 'How Much Is a Taxi From Leeds to Manchester Airport? | Ridecore Travel',
    metaDescription: 'A taxi from Leeds to Manchester Airport is a fixed £135 for up to 8 passengers with Ridecore Travel. Here is what is included, and how it compares to the train and coach.',
    featuredImage: '/images/routes/manchester-airport.webp',
    featuredImageAlt: 'Manchester Airport terminal — fixed-price transfers from Leeds with Ridecore Travel',
    publishDate: '2026-09-02',
    readTime: '5 min read',
    ctaRoute: { label: 'See the Manchester Airport route', href: '/airport-transfers/leeds-to-manchester-airport' },
    relatedRoutes: [
      { label: 'Leeds to Manchester Airport — fixed fares & FAQs', href: '/airport-transfers/leeds-to-manchester-airport' },
      { label: '8-seater airport transfers from Leeds', href: '/airport-transfers/8-seater' },
      { label: 'Which airport should you fly from near Leeds?', href: '/blog/which-airport-to-fly-from-near-leeds' },
    ],
    body: [
      {
        type: 'intro',
        content: 'Manchester Airport is the busiest airport within easy reach of Leeds, and for a lot of flights it is the obvious choice. The question that comes up before every trip is the same one: what does it actually cost to get there? Here is a straight answer, plus how a fixed-price transfer stacks up against the alternatives.',
      },
      {
        type: 'h2',
        heading: 'The short answer',
        content: 'With Ridecore Travel, a taxi from Leeds City Centre to Manchester Airport is a fixed £135. That is the price for the whole vehicle — an 8-seater Mercedes-Benz Vito Tourer — not per person, so it is the same fare whether one person travels or a group of eight with luggage.',
        paragraphs: [
          'The price is agreed before you travel and confirmed in writing. There is no meter, no surge pricing at busy times, and nothing added on the day. Pickups from outside Leeds City Centre are priced on distance and confirmed when you book. Full detail is on the [Leeds to Manchester Airport](/airport-transfers/leeds-to-manchester-airport) route page.',
        ],
      },
      {
        type: 'h2',
        heading: 'What the fixed price includes',
        items: [
          'The full journey door-to-door — your Leeds address to the correct Manchester Airport terminal.',
          'Real-time flight tracking on the return leg, so the pickup adjusts automatically if you land early or late.',
          'Reasonable waiting time after landing while you clear passport control and baggage reclaim, at no extra charge.',
          'Up to 8 passengers and their luggage in one vehicle.',
          'A licensed private-hire driver (Leeds City Council PHV licence 25232) and a fully insured vehicle.',
        ],
      },
      {
        type: 'h2',
        heading: 'Taxi vs train vs coach from Leeds',
        content: 'The drive from Leeds to Manchester Airport is around 45 miles and roughly 1 hour 10 minutes via the M62, straight to the terminal door.',
        paragraphs: [
          'The train from Leeds runs direct to Manchester Airport station in a little under 1 hour 30 minutes, but a walk-up fare is often £30–£40 or more per person, so for two people the cost is already close to a shared taxi and for a family or group it is well past it — before you factor in luggage, changes and the walk from the station to your terminal.',
          'The coach is the cheapest option per person but the slowest and least flexible, with fixed departure points in Leeds and limited luggage allowance.',
          'For one or two travellers on a cheap advance train fare, the train can win on price. For three or more, for anyone with real luggage, and for early-morning departures when trains are sparse, a fixed-price 8-seater is usually both cheaper and simpler. See our [8-seater airport transfers](/airport-transfers/8-seater) page for how group pricing works.',
        ],
      },
      {
        type: 'h2',
        heading: 'How a fixed price compares to a metered taxi',
        content: 'A metered private-hire journey of this distance can land anywhere in a wide range depending on traffic, time of day and how the meter is set — and you do not know the final figure until you arrive. A pre-agreed fixed fare removes that uncertainty: £135 is £135 whether the M62 is clear or crawling.',
      },
      {
        type: 'h2',
        heading: 'When to book',
        content: 'As soon as your flights are confirmed. Early-morning departures, Friday afternoons and school-holiday getaways are the busiest windows, and booking ahead means your pickup time is built backwards from your flight rather than squeezed into what is left. You can [get a fixed quote here](/booking) or message the team on WhatsApp.',
      },
    ],
    faqs: [
      {
        q: 'How much is a taxi from Leeds to Manchester Airport?',
        a: 'With Ridecore Travel it is a fixed £135 from Leeds City Centre in an 8-seater Mercedes-Benz Vito Tourer. The fare covers the whole vehicle — up to 8 passengers — and is agreed before you travel with no meter or surge pricing. Pickups outside the city centre are priced on distance.',
      },
      {
        q: 'Is the price per person or for the whole car?',
        a: 'For the whole vehicle. £135 covers up to 8 passengers travelling together, so the more of you there are, the better value it gets compared with individual train tickets.',
      },
      {
        q: 'Is a taxi cheaper than the train from Leeds to Manchester Airport?',
        a: 'For one or two people on a cheap advance train fare, the train can be cheaper. For three or more passengers, or anyone travelling with luggage or at unsociable hours, the fixed £135 taxi is usually cheaper overall and takes you straight to the terminal door.',
      },
      {
        q: 'How long does the drive from Leeds to Manchester Airport take?',
        a: 'Approximately 1 hour 10 minutes via the M62, covering around 45 miles. We build extra time into early-morning and peak pickups.',
      },
      {
        q: 'Do you charge more if my flight is delayed?',
        a: 'No. We track your flight number in real time and adjust the pickup automatically, with reasonable waiting time after landing included at no extra charge.',
      },
      {
        q: 'Can I book a fixed-price return from Manchester Airport to Leeds?',
        a: 'Yes. Book both legs together and your return price is fixed at the time of booking; we monitor your inbound flight for any changes.',
      },
    ],
  },

  {
    slug: 'which-airport-to-fly-from-near-leeds',
    title: 'Which Airport Should You Fly From Near Leeds?',
    excerpt: 'Leeds Bradford, Manchester, Liverpool, Birmingham or Heathrow — how the five airports within reach of Leeds compare on drive time, flight choice and transfer cost.',
    metaTitle: 'Which Airport Should You Fly From Near Leeds? LBA vs Manchester vs More',
    metaDescription: 'Leeds Bradford is closest, but Manchester has far more flights. A practical comparison of the five airports within reach of Leeds, with drive times and fixed transfer prices.',
    featuredImage: '/images/routes/airport-transfers-hero.webp',
    featuredImageAlt: 'Mercedes Vito on the motorway at dusk — airport transfers from Leeds with Ridecore Travel',
    publishDate: '2026-09-02',
    readTime: '6 min read',
    ctaRoute: { label: 'Compare all fixed fares', href: '/airport-transfers' },
    relatedRoutes: [
      { label: 'Leeds Bradford Airport taxi', href: '/airport-transfers/leeds-bradford-airport-taxi' },
      { label: 'Leeds to Manchester Airport', href: '/airport-transfers/leeds-to-manchester-airport' },
      { label: 'Leeds to Liverpool Airport', href: '/airport-transfers/leeds-to-liverpool-airport' },
      { label: 'Leeds to Birmingham Airport', href: '/airport-transfers/leeds-to-birmingham-airport' },
      { label: 'Leeds to London Heathrow', href: '/airport-transfers/leeds-to-heathrow' },
      { label: '8-seater group transfers', href: '/airport-transfers/8-seater' },
    ],
    body: [
      {
        type: 'intro',
        content: 'Leeds Bradford is the local airport, but it is small — so the right choice often depends more on where you are flying than on which airport is nearest. Here is how the five airports within a sensible drive of Leeds compare.',
      },
      {
        type: 'h2',
        heading: 'Leeds Bradford Airport (LBA)',
        content: 'The closest by a wide margin — around 9 miles and 20–30 minutes from the city centre. Good for domestic hops, Jet2 and Ryanair holiday routes, and short-notice trips where you value a quick, cheap transfer over choice.',
        paragraphs: [
          'The catch is the flight network: LBA serves a limited set of destinations, often on fewer days per week, and long-haul is not an option. Fixed transfer from Leeds: £60. Detail on the [Leeds Bradford Airport taxi](/airport-transfers/leeds-bradford-airport-taxi) page.',
        ],
      },
      {
        type: 'h2',
        heading: 'Manchester Airport (MAN)',
        content: 'About 45 miles and 1 hour 10 minutes via the M62. This is the workhorse choice for Leeds travellers: three terminals, the widest short-haul and long-haul network in the North, and multiple daily frequencies on most routes.',
        paragraphs: [
          'If your destination is not on the LBA board, it is almost certainly at Manchester. Fixed transfer from Leeds: £135 for up to 8 — see [Leeds to Manchester Airport](/airport-transfers/leeds-to-manchester-airport), or the cost breakdown in [how much is a taxi from Leeds to Manchester Airport](/blog/how-much-taxi-leeds-to-manchester-airport).',
        ],
      },
      {
        type: 'h2',
        heading: 'Liverpool John Lennon Airport (LPL)',
        content: 'Around 75 miles and 1 hour 30 minutes, also via the M62. Smaller and quicker to move through than Manchester, with a decent easyJet and Ryanair network to Europe and Ireland.',
        paragraphs: [
          'Worth checking if you want a calmer airport experience and your route is served. Fixed transfer from Leeds: £160 — see [Leeds to Liverpool Airport](/airport-transfers/leeds-to-liverpool-airport).',
        ],
      },
      {
        type: 'h2',
        heading: 'Birmingham Airport (BHX)',
        content: 'About 120 miles and 2 hours 15 minutes via the M1 and M42. Usually only worth the drive for a specific route or fare not available at Manchester — a particular long-haul carrier, or a charter flight.',
        paragraphs: [
          'For a group, the fixed £250 fare for up to 8 can still beat the combined cost of train tickets plus the transfer from Birmingham International station. See [Leeds to Birmingham Airport](/airport-transfers/leeds-to-birmingham-airport).',
        ],
      },
      {
        type: 'h2',
        heading: 'London Heathrow (LHR)',
        content: 'Around 200 miles and 3 hours 30 minutes down the M1. Chosen for long-haul routes and airline connections that only Heathrow offers, and by groups who would rather travel together door-to-door than manage luggage across a train and the Piccadilly line.',
        paragraphs: [
          'Fixed transfer from Leeds: £450 for up to 8. See [Leeds to Heathrow](/airport-transfers/leeds-to-heathrow).',
        ],
      },
      {
        type: 'h2',
        heading: 'How to choose',
        items: [
          'Start with the flight, not the airport. Check whether your destination and dates are served from LBA first — if they are, and the fare is reasonable, the short transfer usually wins.',
          'If LBA does not have it, Manchester is the default. Liverpool is worth a look for European routes if you prefer a smaller airport.',
          'Only drive to Birmingham or Heathrow for a route or connection you genuinely cannot get closer to home — usually long-haul.',
          'Travelling as a group of 4+? Factor the transfer as one fixed vehicle cost, not per person — it changes the maths against the train. Our [8-seater transfers](/airport-transfers/8-seater) page explains how.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the closest airport to Leeds?',
        a: 'Leeds Bradford Airport (LBA), around 9 miles north-west of the city centre — a 20–30 minute drive. Manchester Airport is the next nearest at about 45 miles.',
      },
      {
        q: 'Is it better to fly from Leeds Bradford or Manchester?',
        a: 'Leeds Bradford is quicker and cheaper to get to, but has a limited flight network. Manchester is around an hour further by road but has far more destinations, more frequencies and long-haul options. Check LBA first; if your route is not there, use Manchester.',
      },
      {
        q: 'How far is Manchester Airport from Leeds?',
        a: 'About 45 miles and approximately 1 hour 10 minutes by road via the M62, straight to the terminal.',
      },
      {
        q: 'How much is a taxi to each airport from Leeds?',
        a: 'Fixed Ridecore Travel fares for up to 8 passengers: Leeds Bradford £60, Manchester £135, Liverpool £160, East Midlands £170, Newcastle £230, Birmingham £250, London Heathrow £450. Pickups outside Leeds City Centre may vary with distance.',
      },
      {
        q: 'Which airport near Leeds has the most flights?',
        a: 'Manchester Airport, by a wide margin — it has the largest short-haul and long-haul network of any airport in the North of England.',
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
