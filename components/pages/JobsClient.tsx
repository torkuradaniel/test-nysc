'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { jobs, type Job } from '@/lib/data/jobs'
import BottomBridge from '@/components/BottomBridge'

/* ─── Shared layout ─────────────────────────────────────────────── */

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

/* ─── Page Header ────────────────────────────────────────────────── */

const PageHeader = styled.section`
  background: #2d0057;
  padding: 4rem 1.5rem 3.5rem;
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

const PageHeadline = styled.h1`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
  margin-bottom: 0.75rem;
  line-height: 1.1;
`

const PageSub = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 560px;
  line-height: 1.6;
`

/* ─── Market Context ─────────────────────────────────────────────── */

const ContextSection = styled.section`
  background: #f3eeff;
  padding: 3rem 1.5rem;
`

const ContextGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StatCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0d0ff;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
`

const StatValue = styled.div`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: #2d0057;
  margin-bottom: 0.25rem;
`

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #64748b;
`

const ContextCaption = styled.p`
  font-size: 0.875rem;
  color: #64748b;
  text-align: center;
  font-style: italic;
`

/* ─── Filter Bar ─────────────────────────────────────────────────── */

const FilterSection = styled.section`
  background: #ffffff;
  padding: 2rem 1.5rem 0;
  border-bottom: 1px solid #e0d0ff;
`

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 1.5rem;
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

const FilterLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #64748b;
`

const FilterSelect = styled.select`
  padding: 0.45rem 0.75rem;
  border: 1px solid #e0d0ff;
  border-radius: 6px;
  font-size: 0.9rem;
  color: #1a0a2e;
  background: #ffffff;
  cursor: pointer;
  min-width: 140px;

  &:focus {
    outline: 2px solid #6a0dad;
    outline-offset: 1px;
  }
`

/* ─── Listings ───────────────────────────────────────────────────── */

const ListingsSection = styled.section`
  background: #ffffff;
  padding: 2.5rem 1.5rem 4rem;
`

const UpdatedTag = styled.p`
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 1.5rem;

  span {
    font-weight: 600;
    color: #6a0dad;
  }
`

const ListingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const JobCard = styled.article`
  background: #f3eeff;
  border: 1px solid #e0d0ff;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const JobRole = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1a0a2e;
`

const JobCompany = styled.p`
  font-size: 0.9rem;
  color: #64748b;
`

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`

const SourceBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #6a0dad;
  background: #e0d0ff;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
`

const LocationBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  background: #f3eeff;
  border: 1px solid #e0d0ff;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
`

const ViewRoleLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #6a0dad;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #64748b;

  p {
    font-size: 1rem;
  }
`

/* ─── What Employers Want ────────────────────────────────────────── */

const TipsSection = styled.section`
  background: #f3eeff;
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
  margin-bottom: 2.5rem;
`

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TipCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0d0ff;
  border-radius: 10px;
  padding: 1.5rem;
  border-left: 4px solid #f5a623;
`

const TipNumber = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  color: #6a0dad;
  background: #e0d0ff;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  margin-bottom: 0.75rem;
`

const TipTitle = styled.h3`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1a0a2e;
  margin-bottom: 0.5rem;
`

const TipText = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
`

const TipLink = styled(Link)`
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #6a0dad;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

/* ─── Data ───────────────────────────────────────────────────────── */

const tips = [
  {
    title: 'Frame your NYSC year as work experience',
    text: "Don't write 'NYSC' and stop there. Describe what you actually did — the skills you used, problems you solved, people you managed.",
    link: '/toolkit',
  },
  {
    title: 'What a Nigerian CV should and should not include',
    text: 'No photos, no date of birth, no WAEC results if you have a degree. One page for under 3 years experience. PDF, always.',
    link: '/toolkit',
  },
  {
    title: 'LinkedIn basics that get you responses',
    text: 'A profile without a headshot gets 14× fewer clicks. Your headline should say what you do, not your last job title.',
    link: '/toolkit',
  },
  {
    title: "What '2 years experience required' actually means",
    text: "It's a wishlist, not a filter. Apply anyway. What they want is proof you can do the job — and your NYSC year can be that proof.",
    link: '/toolkit',
  },
]

const sectors = ['All', 'Tech', 'Finance', 'FMCG', 'NGO', 'Consulting', 'Marketing']
const locations = ['All', 'Lagos', 'Abuja', 'Port Harcourt', 'Remote']
const sources = ['All', 'Jobberman', 'MyJobMag', 'LinkedIn']

/* ─── Component ──────────────────────────────────────────────────── */

export default function JobsClient() {
  const [sector, setSector] = useState('All')
  const [location, setLocation] = useState('All')
  const [source, setSource] = useState('All')

  const filtered = useMemo<Job[]>(() => {
    return jobs.filter(j => {
      if (sector !== 'All' && j.sector !== sector) return false
      if (location !== 'All' && j.location !== location) return false
      if (source !== 'All' && j.source !== source) return false
      return true
    })
  }, [sector, location, source])

  return (
    <>
      <PageHeader>
        <Container>
          <PageHeadline>Find your first job after NYSC</PageHeadline>
          <PageSub>
            Curated entry-level roles updated weekly. No noise — just opportunities worth your time.
          </PageSub>
        </Container>
      </PageHeader>

      <ContextSection>
        <Container>
          <ContextGrid>
            <StatCard>
              <StatValue>3–6 months</StatValue>
              <StatLabel>Average job search duration after NYSC</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>Lagos, Abuja, PH</StatValue>
              <StatLabel>Where 70%+ of graduate roles are concentrated</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>Tech, Finance & FMCG</StatValue>
              <StatLabel>Top 3 sectors hiring entry-level</StatLabel>
            </StatCard>
          </ContextGrid>
          <ContextCaption>Knowing what the market looks like is half the battle.</ContextCaption>
        </Container>
      </ContextSection>

      <FilterSection>
        <Container>
          <FilterRow>
            <FilterGroup>
              <FilterLabel htmlFor="sector-filter">Sector</FilterLabel>
              <FilterSelect
                id="sector-filter"
                value={sector}
                onChange={e => setSector(e.target.value)}
              >
                {sectors.map(s => <option key={s}>{s}</option>)}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel htmlFor="location-filter">Location</FilterLabel>
              <FilterSelect
                id="location-filter"
                value={location}
                onChange={e => setLocation(e.target.value)}
              >
                {locations.map(l => <option key={l}>{l}</option>)}
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel htmlFor="source-filter">Source</FilterLabel>
              <FilterSelect
                id="source-filter"
                value={source}
                onChange={e => setSource(e.target.value)}
              >
                {sources.map(s => <option key={s}>{s}</option>)}
              </FilterSelect>
            </FilterGroup>
          </FilterRow>
        </Container>
      </FilterSection>

      <ListingsSection>
        <Container>
          <UpdatedTag>
            Last updated: <span>January 14, 2025</span>
          </UpdatedTag>

          {filtered.length === 0 ? (
            <EmptyState>
              <p>No roles match your filters. Try broadening your search.</p>
            </EmptyState>
          ) : (
            <ListingsGrid>
              {filtered.map(job => (
                <JobCard key={job.id}>
                  <JobRole>{job.role}</JobRole>
                  <JobCompany>{job.company}</JobCompany>
                  <JobMeta>
                    <LocationBadge>{job.location}</LocationBadge>
                    <SourceBadge>via {job.source}</SourceBadge>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{job.datePosted}</span>
                  </JobMeta>
                  <ViewRoleLink href={job.sourceUrl} target="_blank" rel="noopener noreferrer">
                    View Role →
                  </ViewRoleLink>
                </JobCard>
              ))}
            </ListingsGrid>
          )}
        </Container>
      </ListingsSection>

      <TipsSection>
        <Container>
          <SectionLabel>Career edge</SectionLabel>
          <SectionTitle>What Nigerian employers actually want from fresh graduates</SectionTitle>

          <TipsGrid>
            {tips.map((tip, i) => (
              <TipCard key={i}>
                <TipNumber>{i + 1}</TipNumber>
                <TipTitle>{tip.title}</TipTitle>
                <TipText>{tip.text}</TipText>
                <TipLink href={tip.link}>See toolkit →</TipLink>
              </TipCard>
            ))}
          </TipsGrid>
        </Container>
      </TipsSection>

      <BottomBridge />
    </>
  )
}
