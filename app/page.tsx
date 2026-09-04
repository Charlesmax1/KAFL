import Link from 'next/link'
import { supabase } from '@/lib/supabaseClient'
import { ArrowRight, Calendar, Trophy, Users, MapPin, Clock } from 'lucide-react'

// Sample news data
const sampleNews = [
  {
    id: '1',
    title: 'KAFL Announces 8 Teams for Inaugural 2026 Season',
    excerpt: 'The Kenyan Australian Football League is proud to announce the 8 clubs that will compete in the historic inaugural season across Kenya.',
    category: 'federation',
    published_at: new Date().toISOString(),
    'featured_image': '',
    slug: 'kafl-announces-8-teams'
  },
  {
    id: '2',
    title: 'Player Training Session',
    excerpt: 'KAFL is pleased to announce that the training session of players will be held at Kasarani Gate 4 every Saturday from 10:00am.',
    category: 'training',
    published_at: new Date(Date.now() - 86400000).toISOString(),
    featured_image: '',
    slug: 'community-clinic-sydney'
  },
  {
    id: '3',
    title: 'Kenya Australian Football League Season One',
    excerpt: 'The KAFL Season One is expected to kick off in December with eight teams playing in the league. ',
    category: 'League',
    published_at: new Date(Date.now() - 172800000).toISOString(),
    featured_image: '',
    slug: 'season-tickets-2026'
  }
]

// Team Data
const sampleTeams = [
  { id: '1', name: 'Eastern Rhinos', slug: 'eastern-rhinos', city: 'Sydney', state: 'NSW', logo_url: '', achievements: { titles: 0 } },
  { id: '2', name: 'Nairobi Tigers', slug: 'nairobi-tigers', city: 'Melbourne', state: 'VIC', logo_url: '', achievements: { titles: 0 } },
  { id: '3', name: 'Nyanza Lakers', slug: 'nyanza-lakers', city: 'Brisbane', state: 'QLD', logo_url: '', achievements: { titles: 0 } },
  { id: '4', name: 'Central Eagles', slug: 'central-eagles', city: 'Adelaide', state: 'SA', logo_url: '', achievements: { titles: 0 } },
  { id: '5', name: 'North Eastern Oryx', slug: 'north-eastern-oryx', city: 'Perth', state: 'WA', logo_url: '', achievements: { titles: 0 } },
  { id: '6', name: 'Coastal Pink Sharks', slug: 'coastal-pink-sharks', city: 'Hobart', state: 'TAS', logo_url: '', achievements: { titles: 0 } },
  { id: '7', name: 'Rift Valley Buffaloes', slug: 'rift-valley-buffaloes', city: 'Newcastle', state: 'NSW', logo_url: '', achievements: { titles: 0 } },
  { id: '8', name: 'Western Black Bulls', slug: 'western-black-bulls', city: 'Canberra', state: 'ACT', logo_url: '', achievements: { titles: 0 } },
]

// Team emojis
const teamEmojis: Record<string, string> = {
  'Eastern Rhinos': '🦏',
  'Nairobi Tigers': '🐯',
  'Nyanza Lakers': '🦁',
  'Central Eagles': '🦅',
  'North Eastern Oryx': '🦌',
  'Coastal Pink Sharks': '🦈',
  'Rift Valley Buffaloes': '🐃',
  'Western Black Bulls': '🐂',
}

export default async function Home() {
  let news = sampleNews
  let teams = sampleTeams

  try {
    const { data: newsData } = await supabase
      .from('news')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(3)

    if (newsData && newsData.length > 0) {
      news = newsData
    }

    const { data: teamsData } = await supabase
      .from('teams')
      .select('*')
      .order('name')

    if (teamsData && teamsData.length > 0) {
      teams = teamsData
    }
  } catch (error) {
    console.log('Using sample data')
  }

  return (
    <div>
      {/* ============================================ */}
      {/* HERO SECTION - WITH BACKGROUND IMAGE */}
      {/* ============================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-federation-gold/20 backdrop-blur-sm text-federation-gold px-4 py-2 rounded-full mb-6 border border-federation-gold/30">
              <span className="text-sm font-medium">🏉 Official Federation Website</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Kenyan Australian
              <span className="block text-federation-gold">Football League</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
              Uniting Kenyan communities across Australia through the beautiful game. 
              <span className="block text-federation-gold font-semibold mt-1">
                8 Clubs | One Community | Inaugural Season 2026
              </span>
            </p>

            {/* Season Message - Replaced Countdown */}
            <div className="bg-federation-dark/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border border-federation-green/30 max-w-2xl">
              <p className="text-center text-white text-lg md:text-xl font-semibold">
                📅 Season One kicks off in <span className="text-federation-gold">December 2026</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/teams"
                className="bg-federation-gold text-federation-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
              >
                Explore Teams
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/fixtures"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                View Fixtures
              </Link>
              <Link
                href="/tickets"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-federation-gold rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEDERATION STATS BANNER */}
      {/* ============================================ */}
      <section className="bg-federation-dark border-y border-federation-green/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <div className="text-center flex-1">
              <div className="text-3xl md:text-4xl font-bold text-federation-gold font-playfair">8</div>
              <div className="text-sm text-gray-400 mt-1">Club </div>
              <div className="text-xs text-gray-500">🏉Teams</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-3xl md:text-4xl font-bold text-federation-gold font-playfair">2026</div>
              <div className="text-sm text-gray-400 mt-1">Inaugural Season</div>
              <div className="text-xs text-gray-500">🏆 First Ever</div>
            </div> 
            <div className="text-center flex-1">
              <div className="text-3xl md:text-4xl font-bold text-federation-gold font-playfair">8</div>
              <div className="text-sm text-gray-400 mt-1">Provinces</div>
              <div className="text-xs text-gray-500"> Across Kenya</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* LATEST NEWS SECTION */}
      {/* ============================================ */}
      <section className="py-16 bg-federation-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-federation-dark font-playfair">
                Latest News
              </h2>
              <p className="text-gray-500 mt-1">Stay updated with the federation</p>
            </div>
            <Link
              href="/news"
              className="text-federation-green hover:text-federation-gold transition-colors font-semibold inline-flex items-center gap-1"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {item.featured_image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.featured_image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded ${
                      item.category === 'federation' ? 'bg-federation-green/10 text-federation-green' :
                      item.category === 'teams' ? 'bg-blue-100 text-blue-700' :
                      item.category === 'community' ? 'bg-green-100 text-green-700' :
                      item.category === 'tickets' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(item.published_at).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-federation-dark mb-2 group-hover:text-federation-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="text-federation-green font-semibold text-sm hover:text-federation-gold transition-colors inline-flex items-center gap-1"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TEAMS PREVIEW SECTION */}
      {/* ============================================ */}
      <section className="py-16 bg-federation-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair">
              Meet the 8 Clubs
            </h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              The clubs that make up the Kenyan Australian Football League, representing communities across Australia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teams.map((team) => {
              const emoji = teamEmojis[team.name] || '⚽'
              return (
                <Link
                  key={team.id}
                  href={`/teams/${team.slug}`}
                  className="group bg-federation-green/10 hover:bg-federation-green/20 border border-federation-green/20 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-federation-gold/50"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {emoji}
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-federation-gold transition-colors">
                    {team.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    📍 {team.city}, {team.state}
                  </p>
                  <span className="inline-block mt-2 text-federation-gold text-xs font-semibold bg-federation-gold/10 px-2 py-1 rounded">
                     New Club
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/teams"
              className="inline-flex items-center gap-2 text-federation-gold hover:text-yellow-400 transition-colors font-semibold"
            >
              View All Teams
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FIXTURES & SEASON COMING SOON */}
      {/* ============================================ */}
      <section className="py-16 bg-federation-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">📋</div>
            <h2 className="text-3xl md:text-4xl font-bold text-federation-dark font-playfair mb-4">
              Season Schedule
            </h2>
            <p className="text-gray-600 text-lg mb-2">
              The 2026 season kicks off in <strong className="text-federation-gold">December</strong>.
            </p>
            <p className="text-gray-500">
              Full fixtures and venues will be announced soon.
            </p>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/fixtures"
                className="bg-federation-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-federation-green/80 transition-colors inline-flex items-center gap-2"
              >
                View Fixtures
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="bg-white text-federation-green border-2 border-federation-green px-6 py-3 rounded-lg font-semibold hover:bg-federation-green hover:text-white transition-colors inline-flex items-center gap-2"
              >
                Get Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SPONSORS SECTION */}
      {/* ============================================ */}
      <section className="py-12 bg-federation-dark/90">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
            Proudly Supported By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="text-white/40 text-xl font-bold">SPONSOR</div>
            <div className="text-white/40 text-xl font-bold">PARTNER</div>
            <div className="text-white/40 text-xl font-bold">SUPPORTER</div>
            <div className="text-white/40 text-xl font-bold">COMMUNITY</div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/partners"
              className="text-federation-gold hover:text-yellow-400 transition-colors text-sm font-medium"
            >
              Become a Partner →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* NEWSLETTER SIGNUP */}
      {/* ============================================ */}
      <section className="py-16 bg-gradient-to-r from-federation-green to-federation-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-2">
              Stay Connected
            </h2>
            <p className="text-gray-300 mb-6">
              Get the latest news, fixtures, and tickets straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-federation-gold"
              />
              <button
                type="submit"
                className="bg-federation-gold text-federation-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}