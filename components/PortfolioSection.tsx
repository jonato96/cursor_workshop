"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";
import { SectionShell } from "@/components/SectionShell";

export function PortfolioSection() {
  const { portfolio } = content;
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="work" ariaLabelledBy="work-heading" tone="white">
      <motion.div
        className="max-w-3xl"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 0.45 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
          Portafolio
        </p>
        <h2
          id="work-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
        >
          {portfolio.title}
        </h2>
        <p className="mt-4 text-lg text-zinc-600">{portfolio.subtitle}</p>
      </motion.div>

      <div className="mt-16">
        <ul className="space-y-20 md:space-y-28">
          {portfolio.items.map((item, i) => (
            <motion.li
              key={item.id}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-200 lg:w-1/2">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
              <div className="lg:w-1/2">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                  {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-base font-medium text-zinc-800">{item.outcome}</p>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
