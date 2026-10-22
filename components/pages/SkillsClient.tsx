'use client'

import React from 'react'
import styled from 'styled-components'
import { skills } from '@/lib/data/skills'
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

/* ─── Intro ──────────────────────────────────────────────────────── */

const IntroSection = styled.section`
  background: #ffffff;
  padding: 3rem 1.5rem 2rem;
`

const IntroPara = styled.p`
  font-size: 1.05rem;
  color: #1a0a2e;
  line-height: 1.7;
  max-width: 720px;
  background: #f7f4ee;
  border-radius: 14px;
  padding: 1.5rem;
`

/* ─── Skills Grid ────────────────────────────────────────────────── */

const GridSection = styled.section`
  background: #ffffff;
  padding: 1rem 1.5rem 5rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SkillCard = styled.article`
  background: #f3eeff;
  border: 0;
  border-radius: 16px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  transition: transform .2s ease, box-shadow .2s ease;

  &:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(45,0,87,.08); }
`

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
`

const SkillName = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #1a0a2e;
`

const DemandBadge = styled.span<{ $demand: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
  white-space: nowrap;
  background: ${p =>
    p.$demand === 'high' ? 'rgba(245, 166, 35, 0.15)' :
    p.$demand === 'growing' ? 'rgba(106, 13, 173, 0.1)' :
    'rgba(100, 116, 139, 0.1)'};
  color: ${p =>
    p.$demand === 'high' ? '#c47d00' :
    p.$demand === 'growing' ? '#6a0dad' :
    '#64748b'};
`

const SkillIncome = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #2d0057;
`

const SkillRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  font-size: 0.875rem;
  color: #64748b;

  strong {
    color: #1a0a2e;
    font-weight: 600;
    min-width: 80px;
    flex-shrink: 0;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(106,13,173,.1);
  margin: 0.5rem 0;
`

/* ─── Free Resources ─────────────────────────────────────────────── */

const ResourcesSection = styled.section`
  background: #f7f4ee;
  padding: 5rem 1.5rem;
`

const SectionLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #6a0dad;
  margin-bottom: 0.75rem;
`

const SectionTitle = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #1a0a2e;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
`

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ResourceCard = styled.div`
  background: #ffffff;
  border: 0;
  border-radius: 14px;
  box-shadow: 0 8px 28px rgba(45,0,87,.05);
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  transition: transform .2s ease;

  &:hover { transform: translateY(-2px); }
`

const ResourceName = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 0.975rem;
  font-weight: 700;
  color: #1a0a2e;
`

const ResourceNote = styled.p`
  font-size: 0.85rem;
  color: #64748b;
`

/* ─── Freelance Platforms ────────────────────────────────────────── */

const FreelanceSection = styled.section`
  background: radial-gradient(circle at 88% 14%, rgba(245,166,35,.16), transparent 28%), #2d0057;
  padding: 5rem 1.5rem;
  position: relative;

`

const FreelanceTitle = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
`

const FreelanceIntro = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 560px;

  em {
    color: #f5a623;
    font-style: normal;
  }
`

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const PlatformCard = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 0;
  border-radius: 14px;
  padding: 1.5rem;
  transition: background .2s ease, transform .2s ease;

  &:hover { background: rgba(255,255,255,.1); transform: translateY(-2px); }
`

const PlatformName = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #f5a623;
  margin-bottom: 0.5rem;
`

const PlatformNote = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.55;
`

/* ─── Data ───────────────────────────────────────────────────────── */

const freeResources = [
  { name: 'Google Career Certificates', note: 'Data, UX, IT Support, Project Management — on Coursera (audit free)' },
  { name: 'Coursera (audit mode)', note: 'Access most courses for free without paying for certificates' },
  { name: 'Meta Blueprint', note: 'Free digital marketing certifications from Meta — highly respected' },
  { name: 'ALX Africa', note: 'Tech and leadership programmes, many free or subsidised for Africans' },
  { name: 'HNG Internship', note: 'Remote internship cohorts for designers, developers, and marketers' },
  { name: 'freeCodeCamp', note: 'Full web development curriculum, 100% free, self-paced' },
]

const platforms = [
  {
    name: 'Upwork',
    note: 'Best for longer-term contracts. Competitive but strong pay. Build portfolio first.',
  },
  {
    name: 'Fiverr',
    note: 'Good for beginners. Package-based. Works well for design, writing, and video editing from Nigeria.',
  },
  {
    name: 'Toptal',
    note: 'Top 3% only — but once in, the rates are exceptional. Worth aiming for after 1–2 years.',
  },
]

/* ─── Component ──────────────────────────────────────────────────── */

export default function SkillsClient() {
  return (
    <>
      <PageHeader>
        <Container>
          <PageHeadline>Skills that pay in your first year out</PageHeadline>
          <PageSub>
            Not theory. Real skills, real income ranges, and honest timelines for getting there.
          </PageSub>
        </Container>
      </PageHeader>

      <IntroSection>
        <Container>
          <IntroPara>
            Your NYSC year is 12 months. Some of these skills take 8 weeks to be job-ready. That math works
            in your favour — if you start now.
          </IntroPara>
        </Container>
      </IntroSection>

      <GridSection>
        <Container>
          <Grid>
            {skills.map(skill => (
              <SkillCard key={skill.name}>
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <DemandBadge $demand={skill.demand}>
                    <i
                      aria-hidden="true"
                      className={`fi fi-sr-${skill.demand === 'high' ? 'flame' : skill.demand === 'growing' ? 'bolt' : 'chart-histogram'}`}
                    />
                    {skill.demandLabel}
                  </DemandBadge>
                </SkillHeader>

                <SkillIncome>{skill.incomeRange}</SkillIncome>

                <Divider />

                <SkillRow>
                  <strong>Time:</strong>
                  {skill.timeToReady}
                </SkillRow>
                <SkillRow>
                  <strong>Earn via:</strong>
                  {skill.howToEarn}
                </SkillRow>
                <SkillRow>
                  <strong>Free:</strong>
                  {skill.freeResource}
                </SkillRow>
                <SkillRow>
                  <strong>Paid:</strong>
                  {skill.paidResource}
                </SkillRow>
              </SkillCard>
            ))}
          </Grid>
        </Container>
      </GridSection>

      <ResourcesSection>
        <Container>
          <SectionLabel>No budget? No problem.</SectionLabel>
          <SectionTitle>Where to learn for free</SectionTitle>

          <ResourceGrid>
            {freeResources.map(r => (
              <ResourceCard key={r.name}>
                <ResourceName>{r.name}</ResourceName>
                <ResourceNote>{r.note}</ResourceNote>
              </ResourceCard>
            ))}
          </ResourceGrid>
        </Container>
      </ResourcesSection>

      <FreelanceSection>
        <Container>
          <FreelanceTitle>Earn before you land a full-time role</FreelanceTitle>
          <FreelanceIntro>
            Freelancing during service is legal and common.{' '}
            <em>Your PPA doesn&apos;t own your evenings.</em>{' '}
            These platforms work from Nigeria and can cover your expenses while you job hunt.
          </FreelanceIntro>

          <PlatformGrid>
            {platforms.map(p => (
              <PlatformCard key={p.name}>
                <PlatformName>{p.name}</PlatformName>
                <PlatformNote>{p.note}</PlatformNote>
              </PlatformCard>
            ))}
          </PlatformGrid>
        </Container>
      </FreelanceSection>

      <BottomBridge
        heading="Build the skill. Then build the buffer."
        body={
          <>
            You can&apos;t always control how fast you land a job. But you can control whether you&apos;re financially
            ready when it happens.{' '}
            <strong style={{ color: '#f5a623' }}>Start saving your allawee today.</strong>
          </>
        }
      />
    </>
  )
}
