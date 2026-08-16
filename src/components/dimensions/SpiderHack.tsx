"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { assets } from "@/content/assets";
import { hackathon, missions, type Mission } from "@/content/hackathon";
import { faqs } from "@/content/faq";
import { fest } from "@/content/fest";
import { useVerse } from "@/context/VerseContext";
import { Hot } from "@/components/system/Chrome";
import { useModalLock } from "@/lib/useModalLock";

const tabs = ["MISSIONS", "TRACKS", "RULES", "JUDGING", "FAQ"] as const;

export function SpiderHack() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("MISSIONS");
  const [mission, setMission] = useState<Mission | null>(null);
  const { play } = useVerse();
  useModalLock(!!mission);

  useEffect(() => {
    if (!mission) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMission(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mission]);

  const goRegister = () => {
    play("thwip");
    if (fest.registerUrl) window.open(fest.registerUrl, "_blank", "noopener,noreferrer");
    else document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hack" className="relative overflow-hidden bg-[var(--stamp)] text-white">
      <div data-parallax className="absolute inset-[-12%]">
        <Image src={assets.images.eventHack} alt="" fill className="object-cover opacity-40" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-[var(--stamp)]/70" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
        style={{ backgroundImage: "var(--halftone)", backgroundSize: "4px 4px" }}
      />

      <div className="relative px-4 py-16 md:px-10 md:py-24" data-rise>
        <p className="comic-caption">DIMENSION — SPIDER-HACK</p>
        <p className="mark mt-4 text-2xl text-[#ffe447] md:text-4xl">{hackathon.kicker}</p>
        <h2 data-slam className="comic-type mt-2 text-[clamp(3.8rem,10vw,8rem)] leading-[0.84]">
          {hackathon.title}
        </h2>
        <p className="display mt-2 text-[clamp(1.6rem,3.5vw,3rem)] text-[#ffe447]">{hackathon.line}</p>
        <p className="mt-5 max-w-2xl text-base text-white/90 md:text-lg">{hackathon.intro}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[hackathon.date, hackathon.time, hackathon.duration, hackathon.team, hackathon.prize].map((chip) => (
            <span
              key={chip}
              className="border-3 border-black bg-[var(--paper)] px-3 py-1 font-[family-name:var(--font-bangers)] text-sm text-black shadow-[4px_4px_0_#000]"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
          {hackathon.fees.map((f) => (
            <div key={f.id} className="border-4 border-black bg-[var(--paper)] p-5 text-black shadow-[8px_8px_0_#000]">
              <p className="font-[family-name:var(--font-bangers)] text-sm text-[var(--stamp)]">{f.label}</p>
              <p className="comic-type text-5xl text-[var(--stamp)]">{f.amount}</p>
              <p className="text-sm">{f.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              className={`border-3 border-black px-4 py-2 font-[family-name:var(--font-bangers)] text-lg shadow-[3px_3px_0_#000] ${
                tab === t ? "bg-[#ffe447] text-black" : "bg-black text-white"
              }`}
              onClick={() => {
                play("click");
                setTab(t);
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 min-h-[260px]">
          {tab === "MISSIONS" && (
            <div className="grid gap-4 md:grid-cols-3">
              {missions.map((m, i) => (
                <Hot key={m.id}>
                  <button
                    type="button"
                    className="h-full w-full border-4 border-black bg-[var(--paper)] p-5 text-left text-black shadow-[8px_8px_0_#000] transition hover:-translate-y-1"
                    style={{ transform: `rotate(${i % 2 ? 1 : -1}deg)` }}
                    onClick={() => {
                      play("whoosh");
                      setMission(m);
                    }}
                  >
                    <p className="comic-caption !text-sm">{m.code}</p>
                    <h3 className="comic-type mt-3 text-4xl text-[var(--stamp)]">{m.title}</h3>
                    <p className="mt-2 font-[family-name:var(--font-bangers)] text-sm text-black/60">
                      {m.status} · {m.difficulty}
                    </p>
                    <p className="mt-4 font-[family-name:var(--font-bangers)] text-lg">OPEN FILE →</p>
                  </button>
                </Hot>
              ))}
            </div>
          )}
          {tab === "TRACKS" && (
            <div className="grid gap-3 sm:grid-cols-2">
              {hackathon.tracks.map((t, i) => (
                <div
                  key={t.id}
                  className="border-4 border-black bg-black/40 p-5"
                  style={{ transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)` }}
                >
                  <p className="comic-caption !text-sm">TRACK 0{i + 1}</p>
                  <h3 className="comic-type mt-2 text-4xl">{t.name}</h3>
                  <p className="mt-2 text-sm text-white/80">{t.desc}</p>
                </div>
              ))}
            </div>
          )}
          {tab === "RULES" && (
            <div className="max-w-2xl border-4 border-black bg-[var(--paper)] p-6 text-black shadow-[8px_8px_0_#000]">
              <p>{hackathon.eligibility}</p>
              <p className="mt-3 font-[family-name:var(--font-bangers)] text-xl text-[var(--stamp)]">
                {hackathon.theme}
              </p>
              <ol className="mt-4 space-y-2 text-sm">
                {hackathon.rules.map((r, i) => (
                  <li key={r}>
                    <span className="comic-type text-[var(--stamp)]">{i + 1}.</span> {r}
                  </li>
                ))}
              </ol>
            </div>
          )}
          {tab === "JUDGING" && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {hackathon.judging.map((j) => (
                <div key={j.k} className="border-4 border-black bg-[#ffe447] p-4 text-black shadow-[5px_5px_0_#000]">
                  <p className="comic-type text-5xl">{j.w}</p>
                  <p className="font-[family-name:var(--font-bangers)] text-lg">{j.k}</p>
                  <p className="mt-2 text-xs">{j.d}</p>
                </div>
              ))}
            </div>
          )}
          {tab === "FAQ" && (
            <div className="max-w-2xl space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="border-4 border-black bg-[var(--paper)] p-4 text-black shadow-[5px_5px_0_#000]">
                  <summary className="cursor-pointer comic-type text-2xl text-[var(--stamp)]">{f.q}</summary>
                  <p className="mt-2 text-sm">{f.a}</p>
                </details>
              ))}
            </div>
          )}
        </div>

        <Hot cta>
          <button type="button" className="cta mt-10 text-xl" onClick={goRegister}>
            REGISTER ON GOOGLE FORM
          </button>
        </Hot>
      </div>

      <AnimatePresence>
        {mission && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-3 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal
            onClick={() => setMission(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="relative flex max-h-[90svh] w-full max-w-4xl flex-col overflow-hidden border-4 border-black bg-[var(--paper)] text-black shadow-[12px_12px_0_#000]"
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b-4 border-black bg-[#ffe447] px-4 py-3 md:px-6">
                <p className="font-[family-name:var(--font-bangers)] text-lg">{mission.code}</p>
                <button type="button" className="cta cta-ghost px-3 py-1 text-sm" onClick={() => setMission(null)}>
                  CLOSE
                </button>
              </div>
              <div className="overflow-y-auto overscroll-contain px-4 py-5 md:px-6" data-lenis-prevent>
                <h3 className="comic-type text-5xl text-[var(--stamp)] md:text-7xl">{mission.title}</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <Block title="PROBLEM" body={mission.problem} />
                  <Block title="EXPECTED OUTPUT" body={mission.output} />
                  <List title="REQUIREMENTS" items={mission.requirements} />
                  <List title="CONSTRAINTS" items={mission.constraints} />
                  <List title="RESOURCES" items={mission.resources} />
                  <Block title="SUBMISSION" body={mission.submission} />
                </div>
                <div className="mt-8 flex flex-wrap gap-3 pb-2">
                  <button type="button" className="cta" onClick={() => { setMission(null); goRegister(); }}>
                    REGISTER
                  </button>
                  <button type="button" className="cta cta-ghost" onClick={() => setMission(null)}>
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-3 border-black bg-white p-4">
      <p className="comic-caption !text-xs">{title}</p>
      <p className="mt-2 text-sm">{body}</p>
    </div>
  );
}
function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-3 border-black bg-white p-4">
      <p className="comic-caption !text-xs">{title}</p>
      <ul className="mt-2 list-disc pl-4 text-sm">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
