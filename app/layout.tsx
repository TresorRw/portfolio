import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import NavBar from '@/components/NavBar'
import { Providers } from './Providers'

export const metadata: Metadata = {
  authors: [{ name: "CYUSA Alain Tresor", url: "https://catresor.vercel.app" }],
  title: 'CYUSA Alain Tresor - Skilled in crafting robust, scalable software solutions.',
  description: 'Passionate and skilled software developer with a proven track record of crafting robust and innovative solutions, eager to contribute expertise in different technologies to drive excellence in software development. Ready to bring a dynamic blend of technical proficiency and creativity to your team.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
