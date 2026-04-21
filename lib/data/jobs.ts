export interface Job {
  id: number
  role: string
  company: string
  location: string
  datePosted: string
  source: 'Jobberman' | 'MyJobMag' | 'LinkedIn'
  sourceUrl: string
  sector: 'Tech' | 'Finance' | 'FMCG' | 'NGO' | 'Consulting' | 'Marketing'
}

export const jobs: Job[] = [
  {
    id: 1,
    role: 'Graduate Trainee – Operations',
    company: 'Access Bank',
    location: 'Lagos',
    datePosted: '2025-01-14',
    source: 'Jobberman',
    sourceUrl: '#',
    sector: 'Finance',
  },
  {
    id: 2,
    role: 'Junior Data Analyst',
    company: 'Interswitch Group',
    location: 'Lagos',
    datePosted: '2025-01-13',
    source: 'LinkedIn',
    sourceUrl: '#',
    sector: 'Tech',
  },
  {
    id: 3,
    role: 'Sales Executive (Entry Level)',
    company: 'Unilever Nigeria',
    location: 'Abuja',
    datePosted: '2025-01-12',
    source: 'MyJobMag',
    sourceUrl: '#',
    sector: 'FMCG',
  },
  {
    id: 4,
    role: 'Marketing Associate',
    company: 'Flutterwave',
    location: 'Lagos',
    datePosted: '2025-01-11',
    source: 'Jobberman',
    sourceUrl: '#',
    sector: 'Tech',
  },
  {
    id: 5,
    role: 'Project Officer – Youth',
    company: 'ActionAid Nigeria',
    location: 'Abuja',
    datePosted: '2025-01-10',
    source: 'MyJobMag',
    sourceUrl: '#',
    sector: 'NGO',
  },
  {
    id: 6,
    role: 'Business Analyst Trainee',
    company: 'PwC Nigeria',
    location: 'Lagos',
    datePosted: '2025-01-09',
    source: 'LinkedIn',
    sourceUrl: '#',
    sector: 'Consulting',
  },
  {
    id: 7,
    role: 'Digital Marketing Executive',
    company: 'Konga',
    location: 'Port Harcourt',
    datePosted: '2025-01-08',
    source: 'Jobberman',
    sourceUrl: '#',
    sector: 'Marketing',
  },
  {
    id: 8,
    role: 'Customer Success Associate',
    company: 'Paystack',
    location: 'Lagos',
    datePosted: '2025-01-07',
    source: 'LinkedIn',
    sourceUrl: '#',
    sector: 'Tech',
  },
  {
    id: 9,
    role: 'Finance Officer (Fresh Graduate)',
    company: 'Dangote Group',
    location: 'Lagos',
    datePosted: '2025-01-06',
    source: 'Jobberman',
    sourceUrl: '#',
    sector: 'Finance',
  },
  {
    id: 10,
    role: 'Content Creator & Writer',
    company: 'Stanbic IBTC',
    location: 'Remote',
    datePosted: '2025-01-05',
    source: 'LinkedIn',
    sourceUrl: '#',
    sector: 'Marketing',
  },
]
