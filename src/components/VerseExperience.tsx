"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { VerseProvider } from "@/context/VerseContext";
import { usePrefersReducedMotion } from "@/lib/motion";
import { Grain } from "@/components/system/Chrome";
import { NavDock } from "@/components/system/NavDock";
import { HeroVerse } from "@/components/dimensions/HeroVerse";
import { SpiderHack } from "@/components/dimensions/SpiderHack";
import { Timeline } from "@/components/dimensions/Timeline";
import { Registration } from "@/components/dimensions/Registration";
import { Credits } from "@/components/dimensions/Credits";

export function VerseExperience() {
  return (
    <VerseProvider>
      <Shell />
    </VerseProvider>
  );
}

function Shell() {
  const reduced = usePrefersReducedMotion();
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    if (reduced) {
      document.body.classList.add("reduce-motion");
      return;
    }
    document.body.classList.remove("reduce-motion");
    gsap.registerPlugin(ScrollTrigger);
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    const lenis = lenisRef.current?.lenis;
    const onScroll = () => ScrollTrigger.update();
    lenis?.on("scroll", onScroll);
    return () => {
      gsap.ticker.remove(update);
      lenis?.off("scroll", onScroll);
    };
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-slam]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              end: "top 55%",
              scrub: 0.6,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-rise]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 56, opacity: 0.35, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "top 40%",
              scrub: 0.8,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("section").forEach((sec) => {
        const bg = sec.querySelector<HTMLElement>("[data-parallax]");
        if (!bg) return;
        gsap.fromTo(
          bg,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sec,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });
    return () => ctx.revert();
  }, [reduced]);

  const page = (
    <>
      <a className="skip-link" href="#hack">
        Skip to hackathon
      </a>
      <Grain />
      <NavDock />
      <main>
        <HeroVerse />
        <SpiderHack />
        <Timeline />
        <Registration />
      </main>
      <Credits />
    </>
  );

  if (reduced) return page;

  return (
    <ReactLenis root options={{ autoRaf: false, lerp: 0.08 }} ref={lenisRef}>
      {page}
    </ReactLenis>
  );
}
