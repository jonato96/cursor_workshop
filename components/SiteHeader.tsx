import Link from "next/link";
import { content } from "@/constants/content";

export function SiteHeader() {
  const { brand, nav } = content;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-zinc-50/70 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-50/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-3 py-3 md:gap-6">
          <Link
            href="#hero"
            className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 md:text-base"
          >
            {brand.nameLine}
          </Link>

          <nav
            className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-1 md:flex"
            aria-label="Principal"
          >
            {nav.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href={nav.primaryCtaHref}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {nav.primaryCtaLabel}
          </Link>
        </div>

        <nav
          className="-mx-1 flex gap-1 overflow-x-auto pb-3 md:hidden"
          aria-label="Principal móvil"
        >
          {nav.links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-zinc-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
