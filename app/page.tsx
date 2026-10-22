import type { Metadata } from 'next'
import HomepageClient from '@/components/pages/HomepageClient'
import { getJobs } from '@/lib/airtable/jobs'

export const metadata: Metadata = {
  title: 'What Next After NYSC? | Northquest Finance',
  description:
    'Everything you need to land well after NYSC — jobs, in-demand skills, career toolkit, and how to protect yourself financially during the gap.',
}

export default async function HomePage() {
  const jobs = await getJobs().catch(error => {
    console.error('Unable to load homepage jobs from Airtable:', error)
    return []
  })
  return <HomepageClient jobs={jobs.slice(0, 4)} />
}
