import { CheckCircle2, Award, ArrowRight } from 'lucide-react'

export default function About() {
  const points = [
    'Tenaga medis profesional & berpengalaman',
    'Peralatan medis berteknologi terkini',
    'Pelayanan 24 jam setiap hari',
    'Fasilitas rawat inap yang nyaman',
  ]

  return (
    <section id="about" className="py-20 bg-altair-white border-t border-altair-silver">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-altair-silver rounded-3xl h-96 overflow-hidden shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=870&auto=format&fit=crop"
                alt="Altair Hospital"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-altair-blue text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <Award size={32} className="mb-2 text-altair-silver" />
              <p className="font-bold text-lg">Terakreditasi</p>
              <p className="text-sm text-blue-100">Paripurna KARS</p>
            </div>
          </div>

          <div>
            <span className="text-altair-blue font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Pelayanan Kesehatan <span className="text-altair-blue">Terbaik</span> untuk Anda
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Altair Hospital adalah rumah sakit modern yang berkomitmen memberikan pelayanan kesehatan terbaik dengan pendekatan holistik.
            </p>
            <div className="space-y-3 mb-8">
              {points.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-altair-blue flex-shrink-0" size={22} />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-altair-blue text-altair-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              Selengkapnya <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}