import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
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

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'What Next After NYSC? | Northquest Finance',
  description:
    'Everything you need to land well after NYSC — jobs, in-demand skills, career toolkit, and how to protect yourself financially during the gap.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Nav />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
