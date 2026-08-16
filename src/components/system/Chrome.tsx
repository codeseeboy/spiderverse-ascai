"use client";

import { useVerse } from "@/context/VerseContext";

export function Grain() {
  return <div className="grain-overlay" aria-hidden />;
}

export function Caption({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`comic-caption ${className}`}>{children}</span>;
}

export function Hot({
  children,
  cta,
  className,
}: {
  children: React.ReactNode;
  cta?: boolean;
  className?: string;
}) {
  const { setCursor } = useVerse();
  return (
    <span
      className={className}
      onMouseEnter={() => setCursor(cta ? "cta" : "interactive")}
      onMouseLeave={() => setCursor("normal")}
    >
      {children}
    </span>
  );
}
