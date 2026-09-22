import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    q: "How long does implementation typically take?",
    a: "A single-region operations monitoring deployment is usually scoped in 6 to 10 weeks: connector mapping, SKU/site mastering, policy thresholds, and operator training. Multi-region enterprise programs with private processing capacity are planned as phased cutovers, typically one network cluster at a time.",
  },
  {
    q: "How is operational data secured?",
    a: "Application access uses role-based controls, optional SSO, and a full audit trail of views and interventions. Data in transit is TLS-encrypted; data at rest is encrypted in the contracted environment. Selvian does not train shared foundation models on customer operational records unless a separate agreement says otherwise.",
  },
  {
    q: "What systems can Selvian integrate with?",
    a: "The integration layer is designed for ERP, WMS, TMS, supplier portals, and event APIs. Typical objects include inventory balances, ASNs, shipment status, production consumption, purchase orders, and resource calendars. Custom connectors are scoped under the Enterprise plan.",
  },
  {
    q: "What deployment options are available?",
    a: "Selvian can run as a managed multi-tenant region, a dedicated VPC, or a hybrid topology where the Laravel application and SQL store sit in your environment and processing services (RAPIDS, NIM, Triton) are isolated. On-prem inference is available when data-residency policy requires it.",
  },
  {
    q: "What support and SLA coverage is included?",
    a: "Starter includes business-hours support. Pro and Enterprise contracts add a named engineer, defined severity response times, and optional 24/7 coverage for P1 movement or inventory outages. SLA credits and RPO/RTO targets are written into the order form.",
  },
  {
    q: "Can workflows and models be customized?",
    a: "Yes. Alert policies, planner roles, and dashboard composition are configuration. Allocation logic, exception narratives, and demand models can be calibrated on your history under an Enterprise change request, without forking the core platform.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-blush py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,17,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.035) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 78%)",
          }}
        />
        <div className="arch-orb-a absolute left-[8%] top-20 h-72 w-72 rounded-full bg-pink/28 blur-3xl" />
        <div className="arch-orb-b absolute right-[10%] bottom-24 h-80 w-80 rounded-full bg-[#c4b0e0]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
                <span className="h-px w-6 bg-pink-600" />
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Questions procurement and IT usually ask first
              </h2>
            </Reveal>

            <div className="mt-10 space-y-3">
              {ITEMS.map((item, i) => {
                const isOpen = open === i;
                const n = String(i + 1).padStart(2, "0");
                return (
                  <Reveal key={item.q} delay={i * 40}>
                    <div
                      className={`group relative overflow-hidden rounded-[22px] transition duration-400 ${
                        isOpen
                          ? "bg-paper shadow-[0_20px_48px_rgba(28,20,24,0.1)] ring-2 ring-pink"
                          : "bg-paper/80 ring-1 ring-line hover:-translate-y-0.5 hover:bg-paper hover:shadow-[0_14px_32px_rgba(28,20,24,0.06)]"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-pink via-pink-100 to-pink-600 transition duration-400 ${
                          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                        }`}
                      />
                      <button
                        type="button"
                        className="flex w-full items-start gap-4 px-5 py-5 text-left sm:items-center"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                      >
                        <span
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-semibold transition duration-400 sm:mt-0 ${
                            isOpen ? "bg-pink text-ink" : "bg-blush text-pink-600"
                          }`}
                        >
                          {n}
                        </span>
                        <span className="min-w-0 flex-1 text-[15px] font-semibold leading-snug text-ink">
                          {item.q}
                        </span>
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-400 ${
                            isOpen
                              ? "rotate-180 bg-pink text-ink shadow-[0_8px_18px_rgba(232,165,195,0.4)]"
                              : "bg-blush text-muted group-hover:bg-pink-100 group-hover:text-ink"
                          }`}
                        >
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                      <div className={`accordion-body ${isOpen ? "open" : ""}`}>
                        <div className="overflow-hidden">
                          <p className="border-t border-line/70 px-5 pb-5 pl-[4.25rem] pt-3 text-sm leading-relaxed text-muted sm:pl-[4.5rem]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal className="lg:sticky lg:top-28 lg:col-span-6" variant="right" delay={80}>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 rounded-[34px] bg-gradient-to-br from-pink/35 via-transparent to-[#c4b0e0]/30 blur-sm" />
              <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_60px_rgba(28,20,24,0.14)] ring-1 ring-line">
                <img
                  src="/images/faq-office.png"
                  alt="Operations specialists reviewing Selvian implementation questions"
                  className="h-full min-h-[420px] w-full object-cover lg:min-h-[640px]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
