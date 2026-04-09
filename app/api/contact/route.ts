/**
 * /api/contact — General contact form handler
 * Accepts: fullName, email, phone, company, leadType, propertyInterest, budgetRange, message, source
 * Sends email notification to info@ohiovalleylandpartners.com via Resend
 * Required env: RESEND_API_KEY
 */

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  leadType: 'land' | 'commercial' | 'investor' | 'partnership' | 'inquiry';
  propertyInterest?: string;
  budgetRange?: string;
  message: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { fullName, email, phone, company, leadType, propertyInterest, budgetRange, message, source } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'OVLP Website <noreply@ohiovalleylandpartners.com>',
      to: 'info@ohiovalleylandpartners.com',
      subject: `New Contact Form Submission — ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Lead Type:</strong> ${leadType}</p>
        ${propertyInterest ? `<p><strong>Property Interest:</strong> ${propertyInterest}</p>` : ''}
        ${budgetRange ? `<p><strong>Budget Range:</strong> ${budgetRange}</p>` : ''}
        <p><strong>Message:</strong><br/>${message}</p>
        <p><strong>Source:</strong> ${source || 'website'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
