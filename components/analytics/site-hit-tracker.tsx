'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const PORTAL_API =
  process.env.NEXT_PUBLIC_OVLP_PORTAL_URL ?? 'https://ovlp-portal.vercel.app';
const STAFF_COOKIE = 'ovlp_staff';
const VISITOR_KEY = 'ovlp_vid';

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setStaffCookie() {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${STAFF_COOKIE}=1; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function getVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return 'anon';
  }
}

function utmFromSearch(params: URLSearchParams) {
  return {
    utm_source: params.get('utm_source') ?? undefined,
    utm_medium: params.get('utm_medium') ?? undefined,
    utm_campaign: params.get('utm_campaign') ?? undefined,
  };
}

export default function SiteHitTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTracked = useRef('');

  useEffect(() => {
    if (searchParams.get('ovlp_staff') === '1') {
      setStaffCookie();
    }
  }, [searchParams]);

  useEffect(() => {
    if (!pathname) return;
    if (readCookie(STAFF_COOKIE) === '1') return;

    const key = `${pathname}${window.location.search}`;
    if (key === lastTracked.current) return;
    lastTracked.current = key;

    const params = new URLSearchParams(window.location.search);
    const utm = utmFromSearch(params);

    fetch(`${PORTAL_API}/api/analytics/marketing-hit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: pathname,
        referrer: document.referrer || undefined,
        visitor_id: getVisitorId(),
        ...utm,
      }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname, searchParams]);

  return null;
}