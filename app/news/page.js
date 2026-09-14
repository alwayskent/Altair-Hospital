import { ArrowLeft, Calendar, ArrowUpRight } from 'lucide-react'
import { news } from '@/data/news'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: 'News & Media Center - Altair Hospital',
    description: 'Berita, program, dan informasi terbaru dari Altair Hospital.',
}

export default function NewsPage() {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
    }

    return (
        <main className="bg-altair-white min-h-screen">
            <Navbar />

            {/* Page Header */}
            <section className="bg-gradient-to-br from-altair-blue to-blue-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-altair-white/80 hover:text-altair-white mb-4 transition-colors"
                    >
                        <ArrowLeft size={18} /> Kembali ke Beranda
                    </a>
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">News & Media Center</h1>
                    <p className="text-blue-100 max-w-2xl">
                        Berita, program, dan informasi terbaru dari Altair Hospital.
                    </p>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-20 bg-altair-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((item) => (
                            <a
                                key={item.slug}
                                href={`/news/${item.slug}`}
                                className="bg-altair-white border border-altair-silver rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 bg-altair-blue text-altair-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                                        <Calendar size={14} />
                                        <span>{formatDate(item.date)}</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-3 leading-snug group-hover:text-altair-blue transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center gap-1 text-altair-blue font-medium text-sm">
                                        Baca Selengkapnya <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}