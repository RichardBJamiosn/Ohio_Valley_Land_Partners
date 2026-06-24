'use client';

import { useEffect } from 'react';

const STYLE_ID = 'ovlp-ghl-prompt-hidden';

// Hide only the greeting prompt/teaser (avatar + "Hi there!" bubble).
// Keep the launcher button and full chat panel (phone opt-in form) intact for A2P.
const PROMPT_HIDDEN_CSS = `
  .lc_text-widget--prompt,
  .lc_text-widget_prompt--root,
  #lc_text-widget--prompt {
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

function injectPromptHiddenStyles() {
  const widget = document.querySelector('chat-widget');
  const shadow = widget?.shadowRoot;
  if (!shadow || shadow.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = PROMPT_HIDDEN_CSS;
  shadow.appendChild(style);
}

export function GhlBubbleOnly() {
  useEffect(() => {
    injectPromptHiddenStyles();

    const observer = new MutationObserver(() => {
      injectPromptHiddenStyles();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const interval = window.setInterval(injectPromptHiddenStyles, 1000);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
    };
  }, []);

  return null;
}