"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";
import { SectionShell } from "@/components/SectionShell";

export function ProcessSection() {
  const { process } = content;
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="process" ariaLabelledBy="process-heading" tone="white">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
              Proceso
            </p>
            <h2
              id="process-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            >
              {process.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">{process.subtitle}</p>
          </motion.div>
        </div>

        <div className="relative mt-14 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <div
            className="absolute left-[0.65rem] top-3 bottom-3 hidden w-px bg-zinc-200 md:block"
            aria-hidden
          />
          <ol className="space-y-12 max-md:pl-0 md:space-y-16 md:pl-10">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.id}
                className="relative max-md:pl-10 md:pl-2"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.42,
                  delay: reduceMotion ? 0 : i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 bg-white text-[10px] font-bold text-indigo-600 md:-left-[2.125rem]">
                  {step.label}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-2 max-w-prose text-base leading-relaxed text-zinc-600">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}
