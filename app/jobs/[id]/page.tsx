import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JobDetailClient from '@/components/pages/JobDetailClient'
import { getJob } from '@/lib/airtable/jobs'

export async function generateMetadata({ params }: PageProps<'/jobs/[id]'>): Promise<Metadata> {
  const { id } = await params
  const job = await getJob(id).catch(() => null)

  if (!job) return { title: 'Job not found | LANYSC' }

  return {
    title: `${job.role} at ${job.company} | LANYSC`,
    description: `View details for the ${job.role} opportunity at ${job.company} in ${job.location}.`,
  }
}

export default async function JobDetailPage({ params }: PageProps<'/jobs/[id]'>) {
  const { id } = await params
  const job = await getJob(id).catch(error => {
    console.error(`Unable to load Airtable job ${id}:`, error)
    return null
  })

  if (!job) notFound()

  return <JobDetailClient job={job} />
}
