"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";
import { SectionShell } from "@/components/SectionShell";

export function AboutSection() {
  const { about } = content;
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="about" ariaLabelledBy="about-heading" tone="white">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          className="lg:col-span-5"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            {about.title}
          </p>
          <h2
            id="about-heading"
            className="mt-4 text-3xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-4xl"
          >
            {about.lead}
          </h2>
        </motion.div>

        <motion.div
          className="lg:col-span-6 lg:col-start-7"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            delay: reduceMotion ? 0 : 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="max-w-prose text-lg leading-relaxed text-zinc-600">{about.body}</p>
          <aside className="mt-10 border-l-2 border-indigo-600 pl-6">
            <p className="text-sm font-semibold text-zinc-900">{about.calloutTitle}</p>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-600">
              {about.calloutBody}
            </p>
          </aside>
        </motion.div>
      </div>
    </SectionShell>
  );
}
