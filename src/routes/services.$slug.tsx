import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, services } from "@/lib/services";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Recon848 Insights" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} — Recon848 Insights`;
    return {
      meta: [
        { title },
        { name: "description", content: service.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: service.summary.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <SiteHeader />
      <main className="mx-auto max-w-[1200px] px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-semibold">Service not found</h1>
        <p className="mt-3 text-sm text-muted">
          That discipline isn't part of our current offering.
        </p>
        <Link
          to="/services"
          className="ink-fill mt-8 inline-flex rounded-[6px] px-4 py-2.5 text-sm font-medium"
        >
          All services
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-line bg-panel">
          <div className="scanline" aria-hidden="true" />
          <div className="mx-auto max-w-[1200px] px-6 py-20">
            <nav className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <Link to="/" className="hover:text-ink">
                Home
              </Link>{" "}
              / <Link to="/services" className="hover:text-ink">Services</Link> /{" "}
              <span className="text-accent">{service.code}</span>
            </nav>
            <h1 className="reveal mt-6 max-w-[18ch] font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance xl:text-5xl">
              <span className="steel-text">{service.title}</span>
            </h1>
            <p className="reveal mt-6 max-w-[58ch] text-base leading-relaxed text-muted">
              {service.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/"
                hash="contact"
                className="ink-fill inline-flex rounded-[6px] px-4 py-2.5 text-sm font-medium"
              >
                Request this service
              </Link>
              <Link
                to="/services"
                className="inline-flex rounded-[6px] px-4 py-2.5 text-sm font-medium ring-1 ring-inset ring-line transition-colors hover:ring-ink/30"
              >
                All disciplines
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Scope of work
            </h2>
            <ul className="mt-6 space-y-4">
              {service.scope.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line pb-4 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              What you receive
            </h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 border-b border-line pb-4 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-ink/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-[8px] bg-panel2 p-6 ring-1 ring-line">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Response standard
              </div>
              <p className="mt-2 text-sm">{service.response}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-panel">
          <div className="mx-auto max-w-[1200px] px-6 py-16">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Related disciplines
            </div>
            <div className="mt-8 grid gap-px overflow-hidden rounded-[8px] bg-line ring-1 ring-line sm:grid-cols-3">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="bg-paper p-6 transition-colors hover:bg-panel2"
                >
                  <span className="font-mono text-[11px] text-muted">{s.code}</span>
                  <div className="mt-4 font-display text-base font-medium">{s.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
