import { X } from "lucide-react";
import { useEffect } from "react";

const DOCS = {
  terms: {
    title: "Terms & Conditions",
    updated: "21 September 2026",
    sections: [
      {
        heading: "1. Agreement",
        body: "These Terms & Conditions govern access to and use of the Selvian website and related sales materials operated by Selvian Solutions (Pvt) Ltd and Selvian Solutions LLC (together, “Selvian”). By using this site, you agree to these terms.",
      },
      {
        heading: "2. Services",
        body: "Selvian provides supply chain and resource intelligence software and related professional services under separate order forms or master agreements. Website content is informational and does not create a binding subscription unless confirmed in a signed order.",
      },
      {
        heading: "3. Demo and contact requests",
        body: "Information you submit through contact or demo forms must be accurate. Selvian may use that information to respond to your request and to qualify commercial interest. There is no public self-serve checkout on this site.",
      },
      {
        heading: "4. Intellectual property",
        body: "All trademarks, logos, product names, copy, graphics, and software descriptions on this site are owned by Selvian or its licensors. You may not copy, modify, or redistribute site materials without prior written consent.",
      },
      {
        heading: "5. Acceptable use",
        body: "You must not misuse the site, attempt unauthorized access, scrape content at scale, or use the site in any way that is unlawful or harmful to Selvian, its customers, or third parties.",
      },
      {
        heading: "6. Disclaimers",
        body: "The site is provided on an “as is” basis. Selvian does not warrant that content is complete, uninterrupted, or error-free. Product capabilities described online may depend on plan, configuration, and contracted scope.",
      },
      {
        heading: "7. Limitation of liability",
        body: "To the fullest extent permitted by law, Selvian is not liable for any indirect, incidental, special, or consequential damages arising from use of this website. Liability for paid services is governed by the applicable customer agreement.",
      },
      {
        heading: "8. Governing law",
        body: "These terms are governed by the laws applicable to Selvian Solutions (Pvt) Ltd in Sri Lanka and Selvian Solutions LLC in the United States, as relevant to the entity you contract with.",
      },
      {
        heading: "9. Contact",
        body: "Questions about these terms: hello@selvian.lk. 63 Hospital Road, Jaffna, Sri Lanka. 1 Embarcadero Center, San Francisco, CA 94111, USA.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "21 September 2026",
    sections: [
      {
        heading: "1. Scope",
        body: "This Privacy Policy explains how Selvian Solutions (Pvt) Ltd and Selvian Solutions LLC (“Selvian”) collect, use, and protect personal information when you visit selvian.lk or submit a sales or demo request.",
      },
      {
        heading: "2. Information we collect",
        body: "We may collect name, company, work email, phone number, plan interest, and message content you provide in forms. We may also collect basic technical data such as browser type, device, and pages viewed to operate and improve the site.",
      },
      {
        heading: "3. How we use information",
        body: "We use contact details to respond to inquiries, schedule demos, qualify opportunities, and send service-related follow-ups you request. We do not sell personal information.",
      },
      {
        heading: "4. Sharing",
        body: "We may share information with service providers that host email, analytics, or CRM tools under confidentiality obligations, or when required by law. Customer operational data processed inside the Selvian platform is governed by the applicable customer agreement, not this website policy alone.",
      },
      {
        heading: "5. Retention",
        body: "We retain inquiry records for as long as needed to manage the sales relationship and meet legal or audit requirements, then delete or anonymize them where practical.",
      },
      {
        heading: "6. Security",
        body: "We apply administrative and technical safeguards appropriate to website and CRM data. No method of transmission over the internet is fully secure; please avoid sending sensitive credentials through contact forms.",
      },
      {
        heading: "7. Your choices",
        body: "You may request access, correction, or deletion of personal information we hold about a website inquiry by emailing hello@selvian.lk. Marketing preferences can be updated using the same contact channel.",
      },
      {
        heading: "8. International transfers",
        body: "Selvian operates in Sri Lanka and the United States. Information may be processed in either location as needed to respond to your request and deliver contracted services.",
      },
      {
        heading: "9. Updates",
        body: "We may update this policy from time to time. The “Last updated” date at the top of this page will change when we do. Continued use of the site after an update constitutes acceptance of the revised policy.",
      },
      {
        heading: "10. Contact",
        body: "Privacy questions: hello@selvian.lk. 63 Hospital Road, Jaffna, Sri Lanka. 1 Embarcadero Center, San Francisco, CA 94111, USA.",
      },
    ],
  },
};

export default function LegalModal({ docKey, onClose }) {
  const doc = DOCS[docKey];

  useEffect(() => {
    if (!doc) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-dark/65 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[28px] bg-paper shadow-[0_36px_90px_rgba(17,17,17,0.35)] sm:rounded-[28px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-pink-600">
              Legal
            </p>
            <h2 id="legal-title" className="mt-1 text-2xl font-semibold tracking-tight text-ink">
              {doc.title}
            </h2>
            <p className="mt-1 text-xs text-muted">Last updated {doc.updated}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush text-ink transition hover:bg-pink"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <div className="space-y-6">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-sm font-semibold text-ink">{section.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
