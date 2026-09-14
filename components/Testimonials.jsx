import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sri Handayani',
      role: 'Pasien Kardiologi',
      initials: 'SH',
      rating: 5,
      message: 'Proses booking-nya mudah sekali, saya bisa pilih jam praktik dokter tanpa harus menelepon rumah sakit dulu.',
    },
    {
      name: 'Ahmad Fauzan',
      role: 'Pasien Pediatri',
      initials: 'AF',
      rating: 5,
      message: 'Dokternya menjelaskan dengan sabar dan detail. Antrean juga sesuai dengan jam yang saya pilih saat booking online.',
    },
    {
      name: 'Melinda Kusuma',
      role: 'Pasien Umum',
      initials: 'MK',
      rating: 4,
      message: 'Fasilitas medical check-up-nya lengkap dan hasilnya bisa diakses secara digital.',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-altair-silver border-t border-altair-silver">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Cerita dari mereka<br />
            yang telah kami layani
          </h2>
        </div>

        {/* Grid: 1 kolom mobile, 3 kolom desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-altair-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Bintang */}
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    fill={idx < t.rating ? 'currentColor' : 'none'}
                    className={idx < t.rating ? 'text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>

              {/* Pesan */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{t.message}"
              </p>

              {/* Avatar + Nama + Role */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-700 font-semibold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}