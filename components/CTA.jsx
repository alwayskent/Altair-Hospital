import { Ambulance, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-altair-blue to-blue-800 border-t border-altair-silver">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Ambulance className="mx-auto text-altair-silver mb-4" size={48} />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Butuh Bantuan Darurat?</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Tim gawat darurat kami siap melayani 24 jam sehari, 7 hari seminggu.
        </p>
        <a href="tel:0211123657" className="inline-flex items-center gap-3 bg-white text-altair-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-altair-silver transition-colors">
          <Phone size={24} /> (021) 112-3657
        </a>
      </div>
    </section>
  )
}