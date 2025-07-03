import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, message } = req.body
  console.log(name, email, message)

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password or real password
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO, // destination email
      subject: `New message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Email error', err)
    return res.status(500).json({ error: 'Error sending message' })
  }
}
