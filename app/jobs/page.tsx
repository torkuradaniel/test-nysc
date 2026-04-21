import type { Metadata } from 'next'
import JobsClient from '@/components/pages/JobsClient'

export const metadata: Metadata = {
  title: 'Jobs After NYSC — Entry-Level Roles for Fresh Graduates | Northquest',
  description:
    'Curated entry-level job listings for NYSC graduates. Updated weekly. No noise — just roles worth your time.',
}

export default function JobsPage() {
  return <JobsClient />
}
