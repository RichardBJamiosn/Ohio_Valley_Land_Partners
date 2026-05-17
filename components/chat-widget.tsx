'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { MessageCircle, X, Send, CheckCircle, Loader2 } from 'lucide-react';

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
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasForm = PAGES_WITH_FORMS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  );

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Reset on close
  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setSent(false);
        setError('');
        setForm({ name: '', message: '' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.message.trim()) {
      setError('Both fields are required.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, message: form.message, page: pathname }),
      });
      if (!res.ok) throw new Error('Failed');
      setSent(true);
    } catch {
      setError('Something went wrong. Call us at (614) 653-7430.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Hidden GHL widget for compliance — only on non-form pages */}
      {!hasForm && (
        <>
          <Script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="6a060e2aed0c5f3c6e1cc57b"
            data-source="WEB_USER"
            strategy="lazyOnload"
          />
          <style>{`
            [data-chat-widget], .lc_text_widget, .lc-chat-widget,
            .lc-chat-widget-container, #lc-chat-widget,
            iframe[src*="leadconnectorhq"] {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
              width: 0 !important;
              height: 0 !important;
              position: absolute !important;
              left: -9999px !important;
            }
          `}</style>
        </>
      )}

      {/* Custom branded chat widget — all pages */}
      <div ref={panelRef} className="fixed bottom-5 right-5 z-50">
        {/* Chat panel */}
        <div
          className={`absolute bottom-16 right-0 w-80 origin-bottom-right transition-all duration-300 ease-out ${
            open
              ? 'scale-100 opacity-100 translate-y-0'
              : 'scale-95 opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div className="rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="bg-forest px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-cream">Ohio Valley Land Partners</h3>
                  <p className="text-xs text-white/50 mt-0.5">Typically reply within 1 hour</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/40 hover:text-white transition-colors p-1"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="bg-cream p-5">
              {sent ? (
                <div className="flex flex-col items-center gap-3 py-4 text-center">
                  <CheckCircle className="h-10 w-10 text-meadow" />
                  <p className="text-sm font-semibold text-forest">Message received</p>
                  <p className="text-xs text-forest/60">
                    We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {/* Greeting bubble */}
                  <div className="bg-forest/5 rounded-xl rounded-tl-sm px-4 py-3 mb-1">
                    <p className="text-xs text-forest/80 leading-relaxed">
                      Have a question about land in the Ohio Valley? Drop us a message — no pressure, no obligation.
                    </p>
                  </div>

                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-lg border border-forest/15 bg-white px-3 py-2.5 text-sm text-forest placeholder:text-forest/35 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors"
                  />
                  <textarea
                    placeholder="Your message..."
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    rows={3}
                    className="w-full rounded-lg border border-forest/15 bg-white px-3 py-2.5 text-sm text-forest placeholder:text-forest/35 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors resize-none"
                  />

                  {error && <p className="text-xs text-red-600">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full rounded-lg bg-amber hover:bg-amber/90 active:bg-amber/80 text-white font-semibold text-sm py-2.5 transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Floating trigger button */}
        <button
          onClick={() => setOpen(!open)}
          className={`group flex items-center justify-center h-12 w-12 rounded-full shadow-lg transition-all duration-300 ${
            open
              ? 'bg-forest/80 rotate-0'
              : 'bg-forest hover:bg-forest/90 hover:shadow-xl hover:scale-105'
          }`}
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          <span
            className={`absolute transition-all duration-300 ${
              open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
            }`}
          >
            <X className="h-5 w-5 text-cream" />
          </span>
          <span
            className={`absolute transition-all duration-300 ${
              open ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
            }`}
          >
            <MessageCircle className="h-5 w-5 text-cream" />
          </span>
        </button>
      </div>
    </>
  );
}
