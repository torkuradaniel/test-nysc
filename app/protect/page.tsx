import type { Metadata } from 'next'
import ProtectClient from '@/components/pages/ProtectClient'

export const metadata: Metadata = {
  title: 'Protect Your Future — Save Your NYSC Allawee with Northquest',
  description:
    'The gap between your last allawee and your first salary is real. Here\'s how to handle it — and earn up to 24% interest while you do.',
}

export default function ProtectPage() {
  return <ProtectClient />
}
