import { createFileRoute } from "@tanstack/react-router";
import { CardItem, ClosingCta, Eyebrow, Section } from "@/components/ui-bits";

const TITLE = "We Offer — AML support for regulated firms | CompliancePlus";
const DESCRIPTION =
  "AML client and matter due diligence, periodic reviews, process design, forms architecture, approval frameworks and management information.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Client & Matter Due Diligence",
    body: "Support with client onboarding, ownership and control analysis, risk-factor identification, CDD review and structured escalation.",
    detail: [
      "Onboarding and CDD review support",
      "Ownership and control analysis",
      "Risk-factor identification and documentation",
      "Structured escalation of unresolved concerns",
    ],
  },
  {
    title: "Periodic & Event-Driven Reviews",
    body: "Design and support review processes that ensure client information and risk assessments remain current when circumstances change.",
    detail: [
      "Review scheduling and trigger definition",
      "Backlog and ageing management",
      "Refresh standards and completion criteria",
    ],
  },
  {
    title: "AML Process Design",
    body: "Build or refine practical AML procedures that translate regulatory requirements and organisational policies into workable day-to-day processes.",
    detail: [
      "Procedure drafting and simplification",
      "Ownership, timing and evidence standards",
      "Alignment of written procedure with actual practice",
    ],
  },
  {
    title: "Forms & Information Architecture",
    body: "Design onboarding, CDD and risk-assessment forms that collect the information decision-makers actually need.",
    detail: [
      "Question design and conditional logic",
      "Response options that reduce ambiguity",
      "Early identification of missing information",
    ],
  },
  {
    title: "Approval & Escalation Frameworks",
    body: "Build clear approval pathways so cases reach the appropriate authority with concise and decision-useful information.",
    detail: [
      "Authority mapping by risk factor",
      "Escalation triggers and thresholds",
      "Decision-ready approval templates",
    ],
  },
  {
    title: "AML Management Information",
    body: "Design MIS and operational reporting that helps AML teams, MLROs and senior stakeholders understand workloads, ageing, risk and priorities.",
    detail: [
      "Operational and governance reporting",
      "Workload, ageing and SLA visibility",
      "High-risk population monitoring",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <Section>
        <Eyebrow>We Offer</Eyebrow>
        <h1 className="mt-4 max-w-2xl text-3xl sm:text-[2.35rem]">
          Practical AML support, built around your organisation.
        </h1>
        <p className="mt-6 max-w-3xl text-ink-soft">
          Every organisation has a different risk appetite, client base, operating model and governance structure. But everyone needs the processes to run smoothly. Compliance Plus is your trusted partner in running your processes for you.&nbsp;
          <br />
          Our goal is not to reinvent the wheel for you; we are here to run along with you.&nbsp;
        </p>
      </Section>

      <Section tinted>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title}>
              <CardItem title={s.title}>{s.body}</CardItem>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {s.detail.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span aria-hidden className="mt-2.5 h-px w-2.5 shrink-0 bg-primary" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <ClosingCta />
    </>
  );
}
