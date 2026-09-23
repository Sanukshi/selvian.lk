import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Boxes,
  Check,
  CircleAlert,
  Gauge,
  Layers3,
  ServerCog,
  Shield,
  Waypoints,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Reveal from "../components/Reveal";

const HIGHLIGHTS = [
  ["One operational model", "Inventory, lanes, capacity, and exceptions connected in a single governed record.", Boxes],
  ["A live network state", "Movement and handoff events surfaced as they happen, not after the overnight extract.", Waypoints],
  ["Exception-first work", "Operators spend time on the few changes that affect service, cost, or continuity.", CircleAlert],
  ["Fits your existing stack", "Selvian works alongside systems of record, reconciling the signals they already produce.", Shield],
];

const CAPABILITIES = [
  ["Supplier & resource management", "Keep suppliers, contracts, lead times, and allocated capacity connected to the work they support.", "/images/platform-supplier.svg"],
  ["Inventory tracking", "See on-hand, in-transit, and reserved stock across plants and 3PL nodes in one shared picture.", "/images/platform-inventory.svg"],
  ["Supply movement tracking", "Follow inbound and outbound shipments through every handoff, lane, and expected arrival.", "/images/platform-movement.svg"],
  ["Demand & resource analysis", "Compare forecast, consumption, labor, fleet, and machine hours before a constraint becomes urgent.", "/images/platform-demand.svg"],
  ["Operational alerts", "Turn shortages, excess, and allocation conflicts into clear, owned actions for the right team.", "/images/platform-alerts.svg"],
  ["Command dashboard", "Give planners, warehouse leads, and leadership a role-aware view of what needs attention now.", "/images/platform-command.svg"],
];

const AI_FOUNDATION = [
  [Activity, "NVIDIA RAPIDS", "The data and analytics engine", "GPU-accelerated cuDF and cuML help reconcile logistics data and identify imbalances, delays, and capacity risks."],
  [BrainCircuit, "NVIDIA NeMo", "The language and reasoning layer", "A foundation for specialized operational guidance trained around incident histories, SOPs, and runbooks."],
  [Gauge, "NVIDIA NIM", "Fast, standardized inference", "Optimized inference microservices make decision support easier to deploy and scale for planning teams."],
  [ServerCog, "NVIDIA Triton", "Reliable production serving", "A serving backend for concurrent predictive and generative workloads across frequent network updates."],
];

const WORKFLOW = [
  "Spot a potential shortage before it reaches the production plan.",
  "Trace a delayed shipment to the orders, sites, and commitments it affects.",
  "Route a decision with context, owner, and a recommended next action.",
  "Learn from closed exceptions so the next response gets faster and clearer.",
];

const ProductReveal = ({ children, className = "", ...props }) => (
  <Reveal {...props} className={className + " reveal-in"}>{children}</Reveal>
);

const LiveLink = ({ children, className = "" }) => (
  <a href="https://app.selvian.lk" target="_blank" rel="noreferrer" className={className}>{children}</a>
);

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <div className="flex items-center gap-3">
            <Link to="/" className="hidden text-[13px] font-medium text-muted transition hover:text-ink sm:inline">Back to home</Link>
            <LiveLink className="btn-pop rounded-full bg-pink px-4 py-2 text-[13px] font-semibold text-ink">Open Selvian</LiveLink>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-blush pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="arch-orb-a absolute left-[5%] top-16 h-80 w-80 rounded-full bg-pink/30 blur-3xl" />
            <div className="arch-orb-b absolute right-[4%] top-20 h-96 w-96 rounded-full bg-[#c4b0e0]/25 blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
            <ProductReveal className="lg:col-span-6" variant="left">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">Selvian v.1 · Product</p>
              <h1 className="hero-title-light mt-4 max-w-2xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[4.25rem]">See the signal.<br />Move with confidence.</h1>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">Selvian is the intelligence and exception layer for logistics and manufacturing teams. It brings inventory, supply movement, demand, and resources into one operational view—so the next decision is easier to see and faster to make.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LiveLink className="hero-cta btn-pop inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink">Open Selvian v.1 <ArrowRight size={16} /></LiveLink>
                <a href="#capabilities" className="inline-flex items-center rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:border-pink">Explore capabilities</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-medium text-muted">
                <span className="flex items-center gap-2"><Check size={14} className="text-pink-600" />One network view</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-pink-600" />Exception-led action</span>
                <span className="flex items-center gap-2"><Check size={14} className="text-pink-600" />Built for real teams</span>
              </div>
            </ProductReveal>
            <ProductReveal className="lg:col-span-6" variant="right" delay={80}>
              <div className="relative">
                <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-pink/40 via-transparent to-[#c4b0e0]/35 blur-xl" />
                <div className="relative overflow-hidden rounded-[28px] bg-paper p-3 shadow-[0_24px_56px_rgba(28,20,24,0.14)] ring-1 ring-line sm:p-4"><img src="/images/platform-command.svg" alt="Selvian v.1 command dashboard" className="aspect-[16/11] w-full object-contain object-top" /></div>
                <div className="float-a absolute -bottom-5 -left-3 rounded-2xl bg-dark px-4 py-3 text-white shadow-xl sm:-left-6"><p className="text-[10px] uppercase tracking-[0.16em] text-white/50">Network state</p><p className="mt-1 text-sm font-semibold">Clear enough to act</p></div>
              </div>
            </ProductReveal>
          </div>
        </section>

        <section className="bg-paper py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ProductReveal className="max-w-2xl"><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">Why v.1</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">One place to understand what is changing.</h2><p className="mt-4 text-[15px] leading-relaxed text-muted">Most operational decisions do not fail for lack of data. They fail when the right signal is split across systems, teams, and timelines. Selvian gives every team a shared starting point.</p></ProductReveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HIGHLIGHTS.map(([title, copy, Icon], i) => <ProductReveal key={title} delay={i * 60}><div className="lift h-full rounded-[24px] bg-blush p-6 ring-1 ring-line"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink text-ink"><Icon size={20} strokeWidth={1.7} /></span><h3 className="mt-4 text-[15px] font-semibold text-ink">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p></div></ProductReveal>)}
            </div>
          </div>
        </section>

        <section id="capabilities" className="bg-blush py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ProductReveal className="mx-auto max-w-2xl text-center"><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">The product</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Everything your operation needs to stay in motion.</h2><p className="mt-4 text-[15px] leading-relaxed text-muted">From the first supplier signal to the final exception, Selvian turns disconnected activity into a practical operating rhythm.</p></ProductReveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map(([title, copy, image], i) => <ProductReveal key={title} delay={i * 45}><article className="group lift h-full overflow-hidden rounded-[24px] bg-paper ring-1 ring-line shadow-[0_14px_36px_rgba(28,20,24,0.06)]"><div className="overflow-hidden bg-[#f3f0f2] p-3"><img src={image} alt="" className="img-zoom aspect-[16/10] w-full object-contain object-top" /></div><div className="p-5"><h3 className="text-[15px] font-semibold text-ink">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p></div></article></ProductReveal>)}
            </div>
          </div>
        </section>

        <section className="bg-dark py-16 text-white lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:items-center lg:gap-20 lg:px-8">
            <ProductReveal className="lg:col-span-5" variant="left"><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink">How teams use it</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">From “what happened?” to “what do we do next?”</h2><p className="mt-5 text-[15px] leading-relaxed text-white/65">Selvian keeps the operational loop tight: understand the network, identify the exception, make the decision, and build the learning into the next one.</p><LiveLink className="hero-cta mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink">See the product <ArrowRight size={16} /></LiveLink></ProductReveal>
            <ProductReveal className="lg:col-span-7" variant="right" delay={80}><div className="rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-7"><div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink text-ink"><Layers3 size={19} /></span><div><p className="text-sm font-semibold">A calmer operating rhythm</p><p className="mt-1 text-xs text-white/45">Designed around the work teams already do</p></div></div><div className="space-y-4">{WORKFLOW.map((step, i) => <div key={step} className="flex items-start gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-pink">0{i + 1}</span><p className="pt-1 text-sm leading-relaxed text-white/75">{step}</p></div>)}</div></div></ProductReveal>
          </div>
        </section>

        <section className="bg-paper py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <ProductReveal className="mx-auto max-w-2xl text-center"><p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">Under the hood</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Serious intelligence, quietly doing the heavy lifting.</h2><p className="mt-4 text-[15px] leading-relaxed text-muted">Selvian v.1 uses NVIDIA accelerated computing across its analytical, language, and inference foundation. The result you feel is simple: fresher signals, clearer exceptions, and dependable responses at operational speed.</p></ProductReveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {AI_FOUNDATION.map(([Icon, name, role, detail], i) => <ProductReveal key={name} delay={i * 55}><div className="h-full rounded-[22px] bg-blush p-5 ring-1 ring-line"><Icon size={21} className="text-pink-600" /><p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">{name}</p><h3 className="mt-2 text-sm font-semibold text-ink">{role}</h3><p className="mt-2 text-[13px] leading-relaxed text-muted">{detail}</p></div></ProductReveal>)}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted">Core technologies: NVIDIA RAPIDS (cuDF, cuML), NVIDIA NeMo Framework, NVIDIA NIM inference microservices, and NVIDIA Triton Inference Server.</p>
          </div>
        </section>

        <section className="bg-blush py-16 text-center lg:py-24"><div className="mx-auto max-w-3xl px-5 lg:px-8"><ProductReveal variant="scale"><p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-pink-600">Start with the live product</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">Make the next move visible.</h2><p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted">Open Selvian v.1 and explore a clearer way to run inventory, movement, demand, and exceptions across your network.</p><LiveLink className="hero-cta btn-pop mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink">Open Selvian v.1 <ArrowRight size={16} /></LiveLink></ProductReveal></div></section>
      </main>
      <Footer />
    </>
  );
}
