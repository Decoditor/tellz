import { GitBranch, Link2, Mail, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";

import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Leadership", to: "/leadership" },
      { label: "Services", to: "/services" },
      { label: "Projects", to: "/projects" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Solutions", to: "/#solutions" },
      { label: "Work", to: "/projects" },
      { label: "Leadership", to: "/leadership" },
      { label: "Process", to: "/#process" },
      { label: "Stories", to: "/#testimonials" },
    ],
  },
];

const social = [
  { label: "X (Twitter)", href: "https://twitter.com", icon: Send },
  { label: "GitHub", href: "https://github.com", icon: GitBranch },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Link2 },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14] light:border-slate-200 light:bg-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:flex md:grid-cols-2">
          <div className="space-y-6 flex-1">
            <p className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold font-sans">Tellz</span>
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-tellz-muted light:text-slate-600">
              Tellz partners with ambitious teams to ship websites, platforms,
              and AI-native products with clarity, speed, and long-term
              leverage.
            </p>
            <div className="flex gap-2">
              {social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-tellz-muted transition-colors hover:border-white/20 hover:text-tellz-text light:border-slate-200 light:text-slate-600 light:hover:border-slate-300 light:hover:text-slate-900"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-tellz-text light:text-slate-900">
                {group.title}
              </h3>
              <ul className="space-y-3 text-sm text-tellz-muted light:text-slate-600">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith("/#") ? (
                      <a
                        href={link.to}
                        className="transition-colors hover:text-tellz-text light:hover:text-slate-900"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="transition-colors hover:text-tellz-text light:hover:text-slate-900"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4 max-w-xs">
            <h3 className="text-sm font-semibold text-tellz-text light:text-slate-900">
              Newsletter
            </h3>
            <p className="text-sm text-tellz-muted light:text-slate-600">
              Product notes, interface craft, and launch stories—occasionally,
              never noisy.
            </p>
            <form
              className="flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email for newsletter"
                className="sm:flex-1"
              />
              <Button type="submit" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
            <div className="flex items-start gap-2 text-sm text-tellz-muted light:text-slate-600">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>Lagos, Nigeria · Partnering with teams worldwide</span>
            </div>
            <Link to="mailto:hello@tellz.studio">
              <Button variant="link">
                <Mail className="h-4 w-4" aria-hidden />
                hello@tellz.studio
              </Button>
            </Link>
          </div>
        </div>

        <Separator className="my-10 bg-white/10 light:bg-slate-200" />

        <div className="flex flex-col gap-4 text-sm text-tellz-muted sm:flex-row sm:items-center sm:justify-between light:text-slate-600">
          <p>© {new Date().getFullYear()} Tellz. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="hover:text-tellz-text light:hover:text-slate-900"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-tellz-text light:hover:text-slate-900"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-tellz-text light:hover:text-slate-900"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
