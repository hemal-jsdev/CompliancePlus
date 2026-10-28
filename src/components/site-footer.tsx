import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold text-ink">
            Compliance<span className="text-primary">Plus</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Your trusted partner in AML Compliance
          </p>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            Better processes. Better information. Better AML decisions.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-widest text-ink-soft uppercase">Site</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/services" className="text-primary hover:text-primary-dark">We Offer</Link></li>
            <li><Link to="/expertise" className="text-primary hover:text-primary-dark">Our Expertise</Link></li>
            <li><Link to="/blog" className="text-primary hover:text-primary-dark">Blogs</Link></li>
            <li><Link to="/contact" className="text-primary hover:text-primary-dark">Contact Us</Link></li>
            <li><Link to="/privacy" className="text-primary hover:text-primary-dark">Privacy</Link></li>
            <li><Link to="/terms" className="text-primary hover:text-primary-dark">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold tracking-widest text-ink-soft uppercase">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>
              LinkedIn: <span className="text-muted-foreground">[profile to be added]</span>
            </li>
            <li>
              Email: <span className="text-muted-foreground">[address to be added]</span>
            </li>
            <li>
              Company registration information:{" "}
              <span className="text-muted-foreground">[to be added]</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          <p>
            © {new Date().getFullYear()} CompliancePlus. Content on this website is general
            information about AML process design and is not legal advice or regulatory guidance.
            CompliancePlus is not endorsed by or affiliated with any regulator.
          </p>
        </div>
      </div>
    </footer>
  );
}
