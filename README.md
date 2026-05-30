# KinsenOPS Platform

> Full-stack operations intelligence platform for fleet management, rental operations, and business analytics.

Built with **Next.js 16**, **React 19**, **tRPC**, **Prisma**, and **Supabase** — deployed to Cloudflare Workers via OpenNext.

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
- Cloudflare Workers (via OpenNext + Wrangler)
- Deployed with zero cold-starts on edge

---

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm
- A Supabase project

### Setup

```bash
git clone https://github.com/kostasuser01gr/KinsenOPS-Platform
cd KinsenOPS-Platform
pnpm install
cp .env.example .env.local
```

Set these in `.env.local`:
```env
DATABASE_URL=your_supabase_postgres_connection_string
DIRECT_URL=your_supabase_direct_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
AUTH_SECRET=your_nextauth_secret
```

```bash
pnpm prisma generate
pnpm prisma db push
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

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
