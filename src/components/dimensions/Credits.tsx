"use client";

import { fest } from "@/content/fest";
import { assets } from "@/content/assets";
import Image from "next/image";

export function Credits() {
  return (
    <footer className="relative overflow-hidden bg-black py-20 text-center text-white">
      <Image src={assets.images.duskSkyline} alt="" fill className="object-cover opacity-50" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
      <div className="relative px-4">
        <p className="comic-caption">END CREDITS</p>
        <p className="chromatic comic-type mt-4 text-[clamp(3.5rem,12vw,8rem)] leading-[0.8]" data-text={fest.name}>
          {fest.name}
        </p>
        <p className="mt-3 font-[family-name:var(--font-bangers)] text-2xl text-[var(--gold)] md:text-4xl">
          {fest.eventName} · {fest.organizedBy}
        </p>
        <p className="mt-2 text-sm text-white/75 md:text-base">{fest.college}</p>
        <p className="mt-1 font-[family-name:var(--font-bangers)] text-lg text-white/80">
          {fest.dates} · {fest.time}
        </p>
        <div className="mx-auto mt-8 max-w-md space-y-1 text-sm text-white/70">
          {fest.contacts.map((c) => (
            <p key={`${c.name}-${c.phone}`}>
              {c.name}:{" "}
              <a className="text-[#ffe447] hover:underline" href={`tel:${c.phone}`}>
                {c.phone}
              </a>
            </p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a className="cta text-sm" href={fest.instagram} target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>
          <a className="cta cta-ghost text-sm" href={fest.whatsapp} target="_blank" rel="noreferrer">
            WHATSAPP
          </a>
        </div>
        <p className="mx-auto mt-10 max-w-md text-sm text-white/50">
          Original event identity. Not affiliated with Marvel or Sony.
        </p>
      </div>
    </footer>
  );
}
