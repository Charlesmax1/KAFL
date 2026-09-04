import Link from 'next/link'
import { Twitter, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  federation: [
    { name: 'About KAFL', href: '/about' },
    { name: 'Governance', href: '/about#governance' },
    { name: 'Contact', href: '/contact' },
  ],
  fans: [
    { name: 'Tickets', href: '/tickets' },
    { name: 'News', href: '/news' },
    { name: 'Fixtures', href: '/fixtures' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/KAFL_Official' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/KAFL_Official' },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/KAFLOfficial' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/KAFLTV' },
]

export default function Footer() {
  return (
    <footer className="bg-federation-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-federation-gold rounded-full flex items-center justify-center">
                <span className="text-federation-dark font-bold text-xl">🏉</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl font-playfair">KAFL</span>
                <span className="block text-federation-gold text-[10px] font-medium tracking-wider uppercase">
                  Federation
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Uniting Kenyan communities through Australian football across the nation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-federation-green rounded-full flex items-center justify-center hover:bg-federation-gold hover:text-federation-dark transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Federation Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Federation</h3>
            <ul className="space-y-2">
              {footerLinks.federation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-federation-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fan Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Fans</h3>
            <ul className="space-y-2">
              {footerLinks.fans.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-federation-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-federation-gold flex-shrink-0 mt-0.5" />
                <span>Kasarani, Nairobi</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-federation-gold flex-shrink-0" />
                <span>+254 723 402159</span> <span>+254 795 381914</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-federation-gold flex-shrink-0" />
                <span>info@kafl.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-federation-green/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <span>
              © {new Date().getFullYear()} Kenyan Australian Football League. All Rights Reserved.
            </span>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-federation-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-federation-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}