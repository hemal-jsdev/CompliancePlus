import { createFileRoute } from "@tanstack/react-router";
import { ClosingCta, Eyebrow, Section } from "@/components/ui-bits";

const TITLE = "Our Expertise — AML onboarding architecture | CompliancePlus";
const DESCRIPTION =
  "Procedures, onboarding forms, approval architecture, decision-ready approval packs, client lifecycle pipelines and AML management information.";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: ExpertisePage,
});

type Block = {
  n: string;
  title: string;
  paras: string[];
  listLead?: string;
  list?: string[];
  close?: string;
};

const blocks: Block[] = [
  {
    n: "01",
    title: "Managed KYC / CDD Onboarding",
    paras: [
      "Many firms know what their AML policy says, but struggle to run the process day-to-day. We work alongside compliance and operations teams to carry out the client onboarding work itself.",
      "We can help design policy and process, but our core offer is hands-on managed service: we do the KYC and CDD on your clients, to your standards, under your oversight.",
    ],
    listLead: "Our managed onboarding support covers:",
    list: [
      "Client intake and information gathering",
      "Ownership and control analysis",
      "Risk-factor identification and scoring",
      "CDD review and verification",
      "PEP, sanctions and negative media screening",
      "Structured escalation and approval packs",
      "Ongoing monitoring and periodic review",
    ],
    close: "We free your team to focus on decisions, while we handle the work that feeds them.",
  },
  {
    n: "02",
    title: "Intelligent Client Onboarding Forms",
    paras: ["Forms should anticipate the questions an AML analyst will eventually need answered."],
    listLead: "CompliancePlus helps design onboarding forms that:",
    list: [
      "adapt logically to client responses",
      "provide relevant response options",
      "identify missing information early",
      "reduce repeated follow-up questions",
      "capture information needed for CDD and risk assessment",
    ],
    close: "The objective: ask better questions earlier.",
  },
  {
    n: "03",
    title: "Approval Architecture",
    paras: ["Different risks require different authorities."],
    listLead:
      "CompliancePlus helps organisations establish clear approval and escalation channels based on factors such as:",
    list: [
      "client risk",
      "matter risk",
      "PEP exposure",
      "sanctions concerns",
      "jurisdiction",
      "ownership complexity",
      "source of wealth and source of funds concerns",
      "other relevant high-risk factors",
    ],
  },
  {
    n: "04",
    title: "Decision-Ready Approval Packs",
    paras: [
      "Senior managers should not have to reconstruct an AML investigation before making a decision.",
    ],
    listLead: "We help create concise templates and formats that summarise:",
    list: [
      "relevant facts",
      "identified risks",
      "mitigating factors",
      "outstanding concerns",
      "analyst rationale",
      "required decision",
    ],
    close: "The objective is to enable confident, efficient and properly documented approvals.",
  },
  {
    n: "05",
    title: "Client Lifecycle Pipelines",
    paras: [
      "We build structured workflows covering new client onboarding, ongoing monitoring, periodic review and event-driven review.",
    ],
    listLead: "Processes should include:",
    list: ["ownership", "queues", "priorities", "ageing", "escalation", "completion standards"],
  },
  {
    n: "06",
    title: "Management Information",
    paras: [
      "AML teams generate large amounts of operational information. CompliancePlus helps convert it into useful management information.",
    ],
    listLead: "Potential MIS should help stakeholders understand:",
    list: [
      "onboarding volumes",
      "review backlogs",
      "case ageing",
      "high-risk populations",
      "outstanding approvals",
      "SLA performance",
      "workload distribution",
      "upcoming periodic reviews",
      "operational bottlenecks",
    ],
    close: "Good AML governance starts with good visibility.",
  },
];

function ExpertisePage() {
  return (
    <>
      <Section>
        <Eyebrow>Our Expertise</Eyebrow>
        <h1 className="mt-4 max-w-3xl text-3xl sm:text-[2.35rem]">
          We are not just a KYC verification vendor; we are your trusted partner in 360° client
          onboarding.
        </h1>
        <div className="mt-6 max-w-3xl space-y-4 text-ink-soft">
          <p>
            KYC verification is one component of effective AML compliance, but that's not where the
            onboarding process ends.
          </p>
          <p>
            CompliancePlus focuses on the wider client-onboarding architecture: how information is
            requested, how risk is identified, how cases move through the organisation, how decisions
            are escalated and how senior stakeholders receive the information necessary to approve or
            reject a proposal confidently.
          </p>
        </div>
      </Section>

      <div className="border-t border-border">
        {blocks.map((b, i) => (
          <Section key={b.n} tinted={i % 2 === 1} outerClassName="border-b border-border">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="font-serif text-sm text-primary">{b.n}</p>
                <h2 className="mt-2 text-2xl">{b.title}</h2>
              </div>
              <div className="space-y-4 text-ink-soft">
                {b.paras.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {b.listLead && <p className="text-ink">{b.listLead}</p>}
                {b.list && (
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {b.list.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {b.close && <p className="font-serif text-lg text-primary">{b.close}</p>}
              </div>
            </div>
          </Section>
        ))}
      </div>

      <ClosingCta />
    </>
  );
}
