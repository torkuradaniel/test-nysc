const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type SubscribeBody = {
  firstName?: unknown
  lastName?: unknown
  email?: unknown
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, character => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    }
    return entities[character]
  })
}

async function sendWelcomeEmail({
  apiKey,
  from,
  firstName,
  email,
}: {
  apiKey: string
  from: string
  firstName: string
  email: string
}) {
  const safeFirstName = escapeHtml(firstName)
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: 'Welcome to LANYSC',
      text: `Hi ${firstName},\n\nWelcome to LANYSC. We help you prepare for life after NYSC with relevant job opportunities, practical career skills, useful CV and interview resources, and simple ways to build financial security before service ends.\n\nWe will send you useful openings and straightforward guidance occasionally—no noise.\n\nHere is to landing well after NYSC.\n\nThe LANYSC team`,
      html: `
        <div style="background:#f7f4ee;padding:32px 16px;font-family:Georgia,serif;color:#1a0a2e;">
          <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:18px;padding:40px 32px;">
            <p style="margin:0 0 24px;color:#6a0dad;font:700 13px Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;">Northquest</p>
            <h1 style="margin:0 0 20px;font:700 30px Arial,sans-serif;letter-spacing:-.03em;color:#2d0057;">Welcome, ${safeFirstName}.</h1>
            <p style="margin:0 0 18px;font-size:17px;line-height:1.7;">Northquest helps you prepare for life after NYSC—before your service year ends.</p>
            <p style="margin:0 0 18px;font-size:17px;line-height:1.7;">You will find relevant job opportunities, practical career skills, useful CV and interview resources, and simple ways to build financial security for what comes next.</p>
            <p style="margin:0 0 28px;font-size:17px;line-height:1.7;">We will send you useful openings and straightforward guidance occasionally.</p>
            <p style="margin:0;font-size:17px;line-height:1.7;"><strong>Here is to success after NYSC.</strong><br />The LANYSC team</p>
          </div>
        </div>
      `,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Resend welcome email failed', response.status, error)
    return false
  }

  return true
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL

  if (!apiKey || !fromEmail) {
    console.error('RESEND_API_KEY or RESEND_FROM_EMAIL is not configured')
    return Response.json({ error: 'Subscriptions are temporarily unavailable.' }, { status: 503 })
  }

  let body: SubscribeBody

  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
  const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : ''
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''

  if (!firstName || !lastName || firstName.length > 100 || lastName.length > 100) {
    return Response.json({ error: 'Enter a valid first and last name.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 320) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        last_name: lastName,
        unsubscribed: false,
      }),
    })

    if (resendResponse.ok) {
      const welcomeEmailSent = await sendWelcomeEmail({
        apiKey,
        from: fromEmail,
        firstName,
        email,
      })

      return Response.json({ success: true, welcomeEmailSent }, { status: 201 })
    }

    // A contact is globally unique in Resend. Treat a repeat signup as successful
    // without overriding a contact who previously unsubscribed.
    if (resendResponse.status === 409) {
      return Response.json({ success: true, existing: true })
    }

    const resendError = await resendResponse.text()
    console.error('Resend contact creation failed', resendResponse.status, resendError)
    return Response.json({ error: 'We could not save your subscription. Please try again.' }, { status: 502 })
  } catch (error) {
    console.error('Resend request failed', error)
    return Response.json({ error: 'We could not reach the subscription service.' }, { status: 502 })
  }
}
