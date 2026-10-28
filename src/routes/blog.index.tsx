import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/ui-bits";
import { posts, formatDate } from "@/data/posts";

const TITLE = "Blogs — practitioner notes on AML operations | CompliancePlus";
const DESCRIPTION =
  "Practitioner-led writing on AML process design, client and matter risk assessment, source of wealth, training and management information.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const lead = posts[0]!;
  const rest = posts.slice(1);

  return (
    <>
      <Section className="!pb-8">
        <Eyebrow>Blogs</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-3xl sm:text-[2.35rem]">
          Practitioner notes on how AML actually works.
        </h1>
        <p className="mt-6 max-w-2xl text-ink-soft">
          Short, practical writing for MLROs, compliance leads and the people who operate client
          onboarding day to day.
        </p>
      </Section>

      <Section className="!pt-0">
        <article className="grid gap-8 border-t border-border-strong pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Link to="/blog/$slug" params={{ slug: lead.slug }} className="group block">
            <img
              src={lead.image}
              alt={lead.imageAlt}
              width={1400}
              height={900}
              className="aspect-[16/10] w-full border border-border object-cover"
            />
          </Link>
          <div>
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              {lead.category} · {formatDate(lead.date)} · {lead.readingTime} min read
            </p>
            <h2 className="mt-3 text-2xl leading-snug">
              <Link to="/blog/$slug" params={{ slug: lead.slug }} className="hover:text-primary-dark">
                {lead.title}
              </Link>
            </h2>
            <p className="mt-3 text-ink-soft">{lead.intro}</p>
            <Link
              to="/blog/$slug"
              params={{ slug: lead.slug }}
              className="mt-5 inline-block text-sm font-medium text-primary hover:text-primary-dark"
            >
              Read article →
            </Link>
          </div>
        </article>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.slug} className="group">
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  width={1400}
                  height={900}
                  className="aspect-[16/10] w-full border border-border object-cover"
                />
                <p className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">
                  {p.category} · {formatDate(p.date)} · {p.readingTime} min read
                </p>
                <h2 className="mt-2 text-lg leading-snug group-hover:text-primary-dark">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">{p.intro}</p>
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
