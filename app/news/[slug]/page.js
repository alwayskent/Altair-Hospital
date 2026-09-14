import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'
import { news, getNewsBySlug } from '@/data/news'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export async function generateMetadata({ params }) {
    const { slug } = await params
    const item = getNewsBySlug(slug)
    if (!item) return { title: 'Berita tidak ditemukan' }
    return {
        title: `${item.title} - Altair Hospital`,
        description: item.excerpt,
    }
}

export function generateStaticParams() {
    return news.map((n) => ({ slug: n.slug }))
}

export default async function NewsDetailPage({ params }) {
    const { slug } = await params
    const item = getNewsBySlug(slug)

    if (!item) {
        notFound()
    }

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
            <section className="bg-gradient-to-br from-altair-blue to-blue-800 text-white py-12">
                <div className="max-w-4xl mx-auto px-4">
                    <a
                        href="/news"
                        className="inline-flex items-center gap-2 text-altair-white/80 hover:text-altair-white mb-6 transition-colors"
                    >
                        <ArrowLeft size={18} /> Kembali ke News
                    </a>
                    <span className="inline-block bg-altair-white/20 backdrop-blur text-altair-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                        {item.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                        {item.title}
                    </h1>
                    <div className="flex items-center gap-2 text-blue-100 text-sm">
                        <Calendar size={16} />
                        <span>{formatDate(item.date)}</span>
                    </div>
                </div>
            </section>

            {/* Image */}
            <section className="bg-altair-white">
                <div className="max-w-4xl mx-auto px-4 -mt-8 md:-mt-12">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 md:py-16 bg-altair-white">
                <div className="max-w-3xl mx-auto px-4">
                    <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-8 italic border-l-4 border-altair-blue pl-4">
                        {item.excerpt}
                    </p>

                    <div className="prose prose-lg max-w-none">
                        {item.content.split('\n\n').map((paragraph, i) => {
                            // Handle list items (starting with -)
                            if (paragraph.trim().startsWith('-')) {
                                const items = paragraph.split('\n').filter((l) => l.trim().startsWith('-'))
                                return (
                                    <ul key={i} className="list-disc pl-6 my-4 space-y-2 text-gray-700">
                                        {items.map((li, idx) => (
                                            <li key={idx}>{li.replace(/^-\s*/, '')}</li>
                                        ))}
                                    </ul>
                                )
                            }

                            // Handle numbered lists
                            if (/^\d+\./.test(paragraph.trim())) {
                                const items = paragraph.split('\n').filter((l) => /^\d+\./.test(l.trim()))
                                return (
                                    <ol key={i} className="list-decimal pl-6 my-4 space-y-2 text-gray-700">
                                        {items.map((li, idx) => (
                                            <li key={idx}>{li.replace(/^\d+\.\s*/, '')}</li>
                                        ))}
                                    </ol>
                                )
                            }

                            // Bold text handling (**text**)
                            const parts = paragraph.split(/(\*\*[^*]+\*\*)/g)
                            return (
                                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                                    {parts.map((part, idx) => {
                                        if (part.startsWith('**') && part.endsWith('**')) {
                                            return (
                                                <strong key={idx} className="text-gray-900 font-bold">
                                                    {part.slice(2, -2)}
                                                </strong>
                                            )
                                        }
                                        return <span key={idx}>{part}</span>
                                    })}
                                </p>
                            )
                        })}
                    </div>

                    {/* Footer Info */}
                    <div className="mt-12 pt-8 border-t border-altair-silver flex items-center gap-2 text-sm text-gray-500">
                        <Tag size={16} className="text-altair-blue" />
                        <span>Kategori: </span>
                        <span className="text-altair-blue font-semibold">{item.category}</span>
                    </div>

                    {/* Back Button */}
                    <div className="mt-8 text-center">
                        <a
                            href="/news"
                            className="inline-flex items-center gap-2 bg-altair-blue text-altair-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-800 transition-colors"
                        >
                            <ArrowLeft size={18} /> Lihat Berita Lainnya
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}