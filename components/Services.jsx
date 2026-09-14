import { ArrowRight, ChevronRight } from 'lucide-react'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="py-20 bg-altair-white border-t border-altair-silver">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-14">
          <span className="text-altair-blue font-semibold text-sm uppercase tracking-wider">Layanan Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Layanan Medis Terlengkap
          </h2>
          <p className="text-gray-600 max-w-2xl mr-auto">
            Pilih layanan yang Anda butuhkan untuk melihat informasi lebih lanjut.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`/layanan/${service.slug}`}
              className="bg-altair-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group border border-altair-silver hover:border-altair-blue text-center"
            >
              <div className="w-16 h-16 bg-altair-silver rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-altair-blue transition-colors">
                <service.icon className="text-altair-blue group-hover:text-altair-white transition-colors" size={30} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
              <div className="flex items-center justify-center gap-1 text-altair-blue font-medium text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                Lihat Detail <ChevronRight size={14} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/layanan"
            className="inline-flex items-center gap-2 bg-altair-blue text-altair-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-800 transition-colors"
          >
            Lihat Semua Layanan <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}