let audioCtx: AudioContext | null = null;

const ga = (): AudioContext | null => {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {}
  }
  return audioCtx;
};

export const tone = (f: number, d: number, t = "sine", v = 0.22) => {
  const c = ga();
  if (!c) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.connect(g);
  g.connect(c.destination);
  o.frequency.value = f;
  o.type = t as OscillatorType;
  g.gain.setValueAtTime(v, c.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + d);
  o.start();
  o.stop(c.currentTime + d);
};

export const sfx = {
  click: () => tone(440, 0.08, "sine", 0.12),
  type: () => tone(600 + Math.random() * 200, 0.03, "sine", 0.05),
  success: () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => tone(f, 0.25), i * 80)),
  error: () => [330, 280, 250].forEach((f, i) => setTimeout(() => tone(f, 0.28, "sawtooth"), i * 100)),
  bubble: () => tone(500 + Math.random() * 300, 0.12, "sine", 0.18),
  boom: () => {
    tone(80, 0.5, "sawtooth", 0.38);
    setTimeout(() => tone(180, 0.3), 100);
  },
  win: () => [523, 659, 784, 880, 1047, 1319].forEach((f, i) => setTimeout(() => tone(f, 0.3), i * 90)),
};

export const speak = (txt: string | undefined) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(txt);
  u.lang = "es-ES";
  u.rate = 0.82;
  u.pitch = 1.1;
  const v = window.speechSynthesis.getVoices().find((x) => x.lang.startsWith("es"));
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
};
