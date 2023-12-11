import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav-bar'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Africa Digital Education Network (ADEN)',
  description: "The African Digital Education Network's core mandates include raising awareness about the benefits of digital education across Africa and sharing resources with African institutions of higher education"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('relative', font.className)}>
        <Navbar />
        <div className='relative'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
