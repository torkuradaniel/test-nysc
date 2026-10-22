'use client'

import { FormEvent, useState } from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background: #f7f4ee;
  padding: 4rem 1.5rem;
`

const Panel = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(1.75rem, 4vw, 3rem);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 14px 44px rgba(45, 0, 87, .07);
  display: grid;
  gap: 1.5rem;

  @media (min-width: 760px) {
    grid-template-columns: minmax(0, 1fr) minmax(340px, .8fr);
    align-items: center;
  }
`

const Eyebrow = styled.p`
  color: #6a0dad;
  font-size: .75rem;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  margin-bottom: .6rem;
`

const Title = styled.h2`
  font-family: var(--font-syne), system-ui, sans-serif;
  color: #1a0a2e;
  font-size: clamp(1.4rem, 3vw, 2rem);
  line-height: 1.2;
  letter-spacing: -.025em;
  margin-bottom: .55rem;
`

const Copy = styled.p`
  color: #64748b;
  font-size: .92rem;
  line-height: 1.6;
  max-width: 560px;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .65rem;
  padding: .45rem;
  border-radius: 13px;
  background: #f3eeff;

  @media (max-width: 520px) { grid-template-columns: 1fr; }
`

const FormArea = styled.div`
  min-width: 0;
`

const Input = styled.input`
  min-width: 0;
  flex: 1;
  border: 0;
  background: transparent;
  color: #1a0a2e;
  padding: .75rem .85rem;
  font: inherit;

  &::placeholder { color: #8c8291; }
  &:focus { outline: none; }
`

const EmailInput = styled(Input)`
  @media (min-width: 521px) { grid-column: 1 / -1; }
`

const Button = styled.button`
  border: 0;
  border-radius: 9px;
  background: #2d0057;
  color: #ffffff;
  padding: .78rem 1.15rem;
  font: inherit;
  font-size: .86rem;
  font-weight: 800;
  cursor: pointer;
  white-space: nowrap;
  transition: transform .15s ease, background .15s ease;

  @media (min-width: 521px) { grid-column: 1 / -1; }

  &:hover { background: #6a0dad; transform: translateY(-1px); }

  &:disabled { cursor: wait; opacity: .72; transform: none; }
`

const Message = styled.p`
  color: #2d0057;
  font-size: .86rem;
  font-weight: 700;
  padding: .85rem 0;
`

const ErrorMessage = styled(Message)`
  color: #a32929;
`

export default function EmailSignup() {
  const [subscribed, setSubscribed] = useState(false)
  const [welcomeEmailSent, setWelcomeEmailSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const subscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setSubmitting(true)

    const data = new FormData(event.currentTarget)
    const firstName = String(data.get('firstName') || '')
    const lastName = String(data.get('lastName') || '')
    const email = String(data.get('email') || '')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email }),
      })
      const result = await response.json() as { error?: string; welcomeEmailSent?: boolean }

      if (!response.ok) throw new Error(result.error || 'Unable to subscribe right now.')
      setWelcomeEmailSent(Boolean(result.welcomeEmailSent))
      setSubscribed(true)
    } catch (subscriptionError) {
      setError(subscriptionError instanceof Error ? subscriptionError.message : 'Unable to subscribe right now.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Section aria-labelledby="job-updates-title">
      <Panel>
        <div>
          <Eyebrow>Stay job-ready</Eyebrow>
          <Title id="job-updates-title">Get fresh roles and practical job-search tips.</Title>
          <Copy>Useful openings, CV advice, and interview guidance sent occasionally.</Copy>
        </div>
        <FormArea>
          {subscribed ? (
            <Message role="status">
              {welcomeEmailSent
                ? 'You are subscribed. Check your inbox for a welcome email.'
                : 'Your email has been saved for job updates.'}
            </Message>
          ) : (
            <Form onSubmit={subscribe}>
              <Input type="text" name="firstName" placeholder="First name" aria-label="First name" autoComplete="given-name" required />
              <Input type="text" name="lastName" placeholder="Last name" aria-label="Last name" autoComplete="family-name" required />
              <EmailInput type="email" name="email" placeholder="you@example.com" aria-label="Email address" autoComplete="email" required />
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Saving…' : 'Send me updates'}
              </Button>
            </Form>
          )}
          {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
        </FormArea>
      </Panel>
    </Section>
  )
}
