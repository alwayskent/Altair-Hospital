import { ArrowLeft, ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Layanan Medis - Altair Hospital',
  description: 'Berbagai layanan medis lengkap di Altair Hospital.',
}

export default function LayananPage() {
  return (
    <main className="bg-altair-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-altair-blue to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-altair-white/80 hover:text-altair-white mb-4 transition-colors"
          >
            <ArrowLeft size={18} /> Kembali ke Beranda
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Layanan Medis</h1>
          <p className="text-blue-100 max-w-2xl">
            Kami menyediakan berbagai layanan spesialis dengan didukung tenaga medis profesional dan peralatan modern.
          </p>
        </div>
      </section>

      {/* Services Grid - Background putih + shadow */}
      <section className="py-20 bg-altair-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/layanan/${service.slug}`}
                className="bg-altair-white border border-altair-silver rounded-2xl p-6 shadow-md hover:shadow-2xl hover:border-altair-blue hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-altair-silver rounded-xl flex items-center justify-center mb-4 group-hover:bg-altair-blue transition-colors">
                  <service.icon className="text-altair-blue group-hover:text-altair-white transition-colors" size={28} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                <div className="flex items-center gap-1 text-altair-blue font-medium text-sm">
                  Selengkapnya <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}