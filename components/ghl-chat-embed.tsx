'use client';

import { useEffect } from 'react';

const WIDGET_ID = '6a1730411b5a98ef9dec746a';
const LOCATION_ID = 'bNT4wp0nukIQdBJbQDaa';
const LOADER_SRC = 'https://widgets.leadconnectorhq.com/loader.js';

/** Loads GHL chat after React hydration so third-party DOM injection cannot break client UI. */
export function GhlChatEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`)) return;

    const script = document.createElement('script');
    script.src = LOADER_SRC;
    script.async = true;
    script.dataset.resourcesUrl = 'https://widgets.leadconnectorhq.com/chat-widget/loader.js';
    script.dataset.widgetId = WIDGET_ID;
    script.dataset.locationId = LOCATION_ID;
    script.dataset.source = 'WEB_USER';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-chat-widget=""
      data-widget-id={WIDGET_ID}
      data-location-id={LOCATION_ID}
    />
  );
}