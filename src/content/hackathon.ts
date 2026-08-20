export type Mission = {
  id: string;
  code: string;
  title: string;
  status: "ACTIVE" | "CLASSIFIED" | "LOCKED";
  difficulty: string;
  problem: string;
  requirements: string[];
  output: string;
  constraints: string[];
  resources: string[];
  submission: string;
};

export const hackathon = {
  title: "SPIDER-HACK",
  kicker: "THE MULTIVERSE NEEDS BUILDERS.",
  line: "BUILD YOUR UNIVERSE.",
  duration: "6 HOURS",
  team: "1–4 MEMBERS",
  date: "01 SEPTEMBER 2026",
  time: "10:00 AM – 4:00 PM",
  eligibility: "Students ready to build. Register as a team of 1–4 on the official Google Form.",
  intro:
    "HACK-VERSE by ASCAI — a focused 6-hour hackathon at St. John College of Engineering and Management. Come with ideas, creativity, and problem-solving skills — then ship something real before 4 PM.",
  theme: "Open build — bring your best idea and make it work in six hours.",
  prize: "₹2,000 PRIZE POOL",
  fees: [
    { id: "solo-duo", label: "SINGLE / DUO", amount: "₹100", note: "1 or 2 members" },
    { id: "team4", label: "TEAM OF 4", amount: "₹200", note: "Per team" },
  ],
  formFields: [
    "Team Name",
    "Team Leader Name",
    "Team Leader Number",
    "Team Size (1–4)",
    "Member 2 / 3 / 4 names (if needed)",
    "Payment screenshot (PDF or image, max 10 MB)",
  ],
  tracks: [
    {
      id: "web",
      name: "WEB & APP",
      desc: "Full-stack products people can actually use.",
    },
    {
      id: "sense",
      name: "AI / ML",
      desc: "Smart tools that sense a problem and solve it.",
    },
    {
      id: "hood",
      name: "CAMPUS IMPACT",
      desc: "Ideas that help students, college, or the city.",
    },
    {
      id: "open",
      name: "OPEN BUILD",
      desc: "Wildcard. Games, hardware, or anything you can demo.",
    },
  ],
  rules: [
    "Hackathon runs 10:00 AM – 4:00 PM on 01 September 2026 (6 hours).",
    "Team size 1–4. Register on the official Google Form.",
    "Single/Duo fee: ₹100. Team of 4: ₹200 per team.",
    "Pay via the QR on the form, then upload the payment screenshot.",
    "Bring a laptop. Build during the window. Demo what you ship.",
  ],
  judging: [
    { k: "IMPACT", w: "25%", d: "Does this actually help someone?" },
    { k: "CRAFT", w: "25%", d: "Is the build real, not just slides?" },
    { k: "ORIGINALITY", w: "20%", d: "Is the idea fresh?" },
    { k: "STORY", w: "15%", d: "Can the team explain it clearly?" },
    { k: "POLISH", w: "15%", d: "Would you show this tonight?" },
  ],
};

export const missions: Mission[] = [
  {
    id: "m001",
    code: "MISSION 001",
    title: "SIX-HOUR SPRINT",
    status: "ACTIVE",
    difficulty: "OPEN",
    problem:
      "Pick a real problem. Build a working prototype in 6 hours. Demo it before time runs out.",
    requirements: [
      "Working demo (web, app, or hardware + app).",
      "Short pitch from the team.",
      "Registered team on the official form with payment proof.",
    ],
    output: "Live demo + team presentation.",
    constraints: ["Build during the 10 AM – 4 PM window.", "Team size 1–4."],
    resources: ["Mentors / organizers on the floor.", "Your own laptop + stack."],
    submission: "Register via Google Form. Demo on event day.",
  },
  {
    id: "m002",
    code: "MISSION 002",
    title: "CAMPUS IMPACT",
    status: "ACTIVE",
    difficulty: "OPEN",
    problem:
      "Solve something students actually face — campus life, learning, safety, or community.",
    requirements: ["Usable prototype.", "Clear problem statement in your pitch."],
    output: "Prototype + 2–3 minute walkthrough.",
    constraints: ["Keep it campus-safe.", "No private data scraping."],
    resources: ["Your ideation + mentors if available."],
    submission: "Demo on event day after registration.",
  },
  {
    id: "m003",
    code: "MISSION 003",
    title: "OPEN BUILD",
    status: "ACTIVE",
    difficulty: "OPEN",
    problem: "Wildcard. Build the thing only your team would invent — as long as it runs by 4 PM.",
    requirements: ["Live demo.", "One-line why this matters."],
    output: "Whatever ships — as long as it runs.",
    constraints: ["Original work for this window.", "Team of 1–4."],
    resources: ["Open floor."],
    submission: "Demo on event day.",
  },
];
