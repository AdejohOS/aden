import AboutUs from '@/components/about-us'
import Excellence from '@/components/excellence'
import Gallery from '@/components/gallery'
import HeroSection from '@/components/hero'
import News from '@/components/news'
import Partner from '@/components/partner'


import Values from '@/components/values'


export default function Home() {
  return (
    <main className='w-full h-full'>
      <HeroSection/>
      <AboutUs/>
      <Values/>
      <Excellence/>
    
      <News />
      <Partner />
    </main>
  )
}
