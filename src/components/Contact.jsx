import { ArrowRight, Clock, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";

const EMPTY = { name: "", company: "", email: "", phone: "", plan: "", message: "" };

const SOCIALS = [
  { href: "https://www.linkedin.com", label: "Selvian on LinkedIn", icon: Linkedin },
  { href: "mailto:hello@selvian.lk", label: "Email Selvian", icon: Mail },
  { href: "https://www.youtube.com", label: "Selvian on YouTube", icon: Youtube },
];

const OFFICES = [
  {
    region: "SL Address",
    image: "/images/contact-jaffna.svg",
    address: "63 Hospital Road, Jaffna, Sri Lanka",
    phone: "+94 21 222 6841",
    tel: "tel:+94212226841",
  },
  {
    region: "USA Address",
    image: "/images/contact-sf.svg",
    address: "1 Embarcadero Center, San Francisco, CA 94111, USA",
    phone: "+1 415 826 4735",
    tel: "tel:+14158264735",
  },
];

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [spot, setSpot] = useState(0);

  function update(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.company.trim()) next.company = "Company is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid work email.";
    if (!form.phone.trim()) next.phone = "Phone is required.";
    if (form.message.trim().length < 12) next.message = "Add a short note on scope or sites.";
    return next;
  }

  function onSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
    setForm(EMPTY);
  }

  const field =
    "w-full rounded-2xl border-0 bg-blush/80 px-4 py-3.5 text-sm text-ink outline-none ring-1 ring-line transition duration-300 placeholder:text-muted/50 focus:bg-paper focus:ring-2 focus:ring-pink";

  return (
    <section id="contact" className="relative overflow-hidden bg-blush">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(17,17,17,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 42%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 42%, transparent 78%)",
          }}
        />
        <div className="arch-orb-a absolute left-[6%] top-10 h-80 w-80 rounded-full bg-pink/30 blur-3xl" />
        <div className="arch-orb-b absolute right-[8%] top-24 h-96 w-96 rounded-full bg-pink-100 blur-3xl" />
        <div className="arch-orb-c absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#c4b0e0]/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-28">
        <Reveal className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">Contact Us</h2>
          <p className="mt-3 text-sm text-muted">
            <a href="#home" className="hover:text-ink">
              Home
            </a>
            <span className="mx-2">/</span>
            Contact Us
          </p>
        </Reveal>

        <div className="relative mt-14 min-h-[120px] lg:min-h-[148px]">
          <Reveal className="relative z-[1] max-w-xl">
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-pink-600">
              <span className="h-px w-6 bg-pink-600" />
              Get in touch
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Get in touch
            </h3>
          </Reveal>

          <div
            className="pointer-events-none absolute right-0 top-0 hidden w-[260px] overflow-hidden bg-paper shadow-[0_18px_40px_rgba(22,20,31,0.12)] lg:block xl:w-[300px]"
            style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <img
              src="/images/contact-accent.svg"
              alt=""
              className="aspect-[2.25/1] h-auto w-full object-contain object-center"
            />
          </div>
        </div>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7" variant="left">
            <div className="h-full rounded-[32px] bg-paper p-6 shadow-[0_24px_60px_rgba(28,20,24,0.08)] ring-1 ring-line sm:p-8 lg:p-10">
              <p className="text-[15px] leading-relaxed text-muted">
                Questions on sites, systems of record, or a scoped demo. Selvian
                sales will respond to the work email you provide.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tell us the sites and systems of record. We will follow with a
                scoped working session.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
                {sent && (
                  <p className="rounded-2xl border border-pink/40 bg-pink-100 px-4 py-3 text-sm text-ink">
                    Request received. A Selvian specialist will respond to the work email provided.
                  </p>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[13px] font-medium text-ink">Name</span>
                    <input name="name" value={form.name} onChange={update} placeholder="Name" className={field} />
                    {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[13px] font-medium text-ink">Company</span>
                    <input
                      name="company"
                      value={form.company}
                      onChange={update}
                      placeholder="Company"
                      className={field}
                    />
                    {errors.company && (
                      <span className="mt-1 block text-xs text-red-600">{errors.company}</span>
                    )}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[13px] font-medium text-ink">Email address</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="Email address"
                      className={field}
                    />
                    {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[13px] font-medium text-ink">Phone number</span>
                    <input name="phone" value={form.phone} onChange={update} placeholder="Phone number" className={field} />
                    {errors.phone && <span className="mt-1 block text-xs text-red-600">{errors.phone}</span>}
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-medium text-ink">
                    Plan you’re interested in
                  </span>
                  <select
                    name="plan"
                    value={form.plan}
                    onChange={update}
                    className={`${field} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat`}
                  >
                    <option value="">Plan you’re interested in</option>
                    <option>Starter</option>
                    <option>Pro</option>
                    <option>Enterprise</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-medium text-ink">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={update}
                    className={`${field} resize-y`}
                    placeholder="Message: sites, ERP/WMS stack, and the problem to close."
                  />
                  {errors.message && (
                    <span className="mt-1 block text-xs text-red-600">{errors.message}</span>
                  )}
                </label>

                <button
                  type="submit"
                  className="btn-pop inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_12px_28px_rgba(232,165,195,0.35)]"
                >
                  Send message
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" variant="right" delay={80}>
            <div className="arch-card-run h-full rounded-[32px] p-[1.5px]">
              <aside className="relative h-full overflow-hidden rounded-[30.5px] bg-dark p-7 text-white sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-pink-600/15 blur-3xl" />

                <p className="relative text-[12px] font-semibold uppercase tracking-[0.16em] text-pink">
                  Contact information
                </p>

                <div className="relative mt-8 space-y-6">
                  <div>
                    <p className="flex items-center gap-2 text-[15px] font-semibold">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink/15">
                        <MapPin size={15} className="text-pink" />
                      </span>
                      Our locations
                    </p>
                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-pink/80">
                          SL Address
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">
                          63 Hospital Road, Jaffna, Sri Lanka
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-pink/80">
                          USA Address
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">
                          1 Embarcadero Center, San Francisco, CA 94111, USA
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <p className="flex items-center gap-2 text-[15px] font-semibold">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink/15">
                        <Phone size={15} className="text-pink" />
                      </span>
                      Phone number
                    </p>
                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-pink/80">
                          SL Phone
                        </p>
                        <a
                          href="tel:+94212226841"
                          className="mt-1 block text-sm text-white/60 transition hover:text-pink"
                        >
                          +94 21 222 6841
                        </a>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-pink/80">
                          USA Phone
                        </p>
                        <a
                          href="tel:+14158264735"
                          className="mt-1 block text-sm text-white/60 transition hover:text-pink"
                        >
                          +1 415 826 4735
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <p className="flex items-center gap-2 text-[15px] font-semibold">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink/15">
                        <Mail size={15} className="text-pink" />
                      </span>
                      Email address
                    </p>
                    <a
                      href="mailto:hello@selvian.lk"
                      className="mt-3 block text-sm text-white/60 transition hover:text-pink"
                    >
                      hello@selvian.lk
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <p className="flex items-center gap-2 text-[15px] font-semibold">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink/15">
                        <Clock size={15} className="text-pink" />
                      </span>
                      Opening hours
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Monday to Friday, 9:00 AM to 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="relative mt-8 flex gap-3">
                  {SOCIALS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-pink text-ink transition hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(232,165,195,0.35)]"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-7xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="overflow-hidden rounded-[32px] bg-paper px-5 py-10 shadow-[0_24px_60px_rgba(28,20,24,0.06)] ring-1 ring-line sm:px-8 lg:px-12 lg:py-14">
          <Reveal className="text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-pink-600">
              Our locations
            </p>
          </Reveal>

          <div className="relative mt-12">
            <svg
              className="pointer-events-none absolute left-[18%] right-[18%] top-[78px] hidden h-20 w-[64%] lg:block"
              viewBox="0 0 640 80"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="arch-dash"
                d="M8 40 C 160 8, 480 72, 632 40"
                stroke="#e8a5c3"
                strokeWidth="2"
              />
              <circle cx="8" cy="40" r="5" fill="#e8a5c3" />
              <circle cx="632" cy="40" r="5" fill="#d48ab0" />
            </svg>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-24">
              {OFFICES.map((office, i) => {
                const on = spot === i;
                return (
                  <Reveal key={office.address} delay={i * 80}>
                    <button
                      type="button"
                      onClick={() => setSpot(i)}
                      aria-pressed={on}
                      className={`w-full text-left ${i === 1 ? "lg:mt-16" : ""}`}
                    >
                      <span
                        className={`relative block overflow-hidden rounded-[28px] bg-blush transition duration-500 ${
                          on
                            ? "ring-4 ring-pink shadow-[0_22px_44px_rgba(232,165,195,0.28)]"
                            : "ring-1 ring-line"
                        }`}
                      >
                        <img
                          src={office.image}
                          alt=""
                          className="aspect-[16/10] h-auto w-full object-contain object-center p-3 sm:p-4"
                        />
                      </span>
                      <span className="mt-5 flex items-start gap-4">
                        <span
                          className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition ${
                            on ? "bg-pink text-ink" : "bg-blush text-pink-600"
                          }`}
                        >
                          <MapPin size={18} />
                        </span>
                        <span>
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-pink-600">
                            {office.region}
                          </span>
                          <span className="mt-1 block text-[15px] font-semibold leading-snug text-ink">
                            {office.address}
                          </span>
                          <a
                            href={office.tel}
                            onClick={(e) => e.stopPropagation()}
                            className="mt-2 inline-flex items-center gap-2 text-sm text-muted transition hover:text-pink-600"
                          >
                            <Phone size={14} />
                            {office.phone}
                          </a>
                        </span>
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
