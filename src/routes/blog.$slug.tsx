import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CtaLink } from "@/components/ui-bits";
import { getPost, relatedPosts, formatDate, type Block } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable — CompliancePlus" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const title = `${post.title} | CompliancePlus`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            articleSection: post.category,
            author: { "@type": "Organization", name: "CompliancePlus" },
            publisher: { "@type": "Organization", name: "CompliancePlus" },
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return <p key={i}>{block.text}</p>;
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-8 border-l-2 border-primary pl-5 font-serif text-xl leading-snug text-primary"
        >
          {block.text}
        </blockquote>
      );
    case "perspective":
      return (
        <aside key={i} className="mt-10 border-t border-border-strong bg-surface p-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-ink-soft uppercase">
            CompliancePlus Perspective
          </p>
          <p className="mt-3 font-serif text-lg leading-snug text-primary">{block.text}</p>
        </aside>
      );
    case "note":
      return (
        <p key={i} className="mt-8 border border-border p-4 text-sm text-muted-foreground">
          <strong className="text-ink">Note on sources: </strong>
          {block.text}
        </p>
      );
    case "sources":
      return (
        <div key={i} className="mt-6">
          <p className="text-xs font-semibold tracking-[0.16em] text-ink-soft uppercase">
            Primary sources
          </p>
          <ul className="mt-3">
            {block.items.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = relatedPosts(post.slug);

  return (
    <article>
      <div className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 pt-8 pb-12 sm:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blogs
          </Link>
          <p className="mt-8 text-xs tracking-wide text-muted-foreground uppercase">
            {post.category} · {formatDate(post.date)} · {post.readingTime} min read
          </p>
          <h1 className="mt-3 text-3xl leading-[1.2] sm:text-[2.4rem]">{post.title}</h1>
          <p className="mt-5 text-lg text-ink-soft">{post.intro}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <img
          src={post.image}
          alt={post.imageAlt}
          width={1400}
          height={900}
          className="mt-10 aspect-[16/9] w-full border border-border object-cover"
        />

        <div className="prose-cp mt-12 max-w-[68ch]">{post.body.map(renderBlock)}</div>

        <div className="mt-14 border-t border-border-strong pt-8">
          <h2 className="text-xl">Discuss this with CompliancePlus</h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            If any of this reflects a problem you are working through, we would be happy to
            understand the challenge.
          </p>
          <div className="mt-6">
            <CtaLink to="/contact">Contact CompliancePlus</CtaLink>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 pb-4">
          <h2 className="text-lg">Related articles</h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {p.category} · {p.readingTime} min read
                </p>
                <p className="mt-2 font-serif text-base leading-snug text-primary group-hover:text-primary-dark">
                  {p.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="pb-6">
          <Link to="/blog" className="text-sm font-medium text-primary hover:text-primary-dark">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </article>
  );
}
