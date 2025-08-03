import type { Metadata } from 'next'
import './globals.css'
import Header from '@/containers/header'
import Footer from '@/containers/footer'

export const metadata: Metadata = {
  title: 'Refi Hikman',
  description: 'A portfolio website designed and built with Next.js by Refi Hikman'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='font-body text-light antialiased bg-primary' suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
