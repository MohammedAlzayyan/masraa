'use server'

import { getPayload } from '@/lib/payload'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

import { ActionState } from '@/types/actions'

export async function submitContactRequest(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  // Validation
  if (!name || !email || !subject || !message) {
    return { error: 'الرجاء ملء جميع الحقول المطلوبة' }
  }

  try {
    const payload = await getPayload()

    // 1. Save to Payload CMS
    await payload.create({
      collection: 'contact-requests',
      data: {
        name,
        email,
        subject,
        message,
      },
    })

    // 2. Send Email via Resend (Optional but good for notifications)
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Masraa <onboarding@resend.dev>', // Update with verified domain in production
          to: ['mohzayyan99@gmail.com'], // User's email
          replyTo: email,
          subject: `طلب تواصل جديد: ${subject}`,
          html: `
            <div style="font-family: sans-serif; dir: rtl; text-align: right; padding: 20px;">
              <h2 style="color: #6d2932;">طلب تواصل جديد من الموقع</h2>
              <p><strong>الاسم:</strong> ${name}</p>
              <p><strong>البريد الإلكتروني:</strong> ${email}</p>
              <p><strong>الموضوع:</strong> ${subject}</p>
              <hr />
              <p><strong>الرسالة:</strong></p>
              <p>${message}</p>
            </div>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError)
        // We don't return error here because the request was already saved to DB
      }
    }

    return { success: true, message: 'تم إرسال رسالتك بنجاح. سنقوم بالتواصل معك قريباً.' }
  } catch (error) {
    console.error('Error submitting contact request:', error)
    return { error: 'حدث خطأ أثناء إرسال طلبك. الرجاء المحاولة مرة أخرى.' }
  }
}
