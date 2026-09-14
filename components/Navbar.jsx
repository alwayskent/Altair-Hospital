'use client'
import { useState, useEffect } from 'react'
import { Menu, X, HeartPulse } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Kunci scroll body saat menu terbuka (opsional, biar rapi)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Dokter', href: '/dokter' },
    { name: 'News', href: '/news' },
    { name: 'Kontak', href: '/#contact' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-altair-white shadow-lg' : 'bg-altair-white/95 backdrop-blur'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 relative z-10">
          <div className="w-10 h-10 bg-altair-blue rounded-lg flex items-center justify-center">
            <HeartPulse className="text-altair-white" size={22} />
          </div>
          <div>
            <h1 className="font-bold text-xl text-altair-blue leading-tight">
              Altair Hospital
            </h1>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-altair-blue font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/janji-temu"
            className="bg-altair-blue text-altair-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition-colors font-medium"
          >
            Buat Janji
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          onTouchStart={(e) => {
            e.preventDefault()
            setIsOpen(!isOpen)
          }}
          className="lg:hidden text-altair-blue relative z-10 p-2 -mr-2 touch-manipulation"
          aria-label="Toggle menu"
          type="button"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-altair-white border-t border-altair-silver">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-altair-blue font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/janji-temu"
              onClick={() => setIsOpen(false)}
              className="block bg-altair-blue text-altair-white px-6 py-3 rounded-full text-center font-medium"
            >
              Buat Janji
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}