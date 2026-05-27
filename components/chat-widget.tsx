'use client';

import Script from 'next/script';

// GHL widget on ALL pages — required for A2P compliance scanner
// Single opt-in source: only the GHL widget collects phone numbers
export function ChatWidget() {
  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a1730411b5a98ef9dec746a"
      data-location-id="bNT4wp0nukIQdBJbQDaa"
      data-source="WEB_USER"
      strategy="lazyOnload"
    />
  );
}
