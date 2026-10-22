'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import BottomBridge from '@/components/BottomBridge'

/* ─── Shared layout ─────────────────────────────────────────────── */

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

/* ─── Page Header ────────────────────────────────────────────────── */

const PageHeader = styled.section`
  background: radial-gradient(circle at 82% 20%, rgba(141,86,171,.3), transparent 30%), #2d0057;
  padding: 6.5rem 1.5rem 5rem;
  position: relative;

`

const PageHeadline = styled.h1`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.055em;
  margin-bottom: 0.75rem;
  line-height: 1.1;
`

const PageSub = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 560px;
  line-height: 1.6;
`

/* ─── Tab nav ────────────────────────────────────────────────────── */

const TabNav = styled.div`
  background: #f7f4ee;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

const TabInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: .75rem 1.5rem;
  display: flex;
  gap: .5rem;
`

const Tab = styled.button<{ $active: boolean }>`
  padding: .7rem 1rem;
  font-size: 0.9rem;
  font-weight: ${p => p.$active ? '700' : '500'};
  color: ${p => p.$active ? '#2d0057' : '#64748b'};
  background: ${p => p.$active ? '#ffffff' : 'transparent'};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.15s;
  box-shadow: ${p => p.$active ? '0 6px 20px rgba(45,0,87,.07)' : 'none'};

  &:hover {
    color: #2d0057;
  }
`

/* ─── Content section ────────────────────────────────────────────── */

const ContentSection = styled.section`
  background: #ffffff;
  padding: 4rem 1.5rem 5rem;
`

const SectionTitle = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #1a0a2e;
  letter-spacing: -0.02em;
  margin-bottom: 2.5rem;
`

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Item = styled.div<{ $accent?: boolean }>`
  background: ${p => p.$accent ? '#f3eeff' : '#ffffff'};
  border: 0;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 28px rgba(45,0,87,.05);
  transition: transform .2s ease, box-shadow .2s ease;

  &:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(45,0,87,.08); }
`

const ItemTitle = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1a0a2e;
  margin-bottom: 0.5rem;
`

const ItemText = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.65;
`

const DosDontsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`

const DoCard = styled.div`
  background: rgba(245, 166, 35, 0.06);
  border: 0;
  border-radius: 16px;
  padding: 1.5rem;
`

const DontCard = styled.div`
  background: rgba(106, 13, 173, 0.04);
  border: 0;
  border-radius: 16px;
  padding: 1.5rem;
`

const DoTitle = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #c47d00;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

const DontTitle = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: #6a0dad;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

const CheckList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

const CheckItem = styled.li<{ $check: boolean }>`
  font-size: 0.875rem;
  color: #1a0a2e;
  line-height: 1.5;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '${p => p.$check ? '✓' : '✗'}';
    position: absolute;
    left: 0;
    color: ${p => p.$check ? '#c47d00' : '#6a0dad'};
    font-weight: 700;
  }
`

const DownloadCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #2d0057;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.8rem 1.75rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.15s;

  &:hover {
    background: #6a0dad;
  }
`

/* ─── Data ───────────────────────────────────────────────────────── */

const tabs = [
  { id: 'cv', label: 'CV Guide' },
  { id: 'linkedin', label: 'LinkedIn Setup' },
  { id: 'interview', label: 'Interview Prep' },
  { id: 'strategy', label: 'Application Strategy' },
]

const cvDos = [
  'One page for under 3 years of experience',
  'PDF format — always',
  'Professional email address (firstname.lastname@gmail)',
  'Describe your NYSC role with action verbs and results',
  'List relevant certifications and online courses',
  'Include a short professional summary at the top',
]

const cvDonts = [
  "Don't include a passport photo",
  "Don't list your date of birth or marital status",
  "Don't include WAEC/NECO if you have a degree",
  "Don't use tables or columns — ATS systems hate them",
  "Don't list references — just write 'Available on request'",
  "Don't use fonts smaller than 10pt",
]

const cvTips = [
  {
    title: 'How to write about your NYSC year',
    text: 'Start with an action verb. Quantify where possible. "Managed inventory records for 200+ SKUs" beats "I was responsible for inventory."',
  },
  {
    title: 'File naming matters',
    text: 'Name your file Firstname_Lastname_CV.pdf — not "CV Final Final v3.pdf". This signals attention to detail before they even open it.',
  },
  {
    title: 'Common mistakes that get you screened out',
    text: 'Typos, inconsistent formatting, email addresses that sound unprofessional, and no tailoring to the specific role.',
  },
  {
    title: 'Tailoring for each role',
    text: "Mirror keywords from the job description in your CV. If they say 'stakeholder management', use those exact words if you have the experience.",
  },
]

const linkedinTips = [
  {
    title: 'Profile photo',
    text: 'Headshot, good lighting, plain background. Profiles with photos get 14× more views. A phone camera is fine — just make it clear and professional.',
  },
  {
    title: 'Headline',
    text: "Don't just put your last job title. Say what you do: 'Graduate Data Analyst | Excel, Power BI, SQL | Open to Entry-Level Roles'",
  },
  {
    title: 'About section',
    text: "Write in first person. 3–5 sentences. Who you are, what you did in NYSC, what you're looking for. End with what you bring to a team.",
  },
  {
    title: 'Connect strategically',
    text: 'Send personalised connection requests to HR managers and hiring leads in companies you want to work for. 80% accept if you include a short note.',
  },
  {
    title: 'Use job search filters',
    text: "Search for 'entry level', filter by Nigeria, date posted within 1 month. Save the search so LinkedIn emails you new matches.",
  },
  {
    title: 'Engage before you apply',
    text: 'Comment thoughtfully on posts from people at your target companies. They notice. It differentiates you from cold applicants.',
  },
]

const interviewTips = [
  {
    title: 'Common entry-level questions to prepare for',
    text: '"Tell me about yourself." "Why do you want to work here?" "Describe a challenge you faced in NYSC." "Where do you see yourself in 5 years?"',
  },
  {
    title: 'The STAR method',
    text: 'Situation - Task - Action - Result. Every behavioural question ("describe a time when...") should be answered this way. Practice it until it\'s natural.',
  },
  {
    title: 'Research before every interview',
    text: "Read the company's About page, recent news, and the job description again. Know the CEO's name. Know what sector they're in. Know one thing they've done recently.",
  },
  {
    title: 'Salary negotiation for first-timers',
    text: 'Don\'t be the first to name a number. If they press you, say: "I\'m open to competitive offers in line with market rate for this role." Do your research on Glassdoor first.',
  },
]

const strategyTips = [
  {
    title: 'Track every application',
    text: 'Use a simple spreadsheet: Company | Role | Date Applied | Status | Next Step. You\'ll forget otherwise. It also helps you spot which types of roles get more responses.',
  },
  {
    title: 'The follow-up email formula',
    text: '5–7 days after applying, email HR: "I applied for [Role] on [Date] and wanted to confirm you received my application and express my continued interest." Short. Professional. Works.',
  },
  {
    title: 'Apply in volume, but not blindly',
    text: 'Send 10 tailored applications before 50 generic ones. Quality beats quantity up to a point. After your first 10 quality apps, you can increase volume.',
  },
  {
    title: 'How to handle rejections',
    text: "A rejection is data, not judgment. Reply and ask for feedback — most won't respond, but some will. That feedback is gold. And circumstances change — companies re-post roles.",
  },
]

/* ─── Component ──────────────────────────────────────────────────── */

export default function ToolkitClient() {
  const [activeTab, setActiveTab] = useState('cv')

  return (
    <>
      <PageHeader>
        <Container>
          <PageHeadline>Your post-NYSC career toolkit</PageHeadline>
          <PageSub>
            Everything you need to present yourself well — CV, LinkedIn, and interview prep. Free, practical,
            no fluff.
          </PageSub>
        </Container>
      </PageHeader>

      <TabNav role="tablist" aria-label="Toolkit sections">
        <TabInner>
          {tabs.map(t => (
            <Tab
              key={t.id}
              role="tab"
              aria-selected={activeTab === t.id}
              $active={activeTab === t.id}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </Tab>
          ))}
        </TabInner>
      </TabNav>

      <ContentSection role="tabpanel">
        <Container>

          {activeTab === 'cv' && (
            <>
              <SectionTitle>Build a CV that gets you through the first cut</SectionTitle>

              <DosDontsGrid>
                <DoCard>
                  <DoTitle>✓ Do include</DoTitle>
                  <CheckList>
                    {cvDos.map(item => <CheckItem key={item} $check>{item}</CheckItem>)}
                  </CheckList>
                </DoCard>
                <DontCard>
                  <DontTitle>✗ Don&apos;t include</DontTitle>
                  <CheckList>
                    {cvDonts.map(item => <CheckItem key={item} $check={false}>{item}</CheckItem>)}
                  </CheckList>
                </DontCard>
              </DosDontsGrid>

              <ItemsGrid>
                {cvTips.map(tip => (
                  <Item key={tip.title} $accent>
                    <ItemTitle>{tip.title}</ItemTitle>
                    <ItemText>{tip.text}</ItemText>
                  </Item>
                ))}
              </ItemsGrid>

              <DownloadCTA href="#" onClick={e => e.preventDefault()}>
                ↓ Download 1-Page CV Template (PDF)
              </DownloadCTA>
            </>
          )}

          {activeTab === 'linkedin' && (
            <>
              <SectionTitle>Set up a LinkedIn profile that actually works</SectionTitle>
              <ItemsGrid>
                {linkedinTips.map(tip => (
                  <Item key={tip.title} $accent>
                    <ItemTitle>{tip.title}</ItemTitle>
                    <ItemText>{tip.text}</ItemText>
                  </Item>
                ))}
              </ItemsGrid>
            </>
          )}

          {activeTab === 'interview' && (
            <>
              <SectionTitle>Interview prep for Nigerian fresh graduates</SectionTitle>
              <ItemsGrid>
                {interviewTips.map(tip => (
                  <Item key={tip.title} $accent>
                    <ItemTitle>{tip.title}</ItemTitle>
                    <ItemText>{tip.text}</ItemText>
                  </Item>
                ))}
              </ItemsGrid>
            </>
          )}

          {activeTab === 'strategy' && (
            <>
              <SectionTitle>How to run your job search like a professional</SectionTitle>
              <ItemsGrid>
                {strategyTips.map(tip => (
                  <Item key={tip.title} $accent>
                    <ItemTitle>{tip.title}</ItemTitle>
                    <ItemText>{tip.text}</ItemText>
                  </Item>
                ))}
              </ItemsGrid>
            </>
          )}

        </Container>
      </ContentSection>

      <BottomBridge
        heading="Your toolkit is ready. Is your safety net?"
        body={
          <>
            A great CV and LinkedIn profile gets you the job. But the 3–4 months between your last allawee
            and your first salary? That&apos;s what savings are for.{' '}
            <strong style={{ color: '#f5a623' }}>Start building that buffer now.</strong>
          </>
        }
        cta="Protect your future"
      />
    </>
  )
}
