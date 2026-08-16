"use client";

import Image from "next/image";
import { assets } from "@/content/assets";
import { prizes } from "@/content/prizes";

export function PrizeVault() {
  return (
    <section id="prizes" className="relative min-h-[90svh] overflow-hidden bg-black">
      <Image
        src={assets.images.prizeVault}
        alt="Comic-book prize vault door"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
      <div className="relative z-10 flex min-h-[90svh] flex-col justify-end px-4 py-16 md:px-10">
        <p className="dim-index">REGISTRATION</p>
        <h2 data-slam className="display mt-2 text-[clamp(3.2rem,8vw,7rem)] leading-[0.78] text-[var(--gold)] offset-print">
          {prizes.headline}
        </h2>
        <p className="max-w-lg text-sm text-white/70">{prizes.disclaimer}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {prizes.tiers.map((t, i) => (
            <div
              key={t.id}
              className="border-3 border-black bg-[var(--gold)] p-5 text-black"
              style={{ transform: `rotate(${i === 1 ? -1.5 : i === 2 ? 1.2 : 0}deg)` }}
            >
              <p className="hud-type text-[10px] tracking-[0.25em]">{t.label}</p>
              <p className="display mt-2 text-6xl">{t.amount}</p>
              <p className="mt-1 text-sm">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
