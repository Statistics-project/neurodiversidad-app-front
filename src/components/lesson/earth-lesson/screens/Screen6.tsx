import React, { useState } from "react";
import { ScreenWrap, BottomActions, AudioBtn, NextBtn, TypewriterDialog } from "../components/UI";
import type { ScreenProps } from "../components/UI";
import { sfx } from "../utils/audio";

export function Screen6({ onNext }: ScreenProps) {
  const [collided, setCollided] = useState(false);
  const [mtnH, setMtnH] = useState(0);
  const txt =
    "El suelo que pisas se mueve muy lento. ¡Está roto en piezas enormes! Cuando chocan, nacen las montañas más altas del mundo.";
  
  const doCollide = () => {
    sfx.boom();
    setCollided(true);
    let h = 0;
    const iv = setInterval(() => {
      h += 2.5;
      setMtnH(h);
      if (h >= 65) clearInterval(iv);
    }, 40);
  };
  
  const w = mtnH * 0.85;
  const sw = mtnH * 0.28;
  const sy = -(mtnH - mtnH * 0.28);
  
  return (
    <ScreenWrap>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: 23, fontWeight: 900, color: "#fff" }}>🏔️ El Rompecabezas del Suelo</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flex: 1, alignItems: "center" }}>
        <svg width="300" height="175" viewBox="0 0 300 175">
          <rect width="300" height="110" fill="#1e3a5f" rx="10" opacity=".6" />
          <rect y="110" width="300" height="65" fill="#5c3d1e" />
          <rect y="110" width="300" height="14" fill="#7c5c2e" />
          <line
            x1="95"
            y1="88"
            x2="95"
            y2="175"
            stroke={collided ? "#ff6b35" : "#c8a06e"}
            strokeWidth="3"
            strokeDasharray="5,3"
            opacity=".8"
          />
          <line
            x1="195"
            y1="88"
            x2="195"
            y2="175"
            stroke={collided ? "#ff6b35" : "#c8a06e"}
            strokeWidth="3"
            strokeDasharray="5,3"
            opacity=".8"
          />
          {[
            ["Placa A", 47],
            ["Placa B", 145],
            ["Placa C", 247],
          ].map(([t, x]) => (
            <g key={x as number}>
              <rect x={Number(x) - 35} y="120" width="70" height="18" rx="4" fill="#3d2010" />
              <text x={Number(x)} y="132" textAnchor="middle" fontSize="9" fill="#e8c896" fontWeight="bold">
                {t}
              </text>
            </g>
          ))}
          {!collided && (
            <>
              <text x="58" y="106" fontSize="22" fill="white" opacity=".8" textAnchor="middle">
                →
              </text>
              <text x="238" y="106" fontSize="22" fill="white" opacity=".8" textAnchor="middle">
                ←
              </text>
            </>
          )}
          {mtnH > 0 && (
            <g transform="translate(145,110)">
              <polygon points={`${-w},0 0,${-mtnH} ${w},0`} fill="#6b7280" />
              {mtnH > 25 && <polygon points={`${-sw},${sy} 0,${-mtnH} ${sw},${sy}`} fill="white" opacity=".9" />}
            </g>
          )}
          {collided && mtnH >= 65 && (
            <text x="148" y="32" textAnchor="middle" fontSize="10" fill="#fbbf24" fontWeight="bold">
              🏔️ ¡Monte Everest!
            </text>
          )}
          {collided && (
            <>
              <text x="90" y="78" fontSize="20" textAnchor="middle">
                💥
              </text>
              <text x="210" y="78" fontSize="20" textAnchor="middle">
                💥
              </text>
            </>
          )}
        </svg>
      </div>
      {!collided ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            className="pu"
            onClick={doCollide}
            style={{
              background: "linear-gradient(135deg,#ea580c,#dc2626)",
              color: "#fff",
              fontWeight: 900,
              fontSize: 18,
              padding: "13px 26px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 5px 0 #991b1b",
            }}
          >
            💥 ¡Hacer Chocar las Placas!
          </button>
        </div>
      ) : (
        <div className="bi" style={{ textAlign: "center", marginBottom: 10 }}>
          <p style={{ color: "#fbbf24", fontWeight: 900, fontSize: 17 }}>🏔️ ¡Creció una montaña!</p>
        </div>
      )}
      <div style={{ marginTop: 10 }}>
        <TypewriterDialog text={txt} />
      </div>
      <BottomActions>
        <AudioBtn text={txt} />
        <NextBtn onClick={onNext} disabled={!collided} />
      </BottomActions>
    </ScreenWrap>
  );
}
