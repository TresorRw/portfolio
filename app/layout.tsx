import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { Providers } from './Providers'

const poppins = Poppins({ weight: ["100", "200", "300"], subsets: ['devanagari'] })

export const metadata: Metadata = {
  title: 'CYUSA Alain Tresor - Skilled in crafting robust, scalable software solutions.' ,
  description: 'Developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
