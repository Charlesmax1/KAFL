import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabaseClient'
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Tag,
  Search,
  Filter,
  Grid3x3,
  List,
  ChevronDown
} from 'lucide-react'

// Sample news data
const sampleNews = [
  {
    id: '1',
    title: 'KAFL Announces 8 Teams for Inaugural 2026 Season',
    slug: 'kafl-announces-8-teams',
    excerpt: 'The Kenyan Australian Football League is proud to announce the 8 clubs that will compete in the historic inaugural season. Teams from across Kenya will battle for the championship.',
    content: 'Full content here...',
    category: 'federation',
    author: 'KAFL Media',
    published_at: new Date(Date.now() - 3600000).toISOString(),
    featured_image: '',
    featured: true
  },

  {
    id: '2',
    title: 'Player Registration Now Open for 2026',
    slug: 'player-registration-open',
    excerpt: 'Aspiring players can now register for the 2026 season. Training will be held at Kasarani gate 4 every Saturday from 10:00 am. Don\'t miss your chance!',
    content: 'Full content here...',
    category: 'teams',
    author: 'Jepchirchir',
    published_at: new Date(Date.now() - 432000000).toISOString(),
    featured_image: '',
    featured: false
  },
]

const categoryColors: Record<string, { bg: string, text: string, icon: string }> = {
  federation: { bg: 'bg-federation-green/10', text: 'text-federation-green', icon: '🏛️' },
  teams: { bg: 'bg-blue-100', text: 'text-blue-700', icon: '🏉' },
  community: { bg: 'bg-green-100', text: 'text-green-700', icon: '🌍' },
  tickets: { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: '🎟️' },
  media: { bg: 'bg-purple-100', text: 'text-purple-700', icon: '📺' },
}

export default async function NewsPage() {
  let news = sampleNews
  let categories = ['All', 'Federation', 'Teams', 'Community', 'Tickets', 'Media']

  try {
    const { data: newsData } = await supabase
      .from('news')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (newsData && newsData.length > 0) {
      news = newsData
    }
  } catch (error) {
    console.log('Using sample news data')
  }

  // Featured article
  const featuredNews = news.find(n => n.featured) || news[0]
  const regularNews = news.filter(n => n.id !== featuredNews?.id)

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
                📰 Latest Updates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4">
              News & Media
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              The latest news, announcements, and stories from the 
              Kenyan Australian Football League.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FILTERS & CONTROLS */}
      {/* ============================================ */}
      <section className="bg-white border-b border-gray-200 py-4 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === 'All' 
                      ? 'bg-federation-green text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1">
                More <ChevronDown size={14} />
              </button>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full sm:w-48 pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors text-sm"
                />
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-2 bg-federation-green text-white rounded-lg hover:bg-federation-green/80 transition-colors">
                  <Grid3x3 size={18} />
                </button>
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURED ARTICLE */}
      {/* ============================================ */}
      {featuredNews && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <Link
              href={`/news/${featuredNews.slug}`}
              className="group block"
            >
              <div className="relative bg-gradient-to-r from-federation-dark to-federation-green rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-federation-gold rounded-full blur-3xl"></div>
                </div>
                <div className="relative p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                      categoryColors[featuredNews.category]?.bg || 'bg-gray-100'
                    } ${categoryColors[featuredNews.category]?.text || 'text-gray-700'}`}>
                      {categoryColors[featuredNews.category]?.icon || '📰'} {featuredNews.category}
                    </span>
                    <span className="text-xs text-gray-400">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-playfair mb-3 group-hover:text-federation-gold transition-colors">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base max-w-2xl mb-4">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {featuredNews.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(featuredNews.published_at).toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                    <span className="text-federation-gold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read More
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* NEWS GRID */}
      {/* ============================================ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {regularNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                    {article.featured_image ? (
                      <Image
                        src={article.featured_image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-federation-green/10 to-federation-gold/10">
                        <span className="text-6xl opacity-30">
                          {categoryColors[article.category]?.icon || '📰'}
                        </span>
                      </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                        categoryColors[article.category]?.bg || 'bg-gray-100'
                      } ${categoryColors[article.category]?.text || 'text-gray-700'}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-federation-dark mb-2 group-hover:text-federation-gold transition-colors line-clamp-2">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(article.published_at).toLocaleDateString('en-AU', {
                          day: 'numeric',
                          month: 'short'
                        })}
                      </span>
                    </div>
                    <Link
                      href={`/news/${article.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-federation-green hover:text-federation-gold transition-colors group-hover:translate-x-1"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No news articles found.</p>
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="bg-white text-federation-green border-2 border-federation-green px-8 py-3 rounded-lg font-semibold hover:bg-federation-green hover:text-white transition-colors">
              Load More News
            </button>
          </div>

          {/* Subscribe CTA */}
          <div className="mt-12 bg-gradient-to-r from-federation-green to-federation-dark rounded-xl p-8 text-center text-white">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-xl font-bold font-playfair mb-2">
              Stay Updated
            </h3>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mb-4">
              Subscribe to our newsletter for the latest news, fixtures, and tickets.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-federation-gold"
              />
              <button
                type="submit"
                className="bg-federation-gold text-federation-dark px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MEDIA CONTACT */}
      {/* ============================================ */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-federation-dark font-playfair mb-2">
              📺 Media & Press
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              For media inquiries, interviews, or press credentials, please contact our media team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=media"
                className="text-federation-green hover:text-federation-gold transition-colors font-medium inline-flex items-center gap-1"
              >
                Contact Media Team
                <ArrowRight size={16} />
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/documents/media-kit.pdf"
                className="text-federation-green hover:text-federation-gold transition-colors font-medium inline-flex items-center gap-1"
              >
                Download Media Kit
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}