# AURA RESERVE — 3-Minute Supabase Database Setup

Follow these simple steps to connect **AURA RESERVE (Private Vineyard & Tasting Estate OS)** to a real live Supabase PostgreSQL database:

### 1. Create a Supabase Project
1. Log in to [supabase.com](https://supabase.com).
2. Create a new project named `aura-reserve-os`.
3. Choose your nearest database region.

### 2. Run Database Migrations
1. Navigate to the **SQL Editor** tab in your Supabase dashboard.
2. Open `supabase/schema.sql` from this repository, paste the contents into the editor, and click **Run**.
3. Open `supabase/seed.sql`, paste the contents into the editor, and click **Run**.

### 3. Connect Environment Keys
1. Copy your `Project URL` and `anon public key` from **Project Settings > API**.
2. Rename `.env.example` to `.env` and fill in the values:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
3. Run `npm run build` and deploy to Render or Vercel!
