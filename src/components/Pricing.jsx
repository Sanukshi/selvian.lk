import { ArrowRight, Check, Star } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const TIERS = [
  {
    name: "Starter",
    featured: false,
    blurb: "Live inventory and movement telemetry with exception routing for a defined site set.",
    rates: {
      monthly: { amount: "$99", period: "/ month" },
      annual: { amount: "$82", period: "/ month", note: "billed as $984/year" },
    },
    points: [
      "Multi-site inventory positions",
      "Lane-level movement status",
      "Threshold-based alerts",
      "Standard dashboard roles",
      "Business-hours support",
    ],
  },
  {
    name: "Pro",
    featured: true,
    blurb: "Adds demand analysis, disruption detection, and historical incident comparison.",
    rates: {
      monthly: { amount: "$249", period: "/ month" },
      annual: { amount: "$207", period: "/ month", note: "billed as $2,484/year" },
    },
    points: [
      "Everything in Starter",
      "Demand vs. available analysis",
      "Shortage and excess detection",
      "Accelerated compute processing",
      "Named customer engineer",
    ],
  },
  {
    name: "Enterprise",
    featured: false,
    blurb: "Full platform across regions, with governance, SSO, and contracted processing capacity.",
    rates: {
      monthly: { amount: "Custom", period: "Pricing" },
      annual: { amount: "Custom", period: "Pricing" },
    },
    points: [
      "Unlimited operational sites",
      "SSO, RBAC, and audit export",
      "Dedicated processing services",
      "Private deployment options",
      "Contracted SLA",
    ],
  },
];

export default function Pricing() {
  const [cycle, setCycle] = useState("monthly");

  return (
    <section id="pricing" className="relative overflow-hidden bg-blush py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-8 h-72 w-72 rounded-full bg-pink/35 blur-3xl" />
        <div className="absolute right-[8%] bottom-6 h-80 w-80 rounded-full bg-[#c4b0e0]/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-100 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.4rem] px-5 py-14 text-white shadow-[0_40px_80px_rgba(22,20,31,0.22)] sm:px-8 lg:rounded-[3rem] lg:px-12 lg:py-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(95% 80% at 50% -10%, #3a3148 0%, #241c32 42%, #16141f 78%, #110f18 100%)",
            }}
          />
          <div className="pointer-events-none absolute left-[12%] top-0 h-56 w-80 rounded-full bg-[#e8a5c3]/25 blur-3xl" />
          <div className="pointer-events-none absolute right-[8%] top-24 h-64 w-64 rounded-full bg-[#8b5cf6]/18 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-72 rounded-full bg-[#4f46e5]/16 blur-3xl" />

          <div className="relative">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="mx-auto inline-flex rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                Pricing
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                Plans and{" "}
                <span className="bg-gradient-to-r from-[#c4b5fd] to-[#818cf8] bg-clip-text text-transparent">
                  billing
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/60">
                Monthly and annual rates for Starter and Pro. Enterprise is scoped
                to your network and billed under a custom contract.
              </p>
            </Reveal>

            <Reveal className="mt-8 flex justify-center" delay={40}>
              <div
                role="tablist"
                aria-label="Billing cycle"
                className="inline-flex rounded-full border border-white/12 bg-white/8 p-1"
              >
                {[
                  { id: "monthly", label: "Monthly" },
                  { id: "annual", label: "Annual" },
                ].map((option) => {
                  const on = cycle === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setCycle(option.id)}
                      className={`rounded-full px-5 py-1.5 text-sm font-semibold transition duration-300 ${
                        on
                          ? "bg-gradient-to-r from-pink to-pink-600 text-ink shadow-[0_8px_20px_rgba(232,165,195,0.35)]"
                          : "text-white/55 hover:text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
              {TIERS.map((tier, i) => {
                const row = tier.rates[cycle];
                const enterprise = tier.name === "Enterprise";
                return (
                  <Reveal key={tier.name} delay={i * 80} variant={tier.featured ? "scale" : "up"}>
                    <article
                      className={`relative flex h-full flex-col rounded-[28px] border p-7 text-center ${
                        tier.featured
                          ? "border-pink/70 bg-[linear-gradient(180deg,rgba(232,165,195,0.28),rgba(22,20,31,0.55))] shadow-[0_20px_50px_rgba(22,20,31,0.25)]"
                          : "border-white/14 bg-white/6"
                      }`}
                    >
                      {tier.featured && (
                        <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-pink px-3 py-1 text-[11px] font-semibold text-ink shadow-md">
                          <Star size={11} fill="currentColor" />
                          Most specified
                        </span>
                      )}

                      <h3 className="text-xl font-semibold tracking-tight">{tier.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">{tier.blurb}</p>

                      <div className="mt-7">
                        {enterprise ? (
                          <>
                            <p className="text-4xl font-semibold tracking-tight text-pink">
                              {row.amount}
                            </p>
                            <p className="mt-1 text-sm text-white/45">{row.period}</p>
                          </>
                        ) : (
                          <>
                            <div className="flex items-end justify-center gap-1">
                              <span className="text-4xl font-semibold tracking-tight">{row.amount}</span>
                              <span className="pb-1 text-sm text-white/45">{row.period}</span>
                            </div>
                            {row.note ? (
                              <p className="mt-1 text-xs text-white/40">{row.note}</p>
                            ) : null}
                          </>
                        )}
                      </div>

                      <ul className="mt-7 flex-1 space-y-2.5 text-left">
                        {tier.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-white/85">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink">
                              <Check size={12} strokeWidth={3} className="text-white" />
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#contact"
                        className={`btn-pop mt-8 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold ${
                          tier.featured
                            ? "bg-pink text-ink shadow-[0_10px_24px_rgba(232,165,195,0.35)]"
                            : "border border-white/18 bg-white/8 text-white hover:bg-white/12"
                        }`}
                      >
                        Contact Sales
                        <ArrowRight size={15} />
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
