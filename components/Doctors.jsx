import { ArrowRight } from 'lucide-react'
import { getFeaturedDoctors } from '@/data/doctors'
import DoctorCard from './DoctorCard'

export default function Doctors() {
  const doctors = getFeaturedDoctors()

  return (
    <section id="doctors" className="py-20 bg-altair-white border-t border-altair-silver">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-14">
          <span className="text-altair-blue font-semibold text-sm uppercase tracking-wider">Tim Medis</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Dokter Spesialis Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mr-auto">
            Ditangani oleh dokter-dokter ahli dan berpengalaman di bidangnya masing-masing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {doctors.map((doc) => (
            <DoctorCard key={doc.slug} doctor={doc} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/dokter"
            className="inline-flex items-center gap-2 bg-altair-blue text-altair-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-800 transition-colors"
          >
            Lihat Semua Dokter <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}