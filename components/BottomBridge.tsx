'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Section = styled.section`
  background: #261334;
  padding: 6rem 1.5rem;
`

const Inner = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
`

const GoldBar = styled.div`
  width: 72px;
  height: 3px;
  background: #e5a82f;
  margin: 0 auto 2rem;
  border-radius: 2px;
`

const Heading = styled.p`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
`

const Body = styled.p`
  font-size: 1.05rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
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
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(229, 168, 47, 0.18);
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
  cta = 'Start saving your allawee',
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
