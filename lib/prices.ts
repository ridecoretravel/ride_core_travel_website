export interface RoutePrice {
  route: string
  slug: string
  exec8: number   // 8-Seater Executive
}

export const routes: RoutePrice[] = [
  { route: 'Leeds City Centre → Leeds Bradford Airport',       slug: 'lba',          exec8: 60  },
  { route: 'Leeds City Centre → Manchester Airport',           slug: 'manchester',   exec8: 135 },
  { route: 'Leeds City Centre → Liverpool Airport',            slug: 'liverpool',    exec8: 160 },
  { route: 'Leeds City Centre → East Midlands Airport',        slug: 'eastmidlands', exec8: 170 },
  { route: 'Leeds City Centre → Newcastle International Airport', slug: 'newcastle',  exec8: 230 },
  { route: 'Leeds City Centre → Birmingham Airport',           slug: 'birmingham',   exec8: 250 },
  { route: 'Leeds City Centre → London Heathrow Airport',      slug: 'heathrow',     exec8: 450 },
  { route: 'Leeds Bradford Airport → Manchester Airport',      slug: 'lba-manchester', exec8: 140 },
  { route: 'Leeds Bradford Airport → Liverpool Airport',       slug: 'lba-liverpool', exec8: 160 },
  { route: 'Leeds Bradford Airport → London Heathrow Airport', slug: 'lba-heathrow', exec8: 450 },
  { route: 'Leeds City Centre → Dover Ferry Port',             slug: 'dover',        exec8: 570 },
  { route: 'Leeds City Centre → Southampton Port',             slug: 'southampton',  exec8: 525 },
  { route: 'Leeds Train Station → Manchester Airport',         slug: 'manchester-train', exec8: 135 },
]

export const pricesNote = 'Prices may vary for pickups outside Leeds City Centre.'
