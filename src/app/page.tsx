import Link from "next/link";

const modules = [
  "Fleet intelligence",
  "Rental lifecycle",
  "Finance tracking",
  "Operational analytics",
  "Task management",
  "Incident audit trail",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Operations intelligence platform
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            KinsenOPS turns fleet, rental, finance, and incident data into one operator-ready workspace.
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            This portfolio build demonstrates a production-style Next.js operations system with tRPC,
            Prisma, Supabase-compatible Postgres, role-aware workflows, AI chat, and Cloudflare-ready
            packaging. The public overview is open so reviewers can understand the product before any
            protected workspace access is required.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div key={module} className="rounded-lg border bg-card p-4 text-sm font-medium">
              {module}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/dashboard"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Open protected workspace
          </Link>
          <a
            href="https://github.com/kostasuser01gr/KinsenOPS-Platform"
            className="rounded-md border px-4 py-2 text-sm font-medium"
          >
            View source
          </a>
        </div>
      </section>
    </main>
  );
}
