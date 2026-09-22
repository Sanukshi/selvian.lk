import { Linkedin, Mail, Youtube } from "lucide-react";
import { useState } from "react";
import LegalModal from "./LegalModal";
import Logo from "./Logo";

const GROUPS = [
  {
    title: "Platform",
    links: [
      { href: "#platform", label: "Capabilities" },
      { href: "#how-it-works", label: "How it Works" },
      { href: "#architecture", label: "Architecture" },
      { href: "#solutions", label: "Solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Contact Us" },
    ],
  },
];

const LEGAL = [
  { key: "terms", label: "Terms & Conditions" },
  { key: "privacy", label: "Privacy Policy" },
];

export default function Footer() {
  const [legal, setLegal] = useState(null);

  return (
    <>
      <footer className="border-t border-white/8 bg-dark pt-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Unified supply chain and resource intelligence for logistics and
              manufacturing enterprises.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.linkedin.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/70 transition hover:-translate-y-1 hover:bg-white/15 hover:text-white"
                aria-label="Selvian on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:hello@selvian.lk"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/70 transition hover:-translate-y-1 hover:bg-white/15 hover:text-white"
                aria-label="Email Selvian"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.youtube.com"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/70 transition hover:-translate-y-1 hover:bg-white/15 hover:text-white"
                aria-label="Selvian on YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {GROUPS.map((group) => (
            <div key={group.title}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/60 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/35">
              Get started
            </p>
            <p className="mt-4 text-sm text-white/55">
              Scope a demo with Sales. There is no public checkout.
            </p>
            <a
              href="#contact"
              className="btn-pop mt-4 inline-flex rounded-full bg-pink px-4 py-2 text-sm font-semibold text-ink"
            >
              Request Demo
            </a>
          </div>
        </div>

        <div className="border-t border-white/8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-[12px] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© {new Date().getFullYear()} Selvian Solutions (Pvt) Ltd / Selvian Solutions LLC.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {LEGAL.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setLegal(item.key)}
                  className="transition hover:text-white/70"
                >
                  {item.label}
                </button>
              ))}
              <span className="hidden text-white/20 sm:inline">|</span>
              <p className="w-full sm:w-auto">Registered in Sri Lanka and the United States.</p>
            </div>
          </div>
        </div>
      </footer>

      {legal && <LegalModal docKey={legal} onClose={() => setLegal(null)} />}
    </>
  );
}
