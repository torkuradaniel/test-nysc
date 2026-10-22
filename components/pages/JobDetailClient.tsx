'use client'

import Link from 'next/link'
import styled from 'styled-components'
import type { Job } from '@/lib/data/jobs'
import EmailSignup from '@/components/EmailSignup'

const Page = styled.div`
  background: #f7f4ee;
`

const Header = styled.header`
  padding: clamp(4rem, 8vw, 7rem) 1.5rem;
  background: radial-gradient(circle at 82% 20%, rgba(141,86,171,.3), transparent 30%), #2d0057;
  color: #ffffff;
`

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: rgba(255,255,255,.7);
  font-size: .85rem;
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 2rem;

  &:hover { color: #f5a623; }
`

const Role = styled.h1`
  max-width: 760px;
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(2.4rem, 6vw, 4.6rem);
  line-height: 1.05;
  letter-spacing: -.05em;
  margin-bottom: 1rem;
`

const Company = styled.p`
  color: rgba(255,255,255,.76);
  font-size: 1.08rem;
`

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
  margin-top: 1.6rem;
`

const Chip = styled.span`
  padding: .45rem .75rem;
  border-radius: 999px;
  background: rgba(255,255,255,.1);
  color: rgba(255,255,255,.82);
  font-size: .78rem;
  font-weight: 700;
`

const Content = styled.main`
  padding: 4rem 1.5rem 6rem;
`

const Layout = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 820px) {
    grid-template-columns: minmax(0, 1fr) 280px;
    align-items: start;
  }
`

const Card = styled.article`
  background: #ffffff;
  border-radius: 20px;
  padding: clamp(1.6rem, 4vw, 2.7rem);
  box-shadow: 0 14px 42px rgba(45,0,87,.07);

  h2 {
    font-family: var(--font-syne), system-ui, sans-serif;
    color: #1a0a2e;
    font-size: 1.25rem;
    margin: 2rem 0 .8rem;
  }

  h2:first-child { margin-top: 0; }

  p, li { color: #64748b; font-size: .94rem; line-height: 1.7; }
  ul { padding-left: 1.2rem; display: grid; gap: .5rem; }
`

const ApplyCard = styled.aside`
  background: #2d0057;
  color: #ffffff;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 16px 40px rgba(45,0,87,.16);

  h2 { font-family: var(--font-syne), system-ui, sans-serif; font-size: 1.15rem; margin-bottom: .6rem; }
  p { color: rgba(255,255,255,.68); font-size: .85rem; line-height: 1.55; margin-bottom: 1.2rem; }
`

const ApplyButton = styled.a`
  display: block;
  padding: .85rem 1rem;
  border-radius: 10px;
  background: #f5a623;
  color: #1a0a2e;
  font-size: .88rem;
  font-weight: 800;
  text-align: center;
  text-decoration: none;
  transition: transform .15s ease;

  &:hover { transform: translateY(-2px); }
`

const Description = styled.div`
  white-space: pre-line;
  color: #64748b;
  font-size: .94rem;
  line-height: 1.7;
`

export default function JobDetailClient({ job }: { job: Job }) {
  return (
    <Page>
      <Header>
        <Container>
          <BackLink href="/jobs">Back to all jobs</BackLink>
          <Role>{job.role}</Role>
          <Company>{job.company}</Company>
          <Meta>
            <Chip>{job.location}</Chip>
            <Chip>{job.sector}</Chip>
            {job.experienceLevel && <Chip>{job.experienceLevel}</Chip>}
            {job.workType && <Chip>{job.workType}</Chip>}
          </Meta>
        </Container>
      </Header>

      <Content>
        <Container>
          <Layout>
            <Card>
              <h2>About the role</h2>
              <Description>{job.description || 'More information about this role will be available on the original listing.'}</Description>
            </Card>

            <ApplyCard>
              <h2>Ready to apply?</h2>
              <p>Review your CV, tailor it to this role, and apply through the original listing.</p>
              {job.sourceUrl ? (
                <ApplyButton href={job.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Apply on {job.source}
                </ApplyButton>
              ) : (
                <p>The application link has not been added yet.</p>
              )}
            </ApplyCard>
          </Layout>
        </Container>
      </Content>

      <EmailSignup />
    </Page>
  )
}
