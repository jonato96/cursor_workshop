"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import { content } from "@/constants/content";
import { SectionShell } from "@/components/SectionShell";

export function FaqSection() {
  const { faq } = content;
  const reduceMotion = useReducedMotion();
  const idBase = useId();
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  return (
    <SectionShell id="faq" ariaLabelledBy="faq-heading" tone="muted">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16">
        <motion.div
          className="lg:col-span-4"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {faq.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">{faq.subtitle}</p>
        </motion.div>

        <div className="mt-12 border-t border-zinc-300/80 lg:col-span-7 lg:col-start-6 lg:mt-0">
          {faq.items.map((item, index) => {
            const expanded = openId === item.id;
            const panelId = `${idBase}-panel-${item.id}`;
            const buttonId = `${idBase}-button-${item.id}`;
            return (
              <div
                key={item.id}
                className="border-b border-zinc-300/80"
                style={{
                  transitionDelay: reduceMotion ? undefined : `${index * 0.02}s`,
                }}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpenId(expanded ? null : item.id)}
                    className="flex w-full items-start justify-between gap-4 py-6 text-left transition hover:text-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <span className="text-base font-semibold text-zinc-900">{item.question}</span>
                    <ChevronDown
                      aria-hidden
                      className={`mt-0.5 h-5 w-5 shrink-0 text-zinc-500 transition ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={reduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduceMotion ? { height: "auto", opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-base leading-relaxed text-zinc-600">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
