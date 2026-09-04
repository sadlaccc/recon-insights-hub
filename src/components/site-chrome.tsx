import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";

const company = [
  { to: "/about", label: "About the firm", desc: "Who we are and how we work." },
  { to: "/capabilities", label: "Capabilities", desc: "The 848 protocol in detail." },
  { to: "/coverage", label: "Coverage & maps", desc: "Desks, regions, response times." },
  { to: "/credentials", label: "Credentials", desc: "Vetting, insurance, standards." },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobile(false)}>
          <span className="ink-fill grid size-7 place-items-center rounded-[4px] font-display text-[11px] font-semibold">
            848
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            Recon<span className="text-accent">848</span>{" "}
            <span className="font-body font-normal text-muted">Insights</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm text-muted md:flex"
          onMouseLeave={() => setOpen(false)}
        >
          <button
            type="button"
            onMouseEnter={() => setOpen(true)}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex items-center gap-1.5 transition-colors hover:text-ink"
          >
            Services
            <span className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
          </button>
          <Link
            to="/capabilities"
            onMouseEnter={() => setOpen(false)}
            className="transition-colors hover:text-ink"
            activeProps={{ className: "text-ink" }}
          >
            Capabilities
          </Link>
          <Link
            to="/coverage"
            onMouseEnter={() => setOpen(false)}
            className="transition-colors hover:text-ink"
            activeProps={{ className: "text-ink" }}
          >
            Coverage
          </Link>
          <Link
            to="/about"
            onMouseEnter={() => setOpen(false)}
            className="transition-colors hover:text-ink"
            activeProps={{ className: "text-ink" }}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="ink-fill hidden items-center rounded-[4px] px-3 py-2 text-sm font-medium sm:inline-flex"
          >
            Request a briefing
          </Link>
          <button
            type="button"
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobile}
            className="grid size-9 place-items-center rounded-[6px] ring-1 ring-line md:hidden"
          >
            <span className="font-mono text-sm">{mobile ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {/* mega menu */}
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className={`absolute inset-x-0 top-16 hidden border-b border-line bg-paper shadow-[0_24px_48px_-32px_rgba(15,20,25,0.35)] md:block ${
          open ? "" : "pointer-events-none opacity-0"
        } transition-opacity duration-150`}
      >
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-9 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Disciplines
            </div>
            <div className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="group rounded-[6px] px-3 py-3 transition-colors hover:bg-panel"
                >
                  <div className="font-mono text-[10px] text-muted">{s.code}</div>
                  <div className="mt-1 font-display text-sm font-medium text-ink">{s.title}</div>
                  <div className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-muted">
                    {s.desc}
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="mt-5 inline-block px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
            >
              All disciplines →
            </Link>
          </div>
          <div className="rounded-[8px] bg-panel p-6 ring-1 ring-line">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              The firm
            </div>
            <div className="mt-4 space-y-3">
              {company.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-[6px] px-3 py-2 transition-colors hover:bg-paper"
                >
                  <div className="text-sm font-medium text-ink">{c.label}</div>
                  <div className="text-[12px] text-muted">{c.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {mobile && (
        <div className="border-t border-line bg-paper md:hidden">
          <div className="space-y-6 px-6 py-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Disciplines
              </div>
              <div className="mt-3 grid gap-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setMobile(false)}
                    className="text-sm text-muted"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                The firm
              </div>
              <div className="mt-3 grid gap-2">
                {company.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    onClick={() => setMobile(false)}
                    className="text-sm text-muted"
                  >
                    {c.label}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setMobile(false)} className="text-sm text-muted">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="ink-fill grid size-7 place-items-center rounded-[4px] font-display text-[11px] font-semibold">
                848
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
                Recon<span className="text-accent">848</span>{" "}
                <span className="font-body font-normal text-muted">Insights</span>
              </span>
            </div>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-muted">
              Private security and risk intelligence for corporate and private clients.
              Quiet by design, accountable by protocol.
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Desk online · 24×7
            </div>
          </div>

          <FooterCol
            title="Services"
            links={services.slice(0, 4).map((s) => ({
              to: "/services/$slug" as const,
              params: { slug: s.slug },
              label: s.title,
            }))}
          />
          <FooterCol
            title="Firm"
            links={[
              { to: "/about" as const, label: "About" },
              { to: "/capabilities" as const, label: "Capabilities" },
              { to: "/credentials" as const, label: "Credentials" },
              { to: "/coverage" as const, label: "Coverage" },
            ]}
          />
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Contact
            </div>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <div>+44 (0)20 848 0 848</div>
              <div>desk@recon848.example</div>
              <div>London · 51.5074°N 0.1278°W</div>
            </div>
            <Link
              to="/contact"
              className="ink-fill mt-5 inline-flex items-center rounded-[6px] px-3 py-2 text-sm font-medium"
            >
              Open a channel
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            © {new Date().getFullYear()} Recon848 Insights · Est. confidential
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted/70">
            ISO 18788 aligned · Fully insured
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; params?: { slug: string }; label: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{title}</div>
      <div className="mt-4 grid gap-2">
        {links.map((l) => (
          <Link
            key={l.label}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            to={l.to as any}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            params={l.params as any}
            className="text-sm text-muted transition-colors hover:text-ink"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
