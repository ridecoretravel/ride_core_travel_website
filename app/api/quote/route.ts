import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

export async function POST(req: NextRequest) {
  const data = await req.json()

  const required = ['name', 'email', 'phone', 'passengers', 'pickup', 'dropoff', 'date', 'time']
  for (const field of required) {
    if (!data[field]) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 })
    }
  }

  const returnRow = data.returnJourney
    ? `<tr><td style="padding:10px 16px;color:#b29a75;font-weight:600;border-top:1px solid #eee">Return</td><td style="padding:10px 16px;font-weight:600;color:#b29a75;border-top:1px solid #eee">${data.returnDate} at ${data.returnTime}</td></tr>`
    : ''

  const returnText = data.returnJourney
    ? `\nReturn Date:   ${data.returnDate}\nReturn Time:   ${data.returnTime}`
    : ''

  const notifyHtml = `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto">
  <div style="background:#0E0E0E;padding:24px 32px;border-radius:4px 4px 0 0">
    <h1 style="color:#b29a75;margin:0;font-size:20px;letter-spacing:1px">NEW BOOKING REQUEST</h1>
    <p style="color:#9a9a9a;margin:6px 0 0;font-size:13px">Ridecore Travel — ridecoretravel.co.uk</p>
  </div>
  <div style="background:#F5F3EF;padding:32px;border-radius:0 0 4px 4px">
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${data.name}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0;font-weight:600"><a href="tel:${data.phone}" style="color:#0E0E0E">${data.phone}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${data.email}" style="color:#0E0E0E">${data.email}</a></td></tr>
      <tr><td colspan="2" style="padding:8px 0"><hr style="border:none;border-top:1px solid #ddd"/></td></tr>
      <tr><td style="padding:8px 0;color:#666">Pickup</td><td style="padding:8px 0;font-weight:600">${data.pickup}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Drop-off</td><td style="padding:8px 0;font-weight:600">${data.dropoff}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Date</td><td style="padding:8px 0;font-weight:600">${data.date}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Time</td><td style="padding:8px 0;font-weight:600">${data.time}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Passengers</td><td style="padding:8px 0;font-weight:600">${data.passengers}</td></tr>
      ${data.returnJourney ? `
      <tr><td colspan="2" style="padding:8px 0"><hr style="border:none;border-top:1px solid #ddd"/></td></tr>
      <tr><td style="padding:8px 0;color:#b29a75;font-weight:600">Return Journey</td><td style="padding:8px 0;font-weight:600;color:#b29a75">YES</td></tr>
      <tr><td style="padding:8px 0;color:#666">Return Date</td><td style="padding:8px 0;font-weight:600">${data.returnDate}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Return Time</td><td style="padding:8px 0;font-weight:600">${data.returnTime}</td></tr>
      ` : ''}
    </table>
    <div style="margin-top:24px">
      <a href="tel:${data.phone}" style="background:#0E0E0E;color:#b29a75;padding:12px 24px;border-radius:4px;text-decoration:none;font-weight:600;font-size:13px;display:inline-block">Call ${data.name} →</a>
    </div>
  </div>
</div>`

  const confirmHtml = `
<div style="font-family:sans-serif;max-width:560px;margin:0 auto">
  <div style="background:#0E0E0E;padding:24px 32px;border-radius:4px 4px 0 0">
    <h1 style="color:#b29a75;margin:0;font-size:20px;letter-spacing:1px">QUOTE REQUEST RECEIVED</h1>
    <p style="color:#9a9a9a;margin:6px 0 0;font-size:13px">Ridecore Travel</p>
  </div>
  <div style="background:#F5F3EF;padding:32px;border-radius:0 0 4px 4px">
    <p style="font-size:15px;margin:0 0 16px">Hi ${data.name},</p>
    <p style="font-size:14px;color:#444;line-height:1.6;margin:0 0 20px">
      Thanks for your request. We've received your details and will send your fixed-price quote within <strong>30 minutes</strong>.
    </p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;background:#fff;border-radius:4px">
      <tr style="background:#0E0E0E"><td colspan="2" style="padding:10px 16px;color:#b29a75;font-size:11px;letter-spacing:1px;font-weight:600">YOUR JOURNEY SUMMARY</td></tr>
      <tr><td style="padding:10px 16px;color:#666;width:120px;border-bottom:1px solid #eee">From</td><td style="padding:10px 16px;font-weight:600;border-bottom:1px solid #eee">${data.pickup}</td></tr>
      <tr><td style="padding:10px 16px;color:#666;border-bottom:1px solid #eee">To</td><td style="padding:10px 16px;font-weight:600;border-bottom:1px solid #eee">${data.dropoff}</td></tr>
      <tr><td style="padding:10px 16px;color:#666;border-bottom:1px solid #eee">Date</td><td style="padding:10px 16px;font-weight:600;border-bottom:1px solid #eee">${data.date}</td></tr>
      <tr><td style="padding:10px 16px;color:#666;border-bottom:1px solid #eee">Time</td><td style="padding:10px 16px;font-weight:600;border-bottom:1px solid #eee">${data.time}</td></tr>
      <tr><td style="padding:10px 16px;color:#666">Passengers</td><td style="padding:10px 16px;font-weight:600">${data.passengers}</td></tr>
      ${returnRow}
    </table>
    <p style="font-size:13px;color:#666;margin:20px 0 0">
      Questions? Call or WhatsApp: <a href="tel:+447356206830" style="color:#0E0E0E;font-weight:600">+44 7356 206830</a>
    </p>
  </div>
</div>`

  try {
    await Promise.all([
      transporter.sendMail({
        from: `"Ridecore Travel Website" <${process.env.GMAIL_USER}>`,
        to: 'booking@ridecoretravel.co.uk',
        subject: `New Quote — ${data.name} — ${data.dropoff} — ${data.date}`,
        html: notifyHtml,
        text: `New quote request\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nPickup: ${data.pickup}\nDrop-off: ${data.dropoff}\nDate: ${data.date}\nTime: ${data.time}\nPassengers: ${data.passengers}${returnText}`,
      }),
      transporter.sendMail({
        from: `"Ridecore Travel" <${process.env.GMAIL_USER}>`,
        to: data.email,
        subject: 'Quote Request Received — Ridecore Travel',
        html: confirmHtml,
        text: `Hi ${data.name},\n\nWe've received your quote request and will be in touch within 30 minutes.\n\nPickup: ${data.pickup}\nDrop-off: ${data.dropoff}\nDate: ${data.date} at ${data.time}\nPassengers: ${data.passengers}${returnText}\n\nCall or WhatsApp: +44 7356 206830`,
      }),
    ])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
