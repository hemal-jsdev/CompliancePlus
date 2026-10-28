import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-pathways.jpg";
import { CardItem, CtaLink, Eyebrow, Section } from "@/components/ui-bits";
import { posts, formatDate } from "@/data/posts";

const TITLE = "CompliancePlus — AML compliance advisory and managed services";
const DESCRIPTION =
  "AML process design, client onboarding and due diligence support for law firms, fintechs and financial institutions. Better processes. Better information. Better AML decisions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    title: "Client & Matter Due Diligence",
    body: "Support with client onboarding, ownership and control analysis, risk-factor identification, CDD review, PEP/Negative Media/Sacntion screening, and structured escalation.",
  },
  {
    title: "Periodic & Event-Driven Reviews",
    body: "Design and support review processes that ensure client information and risk assessments remain current when circumstances change.",
  },
  {
    title: "AML Process Design",
    body: "Build or refine practical AML procedures that translate regulatory requirements and organisational policies into workable day-to-day processes.",
  },
  {
    title: "Forms & Information Architecture",
    body: "Design onboarding, CDD and risk-assessment forms that collect the information decision-makers actually need.",
  },
  {
    title: "Approval & Escalation Frameworks",
    body: "Build clear approval pathways so cases reach the appropriate authority with concise and decision-useful information.",
  },
  {
    title: "AML Management Information",
    body: "Design MIS and operational reporting that helps AML teams, MLROs and senior stakeholders understand workloads, ageing, risk and priorities.",
  },
];

function Home() {
  const latest = posts.slice(0, 3);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>AML advisory & managed services</Eyebrow>
            <h1 className="mt-5 text-3xl leading-[1.15] font-semibold sm:text-[2.6rem]">
              AML compliance is more than completing a KYC check.
            </h1>
            <p className="mt-6 text-ink-soft">
              Effective client onboarding requires the right information to be collected, the right
              risks to be identified, the right people to review them, and the right evidence to
              support the final decision.
            </p>
            <p className="mt-4 text-ink-soft">
              CompliancePlus helps organisations design and operate AML processes that make those
              decisions clearer, faster and more defensible.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CtaLink to="/expertise">Explore Our Expertise</CtaLink>
              <CtaLink to="/contact" variant="outline">
                Talk to CompliancePlus
              </CtaLink>
            </div>
          </div>
        </div>
        <img
          src={heroImg}
          alt="Abstract diagram of interconnected decision pathways and structured information"
          width={1600}
          height={550}
          className="mt-12 aspect-[16/5.5] w-full object-cover"
        />
      </section>

      <Section>
        <Eyebrow>We Offer</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-2xl sm:text-3xl">
          Practical AML support, built around your organisation.
        </h2>
        <p className="mt-5 max-w-3xl text-ink-soft">
          Every organisation has a different risk appetite, client base, operating model and
          governance structure. CompliancePlus therefore focuses on improving the process around AML
          due diligence rather than imposing a generic checklist.
        </p>

        <div className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <CardItem key={s.title} title={s.title}>
              {s.body}
            </CardItem>
          ))}
        </div>

        <div className="mt-12">
          <Link to="/services" className="text-sm font-medium text-primary hover:text-primary-dark">
            See how we work with clients →
          </Link>
        </div>
      </Section>

      <Section tinted>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Positioning</Eyebrow>
            <h2 className="mt-4 text-2xl sm:text-3xl">
              We are not just a KYC service provider or verification vendor.
            </h2>
          </div>
          <div className="space-y-4 text-ink-soft">
            <p>KYC verification is one component of effective AML compliance.</p>
            <p>
              CompliancePlus focuses on the wider client-onboarding architecture: how information is
              requested, how risk is identified, how matters move through the organisation, how
              decisions are escalated and how senior stakeholders receive the information necessary
              to approve or reject a proposal confidently.
            </p>
            <p className="font-serif text-lg text-primary">
              Better processes. Better information. Better AML decisions.
            </p>
            <div className="pt-2">
              <CtaLink to="/expertise" variant="outline">
                Our Expertise
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Blogs</Eyebrow>
            <h2 className="mt-4 text-2xl sm:text-3xl">Practitioner notes on AML operations</h2>
          </div>
          <Link to="/blog" className="text-sm font-medium text-primary hover:text-primary-dark">
            All articles →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {latest.map((p) => (
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
                  {p.category} · {formatDate(p.date)}
                </p>
                <h3 className="mt-2 text-lg leading-snug group-hover:text-primary-dark">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{p.intro}</p>
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
