'use client'
import { useState } from 'react'
import { Phone, Mail, MapPin, CheckCircle2, Send } from 'lucide-react'

export default function Appointment() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', phone: '', date: '', service: '', message: '' })
  }

  return (
    <section id="appointment" className="py-20 bg-altair-silver">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-altair-blue font-semibold text-sm uppercase tracking-wider">Janji Temu</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Buat <span className="text-altair-blue">Janji Temu</span> Online
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Isi formulir di samping untuk membuat janji temu dengan dokter kami.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-altair-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telepon</p>
                  <p className="text-gray-600">(021) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-altair-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@altairhospital.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-altair-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Alamat</p>
                  <p className="text-gray-600">Jl. Kesehatan No. 123, Jakarta Pusat 10110</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
            {submitted && (
              <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                <CheckCircle2 size={20} /> Janji temu berhasil dikirim!
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">No. Telepon</label>
                <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue" placeholder="0812-3456-7890" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal</label>
                  <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Layanan</label>
                  <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue bg-white">
                    <option value="">Pilih</option>
                    <option>Kardiologi</option>
                    <option>Neurologi</option>
                    <option>Ortopedi</option>
                    <option>Pediatri</option>
                    <option>Umum</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan (opsional)</label>
                <textarea rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue resize-none" placeholder="Keluhan atau pesan..."></textarea>
              </div>
              <button type="submit" className="w-full bg-altair-blue text-white py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                <Send size={18} /> Kirim Janji Temu
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}