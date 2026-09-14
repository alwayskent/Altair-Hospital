// data/news.js

export const news = [
    {
        slug: 'altair-hospital-raih-akreditasi-paripurna',
        title: 'Altair Hospital Raih Akreditasi Paripurna KARS',
        date: '2026-09-10',
        category: 'Pencapaian',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        excerpt: 'Altair Hospital berhasil meraih akreditasi Paripurna dari KARS, standar tertinggi dalam pelayanan rumah sakit di Indonesia.',
        content: `
Altair Hospital dengan bangga mengumumkan bahwa kami telah berhasil meraih **Akreditasi Paripurna** dari Komisi Akreditasi Rumah Sakit (KARS). Ini adalah tingkat akreditasi tertinggi yang diberikan kepada rumah sakit di Indonesia.

Pencapaian ini merupakan hasil kerja keras seluruh tim medis, perawat, staf, dan manajemen Altair Hospital yang telah berkomitmen memberikan pelayanan terbaik bagi masyarakat.

Akreditasi Paripurna mencakup penilaian menyeluruh terhadap berbagai aspek, termasuk:
- Standar pelayanan medis
- Keselamatan pasien
- Manajemen rumah sakit
- Hak pasien dan keluarga
- Pengendalian infeksi

Kami mengucapkan terima kasih kepada seluruh pasien dan keluarga yang telah mempercayai Altair Hospital sebagai tempat berobat. Kepercayaan Anda adalah motivasi kami untuk terus meningkatkan kualitas pelayanan.
    `.trim(),
    },
    {
        slug: 'program-vaksinasi-altair-hospital',
        title: 'Program Vaksinasi Altair Hospital',
        date: '2026-09-05',
        category: 'Program',
        image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=870&auto=format&fit=crop',
        excerpt: 'Altair Hospital menyediakan layanan vaksinasi lengkap untuk segala usia, dari anak-anak hingga dewasa, dengan tenaga medis profesional.',
        content: `
Altair Hospital menyediakan **layanan vaksinasi lengkap** untuk segala usia, dari bayi, anak-anak, hingga dewasa dan lansia. Vaksinasi merupakan salah satu cara paling efektif untuk mencegah penyakit menular dan melindungi kesehatan keluarga Anda.

**Jenis Vaksin yang Tersedia:**
- Vaksin Influenza (tahunan)
- Vaksin Pneumonia
- Vaksin Hepatitis A & B
- Vaksin HPV
- Vaksin MMR (Measles, Mumps, Rubella)
- Vaksin COVID-19
- Vaksin Herpes Zoster
- Vaksin Tetanus

**Jadwal dan Lokasi:**
Layanan vaksinasi tersedia setiap hari kerja, pukul 08:00 - 16:00 WIB, di Poli Umum Altair Hospital, Jl. Kesehatan No. 123, Jakarta Pusat.

**Cara Mendaftar:**
1. Bawa KTP asli dan fotokopi
2. Bawa buku vaksinasi (jika ada)
3. Daftar langsung di lokasi atau via WhatsApp ke (021) 1234-5678

Tim medis kami yang berpengalaman akan memastikan proses vaksinasi berjalan aman dan nyaman. Konsultasikan kebutuhan vaksinasi Anda dengan dokter kami terlebih dahulu.
    `.trim(),
    },
    {
        slug: 'teknologi-mri-terbaru-altair-hospital',
        title: 'Altair Hospital Hadirkan Teknologi MRI Terbaru',
        date: '2026-08-28',
        category: 'Teknologi',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
        excerpt: 'Altair Hospital meluncurkan mesin MRI generasi terbaru dengan teknologi AI untuk hasil diagnostik yang lebih cepat dan akurat.',
        content: `
Altair Hospital terus berkomitmen menghadirkan teknologi medis terkini untuk pelayanan yang lebih baik. Kali ini, kami dengan bangga meluncurkan **Mesin MRI (Magnetic Resonance Imaging) Generasi Terbaru**.

**Keunggulan Teknologi Baru:**
- Waktu pemindaian lebih cepat (hanya 15-20 menit per sesi)
- Resolusi gambar lebih tinggi
- Dukungan AI untuk analisis otomatis
- Lebih nyaman untuk pasien (tabung lebih luas, kebisingan lebih rendah)
- Aman untuk pasien dengan implan logam tertentu

MRI ini sangat bermanfaat untuk diagnosis berbagai kondisi, seperti:
- Gangguan otak dan saraf
- Cedera tulang dan sendi
- Kanker dan tumor
- Penyakit jantung
- Gangguan organ dalam

**Jadwal Operasional:**
Senin - Sabtu, 07:00 - 20:00 WIB
Minggu: 08:00 - 14:00 WIB

Untuk membuat janji MRI, silakan hubungi (021) 1234-5678 atau buat janji online melalui website kami.
    `.trim(),
    },
]

export function getNewsBySlug(slug) {
    return news.find((n) => n.slug === slug)
}