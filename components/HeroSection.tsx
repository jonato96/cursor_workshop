"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/constants/content";

export function HeroSection() {
  const { hero, brand } = content;
  const reduceMotion = useReducedMotion();
  const transition = { duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] as const };
  const fade = {
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
  };
  const viewport = { once: true, amount: 0.35 } as const;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-zinc-200/80 bg-zinc-50"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,70,229,0.12),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <div className="max-w-xl lg:max-w-none">
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-wider text-indigo-600"
            initial={fade.initial}
            whileInView={fade.whileInView}
            viewport={viewport}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.05 }}
          >
            {brand.tagline}
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl"
            initial={fade.initial}
            whileInView={fade.whileInView}
            viewport={viewport}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }}
          >
            {hero.headlineSegments.map((seg, i) =>
              seg.emphasis === "gradient" ? (
                <span
                  key={i}
                  className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent"
                >
                  {seg.text}
                </span>
              ) : (
                <span key={i}>{seg.text}</span>
              ),
            )}
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl"
            initial={fade.initial}
            whileInView={fade.whileInView}
            viewport={viewport}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.18 }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={fade.initial}
            whileInView={fade.whileInView}
            viewport={viewport}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.26 }}
          >
            <Link
              href={hero.primaryCtaHref}
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:scale-105 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {hero.primaryCtaLabel}
            </Link>
            <Link
              href={hero.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-6 py-3 text-base font-semibold text-zinc-800 shadow-sm backdrop-blur transition hover:border-zinc-400 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
            >
              {hero.secondaryCtaLabel}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative mt-14 lg:mt-0"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-3xl border border-zinc-200/90 bg-white/80 p-8 shadow-xl shadow-zinc-900/5 ring-1 ring-zinc-900/5 backdrop-blur-sm">
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {hero.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl bg-zinc-50/80 px-4 py-3">
                  <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-zinc-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
