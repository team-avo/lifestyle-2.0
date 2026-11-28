import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/wp";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/primitives/Section";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guidance for families on interventions, recovery, addiction, and mental health crises, from Lifestyle Interventions in Los Angeles.",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guidance for Families"
        intro="Practical writing on interventions, recovery, and what families can do when someone they love is struggling."
        primaryCta={null}
        secondaryCta={null}
        confidential={false}
      />
      <Section>
        <p className="text-sm text-muted">{posts.length} articles</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}/`}
              className="group flex flex-col rounded-card border border-line bg-white p-7 transition-shadow hover:shadow-card"
            >
              {p.date && (
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </p>
              )}
              <h2 className="mt-3 text-xl text-ink group-hover:text-teal">{p.title}</h2>
              {p.excerpt && <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{p.excerpt}</p>}
              <span className="mt-auto pt-5 text-sm font-semibold text-teal">Read article →</span>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
