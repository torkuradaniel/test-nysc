import type { Metadata } from 'next'
import ToolkitClient from '@/components/pages/ToolkitClient'

export const metadata: Metadata = {
  title: 'NYSC Graduate Career Toolkit — CV, LinkedIn & Interview Guide',
  description:
    'Everything you need to present yourself well. Free CV template, LinkedIn setup guide, and interview prep for Nigerian fresh graduates.',
}

export default function ToolkitPage() {
  return <ToolkitClient />
}
