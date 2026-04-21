import type { Metadata } from 'next'
import HomepageClient from '@/components/pages/HomepageClient'

export const metadata: Metadata = {
  title: 'What Next After NYSC? | Northquest Finance',
  description:
    'Everything you need to land well after NYSC — jobs, in-demand skills, career toolkit, and how to protect yourself financially during the gap.',
}

export default function HomePage() {
  return <HomepageClient />
}
