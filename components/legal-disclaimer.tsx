import Link from 'next/link';
import { cn } from '@/lib/utils';

type LegalDisclaimerProps = {
  className?: string;
  /** Light text for dark backgrounds (footer, forest sections) */
  tone?: 'default' | 'on-dark';
};

/**
 * Single-line disclaimer for educational pages. Full text lives at /disclaimer.
 */
export function LegalDisclaimer({ className, tone = 'default' }: LegalDisclaimerProps) {
  const textClass =
    tone === 'on-dark'
      ? 'text-[11px] leading-relaxed text-white/35'
      : 'text-[11px] leading-relaxed text-muted-foreground/70';

  const linkClass =
    tone === 'on-dark'
      ? 'underline underline-offset-2 hover:text-white/50'
      : 'underline underline-offset-2 hover:text-muted-foreground';

  return (
    <p className={cn(textClass, className)}>
      General information only — not legal or real estate advice. OVLP is a principal buyer, not a
      licensed broker or law firm.{' '}
      <Link href="/disclaimer" className={linkClass}>
        Legal disclaimer
      </Link>
      .
    </p>
  );
}