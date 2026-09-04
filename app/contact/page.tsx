'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  User,
  Send,
  CheckCircle,
  AlertCircle,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Clock,
  Building2
} from 'lucide-react'

const contactTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'media', label: 'Media & Press' },
  { value: 'sponsorship', label: 'Sponsorship' },
  { value: 'ticket', label: 'Ticket Support' },
  { value: 'other', label: 'Other' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: 'general',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, this would send to Supabase or an email API
      console.log('Form submitted:', formData)
      
      setIsSubmitted(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: 'general',
        subject: '',
        message: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-federation-dark font-playfair mb-2">
            Message Sent! 🎉
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for contacting the KAFL Federation. 
            We'll get back to you within 48 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-federation-green hover:text-federation-gold transition-colors font-medium"
          >
            Send Another Message →
          </button>
        </div>
      </div>
    )
  }

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
                📞 Get in Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have questions about the KAFL? We'd love to hear from you. 
              Reach out to us through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT FORM & INFO */}
      {/* ============================================ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-federation-gold/10 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-federation-gold" />
                  </div>
                  <h3 className="font-semibold text-federation-dark">Email</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <a href="mailto:info@kafl.co.ke" className="text-federation-green hover:text-federation-gold transition-colors">
                      info@kafl.co.ke
                    </a>
                    <span className="block text-gray-400 text-xs">General Inquiries</span>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-federation-green/10 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-federation-green" />
                  </div>
                  <h3 className="font-semibold text-federation-dark">Phone</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-federation-dark font-medium">+254 723 402159</p>
                  <p className="text-federation-dark font-medium">+254 795 381914</p>
                  <p className="text-gray-400 text-xs">Mon-Fri 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-federation-gold/10 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-federation-gold" />
                  </div>
                  <h3 className="font-semibold text-federation-dark">Location</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-federation-dark">
                    Kasarani, Nairobi 
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-federation-gold/10 rounded-lg flex items-center justify-center">
                    <Building2 size={20} className="text-federation-gold" />
                  </div>
                  <h3 className="font-semibold text-federation-dark">Office Hours</h3>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-federation-dark font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-federation-dark font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-federation-dark font-playfair mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill in the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm flex items-start gap-3">
                      <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name *
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors"
                          placeholder="John"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors"
                        placeholder="+254 712 435387"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Inquiry Type *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors appearance-none bg-white"
                    >
                      {contactTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-3 top-3 text-gray-400" />
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-federation-gold transition-colors resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-federation-green text-white py-3 rounded-lg font-semibold hover:bg-federation-green/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    🔒 Your information is secure and will not be shared with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SOCIAL MEDIA SECTION */}
      {/* ============================================ */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-federation-dark font-playfair">
              Connect With Us
            </h2>
            <p className="text-gray-500 text-sm">
              Follow us on social media for the latest updates and behind-the-scenes content.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://twitter.com/KAFL_Official"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-federation-gold hover:text-federation-dark transition-all p-4 rounded-xl text-federation-dark flex items-center gap-3 group"
            >
              <Twitter size={24} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/afl_kenya/?utm_source=qr&r=nametag"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-federation-gold hover:text-federation-dark transition-all p-4 rounded-xl text-federation-dark flex items-center gap-3 group"
            >
              <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Instagram</span>
            </a>
            <a
              href="https://facebook.com/KAFLOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-federation-gold hover:text-federation-dark transition-all p-4 rounded-xl text-federation-dark flex items-center gap-3 group"
            >
              <Facebook size={24} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">Facebook</span>
            </a>
            <a
              href="https://youtube.com/KAFLTV"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-federation-gold hover:text-federation-dark transition-all p-4 rounded-xl text-federation-dark flex items-center gap-3 group"
            >
              <Youtube size={24} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">YouTube</span>
            </a>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              📱 Follow us @afl_kenya for the latest updates
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MAP SECTION */}
      {/* ============================================ */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-federation-dark font-playfair text-center mb-4">
              📍 Find Us
            </h3>
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={40} className="mx-auto text-federation-gold mb-2" />
                <p className="font-medium">Kasarani</p>
                <p className="text-sm">Nairobi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}