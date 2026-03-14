'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle, Loader2 } from 'lucide-react';

const counties = [
  'Belmont County, OH',
  'Jefferson County, OH',
  'Columbiana County, OH',
  'Harrison County, OH',
  'Carroll County, OH',
  'Ohio County, WV',
  'Marshall County, WV',
  'Brooke County, WV',
];

const useCases = [
  'Hunting / Recreation',
  'Farming / Agriculture',
  'Residential Development',
  'Commercial Development',
  'Long-term Investment / Hold',
];

const budgetRanges = [
  'Under $50K',
  '$50K – $150K',
  '$150K – $500K',
  '$500K – $1M',
  '$1M+',
];

const acreageRanges = [
  'Under 5 acres',
  '5 – 20 acres',
  '20 – 100 acres',
  '100+ acres',
  'No preference',
];

export function InvestorIntakeForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    counties: [] as string[],
    acreage: '',
    useCase: '',
    budget: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function toggleCounty(county: string) {
    setForm((f) => ({
      ...f,
      counties: f.counties.includes(county)
        ? f.counties.filter((c) => c !== county)
        : [...f.counties, county],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.phone || form.counties.length === 0) {
      setError('Name, email, phone, and at least one county are required.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/investor-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Email us directly at info@ohiovalleylandpartners.com");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <h3 className="text-xl font-bold text-foreground">You're on the List</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          We'll contact you directly when a deal matching your criteria becomes available in the Ohio Valley.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inv-name">Full Name</Label>
          <Input
            id="inv-name"
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inv-phone">Phone</Label>
          <Input
            id="inv-phone"
            type="tel"
            placeholder="(740) 555-0100"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="inv-email">Email</Label>
        <Input
          id="inv-email"
          type="email"
          placeholder="john@example.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-sm font-semibold">Counties of Interest</Label>
        <div className="grid grid-cols-2 gap-2">
          {counties.map((county) => (
            <label
              key={county}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm cursor-pointer transition-colors ${
                form.counties.includes(county)
                  ? 'border-accent bg-accent/10 text-foreground font-medium'
                  : 'border-border text-muted-foreground hover:border-accent/50'
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={form.counties.includes(county)}
                onChange={() => toggleCounty(county)}
              />
              {county}
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inv-acreage">Acreage Range</Label>
          <select
            id="inv-acreage"
            value={form.acreage}
            onChange={(e) => setForm((f) => ({ ...f, acreage: e.target.value }))}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Select...</option>
            {acreageRanges.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inv-use">Intended Use</Label>
          <select
            id="inv-use"
            value={form.useCase}
            onChange={(e) => setForm((f) => ({ ...f, useCase: e.target.value }))}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <option value="">Select...</option>
            {useCases.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="inv-budget">Budget Range</Label>
          <select
            id="inv-budget"
            value={form.budget}
            onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-render"
          >
            <option value="">Select...</option>
            {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" size="lg" className="w-full h-12 font-bold" disabled={loading}>
        {loading ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</>
        ) : (
          'Get on the Deal List'
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        No fees. No spam. We contact you only when a matching deal is available.
      </p>
    </form>
  );
}
