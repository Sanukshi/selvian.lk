import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const LINKS = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#platform", label: "Platform", id: "platform" },
  { href: "#how-it-works", label: "How it Works", id: "how-it-works" },
  { href: "#architecture", label: "Architecture", id: "architecture" },
  { href: "#solutions", label: "Solutions", id: "solutions" },
  { href: "#pricing", label: "Pricing", id: "pricing" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#contact", label: "Contact Us", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [...new Set(LINKS.map((l) => l.id))];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 shadow-[0_8px_30px_rgba(17,17,17,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-blush/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link text-[13px] font-medium transition ${
                active === link.id ? "active text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/product"
            className="btn-pop hidden rounded-full bg-pink px-4 py-2 text-[13px] font-semibold text-ink sm:inline-flex"
          >
            Selvian v.1
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink transition hover:bg-pink-100 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`xl:hidden ${open ? "block" : "hidden"} border-t border-line bg-paper`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-sm font-medium transition ${
                active === link.id ? "bg-pink-100 text-ink" : "text-ink hover:bg-blush"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/product"
            onClick={() => setOpen(false)}
            className="btn-pop mt-2 rounded-full bg-pink px-4 py-3 text-center text-sm font-semibold text-ink"
          >
            Selvian v.1
          </Link>
        </nav>
      </div>
    </header>
  );
}
