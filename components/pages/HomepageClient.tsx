'use client'

import React from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { jobs } from '@/lib/data/jobs'
import { skills } from '@/lib/data/skills'

/* ─── Animations ───────────────────────────────────────────────── */

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

/* ─── Layout helpers ─────────────────────────────────────────────── */

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

/* ─── Hero ───────────────────────────────────────────────────────── */

const HeroSection = styled.section`
  background: #2d0057;
  padding: 5rem 1.5rem 6rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10%;
    width: 4px;
    height: 60%;
    background: #f5a623;
    border-radius: 0 2px 2px 0;
  }
`

const HeroInner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeUp} 0.6s ease both;
`

const HeroHeadline = styled.h1`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
`

const HeroSub = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.65;
  max-width: 580px;
  margin: 0 auto 2.5rem;
`

const HeroCTA = styled.a`
  display: inline-block;
  background: #f5a623;
  color: #1a0a2e;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 0.9rem 2.25rem;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 166, 35, 0.45);
  }
`

/* ─── Three Pillars ──────────────────────────────────────────────── */

const PillarsSection = styled.section`
  background: #ffffff;
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
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 700;
  color: #1a0a2e;
  letter-spacing: -0.02em;
  margin-bottom: 3rem;
  line-height: 1.2;
`

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const PillarCard = styled(Link)`
  display: block;
  background: #f3eeff;
  border: 1px solid #e0d0ff;
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(106, 13, 173, 0.12);
  }
`

const PillarIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const PillarTitle = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a0a2e;
  margin-bottom: 0.75rem;
`

const PillarText = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
`

const PillarArrow = styled.span`
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #6a0dad;
`

/* ─── Honest Transition ──────────────────────────────────────────── */

const TransitionSection = styled.section`
  background: #2d0057;
  padding: 5rem 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 15%;
    width: 4px;
    height: 70%;
    background: #f5a623;
    border-radius: 0 2px 2px 0;
  }
`

const TransitionInner = styled.div`
  max-width: 680px;
  margin: 0 auto;
`

const TransitionStat = styled.p`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.35;
  margin-bottom: 1rem;

  &:not(:last-child) {
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(224, 208, 255, 0.15);
  }

  em {
    font-style: normal;
    color: #f5a623;
  }
`

/* ─── Jobs Teaser ────────────────────────────────────────────────── */

const TeaserSection = styled.section`
  background: #ffffff;
  padding: 5rem 1.5rem;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
`

const SeeAllLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 600;
  color: #6a0dad;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const JobCard = styled.div`
  background: #f3eeff;
  border: 1px solid #e0d0ff;
  border-radius: 10px;
  padding: 1.5rem;
`

const JobRole = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1a0a2e;
  margin-bottom: 0.25rem;
`

const JobMeta = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 0.75rem;
`

const SourceTag = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6a0dad;
  background: #e0d0ff;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
`

/* ─── Skills Teaser ──────────────────────────────────────────────── */

const SkillsTeaserSection = styled.section`
  background: #f3eeff;
  padding: 5rem 1.5rem;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SkillCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0d0ff;
  border-radius: 10px;
  padding: 1.5rem;
`

const SkillName = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1a0a2e;
  margin-bottom: 0.5rem;
`

const SkillIncome = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6a0dad;
  margin-bottom: 0.25rem;
`

const SkillTime = styled.p`
  font-size: 0.8rem;
  color: #64748b;
`

/* ─── Financial Bridge ───────────────────────────────────────────── */

const BridgeSection = styled.section`
  background: #ffffff;
  padding: 5rem 1.5rem;
`

const BridgeInner = styled.div`
  max-width: 760px;
  margin: 0 auto;
`

const BridgeBox = styled.div`
  background: #2d0057;
  border-radius: 16px;
  padding: 3rem 2.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #f5a623;
    border-radius: 0;
  }
`

const BridgeHeading = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.3rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
`

const BridgeBody = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.65;
  margin-bottom: 1.5rem;
`

const StatCallout = styled.div`
  background: rgba(245, 166, 35, 0.12);
  border: 1px solid rgba(245, 166, 35, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  margin-bottom: 2rem;

  p {
    font-size: 1rem;
    font-weight: 600;
    color: #f5a623;
    line-height: 1.4;
  }
`

const BridgeCTA = styled(Link)`
  display: inline-block;
  background: #f5a623;
  color: #1a0a2e;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4);
  }
`

/* ─── Testimonials ───────────────────────────────────────────────── */

const TestimonialsSection = styled.section`
  background: #f3eeff;
  padding: 5rem 1.5rem;
`

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TestCard = styled.blockquote`
  background: #ffffff;
  border: 1px solid #e0d0ff;
  border-radius: 12px;
  padding: 1.75rem;
  border-left: 4px solid #f5a623;
  margin: 0;
`

const TestQuote = styled.p`
  font-size: 0.975rem;
  color: #1a0a2e;
  line-height: 1.7;
  margin-bottom: 1rem;
  font-style: italic;
`

const TestAuthor = styled.cite`
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
  font-style: normal;
`

/* ─── Component ──────────────────────────────────────────────────── */

const featuredJobs = jobs.slice(0, 4)
const featuredSkills = skills.slice(0, 3)

const testimonials = [
  {
    quote: "I didn't have a job for 4 months after NYSC. The savings I built during service kept me afloat.",
    author: 'Tolu, Lagos',
  },
  {
    quote: "I wish someone told me to save my allawee earlier. That buffer changed everything.",
    author: 'Chisom, Abuja',
  },
]

export default function HomepageClient() {
  return (
    <>
      {/* Hero */}
      <HeroSection>
        <HeroInner>
          <HeroHeadline>What next after NYSC?</HeroHeadline>
          <HeroSub>
            You&apos;ve served. Now it&apos;s time to land well. Find the right job, build skills employers
            actually want, and make sure you&apos;re financially ready for what comes next.
          </HeroSub>
          <HeroCTA href="#pillars">Let&apos;s figure it out →</HeroCTA>
        </HeroInner>
      </HeroSection>

      {/* Three Pillars */}
      <PillarsSection id="pillars">
        <Container>
          <SectionLabel>Your roadmap</SectionLabel>
          <SectionTitle>Three things that separate corpers who land well from those who don&apos;t.</SectionTitle>

          <PillarsGrid>
            <PillarCard href="/jobs">
              <PillarIcon>🔍</PillarIcon>
              <PillarTitle>Find Work</PillarTitle>
              <PillarText>
                The job market is competitive but navigable. See what&apos;s hiring right now and what employers
                are actually looking for.
              </PillarText>
              <PillarArrow>Browse open roles →</PillarArrow>
            </PillarCard>

            <PillarCard href="/skills">
              <PillarIcon>📚</PillarIcon>
              <PillarTitle>Build Skills</PillarTitle>
              <PillarText>
                Some skills can be learned in 3 months and earn you ₦200k/month. Know what to focus on
                before service ends.
              </PillarText>
              <PillarArrow>See in-demand skills →</PillarArrow>
            </PillarCard>

            <PillarCard href="/protect">
              <PillarIcon>🛡️</PillarIcon>
              <PillarTitle>Protect Your Future</PillarTitle>
              <PillarText>
                The gap between your last allawee and your first salary is real. Here&apos;s how corpers who
                landed well handled it.
              </PillarText>
              <PillarArrow>Protect your future →</PillarArrow>
            </PillarCard>
          </PillarsGrid>
        </Container>
      </PillarsSection>

      {/* Honest Transition */}
      <TransitionSection>
        <Container>
          <TransitionInner>
            <TransitionStat>
              The average job search after NYSC takes <em>3–6 months.</em>
            </TransitionStat>
            <TransitionStat>
              Your allawee stops. <em>Rent doesn&apos;t wait.</em>
            </TransitionStat>
            <TransitionStat>
              The corpers who land well didn&apos;t just job hunt — <em>they prepared.</em>
            </TransitionStat>
          </TransitionInner>
        </Container>
      </TransitionSection>

      {/* Jobs Teaser */}
      <TeaserSection>
        <Container>
          <SectionHeader>
            <div>
              <SectionLabel>Fresh listings</SectionLabel>
              <SectionTitle style={{ marginBottom: 0 }}>What&apos;s hiring for fresh graduates right now</SectionTitle>
            </div>
            <SeeAllLink href="/jobs">See all open roles →</SeeAllLink>
          </SectionHeader>

          <JobsGrid>
            {featuredJobs.map(job => (
              <JobCard key={job.id}>
                <JobRole>{job.role}</JobRole>
                <JobMeta>{job.company} · {job.location}</JobMeta>
                <SourceTag>via {job.source}</SourceTag>
              </JobCard>
            ))}
          </JobsGrid>
        </Container>
      </TeaserSection>

      {/* Skills Teaser */}
      <SkillsTeaserSection>
        <Container>
          <SectionHeader>
            <div>
              <SectionLabel>Skill up</SectionLabel>
              <SectionTitle style={{ marginBottom: 0 }}>Skills that pay in your first year out</SectionTitle>
            </div>
            <SeeAllLink href="/skills">See full skills guide →</SeeAllLink>
          </SectionHeader>

          <SkillsGrid>
            {featuredSkills.map(skill => (
              <SkillCard key={skill.name}>
                <SkillName>{skill.demandEmoji} {skill.name}</SkillName>
                <SkillIncome>{skill.incomeRange}</SkillIncome>
                <SkillTime>Job-ready in {skill.timeToReady}</SkillTime>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Container>
      </SkillsTeaserSection>

      {/* Financial Bridge */}
      <BridgeSection>
        <Container>
          <BridgeInner>
            <BridgeBox>
              <BridgeHeading>One more thing — the gap is real, but it&apos;s manageable.</BridgeHeading>
              <BridgeBody>
                Most corpers don&apos;t think about the financial gap until they&apos;re in it. 3 months without income,
                rent due, job search dragging. The ones who handled it well saved early — even small amounts
                during service.
              </BridgeBody>
              <StatCallout>
                <p>₦15,000 saved monthly for 6 months = ₦97,200 with Northquest by the time service ends.</p>
              </StatCallout>
              <BridgeCTA href="/protect">Protect Your Future →</BridgeCTA>
            </BridgeBox>
          </BridgeInner>
        </Container>
      </BridgeSection>

      {/* Testimonials */}
      <TestimonialsSection>
        <Container>
          <SectionLabel>From corpers who made it through</SectionLabel>
          <SectionTitle>Real talk from the other side</SectionTitle>

          <TestGrid>
            {testimonials.map((t, i) => (
              <TestCard key={i}>
                <TestQuote>&ldquo;{t.quote}&rdquo;</TestQuote>
                <TestAuthor>— {t.author}</TestAuthor>
              </TestCard>
            ))}
          </TestGrid>
        </Container>
      </TestimonialsSection>
    </>
  )
}
