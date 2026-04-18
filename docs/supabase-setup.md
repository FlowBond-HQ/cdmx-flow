# Supabase setup (FLOW CDMX site)

## 1. Create or open the project

In [Supabase Dashboard](https://supabase.com/dashboard), select the project used for FLOW CDMX (or create one).

## 2. Run the schema

Open **SQL Editor** → New query → run **all** migration files **in order**:

1. `supabase/migrations/20250418120000_ticket_waitlist.sql` → **Run**
2. `supabase/migrations/20250418130000_artist_applications.sql` → **Run**
3. `supabase/migrations/20250418140000_sponsor_collab_admin_credentials.sql` → **Run**

You should see **`ticket_waitlist`**, **`artist_applications`**, **`sponsor_inquiries`**, **`collaborator_applications`**, and optionally **`admin_credentials`** under **Table Editor**.

## 3. API keys

**Project Settings → API**

- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **service_role** `secret` → `SUPABASE_SERVICE_ROLE_KEY` (server-only; never expose to the client or Git)

The `anon` key is not required for the current waitlist flow (the Next.js route uses the service role).

## 4. Local development

Copy `.env.example` to `.env.local` and fill in real values. Restart `npm run dev`.

## 5. Production (Vercel)

In the Vercel project → **Settings → Environment Variables**, add:

- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD` — optional shared bootstrap password for `steph` / `michelle` until each user saves a personal password via **`/admin/change-password`** (stored as bcrypt in **`admin_credentials`**)
- `ADMIN_SESSION_SECRET` — random string, at least 16 characters (signs the admin session cookie)

Redeploy so the API route can insert rows.

Optional: add the **`admin.flownation.world`** domain to the same Vercel project; middleware maps that host to `/admin` routes.

## 6. Verify

- **Tickets:** submit the waitlist form on the home page → row in **`ticket_waitlist`**.
- **Artists:** open **`/artistas/aplicar`**, submit the form → row in **`artist_applications`**.
- **Sponsors:** open **`/sponsors#patrocinio-form`**, submit the form → row in **`sponsor_inquiries`**.
- **Brands / producers:** open **`/colaborar`**, submit the form → row in **`collaborator_applications`**.

If inserts fail, check Vercel function logs and that the migration ran (table exists).

## Security notes

- RLS is enabled with **no** public insert policies; only the service role (used in `app/api/waitlist/route.ts`) can write.
- Rotate the service role key if it is ever leaked.
- Consider rate limiting / CAPTCHA later if you see spam signups.
