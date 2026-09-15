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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
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
    <header
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 bg-altair-white ${scrolled ? 'shadow-lg' : ''
        }`}
      style={{ zIndex: 100, height: '64px' }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-altair-blue rounded-lg flex items-center justify-center shrink-0">
            <HeartPulse className="text-altair-white" size={22} />
          </div>
          <h1 className="font-bold text-lg md:text-xl text-altair-blue leading-tight whitespace-nowrap">
            Altair Hospital
          </h1>
        </a>

        {/* Desktop Menu — JANGAN DIUBAH */}
        <nav className="hidden lg:flex items-center gap-8">
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
        </nav>

        {/* Hamburger — ml-3 = jarak di mobile, nggak efek desktop */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
          className="lg:hidden inline-flex items-center justify-center text-altair-blue ml-3"
          style={{
            width: '44px',
            height: '44px',
            minWidth: '44px',
            minHeight: '44px',
            padding: 0,
            margin: 0,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            touchAction: 'manipulation',
            WebkitTapHighlightColor: 'transparent',
            position: 'relative',
            zIndex: 200,
            flexShrink: 0,
          }}
        >
          {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-altair-white border-t border-altair-silver"
          style={{ position: 'relative', zIndex: 150, width: '100%' }}
        >
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-altair-blue font-medium py-3 px-2 rounded-lg hover:bg-altair-silver/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/janji-temu"
              onClick={() => setIsOpen(false)}
              className="block bg-altair-blue text-altair-white px-6 py-3 rounded-full text-center font-medium mt-2"
            >
              Buat Janji
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}