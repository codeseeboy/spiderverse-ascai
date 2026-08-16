"use client";

import Image from "next/image";
import { society } from "@/content/society";
import { assets } from "@/content/assets";

export function SpiderSociety() {
  return (
    <section id="society" className="relative overflow-hidden bg-[#1b140c] py-20 text-[var(--manila)]">
      <Image
        src={assets.images.dossierRoom}
        alt=""
        fill
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="relative px-4 md:px-10">
        <p className="dim-index text-[var(--gold)]">DIMENSION 005 — SPIDER SOCIETY</p>
        <h2 data-slam className="display mt-3 text-[clamp(3.4rem,8vw,7rem)] leading-[0.82] text-[var(--paper)]">
          DOSSIERS
        </h2>
        <p className="mt-4 max-w-lg text-base text-white/75">
          Real names go here when the event team confirms them. Until then every file is stamped TBA.
        </p>
      </div>
      <div className="relative mt-10 grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 md:px-10">
        {society.map((p, i) => (
          <article
            key={p.id}
            data-swing
            className="relative border-3 border-black bg-[var(--manila)] p-5 text-[var(--ink)]"
            style={{ transform: `rotate(${i % 2 ? 1.2 : -0.9}deg)` }}
          >
            <p className="hud-type text-[10px] tracking-[0.3em]">{p.file}</p>
            <div className="mt-3 flex h-36 items-center justify-center border-2 border-dashed border-black/40 bg-black/10">
              <span className="display text-6xl text-black/30">
                {p.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
            <h3 className="display mt-4 text-4xl">{p.name}</h3>
            <p className="stamp mt-2 text-[var(--stamp)]">{p.role}</p>
            <p className="mt-3 text-sm text-black/70">{p.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
