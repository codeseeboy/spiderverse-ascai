"use client";

import Image from "next/image";
import { schedule } from "@/content/schedule";
import { assets } from "@/content/assets";

export function Timeline() {
  return (
    <section id="timeline" className="relative overflow-hidden bg-[var(--paper)] py-16 text-black md:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply">
        <Image src={assets.images.paper} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-multiply"
        style={{ backgroundImage: "var(--halftone)", backgroundSize: "5px 5px" }}
      />

      <div className="relative px-4 md:px-10" data-rise>
        <p className="comic-caption">01 SEPTEMBER 2026</p>
        <h2 data-slam className="comic-type mt-3 text-[clamp(3.4rem,9vw,7rem)] leading-[0.86] text-[var(--stamp)]">
          THE
          <span className="block text-black">CLOCK</span>
          BENDS.
        </h2>
        <p className="mt-4 max-w-lg font-[family-name:var(--font-bangers)] text-xl text-black/70">
          One day. Six hours. From check-in to demos.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-4xl px-4 md:px-10">
        <div className="pointer-events-none absolute bottom-0 left-[1.35rem] top-0 w-1 bg-[var(--stamp)] md:left-1/2 md:-ml-0.5" />
        <ol className="space-y-8">
          {schedule.map((b, i) => {
            const left = i % 2 === 0;
            return (
              <li key={`${b.time}-${b.title}`} data-slam className="relative grid items-center gap-4 md:grid-cols-2">
                <div className={`pl-12 md:pl-0 ${left ? "md:pr-14 md:text-right" : "md:order-2 md:pl-14"}`}>
                  <time className="comic-type text-5xl text-[var(--stamp)] md:text-6xl">{b.time}</time>
                  <h3 className="comic-type mt-1 text-3xl md:text-4xl">{b.title}</h3>
                  <p className="mt-2 text-sm text-black/65 md:text-base">{b.note}</p>
                </div>
                <div
                  className={`relative ml-12 aspect-[16/10] overflow-hidden border-4 border-black shadow-[8px_8px_0_#000] md:ml-0 ${
                    left ? "md:mr-auto md:max-w-sm" : "md:order-1 md:ml-auto md:max-w-sm"
                  }`}
                  style={{ transform: `rotate(${left ? -1.5 : 1.5}deg)` }}
                >
                  <Image src={b.art} alt="" fill className="object-cover" sizes="360px" />
                </div>
                <span className="absolute left-3 top-4 h-5 w-5 rounded-full border-4 border-black bg-[#ffe447] md:left-1/2 md:-ml-2.5" />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
