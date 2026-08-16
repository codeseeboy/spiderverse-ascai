export type Person = {
  id: string;
  name: string;
  role: string;
  file: string;
  note: string;
  placeholder: boolean;
};

export const society: Person[] = [
  {
    id: "director",
    name: "NAME TBA",
    role: "EVENT DIRECTOR",
    file: "FILE 01",
    note: "Replace with the real director. Do not invent faculty names.",
    placeholder: true,
  },
  {
    id: "tech",
    name: "NAME TBA",
    role: "TECH HEAD",
    file: "FILE 02",
    note: "Tech lead for Spider-Hack + technical events.",
    placeholder: true,
  },
  {
    id: "creative",
    name: "NAME TBA",
    role: "CREATIVE HEAD",
    file: "FILE 03",
    note: "Art direction, stage, cultural grid.",
    placeholder: true,
  },
  {
    id: "judge-1",
    name: "JUDGE TBA",
    role: "JUDGE",
    file: "FILE 04",
    note: "Industry / faculty judge — pending confirmation.",
    placeholder: true,
  },
  {
    id: "mentor-1",
    name: "MENTOR TBA",
    role: "MENTOR",
    file: "FILE 05",
    note: "Floor mentor for the 6-hour hack.",
    placeholder: true,
  },
  {
    id: "org-1",
    name: "ORGANIZER TBA",
    role: "ORGANIZER",
    file: "FILE 06",
    note: "Student core.",
    placeholder: true,
  },
];
