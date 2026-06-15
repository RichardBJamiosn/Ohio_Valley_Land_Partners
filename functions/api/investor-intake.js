import { escapeHtml, guardFormRequest, jsonResponse } from '../_utils.js';

export async function onRequestPost(context) {
  try {
    const guard = await guardFormRequest(context);
    if (!guard.ok) return guard.response;

    const { name, email, phone, counties, acreage, useCase, budget } = guard.body;

    if (!name?.trim() || !email?.trim()) {
      return jsonResponse({ error: 'Name and email are required' }, 400);
    }

    const countyList = Array.isArray(counties) ? counties.join(', ') : String(counties ?? '');

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'OVLP Website <noreply@ohiovalleylandpartners.com>',
        to: 'info@ohiovalleylandpartners.com',
        subject: `New Investor/Buyer Lead — ${escapeHtml(name).slice(0, 80)}`,
        html: `
          <h2>New Investor / Deal List Signup</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${phone?.trim() ? escapeHtml(phone) : 'Not collected on this form. Phone/SMS opt-in is handled by the GHL chat widget.'}</p>
          <p><strong>Counties of Interest:</strong> ${escapeHtml(countyList || 'Not specified')}</p>
          <p><strong>Acreage Range:</strong> ${escapeHtml(acreage || 'Not specified')}</p>
          <p><strong>Intended Use:</strong> ${escapeHtml(useCase || 'Not specified')}</p>
          <p><strong>Budget Range:</strong> ${escapeHtml(budget || 'Not specified')}</p>
          <p><strong>Source:</strong> Investor Portal — Get on the Deal List form</p>
        `,
      }),
    });

    if (!res.ok) {
      console.error('Resend error:', await res.text());
      return jsonResponse({ error: 'Failed to submit' }, 500);
    }

    return jsonResponse({ success: true }, 201);
  } catch (err) {
    console.error('Investor intake error:', err);
    return jsonResponse({ error: 'Internal server error' }, 500);
  }
}