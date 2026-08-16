/**
 * Single swap-point for visual / audio files.
 * Replace a file in /public/assets and keep the key, or change the path here.
 */
export const assets = {
  images: {
    heroCity: "/assets/images/backgrounds/hero-city.png",
    universePastel: "/assets/images/backgrounds/universe-pastel.png",
    universeNoir: "/assets/images/backgrounds/universe-noir.png",
    universeNeon: "/assets/images/backgrounds/universe-neon.png",
    hudSpace: "/assets/images/backgrounds/hud-space.png",
    eventCultural: "/assets/images/backgrounds/event-cultural.png",
    eventGaming: "/assets/images/backgrounds/event-gaming.png",
    eventHack: "/assets/images/backgrounds/event-hack.png",
    eventFun: "/assets/images/backgrounds/event-fun.png",
    eventDesign: "/assets/images/backgrounds/event-design.png",
    prizeVault: "/assets/images/backgrounds/prize-vault.png",
    festCampus: "/assets/images/backgrounds/fest-campus.png",
    inauguration: "/assets/images/backgrounds/inauguration-hall.png",
    foodCourt: "/assets/images/backgrounds/food-court.png",
    nightHunt: "/assets/images/backgrounds/night-hunt.png",
    dossierRoom: "/assets/images/backgrounds/dossier-room.png",
    campusAerial: "/assets/images/backgrounds/campus-aerial.png",
    intakeGate: "/assets/images/backgrounds/intake-gate.png",
    duskSkyline: "/assets/images/backgrounds/dusk-skyline.png",
    rooftopFigure: "/assets/images/characters/rooftop-figure.png",
    paper: "/assets/images/textures/paper-texture.png",
    ink: "/assets/images/textures/ink-splatter.png",
    portal: "/assets/images/textures/portal-rift.png",
    webShooter: "/assets/images/textures/web-shooter-cutout.png",
    webShooterRaw: "/assets/images/textures/web-shooter.png",
    webThreads: "/assets/images/textures/web-threads.png",
    thwipBurst: "/assets/images/textures/thwip-burst.png",
    webShotCity: "/assets/images/backgrounds/web-shot-city.png",
    halftone: "/assets/images/textures/halftone.svg",
    motionLines: "/assets/images/textures/motion-lines.svg",
  },
  videos: {
    cityLoop: "/assets/videos/city-loop.mp4",
  },
  audio: {
    click: "/assets/audio/click.mp3",
    pop: "/assets/audio/pop.mp3",
    whoosh: "/assets/audio/whoosh.mp3",
    ambient: "/assets/audio/ambient.mp3",
  },
} as const;
