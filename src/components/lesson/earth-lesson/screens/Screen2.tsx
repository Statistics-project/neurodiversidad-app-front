import React, { useState } from "react";
import { ScreenWrap, BottomActions, AudioBtn, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { EarthSVG } from "../icons/EarthSVG";
import { sfx } from "../utils/audio";

interface Splash {
  id: number;
  x: number;
  y: number;
}

export function Screen2({ onNext }: ScreenProps) {
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const [hasTapped, setHasTapped] = useState(false);
  const txt = "¡El 71 por ciento de la Tierra es agua! Por eso se ve tan azul desde el espacio. ¡Mares y océanos por todos lados!";
  
  const doTap = (e: React.MouseEvent<HTMLDivElement>) => {
    sfx.bubble();
    setHasTapped(true);
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setSplashes((s) => [...s, { id, x: e.clientX - r.left - 12, y: e.clientY - r.top - 12 }]);
    setTimeout(() => setSplashes((s) => s.filter((x) => x.id !== id)), 900);
  };

  return (
    <ScreenWrap>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: 25, fontWeight: 900, color: "#fff" }}>💧 El Planeta Azul</h2>
        <p style={{ color: "#7dd3fc", fontSize: 13 }}>👆 ¡Toca la Tierra para sentir el agua!</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flex: 1 }}>
        <div className="fa" style={{ cursor: "pointer", position: "relative" }} onClick={doTap}>
          <EarthSVG size={162} />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {splashes.map((s) => (
              <div
                key={s.id}
                className="pi"
                style={{ position: "absolute", left: `${s.x}px`, top: `${s.y}px`, fontSize: 22 }}
              >
                💧
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <svg width="112" height="112" viewBox="0 0 42 42">
            <circle
              cx="21"
              cy="21"
              r="15.9"
              fill="transparent"
              stroke="#3b82f6"
              strokeWidth="10"
              strokeDasharray="71 29"
              strokeDashoffset="25"
            />
            <circle
              cx="21"
              cy="21"
              r="15.9"
              fill="transparent"
              stroke="#16a34a"
              strokeWidth="10"
              strokeDasharray="29 71"
              strokeDashoffset="-46"
            />
            <text x="21" y="25" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
              🌍
            </text>
          </svg>
          {[
            ["🔵", "71% Agua", "#60a5fa"],
            ["🟢", "29% Tierra", "#4ade80"],
          ].map(([e, t, c]) => (
            <div
              key={t}
              style={{ display: "flex", alignItems: "center", gap: 6, color: c, fontWeight: 700, fontSize: 14 }}
            >
              <span>{e}</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <TypewriterDialog text={txt} />
      </div>
      <BottomActions>
        <AudioBtn text={txt} />
        <NextBtn onClick={onNext} disabled={!hasTapped} />
      </BottomActions>
    </ScreenWrap>
  );
}
