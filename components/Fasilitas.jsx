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

  const total = facilities.length

  return (
    <section id="fasilitas" className="py-20 md:py-24 bg-altair-white border-t border-altair-silver">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-altair-blue text-sm uppercase tracking-wider mb-3 font-semibold">
            Fasilitas Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fasilitas Modern & Nyaman
          </h2>
          <p className="text-gray-600">
            Kami menyediakan fasilitas lengkap untuk mendukung kenyamanan dan kesembuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {facilities.map((item, i) => {
            // Mobile: 2 kolom. Kolom kiri = index genap (0,2,4,6)
            // Desktop: 4 kolom. Kolom kiri = index % 4 === 0
            const isFirstColMobile = i % 2 === 0
            const isFirstColDesktop = i % 4 === 0
            const isLastRowMobile = i >= total - 2
            const isLastRowDesktop = i >= total - 4

            // Border kiri: hanya kalau BUKAN kolom pertama (mobile)
            const borderLeftMobile = !isFirstColMobile
            // Border kiri desktop: hanya kalau BUKAN kolom pertama (i % 4 === 0)
            const borderLeftDesktop = !isFirstColDesktop

            return (
              <div
                key={i}
                className={[
                  'py-5 px-5 border-altair-silver',
                  borderLeftMobile ? 'border-l' : '',
                  borderLeftDesktop ? 'lg:border-l' : 'lg:border-l-0',
                  !isLastRowMobile ? 'border-b' : '',
                  isLastRowDesktop ? 'lg:border-b-0' : '',
                ].join(' ')}
              >
                <h3 className="font-bold text-base md:text-lg text-gray-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}