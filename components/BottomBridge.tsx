'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Section = styled.section`
  background: #2d0057;
  padding: 4rem 1.5rem;
  text-align: center;
`

const Inner = styled.div`
  max-width: 640px;
  margin: 0 auto;
`

const GoldBar = styled.div`
  width: 3px;
  height: 48px;
  background: #f5a623;
  margin: 0 auto 1.75rem;
  border-radius: 2px;
`

const Heading = styled.p`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
`

const Body = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 2rem;
  line-height: 1.65;

  strong {
    color: #f5a623;
    font-weight: 600;
  }
`

const CTA = styled(Link)`
  display: inline-block;
  background: #f5a623;
  color: #1a0a2e;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4);
  }
`

interface Props {
  heading?: string
  body?: React.ReactNode
  cta?: string
}

export default function BottomBridge({
  heading = 'While you search, your money should be working.',
  body,
  cta = 'Start saving your allawee →',
}: Props) {
  return (
    <Section>
      <Inner>
        <GoldBar aria-hidden="true" />
        <Heading>{heading}</Heading>
        <Body>
          {body ?? (
            <>
              The average job search takes 4 months.{' '}
              <strong>₦30,000 saved monthly = ₦150,000 + interest</strong>{' '}
              by the time your first salary arrives.
            </>
          )}
        </Body>
        <CTA href="/protect">{cta}</CTA>
      </Inner>
    </Section>
  )
}
