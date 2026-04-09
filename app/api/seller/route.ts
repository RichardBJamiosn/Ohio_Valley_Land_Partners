/**
 * /api/seller — Lightweight seller lead capture
 * Accepts: address (property address), phone
 * Sends email notification to info@ohiovalleylandpartners.com via Resend
 * Required env: RESEND_API_KEY
 */

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { address?: string; phone?: string };
    const { address, phone } = body;

    if (!address?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Address and phone are required' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'OVLP Website <noreply@ohiovalleylandpartners.com>',
      to: 'info@ohiovalleylandpartners.com',
      subject: 'New Seller Lead — Cash Offer Request',
      html: `
        <h2>New Seller Lead</h2>
        <p><strong>Property Address:</strong> ${address.trim()}</p>
        <p><strong>Phone:</strong> ${phone.trim()}</p>
        <p><strong>Source:</strong> Homepage — Get My Cash Offer form</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('Seller form error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
