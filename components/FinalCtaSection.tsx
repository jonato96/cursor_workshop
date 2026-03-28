"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";

export function FinalCtaSection() {
  const { finalCta, brand } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="border-t border-indigo-900/30 bg-gradient-to-b from-indigo-950 to-zinc-950 py-20 text-zinc-100 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.48 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/90">
            {brand.shortLabel}
          </p>
          <h2
            id="cta-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            {finalCta.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
            {finalCta.description}
          </p>
          <Link
            href={finalCta.buttonHref}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg transition hover:scale-[1.02] hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {finalCta.buttonLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
