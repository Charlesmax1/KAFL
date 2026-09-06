import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient'
import { 
  ArrowLeft, 
  ArrowRight,
  MapPin, 
  Trophy, 
  Users, 
  Calendar, 
  Award,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ExternalLink
} from 'lucide-react'

// Team data
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
    description: 'The most successful club in KAFL history with back-to-back championships in 2022 and 2024. Known for their physical style of play and passionate supporters.',
    social_media: {
      twitter: 'https://twitter.com/EasternRhinos',
      instagram: 'https://instagram.com/EasternRhinos',
      facebook: 'https://facebook.com/EasternRhinos'
    }
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
    description: 'The pride of Victoria, known for their attacking style and passionate supporters. Winners of the 2023 championship.',
    social_media: {
      twitter: 'https://twitter.com/NairobiTigers',
      instagram: 'https://instagram.com/NairobiTigers'
    }
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
    description: 'The rising force from Queensland, building a strong foundation for the future with a focus on youth development.',
    social_media: {
      instagram: 'https://instagram.com/NyanzaLakers'
    }
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
    description: 'South Australia\'s finest, with a proud tradition of developing young talent and playing attractive football.',
    social_media: {}
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
    description: 'Western Australia\'s representatives, bringing a unique style to the league with their fast-paced, attacking football.',
    social_media: {}
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
    description: 'The Tasmanian team with a distinctive identity and growing fan base. Known for their resilience and team spirit.',
    social_media: {}
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
    description: 'One of the newest clubs, representing the Rift Valley community with pride. A team with big ambitions for the future.',
    social_media: {}
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
    description: 'The powerhouse from the west, ready to make their mark in the inaugural season. Built on strength and determination.',
    social_media: {}
  }
]

// Team color map
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

export default async function TeamDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  
  // Find the team
  const team = teamData.find(t => t.slug === slug)
  
  if (!team) {
    notFound()
  }

  const colors = teamColors[team.name] || { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-600', light: 'bg-gray-50' }
  const logoPath = `/images/teams/${team.slug}.png`

  // Fetch players from Supabase if available
  let players: any[] = []
  try {
    const { data: playersData } = await supabase
      .from('players')
      .select('*')
      .eq('team_id', team.id)
      .order('number')

    if (playersData && playersData.length > 0) {
      players = playersData
    }
  } catch (error) {
    console.log('No player data available')
  }

  // Sample players if no data
  const samplePlayers = [
    { id: '1', first_name: 'James', last_name: 'Okello', number: 1, position: 'GK', nationality: 'Kenya' },
    { id: '2', first_name: 'David', last_name: 'Ouma', number: 2, position: 'DF', nationality: 'Kenya' },
    { id: '3', first_name: 'Samuel', last_name: 'Kiprop', number: 3, position: 'DF', nationality: 'Kenya' },
    { id: '4', first_name: 'Peter', last_name: 'Wanjiru', number: 4, position: 'FW', nationality: 'Kenya' },
    { id: '5', first_name: 'Kevin', last_name: 'Odhiambo', number: 5, position: 'MF', nationality: 'Kenya' },
    { id: '6', first_name: 'Michael', last_name: 'Ochieng', number: 6, position: 'FW', nationality: 'Kenya' },
  ]

  const displayPlayers = players.length > 0 ? players : samplePlayers

  return (
    <div>
      {/* ============================================ */}
      {/* TEAM HEADER */}
      {/* ============================================ */}
      <section className={`relative py-12 md:py-16 overflow-hidden ${colors.bg}`}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Back Button */}
            <Link
              href="/teams"
              className="absolute top-4 left-4 md:top-6 md:left-6 text-white/80 hover:text-white transition-colors flex items-center gap-1 text-sm"
            >
              <ArrowLeft size={16} />
              Back to Teams
            </Link>

            {/* Team Logo */}
            <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full p-4">
              <img 
                src={logoPath}
                alt={team.name}
                className="w-full h-full object-contain drop-shadow-2xl"
                onError={(e) => {
                  // If logo doesn't exist, show emoji
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    const emojiSpan = document.createElement('span')
                    emojiSpan.className = 'text-7xl md:text-8xl lg:text-9xl drop-shadow-2xl'
                    emojiSpan.textContent = team.emoji || '🏉'
                    parent.appendChild(emojiSpan)
                  }
                }}
              />
            </div>

            {/* Team Info */}
            <div className="text-center md:text-left text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
                {team.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2 text-white/90">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {team.city}, {team.state}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  Founded {team.founded_year}
                </span>
                {team.achievements.titles > 0 && (
                  <span className="flex items-center gap-1 bg-federation-gold/20 px-3 py-1 rounded-full text-federation-gold">
                    <Trophy size={16} />
                    {team.achievements.titles}x Champion
                  </span>
                )}
              </div>
              <p className="text-white/80 max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
                {team.description}
              </p>
              {/* Social Media */}
              {team.social_media && Object.keys(team.social_media).length > 0 && (
                <div className="flex gap-3 mt-4 justify-center md:justify-start">
                  {team.social_media.twitter && (
                    <a href={team.social_media.twitter} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {team.social_media.instagram && (
                    <a href={team.social_media.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                      <Instagram size={20} />
                    </a>
                  )}
                  {team.social_media.facebook && (
                    <a href={team.social_media.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                      <Facebook size={20} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TEAM NAVIGATION TABS */}
      {/* ============================================ */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 overflow-x-auto py-3">
            <button className="text-federation-green border-b-2 border-federation-green pb-2 font-semibold whitespace-nowrap">
              Squad
            </button>
            <button className="text-gray-500 hover:text-federation-green transition-colors pb-2 font-medium whitespace-nowrap">
              Fixtures
            </button>
            <button className="text-gray-500 hover:text-federation-green transition-colors pb-2 font-medium whitespace-nowrap">
              Results
            </button>
            <button className="text-gray-500 hover:text-federation-green transition-colors pb-2 font-medium whitespace-nowrap">
              History
            </button>
            <button className="text-gray-500 hover:text-federation-green transition-colors pb-2 font-medium whitespace-nowrap">
              Gallery
            </button>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SQUAD SECTION */}
      {/* ============================================ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-federation-dark font-playfair">
                2026 Squad
              </h2>
              <p className="text-gray-500 text-sm">{displayPlayers.length} players</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users size={16} />
              <span>Full squad coming soon</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {displayPlayers.map((player) => (
              <div
                key={player.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 text-center border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2">
                  👤
                </div>
                <div className="text-sm font-bold text-federation-dark">
                  #{player.number}
                </div>
                <div className="text-sm font-semibold text-federation-dark">
                  {player.first_name} {player.last_name}
                </div>
                <div className="text-xs text-gray-500">
                  {player.position}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  🇰🇪 {player.nationality || 'Kenya'}
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Players */}
          <div className="mt-6 bg-federation-green/5 rounded-xl p-6 text-center border border-federation-green/20">
            <p className="text-gray-600 text-sm">
              🏉 More player profiles will be added as the season approaches.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TEAM STATS */}
      {/* ============================================ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-federation-dark font-playfair text-center mb-8">
            Team Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-federation-gold">{team.achievements.titles}</div>
              <div className="text-xs text-gray-500">Championships</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-federation-green">0</div>
              <div className="text-xs text-gray-500">Matches Played</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-federation-red">0</div>
              <div className="text-xs text-gray-500">Wins</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-federation-gold">0</div>
              <div className="text-xs text-gray-500">Goals Scored</div>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            📊 Statistics will be updated during the 2026 season
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* UPCOMING FIXTURES */}
      {/* ============================================ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-federation-dark font-playfair">
              Upcoming Fixtures
            </h2>
            <Link
              href="/fixtures"
              className="text-federation-green hover:text-federation-gold transition-colors text-sm font-medium inline-flex items-center gap-1"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center">
                    <img 
                      src={logoPath}
                      alt={team.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const parent = e.currentTarget.parentElement
                        if (parent) {
                          const emojiSpan = document.createElement('span')
                          emojiSpan.className = 'text-3xl'
                          emojiSpan.textContent = team.emoji || '🏉'
                          parent.appendChild(emojiSpan)
                        }
                      }}
                    />
                  </div>
                  <div className="text-sm font-semibold text-federation-dark mt-1">{team.name}</div>
                </div>
                <div className="text-center px-6">
                  <div className="text-xs text-gray-400 uppercase tracking-wider">VS</div>
                  <div className="text-federation-gold font-bold text-2xl">🏉</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">🐯</div>
                  <div className="text-sm font-semibold text-federation-dark">Nairobi Tigers</div>
                </div>
              </div>
              <div className="text-center mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  📅 December 2026 (TBC) • 📍 {team.home_ground}
                </p>
                <span className="inline-block mt-2 text-xs bg-federation-green/10 text-federation-green px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}