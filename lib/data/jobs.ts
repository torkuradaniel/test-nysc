export interface Job {
  id: string
  role: string
  company: string
  location: string
  datePosted: string
  source: string
  sourceUrl: string
  sector: string
  description: string
  employmentType: string
  workType: string
  experienceLevel: string
  salaryMin?: number
  salaryMax?: number
}
