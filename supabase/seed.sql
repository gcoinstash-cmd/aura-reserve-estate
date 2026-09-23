-- AURA RESERVE — Seed Data Migrations
-- Initial patrons, vintage barrels, lockers, and tastings

insert into public.patron_profiles (id, full_name, email, phone, tier, vault_locker_number)
values
  ('11111111-1111-1111-1111-111111111111', 'Julian Rothschild', 'j.rothschild@estate.private', '+1 (415) 882-9012', 'Grand Cru', 84),
  ('22222222-2222-2222-2222-222222222222', 'Camille Beaumont', 'c.beaumont@chateau.fr', '+1 (212) 774-1928', 'Founder Circle', 72),
  ('33333333-3333-3333-3333-333333333333', 'Harrison Vance', 'h.vance@vancemedia.com', '+1 (310) 902-3341', 'Collector', 91);

insert into public.vintage_allocations (vintage_year, wine_name, terroir, barrels_count, oak_type, cases_available, price_per_bottle, status)
values
  (2024, 'Rutherford Single-Vineyard Cabernet Sauvignon', 'Rutherford Bench, Napa Valley', 18, 'Taransaud French Oak (Medium+)', 96, 275.00, 'Oak Aging'),
  (2023, 'Grand Cru Proprietary Red Blend', 'Aura Hillside Estate', 12, 'Sylvain French Oak', 0, 350.00, 'Sold Out'),
  (2022, 'Library Reserve Cabernet Sauvignon', 'Rutherford Old Block', 8, 'Darnajou French Oak', 42, 420.00, 'Released');

insert into public.vault_lockers (locker_number, patron_id, temperature_f, humidity_pct, bottles_stored, status)
values
  (84, '11111111-1111-1111-1111-111111111111', 55.0, 72.0, 144, 'Allocated'),
  (72, '22222222-2222-2222-2222-222222222222', 54.8, 71.5, 216, 'Allocated'),
  (91, '33333333-3333-3333-3333-333333333333', 55.2, 72.3, 72, 'Allocated');

insert into public.cellar_reservations (patron_id, experience_title, reservation_date, time_slot, guests_count, status, sommelier, allocation_notes)
values
  ('11111111-1111-1111-1111-111111111111', '2024 Reserve Barrel Tasting Flight', current_date, '3:00 PM - 5:00 PM', 4, 'In Cellar', 'Master Sommelier Jean-Luc', 'Pre-ordered 3 cases 2022 Cabernet Reserve.'),
  ('22222222-2222-2222-2222-222222222222', 'Library Vintage Omakase Salon', current_date + interval '1 day', '6:30 PM - 9:00 PM', 6, 'Confirmed', 'Sommelier Elena Vance', 'Vertical pour 2016 Founder Reserve.');
