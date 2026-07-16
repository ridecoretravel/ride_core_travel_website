import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

// Text-based logo — renders in all email clients without image blocking
const LOGO_HTML = `
  <table cellpadding="0" cellspacing="0"><tr>
    <td style="background:#b29a75;width:36px;height:36px;border-radius:3px;text-align:center;vertical-align:middle">
      <span style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:#0E0E0E;line-height:36px">R</span>
    </td>
    <td width="10"></td>
    <td style="vertical-align:middle">
      <span style="font-family:Georgia,serif;font-size:16px;font-weight:700;color:#F5F3EF;letter-spacing:3px;display:block;line-height:1">RIDECORE</span>
      <span style="font-family:Georgia,serif;font-size:9px;color:#b29a75;letter-spacing:4px;display:block;margin-top:2px">TRAVEL</span>
    </td>
  </tr></table>`

function emailHeader(subtitle: string) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0E0E;border-radius:6px 6px 0 0">
    <tr>
      <td style="padding:28px 32px 20px">
        ${LOGO_HTML}
        <div style="width:40px;height:2px;background:#b29a75;margin:16px 0 10px"></div>
        <p style="color:#b29a75;font-family:sans-serif;font-size:11px;font-weight:700;letter-spacing:3px;margin:0;text-transform:uppercase">${subtitle}</p>
      </td>
    </tr>
  </table>`
}

function emailFooter() {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0E0E;border-radius:0 0 6px 6px;margin-top:0">
    <tr>
      <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.08)">
        <p style="color:#9a9a9a;font-family:sans-serif;font-size:12px;margin:0;line-height:1.6">
          Ridecore Travel Ltd · PHV Licence 25232 · Leeds City Council<br/>
          <a href="tel:+447356206830" style="color:#b29a75;text-decoration:none">+44 7356 206830</a>
          &nbsp;·&nbsp;
          <a href="mailto:booking@ridecoretravel.co.uk" style="color:#b29a75;text-decoration:none">booking@ridecoretravel.co.uk</a>
          &nbsp;·&nbsp;
          <a href="https://www.ridecoretravel.co.uk" style="color:#b29a75;text-decoration:none">ridecoretravel.co.uk</a>
        </p>
      </td>
    </tr>
  </table>`
}

function row(label: string, value: string, highlight = false) {
  return `
  <tr>
    <td style="padding:11px 16px;color:#888;font-family:sans-serif;font-size:13px;border-bottom:1px solid #eee;width:130px;white-space:nowrap">${label}</td>
    <td style="padding:11px 16px;font-family:sans-serif;font-size:13px;font-weight:600;border-bottom:1px solid #eee;color:${highlight ? '#b29a75' : '#1a1a1a'}">${value}</td>
  </tr>`
}

export async function POST(req: NextRequest) {
  const data = await req.json()

  const required = ['name', 'email', 'phone', 'passengers', 'pickup', 'dropoff', 'date', 'time']
  for (const field of required) {
    if (!data[field]) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 })
    }
  }

  const returnText = data.returnJourney
    ? `\nReturn Date:   ${data.returnDate}\nReturn Time:   ${data.returnTime}`
    : ''

  // ── Email to Ridecore (booking notification) ──────────────────────────────
  const notifyHtml = `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#f0ede8">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
  <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">
    <tr><td>${emailHeader('New Booking Request')}</td></tr>
    <tr>
      <td style="background:#ffffff;padding:28px 32px">
        <p style="font-family:sans-serif;font-size:13px;color:#444;margin:0 0 20px;line-height:1.6">
          A new quote request has been submitted. Customer details below.
        </p>

        <!-- Customer -->
        <p style="font-family:sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;color:#b29a75;text-transform:uppercase;margin:0 0 8px">Customer</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid #eee;border-radius:4px;margin-bottom:20px">
          ${row('Name', data.name)}
          ${row('Phone', `<a href="tel:${data.phone}" style="color:#0E0E0E;text-decoration:none">${data.phone}</a>`)}
          ${row('Email', `<a href="mailto:${data.email}" style="color:#0E0E0E;text-decoration:none">${data.email}</a>`)}
          ${row('Passengers', data.passengers)}
        </table>

        <!-- Journey -->
        <p style="font-family:sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;color:#b29a75;text-transform:uppercase;margin:0 0 8px">Journey</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid #eee;border-radius:4px;margin-bottom:20px">
          ${row('Pickup', data.pickup)}
          ${row('Drop-off', data.dropoff)}
          ${row('Date', data.date)}
          ${row('Time', data.time)}
          ${row('Vehicle', data.vehicle || '—')}
          ${row('Luggage', data.luggage || '—')}
          ${data.additionalStops ? row('Extra Stops', data.additionalStops, true) : ''}
          ${data.returnJourney ? row('Return', `${data.returnDate} at ${data.returnTime}`, true) : ''}
        </table>

        <!-- CTA -->
        <table cellpadding="0" cellspacing="0"><tr>
          <td style="background:#0E0E0E;border-radius:4px;padding:13px 24px">
            <a href="tel:${data.phone}" style="color:#b29a75;font-family:sans-serif;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:1px">
              📞 Call ${data.name}
            </a>
          </td>
          <td width="12"></td>
          <td style="background:#b29a75;border-radius:4px;padding:13px 24px">
            <a href="mailto:${data.email}" style="color:#0E0E0E;font-family:sans-serif;font-size:13px;font-weight:700;text-decoration:none;letter-spacing:1px">
              ✉ Reply by Email
            </a>
          </td>
        </tr></table>
      </td>
    </tr>
    <tr><td>${emailFooter()}</td></tr>
  </table>
  </td></tr></table>
  </body></html>`

  // ── Confirmation email to customer ────────────────────────────────────────
  const confirmHtml = `<!DOCTYPE html><html><body style="margin:0;padding:24px;background:#f0ede8">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
  <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">
    <tr><td>${emailHeader('Quote Request Received')}</td></tr>
    <tr>
      <td style="background:#ffffff;padding:28px 32px">
        <p style="font-family:sans-serif;font-size:15px;font-weight:600;color:#1a1a1a;margin:0 0 8px">Hi ${data.name},</p>
        <p style="font-family:sans-serif;font-size:14px;color:#555;line-height:1.7;margin:0 0 24px">
          Thank you for choosing Ridecore Travel. We've received your booking request and will send you a <strong>fixed-price quote as soon as possible</strong>.
        </p>

        <!-- Journey summary -->
        <p style="font-family:sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;color:#b29a75;text-transform:uppercase;margin:0 0 8px">Your Journey</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#fafafa;border:1px solid #eee;border-radius:4px;margin-bottom:24px">
          ${row('From', data.pickup)}
          ${row('To', data.dropoff)}
          ${row('Date', data.date)}
          ${row('Time', data.time)}
          ${row('Passengers', data.passengers)}
          ${row('Vehicle', data.vehicle || '—')}
          ${row('Luggage', data.luggage || '—')}
          ${data.additionalStops ? row('Extra Stops', data.additionalStops) : ''}
          ${data.returnJourney ? row('Return', `${data.returnDate} at ${data.returnTime}`, true) : ''}
        </table>

        <!-- What's next -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#0E0E0E;border-radius:4px;margin-bottom:24px">
          <tr><td style="padding:16px 20px">
            <p style="font-family:sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;color:#b29a75;text-transform:uppercase;margin:0 0 10px">What Happens Next</p>
            <p style="font-family:sans-serif;font-size:13px;color:#ccc;margin:4px 0;line-height:1.6">✓ &nbsp;We review your journey details</p>
            <p style="font-family:sans-serif;font-size:13px;color:#ccc;margin:4px 0;line-height:1.6">✓ &nbsp;You receive a fixed price — no hidden extras</p>
            <p style="font-family:sans-serif;font-size:13px;color:#ccc;margin:4px 0;line-height:1.6">✓ &nbsp;Confirm and your driver is booked</p>
          </td></tr>
        </table>

        <p style="font-family:sans-serif;font-size:13px;color:#666;margin:0;line-height:1.6">
          Need to speak to us sooner?<br/>
          <a href="tel:+447356206830" style="color:#0E0E0E;font-weight:700;text-decoration:none">+44 7356 206830</a>
          &nbsp;·&nbsp;
          <a href="https://wa.me/447356206830" style="color:#0E0E0E;font-weight:700;text-decoration:none">WhatsApp</a>
          &nbsp;·&nbsp; Available 24/7
        </p>
      </td>
    </tr>
    <tr><td>${emailFooter()}</td></tr>
  </table>
  </td></tr></table>
  </body></html>`

  try {
    await Promise.all([
      transporter.sendMail({
        from: `"Ridecore Travel" <${process.env.GMAIL_USER}>`,
        to: 'booking@ridecoretravel.co.uk',
        subject: `🚐 New Quote — ${data.name} · ${data.dropoff} · ${data.date}`,
        html: notifyHtml,
        text: `New quote request\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nPickup: ${data.pickup}\nDrop-off: ${data.dropoff}\nDate: ${data.date}\nTime: ${data.time}\nPassengers: ${data.passengers}${returnText}`,
      }),
      transporter.sendMail({
        from: `"Ridecore Travel" <${process.env.GMAIL_USER}>`,
        to: data.email,
        subject: 'Quote Request Received — Ridecore Travel',
        html: confirmHtml,
        text: `Hi ${data.name},\n\nWe've received your quote request and will be in touch as soon as possible.\n\nFrom: ${data.pickup}\nTo: ${data.dropoff}\nDate: ${data.date} at ${data.time}\nPassengers: ${data.passengers}${returnText}\n\nCall or WhatsApp: +44 7356 206830\nridecoretravel.co.uk`,
      }),
    ])
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
