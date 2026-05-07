import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kora Lab — Africa's Sovereign AI Lab" },
      {
        name: "description",
        content:
          "Kora Lab is Africa's sovereign AI research and product lab — closing the gap, building the models, and uniting the continent under one flag.",
      },
      { property: "og:title", content: "Kora Lab — Africa's Sovereign AI Lab" },
      {
        property: "og:description",
        content:
          "Sovereign AI research and product lab building Africa's own models and accessibility layer.",
      },
    ],
  }),
});

const NAV_LINKS = [
  { href: "#mission", label: "Mission" },
  { href: "#approach", label: "Approach" },
  { href: "#moment", label: "Why Now" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".kora-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#E8E8E8] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        <a href="#top" className="kora-wordmark text-base text-[#0A0A0A]">
          KORA LAB
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-normal text-[#0A0A0A] transition-opacity hover:opacity-60"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-[#0A0A0A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-80"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1100px] px-6 py-28 md:py-40">
        <h1 className="kora-reveal text-[44px] leading-[1.02] font-black tracking-[-0.03em] sm:text-6xl md:text-8xl">
          <span className="block text-white">Africa doesn't just</span>
          <span className="block text-white">consume AI.</span>
          <span className="block text-[#ABABAB]">Africa builds AI.</span>
        </h1>
        <hr className="kora-reveal my-10 max-w-[120px] border-0 border-t border-white" />
        <p className="kora-reveal max-w-2xl text-base leading-relaxed text-[#ABABAB] md:text-lg">
          Kora Lab is Africa's sovereign AI research and product lab — closing the
          gap, building the models, and uniting the continent under one flag.
        </p>
        <div className="kora-reveal mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#approach"
            className="bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-opacity hover:opacity-80"
          >
            Our Approach
          </a>
          <a
            href="#contact"
            className="border border-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#0A0A0A]"
          >
            Contact the Founder
          </a>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const text =
    "54 nations · $60B Africa AI Fund · AU Continental AI Strategy · AfDB AI 10B Initiative · Digital Togo 2025-2030 · Smart Africa · One Lab · ";
  const repeated = text.repeat(6);
  return (
    <div className="overflow-hidden border-y border-[#1A1A1A] bg-[#0A0A0A] py-3">
      <div className="kora-marquee-track flex whitespace-nowrap">
        <span className="px-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
          {repeated}
        </span>
        <span className="px-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
          {repeated}
        </span>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6B6B6B]">
      {children}
    </p>
  );
}

function Problem() {
  const items = [
    {
      title: "ACCESS GAP",
      body:
        "Frontier AI tools are built for Western users. African end users face language, UX, and affordability barriers.",
    },
    {
      title: "SOVEREIGNTY GAP",
      body:
        "All large-scale AI models are owned by non-African entities. Africa has no seat at the table.",
    },
    {
      title: "EXECUTION GAP",
      body:
        "Governments have signed declarations. Billions are pledged. The technical lab to execute the vision does not yet exist. That is what Kora Lab is.",
    },
  ];
  return (
    <section id="mission" className="bg-[#E8E8E8] text-[#0A0A0A]">
      <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
        <div className="kora-reveal">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.03em] md:text-6xl">
            Africa Is Missing from the AI Race
          </h2>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {items.map((it) => (
            <div key={it.title} className="kora-reveal">
              <h3 className="text-base font-black uppercase tracking-wider">
                {it.title}
              </h3>
              <div className="mt-4 h-px w-10 bg-[#0A0A0A]" />
              <p className="mt-4 text-base leading-relaxed text-[#1A1A1A]">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Moment() {
  const events = [
    {
      date: "April 2025",
      text:
        "54 nations sign the Africa Declaration on AI in Kigali. $60 billion Africa AI Fund announced.",
    },
    {
      date: "February 2026",
      text:
        "The African Union and Google sign a landmark AI sovereignty partnership. AfDB and UNDP launch AI 10 Billion Initiative.",
    },
    {
      date: "2025–2026",
      text:
        "Togo activates Digital Strategy 2025-2030. 15+ African countries now have national AI roadmaps.",
    },
    {
      date: "The Gap",
      text:
        "All of this political will and capital exists without a technical lab to execute it. Kora Lab is that lab.",
    },
  ];
  return (
    <section id="moment" className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
        <div className="kora-reveal">
          <SectionLabel>The Moment</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.03em] text-white md:text-6xl">
            The Continent Has Spoken. Now It Needs Builders.
          </h2>
        </div>
        <div className="mt-16 divide-y divide-[#1A1A1A] border-y border-[#1A1A1A]">
          {events.map((e) => (
            <div
              key={e.date}
              className="kora-reveal grid gap-4 py-8 md:grid-cols-[220px_1fr] md:gap-12"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ABABAB]">
                {e.date}
              </p>
              <p className="text-lg leading-relaxed text-white md:text-xl">
                {e.text}
              </p>
            </div>
          ))}
        </div>
        <p className="kora-reveal mt-16 max-w-3xl text-2xl italic leading-relaxed text-[#ABABAB] md:text-3xl">
          "We are not competing with these institutions. We are completing them."
        </p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="bg-white text-[#0A0A0A]">
      <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
        <div className="kora-reveal">
          <SectionLabel>Our Approach</SectionLabel>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.03em] md:text-6xl">
            A Two-Axis Strategy
          </h2>
        </div>
        <div className="mt-16 grid gap-px bg-[#E8E8E8] md:grid-cols-2">
          <div className="kora-reveal bg-[#0A0A0A] p-10 text-white md:p-14">
            <p className="text-sm font-bold tracking-[0.3em] text-[#ABABAB]">01</p>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-wider md:text-3xl">
              Accessibility Layer
            </h3>
            <div className="mt-6 h-px w-12 bg-white" />
            <p className="mt-6 text-base leading-relaxed text-[#ABABAB]">
              Making the latest AI from Anthropic, OpenAI, DeepMind, and others
              genuinely usable for African and global users. Culturally adapted,
              multilingual, no technical knowledge required. Products include AI
              agents, no-code interfaces, developer tooling, and data collection
              pipelines that create real jobs across the continent.
            </p>
          </div>
          <div className="kora-reveal bg-[#E8E8E8] p-10 text-[#0A0A0A] md:p-14">
            <p className="text-sm font-bold tracking-[0.3em] text-[#6B6B6B]">02</p>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-wider md:text-3xl">
              Sovereign Model Lab
            </h3>
            <div className="mt-6 h-px w-12 bg-[#0A0A0A]" />
            <p className="mt-6 text-base leading-relaxed text-[#1A1A1A]">
              Building Africa's own large language and multimodal models. Trained
              on African languages, history, and contexts. Authored by African
              researchers. Owned by the continent. This is the technical execution
              of the Kigali Declaration — sovereign data infrastructure, open
              African datasets, continental AI research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Numbers() {
  const stats = [
    { n: "54", t: "Nations that signed the Kigali AI Declaration" },
    { n: "$60B", t: "Africa AI Fund pledged" },
    {
      n: "2,000+",
      t: "African languages almost entirely absent from frontier AI training data",
    },
    { n: "4%", t: "Africa's current share of the global AI workforce" },
  ];
  return (
    <section className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
        <div className="grid gap-px bg-[#1A1A1A] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.n} className="kora-reveal bg-[#0A0A0A] p-8 md:p-10">
              <p className="text-5xl font-black tracking-[-0.04em] text-white md:text-6xl">
                {s.n}
              </p>
              <div className="mt-5 h-px w-10 bg-[#6B6B6B]" />
              <p className="mt-5 text-sm leading-relaxed text-[#ABABAB]">{s.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#E8E8E8] text-[#0A0A0A]">
      <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
        <div className="kora-reveal">
          <SectionLabel>The Founder</SectionLabel>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div className="kora-reveal">
            <h2 className="text-4xl font-black tracking-[-0.03em] md:text-5xl">
              KHEIR LISSI
            </h2>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">
              Founder, Kora Lab
            </p>
            <p className="mt-2 text-sm text-[#6B6B6B]">Lome, Togo</p>
          </div>
          <div className="kora-reveal space-y-6 text-base leading-relaxed text-[#1A1A1A] md:text-lg">
            <p>
              I studied computer science with a specialization in AI and big data
              in college before making the deliberate decision to leave mid third
              year. The pace of academic training was incompatible with the speed
              at which the world was moving, and with the urgency of what I am
              building.
            </p>
            <p>
              I identified early that Africa's greatest risk in the AI era is not
              a lack of talent, but a lack of infrastructure, ownership, and
              narrative. Rather than waiting for the system to produce what Africa
              needs, I chose to build it directly.
            </p>
            <p>
              I am also the founder of edenvallie.com — an incubator for ADHD and
              neurodivergent entrepreneurs who have the vision but need the right
              ecosystem to execute.
            </p>
            <p className="font-bold text-[#0A0A0A]">
              I am not waiting for permission to build Africa's AI lab. I am
              building it.
            </p>
            <div className="flex flex-wrap gap-6 pt-2 text-sm font-bold uppercase tracking-wider">
              <a
                href="https://kora-lab.com"
                className="border-b border-[#0A0A0A] pb-1 text-[#0A0A0A] hover:opacity-60"
              >
                kora-lab.com
              </a>
              <a
                href="https://edenvallie.com"
                className="border-b border-[#0A0A0A] pb-1 text-[#0A0A0A] hover:opacity-60"
              >
                edenvallie.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1100px] px-6 py-24 md:py-32">
        <div className="kora-reveal max-w-3xl">
          <h2 className="text-4xl font-black tracking-[-0.03em] md:text-6xl">
            Build With Us.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#ABABAB] md:text-lg">
            Whether you are a government, an institution, an investor, or a
            technical builder who believes in this mission — we want to hear from
            you.
          </p>
        </div>

        <div className="kora-reveal mt-12 max-w-2xl">
          {sent ? (
            <div className="border border-white p-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ABABAB]">
                Message Received
              </p>
              <p className="mt-4 text-2xl font-black tracking-[-0.02em] text-white">
                Thank you. We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <Field label="Name" name="name" />
              <Field label="Organization" name="organization" />
              <Field label="Message" name="message" textarea />
              <button
                type="submit"
                className="bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] transition-opacity hover:opacity-80"
              >
                Send
              </button>
            </form>
          )}

          <p className="mt-10 text-sm text-[#6B6B6B]">
            Or reach the founder directly:{" "}
            <a
              href="mailto:hello@kora-lab.com"
              className="text-[#ABABAB] hover:text-white"
            >
              hello@kora-lab.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  textarea,
}: {
  label: string;
  name: string;
  textarea?: boolean;
}) {
  const base =
    "w-full border-0 border-b border-[#1A1A1A] bg-transparent py-3 text-base text-white outline-none transition-colors focus:border-white placeholder:text-[#6B6B6B]";
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B6B6B]">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required rows={4} className={base} />
      ) : (
        <input name={name} required type="text" className={base} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-[1100px] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 md:items-center">
          <p className="kora-wordmark text-base">KORA LAB</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-bold uppercase tracking-wider text-[#ABABAB] hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-[#ABABAB] md:text-right">
            Lome, Togo. Building for the continent.
          </p>
        </div>
        <div className="mt-10 border-t border-[#1A1A1A] pt-6 text-xs text-[#6B6B6B]">
          © {new Date().getFullYear()} Kora Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref} className="bg-white text-[#0A0A0A]">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Problem />
        <Moment />
        <Approach />
        <Numbers />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
