import type { Metadata, Viewport } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Young - You New Generation',
  description: 'Geleceğin liderlerini yetiştiriyoruz',
  keywords: 'gençlik, eğitim, gelecek, liderlik, teknoloji',
  authors: [{ name: 'Young - You New Generation' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  )
}
