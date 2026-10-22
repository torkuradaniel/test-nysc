import { getJobs } from '@/lib/airtable/jobs'

export async function GET() {
  try {
    return Response.json({ jobs: await getJobs() })
  } catch (error) {
    console.error('Unable to fetch jobs from Airtable:', error)
    return Response.json({ error: 'Jobs are temporarily unavailable.' }, { status: 502 })
  }
}
