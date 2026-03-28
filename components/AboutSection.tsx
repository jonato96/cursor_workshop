"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";

export function AboutSection() {
  const { about } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-zinc-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16 lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="about-heading"
              className="text-sm font-semibold uppercase tracking-wider text-indigo-600"
            >
              {about.title}
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              {about.lead}
            </p>
          </motion.div>

          <motion.div
            className="max-w-prose space-y-5 text-base leading-relaxed text-zinc-600 md:pt-8"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p>{about.body}</p>
            <div className="rounded-2xl border border-zinc-200/90 bg-zinc-50/80 px-5 py-4 text-sm text-zinc-700">
              <p className="font-medium text-zinc-900">{about.calloutTitle}</p>
              <p className="mt-1">{about.calloutBody}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
