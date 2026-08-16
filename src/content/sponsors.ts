export type SponsorSlot = {
  id: string;
  name: string;
  tier: "TITLE" | "UNIVERSE" | "WEB";
  logo: string;
  url: string;
  placeholder: boolean;
};

export const sponsors: SponsorSlot[] = [
  { id: "s1", name: "TITLE SPONSOR TBA", tier: "TITLE", logo: "", url: "#", placeholder: true },
  { id: "s2", name: "UNIVERSE PARTNER TBA", tier: "UNIVERSE", logo: "", url: "#", placeholder: true },
  { id: "s3", name: "UNIVERSE PARTNER TBA", tier: "UNIVERSE", logo: "", url: "#", placeholder: true },
  { id: "s4", name: "WEB PARTNER TBA", tier: "WEB", logo: "", url: "#", placeholder: true },
  { id: "s5", name: "WEB PARTNER TBA", tier: "WEB", logo: "", url: "#", placeholder: true },
  { id: "s6", name: "WEB PARTNER TBA", tier: "WEB", logo: "", url: "#", placeholder: true },
];
