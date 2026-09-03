import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import opsRoom from "@/assets/ops-room.jpg";
import { services } from "@/lib/services";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Recon848 Insights — Private Security & Risk Intelligence" },
      {
        name: "description",
        content:
          "Discreet risk intelligence and private security for corporate and private clients. Executive protection, threat assessment, surveillance and crisis response — operating around the clock.",
      },
      { property: "og:title", content: "Recon848 Insights — Private Security & Risk Intelligence" },
      {
        property: "og:description",
        content:
          "Discreet risk intelligence and private security for corporate and private clients. We see the risk before it appears on the map.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const stats = [
  { value: "12,400+", label: "Engagements cleared" },
  { value: "99.7%", label: "Alert accuracy" },
  { value: "24×7", label: "Operations desk" },
  { value: "0", label: "Public incidents" },
];

function Index() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <SiteHeader />

      {/* hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="scanline" aria-hidden="true" />
        <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-20 lg:pt-28">
          <div className="reveal flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="text-accent">●</span> Live status{" "}
            <span className="text-ink/20">/</span> 51.5074°N 0.1278°W{" "}
            <span className="text-ink/20">/</span> 04:12:57Z
          </div>
          <h1
            className="reveal mt-8 max-w-[16ch] font-display text-4xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-5xl xl:text-6xl"
            style={{ animationDelay: "0.05s" }}
          >
            We see the risk{" "}
            <span className="steel-text">before it appears on the map.</span>
          </h1>
          <p
            className="reveal mt-7 max-w-[52ch] font-mono text-sm leading-relaxed text-muted"
            style={{ animationDelay: "0.12s" }}
          >
            DISCREET RISK INTELLIGENCE FOR CORPORATE & PRIVATE CLIENTS. RECON848
            INSIGHTS OPERATES AROUND THE CLOCK, WITH DISCIPLINE AND WITHOUT NOISE.
          </p>
          <div
            className="reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.18s" }}
          >
            <Link
              to="/"
              hash="contact"
              className="ink-fill inline-flex items-center rounded-[6px] px-4 py-2.5 text-sm font-medium"
            >
              Initiate inquiry
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-[6px] px-4 py-2.5 text-sm font-medium ring-1 ring-inset ring-line transition-colors hover:ring-ink/30"
            >
              View capabilities
            </Link>
          </div>
          <div
            className="reveal mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[6px] bg-line ring-1 ring-line md:grid-cols-4"
            style={{ animationDelay: "0.24s" }}
          >
            {[
              { k: "Clearance", v: "Tier 3 · Vetted" },
              { k: "Coverage", v: "40+ jurisdictions" },
              { k: "Response", v: "< 60 min" },
              { k: "Posture", v: "Undisclosed" },
            ].map((item) => (
              <div key={item.k} className="bg-panel px-5 py-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {item.k}
                </div>
                <div className="mt-1 font-display text-sm">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services" className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                01 — Services
              </div>
              <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-semibold tracking-tight text-balance xl:text-4xl">
                Six disciplines, one standard of care
              </h2>
            </div>
            <p className="max-w-[38ch] font-mono text-sm leading-relaxed text-muted">
              Every engagement is scoped, staffed and reviewed against a single
              escalation protocol.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[8px] bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-6 font-display text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                <span className="mt-5 inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  View brief →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* capabilities band */}
      <section id="capabilities" className="border-b border-line bg-panel">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            02 — Capabilities
          </div>
          <h2 className="mt-3 max-w-[24ch] font-display text-3xl font-semibold tracking-tight text-balance xl:text-4xl">
            Why clients trust the 848 protocol
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] bg-line ring-1 ring-line lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-6 py-8">
                <div className="steel-text font-display text-4xl font-semibold xl:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* credentials */}
      <section id="credentials" className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              03 — Credentials
            </div>
            <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-semibold tracking-tight text-balance xl:text-4xl">
              Verified. Insured. Quiet by design.
            </h2>
            <p className="mt-6 max-w-[46ch] text-sm leading-relaxed text-muted">
              Recon848 Insights was founded by former risk officers and field
              directors who left public-sector work to serve private clients
              directly. Our operators are individually vetted, continuously
              trained and bound by strict confidentiality — the discretion our
              clients depend on.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-[6px] px-5 py-4 ring-1 ring-line">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Accreditation
                </div>
                <div className="mt-1 text-sm">ISO 18788 aligned</div>
              </div>
              <div className="rounded-[6px] px-5 py-4 ring-1 ring-line">
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Liability cover
                </div>
                <div className="mt-1 text-sm">Fully insured</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={opsRoom}
              alt="Recon848 Insights secure operations room"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[12px] bg-panel2 object-cover ring-1 ring-line"
            />
            <span className="absolute left-4 top-4 rounded-[3px] bg-paper/85 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              CAM-04 · SECURE
            </span>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                04 — Contact
              </div>
              <h2 className="mt-3 max-w-[18ch] font-display text-3xl font-semibold tracking-tight text-balance xl:text-4xl">
                Open a confidential channel
              </h2>
              <p className="mt-6 max-w-[44ch] text-sm leading-relaxed text-muted">
                Share what you can. Our desk responds within one business day,
                under strict confidentiality and without obligation.
              </p>
              <div className="mt-8 space-y-3 font-mono text-sm">
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
                    Direct line
                  </span>
                  <span>+44 (0)20 848 0 848</span>
                </div>
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
                    Secure mail
                  </span>
                  <span>desk@recon848.example</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-muted">
                    Coordination
                  </span>
                  <span>51.5074°N 0.1278°W</span>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="rounded-[8px] bg-panel p-7 ring-1 ring-line"
            >
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
                  <span className="size-2 rounded-full bg-accent" />
                  <p className="font-display text-lg">Inquiry received</p>
                  <p className="max-w-[36ch] font-mono text-[11px] leading-relaxed text-muted">
                    Your channel is open. A senior partner will respond within
                    one business day under strict confidentiality.
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="How should we address you?"
                      className="mt-2 w-full rounded-[4px] bg-paper px-3 py-2.5 text-sm placeholder:text-muted/60 ring-1 ring-inset ring-line focus:ring-accent/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                      Contact method
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Email or encrypted channel"
                      className="mt-2 w-full rounded-[4px] bg-paper px-3 py-2.5 text-sm placeholder:text-muted/60 ring-1 ring-inset ring-line focus:ring-accent/60 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                      Nature of inquiry
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your requirement. We do not retain details you prefer not to share."
                      className="mt-2 w-full resize-none rounded-[4px] bg-paper px-3 py-2.5 text-sm placeholder:text-muted/60 ring-1 ring-inset ring-line focus:ring-accent/60 focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="ink-fill mt-1 w-full rounded-[6px] py-3 text-sm font-medium"
                  >
                    Transmit inquiry
                  </button>
                  <p className="font-mono text-[10px] leading-relaxed text-muted/70">
                    Submissions are treated as sensitive. No data is shared with
                    third parties.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
