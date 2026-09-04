'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, User } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Teams', href: '/teams' },
  { name: 'Fixtures', href: '/fixtures' },
  { name: 'Ladder', href: '/ladder' },
  { name: 'News', href: '/news' },
  { name: 'Tickets', href: '/tickets' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-federation-dark border-b border-federation-green/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-federation-gold rounded-full flex items-center justify-center">
              <span className="text-federation-dark font-bold text-xl">🏉</span>
            </div>
            <div>
              <span className="text-white font-bold text-lg font-playfair">KAFL</span>
              <span className="block text-federation-gold text-[10px] font-medium tracking-wider uppercase">
                Federation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-federation-gold hover:bg-federation-green/20 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-300 hover:text-federation-gold transition-colors">
              <Search size={20} />
            </button>
            <Link
              href="/tickets"
              className="bg-federation-gold text-federation-dark px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-federation-gold transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-federation-green/20">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-300 hover:text-federation-gold hover:bg-federation-green/20 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/tickets"
                className="px-4 py-3 bg-federation-gold text-federation-dark rounded-lg font-semibold text-center mt-2 hover:bg-yellow-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Tickets
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}