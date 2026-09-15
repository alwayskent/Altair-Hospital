import { HeartPulse, Globe, Share2, AtSign, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-altair-silver">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-altair-blue rounded-lg flex items-center justify-center">
                <HeartPulse className="text-white" size={22} />
              </div>
              <h3 className="font-bold text-xl text-white">Altair Hospital</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Rumah sakit terpercaya yang memberikan pelayanan kesehatan terbaik sejak 2005.
            </p>
            <div className="flex gap-3">
              {[Globe, Share2, AtSign, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-altair-blue transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Kardiologi', slug: 'kardiologi' },
                { name: 'Neurologi', slug: 'neurologi' },
                { name: 'Ortopedi', slug: 'ortopedi' },
                { name: 'Pediatri', slug: 'pediatri' },
                { name: 'IGD 24 Jam', slug: 'igd-24-jam' },
              ].map((item) => (
                <li key={item.slug}>
                  <a href={`/layanan/${item.slug}`} className="hover:text-altair-silver transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Tentang Kami', href: '/about' },
                { name: 'Dokter', href: '/doctors' },
                { name: 'Buat Janji', href: '/janji-temu' },
                { name: 'Kontak', href: '/contact' },
              ].map((item) => (
                <li key={item.name}><a href={item.href} className="hover:text-altair-silver transition-colors">{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-altair-silver flex-shrink-0" />
                <span>Jl. Kesehatan No. 11, Gambir, Jakarta Pusat</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-altair-silver flex-shrink-0" />
                <span>(021) 112-3657</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-altair-silver flex-shrink-0" />
                <span>info@altairhospital.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 text-altair-silver flex-shrink-0" />
                <span>Buka 24 Jam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Altair Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}