"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

/** Locks page scroll (Lenis + body) while a modal is open */
export function useModalLock(open: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    return () => {
      document.body.style.overflow = prev;
      lenis?.start();
    };
  }, [open, lenis]);
}
