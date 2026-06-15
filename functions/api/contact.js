import { escapeHtml, guardFormRequest, jsonResponse } from '../_utils.js';

export async function onRequestPost(context) {
  try {
    const guard = await guardFormRequest(context);
    if (!guard.ok) return guard.response;

    const { fullName, email, phone, company, leadType, propertyInterest, budgetRange, message, source } = guard.body;

    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return jsonResponse({ error: 'Missing required fields' }, 400);
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'OVLP Website <noreply@ohiovalleylandpartners.com>',
        to: 'info@ohiovalleylandpartners.com',
        subject: `New Contact Form Submission — ${escapeHtml(fullName).slice(0, 80)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
          ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
          <p><strong>Lead Type:</strong> ${escapeHtml(leadType || 'inquiry')}</p>
          ${propertyInterest ? `<p><strong>Property Interest:</strong> ${escapeHtml(propertyInterest)}</p>` : ''}
          ${budgetRange ? `<p><strong>Budget Range:</strong> ${escapeHtml(budgetRange)}</p>` : ''}
          <p><strong>Message:</strong><br/>${escapeHtml(message)}</p>
          <p><strong>Source:</strong> ${escapeHtml(source || 'website')}</p>
        `,
      }),
    });

    if (!res.ok) {
      console.error('Resend error:', await res.text());
      return jsonResponse({ error: 'Failed to submit form' }, 500);
    }

    return jsonResponse({ success: true }, 201);
  } catch (err) {
    console.error('Contact form error:', err);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}