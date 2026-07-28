export interface RoutePrice {
  route: string
  slug: string
  exec8: number   // 8-Seater Executive
}

export const routes: RoutePrice[] = [
  { route: 'Leeds City Centre → Leeds Bradford Airport',   slug: 'lba',        exec8: 60  },
  { route: 'Leeds City Centre → Manchester Airport',       slug: 'manchester', exec8: 135 },
  { route: 'Leeds City Centre → Liverpool Airport',        slug: 'liverpool',  exec8: 160 },
  { route: 'Leeds City Centre → London Heathrow Airport',  slug: 'heathrow',   exec8: 450 },
]

export const pricesNote = 'Prices may vary for pickups outside Leeds City Centre.'
