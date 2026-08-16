"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { categories, events, type EventCategory, type FestEvent } from "@/content/events";
import { fest } from "@/content/fest";
import { assets } from "@/content/assets";
import { useVerse } from "@/context/VerseContext";
import { Hot } from "@/components/system/Chrome";

export function EventUniverse() {
  const [filter, setFilter] = useState<EventCategory | "ALL">("ALL");
  const [open, setOpen] = useState<FestEvent | null>(null);
  const { play, setRegisterOpen } = useVerse();
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const list = useMemo(
    () => (filter === "ALL" ? events : events.filter((e) => e.category === filter)),
    [filter],
  );

  return (
    <section id="events" className="relative overflow-hidden bg-[#140b16] py-16 md:py-24">
      <Image
        src={assets.images.universePastel}
        alt=""
        fill
        className="object-cover opacity-25"
        sizes="100vw"
      />
      <p className="relative dim-index px-4 md:px-10">DIMENSION 002 — EVENTS</p>
      <div className="relative mt-3 flex flex-wrap items-end justify-between gap-4 px-4 md:px-10">
        <h2 data-slam className="comic-type text-[clamp(3.4rem,8vw,6.8rem)] leading-[0.86] text-[var(--paper)]">
          PICK A<br />
          <span className="text-[var(--mag)] offset-print">UNIVERSE</span>
        </h2>
        <p className="max-w-sm text-sm text-[var(--paper)]/70">
          Panels overlap on purpose. Tap one. It opens like a comic that grew a registration desk.
        </p>
      </div>

      <div className="relative mt-8 flex flex-wrap gap-2 px-4 md:px-10" role="tablist" aria-label="Event categories">
        {(["ALL", ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filter === c}
            className={`hud-type border-2 px-3 py-1 text-[10px] tracking-[0.2em] ${
              filter === c ? "border-[var(--cyan)] bg-[var(--cyan)] text-black" : "border-white/30"
            }`}
            onClick={() => {
              play("click");
              setFilter(c);
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="relative mx-auto mt-10 max-w-6xl columns-1 gap-4 px-4 sm:columns-2 lg:columns-3">
        {list.map((e) => (
          <Hot key={e.id}>
            <button
              type="button"
              onClick={() => {
                play("pop");
                setOpen(e);
              }}
              className="panel mb-4 w-full break-inside-avoid overflow-hidden text-left"
              style={{ transform: `rotate(${e.tilt}deg)` }}
            >
              <div className="relative h-48">
                <Image src={e.art} alt="" fill className="object-cover" sizes="400px" />
                <span className="hud-type absolute left-2 top-2 bg-black/70 px-2 py-1 text-[10px] tracking-[0.2em] text-[var(--cyan)]">
                  {e.universe}
                </span>
              </div>
              <div className="p-4">
                <p className="hud-type text-[10px] tracking-[0.25em] text-[var(--stamp)]">{e.category}</p>
                <h3 className="display mt-1 text-4xl">{e.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-black/70">{e.description}</p>
                <p className="mark mt-3 text-[var(--blue)]">open file →</p>
              </div>
            </button>
          </Hot>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-3 md:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal
            aria-labelledby="event-title"
            onClick={() => setOpen(null)}
          >
            <motion.article
              initial={{ y: 40, rotate: -2 }}
              animate={{ y: 0, rotate: 0 }}
              exit={{ y: 40, opacity: 0 }}
              className="relative max-h-[92svh] w-full max-w-3xl overflow-y-auto border-3 border-black bg-[var(--paper)] text-[var(--ink)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-52 md:h-64">
                <Image src={open.art} alt="" fill className="object-cover" />
                <div className="halftone-overlay absolute inset-0 opacity-40" />
              </div>
              <div className="p-5 md:p-8">
                <p className="hud-type text-[10px] tracking-[0.3em]">
                  {open.category} · {open.universe}
                </p>
                <h3 id="event-title" className="display mt-1 text-6xl md:text-7xl">
                  {open.name}
                </h3>
                <p className="mt-3 max-w-xl">{open.description}</p>
                <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div>
                    <dt className="hud-type text-[10px] tracking-[0.2em] text-[var(--stamp)]">DATE</dt>
                    <dd>{open.date}</dd>
                  </div>
                  <div>
                    <dt className="hud-type text-[10px] tracking-[0.2em] text-[var(--stamp)]">TIME</dt>
                    <dd>{open.time}</dd>
                  </div>
                  <div>
                    <dt className="hud-type text-[10px] tracking-[0.2em] text-[var(--stamp)]">VENUE</dt>
                    <dd>{open.venue}</dd>
                  </div>
                  <div>
                    <dt className="hud-type text-[10px] tracking-[0.2em] text-[var(--stamp)]">PRIZES</dt>
                    <dd>{open.prizes}</dd>
                  </div>
                </dl>
                <p className="mt-6 hud-type text-[10px] tracking-[0.25em]">RULES</p>
                <ul className="mt-2 list-disc pl-5 text-sm">
                  {open.rules.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Hot cta>
                    <button
                      type="button"
                      className="cta"
                      onClick={() => {
                        if (fest.registerUrl) window.open(fest.registerUrl, "_blank");
                        else setRegisterOpen(true);
                        setOpen(null);
                      }}
                    >
                      {open.registerLabel}
                    </button>
                  </Hot>
                  <button type="button" className="cta cta-ghost" onClick={() => setOpen(null)}>
                    CLOSE FILE
                  </button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
