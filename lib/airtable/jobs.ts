import 'server-only'

import type { Job } from '@/lib/data/jobs'

type AirtableJobFields = {
  'Job Title'?: string
  'Company name'?: string
  Location?: string
  'Posted Date'?: string
  Source?: string
  'Source URL'?: string
  'Apply URL'?: string
  URL?: string
  Sector?: string
  Description?: string
  'Employment Type'?: string
  'Work Type'?: string
  'Experience Level'?: string
  'Salary Min'?: number
  'Salary Max'?: number
  Status?: string
}

type AirtableRecord = {
  id: string
  createdTime: string
  fields: AirtableJobFields
}

type AirtableResponse = {
  records?: AirtableRecord[]
  offset?: string
  error?: { message?: string }
}

function getConfig() {
  const token = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableId = process.env.AIRTABLE_JOBS_TABLE_ID

  if (!token || !baseId || !tableId) return null
  return { token, baseId, tableId }
}

function toJob(record: AirtableRecord): Job | null {
  const fields = record.fields
  const role = fields['Job Title']?.trim()

  if (!role || fields.Status?.toLowerCase() !== 'open') return null

  return {
    id: record.id,
    role,
    company: fields['Company name']?.trim() || 'Company not listed',
    location: fields.Location?.trim() || 'Location not listed',
    datePosted: fields['Posted Date'] || record.createdTime.slice(0, 10),
    source: fields.Source?.trim() || 'Direct',
    sourceUrl: fields['Apply URL'] || fields['Source URL'] || fields.URL || '',
    sector: fields.Sector?.trim() || 'Other',
    description: fields.Description?.trim() || '',
    employmentType: fields['Employment Type']?.trim() || '',
    workType: fields['Work Type']?.trim() || '',
    experienceLevel: fields['Experience Level']?.trim() || '',
    salaryMin: fields['Salary Min'],
    salaryMax: fields['Salary Max'],
  }
}

export async function getJobs(): Promise<Job[]> {
  const config = getConfig()
  if (!config) return []

  const records: AirtableRecord[] = []
  let offset: string | undefined

  do {
    const url = new URL(
      `https://api.airtable.com/v0/${config.baseId}/${encodeURIComponent(config.tableId)}`,
    )
    url.searchParams.set('pageSize', '100')
    url.searchParams.set('sort[0][field]', 'Posted Date')
    url.searchParams.set('sort[0][direction]', 'desc')
    if (offset) url.searchParams.set('offset', offset)

    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${config.token}` },
      next: { revalidate: 300 },
    })

    const data = (await response.json()) as AirtableResponse
    if (!response.ok) {
      throw new Error(data.error?.message || `Airtable returned ${response.status}`)
    }

    records.push(...(data.records || []))
    offset = data.offset
  } while (offset)

  return records.flatMap(record => {
    const job = toJob(record)
    return job ? [job] : []
  })
}

export async function getJob(id: string): Promise<Job | null> {
  const config = getConfig()
  if (!config || !/^rec[a-zA-Z0-9]+$/.test(id)) return null

  const response = await fetch(
    `https://api.airtable.com/v0/${config.baseId}/${encodeURIComponent(config.tableId)}/${id}`,
    {
      headers: { Authorization: `Bearer ${config.token}` },
      next: { revalidate: 300 },
    },
  )

  if (response.status === 404) return null

  const data = (await response.json()) as AirtableRecord & AirtableResponse
  if (!response.ok) {
    throw new Error(data.error?.message || `Airtable returned ${response.status}`)
  }

  return toJob(data)
}
