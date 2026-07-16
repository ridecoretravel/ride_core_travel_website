export interface RoutePrice {
  route: string
  slug: string
  exec8: number   // 8-Seater Executive
  any4: number    // 4-Seater (Any)
  exec4: number   // 4-Seater Executive
}

export const routes: RoutePrice[] = [
  { route: 'Leeds City Centre → Leeds Bradford Airport',   slug: 'lba',        exec8: 60,  any4: 45,  exec4: 50  },
  { route: 'Leeds City Centre → Manchester Airport',       slug: 'manchester', exec8: 135, any4: 90,  exec4: 125 },
  { route: 'Leeds City Centre → Liverpool Airport',        slug: 'liverpool',  exec8: 160, any4: 125, exec4: 145 },
  { route: 'Leeds City Centre → London Heathrow Airport',  slug: 'heathrow',   exec8: 450, any4: 320, exec4: 390 },
]

export const pricesNote = 'Prices may vary for pickups outside Leeds City Centre.'
