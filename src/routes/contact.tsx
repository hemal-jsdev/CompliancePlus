import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Eyebrow, Section } from "@/components/ui-bits";

const TITLE = "Contact — Let's talk about your AML process | CompliancePlus";
const DESCRIPTION =
  "Discuss AML onboarding frameworks, review backlogs, risk assessment redesign or process improvement with CompliancePlus.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  organisation: z.string().trim().min(1, "Please enter your organisation").max(120),
  role: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Please enter a valid work email").max(255),
  message: z.string().trim().min(1, "Please tell us what you'd like to discuss").max(1500),
  contactMethod: z.enum(["email", "call", "either"]),
});

const fieldClass =
  "mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:border-primary focus:outline-none";

function ContactPage() {
  type Errors = Partial<Record<"name" | "organisation" | "role" | "email" | "message" | "contactMethod", string>>;
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      organisation: fd.get("organisation"),
      role: fd.get("role"),
      email: fd.get("email"),
      message: fd.get("message"),
      contactMethod: fd.get("contactMethod"),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next as Errors);
      return;
    }

    setErrors({});
    e.currentTarget.reset();
    toast.success("Thank you — your enquiry has been noted.", {
      description: "Message delivery is not yet connected. We will confirm a contact route shortly.",
    });
  }

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="mt-4 text-3xl sm:text-[2.35rem]">Let's talk about your AML process.</h1>
          <p className="mt-6 text-ink-soft">
            Whether you are refining an existing onboarding framework, dealing with review backlogs,
            redesigning risk assessments or simply exploring whether parts of your AML process could
            work better, we would be happy to understand the challenge.
          </p>
          <p className="mt-6 border-l-2 border-primary pl-4 text-sm text-muted-foreground">
            Please do not submit confidential client information through this form.
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="border-t border-border-strong pt-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Name
              </label>
              <input id="name" name="name" maxLength={100} className={fieldClass} />
              {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="organisation" className="text-sm font-medium text-ink">
                Organisation
              </label>
              <input id="organisation" name="organisation" maxLength={120} className={fieldClass} />
              {errors.organisation && (
                <p className="mt-1 text-xs text-primary">{errors.organisation}</p>
              )}
            </div>
            <div>
              <label htmlFor="role" className="text-sm font-medium text-ink">
                Role <span className="text-muted-foreground">(optional)</span>
              </label>
              <input id="role" name="role" maxLength={120} className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Work email
              </label>
              <input id="email" name="email" type="email" maxLength={255} className={fieldClass} />
              {errors.email && <p className="mt-1 text-xs text-primary">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-medium text-ink">
              What would you like to discuss?
            </label>
            <textarea id="message" name="message" rows={5} maxLength={1500} className={fieldClass} />
            {errors.message && <p className="mt-1 text-xs text-primary">{errors.message}</p>}
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink">Preferred contact method</legend>
            <div className="mt-3 flex flex-wrap gap-5 text-sm text-ink-soft">
              {[
                { value: "email", label: "Email" },
                { value: "call", label: "Call" },
                { value: "either", label: "Either" },
              ].map((opt, i) => (
                <label key={opt.value} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={opt.value}
                    defaultChecked={i === 0}
                    className="accent-primary"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Start a Conversation
          </button>
        </form>
      </div>
    </Section>
  );
}
