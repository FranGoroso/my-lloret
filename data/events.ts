export interface Event {
  weekday: string
  day: string
  month: string
  title: string
  dj: string
  genre: string
  featured: boolean
}

export const events: Event[] = [
  { weekday: 'Vie', day: '14', month: 'Mar', title: 'Deep House Night', dj: 'DJ Martín & Guests', genre: 'House', featured: true },
  { weekday: 'Sáb', day: '15', month: 'Mar', title: 'Urban & RnB', dj: 'DJ Kaos', genre: 'Urban', featured: false },
  { weekday: 'Jue', day: '20', month: 'Mar', title: 'Latin Vibes', dj: 'Salsa Brothers', genre: 'Latin', featured: false },
  { weekday: 'Vie', day: '21', month: 'Mar', title: 'Electronic Night', dj: 'Resident DJs', genre: 'Techno', featured: false },
  { weekday: 'Sáb', day: '22', month: 'Mar', title: 'Noche 90s', dj: 'DJ Flash', genre: 'Pop', featured: false },
]
