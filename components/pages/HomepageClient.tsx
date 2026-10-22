'use client'

import React from 'react'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import type { Job } from '@/lib/data/jobs'
import { skills } from '@/lib/data/skills'
import EmailSignup from '@/components/EmailSignup'

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
  background:
    radial-gradient(circle at 78% 22%, rgba(141, 86, 171, .28), transparent 32%),
    linear-gradient(145deg, #24112f 0%, #341445 100%);
  padding: clamp(5rem, 10vw, 8.5rem) 1.5rem 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 420px;
    height: 420px;
    left: auto;
    right: -180px;
    top: -170px;
    border-radius: 50%;
    border: 80px solid rgba(229, 168, 47, .08);
  }
`

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  animation: ${fadeUp} 0.6s ease both;
`

const HeroHeadline = styled.h1`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(3.5rem, 9vw, 7.4rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 0.93;
  letter-spacing: -0.065em;
  margin-bottom: 2rem;
  max-width: 920px;
  margin-left: auto;
  margin-right: auto;
`

const HeroSub = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.65;
  max-width: 610px;
  margin: 0 auto 2.75rem;
`

/* ─── Three Pillars ──────────────────────────────────────────────── */

const PillarsSection = styled.section`
  background: #f7f4ee;
  padding: 7rem 1.5rem;
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
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 700;
  color: #1a0a2e;
  letter-spacing: -0.02em;
  margin-bottom: 4rem;
  max-width: 720px;
  line-height: 1.2;
`

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const PillarCard = styled(Link)`
  display: block;
  background: #ffffff;
  border: 0;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 40px rgba(38, 19, 52, .07);
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 48px rgba(38, 19, 52, .12);
  }

`

const PillarIcon = styled.div`
  font-size: 2rem;
  color: #6a0dad;
  line-height: 1;
  margin-bottom: 2rem;
`

const PillarTitle = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.35rem;
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
  text-decoration: none;
`

/* ─── Honest Transition ──────────────────────────────────────────── */

const TransitionSection = styled.section`
  background: linear-gradient(135deg, #e7ab34, #f1c665);
  padding: 6rem 1.5rem;
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
  max-width: 1000px;
  margin: 0;
`

const TransitionStat = styled.p`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: #261334;
  line-height: 1.35;
  margin-bottom: 1rem;

  &:not(:last-child) {
    padding-bottom: 1rem;
    opacity: .94;
  }

  em {
    font-style: normal;
    color: #ffffff;
  }
`

/* ─── Jobs Teaser ────────────────────────────────────────────────── */

const TeaserSection = styled.section`
  background: #ffffff;
  padding: 7rem 1.5rem;
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
  background: #f7f4ee;
  border: 0;
  border-radius: 14px;
  padding: 1.5rem;
  transition: transform .2s ease, background .2s ease;

  &:hover { transform: translateY(-3px); background: #f3eee7; }
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
  background: #f3eee7;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
`

/* ─── Skills Teaser ──────────────────────────────────────────────── */

const SkillsTeaserSection = styled.section`
  background: #261334;
  padding: 7rem 1.5rem;

  ${SectionLabel} { color: #e5a82f; }
  ${SectionTitle} { color: #ffffff; }
  ${SeeAllLink} { color: #e5a82f; }
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
  background: rgba(255,255,255,.07);
  border: 0;
  border-radius: 14px;
  padding: 2rem;
`

const SkillName = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`

const SkillIncome = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #e5a82f;
  margin-bottom: 0.25rem;
`

const SkillTime = styled.p`
  font-size: 0.8rem;
  color: rgba(255,255,255,.58);
`

/* ─── Financial Bridge ───────────────────────────────────────────── */

const BridgeSection = styled.section`
  background: #f7f4ee;
  padding: 7rem 1.5rem;
`

const BridgeInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const BridgeBox = styled.div`
  display: grid;
  gap: 2.5rem;
  background:
    radial-gradient(circle at 95% 10%, rgba(229, 168, 47, .22), transparent 34%),
    #2d0057;
  border-radius: 24px;
  padding: clamp(2rem, 5vw, 4rem);
  position: relative;
  overflow: hidden;

  @media (min-width: 800px) {
    grid-template-columns: minmax(0, 1fr) minmax(320px, .8fr);
    align-items: center;
  }
`

const BridgeCopy = styled.div`
  max-width: 560px;
`

const BridgeHeading = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.8rem, 3.6vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.12;
  letter-spacing: -.035em;
`

const BridgeBody = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.65;
  margin-bottom: 2rem;
`

const StatCallout = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 24px 70px rgba(15, 3, 25, .28);
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 8px;
    margin-top: 1.5rem;
    border-radius: 999px;
    background: linear-gradient(90deg, #f5a623 0 76%, #eee8f1 76%);
  }

  small {
    display: block;
    color: #786e7e;
    font-size: .75rem;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    margin-bottom: .55rem;
  }

  strong {
    display: block;
    color: #2d0057;
    font-family: var(--font-syne), system-ui, sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1;
    letter-spacing: -.04em;
    margin-bottom: .6rem;
  }

  p {
    color: #64748b;
    font-size: .9rem;
    line-height: 1.5;
  }
`

const BridgeCTA = styled(Link)`
  display: inline-block;
  background: #f5a623;
  color: #1a0a2e;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.875rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4);
  }
`

/* ─── Testimonials ───────────────────────────────────────────────── */

const TestimonialsSection = styled.section`
  background: #ffffff;
  padding: 7rem 1.5rem;
`

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TestCard = styled.blockquote`
  background: #ffffff;
  border: 0;
  border-radius: 16px;
  padding: 2rem;
  background: #f7f4ee;
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

const featuredSkills = skills.slice(0, 3)

const testimonials = [
  {
    quote: "I didn't have a job for 4 months after NYSC. The savings I built during service kept me really helped me.",
    author: 'Tolu, Lagos',
  },
  {
    quote: "I wish someone told me prepare for after NYSC. Save, plan to get a job etc",
    author: 'Chisom, Abuja',
  },
]

export default function HomepageClient({ jobs: featuredJobs }: { jobs: Job[] }) {
  return (
    <>
      {/* Hero */}
      <HeroSection>
        <HeroInner>
          <HeroHeadline>What next after NYSC?</HeroHeadline>
          <HeroSub>
            NYSC will end. Then it&apos;s time to land well. Find the right job, build skills employers
            actually want, and make sure you&apos;re financially ready for what comes next.
          </HeroSub>
        </HeroInner>
      </HeroSection>

      {/* Three Pillars */}
      <PillarsSection id="pillars">
        <Container>
          <SectionTitle>Three things you need to have in place</SectionTitle>

          <PillarsGrid>
             <PillarCard href="/protect">
              <PillarIcon aria-hidden="true"><i className="fi fi-sr-shield-check" /></PillarIcon>
              <PillarTitle>Protect Your Future</PillarTitle>
              <PillarText>
                Ensure you have funds rely and fallback on for essential needs. Here&apos;s how corpers who
                landed well handled it.
              </PillarText>
              <PillarArrow>Learn more</PillarArrow>
            </PillarCard>

            <PillarCard href="/skills">
              <PillarIcon aria-hidden="true"><i className="fi fi-sr-book-open-cover" /></PillarIcon>
              <PillarTitle>Build Skills</PillarTitle>
              <PillarText>
                Some skills can be learned in 3 months and earn you atleast NGN300k/month. Find your path now.
              </PillarText>
              <PillarArrow>See in-demand skills</PillarArrow>
            </PillarCard>

            <PillarCard href="/jobs">
              <PillarIcon aria-hidden="true"><i className="fi fi-sr-search" /></PillarIcon>
              <PillarTitle>Find Work</PillarTitle>
              <PillarText>
                The job market is competitive but easy with the right skills. See what&apos;s hiring and what employers
                are looking for.
              </PillarText>
              <PillarArrow>Browse open roles </PillarArrow>
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
              The corpers who got great jobs were prepared with the skills.</TransitionStat>
          </TransitionInner>
        </Container>
      </TransitionSection>

      {/* Jobs Teaser */}
      <TeaserSection>
        <Container>
          <SectionHeader>
            <div>
              <SectionTitle style={{ marginBottom: 0 }}>See who&apos;s hiring right now</SectionTitle>
            </div>
            <SeeAllLink href="/jobs">See all open roles</SeeAllLink>
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
            <SeeAllLink href="/skills">See full skills guide</SeeAllLink>
          </SectionHeader>

          <SkillsGrid>
            {featuredSkills.map(skill => (
              <SkillCard key={skill.name}>
                <SkillName>{skill.name}</SkillName>
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
              <BridgeCopy>
                <BridgeHeading>Make the months after NYSC less stressful.</BridgeHeading>
                <BridgeBody>
                  Set aside a fixed amount while your allawee is still coming in. Small, automatic deposits can give you room to search for the right role instead of taking the first offer out of pressure.
                </BridgeBody>
                <BridgeCTA href="/protect">Plan your savings</BridgeCTA>
              </BridgeCopy>
              <StatCallout>
                <small>Six-month projection</small>
                <strong>₦315,750</strong>
                <p>Saving ₦50,000 each month, including projected interest.</p>
              </StatCallout>
            </BridgeBox>
          </BridgeInner>
        </Container>
      </BridgeSection>

      {/* Testimonials */}
      <TestimonialsSection>
        <Container>
          <SectionTitle>Corpers who made it to the other side</SectionTitle>

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

      <EmailSignup />
    </>
  )
}
