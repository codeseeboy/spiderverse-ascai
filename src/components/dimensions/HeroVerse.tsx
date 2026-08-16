"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { fest } from "@/content/fest";
import { assets } from "@/content/assets";
import { useVerse } from "@/context/VerseContext";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/motion";
import { Caption } from "@/components/system/Chrome";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function HeroVerse() {
  const { play } = useVerse();
  const fine = useFinePointer();
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 20 });
  const sy = useSpring(my, { stiffness: 70, damping: 20 });
  const far = useMotionTemplate`translate3d(${sx}px, ${sy}px, 0) scale(1.06)`;
  const tick = useTick(fest.countdownTo);

  useEffect(() => {
    if (!fine || reduced) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * -14);
      my.set((e.clientY / window.innerHeight - 0.5) * -8);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [fine, reduced, mx, my]);

  const openRegister = () => {
    play("thwip");
    if (fest.registerUrl) window.open(fest.registerUrl, "_blank", "noopener,noreferrer");
    else document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-black">
      <motion.div className="absolute inset-[-5%]" style={{ transform: far }}>
        <Image
          src={assets.images.rooftopFigure}
          alt=""
          fill
          priority
          className="object-cover object-[45%_10%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Readability on the RIGHT where copy lives */}
      <div className="absolute inset-y-0 right-0 z-[2] w-[58%] bg-gradient-to-l from-black/80 via-black/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-black/50 to-transparent" />

      <motion.div
        className="pointer-events-none absolute bottom-[-8%] left-[-8%] z-[8] h-[72%] w-[68%] sm:w-[56%] md:left-[-4%] md:w-[46%] lg:h-[80%] lg:w-[42%]"
        initial={reduced ? false : { opacity: 0, x: -48, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      >
        <div className="shooter-from-left relative h-full w-full">
          <Image
            src={assets.images.webShooter}
            alt=""
            fill
            priority
            className="object-contain object-left-bottom"
            sizes="(max-width: 768px) 68vw, 42vw"
          />
        </div>
      </motion.div>

      {/* Copy on the RIGHT — fills the empty side; hand thwips toward it */}
      <div className="relative z-20 flex h-full items-center justify-end px-5 pt-24 pb-10 md:px-10 lg:px-16">
        <motion.div
          className="flex w-full max-w-lg flex-col gap-4 md:gap-5"
          initial={reduced ? false : { opacity: 0, x: 28, y: 24 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Caption>HACK-VERSE · ASCAI · 6 hours</Caption>

          <h1 className="comic-type text-[clamp(3.8rem,9vw,7.4rem)] leading-[0.84]">
            <span className="chromatic block text-white" data-text="SPIDER-">
              SPIDER-
            </span>
            <span className="offset-print block text-[var(--stamp)]">VERSE</span>
          </h1>

          <p className="speech max-w-md">{fest.tagline}</p>

          <p className="font-[family-name:var(--font-bangers)] text-lg tracking-wide text-white md:text-xl">
            {fest.dates} · {fest.time}
          </p>

          <div className="flex flex-wrap gap-2" aria-label="Countdown">
            {(
              [
                ["DAYS", tick.d],
                ["HRS", tick.h],
                ["MIN", tick.m],
                ["SEC", tick.s],
              ] as const
            ).map(([lab, val]) => (
              <div key={lab} className="panel min-w-[3.75rem] px-2 py-1.5 text-center">
                <div className="comic-type text-2xl text-[var(--stamp)] md:text-3xl">{pad(val)}</div>
                <div className="hud-type text-[8px] tracking-[0.18em]">{lab}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button type="button" className="cta px-6 py-2.5 text-lg md:text-xl" onClick={openRegister}>
              REGISTER
            </button>
            <a href="#hack" className="cta cta-ghost px-6 py-2.5 text-lg md:text-xl" onClick={() => play("click")}>
              SPIDER-HACK
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function useTick(iso: string) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, new Date(iso).getTime() - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [iso]);
  return t;
}
