'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

/* ─── Shared layout ─────────────────────────────────────────────── */

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

/* ─── Page Header ────────────────────────────────────────────────── */

const PageHeader = styled.section`
  background: #2d0057;
  padding: 5rem 1.5rem 4.5rem;
  position: relative;
  text-align: center;

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
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  line-height: 1.1;
`

const PageSub = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.65;
`

/* ─── The Gap ────────────────────────────────────────────────────── */

const GapSection = styled.section`
  background: #1a0a2e;
  padding: 5rem 1.5rem;
`

const GapInner = styled.div`
  max-width: 680px;
  margin: 0 auto;
`

const GapLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f5a623;
  margin-bottom: 1.5rem;
`

const GapLine = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(224, 208, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`

const GapDot = styled.div<{ $color?: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${p => p.$color || '#f5a623'};
  margin-top: 0.45rem;
  flex-shrink: 0;
`

const GapText = styled.p`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.4;

  em {
    font-style: normal;
    color: #f5a623;
  }
`

const GapConclusion = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ConclusionCard = styled.div<{ $positive?: boolean }>`
  background: ${p => p.$positive ? 'rgba(245, 166, 35, 0.08)' : 'rgba(255,255,255,0.04)'};
  border: 1px solid ${p => p.$positive ? 'rgba(245, 166, 35, 0.3)' : 'rgba(255,255,255,0.1)'};
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
`

const ConclusionTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
`

const ConclusionSub = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.55);
`

/* ─── Calculator ─────────────────────────────────────────────────── */

const CalcSection = styled.section`
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
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #1a0a2e;
  letter-spacing: -0.02em;
  margin-bottom: 2.5rem;
`

const CalcCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0d0ff;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 680px;
`

const CalcRow = styled.div`
  margin-bottom: 2rem;
`

const CalcLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  color: #1a0a2e;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
`

const CalcValue = styled.span`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #2d0057;
`

const Slider = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(
    to right,
    #6a0dad 0%,
    #6a0dad var(--pct),
    #e0d0ff var(--pct),
    #e0d0ff 100%
  );
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2d0057;
    border: 3px solid #f5a623;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2d0057;
    border: 3px solid #f5a623;
    cursor: pointer;
  }
`

const MonthButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

const MonthBtn = styled.button<{ $active: boolean }>`
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  border: 2px solid ${p => p.$active ? '#2d0057' : '#e0d0ff'};
  background: ${p => p.$active ? '#2d0057' : '#ffffff'};
  color: ${p => p.$active ? '#ffffff' : '#64748b'};
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: #2d0057;
    color: ${p => p.$active ? '#ffffff' : '#2d0057'};
  }
`

const CalcResult = styled.div`
  background: #2d0057;
  border-radius: 12px;
  padding: 1.75rem;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const ResultItem = styled.div``

const ResultLabel = styled.p`
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
  font-weight: 600;
`

const ResultValue = styled.p`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #f5a623;
`

const CalcDisclaimer = styled.p`
  font-size: 0.78rem;
  color: #64748b;
  margin-top: 1rem;
  line-height: 1.5;
`

/* ─── Plans ──────────────────────────────────────────────────────── */

const PlansSection = styled.section`
  background: #ffffff;
  padding: 5rem 1.5rem;
`

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 800px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

const PlanCard = styled.div<{ $featured?: boolean }>`
  border-radius: 14px;
  padding: 2rem;
  border: 2px solid ${p => p.$featured ? '#f5a623' : '#e0d0ff'};
  background: ${p => p.$featured ? '#2d0057' : '#f3eeff'};
  position: relative;
`

const PlanBadge = styled.span`
  position: absolute;
  top: -12px;
  left: 1.5rem;
  background: #f5a623;
  color: #1a0a2e;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.2rem 0.75rem;
  border-radius: 99px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

const PlanName = styled.h3<{ $featured?: boolean }>`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: ${p => p.$featured ? '#f5a623' : '#1a0a2e'};
  margin-bottom: 0.25rem;
`

const PlanTagline = styled.p<{ $featured?: boolean }>`
  font-size: 0.875rem;
  color: ${p => p.$featured ? 'rgba(255,255,255,0.65)' : '#64748b'};
  margin-bottom: 1.5rem;
`

const PlanRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const PlanRow = styled.div<{ $featured?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.875rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${p => p.$featured ? 'rgba(255,255,255,0.1)' : '#e0d0ff'};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`

const PlanRowLabel = styled.span<{ $featured?: boolean }>`
  color: ${p => p.$featured ? 'rgba(255,255,255,0.6)' : '#64748b'};
`

const PlanRowValue = styled.span<{ $featured?: boolean }>`
  font-weight: 600;
  color: ${p => p.$featured ? '#ffffff' : '#1a0a2e'};
  text-align: right;
`

/* ─── Autosave ───────────────────────────────────────────────────── */

const AutosaveSection = styled.section`
  background: #f3eeff;
  padding: 4rem 1.5rem;
`

const AutosaveBox = styled.div`
  max-width: 680px;
  background: #ffffff;
  border: 1px solid #e0d0ff;
  border-radius: 14px;
  padding: 2.5rem;
  border-left: 4px solid #f5a623;
`

const AutosaveTitle = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a0a2e;
  margin-bottom: 0.75rem;
`

const AutosaveText = styled.p`
  font-size: 1rem;
  color: #64748b;
  line-height: 1.65;

  em {
    font-style: normal;
    color: #2d0057;
    font-weight: 600;
  }
`

/* ─── Testimonials ───────────────────────────────────────────────── */

const TestimonialsSection = styled.section`
  background: #2d0057;
  padding: 5rem 1.5rem;
`

const TestGrid = styled.div`
  max-width: 680px;

  blockquote {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(224, 208, 255, 0.15);
    border-left: 4px solid #f5a623;
    border-radius: 12px;
    padding: 1.75rem;
    margin: 0 0 1.25rem;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    font-style: italic;
    margin-bottom: 0.75rem;
  }

  cite {
    font-size: 0.875rem;
    font-weight: 600;
    color: #f5a623;
    font-style: normal;
  }
`

const TestTitle = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.02em;
  margin-bottom: 2rem;
`

/* ─── CTA ────────────────────────────────────────────────────────── */

const CTASection = styled.section`
  background: #f3eeff;
  padding: 5rem 1.5rem;
  text-align: center;
`

const CTAInner = styled.div`
  max-width: 560px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #2d0057;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  line-height: 1.2;
`

const CTASub = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`

const PrimaryBtn = styled.a`
  display: inline-block;
  background: #f5a623;
  color: #1a0a2e;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 1rem 2.25rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.15s, box-shadow 0.15s;
  margin-bottom: 1rem;
  display: block;
  max-width: 280px;
  margin: 0 auto 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 166, 35, 0.4);
  }
`

const SecondaryBtn = styled.a`
  display: inline-block;
  color: #2d0057;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border-bottom: 2px solid #e0d0ff;
  transition: border-color 0.15s;

  &:hover {
    border-color: #2d0057;
  }
`

const TrustStrip = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2.5rem;
`

const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;

  span:first-child {
    color: #6a0dad;
  }
`

/* ─── Calculator logic ───────────────────────────────────────────── */

const RATE = 0.24
const MIN_MONTHLY = 5000
const MAX_MONTHLY = 100000
const STEP = 1000

function formatNaira(n: number): string {
  return '₦' + Math.round(n).toLocaleString('en-NG')
}

function calcSavings(monthly: number, months: number) {
  const principal = monthly * months
  const interest = principal * RATE * (months / 12)
  return { principal, interest, total: principal + interest }
}

/* ─── Component ──────────────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "I locked ₦20k a month for 6 months. By the time I got my first job offer, I had ₦130k sitting there. Paid my first 2 months' rent without stress.",
    author: 'Femi, Lagos',
  },
  {
    quote:
      "I didn't believe a small amount would matter. Then I saw the interest. Started with ₦10k a month in March, had ₦70k ready by passing out parade.",
    author: 'Adaeze, Port Harcourt',
  },
]

export default function ProtectClient() {
  const [monthly, setMonthly] = useState(15000)
  const [months, setMonths] = useState(6)

  const { principal, interest, total } = calcSavings(monthly, months)
  const sliderPct = ((monthly - MIN_MONTHLY) / (MAX_MONTHLY - MIN_MONTHLY)) * 100

  return (
    <>
      <PageHeader>
        <Container>
          <PageHeadline>Protect your future.</PageHeadline>
          <PageSub>
            The gap between your last allawee and your first salary is real. The corpers who landed well
            saved early. Here&apos;s how.
          </PageSub>
        </Container>
      </PageHeader>

      {/* The Gap */}
      <GapSection>
        <Container>
          <GapInner>
            <GapLabel>The hard truth</GapLabel>

            <GapLine>
              <GapDot />
              <GapText>Your allawee stops at passing out parade.</GapText>
            </GapLine>
            <GapLine>
              <GapDot />
              <GapText>Average job search after NYSC: <em>4 months.</em></GapText>
            </GapLine>
            <GapLine>
              <GapDot $color="#e0d0ff" />
              <GapText>Rent in Lagos: <em>₦80,000–₦150,000/month.</em></GapText>
            </GapLine>
            <GapLine>
              <GapDot $color="#e0d0ff" />
              <GapText>Feeding: <em>₦30,000–₦50,000/month.</em></GapText>
            </GapLine>

            <GapConclusion>
              <ConclusionCard>
                <ConclusionTitle>Without savings</ConclusionTitle>
                <ConclusionSub>You borrow. From family. From debt.</ConclusionSub>
              </ConclusionCard>
              <ConclusionCard $positive>
                <ConclusionTitle>With savings</ConclusionTitle>
                <ConclusionSub>You choose — negotiate better, wait for the right offer.</ConclusionSub>
              </ConclusionCard>
            </GapConclusion>
          </GapInner>
        </Container>
      </GapSection>

      {/* Calculator */}
      <CalcSection>
        <Container>
          <SectionLabel>Run the numbers</SectionLabel>
          <SectionTitle>See what your allawee can become</SectionTitle>

          <CalcCard>
            <CalcRow>
              <CalcLabel htmlFor="monthly-slider">
                Monthly savings
                <CalcValue>{formatNaira(monthly)}</CalcValue>
              </CalcLabel>
              <Slider
                id="monthly-slider"
                type="range"
                min={MIN_MONTHLY}
                max={MAX_MONTHLY}
                step={STEP}
                value={monthly}
                onChange={e => setMonthly(Number(e.target.value))}
                style={{ '--pct': `${sliderPct}%` } as React.CSSProperties}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.4rem', fontSize: '0.78rem', color: '#64748b' }}>
                <span>₦5,000</span>
                <span>₦100,000</span>
              </div>
            </CalcRow>

            <CalcRow>
              <CalcLabel as="div">Duration</CalcLabel>
              <MonthButtons>
                {[3, 6, 9, 12].map(m => (
                  <MonthBtn key={m} $active={months === m} onClick={() => setMonths(m)}>
                    {m} months
                  </MonthBtn>
                ))}
              </MonthButtons>
            </CalcRow>

            <CalcResult>
              <ResultItem>
                <ResultLabel>You save</ResultLabel>
                <ResultValue>{formatNaira(principal)}</ResultValue>
              </ResultItem>
              <ResultItem>
                <ResultLabel>Interest earned</ResultLabel>
                <ResultValue>{formatNaira(interest)}</ResultValue>
              </ResultItem>
              <ResultItem>
                <ResultLabel>Total at end</ResultLabel>
                <ResultValue>{formatNaira(total)}</ResultValue>
              </ResultItem>
            </CalcResult>

            <CalcDisclaimer>
              Interest calculated at up to 24% p.a. for Q-Lock plans. Actual rate depends on plan type and
              duration. This is an estimate, not a guarantee.
            </CalcDisclaimer>
          </CalcCard>
        </Container>
      </CalcSection>

      {/* Plans */}
      <PlansSection>
        <Container>
          <SectionLabel>Choose your plan</SectionLabel>
          <SectionTitle>Q-Lock vs Q-Flex — what&apos;s right for you?</SectionTitle>

          <PlansGrid>
            <PlanCard $featured>
              <PlanBadge>Best for corpers</PlanBadge>
              <PlanName $featured>Q-Lock</PlanName>
              <PlanTagline $featured>Saving toward a goal — rent, transition buffer, course fees</PlanTagline>
              <PlanRows>
                <PlanRow $featured>
                  <PlanRowLabel $featured>Interest rate</PlanRowLabel>
                  <PlanRowValue $featured>Up to 24% p.a.</PlanRowValue>
                </PlanRow>
                <PlanRow $featured>
                  <PlanRowLabel $featured>Withdrawals</PlanRowLabel>
                  <PlanRowValue $featured>Fixed term — earn upfront</PlanRowValue>
                </PlanRow>
                <PlanRow $featured>
                  <PlanRowLabel $featured>Minimum</PlanRowLabel>
                  <PlanRowValue $featured>₦5,000</PlanRowValue>
                </PlanRow>
              </PlanRows>
            </PlanCard>

            <PlanCard>
              <PlanName>Q-Flex</PlanName>
              <PlanTagline>Flexible savings — access whenever you need</PlanTagline>
              <PlanRows>
                <PlanRow>
                  <PlanRowLabel>Interest rate</PlanRowLabel>
                  <PlanRowValue>Competitive rate</PlanRowValue>
                </PlanRow>
                <PlanRow>
                  <PlanRowLabel>Withdrawals</PlanRowLabel>
                  <PlanRowValue>Anytime, no penalty</PlanRowValue>
                </PlanRow>
                <PlanRow>
                  <PlanRowLabel>Minimum</PlanRowLabel>
                  <PlanRowValue>₦5,000</PlanRowValue>
                </PlanRow>
              </PlanRows>
            </PlanCard>
          </PlansGrid>
        </Container>
      </PlansSection>

      {/* Autosave */}
      <AutosaveSection>
        <Container>
          <AutosaveBox>
            <AutosaveTitle>⚡ Set it and forget it with Autosave</AutosaveTitle>
            <AutosaveText>
              Autosave pulls from your account on a date you choose —{' '}
              <em>like your allawee payment date.</em>{' '}
              You won&apos;t spend what you don&apos;t see. Set it up once and let it run through service.
            </AutosaveText>
          </AutosaveBox>
        </Container>
      </AutosaveSection>

      {/* Testimonials */}
      <TestimonialsSection>
        <Container>
          <TestTitle>Corpers who did this. What they said.</TestTitle>
          <TestGrid>
            {testimonials.map((t, i) => (
              <blockquote key={i}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <cite>— {t.author}</cite>
              </blockquote>
            ))}
          </TestGrid>
        </Container>
      </TestimonialsSection>

      {/* Primary CTA */}
      <CTASection>
        <CTAInner>
          <CTATitle>Start today. Your future self will thank you.</CTATitle>
          <CTASub>
            Minimum ₦5,000. Takes 3 minutes to set up. Earns while you serve.
          </CTASub>

          <PrimaryBtn href="#">Start Saving Today →</PrimaryBtn>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <SecondaryBtn href="#">Download the App</SecondaryBtn>
          </div>

          <TrustStrip>
            <TrustItem>
              <span>✓</span>
              <span>CBN-compliant</span>
            </TrustItem>
            <TrustItem>
              <span>✓</span>
              <span>BVN-secured</span>
            </TrustItem>
            <TrustItem>
              <span>✓</span>
              <span>4.8★ App Store</span>
            </TrustItem>
            <TrustItem>
              <span>✓</span>
              <span>5,000+ corpers saving</span>
            </TrustItem>
          </TrustStrip>
        </CTAInner>
      </CTASection>
    </>
  )
}
