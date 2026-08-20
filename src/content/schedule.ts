import { assets } from "./assets";

export type Beat = {
  time: string;
  title: string;
  note: string;
  day: 1;
  art: string;
};

/** Single-day schedule — 01 September 2026 */
export const schedule: Beat[] = [
  { day: 1, time: "09:30", title: "CHECK-IN", note: "Registration desk · team confirmation", art: assets.images.intakeGate },
  { day: 1, time: "10:00", title: "PORTAL OPEN", note: "Hackathon starts · briefs live", art: assets.images.inauguration },
  { day: 1, time: "10:30", title: "BUILD MODE", note: "Teams coding · mentors roam", art: assets.images.eventHack },
  { day: 1, time: "13:00", title: "MIDPOINT", note: "Quick break · keep shipping", art: assets.images.foodCourt },
  { day: 1, time: "15:00", title: "FINAL PUSH", note: "Polish demos · freeze features", art: assets.images.hudSpace },
  { day: 1, time: "16:00", title: "TIME UP", note: "Demos · judging · wrap", art: assets.images.prizeVault },
];
