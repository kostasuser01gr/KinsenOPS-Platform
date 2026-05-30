# KinsenOPS Platform

[![CI](https://github.com/kostasuser01gr/KinsenOPS-Platform/actions/workflows/ci.yml/badge.svg)](https://github.com/kostasuser01gr/KinsenOPS-Platform/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org)

> Full-stack operations intelligence platform for fleet management, rental operations, and business analytics.

Built with **Next.js 16**, **React 19**, **tRPC**, **Prisma**, and **Supabase**. This repo is kept local-first; hosted deployment is optional and requires explicit approval before any platform state is changed.

---

## Features

| Module | Description |
|--------|-------------|
| **Dashboard** | KPI overview, live metrics, activity feed |
| **Fleet** | Vehicle inventory, status tracking, maintenance scheduling |
| **Rentals** | Booking lifecycle, customer management, contract generation |
| **Finance** | Revenue tracking, invoicing, expense reports |
| **Analytics** | Charts, trend analysis, operational insights |
| **Tasks** | Internal task management with priority queues |
| **Incidents** | Incident reporting, escalation, audit trail |
| **AI Chat** | Integrated assistant for query resolution |

---

## Tech Stack

**Frontend**
- Next.js 16 (App Router) · React 19 · TypeScript 5
- Tailwind CSS 4 · Radix UI · shadcn/ui · Lucide · Sonner

**Backend**
- tRPC 11 (end-to-end type-safe API)
- Prisma 6 + PostgreSQL (via Supabase)
- NextAuth v5 (session-based auth)
- Zod 4 validation · React Hook Form · TanStack Query

**Infrastructure**
- Supabase (Postgres + Auth + Storage)
- Cloudflare Workers support via OpenNext + Wrangler
- Local-only development by default

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm
- A local or separately approved Supabase-compatible Postgres database

### Setup

```bash
git clone https://github.com/kostasuser01gr/KinsenOPS-Platform
cd KinsenOPS-Platform
npm install
cp .env.example .env.local
```

Set these in `.env.local`:
```env
DATABASE_URL=your_supabase_postgres_connection_string
DIRECT_URL=your_supabase_direct_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
AUTH_SECRET=your_nextauth_secret
```

```bash
npx prisma generate
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Local-Only / Zero-Charge Mode

Do not run deployment, linking, or platform secret commands unless you explicitly intend to change hosted platform state. In zero-charge mode, use only local commands such as `npm ci`, `npm run build`, `npm run cf:build`, and `npx tsc --noEmit`.

`wrangler.jsonc` intentionally contains only non-secret defaults. Keep database URLs, Supabase keys, auth secrets, and platform tokens in local environment files or platform secret stores; never commit them to the repo.

---

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Login, register pages
│   ├── (dashboard)/     # Protected app routes
│   │   ├── analytics/
│   │   ├── audit/
│   │   ├── chat/
│   │   ├── finance/
│   │   ├── fleet/
│   │   ├── incidents/
│   │   ├── rentals/
│   │   └── tasks/
│   └── api/             # tRPC handler + auth endpoints
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # tRPC client, Supabase client, utils
└── server/              # tRPC routers, Prisma client
```

---

## License

MIT
