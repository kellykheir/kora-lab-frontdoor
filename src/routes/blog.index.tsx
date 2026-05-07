import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, SectionLabel } from "@/components/site-layout";
import { POSTS } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: "Writing | Kora Lab" },
      { name: "description", content: "Analysis, perspectives, and updates from Kora Lab on African AI, sovereignty, and the continental research agenda." },
      { property: "og:title", content: "Writing | Kora Lab" },
      { property: "og:description", content: "Analysis and perspectives from Kora Lab on African AI." },
      { property: "og:url", content: "https://kora-lab.com/blog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Writing | Kora Lab" },
      { name: "twitter:description", content: "Analysis and perspectives on African AI." },
    ],
    links: [{ rel: "canonical", href: "https://kora-lab.com/blog" }],
  }),
});

const FILTERS = ["All", "Analysis", "Institutional", "Technical", "Updates"] as const;

function BlogIndex() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const items = filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-20 md:py-28">
          <SectionLabel>Writing</SectionLabel>
          <h1 className="kora-reveal mt-4 text-4xl font-black tracking-[-0.03em] md:text-6xl">Writing</h1>
          <p className="kora-reveal mt-6 max-w-2xl text-lg text-[#6B6B6B]">
            Analysis, perspectives, and updates from Kora Lab.
          </p>
        </div>
      </section>

      <section className="border-y border-[#E8E8E8]">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="flex flex-wrap gap-6 py-4">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${filter === f ? "border-b border-[#0A0A0A] pb-1 text-[#0A0A0A]" : "text-[#6B6B6B] hover:text-[#0A0A0A]"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-3">
            {items.map((p) => (
              <article key={p.slug} className="kora-reveal flex flex-col border-t border-[#0A0A0A] pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6B6B6B]">{p.category}</p>
                <h2 className="mt-3 text-xl font-bold leading-tight text-[#0A0A0A]">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1A1A1A]">{p.excerpt}</p>
                <p className="mt-4 text-xs text-[#6B6B6B]">Kheir Lissi · {p.date} · {p.readTime}</p>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-3 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] hover:opacity-60">
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
