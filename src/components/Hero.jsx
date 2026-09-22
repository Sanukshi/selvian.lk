import { ChevronDown } from "lucide-react";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const LINKS = [
  { label: "Inventory tracking", href: "#inventory-tracking" },
  { label: "Movement tracking", href: "#movement-tracking" },
  { label: "Resource allocation", href: "#resource-allocation" },
];

const FACES = [
  "/images/testimonial-amara.png",
  "/images/testimonial-marcus.png",
  "/images/testimonial-elena.png",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-blush pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 40% 30%, black 35%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 40% 30%, black 35%, transparent 75%)",
          }}
        />
        <div className="arch-orb-a absolute -left-16 top-10 h-80 w-80 rounded-full bg-pink/35 blur-3xl" />
        <div className="arch-orb-b absolute right-[-5%] top-24 h-96 w-96 rounded-full bg-[#c4b0e0]/25 blur-3xl" />
        <div className="arch-orb-c absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-pink-100/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 lg:px-8 lg:pb-20">
        <div className="relative">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal className="lg:pt-4" variant="left">
              <h1 className="hero-title-light font-serif text-[2.7rem] font-medium leading-[1.14] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.6rem]">
                Operational intelligence.
                <br />
                For every node.
              </h1>
              <p className="mt-5 max-w-[26rem] text-[14px] leading-relaxed text-muted sm:text-[15px]">
                Selvian centralizes inventory, supply movement, demand, and resource
                allocation so logistics and manufacturing teams share one intelligence
                layer.
              </p>
            </Reveal>

            <Reveal className="relative z-20 lg:-mb-14" variant="right" delay={80}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-pink/40 via-transparent to-[#c4b0e0]/35 blur-xl" />

                <div className="hero-run-border relative rounded-[2rem] p-[3px] shadow-[0_28px_60px_rgba(28,20,24,0.16)]">
                  <div className="relative overflow-hidden rounded-[1.82rem] bg-paper">
                    <img
                      src="/images/hero-team.png"
                      alt="Operations team reviewing Selvian supply chain intelligence"
                      className="aspect-[5/4] w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-dark/20 via-transparent to-pink/10" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative z-10 mt-8 lg:mt-0" delay={120}>
            <div className="rounded-[1.65rem] bg-dark px-5 py-5 text-white shadow-[0_24px_50px_rgba(22,20,31,0.2)] sm:px-7 sm:py-6 lg:px-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="min-w-0 lg:max-w-[28rem]">
                  <p className="text-[13px] font-medium text-white/80">
                    Looking for a specific type of capability?
                  </p>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {LINKS.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center justify-between gap-3 rounded-xl bg-white/8 px-3.5 py-2.5 text-[12px] font-medium text-white/85 outline-none transition hover:bg-white/14 focus-visible:ring-2 focus-visible:ring-white/40"
                      >
                        {item.label}
                        <ChevronDown size={14} className="shrink-0 opacity-55" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                  <div>
                    <p className="text-[2rem] font-semibold leading-none tracking-tight">
                      <CountUp end={360} suffix="°" />
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-white/55">Network visibility</p>
                  </div>
                  <div className="flex -space-x-2.5">
                    {FACES.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className="h-9 w-9 rounded-full object-cover ring-2 ring-pink"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
