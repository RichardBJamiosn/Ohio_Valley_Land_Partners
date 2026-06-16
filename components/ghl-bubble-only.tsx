'use client';

import { useEffect } from 'react';

const BUBBLE_ONLY_STYLE_ID = 'ovlp-ghl-bubble-only';
const BUBBLE_ONLY_CSS = `
  #lc_text-widget--box,
  .lc_text-widget--box,
  .lc_text-widget--prompt,
  .lc_text-widget_prompt--root {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
    width: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
  }

  .lc_text-widget--bubble,
  #lc_text-widget--btn {
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }
`;

function injectBubbleOnlyStyles() {
  const widget = document.querySelector('chat-widget');
  const shadow = widget?.shadowRoot;
  if (!shadow || shadow.getElementById(BUBBLE_ONLY_STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = BUBBLE_ONLY_STYLE_ID;
  style.textContent = BUBBLE_ONLY_CSS;
  shadow.appendChild(style);
}

export function GhlBubbleOnly() {
  useEffect(() => {
    injectBubbleOnlyStyles();

    const observer = new MutationObserver(() => {
      injectBubbleOnlyStyles();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const interval = window.setInterval(injectBubbleOnlyStyles, 1000);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
    };
  }, []);

  return null;
}