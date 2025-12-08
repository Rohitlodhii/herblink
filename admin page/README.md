# Admin Registrations — Next.js + Postgres

This project is a simple accessible admin UI built with Next.js and a Postgres backend. It exposes API routes to list and update registration statuses and a client UI to approve/disapprove registrations.

Getting started (Windows PowerShell)

1. Install dependencies

```powershell
cd "e:\admin page"
npm install
```

2. Create a Postgres database and set `DATABASE_URL` environment variable

Example `DATABASE_URL`:

```
postgres://username:password@localhost:5432/admin_db
```

Set it for your PowerShell session:

```powershell
$env:DATABASE_URL = 'postgres://username:password@localhost:5432/admin_db'
```

3. Initialize the database

You can run the SQL in `db/init.sql`. Example using `psql`:

```powershell
psql -d admin_db -f "db/init.sql"
```

Notes: The `init.sql` uses `gen_random_uuid()` for UUID generation. If your Postgres setup uses `uuid-ossp`, swap the UUID default to `uuid_generate_v4()` or create the extension `CREATE EXTENSION IF NOT EXISTS pgcrypto;`.

4. Run the development server

```powershell
npm run dev
```

Open http://localhost:3000

API endpoints

- `GET /api/registrations` — list registrations
- `POST /api/registrations` — create a registration (body: `{ type, name, email, location }`)
- `POST /api/registrations/:id/approve` — mark approved
- `POST /api/registrations/:id/disapprove` — mark disapproved

Accessibility

The UI includes:
- Semantic HTML, headings and landmarks
- Skip link, ARIA attributes and live region
- Keyboard-accessible controls and simple modal dialog
- Sufficient contrast and visible focus styles

Next steps / Suggestions

- Add authentication (e.g., NextAuth) so only admins can access API routes.
- Add server-side validation and rate limiting.
- Add pagination and server-side filtering.
- Add tests and CI configuration for deployment.

If you want, I can:
- Add authentication scaffolding.
- Switch DB access to Prisma and add migrations.
- Add Docker Compose for Postgres + app.
