"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";
import { SectionShell } from "@/components/SectionShell";

export function SocialProofSection() {
  const { testimonials } = content;
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="proof" ariaLabelledBy="proof-heading" tone="canvas">
      <motion.div
        className="max-w-3xl"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 0.45 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
          Prueba social
        </p>
        <h2
          id="proof-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
        >
          {testimonials.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-600">{testimonials.subtitle}</p>
      </motion.div>

      <div className="mt-16 space-y-0 divide-y divide-zinc-300/70">
        {testimonials.items.map((item, i) => (
          <motion.blockquote
            key={item.id}
            className="py-12 first:pt-0 md:py-14"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.42,
              delay: reduceMotion ? 0 : i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-zinc-900 sm:text-[1.65rem]">
              “{item.quote}”
            </p>
            <footer className="mt-8 text-sm text-zinc-500">
              <cite className="not-italic">
                <span className="font-semibold text-zinc-800">{item.name}</span>
                <span className="mx-2 text-zinc-400" aria-hidden>
                  ·
                </span>
                {item.role}, {item.company}
              </cite>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionShell>
  );
}
