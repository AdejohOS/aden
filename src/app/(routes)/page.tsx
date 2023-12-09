import AboutUs from '@/components/about-us'
import Gallery from '@/components/gallery'
import HeroSection from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full h-full'>
      <HeroSection/>
      <AboutUs/>
      <Gallery/>
    </main>
  )
}
