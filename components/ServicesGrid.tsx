"use client";

import type { LucideIcon } from "lucide-react";
import { BarChart3, Globe, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { content, type ServiceIconName } from "@/constants/content";

const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
  Globe,
  Workflow,
  BarChart3,
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServicesGrid() {
  const { services } = content;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-zinc-200/80 bg-zinc-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <h2
            id="services-heading"
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {services.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">{services.subtitle}</p>
        </motion.div>

        {reduceMotion ? (
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {services.items.map((svc) => {
              const Icon = SERVICE_ICONS[svc.icon];
              return (
                <li
                  key={svc.id}
                  className="group rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200/80 hover:shadow-md hover:shadow-indigo-500/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/80 transition group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-500/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {svc.description}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <motion.ul
            className="mt-12 grid gap-5 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.items.map((svc) => {
              const Icon = SERVICE_ICONS[svc.icon];
              return (
                <motion.li
                  key={svc.id}
                  variants={itemVariants}
                  className="group rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200/80 hover:shadow-md hover:shadow-indigo-500/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100/80 transition group-hover:bg-indigo-600 group-hover:text-white group-hover:ring-indigo-500/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {svc.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </section>
  );
}
