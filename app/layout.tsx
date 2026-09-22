import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Manrope, DM_Sans } from 'next/font/google'
import { Footer, Header } from '@/components/site'
import { ScrollToTop } from '@/components/scroll-to-top'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-heading' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.reconnagro.com'),
  title: 'RECONN | Agro India Pvt. Ltd.',
  description: 'Reconn Agro India Pvt. Ltd. — quality-focused agro and food products across Ghee, Honey, Edible Oils and Spices.',
  icons: {
    icon: '/reconn-icon.png',
    apple: '/reconn-icon.png',
    shortcut: '/reconn-icon.png',
  },
  openGraph: {
    title: 'RECONN | Agro India Pvt. Ltd.',
    description: 'Reconn Agro India Pvt. Ltd. — quality-focused agro and food products across Ghee, Honey, Edible Oils and Spices.',
    images: ['/reconn-logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RECONN | Agro India Pvt. Ltd.',
    description: 'Reconn Agro India Pvt. Ltd. — quality-focused agro and food products across Ghee, Honey, Edible Oils and Spices.',
    images: ['/reconn-logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#145b35',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth-anchor" data-scroll-behavior="smooth">
      <body className={`${manrope.variable} ${dmSans.variable} text-ink bg-white antialiased`}>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
