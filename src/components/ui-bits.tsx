import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  outerClassName,
  tinted = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  outerClassName?: string;
  tinted?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn(tinted && "bg-surface", outerClassName)}>
      <div className={cn("mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20", className)}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.16em] text-ink-soft uppercase">{children}</p>
  );
}

export function CtaLink({
  to,
  children,
  variant = "solid",
}: {
  to: "/" | "/services" | "/expertise" | "/blog" | "/contact";
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition-colors rounded-sm";
  return (
    <Link
      to={to}
      className={cn(
        base,
        variant === "solid"
          ? "bg-primary text-primary-foreground hover:bg-primary-dark"
          : "border border-border-strong text-primary hover:border-primary hover:bg-accent",
      )}
    >
      {children}
    </Link>
  );
}

export function CardItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-border-strong pt-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}

export function ClosingCta({
  heading = "Let's talk about your AML process.",
  body = "Refining an onboarding framework, clearing a review backlog or redesigning risk assessments — we would be happy to understand the challenge.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <Section tinted>
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-ink-soft">{body}</p>
        <div className="mt-7">
          <CtaLink to="/contact">Start a Conversation</CtaLink>
        </div>
      </div>
    </Section>
  );
}
