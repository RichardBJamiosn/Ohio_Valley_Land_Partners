'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

const PAGES_WITH_FORMS = [
  '/',
  '/land',
  '/contact',
  '/investor-portal',
  '/sell-land',
  '/properties',
];

export function ChatWidget() {
  const pathname = usePathname();

  const hasForm = PAGES_WITH_FORMS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  );

  if (hasForm) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a060e2aed0c5f3c6e1cc57b"
      data-source="WEB_USER"
      strategy="lazyOnload"
    />
  );
}
