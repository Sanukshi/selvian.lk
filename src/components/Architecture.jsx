import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const STACK = [
  {
    icon: "/images/Frontend.svg",
    name: "Frontend",
    stack: "React",
    copy: "Role-based dashboards, exception queues, and planning views for operations teams.",
    n: "01",
    color: "#e8a5c3",
    soft: "#f8eaf1",
  },
  {
    icon: "/images/Application.svg",
    name: "Application",
    stack: "PHP / Laravel",
    copy: "Inventory, movement, suppliers, alerts, access control, and audit trails.",
    n: "02",
    color: "#d48ab0",
    soft: "#f3d9e6",
  },
  {
    icon: "/images/Processing.svg",
    name: "Processing",
    stack: "Analytics and inference",
    copy: "Operational analytics, forecasting, and exception scoring for planning and control.",
    n: "03",
    color: "#c0789c",
    soft: "#edd0e0",
  },
  {
    icon: "/images/Database.svg",
    name: "Database",
    stack: "Structured SQL",
    copy: "Operational records, event history, and policy tables with referential integrity.",
    n: "04",
    color: "#a78bfa",
    soft: "#ede9fe",
  },
  {
    icon: "/images/Integration.svg",
    name: "Integrations",
    stack: "ERP / WMS / TMS",
    copy: "Inbound connectors and outbound webhooks for industrial systems of record.",
    n: "05",
    color: "#8b5cf6",
    soft: "#f3e8ff",
  },
];

export default function Architecture() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((n) => (n + 1) % STACK.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="architecture" className="relative overflow-x-clip bg-paper py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="arch-orb-a absolute -left-10 top-28 h-64 w-64 rounded-full bg-pink/35 blur-3xl" />
        <div className="arch-orb-b absolute -right-8 bottom-20 h-72 w-72 rounded-full bg-[#8b5cf6]/28 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-pink-600">
            Architecture
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Layered stack for industrial data
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Click a node, or watch the loop, to inspect each layer from the
            control surface down to integrations.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={80}>
          <div
            className="relative"
            onMouseEnter={() => {
              paused.current = true;
            }}
            onMouseLeave={() => {
              paused.current = false;
            }}
          >
            <div className="flex flex-col items-stretch gap-10 overflow-visible lg:flex-row lg:items-stretch lg:gap-8">
              {STACK.map((item, i) => {
                const on = active === i;
                const odd = i % 2 === 0;
                const flowing = active === i || active === i + 1;
                return (
                  <div
                    key={item.name}
                    className="arch-card-in relative flex flex-1 items-stretch overflow-visible"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-4 bottom-2 top-auto h-16 rounded-full blur-2xl lg:inset-x-6"
                      style={{ background: item.color, opacity: on ? 0.45 : 0.28 }}
                    />

                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      aria-pressed={on}
                      className={`arch-flow-card group relative z-[1] flex w-full flex-col bg-white px-5 py-8 text-center transition duration-500 ${
                        odd ? "arch-flow-odd" : "arch-flow-even"
                      } ${on ? "scale-[1.02]" : "hover:-translate-y-1"}`}
                      style={{
                        "--arch-c": item.color,
                        boxShadow: on
                          ? `0 18px 40px ${item.color}35`
                          : "0 10px 28px rgba(28,20,24,0.06)",
                      }}
                    >
                      <span
                        className={`relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition duration-500 ${
                          on ? "arch-icon-pop" : "group-hover:scale-110"
                        }`}
                        style={{ background: on ? item.soft : "transparent" }}
                      >
                        <img
                          src={item.icon}
                          alt=""
                          className="h-9 w-9 object-contain"
                        />
                      </span>

                      <p
                        className="relative mt-5 text-[13px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: item.color }}
                      >
                        {item.name}
                      </p>
                      <p className="relative mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                        Layer {item.n} / {item.stack}
                      </p>
                      <p className="relative mx-auto mt-4 max-w-[14.5rem] flex-1 text-[12px] leading-relaxed text-muted">
                        {item.copy}
                      </p>
                    </button>

                    {i < STACK.length - 1 && (
                      <span
                        className={`absolute left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white transition duration-500 lg:left-auto lg:right-[-22px] lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 ${
                          flowing ? "arch-arrow-pulse" : ""
                        }`}
                        style={{
                          bottom: "-22px",
                          border: `2.5px solid ${item.color}`,
                          color: item.color,
                          boxShadow: `0 8px 18px ${item.color}33`,
                        }}
                        aria-hidden="true"
                      >
                        <ChevronRight size={16} strokeWidth={2.4} className="rotate-90 lg:rotate-0" />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-center gap-2" role="tablist" aria-label="Architecture layers">
              {STACK.map((item, i) => (
                <button
                  key={item.n}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={item.name}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    active === i ? "w-7" : "w-2 bg-line hover:bg-pink/50"
                  }`}
                  style={active === i ? { background: item.color } : undefined}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
