import { ArrowRight, Calendar, ArrowUpRight } from 'lucide-react'
import { news } from '@/data/news'

export default function News() {
    const featuredNews = news.slice(0, 3)

    const formatDate = (dateStr) => {
        const date = new Date(dateStr)
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
    }

    return (
        <section id="news" className="py-20 bg-altair-white border-t border-altair-silver">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-left mb-14">
                    <span className="text-altair-blue font-semibold text-sm uppercase tracking-wider">
                        News & Media Center
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                        Berita & Informasi Terbaru
                    </h2>
                    <p className="text-gray-600 max-w-2xl mr-auto">
                        Ikuti kabar terkini seputar program, teknologi, dan pencapaian Altair Hospital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {featuredNews.map((item) => (
                        <a
                            key={item.slug}
                            href={`/news/${item.slug}`}
                            className="bg-altair-white border border-altair-silver rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                        >
                            {/* Foto */}
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

                            {/* Content */}
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

                <div className="text-center">
                    <a
                        href="/news"
                        className="inline-flex items-center gap-2 bg-altair-blue text-altair-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-800 transition-colors"
                    >
                        Lihat Semua Berita <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}