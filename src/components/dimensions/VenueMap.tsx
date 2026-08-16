"use client";

import { useState } from "react";
import { venue } from "@/content/venue";
import { fest } from "@/content/fest";
import { assets } from "@/content/assets";
import Image from "next/image";

export function VenueMap() {
  const [hot, setHot] = useState(venue.zones[0].id);
  const active = venue.zones.find((z) => z.id === hot) ?? venue.zones[0];

  return (
    <section id="venue" className="relative overflow-hidden bg-[#0c1220] py-16">
      <Image src={assets.images.campusAerial} alt="" fill className="object-cover opacity-30" sizes="100vw" />
      <div className="relative px-4 md:px-10">
        <p className="dim-index">CAMPUS GRID</p>
        <h2 data-slam className="display mt-2 text-[clamp(3rem,8vw,6rem)] leading-[0.8]">
          CITY
          <span className="text-[var(--cyan)]"> MAP</span>
        </h2>
        <p className="max-w-md text-sm text-white/70">{venue.blurb}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="relative min-h-[420px] border-3 border-black">
            <Image src={assets.images.campusAerial} alt="Stylized campus map" fill className="object-cover" sizes="70vw" />
            <div className="absolute inset-0 bg-black/25" />
            {venue.zones.map((z) => (
              <button
                key={z.id}
                type="button"
                className={`absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                  hot === z.id ? "scale-150 bg-[var(--stamp)]" : "bg-[var(--cyan)]"
                }`}
                style={{ left: `${z.x}%`, top: `${z.y}%` }}
                aria-label={z.name}
                onClick={() => setHot(z.id)}
              />
            ))}
          </div>
          <div className="border-3 border-black bg-[var(--paper)] p-6 text-[var(--ink)]">
            <p className="hud-type text-[10px] tracking-[0.3em] text-[var(--stamp)]">PIN LOCKED</p>
            <h3 className="display mt-2 text-5xl">{active.name}</h3>
            <p className="mt-2">{active.note}</p>
            <p className="mt-6 text-sm">
              {venue.campus}
              <br />
              {venue.address}
            </p>
            <a href={fest.mapsUrl} className="cta mt-6 inline-flex text-sm" target="_blank" rel="noreferrer">
              OPEN MAPS
            </a>
            <ul className="mt-6 space-y-1">
              {venue.zones.map((z) => (
                <li key={z.id}>
                  <button
                    type="button"
                    className={`hud-type text-[11px] tracking-[0.15em] ${hot === z.id ? "text-[var(--stamp)]" : ""}`}
                    onClick={() => setHot(z.id)}
                  >
                    ▸ {z.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
