import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/lib/site'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingButtons } from '@/components/floating-buttons'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | RO, AC & Appliance Repair in Rishikesh`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'RO service Rishikesh',
    'water purifier repair Haridwar',
    'AC service Dehradun',
    'chimney cleaning',
    'washing machine repair',
    'refrigerator repair',
    'geyser repair',
    'home appliance service',
    'doorstep service Uttarakhand',
  ],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | Home Appliance & Repair Experts`,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingButtons />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
