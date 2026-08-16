"use client";

import Image from "next/image";
import { fest } from "@/content/fest";
import { hackathon } from "@/content/hackathon";
import { assets } from "@/content/assets";
import { useVerse } from "@/context/VerseContext";
import { Hot } from "@/components/system/Chrome";

function openForm(play: (n: "click" | "pop" | "whoosh" | "thwip") => void) {
  play("thwip");
  if (fest.registerUrl) {
    window.open(fest.registerUrl, "_blank", "noopener,noreferrer");
    return;
  }
  window.alert("Registration form link coming soon. Check back shortly!");
}

export function Registration() {
  const { play } = useVerse();

  return (
    <section id="register" className="relative overflow-hidden py-24 text-white">
      <div data-parallax className="absolute inset-[-12%]">
        <Image src={assets.images.intakeGate} alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-[var(--stamp)]/65" />
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
        style={{ backgroundImage: "var(--halftone)", backgroundSize: "4px 4px" }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-10" data-rise>
        <p className="comic-caption">HACK-VERSE · ASCAI</p>
        <h2 data-slam className="comic-type mt-4 text-[clamp(3.2rem,9vw,7rem)] leading-[0.86]">
          JOIN THE
          <span className="block text-[#ffe447]">BUILD</span>
        </h2>
        <p className="mt-4 font-[family-name:var(--font-bangers)] text-xl md:text-2xl">
          {fest.dates} · {fest.time}
        </p>
        <p className="mt-2 text-sm text-white/80 md:text-base">{fest.college}</p>
        <p className="mt-4 comic-type text-4xl text-[#ffe447] md:text-5xl">{fest.prizePool} PRIZE POOL</p>

        <div className="mx-auto mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
          {hackathon.fees.map((f) => (
            <div key={f.id} className="border-4 border-black bg-[var(--paper)] p-6 text-black shadow-[8px_8px_0_#000]">
              <p className="font-[family-name:var(--font-bangers)] text-sm text-[var(--stamp)]">{f.label}</p>
              <p className="comic-type text-5xl text-[var(--stamp)]">{f.amount}</p>
              <p className="text-sm">{f.note}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-xl border-4 border-black bg-black/50 p-6 text-left shadow-[8px_8px_0_#000]">
          <p className="comic-caption">WHAT THE FORM ASKS</p>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            {hackathon.formFields.map((field) => (
              <li key={field}>▸ {field}</li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-8 max-w-xl border-4 border-black bg-[var(--paper)] p-6 text-left text-black shadow-[8px_8px_0_#000]">
          <p className="comic-caption">CONTACTS</p>
          <ul className="mt-4 space-y-2 text-sm">
            {fest.contacts.map((c) => (
              <li key={`${c.name}-${c.phone}`}>
                <span className="font-[family-name:var(--font-bangers)] text-[var(--stamp)]">{c.role}:</span>{" "}
                {c.name} —{" "}
                <a className="underline" href={`tel:${c.phone}`}>
                  {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Hot cta>
            <button type="button" className="cta text-xl" onClick={() => openForm(play)}>
              OPEN GOOGLE FORM
            </button>
          </Hot>
        </div>
      </div>
    </section>
  );
}
