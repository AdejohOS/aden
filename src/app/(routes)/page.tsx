import AboutUs from '@/components/about-us'
import HeroSection from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full h-full'>
      <HeroSection/>
      <AboutUs/>
    </main>
  )
}
