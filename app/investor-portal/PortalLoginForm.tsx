import Link from 'next/link';
import { Lock, ArrowRight } from 'lucide-react';

const PORTAL_LOGIN_URL =
  process.env.NEXT_PUBLIC_PORTAL_URL ?? 'https://ovlp-portal.vercel.app/login';

export function PortalLoginForm() {
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

      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
        Sign in on the secure Builders Network portal. Your credentials are never submitted from this marketing page.
      </p>

      <Link
        href={PORTAL_LOGIN_URL}
        className="flex items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-forest hover:bg-amber/90 transition-colors w-full"
      >
        Go to Member Login
        <ArrowRight className="h-4 w-4" />
      </Link>

      <p className="mt-5 text-xs text-muted-foreground text-center">
        Not a member?{' '}
        <span className="text-amber">Join the deal list below</span> or contact OVLP directly.
      </p>
    </div>
  );
}