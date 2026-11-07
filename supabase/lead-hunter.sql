-- Haliviq Lead Hunter: run once in Supabase > SQL Editor.
-- Only the server (service role / secret key) reads and writes this table.
-- RLS is on with no policies, so the public anon key cannot see any lead.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  domain text not null unique,
  company text,
  website text,
  industry text,
  country text,
  city text,
  employees integer,
  linkedin text,
  phone text,
  source text not null default 'manual',   -- manual | apollo
  apollo_id text,

  contact_name text,
  contact_title text,
  email text,

  status text not null default 'new'
    check (status in ('new', 'audited', 'qualified', 'contacted', 'replied', 'won', 'lost', 'skip')),
  score integer,
  grade text,
  audit jsonb,
  ai jsonb,
  notes text,

  audited_at timestamptz,
  brevo_synced_at timestamptz
);

create index if not exists leads_score_idx on public.leads (score desc nulls last);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;
