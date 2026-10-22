'use client'

import React, { useState } from 'react'
import styled from 'styled-components'

/* ─── Shared layout ─────────────────────────────────────────────── */

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

/* ─── Page Header ────────────────────────────────────────────────── */

const PageHeader = styled.section`
  background: radial-gradient(circle at 82% 20%, rgba(141,86,171,.3), transparent 30%), #2d0057;
  padding: 7rem 1.5rem 5.5rem;
  position: relative;

`

const PageHeadline = styled.h1`
  font-family: var(--font-syne), system-ui, sans-serif;
  font-size: clamp(2.8rem, 7vw, 5rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.06em;
  margin-bottom: 1rem;
  line-height: 1.1;
`

const PageSub = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 580px;
  margin: 0;
  line-height: 1.65;
`

/* ─── The Gap ────────────────────────────────────────────────────── */

const GapSection = styled.section`
  background: #21112c;
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
  padding: .7rem 0;
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

/* ─── Calculator ─────────────────────────────────────────────────── */

const CalculatorArea = styled.div`
  margin-top: 2rem;
  background: #f7f4ee;
  border-radius: 22px;
  padding: clamp(1.5rem, 4vw, 3rem);
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
  border: 0;
  border-radius: 20px;
  padding: 2.5rem;
  max-width: none;
  box-shadow: 0 18px 50px rgba(45,0,87,.08);
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
  border: 0;
  background: ${p => p.$active ? '#2d0057' : '#f3eeff'};
  color: ${p => p.$active ? '#ffffff' : '#64748b'};
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${p => p.$active ? '#2d0057' : '#e9dcf1'};
    color: ${p => p.$active ? '#ffffff' : '#2d0057'};
  }
`

const CalcResult = styled.div`
  background: linear-gradient(135deg, #2d0057, #4a1764);
  border-radius: 16px;
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
  max-width: 1100px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const PlanCard = styled.button<{ $featured?: boolean; $selected: boolean }>`
  width: 100%;
  font: inherit;
  text-align: left;
  border-radius: 18px;
  padding: 2rem;
  border: 0;
  background: ${p => p.$featured ? '#2d0057' : '#f3eeff'};
  position: relative;
  box-shadow: ${p => p.$selected
    ? '0 0 0 3px #f5a623, 0 18px 50px rgba(45,0,87,.16)'
    : p.$featured ? '0 18px 50px rgba(45,0,87,.18)' : 'none'};
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease;

  &:hover { transform: translateY(-3px); }
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
  padding: .7rem .8rem;
  border-radius: 8px;
  background: ${p => p.$featured ? 'rgba(255,255,255,.055)' : 'rgba(255,255,255,.55)'};

  &:last-child {
    padding-bottom: .7rem;
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

/* ─── Testimonials ───────────────────────────────────────────────── */

const TestimonialsSection = styled.section`
  background: #2d0057;
  padding: 5rem 1.5rem;
`

const TestGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  blockquote {
    background: rgba(255, 255, 255, 0.07);
    border: 0;
    border-radius: 16px;
    padding: 1.75rem;
    margin: 0;
    height: 100%;
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
  text-align: center;
`

/* ─── CTA ────────────────────────────────────────────────────────── */

const CTASection = styled.section`
  background: #f7f4ee;
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

  i {
    color: #6a0dad;
  }
`

/* ─── Calculator logic ───────────────────────────────────────────── */

const MIN_MONTHLY = 1000
const MAX_MONTHLY = 100000
const STEP = 1000

function formatNaira(n: number): string {
  return '₦' + Math.round(n).toLocaleString('en-NG')
}

function calcSavings(monthly: number, months: number, rate: number) {
  const principal = monthly * months
  const interest = principal * rate * (months / 12)
  return { principal, interest, total: principal + interest }
}

const planRates = {
  qlock: { name: 'Q-Lock', rate: 0.24 },
  qflex: { name: 'Q-Flex', rate: 0.15 },
  autosave: { name: 'Northquest Auto-save', rate: 0.2 },
} as const

type PlanId = keyof typeof planRates

/* ─── Component ──────────────────────────────────────────────────── */

const testimonials = [
  {
    quote:
      "I locked ₦70k a month for 6 months. By the time I got my first job offer, I had ₦420k sitting there. Paid my first year rent without stress.",
    author: 'Femi, Lagos',
  },
  {
    quote:
      "I didn't believe a small amount would matter. Then I saw the interest. Started with ₦50k a month in March, had ₦300k ready by passing out parade.",
    author: 'Adaeze, Port Harcourt',
  },
]

export default function ProtectClient() {
  const [monthly, setMonthly] = useState(15000)
  const [months, setMonths] = useState(6)
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('qlock')

  const activePlan = planRates[selectedPlan]
  const { principal, interest, total } = calcSavings(monthly, months, activePlan.rate)
  const sliderPct = ((monthly - MIN_MONTHLY) / (MAX_MONTHLY - MIN_MONTHLY)) * 100

  return (
    <>
      <PageHeader>
        <Container>
          <PageHeadline>Protect your future.</PageHeadline>
          <PageSub>
            You need to save for the next phase of your life.
          </PageSub>
        </Container>
      </PageHeader>

      {/* The Gap */}
      <GapSection>
        <Container>
          <GapInner>
            <GapLabel>The bills will start racking up</GapLabel>

            <GapLine>
              <GapDot />
              <GapText>Your allawee stops after you pass. <em>Your expenses start increasing.</em></GapText>
            </GapLine>
            <GapLine>
              <GapDot />
              <GapText>Rent and feeding next. Important for survival.</GapText>
            </GapLine>
            <GapLine>
              <GapDot $color="#e0d0ff" />
              <GapText>Transport, mobile data, and other costs quietly add up.</GapText>
            </GapLine>
            <GapLine>
              <GapDot $color="#e0d0ff" />
              <GapText>A financial buffer gives you time and helps during the transition period.</GapText>
            </GapLine>
          </GapInner>
        </Container>
      </GapSection>

      {/* Plans */}
      <PlansSection>
        <Container>
          <SectionTitle>Q-Lock, Q-Flex or Auto-save — what&apos;s right for you?</SectionTitle>

          <PlansGrid>
            <PlanCard type="button" $selected={selectedPlan === 'qlock'} aria-pressed={selectedPlan === 'qlock'} onClick={() => setSelectedPlan('qlock')}>
              <PlanName>Q-Lock</PlanName>
              <PlanTagline>Saving toward a goal — rent, transition buffer, course fees</PlanTagline>
              <PlanRows>
                <PlanRow>
                  <PlanRowLabel>Interest rate</PlanRowLabel>
                  <PlanRowValue>Up to 24% p.a.</PlanRowValue>
                </PlanRow>
                <PlanRow>
                  <PlanRowLabel>Withdrawals</PlanRowLabel>
                  <PlanRowValue>Fixed term — earn upfront</PlanRowValue>
                </PlanRow>
                <PlanRow>
                  <PlanRowLabel>Minimum</PlanRowLabel>
                  <PlanRowValue>₦1,000</PlanRowValue>
                </PlanRow>
              </PlanRows>
            </PlanCard>

            <PlanCard type="button" $selected={selectedPlan === 'qflex'} aria-pressed={selectedPlan === 'qflex'} onClick={() => setSelectedPlan('qflex')}>
              <PlanName>Q-Flex</PlanName>
              <PlanTagline>Flexible savings — so you can still handle emergencies</PlanTagline>
              <PlanRows>
                <PlanRow>
                  <PlanRowLabel>Interest rate</PlanRowLabel>
                  <PlanRowValue>Up to 15% p.a.</PlanRowValue>
                </PlanRow>
                <PlanRow>
                  <PlanRowLabel>Withdrawals</PlanRowLabel>
                  <PlanRowValue>Anytime, no penalty</PlanRowValue>
                </PlanRow>
                <PlanRow>
                  <PlanRowLabel>Minimum</PlanRowLabel>
                  <PlanRowValue>₦1,000</PlanRowValue>
                </PlanRow>
              </PlanRows>
            </PlanCard>

            <PlanCard type="button" $featured $selected={selectedPlan === 'autosave'} aria-pressed={selectedPlan === 'autosave'} onClick={() => setSelectedPlan('autosave')}>
              <PlanBadge>Best for corpers</PlanBadge>
              <PlanName $featured>Northquest Auto-save</PlanName>
              <PlanTagline $featured>Automate your savings around your allawee or salary date</PlanTagline>
              <PlanRows>
                <PlanRow $featured>
                  <PlanRowLabel $featured>Interest rate</PlanRowLabel>
                  <PlanRowValue $featured>Up to 20% p.a.</PlanRowValue>
                </PlanRow>
                <PlanRow $featured>
                  <PlanRowLabel $featured>Deposits</PlanRowLabel>
                  <PlanRowValue $featured>Automatic schedule</PlanRowValue>
                </PlanRow>
                <PlanRow $featured>
                  <PlanRowLabel $featured>Minimum</PlanRowLabel>
                  <PlanRowValue $featured>₦1,000</PlanRowValue>
                </PlanRow>
              </PlanRows>
            </PlanCard>
          </PlansGrid>
          <CalculatorArea>
            <SectionLabel>Selected: {activePlan.name} · {Math.round(activePlan.rate * 100)}% p.a.</SectionLabel>
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
                <span>₦1,000</span>
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
              Interest calculated at up to {Math.round(activePlan.rate * 100)}% p.a. for {activePlan.name}.
              Actual returns may depend on plan terms and duration. This is an estimate, not a guarantee.
            </CalcDisclaimer>
            </CalcCard>
          </CalculatorArea>
        </Container>
      </PlansSection>

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
            Minimum ₦1,000. Takes 3 minutes to set up. Earns while you serve.
          </CTASub>

          <PrimaryBtn href="#">Start Saving Today</PrimaryBtn>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <SecondaryBtn href="#">Download the App</SecondaryBtn>
          </div>

          <TrustStrip>
            <TrustItem>
              <i className="fi fi-sr-badge-check" aria-hidden="true" />
              <span>CBN-compliant</span>
            </TrustItem>
            <TrustItem>
              <i className="fi fi-sr-badge-check" aria-hidden="true" />
              <span>BVN-secured</span>
            </TrustItem>
            <TrustItem>
              <i className="fi fi-sr-star" aria-hidden="true" />
              <span>4.8 App Store</span>
            </TrustItem>
            <TrustItem>
              <i className="fi fi-sr-badge-check" aria-hidden="true" />
              <span>50,000+ corpers saving</span>
            </TrustItem>
          </TrustStrip>
        </CTAInner>
      </CTASection>
    </>
  )
}
