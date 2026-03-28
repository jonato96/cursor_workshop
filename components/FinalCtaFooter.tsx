"use client";

import Link from "next/link";
import { Link2, Mail, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";

export function FinalCtaFooter() {
  const { finalCta, footer, brand } = content;
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-950 text-zinc-200">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-lg text-zinc-400">{finalCta.description}</p>
            <Link
              href={finalCta.buttonHref}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-zinc-950 shadow-lg transition hover:scale-105 hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {finalCta.buttonLabel}
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{brand.nameLine}</p>
            <p className="mt-1 max-w-md text-sm text-zinc-400">{footer.legalNote}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:justify-end">
            <a
              href={footer.emailHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
            >
              <Mail className="h-4 w-4 shrink-0 text-indigo-300" aria-hidden />
              {footer.email}
            </a>
            <a
              href={footer.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-indigo-300" aria-hidden />
              {footer.whatsappLabel}
            </a>
            <a
              href={footer.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/10"
              aria-label={footer.linkedinLabel}
            >
              <Link2 className="h-4 w-4 shrink-0 text-indigo-300" aria-hidden />
              {footer.linkedinLabel}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs text-zinc-500">
          © {year} {footer.copyrightEntity}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
