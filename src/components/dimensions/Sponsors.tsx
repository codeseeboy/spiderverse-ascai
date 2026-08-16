"use client";

import { sponsors } from "@/content/sponsors";

export function Sponsors() {
  return (
    <section id="sponsors" className="bg-[var(--paper)] py-16 text-[var(--ink)]">
      <div className="px-4 md:px-10">
        <p className="dim-index text-[var(--stamp)]">SUPPORTED BY THE SPIDER SOCIETY</p>
        <h2 data-slam className="display mt-2 text-[clamp(3rem,8vw,6rem)] leading-[0.8] md:text-[5vw]">THE WALL</h2>
        <p className="max-w-lg text-sm text-black/60">
          Drop undistorted logos into <code>public/assets/logos/</code> and wire paths in{" "}
          <code>src/content/sponsors.ts</code>. Slots stay large on purpose.
        </p>
      </div>
      <div className="mt-10 grid gap-4 px-4 md:grid-cols-3 md:px-10">
        {sponsors.map((s) => (
          <a
            key={s.id}
            href={s.url}
            className="flex min-h-[180px] flex-col items-center justify-center border-3 border-black bg-white p-6 text-center"
          >
            {s.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={s.logo} alt={s.name} className="max-h-24 max-w-full object-contain" />
            ) : (
              <>
                <span className="hud-type text-[10px] tracking-[0.3em] text-[var(--stamp)]">{s.tier}</span>
                <span className="display mt-2 text-4xl">{s.name}</span>
              </>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
