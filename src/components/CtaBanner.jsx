import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 text-center lg:py-32">
      <img
        src="/images/cta-bg.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/55 to-dark/75" />
      <div className="pointer-events-none absolute left-[8%] top-16 h-56 w-56 rounded-full bg-pink/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-10 h-64 w-64 rounded-full bg-pink-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal variant="scale">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-pink">
            Next step
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            <span className="underline decoration-pink decoration-4 underline-offset-[14px]">
              Get in touch
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-white/75">
            Scope a working session on your sites, systems of record, and the
            exception class you need to close first.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="btn-pop inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 text-sm font-semibold text-ink"
            >
              Request a Demo
              <ArrowRight size={16} />
            </a>
            <a
              href="mailto:hello@selvian.lk"
              className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-pink hover:text-pink"
            >
              hello@selvian.lk
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
