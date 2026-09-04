import Link from 'next/link'
import { Mail, Users, Trophy, Heart, Target, Eye, Shield, Star } from 'lucide-react'

// Governance data
const governanceMembers = [
  {
    id: '1',
    name: 'Mudaspack Otieno',
    role: 'President',
    bio: 'Mudaspack has been a driving force in the Kenyan-Australian community. He brings extensive leadership experience in community sports and development.'
  },
  {
    id: '2',
    name: 'Ricky Switzer Omondi',
    role: 'Competition and fixtures Manager',
    bio: 'Ricky is a passionate advocate for sports inclusion and community engagement. He has led several initiatives connecting Kenyan youth to football.'
  },
  {
    id: '3',
    name: 'Laura Oyemba',
    role: 'General Secretary',
    bio: 'Laura brings years of experience in sports administration and governance. She is committed to building a strong, transparent federation.'
  },
  {
    id: '4',
    name: 'Sharon Nyangor',
    role: 'Treasurer',
    bio: 'Sharon brings financial expertise from corporate finance and sports management. She ensures the federation operates with integrity and sustainability.'
  },
  {
    id: '5',
    name: 'Clasine Odira',
    role: 'Venue and Match day operations Manager',
    bio: 'Clasine coordinates venue arrangements, pitch preparations, equipment, matchday setup and logistics.'
  },
  {
    id: '6',
    name: 'Monalisa Lauren',
    role: 'Sponsorships and Partnership Manager',
    bio: 'Lauren leads sponsorhips acquisition, partnerships development, sponsor relations and fundraising.'
  },
  {
    id: '7',
    name: 'Brian Omondi',
    role: 'Events and ceremony manager',
    bio: 'Brian oversees the planning and management of the events that are to be held by the federation.'
  },
  {
    id: '8',
    name: 'Isaac Oduor',
    role: 'Official Medical and Safety Manager',
    bio: 'Isaac manages the medical support, first aid, player welfare and match-day safety.'
  },
  {
    id: '9',
    name: 'Helvic Simiyu',
    role: 'Teams and Player Registration',
    bio: 'Helvic manages the team registration, player registration, eligibility accredation and team coordination'
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-federation-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-federation-red rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-federation-gold text-sm mb-4">
              <span className="bg-federation-gold/20 px-3 py-1 rounded-full border border-federation-gold/30">
                📖 Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4">
              About KAFL
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Uniting Kenyan communities through the beautiful game of football.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR STORY SECTION */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-federation-dark font-playfair text-center mb-8">
              Our Story
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The Kenyan Australian Football League was established to create meaningful opportunities 
                for Kenyans through sport. Football is more than a game, it's a powerful tool 
                for building community, promoting health and wellbeing, and creating pathways for young 
                people to develop discipline, teamwork, and leadership skills.
              </p>
              
              <p>
                In the diaspora, sports provide a vital connection to culture and identity while fostering 
                integration into Australian society. By establishing a league, we create a space where 
                Kenyans can come together, celebrate their heritage, and build lasting friendships across 
                generations.
              </p>
              
              <p>
                Beyond the pitch, KAFL serves as a platform for education, mentorship, and social development. 
                The league engages families, encourages active lifestyles, and provides positive outlets for 
                youth. It bridges cultural gaps, strengthens community ties, and contributes to the rich 
                multicultural fabric of Australia.
              </p>
              
              <p className="text-federation-green font-medium text-lg">
                Through the universal language of football, we are building a stronger, healthier, and more 
                connected community—not just for Kenyans, but for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MISSION, VISION, VALUES */}
      {/* ============================================ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-federation-dark font-playfair mb-4">
              Our Foundation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at the KAFL Federation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-federation-gold">
              <div className="w-12 h-12 bg-federation-gold/10 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} className="text-federation-gold" />
              </div>
              <h3 className="text-xl font-bold text-federation-dark mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To unite Kenyan communities across Australia through football, fostering inclusion, 
                excellence, and cultural pride.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-federation-green">
              <div className="w-12 h-12 bg-federation-green/10 rounded-lg flex items-center justify-center mb-4">
                <Eye size={24} className="text-federation-green" />
              </div>
              <h3 className="text-xl font-bold text-federation-dark mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To build a thriving community where Kenyan-Australians connect, grow, and excel 
                through the power of sport.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-4 border-federation-red">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Heart size={24} className="text-federation-red" />
              </div>
              <h3 className="text-xl font-bold text-federation-dark mb-2">Our Values</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Shield size={16} className="text-federation-green flex-shrink-0 mt-0.5" />
                  <span><strong>Integrity</strong> — Honesty in all we do</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star size={16} className="text-federation-gold flex-shrink-0 mt-0.5" />
                  <span><strong>Excellence</strong> — Striving for greatness</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users size={16} className="text-federation-red flex-shrink-0 mt-0.5" />
                  <span><strong>Community</strong> — United through sport</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart size={16} className="text-pink-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Inclusion</strong> — Football for everyone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GOVERNANCE SECTION */}
      {/* ============================================ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-federation-dark font-playfair mb-4">
              Local Organizing Committee
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The dedicated team leading the KAFL into its inaugural season and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {governanceMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto bg-federation-green/10 rounded-full flex items-center justify-center text-3xl mb-4">
                  👤
                </div>
                <h3 className="font-bold text-federation-dark">{member.name}</h3>
                <p className="text-federation-gold text-sm font-semibold uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT CTA */}
      {/* ============================================ */}
      <section className="py-16 bg-federation-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-playfair mb-3">
              Want to learn more?
            </h2>
            <p className="text-gray-400 mb-6">
              Whether you're a player, supporter, or potential partner, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-federation-gold text-federation-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors inline-flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Us
              </Link>
              <Link
                href="/teams"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2"
              >
                <Users size={18} />
                Explore Teams
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}