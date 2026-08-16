export type PrizeTier = {
  id: string;
  label: string;
  amount: string;
  note: string;
};

export const prizes = {
  headline: "ENTRY FEES",
  disclaimer: "Prize details will be announced on event day. Registration fees are below.",
  tiers: [
    { id: "solo", label: "SINGLE / DUO", amount: "₹100", note: "1 or 2 members" },
    { id: "team4", label: "TEAM OF 4", amount: "₹200", note: "Per team" },
    { id: "win", label: "WINNERS", amount: "ON SITE", note: "Prizes announced on the day" },
    { id: "cert", label: "EVERY TEAM", amount: "CERTS", note: "Participation recognition" },
  ] satisfies PrizeTier[],
};
