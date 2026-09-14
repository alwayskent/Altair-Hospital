import { ArrowLeft } from 'lucide-react'
import { doctors } from '@/data/doctors'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DoctorCard from '@/components/DoctorCard'

export const metadata = {
  title: 'Semua Dokter - Altair Hospital',
  description: 'Daftar lengkap dokter spesialis di Altair Hospital.',
}

export default function DokterPage() {
  return (
    <main className="bg-altair-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-altair-blue to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="inline-flex items-center gap-2 text-altair-white/80 hover:text-altair-white mb-4 transition-colors">
            <ArrowLeft size={18} /> Kembali ke Beranda
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Semua Dokter</h1>
          <p className="text-blue-100 max-w-2xl">
            Kenali tim dokter spesialis kami yang siap memberikan pelayanan kesehatan terbaik untuk Anda.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-altair-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <DoctorCard key={doc.slug} doctor={doc} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}