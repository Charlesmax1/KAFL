import Link from 'next/link'
import { Trophy, ArrowRight, Clock, Medal } from 'lucide-react'

export default function LadderPage() {
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
                🏆 2026 Season
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4">
              League Ladder
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Official standings for the 2026 KAFL season.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* COMING SOON MESSAGE */}
      {/* ============================================ */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="text-7xl md:text-8xl mb-6 animate-pulse">
              🏆
            </div>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-federation-dark font-playfair mb-4">
              Ladder Coming Soon
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg mb-6">
              The 2026 season hasn't started yet. The ladder will update 
              live once matches begin in December.
            </p>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-federation-gold mx-auto mb-6"></div>
            
            {/* Info Box */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 max-w-sm mx-auto">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Clock size={18} className="text-federation-gold" />
                  <span>Season 1 kicks off December 2026</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <Medal size={18} className="text-federation-gold" />
                  <span>8 teams competing</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/teams"
                className="bg-federation-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-federation-green/80 transition-colors inline-flex items-center gap-2"
              >
                Meet the Teams
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/fixtures"
                className="bg-white text-federation-green border-2 border-federation-green px-6 py-3 rounded-lg font-semibold hover:bg-federation-green hover:text-white transition-colors inline-flex items-center gap-2"
              >
                View Fixtures
              </Link>
            </div>

            {/* Note */}
            <p className="text-xs text-gray-400 mt-6">
              🔔 Subscribe to our newsletter for season updates
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* COUNTDOWN CTA */}
      {/* ============================================ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-federation-green to-federation-dark rounded-xl p-8">
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="text-xl font-bold text-white font-playfair mb-2">
              Season 1 Kicks Off December 2026
            </h3>
            <p className="text-white/80 text-sm max-w-md mx-auto mb-4">
              The ladder will start updating as soon as the first whistle blows.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/tickets"
                className="bg-federation-gold text-federation-dark px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
              >
                <Trophy size={18} />
                Get Tickets
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-white px-6 py-2.5 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}