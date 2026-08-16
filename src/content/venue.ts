export type Zone = {
  id: string;
  name: string;
  x: number;
  y: number;
  note: string;
};

export const venue = {
  campus: "YOUR COLLEGE — MAIN CAMPUS",
  address: "ADDRESS TBA",
  blurb: "A city map of the fest. Pins are placeholders until the ground team locks rooms.",
  zones: [
    { id: "college", name: "COLLEGE", x: 48, y: 42, note: "Campus heart" },
    { id: "stage", name: "MAIN STAGE", x: 22, y: 28, note: "Cultural + closing" },
    { id: "hack", name: "HACKATHON AREA", x: 74, y: 30, note: "Spider-Hack floor" },
    { id: "events", name: "EVENT ZONES", x: 68, y: 62, note: "Labs + courts" },
    { id: "reg", name: "REGISTRATION", x: 30, y: 70, note: "Portal intake" },
    { id: "food", name: "FOOD", x: 52, y: 78, note: "Multiverse break" },
    { id: "help", name: "HELP DESK", x: 18, y: 52, note: "Lost? Pull a thread." },
  ] satisfies Zone[],
};
