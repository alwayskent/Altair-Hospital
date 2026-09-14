'use client'
import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  Calendar,
  Stethoscope,
} from 'lucide-react'
import { services } from '@/data/services'
import { doctors } from '@/data/doctors'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function JanjiTemuPage() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [patientInfo, setPatientInfo] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const availableDoctors = selectedService
    ? doctors.filter((d) => d.serviceSlug === selectedService.slug)
    : []

  const availableTimes = (() => {
    if (!selectedDoctor || !selectedDate) return []
    const dateObj = new Date(selectedDate)
    const dayName = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][dateObj.getDay()]
    const schedule = selectedDoctor.schedule.find((s) => s.day === dayName)
    return schedule ? schedule.times : []
  })()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const resetAll = () => {
    setStep(1)
    setSelectedService(null)
    setSelectedDoctor(null)
    setSelectedDate('')
    setSelectedTime('')
    setPatientInfo({ name: '', phone: '', message: '' })
    setSubmitted(false)
  }

  const waMessage = encodeURIComponent(
    `Halo Altair Hospital,\n\nSaya ingin buat janji temu:\n\n` +
    `Nama: ${patientInfo.name}\n` +
    `Telepon: ${patientInfo.phone}\n` +
    `Layanan: ${selectedService?.name || '-'}\n` +
    `Dokter: ${selectedDoctor?.name || '-'}\n` +
    `Tanggal: ${selectedDate || '-'}\n` +
    `Waktu: ${selectedTime || '-'}\n` +
    `Pesan: ${patientInfo.message || '-'}\n\n` +
    `Mohon dikonfirmasi. Terima kasih!`
  )

  const waLink = `https://wa.me/622112345678?text=${waMessage}`

  return (
    <main className="bg-altair-white min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-altair-blue to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-altair-white/80 hover:text-altair-white mb-4 transition-colors"
          >
            <ArrowLeft size={18} /> Kembali ke Beranda
          </a>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Buat Janji Temu</h1>
          <p className="text-blue-100">Ikuti 3 langkah mudah untuk membuat janji temu.</p>
        </div>
      </section>

      {/* Stepper */}
      <section className="bg-altair-white border-b border-altair-silver">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-start justify-between">
            {[
              { num: 1, label: 'Layanan', icon: Stethoscope },
              { num: 2, label: 'Dokter', icon: User },
              { num: 3, label: 'Jadwal', icon: Calendar },
            ].map((s, i) => (
              <div key={s.num} className="flex items-start flex-1">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold transition-all ${step >= s.num
                        ? 'bg-altair-blue text-altair-white'
                        : 'bg-altair-silver text-gray-400'
                      }`}
                  >
                    {step > s.num ? <Check size={20} /> : <s.icon size={20} />}
                  </div>
                  <span
                    className={`text-xs md:text-sm mt-2 font-medium ${step >= s.num ? 'text-altair-blue' : 'text-gray-400'
                      }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < 2 && (
                  <div
                    className={`flex-1 h-1 mx-3 md:mx-4 mt-5 md:mt-6 rounded ${step > s.num ? 'bg-altair-blue' : 'bg-altair-silver'
                      }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-altair-white">
        <div className="max-w-5xl mx-auto px-4">
          {submitted ? (
            <div className="text-center max-w-lg mx-auto py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-green-600" size={40} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Janji Temu Siap Dikirim!
              </h2>
              <p className="text-gray-600 mb-8">
                Klik tombol di bawah untuk mengirim detail janji temu via WhatsApp. Tim kami akan segera mengonfirmasi.
              </p>
              <div className="space-y-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-600 transition-colors w-full"
                >
                  <Send size={18} /> Kirim via WhatsApp
                </a>
                <button
                  onClick={resetAll}
                  className="inline-flex items-center justify-center gap-2 border-2 border-altair-blue text-altair-blue px-8 py-3.5 rounded-full font-semibold hover:bg-altair-blue hover:text-altair-white transition-colors w-full"
                >
                  Buat Janji Baru
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* ============ STEP 1 - PILIH LAYANAN ============ */}
              {step === 1 && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Pilih Layanan
                    </h2>
                    <p className="text-gray-600">Layanan apa yang Anda butuhkan?</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => {
                          setSelectedService(service)
                          setSelectedDoctor(null)
                          setStep(2)
                        }}
                        className="bg-altair-white border border-altair-silver rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-altair-blue hover:-translate-y-1 transition-all duration-300 text-center group"
                      >
                        <div className="w-12 h-12 bg-altair-silver rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-altair-blue transition-colors">
                          <service.icon
                            className="text-altair-blue group-hover:text-altair-white transition-colors"
                            size={24}
                          />
                        </div>
                        <h3 className="font-bold text-sm text-gray-900">{service.name}</h3>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ============ STEP 2 - PILIH DOKTER ============ */}
              {step === 2 && selectedService && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Pilih Dokter
                    </h2>
                    <p className="text-gray-600">
                      Dokter spesialis untuk layanan{' '}
                      <span className="text-altair-blue font-semibold">
                        {selectedService.name}
                      </span>
                    </p>
                  </div>

                  {availableDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                      {availableDoctors.map((doc) => (
                        <button
                          key={doc.slug}
                          onClick={() => {
                            setSelectedDoctor(doc)
                            setStep(3)
                          }}
                          className="bg-altair-white border border-altair-silver rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-altair-blue transition-all text-left flex items-center gap-4 group"
                        >
                          <div className="w-14 h-14 bg-altair-silver border-2 border-altair-blue rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-altair-blue transition-colors">
                            <span className="text-altair-blue font-bold group-hover:text-altair-white transition-colors">
                              {doc.initials}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-gray-900 text-sm truncate">{doc.name}</p>
                            <p className="text-altair-blue text-xs">{doc.specialty}</p>
                            <p className="text-gray-500 text-xs mt-1">
                              {doc.experience} pengalaman
                            </p>
                          </div>
                          <ArrowRight
                            className="text-gray-400 group-hover:text-altair-blue flex-shrink-0"
                            size={18}
                          />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      Belum ada dokter untuk layanan ini.
                    </div>
                  )}

                  <div className="text-center mt-8">
                    <button
                      onClick={() => {
                        setStep(1)
                        setSelectedService(null)
                      }}
                      className="inline-flex items-center gap-2 text-altair-blue font-medium hover:underline"
                    >
                      <ArrowLeft size={16} /> Kembali pilih layanan
                    </button>
                  </div>
                </div>
              )}

              {/* ============ STEP 3 - PILIH JADWAL ============ */}
              {step === 3 && selectedDoctor && (
                <div>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Pilih Jadwal
                    </h2>
                    <p className="text-gray-600">
                      Jadwal praktik{' '}
                      <span className="text-altair-blue font-semibold">{selectedDoctor.name}</span>
                    </p>
                  </div>

                  <div className="max-w-2xl mx-auto space-y-6">
                    {/* Jadwal Praktik Dokter */}
                    <div className="bg-altair-silver rounded-2xl p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="text-altair-blue" size={18} />
                        <p className="font-semibold text-gray-900 text-sm">
                          Jadwal Praktik Dokter
                        </p>
                      </div>
                      <div className="space-y-4">
                        {selectedDoctor.schedule.map((s, i) => (
                          <div key={i}>
                            <p className="font-medium text-gray-900 text-sm mb-2">{s.day}</p>
                            <div className="flex flex-wrap gap-2">
                              {s.times.map((time, idx) => (
                                <span
                                  key={idx}
                                  className="bg-altair-white text-altair-blue text-xs font-semibold px-3 py-1 rounded-full border border-altair-silver"
                                >
                                  {time}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pilih Tanggal */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pilih Tanggal
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => {
                          setSelectedDate(e.target.value)
                          setSelectedTime('')
                        }}
                        className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue"
                      />
                    </div>

                    {/* Pilih Jam Praktik */}
                    {selectedDate && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Pilih Jam Praktik
                        </label>
                        {availableTimes.length > 0 ? (
                          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                            {availableTimes.map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                className={`py-3 rounded-lg font-medium text-sm transition-all ${selectedTime === time
                                    ? 'bg-altair-blue text-altair-white'
                                    : 'bg-altair-white border border-altair-silver text-gray-700 hover:border-altair-blue'
                                  }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-lg text-sm">
                            Dokter tidak praktik pada hari ini. Silakan pilih tanggal lain.
                          </div>
                        )}
                      </div>
                    )}

                    {/* Data Pasien */}
                    {selectedTime && (
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-4 pt-4 border-t border-altair-silver"
                      >
                        <h3 className="font-bold text-lg text-gray-900">Data Pasien</h3>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap
                          </label>
                          <input
                            type="text"
                            required
                            value={patientInfo.name}
                            onChange={(e) =>
                              setPatientInfo({ ...patientInfo, name: e.target.value })
                            }
                            className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            No. Telepon
                          </label>
                          <input
                            type="tel"
                            required
                            value={patientInfo.phone}
                            onChange={(e) =>
                              setPatientInfo({ ...patientInfo, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue"
                            placeholder="0812-3456-7890"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Keluhan (opsional)
                          </label>
                          <textarea
                            rows="3"
                            value={patientInfo.message}
                            onChange={(e) =>
                              setPatientInfo({ ...patientInfo, message: e.target.value })
                            }
                            className="w-full px-4 py-3 border border-altair-silver rounded-lg focus:outline-none focus:border-altair-blue resize-none"
                            placeholder="Keluhan atau pesan..."
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-altair-blue text-altair-white py-3.5 rounded-full font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2"
                        >
                          <Send size={18} /> Konfirmasi Janji Temu
                        </button>
                      </form>
                    )}
                  </div>

                  <div className="text-center mt-8">
                    <button
                      onClick={() => {
                        setStep(2)
                        setSelectedDoctor(null)
                        setSelectedDate('')
                        setSelectedTime('')
                      }}
                      className="inline-flex items-center gap-2 text-altair-blue font-medium hover:underline"
                    >
                      <ArrowLeft size={16} /> Kembali pilih dokter
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Info Kontak */}
      {!submitted && (
        <section className="py-16 bg-altair-white border-t border-altair-silver">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-altair-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-altair-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Telepon</p>
                  <p className="text-gray-600 text-sm">(021) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-altair-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-altair-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Email</p>
                  <p className="text-gray-600 text-sm">info@altairhospital.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-altair-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-altair-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Alamat</p>
                  <p className="text-gray-600 text-sm">Jl. Kesehatan No. 123, Jakarta</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}