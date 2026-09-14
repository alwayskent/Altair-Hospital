// data/doctors.js

export const doctors = [
  {
    slug: 'andini-pratiwi',
    name: 'dr. Andini Pratiwi, Sp.JP',
    initials: 'AP',
    specialty: 'Spesialis Jantung',
    service: 'Kardiologi',
    serviceSlug: 'kardiologi',
    rating: 4.9,
    experience: '15 tahun',
    education: 'FK Universitas Indonesia',
    bio: 'Dokter spesialis jantung dengan pengalaman lebih dari 15 tahun dalam menangani berbagai kasus kardiovaskular, termasuk intervensi non-bedah dan pencegahan penyakit jantung.',
    schedule: [
      { day: 'Senin', times: ['08:00', '09:00', '10:00', '11:00'] },
      { day: 'Rabu', times: ['13:00', '14:00', '15:00', '16:00'] },
      { day: 'Jumat', times: ['08:00', '09:00', '10:00', '11:00'] },
    ],
  },
  {
    slug: 'budi-santoso',
    name: 'dr. Budi Santoso, Sp.PD',
    initials: 'BS',
    specialty: 'Spesialis Penyakit Dalam',
    service: 'Poli Umum',
    serviceSlug: 'umum',
    rating: 4.8,
    experience: '12 tahun',
    education: 'FK Universitas Gadjah Mada',
    bio: 'Dokter spesialis penyakit dalam yang berfokus pada diagnosis dan pengobatan penyakit kronis seperti diabetes, hipertensi, dan gangguan metabolisme.',
    schedule: [
      { day: 'Selasa', times: ['08:00', '09:00', '10:00', '11:00'] },
      { day: 'Kamis', times: ['13:00', '14:00', '15:00', '16:00'] },
      { day: 'Sabtu', times: ['08:00', '09:00', '10:00', '11:00'] },
    ],
  },
  {
    slug: 'citra-lestari',
    name: 'dr. Citra Lestari, Sp.A',
    initials: 'CL',
    specialty: 'Spesialis Anak',
    service: 'Pediatri',
    serviceSlug: 'pediatri',
    rating: 5.0,
    experience: '10 tahun',
    education: 'FK Universitas Airlangga',
    bio: 'Dokter spesialis anak yang ramah dan berpengalaman dalam menangani kesehatan bayi, balita, dan remaja, termasuk imunisasi dan tumbuh kembang anak.',
    schedule: [
      { day: 'Senin', times: ['13:00', '14:00', '15:00', '16:00'] },
      { day: 'Rabu', times: ['08:00', '09:00', '10:00', '11:00'] },
      { day: 'Jumat', times: ['13:00', '14:00', '15:00', '16:00'] },
    ],
  },
  {
    slug: 'dimas-prakoso',
    name: 'dr. Dimas Prakoso, Sp.OT',
    initials: 'DP',
    specialty: 'Spesialis Ortopedi',
    service: 'Ortopedi',
    serviceSlug: 'ortopedi',
    rating: 4.9,
    experience: '14 tahun',
    education: 'FK Universitas Diponegoro',
    bio: 'Dokter spesialis ortopedi yang ahli dalam penanganan cedera tulang, sendi, dan olahraga, termasuk operasi arthroscopy dan penggantian sendi.',
    schedule: [
      { day: 'Selasa', times: ['08:00', '09:00', '10:00', '11:00'] },
      { day: 'Kamis', times: ['08:00', '09:00', '10:00', '11:00'] },
      { day: 'Sabtu', times: ['13:00', '14:00', '15:00', '16:00'] },
    ],
  },
  {
    slug: 'eka-wijaya',
    name: 'dr. Eka Wijaya, Sp.S',
    initials: 'EW',
    specialty: 'Spesialis Neurologi',
    service: 'Neurologi',
    serviceSlug: 'neurologi',
    rating: 4.8,
    experience: '13 tahun',
    education: 'FK Universitas Padjadjaran',
    bio: 'Dokter spesialis neurologi yang menangani berbagai gangguan sistem saraf seperti stroke, epilepsi, migrain, dan penyakit Parkinson.',
    schedule: [
      { day: 'Senin', times: ['08:00', '09:00', '10:00', '11:00'] },
      { day: 'Kamis', times: ['13:00', '14:00', '15:00', '16:00'] },
      { day: 'Jumat', times: ['08:00', '09:00', '10:00', '11:00'] },
    ],
  },
  {
    slug: 'fitri-handayani',
    name: 'dr. Fitri Handayani, Sp.M',
    initials: 'FH',
    specialty: 'Spesialis Mata',
    service: 'Oftalmologi',
    serviceSlug: 'oftalmologi',
    rating: 4.9,
    experience: '11 tahun',
    education: 'FK Universitas Hasanuddin',
    bio: 'Dokter spesialis mata dengan keahlian dalam operasi katarak, LASIK, dan penanganan penyakit retina serta glaukoma.',
    schedule: [
      { day: 'Selasa', times: ['13:00', '14:00', '15:00', '16:00'] },
      { day: 'Rabu', times: ['08:00', '09:00', '10:00', '11:00'] },
      { day: 'Sabtu', times: ['08:00', '09:00', '10:00', '11:00'] },
    ],
  },
  {
    slug: 'gunawan-saputra',
    name: 'dr. Gunawan Saputra, Sp.PD',
    initials: 'GS',
    specialty: 'Spesialis Gawat Darurat',
    service: 'IGD 24 Jam',
    serviceSlug: 'igd-24-jam',
    rating: 4.7,
    experience: '10 tahun',
    education: 'FK Universitas Brawijaya',
    bio: 'Dokter spesialis gawat darurat yang siap siaga 24 jam menangani kasus kegawatan medis seperti serangan jantung, kecelakaan, dan syok.',
    schedule: [
      { day: 'Senin - Minggu', times: ['00:00', '06:00', '12:00', '18:00'] },
    ],
  },
  {
    slug: 'hesti-anggraini',
    name: 'dr. Hesti Anggraini, Sp.PK',
    initials: 'HA',
    specialty: 'Spesialis Patologi Klinik',
    service: 'Laboratorium',
    serviceSlug: 'laboratorium',
    rating: 4.8,
    experience: '12 tahun',
    education: 'FK Universitas Sumatera Utara',
    bio: 'Dokter spesialis patologi klinik yang menangani berbagai pemeriksaan laboratorium, mulai dari hematologi, kimia klinik, hingga mikrobiologi.',
    schedule: [
      { day: 'Senin - Jumat', times: ['07:00', '09:00', '11:00', '13:00'] },
      { day: 'Sabtu', times: ['08:00', '09:00', '10:00', '11:00'] },
    ],
  },
]

export function getDoctorBySlug(slug) {
  return doctors.find((d) => d.slug === slug)
}

export function getFeaturedDoctors() {
  return doctors.slice(0, 4)
}

export function getDoctorsByService(serviceSlug) {
  return doctors.filter((d) => d.serviceSlug === serviceSlug)
}