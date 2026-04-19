import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-brand-600 dark:text-brand-400">
            &lt;BRAND_NAME&gt;
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            © {year} &lt;BRAND_NAME&gt;. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com/<TWITTER_HANDLE>"
            aria-label="Twitter"
            className="text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/<INSTAGRAM_HANDLE>"
            aria-label="Instagram"
            className="text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/<LINKEDIN_HANDLE>"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
