// data/services.js

import { HeartPulse, Brain, Bone, Baby, Eye, Stethoscope, Activity, Microscope } from 'lucide-react'

export const services = [
  {
    slug: 'kardiologi',
    name: 'Kardiologi',
    icon: HeartPulse,
    shortDesc: 'Perawatan jantung & pembuluh darah',
    description:
      'Layanan Kardiologi Altair Hospital menangani berbagai kondisi jantung dan pembuluh darah, mulai dari hipertensi, penyakit jantung koroner, aritmia, hingga gagal jantung. Didukung teknologi EKG, echocardiography, treadmill test, dan cath lab modern.',
    treatments: [
      'Pemeriksaan EKG & Echocardiography',
      'Treadmill Test (Uji Latih Jantung)',
      'Kateterisasi Jantung',
      'Penanganan Hipertensi & Kolesterol',
      'Rehabilitasi Jantung',
    ],
  },
  {
    slug: 'neurologi',
    name: 'Neurologi',
    icon: Brain,
    shortDesc: 'Gangguan sistem saraf & otak',
    description:
      'Layanan Neurologi Altair Hospital menangani berbagai gangguan sistem saraf pusat dan tepi, termasuk stroke, epilepsi, migrain, Parkinson, dan gangguan tidur. Dilengkapi dengan CT Scan, MRI, dan EEG untuk diagnosis akurat.',
    treatments: [
      'Pemeriksaan EEG & EMG',
      'CT Scan & MRI Otak',
      'Penanganan Stroke Akut',
      'Terapi Migrain & Vertigo',
      'Konsultasi Gangguan Tidur',
    ],
  },
  {
    slug: 'ortopedi',
    name: 'Ortopedi',
    icon: Bone,
    shortDesc: 'Tulang, sendi, dan cedera olahraga',
    description:
      'Layanan Ortopedi Altair Hospital menangani cedera tulang, sendi, ligamen, dan otot. Mulai dari patah tulang, cedera olahraga, hingga penggantian sendi. Didukung tim fisioterapi berpengalaman untuk pemulihan optimal.',
    treatments: [
      'Penanganan Patah Tulang',
      'Artroskopi & Operasi Sendi',
      'Penggantian Lutut & Pinggul',
      'Rehabilitasi Cedera Olahraga',
      'Fisioterapi & Pemulihan',
    ],
  },
  {
    slug: 'pediatri',
    name: 'Pediatri',
    icon: Baby,
    shortDesc: 'Kesehatan anak & tumbuh kembang',
    description:
      'Layanan Pediatri Altair Hospital memberikan perawatan kesehatan menyeluruh untuk bayi, balita, anak, dan remaja. Fokus pada pencegahan, imunisasi, dan pemantauan tumbuh kembang anak dengan pendekatan ramah anak.',
    treatments: [
      'Imunisasi Lengkap',
      'Pemantauan Tumbuh Kembang',
      'Konsultasi Gizi Anak',
      'Penanganan Penyakit Anak',
      'Konsultasi Laktasi',
    ],
  },
  {
    slug: 'oftalmologi',
    name: 'Oftalmologi',
    icon: Eye,
    shortDesc: 'Perawatan mata & penglihatan',
    description:
      'Layanan Oftalmologi Altair Hospital menangani berbagai gangguan mata dan penglihatan, termasuk katarak, glaukoma, degenerasi makula, dan kelainan refraksi. Dilengkapi peralatan operasi mata modern untuk hasil optimal.',
    treatments: [
      'Operasi Katarak',
      'Pemeriksaan Refraksi Mata',
      'Penanganan Glaukoma',
      'LASIK & Koreksi Penglihatan',
      'Konsultasi Retina',
    ],
  },
  {
    slug: 'umum',
    name: 'Poli Umum',
    icon: Stethoscope,
    shortDesc: 'Pemeriksaan & konsultasi umum',
    description:
      'Poli Umum Altair Hospital menjadi pintu masuk utama untuk semua keluhan kesehatan. Dokter umum kami akan melakukan pemeriksaan awal, memberikan diagnosis, dan merujuk ke spesialis jika diperlukan.',
    treatments: [
      'Pemeriksaan Kesehatan Umum',
      'Konsultasi Gejala Ringan',
      'Surat Keterangan Sehat',
      'Rujukan ke Spesialis',
      'Medical Check-Up Dasar',
    ],
  },
  {
    slug: 'igd-24-jam',
    name: 'IGD 24 Jam',
    icon: Activity,
    shortDesc: 'Layanan gawat darurat 24 jam',
    description:
      'IGD Altair Hospital siap siaga 24 jam sehari, 7 hari seminggu untuk menangani kasus kegawatan medis. Didukung tim dokter emergency, perawat terlatih, dan ambulans untuk respon cepat.',
    treatments: [
      'Penanganan Serangan Jantung',
      'Cedera & Kecelakaan',
      'Keracunan & Syok',
      'Resusitasi & Stabilisasi',
      'Ambulans 24 Jam',
    ],
  },
  {
    slug: 'laboratorium',
    name: 'Laboratorium',
    icon: Microscope,
    shortDesc: 'Pemeriksaan lab cepat & akurat',
    description:
      'Laboratorium Altair Hospital menyediakan berbagai pemeriksaan laboratorium dengan hasil cepat dan akurat. Mulai dari hematologi, kimia klinik, mikrobiologi, hingga pemeriksaan khusus.',
    treatments: [
      'Pemeriksaan Darah Lengkap',
      'Kimia Klinik & Urinalisis',
      'Pemeriksaan Hormon',
      'Mikrobiologi & Kultur',
      'Tes PCR & Rapid Test',
    ],
  },
]

// Helper: ambil layanan berdasarkan slug
export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}