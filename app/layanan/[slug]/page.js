import { ArrowLeft, ArrowRight, CheckCircle2, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/data/services'
import { doctors } from '@/data/doctors'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Layanan tidak ditemukan' }
  return {
    title: `${service.name} - Altair Hospital`,
    description: service.description,
  }
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  // Cari dokter yang menangani layanan ini
  const serviceDoctors = doctors.filter((d) => d.service === service.name)

  return (
    <main className="bg-altair-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-altair-blue to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <a
            href="/layanan"
            className="inline-flex items-center gap-2 text-altair-white/80 hover:text-altair-white mb-4 transition-colors"
          >
            <ArrowLeft size={18} /> Kembali ke Daftar Layanan
          </a>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-16 h-16 bg-altair-white/20 backdrop-blur border border-altair-white/30 rounded-2xl flex items-center justify-center">
              <service.icon className="text-altair-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-1">{service.name}</h1>
              <p className="text-blue-100">{service.shortDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-altair-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar - Info Singkat */}
            <div className="md:col-span-1">
              <div className="bg-altair-white border border-altair-silver rounded-2xl p-6 sticky top-24 shadow-md">
                <div className="w-14 h-14 bg-altair-blue rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="text-altair-white" size={26} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{service.shortDesc}</p>
                <a
                  href="/janji-temu"
                  className="block w-full bg-altair-blue text-altair-white py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors text-center"
                >
                  Buat Janji Temu
                </a>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Tentang Layanan */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Layanan</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              {/* Layanan Tersedia */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Layanan Tersedia</h2>
                <div className="bg-altair-white border border-altair-silver rounded-xl p-6 space-y-3 shadow-sm">
                  {service.treatments.map((t, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-altair-blue flex-shrink-0" size={20} />
                      <span className="text-gray-700">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dokter Spesialis */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Dokter Spesialis</h2>
                {serviceDoctors.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceDoctors.map((doc) => (
                      <a
                        key={doc.slug}
                        href={`/dokter/${doc.slug}`}
                        className="bg-altair-white border border-altair-silver rounded-xl p-5 shadow-sm hover:shadow-xl hover:border-altair-blue transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-altair-blue rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                            <span className="text-altair-white font-bold">{doc.initials}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 text-sm truncate">{doc.name}</p>
                            <p className="text-altair-blue text-xs">{doc.specialty}</p>
                          </div>
                          <ArrowRight className="text-gray-400 group-hover:text-altair-blue transition-colors flex-shrink-0" size={18} />
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="bg-altair-silver rounded-xl p-6 flex items-center gap-3 text-gray-600">
                    <User size={20} />
                    <span className="text-sm">Belum ada dokter spesialis terdaftar untuk layanan ini.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}