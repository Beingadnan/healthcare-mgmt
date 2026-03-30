# Healthcare Management (CarePulse)

A patient-facing healthcare app built with **Next.js 14** (App Router). Patients can register, complete a medical profile, book appointments, and track visits. An **admin** area supports reviewing, scheduling, and cancelling appointments, with optional **SMS** via Twilio when appointments are confirmed.

---

## Tech stack

| Area | Choice |
|------|--------|
| Framework | Next.js 14, React 18, TypeScript |
| UI | Tailwind CSS, shadcn/ui, Radix primitives |
| Backend / data | [Appwrite](https://appwrite.io) (auth, database, storage) |
| Tables | TanStack Table |
| Monitoring | Sentry |
| SMS | Twilio |

---

## Features

- Patient registration and extended profile (insurance, emergency contacts, ID upload to Appwrite Storage)
- Book and manage appointments; status workflow (e.g. pending, scheduled, cancelled)
- Admin dashboard for appointment operations and passkey-gated access
- Responsive layout
- Optional Twilio SMS on confirmation

---

## Prerequisites

- Node.js 18+ and npm
- An [Appwrite Cloud](https://cloud.appwrite.io) project (or self-hosted Appwrite) with:
  - Database and collections for patients, doctors, and appointments (IDs go in `.env.local`)
  - Storage bucket for identification documents
  - API key with appropriate scopes
- (Optional) Twilio credentials for SMS

---

## Local setup

```bash
git clone https://github.com/Beingadnan/healthcare-mgmt.git
cd healthcare-mgmt
npm install
```

### Environment variables

Copy the example file and fill in your Appwrite (and optional Twilio) values:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_ENDPOINT` | Appwrite API URL (e.g. `https://cloud.appwrite.io/v1`) |
| `PROJECT_ID` | Appwrite project ID |
| `API_KEY` | Server API key |
| `DATABASE_ID` | Database ID |
| `PATIENT_COLLECTION_ID` | Patients collection |
| `DOCTOR_COLLECTION_ID` | Doctors collection (if used by your schema) |
| `APPOINTMENT_COLLECTION_ID` | Appointments collection |
| `NEXT_PUBLIC_BUCKET_ID` | Storage bucket for uploads |
| `NEXT_PUBLIC_ADMIN_PASSKEY` | Passkey expected in the admin login UI |

If `NEXT_PUBLIC_ENDPOINT` or `PROJECT_ID` is missing, the Appwrite client can throw **`Invalid URL`** (e.g. requests like `undefined/users`). Ensure **all required** variables in `.env.example` are set before running the app.

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm start`, `npm run lint`.

---

## Project layout (high level)

- `app/` — routes (home, patient flows, admin)
- `components/` — UI and forms
- `lib/` — Appwrite client, actions, validation, utilities
- `types/` — TypeScript definitions

---

## License

This project is for learning and portfolio use. Respect Appwrite, Twilio, and third-party asset licenses where applicable.
