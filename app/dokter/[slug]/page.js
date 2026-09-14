import { ArrowLeft, Star, GraduationCap, Briefcase, Calendar, Clock, Phone, Mail } from 'lucide-react'
import { notFound } from 'next/navigation'
import { doctors, getDoctorBySlug } from '@/data/doctors'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)
  if (!doctor) return { title: 'Dokter tidak ditemukan' }
  return {
    title: `${doctor.name} - Altair Hospital`,
    description: doctor.bio,
  }
}

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }))
}

export default async function DoctorDetailPage({ params }) {
  const { slug } = await params
  const doctor = getDoctorBySlug(slug)

  if (!doctor) {
    notFound()
  }

  return (
    <main className="bg-altair-white">
      <Navbar />

      <section className="bg-gradient-to-br from-altair-blue to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <a
            href="/dokter"
            className="inline-flex items-center gap-2 text-altair-white/80 hover:text-altair-white mb-4 transition-colors"
          >
            <ArrowLeft size={18} /> Kembali ke Daftar Dokter
          </a>
        </div>
      </section>

      <section className="py-16 bg-altair-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="bg-altair-white border border-altair-silver rounded-2xl p-8 text-center sticky top-24 shadow-lg">
                <div className="w-32 h-32 bg-altair-silver border-2 border-altair-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl font-bold text-altair-blue">{doctor.initials}</span>
                    </div>
                        <h1 className="font-bold text-xl text-gray-900 mb-2">{doctor.name}</h1>
                        <p className="text-altair-blue text-sm font-medium mb-4">{doctor.specialty}</p>
                    <div className="flex items-center justify-center gap-1 text-yellow-500 mb-6">
                        <Star size={16} fill="currentColor" />
                        <span className="font-semibold text-gray-900">{doctor.rating}</span>
                    </div>
                <a
                    href="/janji-temu"
                    className="block w-full bg-altair-blue text-altair-white py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
                >
                    Buat Janji Temu
                </a>
            </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Dokter</h2>
                <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-altair-silver rounded-xl p-5">
                  <GraduationCap className="text-altair-blue mb-2" size={24} />
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Pendidikan</p>
                  <p className="font-semibold text-gray-900">{doctor.education}</p>
                </div>
                <div className="bg-altair-silver rounded-xl p-5">
                  <Briefcase className="text-altair-blue mb-2" size={24} />
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Pengalaman</p>
                  <p className="font-semibold text-gray-900">{doctor.experience}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="text-altair-blue" size={22} />
                  <h2 className="text-2xl font-bold text-gray-900">Jadwal Praktik</h2>
                </div>
                <div className="bg-altair-white border border-altair-silver rounded-xl overflow-hidden">
                  {doctor.schedule.map((s, i) => (
                      <div
                        key={i}
                        className={`px-6 py-4 ${
                          i !== doctor.schedule.length - 1 ? 'border-b border-altair-silver' : ''
                        }`}
                      >
                        <div className="flex items-center gap-2 font-medium text-gray-900 mb-2">
                          <Clock size={16} className="text-altair-blue" />
                          {s.day}
                        </div>
                        <div className="flex flex-wrap gap-2 ml-6">
                          {s.times.map((time, idx) => (
                            <span key={idx} className="bg-altair-silver text-altair-blue text-xs font-semibold px-3 py-1 rounded-full">
                              {time}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hubungi</h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:0211234567"
                    className="inline-flex items-center gap-2 bg-altair-blue text-altair-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors"
                  >
                    <Phone size={18} /> (021) 1234-5678
                  </a>
                  <a
                    href="mailto:info@altairhospital.com"
                    className="inline-flex items-center gap-2 border-2 border-altair-blue text-altair-blue px-6 py-3 rounded-full font-medium hover:bg-altair-blue hover:text-altair-white transition-colors"
                  >
                    <Mail size={18} /> info@altairhospital.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}