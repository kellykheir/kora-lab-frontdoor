import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, SectionLabel } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Kora Lab" },
      { name: "description", content: "Contact Kora Lab for AI partnership Africa, government and institutional alignment, investor conversations, and research collaboration." },
      { property: "og:title", content: "Contact | Kora Lab" },
      { property: "og:description", content: "Reach Kora Lab for partnerships, investment, research collaboration, and press." },
      { property: "og:url", content: "https://kora-lab.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact | Kora Lab" },
      { name: "twitter:description", content: "Reach Kora Lab." },
    ],
    links: [{ rel: "canonical", href: "https://kora-lab.com/contact" }],
  }),
});

const CATEGORIES = [
  { key: "Governments and Institutions", desc: "For partnership discussions, government contracts, and institutional alignment around continental AI mandates." },
  { key: "Investors and Accelerators", desc: "For funding conversations, accelerator applications, and strategic partnerships." },
  { key: "Researchers and Technical Builders", desc: "For research collaboration, advisory roles, and joining the Kora Lab mission." },
  { key: "Press and Media", desc: "For interviews, background briefings, and press inquiries about Kora Lab." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="kora-reveal mt-4 text-4xl font-black tracking-[-0.03em] md:text-6xl">Get in Touch</h1>
          <p className="kora-reveal mt-6 max-w-2xl text-lg text-[#ABABAB]">
            We welcome conversations with governments, institutions, investors, researchers, and builders.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-24">
          <div className="grid gap-px bg-[#E8E8E8] md:grid-cols-2">
            {CATEGORIES.map((c) => (
              <div key={c.key} className="kora-reveal bg-white p-8 md:p-10">
                <h2 className="text-base font-black uppercase tracking-wider text-[#0A0A0A]">{c.key}</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#1A1A1A]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8E8E8]">
        <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-24">
          <div className="kora-reveal max-w-2xl">
            {sent ? (
              <div className="border border-[#0A0A0A] bg-white p-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B]">Message Received</p>
                <p className="mt-4 text-2xl font-black tracking-[-0.02em] text-[#0A0A0A]">Thank you. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <Field label="Name" name="name" />
                <Field label="Organization" name="organization" />
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">Category</span>
                  <select name="category" required className="w-full border-0 border-b border-[#ABABAB] bg-transparent py-3 text-base text-[#0A0A0A] outline-none focus:border-[#0A0A0A]">
                    {CATEGORIES.map((c) => (
                      <option key={c.key} value={c.key}>{c.key}</option>
                    ))}
                  </select>
                </label>
                <Field label="Message" name="message" textarea />
                <button type="submit" className="bg-[#0A0A0A] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80">
                  Send
                </button>
              </form>
            )}
            <p className="mt-10 text-sm text-[#6B6B6B]">
              Or reach the founder directly:{" "}
              <a href="mailto:hello@kora-lab.com" className="text-[#0A0A0A] underline">hello@kora-lab.com</a>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, textarea }: { label: string; name: string; textarea?: boolean }) {
  const base = "w-full border-0 border-b border-[#ABABAB] bg-transparent py-3 text-base text-[#0A0A0A] outline-none transition-colors focus:border-[#0A0A0A] placeholder:text-[#6B6B6B]";
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={5} className={base} />
      ) : (
        <input name={name} required type="text" className={base} />
      )}
    </label>
  );
}
