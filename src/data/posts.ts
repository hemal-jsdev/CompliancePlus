import trainingImg from "@/assets/blog-training.jpg";
import sraImg from "@/assets/blog-sra.jpg";
import fcaImg from "@/assets/blog-fca.jpg";
import matterRiskImg from "@/assets/blog-matter-risk.jpg";
import craFormImg from "@/assets/blog-cra-form.jpg";
import sowImg from "@/assets/blog-source-of-wealth.jpg";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "perspective"; text: string }
  | { type: "note"; text: string }
  | { type: "sources"; items: { label: string; href: string }[] };

export type Post = {
  slug: string;
  title: string;
  intro: string;
  category: string;
  date: string; // ISO
  readingTime: number;
  image: string;
  imageAlt: string;
  description: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "aml-training-that-people-remember",
    title: "AML Training That People Actually Remember",
    intro:
      "Annual AML training often measures completion rather than learning. Scenario-led sessions help employees recognise risk inside their actual role.",
    category: "AML Training",
    date: "2026-08-04",
    readingTime: 4,
    image: trainingImg,
    imageAlt:
      "Small group of compliance professionals discussing an AML scenario around a meeting table",
    description:
      "Why scenario-led AML training produces better decisions than slide-driven annual refreshers, and how to design sessions compliance teams remember.",
    body: [
      { type: "p", text: "AML training can easily become an annual exercise in completion rather than learning." },
      { type: "p", text: "Slides are presented. Regulations are summarised. Attendance is recorded." },
      { type: "p", text: "Then everybody returns to work." },
      {
        type: "p",
        text: "Effective training should instead help employees recognise situations in which AML risk appears in their actual role.",
      },
      { type: "h2", text: "Start with scenarios" },
      {
        type: "p",
        text: "Ask participants what they would do when information does not make sense. Introduce incomplete facts. Allow different interpretations. Ask what additional information they would request and when they would escalate.",
      },
      { type: "p", text: "The objective is not simply to teach employees what the policy says." },
      { type: "quote", text: "It is to help them recognise when the policy becomes relevant." },
      { type: "h2", text: "What a session should combine" },
      {
        type: "ul",
        items: [
          "short explanations",
          "realistic scenarios",
          "audience participation",
          "decision points",
          "escalation exercises",
          "examples relevant to the organisation's clients and matters",
        ],
      },
      {
        type: "p",
        text: "The strongest AML training often leaves participants with better questions rather than longer notes.",
      },
      {
        type: "perspective",
        text: "If employees understand why a control exists, they are considerably more likely to apply it intelligently.",
      },
    ],
  },
  {
    slug: "sra-aml-reviews",
    title: "What SRA AML Reviews Can Teach Law Firms About Their Own Controls",
    intro:
      "Supervision is not a test of whether policies exist. It is a test of whether they operate on real clients and real matters.",
    category: "Legal Sector",
    date: "2026-07-21",
    readingTime: 5,
    image: sraImg,
    imageAlt: "Compliance professional reviewing a structured AML audit file in a law firm setting",
    description:
      "How law firms can test their own AML files from the perspective of an external reviewer, and why evidencing decisions matters as much as making them.",
    body: [
      {
        type: "p",
        text: "AML supervision should not be viewed purely as an exercise in demonstrating that policies exist.",
      },
      {
        type: "p",
        text: "The more useful question is whether those policies operate effectively when applied to real clients and real matters.",
      },
      {
        type: "p",
        text: "Regulatory reviews of law firms repeatedly highlight the importance of practical implementation across areas such as:",
      },
      {
        type: "ul",
        items: [
          "client and matter risk assessment",
          "source of funds and source of wealth",
          "ongoing monitoring",
          "documentation of decisions",
          "appropriate escalation",
          "consistency between written procedures and actual practice",
        ],
      },
      {
        type: "p",
        text: "A technically comprehensive AML policy therefore provides limited comfort if the operational process underneath it does not consistently produce good decisions.",
      },
      { type: "h2", text: "Review your own files as a reviewer would" },
      { type: "p", text: "Firms should periodically test their own files from the perspective of an external reviewer. Ask:" },
      {
        type: "ul",
        items: [
          "Could another experienced professional understand why this client was accepted?",
          "Could they identify the risks considered?",
          "Could they see what mitigated those risks?",
          "Could they understand who approved the decision and why?",
        ],
      },
      { type: "p", text: "If the answer is unclear, the weakness may not be the underlying decision." },
      { type: "quote", text: "It may be the process used to evidence it." },
      {
        type: "perspective",
        text: "An AML framework should be designed not merely to survive regulatory inspection, but to produce consistently defensible decisions before an inspection ever occurs.",
      },
      {
        type: "note",
        text: "This article describes themes commonly discussed in legal-sector AML supervision. It does not attribute any statistic, finding or statement to the SRA. Verify all regulatory statements against current SRA publications before relying on them.",
      },
      {
        type: "sources",
        items: [
          { label: "SRA — Anti-money laundering resources", href: "https://www.sra.org.uk/solicitors/resources/money-laundering/" },
          { label: "The Money Laundering Regulations 2017 (as amended)", href: "https://www.legislation.gov.uk/uksi/2017/692/contents" },
          { label: "Legal Sector Affinity Group AML guidance", href: "https://www.lawsociety.org.uk/topics/anti-money-laundering/anti-money-laundering-guidance" },
        ],
      },
    ],
  },
  {
    slug: "fca-is-your-friend",
    title: "The FCA Is Your Friend — Not Your Foe",
    intro:
      "Treating supervisory publications as control-design intelligence is more productive than treating them as a threat.",
    category: "Regulatory Mindset",
    date: "2026-07-07",
    readingTime: 4,
    image: fcaImg,
    imageAlt: "Two professionals reviewing a compliance framework document together across a table",
    description:
      "Regulatory guidance, thematic reviews and enforcement outcomes are a free source of control-design intelligence for compliance teams.",
    body: [
      {
        type: "p",
        text: "Regulators are sometimes discussed inside organisations as though their objective were to catch businesses making mistakes.",
      },
      { type: "p", text: "That mindset can produce defensive compliance." },
      {
        type: "p",
        text: "A healthier approach is to treat regulatory expectations as information about the standards the organisation should be capable of demonstrating.",
      },
      {
        type: "p",
        text: "When the FCA publishes guidance, thematic observations, enforcement outcomes or supervisory findings, compliance teams should ask: what does this tell us about the regulator's expectations of firms like ours?",
      },
      { type: "h2", text: "Translate insight into operational questions" },
      {
        type: "ul",
        items: [
          "Are our procedures clear?",
          "Do employees understand them?",
          "Does our management information identify emerging problems?",
          "Are exceptions visible?",
          "Can senior management understand where residual risks remain?",
          "Would our records allow us to explain a decision several years later?",
        ],
      },
      {
        type: "p",
        text: "Regulatory publications can therefore become a free source of control-design intelligence.",
      },
      {
        type: "perspective",
        text: "Strong compliance functions should not spend their time fearing the regulator. They should build organisations capable of explaining confidently how risks are identified, managed and governed.",
      },
      {
        type: "note",
        text: "CompliancePlus is not endorsed by, affiliated with or approved by the FCA or any other regulator. Verify regulatory statements against current primary sources before relying on them.",
      },
      {
        type: "sources",
        items: [
          { label: "FCA — Financial crime", href: "https://www.fca.org.uk/firms/financial-crime" },
          { label: "FCA — Financial Crime Guide (FCG)", href: "https://www.handbook.fca.org.uk/handbook/FCG/" },
          { label: "HM Treasury — Money laundering and terrorist financing", href: "https://www.gov.uk/government/collections/money-laundering-and-terrorist-financing" },
        ],
      },
    ],
  },
  {
    slug: "matter-risk-assessment",
    title: "Matter Risk Assessment: The Other Half of the AML Picture",
    intro:
      "The same client can present very different AML risk across two instructions. Client and matter risk assessment should work together.",
    category: "Risk Assessment",
    date: "2026-06-23",
    readingTime: 4,
    image: matterRiskImg,
    imageAlt: "Diagram of one client connected to several matter files with different risk profiles",
    description:
      "Why matter risk assessment deserves the same rigour as client risk assessment, and what a useful matter-level assessment should ask.",
    body: [
      {
        type: "p",
        text: "A client's identity does not tell you everything about the risk created by a particular instruction.",
      },
      {
        type: "p",
        text: "The same client can instruct a firm on two matters with very different AML characteristics.",
      },
      {
        type: "p",
        text: "Consider the difference between a routine advisory instruction and a transaction involving:",
      },
      {
        type: "ul",
        items: [
          "unusual payment arrangements",
          "third-party funding",
          "high-risk jurisdictions",
          "complex corporate structures",
          "significant movement of funds",
          "unexpected changes in transaction behaviour",
        ],
      },
      { type: "p", text: "The client may not have changed. The risk presented by the matter may have." },
      {
        type: "p",
        text: "That is why client risk assessment and matter risk assessment should work together.",
      },
      {
        type: "p",
        text: "A useful matter risk assessment should encourage the fee earner and AML team to consider what is actually happening, why it makes commercial sense and whether the proposed activity changes the firm's exposure.",
      },
      { type: "perspective", text: "Know your client. But also understand what your client is asking you to do." },
      {
        type: "note",
        text: "General practitioner commentary rather than regulatory guidance. Align matter risk assessment design with current UK legal-sector AML requirements and your own risk-based procedures.",
      },
      {
        type: "sources",
        items: [
          { label: "The Money Laundering Regulations 2017 (as amended)", href: "https://www.legislation.gov.uk/uksi/2017/692/contents" },
          { label: "SRA — Anti-money laundering resources", href: "https://www.sra.org.uk/solicitors/resources/money-laundering/" },
        ],
      },
    ],
  },
  {
    slug: "client-risk-assessment-form",
    title: "Your Client Risk Assessment Form Should Evolve With Your Business",
    intro:
      "A CRA form is an operational control, not a permanent artefact. It should be refined as clients, products and exposure change.",
    category: "Process Design",
    date: "2026-06-09",
    readingTime: 4,
    image: craFormImg,
    imageAlt: "Abstract illustration of a structured risk-assessment form with branching decision pathways",
    description:
      "Practical review questions for keeping a client risk assessment form useful as your client base, products and regulatory expectations change.",
    body: [
      {
        type: "p",
        text: "A Client Risk Assessment form should not become permanent simply because it once worked.",
      },
      {
        type: "ul",
        items: [
          "Businesses change.",
          "Client populations change.",
          "Products change.",
          "Geographic exposure changes.",
          "Regulatory expectations evolve.",
          "And compliance teams learn from the cases that pass through them.",
        ],
      },
      {
        type: "p",
        text: "Your CRA should therefore be treated as an operational control that requires periodic refinement.",
      },
      { type: "h2", text: "Review questions" },
      {
        type: "ul",
        items: [
          "Are analysts repeatedly requesting information that the onboarding form could have collected earlier?",
          "Are certain questions producing ambiguous answers?",
          "Are risk factors being captured but not meaningfully affecting the assessment?",
          "Are senior approvers receiving the information they actually need?",
          "Are employees writing long narratives because the form itself is poorly structured?",
        ],
      },
      { type: "quote", text: "The best risk-assessment forms guide thought without replacing judgment." },
      {
        type: "perspective",
        text: "Do not ask whether your CRA form is complete. Ask whether it consistently helps people make better risk decisions.",
      },
    ],
  },
  {
    slug: "source-of-wealth-narrative",
    title: "Source of Wealth: Ask the Story Before Asking for the Documents",
    intro:
      "Source of wealth reviews become inefficient when document requests precede an understanding of the wealth narrative.",
    category: "Due Diligence",
    date: "2026-05-26",
    readingTime: 4,
    image: sowImg,
    imageAlt: "Abstract illustration of a wealth timeline flowing into a structured compliance review panel",
    description:
      "A narrative-first approach to source of wealth: understand how wealth was accumulated, then decide what evidence the story requires.",
    body: [
      {
        type: "p",
        text: "Source of wealth reviews can become unnecessarily inefficient when the process begins by requesting documents before understanding the underlying story.",
      },
      { type: "p", text: "A better starting point is often the narrative." },
      { type: "p", text: "How was the client's wealth accumulated? Over what period?" },
      {
        type: "ul",
        items: [
          "employment",
          "business ownership",
          "investment",
          "inheritance",
          "asset disposal",
          "multiple sources",
        ],
      },
      {
        type: "p",
        text: "Once that story is understood, the compliance professional can determine what information or evidence is relevant.",
      },
      { type: "h2", text: "Questionnaires should adapt" },
      {
        type: "p",
        text: "An intelligent source-of-wealth questionnaire should therefore adapt to the client's answers. For example, selecting business ownership should trigger questions about:",
      },
      {
        type: "ul",
        items: [
          "business activity",
          "ownership percentage",
          "period of ownership",
          "approximate value",
          "distributions or sale proceeds",
          "relevant supporting information",
        ],
      },
      { type: "p", text: "An inheritance pathway requires an entirely different set of questions." },
      {
        type: "p",
        text: "The objective is not to create the longest possible questionnaire. It is to collect enough structured information in the first interaction to understand the wealth narrative and identify what needs verification.",
      },
      {
        type: "perspective",
        text: "Understand the story first. Then decide what evidence the story requires.",
      },
      {
        type: "note",
        text: "This article is practitioner commentary and not definitive regulatory guidance. Source of wealth and source of funds expectations should be applied in line with applicable regulatory requirements and your organisation's own risk-based procedures.",
      },
      {
        type: "sources",
        items: [
          { label: "The Money Laundering Regulations 2017 (as amended)", href: "https://www.legislation.gov.uk/uksi/2017/692/contents" },
          { label: "FATF — Recommendations and guidance", href: "https://www.fatf-gafi.org/en/publications.html" },
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, count = 2): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, count);
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
