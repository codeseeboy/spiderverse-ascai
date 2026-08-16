import { assets } from "@/content/assets";

type Sfx = "click" | "pop" | "whoosh" | "thwip";

export class VerseAudio {
  enabled = true;
  private ctx: AudioContext | null = null;
  private ambient: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private files: Partial<Record<Sfx, HTMLAudioElement>> = {};

  constructor() {
    if (typeof window === "undefined") return;
    this.files.click = new Audio(assets.audio.click);
    this.files.pop = new Audio(assets.audio.pop);
    this.files.whoosh = new Audio(assets.audio.whoosh);
    Object.values(this.files).forEach((a) => {
      a.preload = "auto";
      a.volume = 0.28;
    });
  }

  private async ensure() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
    return this.ctx;
  }

  async setEnabled(on: boolean) {
    this.enabled = on;
    if (!on) {
      this.stopAmbient();
      return;
    }
    await this.ensure();
    this.startAmbient();
  }

  play(name: Sfx) {
    if (!this.enabled) return;
    const file = this.files[name];
    if (file && file.src && file.duration > 0.05) {
      const node = file.cloneNode(true) as HTMLAudioElement;
      node.volume = 0.28;
      void node.play().catch(() => this.synth(name));
      return;
    }
    this.synth(name);
  }

  private async synth(name: Sfx) {
    const ctx = await this.ensure();
    const t = ctx.currentTime;
    if (name === "thwip" || name === "whoosh") {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      const f = ctx.createBiquadFilter();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(420, t);
      osc.frequency.exponentialRampToValueAtTime(70, t + 0.22);
      f.type = "bandpass";
      f.frequency.value = 900;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
      osc.connect(f).connect(g).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    } else {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = name === "pop" ? 180 : 880;
      g.gain.setValueAtTime(0.08, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
      osc.connect(g).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.09);
    }
  }

  private async startAmbient() {
    const ctx = await this.ensure();
    if (this.ambient) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    const f = ctx.createBiquadFilter();
    osc.type = "triangle";
    osc.frequency.value = 48;
    f.type = "lowpass";
    f.frequency.value = 140;
    g.gain.value = 0.035;
    osc.connect(f).connect(g).connect(ctx.destination);
    osc.start();
    this.ambient = osc;
    this.ambientGain = g;
  }

  private stopAmbient() {
    this.ambient?.stop();
    this.ambient = null;
    this.ambientGain = null;
  }
}

export const verseAudio = typeof window !== "undefined" ? new VerseAudio() : null;
