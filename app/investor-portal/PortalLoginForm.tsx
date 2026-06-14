'use client';

import { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

const PORTAL_API = 'https://portal.ohiovalleylandpartners.com/api/auth/login';
const PORTAL_DASHBOARD = 'https://portal.ohiovalleylandpartners.com/portal';

export function PortalLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(PORTAL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // credentials: 'include' sends and stores cookies cross-origin.
        // Works because both domains share .ohiovalleylandpartners.com
        // and the portal sets the cookie with domain=.ohiovalleylandpartners.com.
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        window.location.href = PORTAL_DASHBOARD;
      } else {
        setError(data.error ?? 'Invalid credentials.');
        setLoading(false);
      }
    } catch {
      setError('Unable to reach the portal. Try again.');
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-amber/30 bg-card p-8 sm:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber/10 text-amber flex-shrink-0">
          <Lock className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Member Login</h2>
          <p className="text-xs text-muted-foreground">Invitation-only access</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5 text-muted-foreground uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-amber/40 transition-shadow"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1.5 text-muted-foreground uppercase tracking-wider">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••••••"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-amber/40 transition-shadow"
          />
        </div>

        {error && (
          <p className="text-xs text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-forest hover:bg-amber/90 transition-colors disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="h-4 w-4 rounded-full border-2 border-forest/30 border-t-forest animate-spin" />
              Signing in…
            </>
          ) : (
            <>
              Access the Network
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-5 text-xs text-muted-foreground text-center">
        Not a member?{' '}
        <span className="text-amber">Join the deal list below</span> or contact OVLP directly.
      </p>
    </div>
  );
}
