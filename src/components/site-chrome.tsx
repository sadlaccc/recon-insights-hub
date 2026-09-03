import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="ink-fill grid size-7 place-items-center rounded-[4px] font-display text-[11px] font-semibold">
            848
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
            Recon<span className="text-accent">848</span>{" "}
            <span className="font-body font-normal text-muted">Insights</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <Link
            to="/services"
            className="transition-colors hover:text-ink"
            activeProps={{ className: "text-ink" }}
          >
            Services
          </Link>
          <Link to="/" hash="capabilities" className="transition-colors hover:text-ink">
            Capabilities
          </Link>
          <Link to="/" hash="credentials" className="transition-colors hover:text-ink">
            Credentials
          </Link>
        </nav>
        <Link
          to="/"
          hash="contact"
          className="ink-fill hidden items-center rounded-[4px] px-3 py-2 text-sm font-medium sm:inline-flex"
        >
          Request a briefing
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="ink-fill grid size-6 place-items-center rounded-[4px] font-display text-[10px] font-semibold">
            848
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            Recon848 Insights · Est. confidential
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted/70">
          Field report · rev 2.4
        </span>
      </div>
    </footer>
  );
}
