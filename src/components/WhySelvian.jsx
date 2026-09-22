import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function WhySelvian() {
  return (
    <section id="why" className="relative overflow-hidden bg-blush py-20 lg:py-28" aria-labelledby="why-heading">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,17,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.035) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            maskImage: "radial-gradient(ellipse at 30% 40%, black 38%, transparent 76%)",
            WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black 38%, transparent 76%)",
          }}
        />
        <div className="arch-orb-a absolute left-[5%] top-14 h-80 w-80 rounded-full bg-pink/40 blur-3xl" />
        <div className="arch-orb-b absolute right-[6%] top-28 h-96 w-96 rounded-full bg-[#c4b0e0]/30 blur-3xl" />
        <div className="arch-orb-c absolute bottom-12 left-1/3 h-64 w-64 rounded-full bg-pink-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-6" variant="left">
          <div className="relative mx-auto max-w-xl lg:max-w-none">
            <div className="pointer-events-none absolute -inset-6 rounded-[42px] bg-gradient-to-br from-pink/45 via-white/20 to-[#c4b0e0]/35 blur-2xl" />

            <div className="glass-card-strong relative overflow-hidden rounded-[32px] p-3 sm:p-5">
              <div className="overflow-hidden rounded-[24px] bg-white/35">
                <img
                  src="/images/why-unified.svg"
                  alt="Unified operational model connecting ERP, WMS, TMS, and supplier feeds"
                  className="aspect-[16/11] w-full object-contain object-center"
                />
              </div>
            </div>

            <div className="glass-card absolute -bottom-9 -right-2 z-10 hidden w-[48%] overflow-hidden rounded-[22px] p-1.5 sm:block lg:-right-5">
              <div className="overflow-hidden rounded-[16px] bg-white/25">
                <img
                  src="/images/why-command.svg"
                  alt=""
                  className="aspect-[4/3] w-full object-contain object-top"
                />
              </div>
            </div>

            <div className="glass-card absolute -left-4 top-10 z-10 hidden w-[32%] overflow-hidden rounded-[20px] p-1.5 lg:block">
              <div className="overflow-hidden rounded-[14px] bg-white/25">
                <img
                  src="/images/why-exceptions.svg"
                  alt=""
                  className="aspect-square w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-2 gap-4 sm:mt-20">
            <div className="glass-card group relative overflow-hidden rounded-[24px] px-5 py-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(232,165,195,0.25)]">
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink/30 blur-2xl transition group-hover:bg-pink/45" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-pink via-pink-100 to-transparent opacity-80" />
              <p className="relative text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                <CountUp end={360} suffix="°" />
              </p>
              <p className="relative mt-2 text-sm leading-snug text-muted">Network visibility</p>
            </div>
            <div className="glass-card group relative overflow-hidden rounded-[24px] px-5 py-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(232,165,195,0.25)]">
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#c4b0e0]/35 blur-2xl transition group-hover:bg-[#c4b0e0]/55" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#c4b0e0] via-pink to-transparent opacity-80" />
              <p className="relative text-4xl font-semibold tracking-tight text-ink sm:text-5xl">&lt;2m</p>
              <p className="relative mt-2 text-sm leading-snug text-muted">Median exception latency</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6" variant="right" delay={80}>
          <div className="glass-card-strong relative rounded-[32px] p-7 sm:p-9 lg:p-10">
            <span
              aria-hidden="true"
              className="absolute inset-y-8 left-0 w-1 rounded-full bg-gradient-to-b from-pink via-pink-100 to-pink-600"
            />
            <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-pink/20 blur-3xl" />

            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-pink-600">
              <span className="h-px w-6 bg-pink-600" />
              Why specify Selvian
            </p>
            <h2 id="why-heading" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Why specify Selvian?
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Selvian is the intelligence and exception layer. ERP, WMS, and TMS remain
              authoritative for transactions. The platform reconciles those feeds,
              runs analysis on its dedicated compute layers, and returns a governed
              queue operators can act on, without a rip and replace of industrial software.
            </p>
            <a
              href="#architecture"
              className="btn-pop mt-8 inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 text-sm font-semibold text-ink shadow-[0_12px_28px_rgba(232,165,195,0.35)]"
            >
              Review the architecture
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="glass-card mt-6 overflow-hidden rounded-[22px] p-2 sm:hidden">
            <img
              src="/images/why-command.svg"
              alt=""
              className="aspect-[16/10] w-full object-contain object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
