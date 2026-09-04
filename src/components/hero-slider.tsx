import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Slide = {
  tag: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
  to: string;
};

const slides: Slide[] = [
  {
    tag: "01 — Protective operations",
    title: "We see the risk before it appears on the map.",
    lead: "Discreet executive protection built around the principal's real routine — travel, residence, workplace and public exposure.",
    image: hero1,
    alt: "Protective detail escorting a principal to a secure vehicle",
    to: "/services/executive-protection",
  },
  {
    tag: "02 — Risk intelligence",
    title: "A 24-hour desk that never stops reading the ground.",
    lead: "Structured exposure analysis across people, places and digital surfaces — scored, prioritised and resourced.",
    image: hero2,
    alt: "Analysts monitoring risk intelligence screens in an operations centre",
    to: "/services/threat-and-risk-assessment",
  },
  {
    tag: "03 — Crisis response",
    title: "One number, one commander, one route back to normal.",
    lead: "Standing response capability with mobilisation under sixty minutes across forty jurisdictions.",
    image: hero3,
    alt: "Quiet city street at dawn under light mist",
    to: "/services/crisis-response",
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative border-b border-line"
      aria-roledescription="carousel"
      aria-label="Recon848 Insights capabilities"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[560px] overflow-hidden sm:h-[620px]">
        {slides.map((s, i) => (
          <div
            key={s.title}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <img
              src={s.image}
              alt={s.alt}
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/10" />
            <div className="absolute inset-0">
              <div className="mx-auto flex h-full max-w-[1200px] flex-col justify-center px-6">
                <div className="max-w-[46ch]">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                    {s.tag}
                  </div>
                  <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tight text-balance sm:text-5xl xl:text-6xl">
                    {s.title}
                  </h1>
                  <p className="mt-6 max-w-[48ch] text-sm leading-relaxed text-muted sm:text-base">
                    {s.lead}
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="ink-fill inline-flex items-center rounded-[6px] px-4 py-2.5 text-sm font-medium"
                    >
                      Initiate inquiry
                    </Link>
                    <Link
                      to={s.to}
                      className="inline-flex items-center rounded-[6px] bg-paper/70 px-4 py-2.5 text-sm font-medium ring-1 ring-inset ring-line transition-colors hover:ring-ink/30"
                    >
                      Read the brief →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* controls */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0">
          <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 pb-7">
            <div className="pointer-events-auto flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1 rounded-full transition-all ${
                    i === index ? "w-10 bg-accent" : "w-5 bg-ink/25 hover:bg-ink/45"
                  }`}
                />
              ))}
              <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </span>
            </div>
            <div className="pointer-events-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="grid size-9 place-items-center rounded-[6px] bg-paper/80 text-sm ring-1 ring-line transition-colors hover:ring-ink/30"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="grid size-9 place-items-center rounded-[6px] bg-paper/80 text-sm ring-1 ring-line transition-colors hover:ring-ink/30"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
