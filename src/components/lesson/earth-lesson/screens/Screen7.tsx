import React, { useState, useEffect } from "react";
import { ScreenWrap, BottomActions, AudioBtn, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";

export function Screen7({ onNext }: ScreenProps) {
  const [tick, setTick] = useState(0);
  const [aurora, setAurora] = useState(false);
  const [typed, setTyped] = useState(false);
  const txt =
    "¡El núcleo de metal crea un escudo invisible que nos protege del Sol! También crea las hermosas Auroras Boreales en los polos.";
  
  useEffect(() => {
    const t1 = setInterval(() => setTick((t) => t + 1), 180);
    const t2 = setInterval(() => setAurora((a) => !a), 2500);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, []);
  
  const particles = Array.from({ length: 5 }, (_, i) => {
    const prog = ((tick * 4 + i * 55) % 220) / 220;
    const x = 60 + prog * 145;
    const y = 84 + i * 8 - 16;
    const deflected = prog > 0.72;
    const dy = deflected ? y - (prog - 0.72) * 90 : y;
    return { i, x, y: dy, op: deflected ? Math.max(0, 1 - (prog - 0.72) * 4) : 0.88 };
  });
  
  return (
    <ScreenWrap>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff" }}>🛡️ El Escudo Invisible</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flex: 1, alignItems: "center" }}>
        <svg width="310" height="200" viewBox="0 0 310 200">
          <defs>
            <radialGradient id="eg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#74b9f8" />
              <stop offset="100%" stopColor="#1a6fd4" />
            </radialGradient>
          </defs>
          <circle cx="28" cy="100" r="25" fill="#ff8f00">
            <animate attributeName="r" values="23;27;23" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="28" cy="100" r="18" fill="#ffde00" />
          <circle cx="24" cy="96" r="3" fill="#bf6000" />
          <circle cx="32" cy="96" r="3" fill="#bf6000" />
          <path d="M22 106 Q28 112 34 106" stroke="#bf6000" strokeWidth="2.5" fill="none" />
          {particles.map((p) => (
            <circle key={p.i} cx={p.x} cy={p.y} r="4" fill="#ff6600" opacity={p.op} />
          ))}
          {[55, 75, 95].map((rx, i) => (
            <ellipse
              key={i}
              cx="205"
              cy="100"
              rx={rx}
              ry={rx * 0.73}
              fill="none"
              stroke="#818cf8"
              strokeWidth={1.5 - i * 0.3}
              strokeDasharray="5,4"
              opacity={0.5 - i * 0.1}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 205 100"
                to="360 205 100"
                dur={`${10 + i * 4}s`}
                repeatCount="indefinite"
              />
            </ellipse>
          ))}
          <circle cx="205" cy="100" r="42" fill="url(#eg)" />
          <ellipse cx="196" cy="93" rx="14" ry="10" fill="#1b9a73" />
          <ellipse cx="218" cy="110" rx="9" ry="7" fill="#1b9a73" />
          <circle cx="205" cy="100" r="42" fill="none" stroke="#2a1aa0" strokeWidth="4" opacity=".7" />
          <ellipse
            cx="205"
            cy="55"
            rx="22"
            ry="6"
            fill="#00ff88"
            opacity={aurora ? 0.72 : 0.12}
            style={{ transition: "opacity 1.5s" }}
          />
          <ellipse
            cx="205"
            cy="145"
            rx="22"
            ry="6"
            fill="#cc44ff"
            opacity={aurora ? 0.62 : 0.1}
            style={{ transition: "opacity 1.5s" }}
          />
          {aurora && (
            <>
              <ellipse cx="205" cy="55" rx="30" ry="10" fill="#00ff88" opacity=".22" />
              <ellipse cx="205" cy="145" rx="30" ry="10" fill="#cc44ff" opacity=".18" />
            </>
          )}
          <text x="205" y="182" textAnchor="middle" fontSize="9" fill="#818cf8">
            Campo Magnético 🧲
          </text>
          <text x="205" y="44" textAnchor="middle" fontSize="8" fill="#00ff88">
            Aurora Boreal 🌌
          </text>
        </svg>
      </div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
        {[
          ["🟠", "Rayos del Sol", "#fb923c"],
          ["🔵", "Escudo Magnético", "#818cf8"],
          ["🟢", "Aurora Boreal", "#4ade80"],
        ].map(([e, t, c]) => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 5, color: c, fontWeight: 700, fontSize: 13 }}>
            <span>{e}</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <TypewriterDialog text={txt} onComplete={() => setTyped(true)} />
      </div>
      <BottomActions>
        <AudioBtn text={txt} />
        <NextBtn onClick={onNext} disabled={!typed} />
      </BottomActions>
    </ScreenWrap>
  );
}
