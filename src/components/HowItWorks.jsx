import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Centralize supplier, inventory & resource data",
    copy: "Ingest ERP, WMS, TMS, and supplier feeds into one operational model.",
    src: "/images/how-centralize.png",
    alt: "Operations control room",
  },
  {
    n: "2",
    title: "Track supply movements & demand in real time",
    copy: "Stream shipment events and consumption so planners see current network state.",
    src: "/images/how-track.jpg",
    alt: "Port and container operations",
  },
  {
    n: "3",
    title: "Detect shortages, excess, and disruptions",
    copy: "Flag imbalance, delayed lanes, and capacity collisions against policy.",
    src: "/images/how-detect.png",
    alt: "Warehouse inventory aisles",
  },
  {
    n: "4",
    title: "Act on alerts and historical insights",
    copy: "Route exceptions to owners and reallocate before the next planning cycle.",
    src: "/images/how-act.png",
    alt: "Manufacturing floor",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((n) => (n + 1) % STEPS.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-blush py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-12 h-72 w-72 rounded-full bg-pink/25 blur-3xl" />
        <div className="absolute right-[8%] top-20 h-80 w-80 rounded-full bg-pink/25 blur-3xl" />
        <div className="absolute bottom-6 left-1/3 h-56 w-56 rounded-full bg-blush/70 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Find control in just a few steps
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Select a step, or watch the loop cycle, to see the matching operational view.
          </p>
        </Reveal>

        <div
          className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
        >
          {STEPS.map((step, i) => {
            const on = active === i;
            return (
              <Reveal key={step.n} delay={i * 70}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={on}
                  className={`group flex h-full w-full flex-col bg-paper p-4 text-left shadow-[0_18px_40px_rgba(73,73,75,0.12)] transition duration-500 ${
                    on ? "lg:-translate-y-2" : "hover:-translate-y-1"
                  }`}
                >
                  <div className="flex gap-3">
                    <p className="flex h-[210px] w-7 shrink-0 items-center justify-center text-[10px] font-medium uppercase tracking-[0.28em] text-ink [writing-mode:vertical-rl] rotate-180">
                      How it works {step.n}
                    </p>
                    <div className="relative h-[210px] min-w-0 flex-1 overflow-hidden bg-pink-100">
                      <img
                        src={step.src}
                        alt={step.alt}
                        className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="flex items-start gap-3">
                      <span className="pt-0.5 text-[11px] font-semibold tracking-[0.14em] text-ink">
                        {step.n.padStart(2, "0")}
                      </span>
                      <h3 className="text-[13px] font-semibold leading-snug tracking-tight text-ink">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[12px] leading-relaxed text-muted">{step.copy}</p>
                    <div className="mt-auto pt-5">
                      <span className="block border-t border-dotted border-ink/35" />
                      <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                        {step.alt}
                      </p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            to="/product"
            className="btn-pop inline-flex rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-ink"
          >
            Selvian v.1
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
