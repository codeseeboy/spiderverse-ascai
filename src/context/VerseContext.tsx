"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { verseAudio } from "@/lib/audio";

type Cursor = "normal" | "interactive" | "cta";

type VerseState = {
  entered: boolean;
  enter: () => void;
  soundOn: boolean;
  toggleSound: () => Promise<void>;
  play: (n: "click" | "pop" | "whoosh" | "thwip") => void;
  registerOpen: boolean;
  setRegisterOpen: (v: boolean) => void;
  cursor: Cursor;
  setCursor: (c: Cursor) => void;
};

const Ctx = createContext<VerseState | null>(null);

export function VerseProvider({ children }: { children: ReactNode }) {
  const [entered] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [cursor, setCursor] = useState<Cursor>("normal");

  const unlock = useCallback(async () => {
    await verseAudio?.setEnabled(true);
    setSoundOn(true);
  }, []);

  useEffect(() => {
    void unlock();
    const kick = () => {
      void unlock();
    };
    window.addEventListener("pointerdown", kick, { once: true });
    window.addEventListener("keydown", kick, { once: true });
    return () => {
      window.removeEventListener("pointerdown", kick);
      window.removeEventListener("keydown", kick);
    };
  }, [unlock]);

  const enter = useCallback(() => {}, []);

  const toggleSound = useCallback(async () => {
    const next = !soundOn;
    await verseAudio?.setEnabled(next);
    setSoundOn(next);
  }, [soundOn]);

  const play = useCallback((n: "click" | "pop" | "whoosh" | "thwip") => {
    verseAudio?.play(n);
  }, []);

  const value = useMemo(
    () => ({
      entered,
      enter,
      soundOn,
      toggleSound,
      play,
      registerOpen,
      setRegisterOpen,
      cursor,
      setCursor,
    }),
    [entered, enter, soundOn, toggleSound, play, registerOpen, cursor],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useVerse() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useVerse outside provider");
  return ctx;
}
