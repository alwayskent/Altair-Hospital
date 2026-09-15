import { HeartPulse, Globe, Share2, AtSign, MessageCircle, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react'

export default function Footer() {
  const socialIcons = [
    { Icon: Globe, href: 'https://wa.me/62211123657', label: 'WhatsApp' },
    { Icon: Share2, href: 'https://youtube.com', label: 'YouTube' },
    { Icon: AtSign, href: 'https://instagram.com', label: 'Instagram' },
    { Icon: MessageCircle, href: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand + Social */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-altair-blue rounded-lg flex items-center justify-center">
                <HeartPulse className="text-altair-white" size={22} />
              </div>
              <h3 className="font-bold text-lg text-white">Altair Hospital</h3>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-gray-400">
              Rumah sakit terpercaya yang memberikan pelayanan kesehatan terbaik sejak 2005.
            </p>
            <div className="flex gap-2">
              {socialIcons.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-altair-blue transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan + Tautan Cepat — 2 kolom di mobile */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-2">
            {/* Layanan */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Layanan</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { name: 'Kardiologi', slug: 'kardiologi' },
                  { name: 'Neurologi', slug: 'neurologi' },
                  { name: 'Ortopedi', slug: 'ortopedi' },
                  { name: 'Pediatri', slug: 'pediatri' },
                  { name: 'IGD 24 Jam', slug: 'igd-24-jam' },
                ].map((item) => (
                  <li key={item.slug}>
                    <a
                      href={`/layanan/${item.slug}`}
                      className="flex items-center gap-1.5 hover:text-altair-silver transition-colors"
                    >
                      <ChevronRight size={14} className="text-altair-blue shrink-0" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tautan Cepat */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Tautan Cepat</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  { name: 'Tentang Kami', href: '/#about' },
                  { name: 'Dokter', href: '/dokter' },
                  { name: 'Buat Janji', href: '/janji-temu' },
                  { name: 'Kontak', href: '/#contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center gap-1.5 hover:text-altair-silver transition-colors"
                    >
                      <ChevronRight size={14} className="text-altair-blue shrink-0" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-altair-blue shrink-0" />
                <span>Jl. Kesehatan No. 11, Gambir, Jakarta Pusat</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 text-altair-blue shrink-0" />
                <span>(021) 112-3657</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-0.5 text-altair-blue shrink-0" />
                <span>info@altairhospital.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 text-altair-blue shrink-0" />
                <span>Buka 24 Jam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Altair Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}