/**
 * /api/investor-intake — Investor/buyer criteria intake
 * Accepts: name, email, phone, counties[], acreage, useCase, budget
 * Sends email notification to info@ohiovalleylandpartners.com via Resend
 * Required env: RESEND_API_KEY
 */

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as {
      name?: string;
      email?: string;
      phone?: string;
      counties?: string[];
      acreage?: string;
      useCase?: string;
      budget?: string;
    };

    const { name, email, phone, counties, acreage, useCase, budget } = body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'OVLP Website <noreply@ohiovalleylandpartners.com>',
      to: 'info@ohiovalleylandpartners.com',
      subject: `New Investor/Buyer Lead — ${name.trim()}`,
      html: `
        <h2>New Investor / Deal List Signup</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone.trim()}</p>
        <p><strong>Counties of Interest:</strong> ${counties?.join(', ') || 'Not specified'}</p>
        <p><strong>Acreage Range:</strong> ${acreage || 'Not specified'}</p>
        <p><strong>Intended Use:</strong> ${useCase || 'Not specified'}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Source:</strong> Investor Portal — Get on the Deal List form</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('Investor intake error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
