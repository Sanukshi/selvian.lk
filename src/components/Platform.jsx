import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const CAPABILITIES = [
  {
    title: "Supplier & resource management",
    copy: "A governed graph of suppliers, contracts, lead times, and allocated capacity.",
    image: "/images/platform-supplier.svg",
    alt: "Procurement team reviewing supplier data",
    details:
      "Selvian keeps suppliers, contracts, and resource pools in one governed record instead of scattered buyer spreadsheets. Lead times, promised capacity, and allocation rules sit next to the SKUs they affect, so procurement and planning work from the same graph.",
    points: [
      "Supplier master with contracts, Incoterms, and stated lead times",
      "Allocated vs. available capacity by site and commodity",
      "Promised-versus-received history for constrained items",
      "Access control so buyers and planners see the same source of truth",
    ],
    n: "01",
  },
  {
    title: "Inventory tracking",
    id: "inventory-tracking",
    copy: "Reconcile on-hand, in-transit, and reserved stock across plants and 3PL nodes.",
    image: "/images/platform-inventory.svg",
    alt: "Warehouse inventory aisles",
    details:
      "Inventory is modeled as on-hand, in-transit, reserved, and aging lots across plants, DCs, and 3PL nodes. Selvian reconciles ERP and WMS balances so operators can see true available-to-promise before they commit a production or outbound wave.",
    points: [
      "Multi-site on-hand, in-transit, and reserved positions",
      "Lot aging and safety-buffer policy by SKU and node",
      "Reconciliation against ERP and WMS balances",
      "Site-level views for warehouse leads and network planners",
    ],
    n: "02",
  },
  {
    title: "Supply movement tracking",
    id: "movement-tracking",
    copy: "Follow inbound and outbound shipments with lane status and handoff events.",
    image: "/images/platform-movement.svg",
    alt: "Port and container operations",
    details:
      "Inbound and outbound movements are tracked as a sequence of lane events: pickup, dwell, handoff, and arrival, not a static ASN. Logistics teams see which lanes are late before the dock is idle or the production slot is lost.",
    points: [
      "Lane-level inbound and outbound status",
      "Dwell, handoff, and exception timestamps",
      "ASN and shipment objects mapped from TMS and carrier feeds",
      "Exception-first queue for shift leads",
    ],
    n: "03",
  },
  {
    title: "Demand & resource analysis",
    id: "resource-allocation",
    copy: "Compare forecast, consumption, and available labor, fleet, and machine hours.",
    image: "/images/platform-demand.svg",
    alt: "Resource planning workspace",
    details:
      "Demand is compared to actual consumption and to the labor, fleet, and machine hours still available. Resource planners see collisions before the schedule is locked, instead of discovering them on the shift.",
    points: [
      "Forecast versus actual consumption by SKU and site",
      "Labor, fleet, and machine-hour pools against live demand",
      "Shortage and excess detection against policy thresholds",
      "Historical baselines for planner review",
    ],
    n: "04",
  },
  {
    title: "Operational alerts",
    copy: "Surface shortages, excess, and allocation conflicts before they stall production.",
    image: "/images/platform-alerts.svg",
    alt: "Operations control room",
    details:
      "Alerts are policy-driven, not inbox noise. Selvian flags shortages, excess, late arrivals, and allocation conflicts, then routes them to an owner with enough context to act before the next planning cycle.",
    points: [
      "Threshold-based shortage, excess, and delay alerts",
      "Owner routing by role, site, and commodity",
      "Incident comparison against prior events",
      "Severity handling aligned to contracted SLA on Enterprise",
    ],
    n: "05",
  },
  {
    title: "Command dashboard",
    copy: "A role-aware control surface for planners, warehouse leads, and leadership.",
    image: "/images/platform-command.svg",
    alt: "Selvian command dashboard",
    details:
      "The dashboard is composed by role. Planners see exception queues and inventory position; warehouse leads see inbound waves and labor; leadership sees network coverage without another BI extract. Every view is backed by the same operational model.",
    points: [
      "Role-aware layouts for planners, warehouse, and leadership",
      "Exception queues tied to policy, not static reports",
      "Network map of inventory, lanes, and alerts",
      "Audit trail of views and interventions",
    ],
    n: "06",
  },
];

export default function Platform() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [dir, setDir] = useState(1);
  const [hover, setHover] = useState(false);
  const paused = useRef(false);
  const touchX = useRef(0);
  const titleId = useId();
  const current = CAPABILITIES[index];
  const prev = CAPABILITIES[(index - 1 + CAPABILITIES.length) % CAPABILITIES.length];
  const next = CAPABILITIES[(index + 1) % CAPABILITIES.length];
  const item = open ? current : null;

  function go(i, d) {
    const nextIndex = (i + CAPABILITIES.length) % CAPABILITIES.length;
    setDir(d ?? (nextIndex > index ? 1 : -1));
    setIndex(nextIndex);
  }

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "");
      const found = CAPABILITIES.findIndex((c) => c.id === id);
      if (found >= 0) setIndex(found);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current && !open) {
        setDir(1);
        setIndex((n) => (n + 1) % CAPABILITIES.length);
      }
    }, 5200);
    return () => clearInterval(id);
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (open) {
        if (e.key === "Escape") setOpen(false);
        return;
      }
      if (e.key === "ArrowLeft") go(index - 1, -1);
      if (e.key === "ArrowRight") go(index + 1, 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, open]);

  useEffect(() => {
    if (!item) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [item]);

  return (
    <section id="platform" className="relative overflow-hidden bg-dark py-16 lg:py-24">
      {CAPABILITIES.map(
        (cap) =>
          cap.id && <span key={cap.id} id={cap.id} className="absolute top-0 scroll-mt-28" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(232,165,195,0.18),transparent_55%)]" />
      <div className="arch-orb-a pointer-events-none absolute left-[8%] top-16 h-64 w-64 rounded-full bg-pink/20 blur-3xl" />
      <div className="arch-orb-b pointer-events-none absolute right-[10%] bottom-10 h-72 w-72 rounded-full bg-pink/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-[32px] bg-paper px-5 py-12 shadow-[0_40px_80px_rgba(0,0,0,0.28)] sm:px-10 lg:rounded-[40px] lg:px-16 lg:py-16">
            <div className="text-center">
              <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-pink-600">
                <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                {current.n} Our platform
              </p>
              <h2 className="mx-auto mt-5 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
                What makes Selvian the intelligence layer
              </h2>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {CAPABILITIES.map((cap, i) => (
                <button
                  key={cap.n}
                  type="button"
                  onClick={() => go(i, i > index ? 1 : -1)}
                  aria-pressed={index === i}
                  className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition ${
                    index === i
                      ? "bg-pink text-ink shadow-[0_8px_18px_rgba(232,165,195,0.35)]"
                      : "bg-blush text-muted hover:bg-pink-100 hover:text-ink"
                  }`}
                >
                  {cap.n} {cap.title}
                </button>
              ))}
            </div>

            <div
              className="relative mt-10"
              onMouseEnter={() => {
                paused.current = true;
                setHover(true);
              }}
              onMouseLeave={() => {
                paused.current = false;
                setHover(false);
              }}
              onTouchStart={(e) => {
                touchX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (dx > 48) go(index - 1, -1);
                if (dx < -48) go(index + 1, 1);
              }}
            >
              <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,0.22fr)_minmax(0,1fr)_minmax(0,0.22fr)] lg:gap-5">
                <button
                  type="button"
                  onClick={() => go(index - 1, -1)}
                  aria-label={`Previous: ${prev.title}`}
                  className="group/prev hidden lg:block"
                >
                  <span className="flex w-full flex-col overflow-hidden rounded-[24px] bg-blush p-2.5 ring-1 ring-line transition duration-300 group-hover/prev:-translate-y-1 group-hover/prev:bg-paper group-hover/prev:shadow-[0_18px_40px_rgba(28,20,24,0.12)]">
                    <span className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-paper">
                      <img
                        src={prev.image}
                        alt=""
                        className="h-full w-full object-contain object-top p-1.5 opacity-80 transition duration-500 group-hover/prev:scale-[1.03] group-hover/prev:opacity-100"
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/75 to-transparent px-2.5 pb-2.5 pt-8">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-pink">
                          {prev.n}
                        </span>
                        <span className="mt-0.5 line-clamp-2 text-[11px] font-semibold leading-snug text-white">
                          {prev.title}
                        </span>
                      </span>
                      <span className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow-md">
                        <ChevronLeft size={15} />
                      </span>
                    </span>
                  </span>
                </button>

                <article
                  key={current.n}
                  className={`${dir >= 0 ? "plat-in-right" : "plat-in-left"} grid w-full min-w-0 overflow-hidden rounded-[32px] bg-paper shadow-[0_24px_50px_rgba(232,165,195,0.18)] ring-1 ring-line lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:rounded-[36px]`}
                >
                  <div className="flex min-w-0 flex-col justify-between gap-8 px-6 py-7 sm:px-8 sm:py-9 lg:px-9">
                    <div className="min-w-0">
                      <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-pink-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                        {current.n} Our platform
                      </p>
                      <h3 className="mt-4 text-[1.65rem] font-semibold tracking-tight text-ink sm:text-[2rem] sm:leading-[1.18]">
                        {current.title}
                      </h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-muted">
                        {current.copy}
                      </p>
                      <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="btn-pop mt-6 inline-flex items-center gap-2 rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_10px_22px_rgba(232,165,195,0.35)]"
                      >
                        View details
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-dark text-white">
                          <ChevronRight size={13} />
                        </span>
                      </button>
                    </div>

                    <ul className="space-y-2.5">
                      {current.points.slice(0, 3).map((point, i) => (
                        <li
                          key={point}
                          className="plat-tile flex gap-3 rounded-2xl bg-blush/90 px-4 py-3.5 ring-1 ring-line"
                          style={{ animationDelay: `${120 + i * 80}ms` }}
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                          <span className="text-[13px] leading-snug text-ink">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="relative flex min-w-0 items-center justify-center bg-[#f3f0f2] p-3 text-left sm:p-5 lg:p-6"
                    aria-label={`${current.title}, view details`}
                  >
                    <span className="relative block w-full overflow-hidden rounded-[20px] bg-paper shadow-[0_16px_36px_rgba(28,20,24,0.12)] ring-1 ring-black/5">
                      <img
                        src={current.image}
                        alt={current.alt}
                        className="block h-auto w-full object-contain"
                        loading="eager"
                        decoding="async"
                      />
                    </span>
                    <span className="pointer-events-none absolute bottom-6 right-6 rounded-full bg-dark/90 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white">
                      {current.n}
                    </span>
                  </button>
                </article>

                <button
                  type="button"
                  onClick={() => go(index + 1, 1)}
                  aria-label={`Next: ${next.title}`}
                  className="group/next hidden lg:block"
                >
                  <span className="flex w-full flex-col overflow-hidden rounded-[24px] bg-blush p-2.5 ring-1 ring-line transition duration-300 group-hover/next:-translate-y-1 group-hover/next:bg-paper group-hover/next:shadow-[0_18px_40px_rgba(28,20,24,0.12)]">
                    <span className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-paper">
                      <img
                        src={next.image}
                        alt=""
                        className="h-full w-full object-contain object-top p-1.5 opacity-80 transition duration-500 group-hover/next:scale-[1.03] group-hover/next:opacity-100"
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/75 to-transparent px-2.5 pb-2.5 pt-8">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-pink">
                          {next.n}
                        </span>
                        <span className="mt-0.5 line-clamp-2 text-[11px] font-semibold leading-snug text-white">
                          {next.title}
                        </span>
                      </span>
                      <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow-md">
                        <ChevronRight size={15} />
                      </span>
                    </span>
                  </span>
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
                <button
                  type="button"
                  onClick={() => go(index - 1, -1)}
                  aria-label={`Previous: ${prev.title}`}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dark text-white transition hover:bg-pink hover:text-ink"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1, 1)}
                  aria-label={`Next: ${next.title}`}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dark text-white transition hover:bg-pink hover:text-ink"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="mx-auto mt-4 h-1 max-w-4xl overflow-hidden rounded-full bg-line">
              <div
                key={current.n}
                className="plat-progress h-full rounded-full bg-pink"
                style={{ animationPlayState: hover || open ? "paused" : "running" }}
              />
            </div>

            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <p className="text-[12px] font-semibold tabular-nums text-muted">
                  {current.n} / 06
                </p>
                <div className="flex items-center gap-2" role="tablist" aria-label="Platform capabilities">
                  {CAPABILITIES.map((cap, i) => (
                    <button
                      key={cap.n}
                      type="button"
                      role="tab"
                      aria-selected={index === i}
                      aria-label={cap.title}
                      onClick={() => go(i, i > index ? 1 : -1)}
                      className={`h-2 rounded-full transition ${
                        index === i ? "w-6 bg-pink" : "w-2 bg-line hover:bg-pink/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="btn-pop rounded-full bg-dark px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
              >
                View details →
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {item && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/55 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-paper shadow-[0_30px_80px_rgba(17,17,17,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink shadow-md transition hover:bg-pink"
              aria-label="Close details"
            >
              <X size={18} />
            </button>
            <div className="bg-[#f3f0f2] p-4 sm:p-6">
              <img
                src={item.image}
                alt={item.alt}
                className="mx-auto max-h-[520px] w-full rounded-2xl bg-paper object-contain object-center shadow-[0_12px_32px_rgba(28,20,24,0.1)]"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-pink-600">
                {item.n} Our platform
              </p>
              <h3 id={titleId} className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{item.details}</p>
              <ul className="mt-6 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pink" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/product"
                onClick={() => setOpen(false)}
                className="btn-pop mt-8 inline-flex rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-ink"
              >
                Selvian v.1
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
