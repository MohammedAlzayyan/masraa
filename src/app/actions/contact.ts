'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ActionState {
  success?: boolean
  error?: string
}

export async function sendContactEmail(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Simple Validation
  if (!name || !email || !message) {
    return { error: 'Missing required fields' }
  }

  try {
    const data = await resend.emails.send({
      from: 'Masraa Contact <masraa@resend.dev>', // Users should update this with their verified domain
      to: ['mohzayyan99@gmail.com'], // The destination email (The USER's email)
      replyTo: email,
      subject: `New Contact Request: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #6d2932;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (data.error) {
      console.error('Resend Error:', data.error)
      return { error: 'Failed to send email. Please try again.' }
    }

    return { success: true }
  } catch (error) {
    console.error('Server Error:', error)
    return { error: 'Something went wrong.' }
  }
}
