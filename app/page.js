import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Doctors from '@/components/Doctors'
import Fasilitas from '@/components/Fasilitas'
import Testimonials from '@/components/Testimonials'
import News from '@/components/News'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="bg-altair-white w-full">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Fasilitas />
      <Testimonials />
      <News />
      <CTA />
      <Footer />
    </main>
  )
}