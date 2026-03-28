'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Loader2, Phone, MapPin } from 'lucide-react';

export function SellerForm() {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!address.trim() || !phone.trim()) {
      setError('Both fields are required.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/seller', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, phone }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Call us directly at (614) 653-7430.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-bold text-foreground">We Got It</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Expect a call within 24 hours with your cash offer. No obligation, no pressure.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="seller-address" className="text-sm font-semibold text-foreground">
          Property Address
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="seller-address"
            type="text"
            placeholder="123 Elm St, Newark, OH 43055"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="pl-9"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="seller-phone" className="text-sm font-semibold text-foreground">
          Your Phone Number
        </Label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="seller-phone"
            type="tel"
            placeholder="(614) 653-7430"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="pl-9"
            required
          />
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full h-12 font-bold text-base"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Get My Cash Offer'
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        No fees. No obligation. We buy land in any condition across the Ohio Valley.
      </p>
    </form>
  );
}
