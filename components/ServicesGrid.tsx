"use client";

import type { LucideIcon } from "lucide-react";
import { BarChart3, Globe, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { content, type ServiceIconName } from "@/constants/content";
import { SectionShell } from "@/components/SectionShell";

const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
  Globe,
  Workflow,
  BarChart3,
};

export function ServicesGrid() {
  const { services } = content;
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="services" ariaLabelledBy="services-heading" tone="muted">
      <div className="max-w-3xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Servicios
          </p>
          <h2
            id="services-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {services.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">{services.subtitle}</p>
        </motion.div>
      </div>

      <ul className="mt-14 divide-y divide-zinc-300/80 border-t border-b border-zinc-300/80">
        {services.items.map((svc, index) => {
          const Icon = SERVICE_ICONS[svc.icon];
          return (
            <motion.li
              key={svc.id}
              className="group grid gap-6 py-12 sm:grid-cols-[auto_1fr] sm:gap-10 sm:py-14"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.42,
                delay: reduceMotion ? 0 : index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center text-indigo-600 transition group-hover:text-indigo-500">
                <Icon aria-hidden className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                  {svc.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
                  {svc.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
