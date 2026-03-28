"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { content } from "@/constants/content";

export function HeroSection() {
  const { hero, brand } = content;
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 48]);
  const imageScale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 1.04]);

  const t = { duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] as const };
  const v = { once: true, amount: 0.2 } as const;

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-7rem)] flex-col justify-end border-b border-zinc-900/10 md:min-h-[calc(100svh-4rem)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{ y: imageY, scale: imageScale }}
        aria-hidden
      >
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/78 to-zinc-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/45 to-transparent md:from-zinc-950/88 md:via-zinc-950/35" />
      </motion.div>

      <div className="relative z-10 w-full px-4 pb-14 pt-10 sm:px-6 md:pb-20 md:pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl md:max-w-lg">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...t, delay: 0.02 }}
            >
              {brand.heroBrandLine}
            </motion.p>

            <motion.h1
              id="hero-heading"
              className="mt-4 text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ ...t, delay: 0.1 }}
            >
              {hero.headlineSegments.map((seg, i) =>
                seg.emphasis === "gradient" ? (
                  <span
                    key={i}
                    className="bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent"
                  >
                    {seg.text}
                  </span>
                ) : (
                  <span key={i}>{seg.text}</span>
                ),
              )}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-md text-base leading-relaxed text-zinc-300 sm:text-lg"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={v}
              transition={{ ...t, delay: 0.06 }}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={v}
              transition={{ ...t, delay: 0.12 }}
            >
              <Link
                href={hero.primaryCtaHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg transition hover:scale-[1.02] hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {hero.primaryCtaLabel}
              </Link>
              <Link
                href={hero.secondaryCtaHref}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
              >
                {hero.secondaryCtaLabel}
              </Link>
            </motion.div>

            <motion.p
              className="mt-8 max-w-sm text-xs leading-relaxed text-zinc-400 sm:text-sm"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
              whileInView={reduceMotion ? undefined : { opacity: 1 }}
              viewport={v}
              transition={{ ...t, delay: 0.18 }}
            >
              {hero.footnote}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
