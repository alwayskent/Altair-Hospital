import { Star, ArrowRight } from 'lucide-react'

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-altair-white border border-altair-silver rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col">
      {/* Header - soft silver, bukan biru */}
      <div className="bg-altair-silver h-48 flex items-center justify-center relative">
        <div className="w-28 h-28 bg-altair-white border-2 border-altair-blue rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
          <span className="text-4xl font-bold text-altair-blue">{doctor.initials}</span>
        </div>
      </div>

      <div className="p-6 text-center flex-1 flex flex-col">
        <h3 className="font-bold text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-altair-blue text-sm font-medium mb-3">{doctor.specialty}</p>

        <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm mb-4">
          <Star size={14} fill="currentColor" />
          <span className="font-semibold">{doctor.rating}</span>
        </div>

        <a
          href={`/dokter/${doctor.slug}`}
          className="mt-auto inline-flex items-center justify-center gap-2 bg-altair-blue text-altair-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors"
        >
          Lihat Profil <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}