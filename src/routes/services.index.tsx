import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: "Security Services — Recon848 Insights" },
      {
        name: "description",
        content:
          "Six security disciplines: executive protection, threat assessment, surveillance, consulting, close protection and crisis response.",
      },
      { property: "og:title", content: "Security Services — Recon848 Insights" },
      {
        property: "og:description",
        content:
          "Six disciplines, one standard of care. Explore each Recon848 Insights security service in detail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <SiteHeader />
      <main className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          01 — Services
        </div>
        <h1 className="mt-3 max-w-[22ch] font-display text-4xl font-semibold tracking-tight text-balance xl:text-5xl">
          Six disciplines, one standard of care
        </h1>
        <p className="mt-6 max-w-[54ch] text-sm leading-relaxed text-muted">
          Every engagement is scoped, staffed and reviewed against a single escalation
          protocol. Select a discipline for scope, deliverables and response times.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[8px] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group bg-panel p-7 transition-colors hover:bg-panel2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted">{s.code}</span>
                <span className="size-2 rounded-full bg-accent/30 transition-colors group-hover:bg-accent" />
              </div>
              <h2 className="mt-6 font-display text-lg font-medium">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              <span className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                View brief →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
