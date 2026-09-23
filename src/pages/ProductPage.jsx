import { ArrowRight, Boxes, Radio, Shield, Waypoints } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Reveal from "../components/Reveal";

const CAPABILITIES = [
  {
    title: "Supplier & resource management",
    copy: "A governed graph of suppliers, contracts, lead times, and allocated capacity.",
    image: "/images/platform-supplier.svg",
  },
  {
    title: "Inventory tracking",
    copy: "Reconcile on-hand, in-transit, and reserved stock across plants and 3PL nodes.",
    image: "/images/platform-inventory.svg",
  },
  {
    title: "Supply movement tracking",
    copy: "Follow inbound and outbound shipments with lane status and handoff events.",
    image: "/images/platform-movement.svg",
  },
  {
    title: "Demand & resource analysis",
    copy: "Compare forecast, consumption, and available labor, fleet, and machine hours.",
    image: "/images/platform-demand.svg",
  },
  {
    title: "Operational alerts",
    copy: "Surface shortages, excess, and allocation conflicts before they stall production.",
    image: "/images/platform-alerts.svg",
  },
  {
    title: "Command dashboard",
    copy: "A role-aware control surface for planners, warehouse leads, and leadership.",
    image: "/images/platform-command.svg",
  },
];

const HIGHLIGHTS = [
  {
    icon: Boxes,
    title: "One operational model",
    copy: "Inventory, lanes, and exceptions in a single governed record.",
  },
  {
    icon: Waypoints,
    title: "Live network state",
    copy: "Movement and handoff events as they happen, not overnight extracts.",
  },
  {
    icon: Radio,
    title: "Exception-first queues",
    copy: "Policy-driven alerts routed to owners who can close them.",
  },
  {
    icon: Shield,
    title: "ERP stays system of record",
    copy: "Selvian reconciles feeds without a rip and replace.",
  },
];

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
            <Link
              to="/"
              className="hidden text-[13px] font-medium text-muted transition hover:text-ink sm:inline"
            >
              Back to home
            </Link>
            <a
              href="/#contact"
              className="btn-pop rounded-full bg-pink px-4 py-2 text-[13px] font-semibold text-ink"
            >
              Contact Us
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-blush pt-28 pb-16 lg:pt-32 lg:pb-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="arch-orb-a absolute left-[8%] top-20 h-72 w-72 rounded-full bg-pink/30 blur-3xl" />
            <div className="arch-orb-b absolute right-[6%] top-28 h-80 w-80 rounded-full bg-[#c4b0e0]/22 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-12 lg:gap-12 lg:px-8">
            <Reveal className="lg:col-span-6" variant="left">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
                Product
              </p>
              <h1 className="hero-title-light mt-3 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
                Selvian v.1
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                The intelligence and exception layer for logistics and manufacturing.
                Centralize inventory, supply movement, demand, and resource allocation
                so operators share one network view.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="btn-pop inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 text-sm font-semibold text-ink"
                >
                  Talk to sales
                  <ArrowRight size={16} />
                </a>
                <Link
                  to="/"
                  className="inline-flex rounded-full border border-line bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:border-pink"
                >
                  Explore the site
                </Link>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-6" variant="right" delay={80}>
              <div className="overflow-hidden rounded-[28px] bg-paper p-3 shadow-[0_24px_56px_rgba(28,20,24,0.12)] ring-1 ring-line sm:p-4">
                <img
                  src="/images/platform-command.svg"
                  alt="Selvian v.1 command dashboard"
                  className="aspect-[16/11] w-full object-contain object-top"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
                Why v.1
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Built for operators who run the network
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {HIGHLIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 60}>
                    <div className="h-full rounded-[24px] bg-blush p-6 ring-1 ring-line">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink text-ink">
                        <Icon size={20} strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-4 text-[15px] font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.copy}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-blush py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
                Capabilities
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                What ships in Selvian v.1
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((cap, i) => (
                <Reveal key={cap.title} delay={i * 50}>
                  <article className="h-full overflow-hidden rounded-[24px] bg-paper ring-1 ring-line shadow-[0_14px_36px_rgba(28,20,24,0.06)]">
                    <div className="bg-[#f3f0f2] p-3">
                      <img
                        src={cap.image}
                        alt=""
                        className="aspect-[16/10] w-full object-contain object-top"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-[15px] font-semibold text-ink">{cap.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{cap.copy}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-dark py-16 text-center lg:py-20">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Reveal variant="scale">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-pink">
                Next step
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Scope Selvian v.1 for your sites
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/65">
                Tell us the systems of record and the exception class to close first.
                Sales will follow on the work email you provide.
              </p>
              <a
                href="/#contact"
                className="btn-pop mt-8 inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 text-sm font-semibold text-ink"
              >
                Contact Us
                <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
