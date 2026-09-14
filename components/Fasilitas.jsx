export default function Fasilitas() {
  const facilities = [
    { title: 'Ruang Rawat Nyaman', desc: 'Kamar inap modern dengan AC, TV, dan kamar mandi dalam.' },
    { title: 'Ruang Periksa Modern', desc: 'Ruang konsultasi dengan peralatan medis terkini.' },
    { title: 'Ambulans 24 Jam', desc: 'Layanan ambulans siap siaga setiap saat.' },
    { title: 'Ruang Operasi Steril', desc: 'Kamar operasi dengan standar sterilisasi tinggi.' },
    { title: 'WiFi Gratis', desc: 'Akses internet cepat di seluruh area rumah sakit.' },
    { title: 'Kantin & Gizi', desc: 'Makanan sehat dengan ahli gizi berpengalaman.' },
    { title: 'Parkir Luas', desc: 'Area parkir luas dan aman untuk pengunjung.' },
    { title: 'Keamanan 24/7', desc: 'Petugas keamanan siaga sepanjang hari.' },
  ]

  return (
    <section id="fasilitas" className="py-20 bg-altair-white border-t border-altair-silver">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-14">
          <span className="text-altair-blue font-semibold text-sm uppercase tracking-wider">Fasilitas Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Fasilitas Modern & Nyaman
          </h2>
          <p className="text-gray-600 max-w-2xl mr-auto">
            Kami menyediakan fasilitas lengkap untuk mendukung kenyamanan dan kesembuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((item, i) => (
            <div
              key={i}
              className="bg-altair-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-altair-silver hover:border-altair-blue"
            >
              <h3 className="font-bold text-sm md:text-lg text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}