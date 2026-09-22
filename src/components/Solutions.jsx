import { ArrowRight, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import Reveal from "./Reveal";

const CASES = [
  {
    role: "Supply Chain Managers",
    pain: "Network state is split across ERP extracts, carrier portals, and plant spreadsheets.",
    solution: "A single inventory and movement model with exception queues tied to policy.",
    image: "/images/sol-supply-chain.jpg",
    alt: "Supply chain managers reviewing network state",
    details:
      "Selvian gives supply chain managers one operational model of inventory, lanes, and exceptions. ERP remains the system of record for transactions. The platform reconciles those feeds so you plan against current network state, not last week's extract.",
    points: [
      "One inventory and movement model across plants, DCs, and 3PLs",
      "Exception queues tied to policy thresholds, not inbox noise",
      "Shortage, excess, and delay visibility before the next S&OP cycle",
      "Role-aware dashboards for network and site planners",
    ],
  },
  {
    role: "Logistics Teams",
    pain: "Lane delays surface after the dock is already idle or the production slot is lost.",
    solution: "Live shipment telemetry, dwell alerts, and handoff status across lanes.",
    image: "/images/sol-logistics.png",
    alt: "Port and container operations",
    details:
      "Inbound and outbound movements are tracked as lane events: pickup, dwell, handoff, and arrival. Logistics leads see which lanes are late while there is still time to resequence the dock or protect a production slot.",
    points: [
      "Lane-level inbound and outbound status from TMS and carrier feeds",
      "Dwell and handoff timestamps on every shipment object",
      "Exception-first queue for shift leads",
      "ASN and shipment mapping without another portal login",
    ],
  },
  {
    role: "Manufacturing Operations",
    pain: "Material shortfalls and line-side excess are discovered on the shift, not in planning.",
    solution: "Consumption vs. available stock, with allocation before the next run.",
    image: "/images/sol-manufacturing.png",
    alt: "Manufacturing floor",
    details:
      "Consumption is compared to available stock before the next run is locked. Operations can see line-side risk in planning, not after the shift has already started and the material is short.",
    points: [
      "Consumption versus on-hand and in-transit by SKU and line",
      "Allocation recommendations before the production slot is committed",
      "Shortage and excess flags against safety buffers",
      "Shared view for planners and supervisors",
    ],
  },
  {
    role: "Procurement Teams",
    pain: "Supplier lead-time drift and allocation disputes arrive too late to re-source.",
    solution: "Promised vs. received and constrained-item visibility in one record.",
    image: "/images/sol-procurement.png",
    alt: "Procurement team reviewing supplier performance",
    details:
      "Suppliers, contracts, and promised capacity sit next to the SKUs they affect. Buyers see promised versus received and constrained items early enough to re-source or reallocate, instead of discovering drift after the dock is already waiting.",
    points: [
      "Supplier master with contracts and stated lead times",
      "Promised versus received history for constrained items",
      "Allocated versus available capacity by site and commodity",
      "One record shared with planning, not a separate buyer spreadsheet",
    ],
  },
  {
    role: "Warehouse Managers",
    pain: "On-hand counts, reservations, and inbound ASNs do not reconcile in time.",
    solution: "Site-level inventory integrity, aging, and inbound waves aligned to labor.",
    image: "/images/sol-warehouse.png",
    alt: "Warehouse inventory aisles",
    details:
      "Site-level inventory, reservations, and inbound waves are reconciled so labor plans match what will actually hit the dock. Aging lots and safety buffers are visible without waiting for a nightly ERP extract.",
    points: [
      "On-hand, reserved, and in-transit positions by node",
      "Lot aging and safety-buffer policy",
      "Inbound waves aligned to labor capacity",
      "Reconciliation against WMS and ERP balances",
    ],
  },
  {
    role: "Resource Planners",
    pain: "Labor, fleet, and machine hours are scheduled against stale demand.",
    solution: "Resource pools matched to live demand and inventory position.",
    image: "/images/sol-resource.png",
    alt: "Resource planning workspace",
    details:
      "Labor, fleet, and machine-hour pools are matched to live demand and inventory position. Resource planners see collisions before the schedule is locked, instead of discovering them after the roster is already published.",
    points: [
      "Resource pools against live demand by site",
      "Conflict alerts when hours and inventory do not line up",
      "Forecast versus actual consumption for calibration",
      "Historical baselines for the next planning cycle",
    ],
  },
];

export default function Solutions() {
  const [active, setActive] = useState(null);
  const titleId = useId();
  const item = active !== null ? CASES[active] : null;

  useEffect(() => {
    if (item == null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [item]);

  return (
    <section id="solutions" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blush to-transparent" />
      <div className="arch-orb-a pointer-events-none absolute left-[10%] top-24 h-56 w-56 rounded-full bg-pink/20 blur-3xl" />
      <div className="arch-orb-b pointer-events-none absolute right-[12%] bottom-16 h-64 w-64 rounded-full bg-[#c4b0e0]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
            Solutions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Insights and tooling for operators who run the network
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Click a card to read the pain point, the Selvian response, and what the workspace covers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {CASES.map((card, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <Reveal key={card.role} delay={i * 50} className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${card.role}. View details`}
                  className="sol-card group flex h-full w-full flex-col overflow-hidden rounded-[26px] bg-blush text-left outline-none ring-1 ring-line transition duration-400 hover:-translate-y-1 hover:bg-paper hover:shadow-[0_22px_48px_rgba(28,20,24,0.1)] hover:ring-pink/50 focus-visible:ring-2 focus-visible:ring-pink"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={card.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-600 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-transparent to-transparent opacity-80 transition duration-400 group-hover:opacity-90" />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-paper/95 text-[11px] font-semibold text-ink shadow-sm">
                      {n}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-ink">{card.role}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.pain}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-pink-600 transition group-hover:gap-2.5">
                      View details
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {item && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/55 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="sol-modal relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-paper shadow-[0_30px_80px_rgba(17,17,17,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-paper/95 text-ink shadow-md transition hover:bg-pink"
              aria-label="Close details"
            >
              <X size={18} />
            </button>
            <img src={item.image} alt={item.alt} className="h-56 w-full object-cover sm:h-72" />
            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-pink-600">
                Operator workspace
              </p>
              <h3 id={titleId} className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {item.role}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                <span className="font-semibold text-ink">Pain: </span>
                {item.pain}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                <span className="font-semibold text-ink">Selvian: </span>
                {item.details}
              </p>
              <ul className="mt-6 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setActive(null)}
                className="btn-pop mt-8 inline-flex rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-ink"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
