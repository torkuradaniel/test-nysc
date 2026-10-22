import type { Metadata } from 'next'
import JobsClient from '@/components/pages/JobsClient'
import { getJobs } from '@/lib/airtable/jobs'

export const metadata: Metadata = {
  title: 'Jobs After NYSC — Entry-Level Roles for Fresh Graduates | Northquest',
  description:
    'Curated entry-level job listings for NYSC graduates. Updated weekly. No noise — just roles worth your time.',
}

export default async function JobsPage() {
  const jobs = await getJobs().catch(error => {
    console.error('Unable to load jobs from Airtable:', error)
    return []
  })
  return <JobsClient jobs={jobs} />
}
