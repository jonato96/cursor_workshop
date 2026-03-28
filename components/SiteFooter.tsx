import Link from "next/link";
import { Link2, Mail, MessageCircle } from "lucide-react";
import { content } from "@/constants/content";

export function SiteFooter() {
  const { footer, brand, nav } = content;
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-zinc-950 py-14 text-zinc-400 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-semibold text-white">{brand.nameLine}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-500">{footer.tagline}</p>
            <p className="mt-6 text-xs leading-relaxed text-zinc-600">{footer.legalNote}</p>
          </div>

          <nav aria-label="Pie de página" className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {nav.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-500 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <a
              href={footer.emailHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-indigo-400" aria-hidden />
              {footer.email}
            </a>
            <a
              href={footer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-indigo-400" aria-hidden />
              {footer.whatsappLabel}
            </a>
            <a
              href={footer.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
              aria-label={footer.linkedinLabel}
            >
              <Link2 className="h-4 w-4 text-indigo-400" aria-hidden />
              {footer.linkedinLabel}
            </a>
          </div>
          <p className="text-xs text-zinc-600">
            © {year} {footer.copyrightEntity}
          </p>
        </div>
      </div>
    </footer>
  );
}
