export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}
import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Newsletter />
    </>
  )
}
