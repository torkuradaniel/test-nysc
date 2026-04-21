import type { Metadata } from 'next'
import SkillsClient from '@/components/pages/SkillsClient'

export const metadata: Metadata = {
  title: 'In-Demand Skills After NYSC — What to Learn and How Much You Can Earn',
  description:
    'The skills Nigerian employers and clients are paying for right now. Time to learn, income ranges, and how to get started.',
}

export default function SkillsPage() {
  return <SkillsClient />
}
