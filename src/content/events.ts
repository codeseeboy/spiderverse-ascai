import { assets } from "./assets";

export type EventCategory =
  | "TECHNICAL"
  | "CULTURAL"
  | "GAMING"
  | "DESIGN"
  | "FUN"
  | "HACKATHON";

export type FestEvent = {
  id: string;
  name: string;
  category: EventCategory;
  universe: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  prizes: string;
  rules: string[];
  registerLabel: string;
  art: string;
  tilt: number;
};

export const events: FestEvent[] = [
  {
    id: "thwip-code",
    name: "THWIP CODE",
    category: "TECHNICAL",
    universe: "EARTH-1610",
    description:
      "Competitive programming across shifting testcases. Climb the dimensional leaderboard.",
    date: "DAY 1 — TBA",
    time: "11:00",
    venue: "LAB BLOCK / TBA",
    prizes: "PRIZE TBA",
    rules: [
      "Valid college ID required.",
      "Individual or duo — confirm on the form.",
      "Any language allowed on the contest platform.",
    ],
    registerLabel: "ENTER CONTEST",
    art: assets.images.universeNeon,
    tilt: -3.5,
  },
  {
    id: "circuit-sense",
    name: "CIRCUIT SENSE",
    category: "TECHNICAL",
    universe: "EARTH-2099",
    description:
      "Embedded / electronics mission. Debug the board before the city blacks out.",
    date: "DAY 2 — TBA",
    time: "14:00",
    venue: "HARDWARE LAB / TBA",
    prizes: "PRIZE TBA",
    rules: [
      "Teams of 2–3.",
      "Kits provided on site unless noted.",
      "Safety briefing is mandatory.",
    ],
    registerLabel: "ACCEPT CIRCUIT",
    art: assets.images.universeNeon,
    tilt: 2.8,
  },
  {
    id: "prompt-portal",
    name: "PROMPT PORTAL",
    category: "TECHNICAL",
    universe: "EARTH-65",
    description:
      "AI prompt battles. Open a portal with language — then defend it.",
    date: "DAY 2 — TBA",
    time: "11:00",
    venue: "SEMINAR HALL / TBA",
    prizes: "PRIZE TBA",
    rules: ["Bring a laptop.", "Shared model access will be announced.", "No pre-written dumps."],
    registerLabel: "OPEN PORTAL",
    art: assets.images.universePastel,
    tilt: -1.2,
  },
  {
    id: "suit-up",
    name: "SUIT UP UI",
    category: "DESIGN",
    universe: "EARTH-65",
    description:
      "90-minute design sprint. Ship a screen the multiverse would actually use.",
    date: "DAY 1 — TBA",
    time: "15:30",
    venue: "STUDIO / TBA",
    prizes: "SWAG + CERTS TBA",
    rules: ["Figma or paper. Your call.", "Theme revealed at start.", "Critique is public."],
    registerLabel: "DRAW THE SUIT",
    art: assets.images.eventDesign,
    tilt: 4.2,
  },
  {
    id: "panel-beat",
    name: "PANEL BEAT",
    category: "DESIGN",
    universe: "EARTH-50101",
    description:
      "Comic-panel storytelling challenge. Four frames. One plot twist.",
    date: "DAY 2 — TBA",
    time: "10:00",
    venue: "ART COURT / TBA",
    prizes: "PRIZE TBA",
    rules: ["Analog or digital.", "Original work only.", "Submit as a 4-panel strip."],
    registerLabel: "INK THE PANEL",
    art: assets.images.eventDesign,
    tilt: -4,
  },
  {
    id: "spider-bands",
    name: "SPIDER-BANDS",
    category: "CULTURAL",
    universe: "EARTH-616",
    description: "Battle of the bands on the main stage. Bring the city to its feet.",
    date: "DAY 2 — TBA",
    time: "18:00",
    venue: "MAIN STAGE",
    prizes: "PRIZE TBA",
    rules: ["Max 6 on stage.", "Originals preferred.", "Slot time TBA."],
    registerLabel: "BOOK THE STAGE",
    art: assets.images.eventCultural,
    tilt: 1.6,
  },
  {
    id: "verse-motion",
    name: "VERSE MOTION",
    category: "CULTURAL",
    universe: "EARTH-1610",
    description: "Dance crews collide. Different styles. Same gravity.",
    date: "DAY 3 — TBA",
    time: "16:00",
    venue: "MAIN STAGE",
    prizes: "PRIZE TBA",
    rules: ["Crew size TBA.", "Track list 48h before.", "No hazardous props."],
    registerLabel: "TAKE THE FLOOR",
    art: assets.images.eventCultural,
    tilt: -2.4,
  },
  {
    id: "pixel-raid",
    name: "PIXEL RAID",
    category: "GAMING",
    universe: "EARTH-928",
    description: "Esports bracket. Titles announced on the event desk.",
    date: "DAY 1–2 — TBA",
    time: "ALL DAY",
    venue: "ARENA / TBA",
    prizes: "PRIZE TBA",
    rules: ["Bring peripherals if you care.", "Fair play. Anti-cheat on.", "Check-in 30 min early."],
    registerLabel: "JOIN BRACKET",
    art: assets.images.eventGaming,
    tilt: 3.1,
  },
  {
    id: "night-crawl",
    name: "NIGHT CRAWL",
    category: "FUN",
    universe: "EARTH-90214",
    description: "Campus treasure hunt after sunset. Follow the ink. Don't get caught.",
    date: "DAY 1 — TBA",
    time: "20:00",
    venue: "CAMPUS GRID",
    prizes: "PRIZE TBA",
    rules: ["Teams of 4.", "Phones allowed.", "Restricted zones are restricted."],
    registerLabel: "START CRAWL",
    art: assets.images.eventFun,
    tilt: -5,
  },
  {
    id: "web-trivia",
    name: "WEB TRIVIA",
    category: "FUN",
    universe: "EARTH-67",
    description: "Comics, code, campus lore. Fastest web wins.",
    date: "DAY 2 — TBA",
    time: "13:00",
    venue: "QUAD / TBA",
    prizes: "PRIZE TBA",
    rules: ["Teams of 3.", "Buzzers on site.", "No search during rounds."],
    registerLabel: "BUZZ IN",
    art: assets.images.universeNoir,
    tilt: 2,
  },
  {
    id: "spider-hack",
    name: "SPIDER-HACK",
    category: "HACKATHON",
    universe: "SPIDER SOCIETY",
    description:
      "6-hour flagship build on 24 Aug. Team of 1–4. Single/Duo ₹100 · Team of 4 ₹200.",
    date: "24 AUGUST 2026",
    time: "10:00 AM – 4:00 PM",
    venue: "HACKATHON ZONE",
    prizes: "ANNOUNCED ON SITE",
    rules: [
      "Team size 1–4.",
      "Register on Google Form + upload payment screenshot.",
      "Bring a laptop. Demo what you build.",
    ],
    registerLabel: "REGISTER NOW",
    art: assets.images.eventHack,
    tilt: -0.6,
  },
];

export const categories: EventCategory[] = [
  "TECHNICAL",
  "CULTURAL",
  "GAMING",
  "DESIGN",
  "FUN",
  "HACKATHON",
];
