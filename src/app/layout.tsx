import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav-bar'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | Aden',
  description: 'Theis is the jjjbkfnnflnlnlkdfknhfohfornglewnlnlohoho',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
