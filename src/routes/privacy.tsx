import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/ui-bits";

const TITLE = "Privacy — CompliancePlus";
const DESCRIPTION =
  "How CompliancePlus handles information submitted through this website. Placeholder policy pending completion.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <Eyebrow>Privacy</Eyebrow>
      <h1 className="mt-4 text-3xl">Privacy notice</h1>
      <div className="prose-cp mt-8 max-w-[68ch]">
        <p>
          This page is a placeholder. A full privacy notice will be published before CompliancePlus
          begins processing enquiries at scale.
        </p>
        <h2>What we expect to cover</h2>
        <ul>
          <li>the information collected through the enquiry form</li>
          <li>the purposes for which it is used</li>
          <li>lawful basis for processing</li>
          <li>retention periods</li>
          <li>data subject rights and how to exercise them</li>
          <li>contact details for privacy queries</li>
        </ul>
        <p>Please do not submit confidential client information through this website.</p>
      </div>
    </Section>
  );
}
