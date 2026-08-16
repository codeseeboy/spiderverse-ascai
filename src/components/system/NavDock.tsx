"use client";

import { useState } from "react";
import { fest, nav } from "@/content/fest";
import { useVerse } from "@/context/VerseContext";

export function NavDock() {
  const { soundOn, toggleSound, play } = useVerse();
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-auto nav-comic">
        <div className="flex items-center justify-between px-4 py-2.5 md:px-8">
          <a
            href="#top"
            className="comic-type text-3xl text-[var(--stamp)] md:text-4xl"
            onClick={() => play("click")}
          >
            {fest.name}
          </a>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Sections">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-2.5 py-1 font-[family-name:var(--font-bangers)] text-[18px] tracking-wide text-black/80 hover:text-[var(--stamp)]"
                onClick={() => play("click")}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className={`border-3 border-black px-3 py-1 font-[family-name:var(--font-bangers)] text-sm ${
                soundOn ? "bg-[var(--cyan)] text-black" : "bg-white text-black"
              }`}
              onClick={() => void toggleSound()}
              aria-pressed={soundOn}
            >
              {soundOn ? "SOUND ON" : "SOUND OFF"}
            </button>
            <button
              type="button"
              className="cta px-5 py-2 text-base"
              onClick={() => {
                play("thwip");
                if (fest.registerUrl) window.open(fest.registerUrl, "_blank", "noopener,noreferrer");
                else document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              REGISTER
            </button>
            <button
              type="button"
              className="font-[family-name:var(--font-bangers)] text-lg lg:hidden"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="pointer-events-auto border-b-4 border-black bg-[var(--paper)] px-4 py-3 text-black lg:hidden">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 font-[family-name:var(--font-bangers)] text-3xl"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
