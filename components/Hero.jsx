import { Calendar, Shield, Clock, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative text-white overflow-hidden bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage: "url('/images/hospital.jpg')",
        backgroundPosition: '65% 15%',
      }}
    >
      {/* Overlay biru transparan */}
      <div className="absolute inset-0 bg-altair-blue/85"></div>

      {/* Dekorasi blur */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-altair-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-altair-silver rounded-full blur-3xl"></div>
      </div>

      {/* Konten Hero */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm mb-6">
              Rumah Sakit Terpercaya Sejak 2005
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Kesehatan Anda,<br />
              <span className="text-altair-silver">Prioritas Kami</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Altair Hospital menyediakan pelayanan kesehatan berkualitas dengan teknologi modern dan tenaga medis profesional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/janji-temu"
                className="inline-flex items-center gap-2 bg-altair-white text-altair-blue px-8 py-3.5 rounded-full font-semibold hover:bg-altair-silver transition-colors shadow-md"
              >
                <Calendar size={20} />
                <span>Buat Janji Temu</span>
              </a>
              <a
                href="/layanan"
                className="inline-flex items-center gap-2 border-2 border-altair-white text-altair-white px-8 py-3.5 rounded-full font-semibold hover:bg-altair-white hover:text-altair-blue transition-colors"
              >
                Lihat Layanan
              </a>
            </div>
          </div>

          {/* Kartu Fitur */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, title: 'Terakreditasi', desc: 'Standar Internasional' },
              { icon: Clock, title: '24/7 Emergency', desc: 'Siap 24 Jam' },
              { icon: Award, title: 'Dokter Ahli', desc: '150+ Spesialis' },
              { icon: Calendar, title: 'Janji Online', desc: 'Mudah & Cepat' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all"
              >
                <item.icon className="mb-4 text-altair-silver" size={32} />
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative bg-white/10 backdrop-blur border-t border-white/20">
        {/* Desktop: 4 kolom sejajar */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-4 gap-6 text-center">
            {[
              { value: '100+', label: 'Dokter Spesialis' },
              { value: '250+', label: 'Tempat Tidur' },
              { value: '25K+', label: 'Pasien Sembuh' },
              { value: '20+', label: 'Tahun Pengalaman' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-bold text-altair-silver">
                  {stat.value}
                </p>
                <p className="text-sm text-blue-100 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: auto-slide horizontal */}
        <div className="md:hidden py-6 overflow-hidden">
          <div className="stats-marquee flex gap-4">
            {[
              { value: '100+', label: 'Dokter Spesialis' },
              { value: '250+', label: 'Tempat Tidur' },
              { value: '25K+', label: 'Pasien Sembuh' },
              { value: '20+', label: 'Tahun Pengalaman' },
              { value: '100+', label: 'Dokter Spesialis' },
              { value: '250+', label: 'Tempat Tidur' },
              { value: '25K+', label: 'Pasien Sembuh' },
              { value: '20+', label: 'Tahun Pengalaman' },
            ].map((stat, i) => (
              <div key={i} className="flex-shrink-0 w-40 text-center">
                <p className="text-3xl font-bold text-altair-silver">{stat.value}</p>
                <p className="text-xs text-blue-100 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}