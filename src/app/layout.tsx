import type { Metadata, Viewport } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import PrimeSidebarComponent from '@/components/PrimeSidebar'
import GlobalLoading from '@/components/GlobalLoading'

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
      <body className={`${openSans.className} flex min-h-screen`}>
        {/* ✅ Sidebar her zaman görünsün */}
        <PrimeSidebarComponent />

        {/* ✅ Sayfa içeriği sağda */}
        <main className="flex-1 p-6 bg-gray-50">
          {children}
        </main>

        {/* Global Loading Spinner (Client Only) */}
        <GlobalLoading />
      </body>
    </html>
  )
}
