import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/ui-bits";

const TITLE = "Terms — CompliancePlus";
const DESCRIPTION =
  "Terms of use for the CompliancePlus website, including the status of published content.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <Eyebrow>Terms</Eyebrow>
      <h1 className="mt-4 text-3xl">Terms of use</h1>
      <div className="prose-cp mt-8 max-w-[68ch]">
        <p>
          This page is a placeholder. Full terms of use will be published in due course.
        </p>
        <h2>Status of content</h2>
        <p>
          Articles and other material on this website are general commentary on AML process design.
          They are not legal advice, regulatory guidance or a substitute for your organisation's own
          risk-based procedures.
        </p>
        <p>
          CompliancePlus is not endorsed by, affiliated with or approved by the FCA, the SRA or any
          other regulator. Where regulatory sources are referenced, please consult the primary
          source directly.
        </p>
      </div>
    </Section>
  );
}
