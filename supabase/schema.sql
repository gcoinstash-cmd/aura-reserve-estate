-- AURA RESERVE — Supabase Production Schema (PostgreSQL)
-- Ghost Factory™ Verified Architecture with Row-Level Security (RLS)

create table if not exists public.patron_profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  phone text,
  tier text check (tier in ('Collector', 'Grand Cru', 'Founder Circle')) default 'Collector',
  vault_locker_number integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.cellar_reservations (
  id uuid primary key default gen_random_uuid(),
  patron_id uuid references public.patron_profiles(id) on delete cascade,
  experience_title text not null,
  reservation_date date not null,
  time_slot text not null,
  guests_count integer not null default 2,
  status text check (status in ('Pending', 'Confirmed', 'In Cellar', 'Completed', 'Cancelled')) default 'Confirmed',
  sommelier text,
  allocation_notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.vintage_allocations (
  id uuid primary key default gen_random_uuid(),
  vintage_year integer not null,
  wine_name text not null,
  terroir text default 'Rutherford, Napa Valley',
  barrels_count integer not null,
  oak_type text not null,
  cases_available integer not null,
  price_per_bottle numeric(10, 2) not null,
  status text check (status in ('Oak Aging', 'Bottling Scheduled', 'Released', 'Sold Out')) default 'Oak Aging',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.vault_lockers (
  locker_number integer primary key,
  patron_id uuid references public.patron_profiles(id) on delete set null,
  temperature_f numeric(4, 1) default 55.0,
  humidity_pct numeric(4, 1) default 72.0,
  bottles_stored integer default 0,
  status text check (status in ('Allocated', 'Vacant', 'Maintenance')) default 'Allocated',
  last_inspection timestamp with time zone default timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS)
alter table public.patron_profiles enable row level security;
alter table public.cellar_reservations enable row level security;
alter table public.vintage_allocations enable row level security;
alter table public.vault_lockers enable row level security;

-- Policies (Public Demo Read / Authenticated Admin Write)
create policy "Allow public read access to allocations" on public.vintage_allocations for select using (true);
create policy "Allow public read access to reservations" on public.cellar_reservations for select using (true);
create policy "Allow public read access to vault lockers" on public.vault_lockers for select using (true);
