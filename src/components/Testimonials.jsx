import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const CUSTOMERS = [
  {
    quote:
      "We stopped reconciling three ERP extracts every Monday. Selvian gave planners one inventory model and a queue they actually close.",
    name: "Amara Perera",
    role: "Director of Supply Chain",
    company: "Helix Manufacturing",
    image: "/images/testimonial-amara.png",
  },
  {
    quote:
      "Lane delays used to hit the dock before they hit a dashboard. Movement alerts now land on the shift lead in minutes, not after the slot is lost.",
    name: "Marcus Hale",
    role: "Head of Logistics Operations",
    company: "Northline Freight",
    image: "/images/testimonial-marcus.png",
  },
  {
    quote:
      "Line-side shortages were a shift surprise. Consumption versus available stock is visible before we lock the next run. That changed the planning cadence.",
    name: "Elena Vargas",
    role: "Manufacturing Operations Manager",
    company: "Apex Components",
    image: "/images/testimonial-elena.png",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const paused = useRef(false);
  const current = CUSTOMERS[active];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((n) => (n + 1) % CUSTOMERS.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-blush py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 42%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 42%, transparent 78%)",
          }}
        />
        <div className="arch-orb-a absolute left-[8%] top-16 h-72 w-72 rounded-full bg-pink/30 blur-3xl" />
        <div className="arch-orb-b absolute right-[10%] bottom-20 h-80 w-80 rounded-full bg-[#c4b0e0]/22 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
            <span className="h-px w-6 bg-pink-600" />
            Testimonials
            <span className="h-px w-6 bg-pink-600" />
          </p>
          <h2
            id="testimonials-heading"
            className="mx-auto mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
          >
            What our customers say
          </h2>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl lg:mt-14" delay={80}>
          <div
            className="glass-card-strong relative overflow-hidden rounded-[32px] p-7 sm:p-10 lg:p-12"
            onMouseEnter={() => {
              paused.current = true;
              setHover(true);
            }}
            onMouseLeave={() => {
              paused.current = false;
              setHover(false);
            }}
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pink/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-[#c4b0e0]/20 blur-3xl" />

            <figure className="relative">
              <span
                aria-hidden="true"
                className="font-serif text-6xl leading-none text-pink sm:text-7xl"
              >
                "
              </span>

              <blockquote className="mt-2">
                <p
                  key={current.name}
                  className="testimonial-fade text-[17px] leading-relaxed text-ink sm:text-xl sm:leading-relaxed"
                >
                  {current.quote}
                </p>
              </blockquote>

              <figcaption className="mt-10 flex flex-col gap-6 sm:mt-12">
                <div className="flex flex-wrap items-center gap-3">
                  {CUSTOMERS.map((item, i) => {
                    const on = active === i;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-pressed={on}
                        aria-label={`${item.name}, ${item.role}`}
                        className={`flex items-center gap-3 rounded-full transition duration-400 ${
                          on
                            ? "bg-dark py-1.5 pl-1.5 pr-5 text-white shadow-[0_12px_28px_rgba(22,20,31,0.2)]"
                            : "opacity-70 ring-1 ring-transparent hover:opacity-100"
                        }`}
                      >
                        <img
                          src={item.image}
                          alt=""
                          className={`rounded-full object-cover transition duration-400 ${
                            on
                              ? "h-11 w-11 ring-2 ring-pink"
                              : "h-11 w-11 ring-2 ring-paper"
                          }`}
                        />
                        {on && (
                          <span className="text-left">
                            <span className="block text-sm font-semibold leading-tight">
                              {item.name}
                            </span>
                            <span className="mt-0.5 block text-[11px] text-white/55">
                              {item.role}
                            </span>
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
                  {CUSTOMERS.map((item, i) => (
                    <button
                      key={item.name}
                      type="button"
                      role="tab"
                      aria-selected={active === i}
                      aria-label={item.name}
                      onClick={() => setActive(i)}
                      className={`h-1.5 overflow-hidden rounded-full transition-all duration-400 ${
                        active === i ? "w-10 bg-pink" : "w-2 bg-line hover:bg-pink/50"
                      }`}
                    >
                      {active === i && (
                        <span
                          key={`${item.name}-${hover}`}
                          className="testimonial-progress block h-full rounded-full bg-pink-600"
                          style={{ animationPlayState: hover ? "paused" : "running" }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
