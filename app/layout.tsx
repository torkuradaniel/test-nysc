import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import Script from 'next/script'
import StyledComponentsRegistry from '@/lib/registry'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '@flaticon/flaticon-uicons/css/solid/rounded.css'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'What Next After NYSC? | Northquest Finance',
  description:
    'Everything you need to land well after NYSC — jobs, in-demand skills, career toolkit, and how to protect yourself financially during the gap.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={syne.variable}>
      <body>
        <StyledComponentsRegistry>
          <Nav />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MBRL4NEPPS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MBRL4NEPPS');
        `}
      </Script>
    </html>
  )
}
