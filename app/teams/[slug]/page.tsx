import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { 
  ArrowRight, 
  MapPin, 
  Trophy, 
  Users, 
  Search,
  Filter,
  Calendar,
  Star
} from 'lucide-react'

// Team data with emojis and colors
const teamData = [
  {
    id: '1',
    name: 'Eastern Rhinos',
    slug: 'eastern-rhinos',
    city: 'Eastern Province',
    state: 'NSW',
    founded_year: 2020,
    home_ground: 'Rhinos Stadium',
    colors: ['#C41E3A', '#0A0A0A'],
    achievements: { titles: 2, years: ['2022', '2024'] },
    emoji: '🦏',
    description: 'The most successful club in KAFL history with back-to-back championships in 2022 and 2024.'
  },
  {
    id: '2',
    name: 'Nairobi Tigers',
    slug: 'nairobi-tigers',
    city: 'Nairobi',
    state: 'VIC',
    founded_year: 2020,
    home_ground: 'Tigers Park',
    colors: ['#F5C518', '#0F3B2A'],
    achievements: { titles: 1, years: ['2023'] },
    emoji: '🐯',
    description: 'The pride of Victoria, known for their attacking style and passionate supporters.'
  },
  {
    id: '3',
    name: 'Nyanza Lakers',
    slug: 'nyanza-lakers',
    city: 'Kisumu',
    state: 'QLD',
    founded_year: 2021,
    home_ground: 'Lakers Stadium',
    colors: ['#1A5C3E', '#FFFFFF'],
    achievements: { titles: 0, years: [] },
    emoji: '🦁',
    description: 'The rising force from Queensland, building a strong foundation for the future.'
  },
  {
    id: '4',
    name: 'Central Eagles',
    slug: 'central-eagles',
    city: 'Central Province',
    state: 'SA',
    founded_year: 2021,
    home_ground: 'Eagles Nest',
    colors: ['#D4A33C', '#0A0A0A'],
    achievements: { titles: 0, years: [] },
    emoji: '🦅',
    description: 'South Australia\'s finest, with a proud tradition of developing young talent.'
  },
  {
    id: '5',
    name: 'North Eastern Oryx',
    slug: 'north-eastern-oryx',
    city: 'Garissa',
    state: 'WA',
    founded_year: 2022,
    home_ground: 'Oryx Ground',
    colors: ['#C41E3A', '#FFFFFF'],
    achievements: { titles: 0, years: [] },
    emoji: '🦌',
    description: 'Western Australia\'s representatives, bringing a unique style to the league.'
  },
  {
    id: '6',
    name: 'Coastal Pink Sharks',
    slug: 'coastal-pink-sharks',
    city: 'Mombasa',
    state: 'TAS',
    founded_year: 2022,
    home_ground: 'Sharks Bay',
    colors: ['#FF69B4', '#0A0A0A'],
    achievements: { titles: 0, years: [] },
    emoji: '🦈',
    description: 'The Tasmanian team with a distinctive identity and growing fan base.'
  },
  {
    id: '7',
    name: 'Rift Valley Buffaloes',
    slug: 'rift-valley-buffaloes',
    city: 'Nakuru',
    state: 'NSW',
    founded_year: 2023,
    home_ground: 'Buffalo Ground',
    colors: ['#0F3B2A', '#D4A33C'],
    achievements: { titles: 0, years: [] },
    emoji: '🐃',
    description: 'One of the newest clubs, representing the Rift Valley community with pride.'
  },
  {
    id: '8',
    name: 'Western Black Bulls',
    slug: 'western-black-bulls',
    city: 'Kakamega',
    state: 'NSW',
    founded_year: 2023,
    home_ground: 'Bulls Stadium',
    colors: ['#0A0A0A', '#FFFFFF'],
    achievements: { titles: 0, years: [] },
    emoji: '🐂',
    description: 'The powerhouse from the west, ready to make their mark in the inaugural season.'
  }
]

// Team color map for styling
const teamColors: Record<string, { bg: string, text: string, border: string, light: string }> = {
  'Eastern Rhinos': { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', light: 'bg-red-50' },
  'Nairobi Tigers': { bg: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-500', light: 'bg-yellow-50' },
  'Nyanza Lakers': { bg: 'bg-green-700', text: 'text-green-700', border: 'border-green-700', light: 'bg-green-50' },
  'Central Eagles': { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-500', light: 'bg-amber-50' },
  'North Eastern Oryx': { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-600', light: 'bg-red-50' },
  'Coastal Pink Sharks': { bg: 'bg-pink-500', text: 'text-pink-500', border: 'border-pink-500', light: 'bg-pink-50' },
  'Rift Valley Buffaloes': { bg: 'bg-emerald-700', text: 'text-emerald-700', border: 'border-emerald-700', light: 'bg-emerald-50' },
  'Western Black Bulls': { bg: 'bg-gray-800', text: 'text-gray-800', border: 'border-gray-800', light: 'bg-gray-50' },
}

export default async function TeamsPage() {
  let teams = teamData

  // Fetch teams from Supabase if available
  try {
    const { data: supabaseTeams } = await supabase
      .from('teams')
      .select('*')
      .order('name')

    if (supabaseTeams && supabaseTeams.length > 0) {
      // Merge Supabase data with our local data to preserve emojis and colors
      teams = supabaseTeams.map((team: any) => {
        const localTeam = teamData.find(t => t.slug === team.slug)
        return {
          ...team,
          emoji: localTeam?.emoji || '🏉',
          ...localTeam?.achievements && { achievements: localTeam.achievements }
        }
      })
    }
  } catch (error) {
    console.log('Using local team data')
  }

  // Get unique states for filter
  const states = [...new Set(teams.map(t => t.state))].filter(Boolean)

  return (
    <div>
      {/* ============================================ */}
      {/* PAGE HERO */}
      {/* ============================================ */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-federation-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-federation-red rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-federation-gold text-sm mb-4">
              <span className="bg-federation-gold/20 px-3 py-1 rounded-full border border-federation-gold/30">
                🏉 8 Clubs
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4">
              Our Teams
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Meet the 8 clubs that make up the Kenyan Australian Football League. 
              Each team represents a unique community and brings its own spirit to the league. 
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FILTERS & SEARCH */}
      {/* ============================================ */}
      <section className="bg-white border-b border-gray-200 py-4 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-sm text-gray-500 font-medium mr-2">Filter:</span>
              <button className="px-4 py-2 bg-federation-green text-white rounded-lg text-sm font-medium hover:bg-federation-green/80 transition-colors">
                All Teams
              </button>
              {states.map((state) => (
                <button
                  key={state}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {state}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search teams..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors text-sm"
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TEAMS GRID */}
      {/* ============================================ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team) => {
              const colors = teamColors[team.name] || { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-600', light: 'bg-gray-50' }
              const logoPath = `./images/teams/${team.slug}.png`
              
              return (
                <Link
                  key={team.id}
                  href={`/teams/${team.slug}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  {/* Team Color Bar */}
                  <div className={`h-2 ${colors.bg}`}></div>
                  
                  {/* Team Content */}
                  <div className="p-6">
                    {/* Logo & Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                        <img 
                          src={logoPath}
                          alt={team.name}
                          loading="lazy"
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-federation-dark group-hover:text-federation-gold transition-colors">
                          {team.name}
                        </h3>
                        <p className="text-xs text-gray-400">{team.city}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {team.description || `${team.name} competes in the KAFL from ${team.city}, ${team.state}.`}
                    </p>

                    {/* Details */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin size={14} className="text-federation-gold" />
                        <span>{team.home_ground}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={14} className="text-federation-gold" />
                        <span>Founded {team.founded_year}</span>
                      </div>
                      {team.achievements?.titles > 0 && (
                        <div className="flex items-center gap-2 text-xs text-federation-gold font-semibold">
                          <Trophy size={14} />
                          <span>{team.achievements.titles}x Champion ({team.achievements.years?.join(', ')})</span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-federation-green group-hover:text-federation-gold transition-colors">
                        View Team
                      </span>
                      <ArrowRight size={16} className="text-federation-green group-hover:text-federation-gold transition-colors group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="py-16 bg-federation-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-3">
              Which team will you support?
            </h2>
            <p className="text-gray-400 mb-6">
              Learn more about each club, their history, and their squad for the 2026 season.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tickets"
                className="bg-federation-gold text-federation-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
              >
                <Trophy size={18} />
                Get Tickets
              </Link>
              <Link
                href="/fixtures"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                <Calendar size={18} />
                View Fixtures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}