'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import type { Job } from '@/lib/data/jobs'
import BottomBridge from '@/components/BottomBridge'
import EmailSignup from '@/components/EmailSignup'

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

/* ─── Filter Bar ─────────────────────────────────────────────────── */

const FilterSection = styled.section`
  background: #ffffff;
  padding: 2rem 1.5rem .5rem;
`

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  flex: 1 1 180px;
  max-width: 280px;
`

const FilterLabel = styled.label`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
`

const FilterSelect = styled.select`
  width: 100%;
  min-height: 52px;
  padding: 0.8rem 3rem 0.8rem 1rem;
  border: 0;
  border-radius: 12px;
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  color: #1a0a2e;
  background: #f3eeff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3 6L8 11L13 6' stroke='%232D0057' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  box-shadow: inset 0 0 0 1px rgba(106, 13, 173, 0);
  cursor: pointer;
  transition: background-color .15s ease, box-shadow .15s ease;

  &:focus {
    outline: none;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(106, 13, 173, .14), inset 0 0 0 1px #6a0dad;
  }

  &:hover:not(:focus) {
    background-color: #eee5f8;
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
  background: #f7f4ee;
  border: 0;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: transform .2s ease, box-shadow .2s ease;

  &:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(45,0,87,.08); }
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
  background: #f7f4ee;
  border: 0;
  padding: 0.2rem 0.6rem;
  border-radius: 99px;
`

const ViewRoleLink = styled(Link)`
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
  border: 0;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 10px 32px rgba(45,0,87,.06);
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

/* ─── Component ──────────────────────────────────────────────────── */

export default function JobsClient({ jobs }: { jobs: Job[] }) {
  const [sector, setSector] = useState('All')
  const [location, setLocation] = useState('All')
  const [source, setSource] = useState('All')

  const sectors = useMemo(() => ['All', ...new Set(jobs.map(job => job.sector))], [jobs])
  const locations = useMemo(() => ['All', ...new Set(jobs.map(job => job.location))], [jobs])
  const sources = useMemo(() => ['All', ...new Set(jobs.map(job => job.source))], [jobs])
  const lastUpdated = jobs[0]?.datePosted
    ? new Intl.DateTimeFormat('en-NG', { dateStyle: 'long' }).format(new Date(`${jobs[0].datePosted}T00:00:00`))
    : null

  const filtered = useMemo<Job[]>(() => {
    return jobs.filter(j => {
      if (sector !== 'All' && j.sector !== sector) return false
      if (location !== 'All' && j.location !== location) return false
      if (source !== 'All' && j.source !== source) return false
      return true
    })
  }, [jobs, sector, location, source])

  return (
    <>
      <PageHeader>
        <Container>
          <PageHeadline>Find your first job after NYSC</PageHeadline>
          <PageSub>
            Curated entry-level roles updated weekly.
          </PageSub>
        </Container>
      </PageHeader>

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
            {lastUpdated ? <>Last updated: <span>{lastUpdated}</span></> : 'New opportunities are coming soon.'}
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
                  <ViewRoleLink href={`/jobs/${job.id}`}>
                    View Role
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
                <TipLink href={tip.link}>See toolkit</TipLink>
              </TipCard>
            ))}
          </TipsGrid>
        </Container>
      </TipsSection>

      <EmailSignup />
      <BottomBridge />
    </>
  )
}
