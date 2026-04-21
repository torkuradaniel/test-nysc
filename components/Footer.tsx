'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const FooterEl = styled.footer`
  background: #2d0057;
  padding: 3rem 1.5rem 2rem;
`

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const Brand = styled.div``

const LogoText = styled.div`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;

  span {
    color: #f5a623;
  }
`

const Tagline = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
  max-width: 280px;
  line-height: 1.5;
`

const Links = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 2rem;
`

const FooterLink = styled(Link)`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.15s;

  &:hover {
    color: #f5a623;
  }
`

const Bottom = styled.div`
  border-top: 1px solid rgba(224, 208, 255, 0.15);
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    transition: color 0.15s;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`

export default function Footer() {
  return (
    <FooterEl>
      <Inner>
        <Top>
          <Brand>
            <LogoText>Northquest <span>Finance</span></LogoText>
            <Tagline>Your service year is an opportunity. Don&apos;t let it pass.</Tagline>
          </Brand>

          <Links aria-label="Footer navigation">
            <FooterLink href="/jobs">Find Jobs</FooterLink>
            <FooterLink href="/skills">Build Skills</FooterLink>
            <FooterLink href="/toolkit">Career Toolkit</FooterLink>
            <FooterLink href="/protect">Save Now</FooterLink>
          </Links>
        </Top>

        <Bottom>
          <div>
            © 2025 Northquest Finance ·{' '}
            <a href="https://www.northquestfinance.com" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
              www.northquestfinance.com
            </a>
          </div>
          <LegalLinks>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </LegalLinks>
        </Bottom>
      </Inner>
    </FooterEl>
  )
}
