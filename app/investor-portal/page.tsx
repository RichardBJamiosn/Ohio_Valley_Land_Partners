import type { Metadata } from 'next';
import { ChartBar as BarChart3, TrendingUp, Users, Building2, Download, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Investor Portal',
  description: 'Access market reports, project performance metrics, and investment data for Ohio Valley Land Partners properties and developments.',
};

const performanceMetrics = [
  {
    label: 'Portfolio IRR',
    value: '18.5%',
    change: '+2.1%',
    positive: true,
  },
  {
    label: 'Total Deployed Capital',
    value: '$47.2M',
    change: '+$5.8M',
    positive: true,
  },
  {
    label: 'Average Project Return',
    value: '$680K',
    change: '+12.3%',
    positive: true,
  },
  {
    label: 'Active Investments',
    value: '12',
    change: '+2',
    positive: true,
  },
];

const projects = [
  {
    name: 'Wheeling Industrial Park',
    location: 'Ohio County, WV',
    status: 'In Development',
    irr: '16.2%',
    investment: '$8.5M',
    progress: 45,
  },
  {
    name: 'Jefferson County Commons',
    location: 'Jefferson County, OH',
    status: 'Leasing Phase',
    irr: '19.8%',
    investment: '$12.3M',
    progress: 78,
  },
  {
    name: 'Belmont Residential Village',
    location: 'Belmont County, OH',
    status: 'Phase 1 Complete',
    irr: '22.1%',
    investment: '$9.7M',
    progress: 100,
  },
  {
    name: 'Ohio Valley Commercial Hub',
    location: 'Marshall County, WV',
    status: 'Phase 1 Development',
    irr: '14.5%',
    investment: '$6.8M',
    progress: 35,
  },
];

const reports = [
  {
    title: 'Q4 2024 Market Report',
    period: 'October - December 2024',
    date: 'January 15, 2025',
    type: 'quarterly',
  },
  {
    title: '2024 Annual Performance Summary',
    period: 'Full Year 2024',
    date: 'January 10, 2025',
    type: 'annual',
  },
  {
    title: 'Q3 2024 Market Report',
    period: 'July - September 2024',
    date: 'October 15, 2024',
    type: 'quarterly',
  },
  {
    title: 'Wheeling Industrial Park - Phase 2 Milestone',
    period: 'Site Development Complete',
    date: 'September 22, 2024',
    type: 'milestone',
  },
];

export default function InvestorPortal() {
  return (
    <div>
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Investor Portal
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Access comprehensive market reports, real-time project performance metrics, and
              detailed investment analytics for all active Ohio Valley Land Partners developments.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button asChild>
                <Link href="/contact?type=investor">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/download/investor-guide">Download Investor Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
            Portfolio Performance
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {performanceMetrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                  <span className={`text-sm font-semibold ${metric.positive ? 'text-accent' : 'text-destructive'}`}>
                    {metric.change}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
            Active Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.location}</p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                        {project.status}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Development Progress</span>
                        <span className="text-sm font-semibold text-foreground">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent/60"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 sm:text-right sm:min-w-[200px]">
                    <div>
                      <p className="text-sm text-muted-foreground">Expected IRR</p>
                      <p className="text-2xl font-bold text-accent mt-1">{project.irr}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Investment</p>
                      <p className="text-lg font-semibold text-foreground mt-1">
                        {project.investment}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-12">
            Market Reports & Documents
          </h2>
          <div className="space-y-4">
            {reports.map((report, idx) => (
              <article
                key={idx}
                className="rounded-xl border border-border bg-card p-6 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="flex-shrink-0 mt-1">
                        {report.type === 'quarterly' && (
                          <Calendar className="h-5 w-5 text-accent" />
                        )}
                        {report.type === 'annual' && (
                          <TrendingUp className="h-5 w-5 text-accent" />
                        )}
                        {report.type === 'milestone' && (
                          <Building2 className="h-5 w-5 text-accent" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{report.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{report.period}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Published {report.date}</p>
                  </div>

                  <Button variant="outline" size="sm" className="flex-shrink-0" asChild>
                    <Link href={`/download/report/${idx}`}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Investor Resources
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Access our comprehensive library of investment documents, market analyses, and
              educational materials.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Link
                href="/download/investment-prospectus"
                className="rounded-lg border border-border bg-background p-6 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Investment Prospectus</h3>
                <p className="text-sm text-muted-foreground">Detailed overview of all current investment opportunities</p>
              </Link>

              <Link
                href="/download/market-analysis"
                className="rounded-lg border border-border bg-background p-6 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Market Analysis</h3>
                <p className="text-sm text-muted-foreground">Comprehensive regional real estate market intelligence</p>
              </Link>

              <Link
                href="/download/due-diligence"
                className="rounded-lg border border-border bg-background p-6 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Due Diligence Package</h3>
                <p className="text-sm text-muted-foreground">Complete investment documentation and verification</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
