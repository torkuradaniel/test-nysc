export interface Skill {
  name: string
  demand: 'high' | 'growing' | 'stable'
  demandLabel: string
  timeToReady: string
  incomeRange: string
  howToEarn: 'Employment' | 'Freelance' | 'Both'
  freeResource: string
  freeResourceUrl: string
  paidResource: string
  paidResourceUrl: string
}

export const skills: Skill[] = [
  {
    name: 'Data Analysis',
    demand: 'high',
    demandLabel: 'High',
    timeToReady: '8–12 weeks',
    incomeRange: '₦150k – ₦400k/month',
    howToEarn: 'Both',
    freeResource: 'Google Data Analytics (Coursera)',
    freeResourceUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    paidResource: 'DataCamp',
    paidResourceUrl: 'https://www.datacamp.com/tracks/data-analyst-with-python',
  },
  {
    name: 'Digital Marketing',
    demand: 'high',
    demandLabel: 'High',
    timeToReady: '6–10 weeks',
    incomeRange: '₦100k – ₦300k/month',
    howToEarn: 'Both',
    freeResource: 'Meta Blueprint (free)',
    freeResourceUrl: 'https://www.facebook.com/business/learn',
    paidResource: 'HubSpot Academy',
    paidResourceUrl: 'https://academy.hubspot.com/courses/digital-marketing',
  },
  {
    name: 'UI/UX Design',
    demand: 'high',
    demandLabel: 'High',
    timeToReady: '10–16 weeks',
    incomeRange: '₦200k – ₦600k/month',
    howToEarn: 'Both',
    freeResource: 'Google UX Design (Coursera)',
    freeResourceUrl: 'https://www.coursera.org/professional-certificates/google-ux-design',
    paidResource: 'Memorisely',
    paidResourceUrl: 'https://www.memorisely.com/',
  },
  {
    name: 'Content Writing / Copywriting',
    demand: 'growing',
    demandLabel: 'Growing',
    timeToReady: '4–8 weeks',
    incomeRange: '₦80k – ₦250k/month',
    howToEarn: 'Both',
    freeResource: 'Copyblogger (free articles)',
    freeResourceUrl: 'https://copyblogger.com/articles/',
    paidResource: 'The Copywriting Course by Neville',
    paidResourceUrl: 'https://copywritingcourse.com/',
  },
  {
    name: 'Video Editing',
    demand: 'growing',
    demandLabel: 'Growing',
    timeToReady: '4–8 weeks',
    incomeRange: '₦80k – ₦200k/month',
    howToEarn: 'Freelance',
    freeResource: 'CapCut tutorials (YouTube)',
    freeResourceUrl: 'https://www.youtube.com/@CapCutofficial',
    paidResource: 'Premiere Pro on LinkedIn Learning',
    paidResourceUrl: 'https://www.linkedin.com/learning/topics/premiere-pro',
  },
  {
    name: 'Frontend Web Development',
    demand: 'high',
    demandLabel: 'High',
    timeToReady: '16–24 weeks',
    incomeRange: '₦250k – ₦800k/month',
    howToEarn: 'Both',
    freeResource: 'freeCodeCamp (free)',
    freeResourceUrl: 'https://www.freecodecamp.org/learn/',
    paidResource: 'Scrimba Pro',
    paidResourceUrl: 'https://scrimba.com/pricing',
  },
  {
    name: 'Virtual Assistant',
    demand: 'growing',
    demandLabel: 'Growing',
    timeToReady: '2–4 weeks',
    incomeRange: '₦60k – ₦180k/month',
    howToEarn: 'Freelance',
    freeResource: 'ALX Virtual Assistant Programme',
    freeResourceUrl: 'https://www.alxafrica.com/programme/virtual-assistant/',
    paidResource: 'Udemy VA courses',
    paidResourceUrl: 'https://www.udemy.com/courses/search/?q=virtual%20assistant',
  },
  {
    name: 'Social Media Management',
    demand: 'stable',
    demandLabel: 'Stable',
    timeToReady: '4–6 weeks',
    incomeRange: '₦70k – ₦200k/month',
    howToEarn: 'Both',
    freeResource: 'Meta Blueprint (free)',
    freeResourceUrl: 'https://www.facebook.com/business/learn',
    paidResource: 'Social Media Marketing on Coursera',
    paidResourceUrl: 'https://www.coursera.org/specializations/social-media-marketing',
  },
  {
    name: 'Graphic Design',
    demand: 'stable',
    demandLabel: 'Stable',
    timeToReady: '6–10 weeks',
    incomeRange: '₦80k – ₦250k/month',
    howToEarn: 'Both',
    freeResource: 'Canva Design School (free)',
    freeResourceUrl: 'https://www.canva.com/designschool/',
    paidResource: 'Adobe Creative Cloud courses',
    paidResourceUrl: 'https://creativecloud.adobe.com/learn',
  }
]
