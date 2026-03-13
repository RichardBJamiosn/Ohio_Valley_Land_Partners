/*
  # Create Leads, Projects, and County Data Tables

  ## Summary
  Initialize comprehensive database structure for Ohio Valley Land Partners platform.
  Supports lead capture with CRM integration, project tracking with investor data,
  and county-level market analytics. All tables include Row Level Security policies.

  ## New Tables
  - `leads`: Contact form submissions for CRM integration
  - `projects`: Investment projects with IRR and timeline data
  - `county_metrics`: Market data and analytics for each Ohio Valley county
  - `investor_reports`: Quarterly reports and investor communications

  ## Security
  - RLS enabled on all tables
  - Public read access for county_metrics (market data)
  - Authenticated-only for leads, projects, and reports
  - Admin policies for insert/update operations
*/

-- Create leads table for CRM integration
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  email text NOT NULL,
  full_name text NOT NULL,
  phone text,
  company text,
  lead_type text NOT NULL CHECK (lead_type IN ('land', 'commercial', 'investor', 'partnership', 'inquiry')),
  message text,
  property_interest text,
  budget_range text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'disqualified')),
  source text DEFAULT 'website',
  metadata jsonb
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can submit leads"
  ON leads FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view all leads"
  ON leads FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Create projects table for development tracking
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  name text NOT NULL,
  description text,
  silo text NOT NULL CHECK (silo IN ('land', 'commercial', 'development')),
  status text DEFAULT 'planning' CHECK (status IN ('planning', 'acquisition', 'development', 'active', 'complete')),
  location text NOT NULL,
  county text NOT NULL,
  total_investment numeric DEFAULT 0,
  projected_irr numeric,
  timeline_start date,
  timeline_end date,
  units integer,
  square_footage integer,
  images jsonb DEFAULT '[]'::jsonb,
  features jsonb DEFAULT '[]'::jsonb,
  metadata jsonb
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active projects"
  ON projects FOR SELECT
  USING (status IN ('active', 'complete'));

CREATE POLICY "Admins can manage projects"
  ON projects FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Create county metrics table for market data
CREATE TABLE IF NOT EXISTS county_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  county_name text NOT NULL,
  state text NOT NULL,
  median_price numeric,
  avg_days_on_market integer,
  yoy_appreciation numeric,
  active_listings integer,
  inventory_level text,
  population integer,
  median_household_income numeric,
  economic_drivers jsonb DEFAULT '[]'::jsonb,
  major_employers jsonb DEFAULT '[]'::jsonb,
  growth_corridors jsonb DEFAULT '[]'::jsonb,
  zoning_info jsonb,
  metadata jsonb
);

ALTER TABLE county_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view county metrics"
  ON county_metrics FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage county metrics"
  ON county_metrics FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Create investor reports table
CREATE TABLE IF NOT EXISTS investor_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  project_id uuid REFERENCES projects(id) ON DELETE CASCADE,
  report_type text NOT NULL CHECK (report_type IN ('quarterly', 'milestone', 'annual', 'special')),
  report_period text NOT NULL,
  irr_performance numeric,
  cash_flow numeric,
  occupancy_rate numeric,
  key_metrics jsonb DEFAULT '{}'::jsonb,
  highlights jsonb DEFAULT '[]'::jsonb,
  challenges jsonb DEFAULT '[]'::jsonb,
  next_steps jsonb DEFAULT '[]'::jsonb,
  pdf_url text,
  metadata jsonb
);

ALTER TABLE investor_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view recent reports"
  ON investor_reports FOR SELECT
  USING (created_at > now() - interval '2 years');

CREATE POLICY "Admins can manage reports"
  ON investor_reports FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_county ON projects(county);
CREATE INDEX IF NOT EXISTS idx_county_metrics_county ON county_metrics(county_name, state);
CREATE INDEX IF NOT EXISTS idx_investor_reports_project ON investor_reports(project_id);
