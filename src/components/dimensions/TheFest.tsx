"use client";

import Image from "next/image";
import { fest } from "@/content/fest";
import { assets } from "@/content/assets";

export function TheFest() {
  return (
    <section id="fest" className="relative overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="relative">
        <div className="flex items-end justify-between border-b-3 border-black px-4 py-4 md:px-10">
          <p className="dim-index text-[var(--stamp)]">DIMENSION 001 — THE FEST</p>
          <span className="stamp text-[var(--stamp)]">CAMPUS EDITION</span>
        </div>

        <div className="grid md:grid-cols-[1.05fr_0.95fr]">
          <article className="relative border-b-3 border-black px-5 py-12 md:border-r-3 md:border-b-0 md:px-10 md:py-16">
            <p className="mark text-xl text-[var(--stamp)]">Issue one</p>
            <h2 data-slam className="comic-type mt-2 text-[clamp(3.4rem,8vw,7.2rem)] leading-[0.86]">
              THE CITY
              <span className="block text-[var(--blue)]">WENT</span>
              <span className="block offset-print">SIDEWAYS.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/80 md:text-xl">{fest.theme}</p>
            <ul className="mt-8 grid max-w-md grid-cols-2 gap-3">
              {fest.highlights.map((h) => (
                <li key={h.v} className="border-3 border-black bg-white p-3">
                  <div className="display text-4xl text-[var(--stamp)]">{h.k}</div>
                  <div className="hud-type text-[10px] tracking-[0.2em]">{h.v}</div>
                </li>
              ))}
            </ul>
          </article>

          <div className="relative min-h-[380px] md:min-h-[520px]">
            <Image
              src={assets.images.festCampus}
              alt="College campus painted in Spider-Verse comic style"
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute bottom-6 left-6 right-6 border-3 border-black bg-[var(--paper)] p-4">
              <p className="hud-type text-[10px] tracking-[0.3em] text-[var(--stamp)]">DISPATCH</p>
              <p className="display mt-1 text-4xl">{fest.dates}</p>
              <p className="text-sm">{fest.college}</p>
              <p className="text-sm">{fest.venue}</p>
            </div>
          </div>
        </div>

        <div className="grid border-t-3 border-black sm:grid-cols-3">
          {[
            ["01", "CODE", "Six hours. One mission. Ship it.", assets.images.eventDesign],
            ["02", "TEAMS", "Solo to squad of four. Pick your size.", assets.images.eventCultural],
            ["03", "HACK", "24 Aug · 10 AM–4 PM · Spider-Hack.", assets.images.eventHack],
          ].map((row, i) => (
            <div
              key={row[1]}
              className={`relative min-h-[200px] overflow-hidden ${i < 2 ? "border-b-3 border-black sm:border-b-0 sm:border-r-3" : ""}`}
            >
              <Image src={row[3]} alt="" fill className="object-cover opacity-40" sizes="33vw" />
              <div className="relative px-6 py-10">
                <p className="hud-type text-[10px] tracking-[0.3em] text-[var(--stamp)]">STRIP {row[0]}</p>
                <h3 className="display mt-2 text-5xl">{row[1]}</h3>
                <p className="mt-2 max-w-xs text-sm text-black/80">{row[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
