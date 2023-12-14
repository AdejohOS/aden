import AboutUs from '@/components/about-us'
import Gallery from '@/components/gallery'
import HeroSection from '@/components/hero'
import Partners from '@/components/partners'
import Place from '@/components/place'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full h-full'>
      <HeroSection/>
      <AboutUs/>
      <Gallery/>
      <Partners />
    </main>
  )
}
