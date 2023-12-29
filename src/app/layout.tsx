import type { Metadata } from 'next'
import { Figtree, Poppins, Sevillana } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav-bar'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



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
        <div className='h-screen flex flex-col'>
          <Navbar />
            <div className='relative flex-1'>
              {children}
            </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
