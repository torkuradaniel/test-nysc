export interface Skill {
  name: string
  demand: 'high' | 'growing' | 'stable'
  demandLabel: string
  demandEmoji: string
  timeToReady: string
  incomeRange: string
  howToEarn: 'Employment' | 'Freelance' | 'Both'
  freeResource: string
  paidResource: string
}

export const skills: Skill[] = [
  {
    name: 'Data Analysis',
    demand: 'high',
    demandLabel: 'High',
    demandEmoji: '🔥',
    timeToReady: '8–12 weeks',
    incomeRange: '₦150k – ₦400k/month',
    howToEarn: 'Both',
    freeResource: 'Google Data Analytics (Coursera)',
    paidResource: 'DataCamp',
  },
  {
    name: 'Digital Marketing',
    demand: 'high',
    demandLabel: 'High',
    demandEmoji: '🔥',
    timeToReady: '6–10 weeks',
    incomeRange: '₦100k – ₦300k/month',
    howToEarn: 'Both',
    freeResource: 'Meta Blueprint (free)',
    paidResource: 'HubSpot Academy',
  },
  {
    name: 'UI/UX Design',
    demand: 'high',
    demandLabel: 'High',
    demandEmoji: '🔥',
    timeToReady: '10–16 weeks',
    incomeRange: '₦200k – ₦600k/month',
    howToEarn: 'Both',
    freeResource: 'Google UX Design (Coursera)',
    paidResource: 'Memorisely',
  },
  {
    name: 'Content Writing / Copywriting',
    demand: 'growing',
    demandLabel: 'Growing',
    demandEmoji: '⚡',
    timeToReady: '4–8 weeks',
    incomeRange: '₦80k – ₦250k/month',
    howToEarn: 'Both',
    freeResource: 'Copyblogger (free articles)',
    paidResource: 'The Copywriting Course by Neville',
  },
  {
    name: 'Video Editing',
    demand: 'growing',
    demandLabel: 'Growing',
    demandEmoji: '⚡',
    timeToReady: '4–8 weeks',
    incomeRange: '₦80k – ₦200k/month',
    howToEarn: 'Freelance',
    freeResource: 'CapCut tutorials (YouTube)',
    paidResource: 'Premiere Pro on LinkedIn Learning',
  },
  {
    name: 'Frontend Web Development',
    demand: 'high',
    demandLabel: 'High',
    demandEmoji: '🔥',
    timeToReady: '16–24 weeks',
    incomeRange: '₦250k – ₦800k/month',
    howToEarn: 'Both',
    freeResource: 'freeCodeCamp (free)',
    paidResource: 'Scrimba Pro',
  },
  {
    name: 'Virtual Assistant',
    demand: 'growing',
    demandLabel: 'Growing',
    demandEmoji: '⚡',
    timeToReady: '2–4 weeks',
    incomeRange: '₦60k – ₦180k/month',
    howToEarn: 'Freelance',
    freeResource: 'ALX Virtual Assistant Programme',
    paidResource: 'Udemy VA courses',
  },
  {
    name: 'Social Media Management',
    demand: 'stable',
    demandLabel: 'Stable',
    demandEmoji: '📈',
    timeToReady: '4–6 weeks',
    incomeRange: '₦70k – ₦200k/month',
    howToEarn: 'Both',
    freeResource: 'Meta Blueprint (free)',
    paidResource: 'Social Media Marketing on Coursera',
  },
  {
    name: 'Graphic Design',
    demand: 'stable',
    demandLabel: 'Stable',
    demandEmoji: '📈',
    timeToReady: '6–10 weeks',
    incomeRange: '₦80k – ₦250k/month',
    howToEarn: 'Both',
    freeResource: 'Canva Design School (free)',
    paidResource: 'Adobe Creative Cloud courses',
  },
  {
    name: 'Accounting / Bookkeeping',
    demand: 'stable',
    demandLabel: 'Stable',
    demandEmoji: '📈',
    timeToReady: '8–12 weeks',
    incomeRange: '₦120k – ₦300k/month',
    howToEarn: 'Employment',
    freeResource: 'QuickBooks tutorials (YouTube)',
    paidResource: 'Sage accounting course',
  },
]
