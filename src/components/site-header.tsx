import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/services", label: "We Offer" },
  { to: "/expertise", label: "Our Expertise" },
  { to: "/blog", label: "Blogs" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="CompliancePlus home">
          <span aria-hidden className="block h-5 w-5 shrink-0 bg-primary [clip-path:polygon(0_0,100%_0,100%_58%,50%_100%,0_58%)]" />
          <span className="font-serif text-lg font-semibold tracking-tight text-ink">
            Compliance<span className="text-primary">Plus</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-ink transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="border-b border-primary/40 pb-0.5 text-sm font-medium text-primary transition-colors hover:border-primary-dark hover:text-primary-dark"
          >
            Discuss Your AML Process
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden" aria-label="Mobile">
          <div className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-3 text-base font-medium text-ink last:border-0 hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-block text-base font-medium text-primary"
            >
              Discuss Your AML Process →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
